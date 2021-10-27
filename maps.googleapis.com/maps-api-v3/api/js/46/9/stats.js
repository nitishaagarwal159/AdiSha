google.maps.__gjsload__('stats', function(_) {
    var FEa = function(a) {
            _.F(this, a, 2)
        },
        GEa = function(a) {
            _.F(this, a, 6)
        },
        IH = function(a, b, c, d) {
            var e = {};
            e.host = document.location && document.location.host || window.location.host;
            e.v = a.split(".")[1] || a;
            e.fv = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        IEa = function(a) {
            var b = document;
            this.j = HEa;
            this.i = a + "/maps/gen_204";
            this.g = b
        },
        JH = function(a, b, c) {
            var d = [];
            _.kb(a, function(e, f) {
                d.push(f + b + e)
            });
            return d.join(c)
        },
        JEa = function(a) {
            var b = {};
            _.kb(a, function(c, d) {
                b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g,
                    "|")
            });
            return JH(b, ":", ",")
        },
        KEa = function(a, b, c, d) {
            var e = _.Pd(_.ee, 0, 1);
            this.N = a;
            this.T = b;
            this.H = e;
            this.j = c;
            this.o = d;
            this.g = new _.AA;
            this.O = Date.now()
        },
        KH = function(a, b, c, d, e) {
            this.T = a;
            this.W = b;
            this.O = c;
            this.H = d;
            this.N = e;
            this.i = {};
            this.g = []
        },
        LEa = function(a, b, c) {
            var d = _.cea;
            this.j = a;
            _.L.bind(this.j, "set_at", this, this.o);
            _.L.bind(this.j, "insert_at", this, this.o);
            this.H = b;
            this.O = d;
            this.N = c;
            this.i = 0;
            this.g = {};
            this.o()
        },
        NEa = function(a, b, c, d, e) {
            var f = _.Pd(_.ee, 23, 500);
            var g = _.Pd(_.ee, 22, 2);
            this.N = a;
            this.O =
                b;
            this.$ = f;
            this.W = g;
            this.H = c;
            this.j = d;
            this.o = e;
            this.i = new _.AA;
            this.g = 0;
            this.T = Date.now();
            MEa(this)
        },
        MEa = function(a) {
            window.setTimeout(function() {
                OEa(a);
                MEa(a)
            }, Math.min(a.$ * Math.pow(a.W, a.g), 2147483647))
        },
        OEa = function(a) {
            var b = IH(a.O, a.H, a.j, a.o);
            b.t = a.g + "-" + (Date.now() - a.T);
            a.i.forEach(function(c, d) {
                c = c();
                0 < c && (b[d] = Number(c.toFixed(2)) + (_.Dga() ? "-if" : ""))
            });
            a.N.Xk({
                ev: "api_snap"
            }, b);
            ++a.g
        },
        LH = function() {
            this.i = _.H(_.ee, 6);
            this.j = _.H(_.ee, 16);
            if (_.lh[35]) {
                var a = _.de(_.ee);
                a = _.H(a, 11)
            } else a = _.Jq;
            this.g = new IEa(a);
            (a = _.Pi) && new LEa(a, (0, _.La)(this.g.Xk, this.g), !!this.i);
            this.O = _.H(_.le(_.ee), 1);
            this.$ = {};
            this.W = {};
            this.T = {};
            this.N = _.Pd(_.ee, 0, 1);
            _.mg && (this.ka = new NEa(this.g, this.O, this.N, this.i, this.j));
            a = this.H = new GEa;
            var b = _.H(_.le(_.ee), 1);
            a.ha[1] = b;
            this.i && (this.H.ha[2] = this.i);
            this.j && (this.H.ha[3] = this.j)
        };
    _.D(FEa, _.E);
    var MH;
    _.D(GEa, _.E);
    var HEa = Math.round(1E15 * Math.random()).toString(36);
    IEa.prototype.Xk = function(a, b) {
        b = b || {};
        var c = _.Lk().toString(36);
        b.src = "apiv3";
        b.token = this.j;
        b.ts = c.substr(c.length - 6);
        a.cad = JEa(b);
        a = JH(a, "=", "&");
        a = this.i + "?target=api&" + a;
        _.Nc(new _.Kc(this.g), "IMG").src = a;
        (b = _.C.__gm_captureCSI) && b(a)
    };
    KEa.prototype.i = function(a, b) {
        b = void 0 !== b ? b : 1;
        0 === this.g.size && window.setTimeout((0, _.La)(function() {
            var c = IH(this.T, this.H, this.j, this.o);
            c.t = Date.now() - this.O;
            for (var d = this.g, e = {}, f = _.A(_.u(d, "keys").call(d)), g = f.next(); !g.done; g = f.next()) g = g.value, e[g] = d.get(g);
            _.mb(c, e);
            this.g.clear();
            this.N.Xk({
                ev: "api_maprft"
            }, c)
        }, this), 500);
        b = this.g.get(a, 0) + b;
        this.g.set(a, b)
    };
    KH.prototype.j = function(a) {
        this.i[a] || (this.i[a] = !0, this.g.push(a), 2 > this.g.length && _.Ts(this, this.o, 500))
    };
    KH.prototype.o = function() {
        for (var a = IH(this.W, this.O, this.H, this.N), b = 0, c; c = this.g[b]; ++b) a[c] = "1";
        a.hybrid = +_.tq();
        this.g.length = 0;
        this.T.Xk({
            ev: "api_mapft"
        }, a)
    };
    LEa.prototype.o = function() {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.Ky;
            a = a.timestamp - this.O;
            ++this.i;
            this.g[b] || (this.g[b] = 0);
            ++this.g[b];
            if (20 <= this.i && !(this.i % 5)) {
                var c = {
                    s: b
                };
                c.sr = this.g[b];
                c.tr = this.i;
                c.te = a;
                c.hc = this.N ? "1" : "0";
                this.H({
                    ev: "api_services"
                }, c)
            }
        }
    };
    NEa.prototype.register = function(a, b) {
        this.i.set(a, b)
    };
    LH.prototype.oa = function(a) {
        a = _.rf(a);
        var b = this.$[a];
        b || (b = new KH(this.g, this.O, this.N, this.i, this.j), this.$[a] = b);
        return b
    };
    LH.prototype.na = function(a) {
        a = _.rf(a);
        this.W[a] || (this.W[a] = new KEa(this.g, this.O, this.i, this.j));
        return this.W[a]
    };
    LH.prototype.o = function(a) {
        if (this.ka) {
            this.T[a] || (this.T[a] = new _.DA, this.ka.register(a, function() {
                return b.Kc()
            }));
            var b = this.T[a];
            return b
        }
    };
    LH.prototype.ta = function(a) {
        if (_.mg) {
            var b = _.Nfa(this.H),
                c = Math.floor(Date.now() / 1E3);
            b.ha[0] = c;
            c = new FEa(_.I(b, 5));
            c.ha[0] = Math.round(1 / this.N);
            c.ha[1] = a;
            a = this.g;
            c = {
                ev: "api_map_style"
            };
            var d = new _.bh;
            MH || (MH = {
                va: "issssm",
                Fa: ["is"]
            });
            var e = MH;
            b = d.g(b.kc(), e);
            c.pb = encodeURIComponent(b).replace(/%20/g, "+");
            b = JH(c, "=", "&");
            _.Nc(new _.Kc(a.g), "IMG").src = a.i + "?target=api&" + b
        }
    };
    _.jf("stats", new LH);
});