(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        518: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(16),
                o = r(0),
                c = (r(34), r(13)),
                d = r(10),
                l = r.n(d),
                h = r(5),
                m = r(2),
                f = r(172),
                C = r(139),
                w = function() {
                    return Promise.all([r.e(3), r.e(17)]).then(r.bind(null, 586))
                },
                k = function t() {
                    Object(o.a)(this, t), this.isLoading = !1
                },
                v = c.componentFactory.create({
                    props: {
                        site: l.a.ofType().required,
                        isEnabledStoreApp: l.a.ofType().default(!1),
                        isRedirectOnShoppingCartPage: l.a.ofType().default(!1)
                    },
                    data: function() {
                        return new k
                    },
                    mounted: function() {
                        this.$root.$on("addToCart", this.onHandleAddCart)
                    },
                    beforeDestroy: function() {
                        this.$root.$off("addToCart", this.onHandleAddCart)
                    },
                    computed: {
                        countCartItems: function() {
                            return this.$store.getters["store/getCountCartItems"](this.$cookies) || 0
                        },
                        cartItems: function() {
                            return this.$store.getters["store/getCartItemsProducts"]
                        },
                        cartBundles: function() {
                            return this.$store.getters["store/getCartItemsBundles"]
                        },
                        shoppingCartType: function() {
                            var t;
                            return (null === (t = this.site.headerSettings) || void 0 === t ? void 0 : t.shoppingCartType) || m.Ic.DropDown
                        }
                    },
                    methods: {
                        onShowCart: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var r, n, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, t.isEnabledStoreApp) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (t.isLoading = !0, !Object(h.O)(null === (r = t.site) || void 0 === r ? void 0 : r.storeAppSettings)) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 7, t.$api.get(new m.Hb({
                                                id: null === (n = t.site) || void 0 === n ? void 0 : n.id,
                                                fields: f.a.join(",")
                                            }));
                                        case 7:
                                            o = e.sent, Object(h.O)(o) || (t.site.storeAppSettings = o.storeAppSettings, t.site.isStripeEnabled = o.isStripeEnabled, t.site.isPayPalEnabled = o.isPayPalEnabled, t.site.stripeAccountId = o.stripeAccountId, t.site.payPalClientId = o.payPalClientId, t.$store.commit("MERGE_SITE", o));
                                        case 9:
                                            return e.next = 11, t.$store.dispatch("store/getCart");
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(0), console.log(e.t0);
                                        case 16:
                                            return e.prev = 16, t.isLoading = !1, e.finish(16);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13, 16, 19]
                                ])
                            })))()
                        },
                        onHandleAddCart: function() {
                            try {
                                var t = this.$refs.kmb_extras_drop_down_cart;
                                t && (null == t || t.onToggleDropDown())
                            } catch (t) {
                                console.log(t)
                            }
                        },
                        goToShoppingCartPage: function() {
                            try {
                                this.isRedirectOnShoppingCartPage && (this.$root.$emit("closeMenu"), this.$router.push("/store/shopping-cart"))
                            } catch (t) {
                                console.log(t)
                            }
                        },
                        renderCartItemsList: function(t) {
                            return this.isLoading ? t("div", {
                                class: "kmb-shopping-cart-loadding-wrapper w-full kmb-site-loading-wrapper text-center"
                            }, [t(C.z, {
                                class: "kmb-simple-loading kmb-blue-loading",
                                attrs: {
                                    isLoading: this.isLoading
                                }
                            })]) : Object(h.M)(this.cartItems) && Object(h.M)(this.cartBundles) ? t("div", {
                                class: "kmb-empty-carts"
                            }, [t("div", {
                                class: "kmb-shopping-cart-is-empty-image kmb-widget-el-group"
                            }, [t("img", {
                                attrs: {
                                    src: "".concat("https://img1.hocoos.com", "/static/img/wizard/illustration/category-illustration-sell.svg"),
                                    alt: "category-illustration-sell",
                                    width: 126,
                                    height: 126
                                }
                            })]), t("div", {
                                class: "kmb-shopping-cart-is-empty-message"
                            }, ["No products in the cart"])]) : t("div", {
                                class: "kmb-shopping-cart-items-wrap"
                            }, [t(w, {
                                props: {
                                    site: this.site,
                                    shoppingCartType: this.shoppingCartType,
                                    cartItems: this.cartItems,
                                    cartBundles: this.cartBundles
                                }
                            })])
                        },
                        renderCartIcon: function(t) {
                            var e = this;
                            return t("span", {
                                class: "kmb-extras-shopping-cart-item-icon",
                                on: {
                                    click: function() {
                                        return e.goToShoppingCartPage()
                                    }
                                }
                            }, [t("i", {
                                class: "kmb-site-icon-cart-o"
                            }), t("span", {
                                class: "kmb-total-cart-items -mr-4 -mb-4"
                            }, [this.countCartItems])])
                        }
                    },
                    render: function(t) {
                        var e = this;
                        return this.isRedirectOnShoppingCartPage ? this.renderCartIcon(t) : t(C.o, {
                            on: {
                                show: Object(n.a)(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.onShowCart();
                                            case 2:
                                                return t.abrupt("return", t.sent);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            },
                            ref: "kmb_extras_drop_down_cart"
                        }, [t("span", {
                            slot: "dropdownMenuHeader",
                            class: "kmb-extras-item-icon"
                        }, [this.renderCartIcon(t)]), t("div", {
                            class: "kmb-extras-shopping-cart-content"
                        }, [this.renderCartItemsList(t)])])
                    }
                });
            e.default = v
        }
    }
]);