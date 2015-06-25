(function() {
    var h, aa = aa || {}, l = this, m = function(a) {
        return void 0 !== a
    }, ba = function() {
    }, ca = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != 
                typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }, da = function(a) {
        return null != a
    }, ea = function(a) {
        return "array" == ca(a)
    }, fa = function(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, n = function(a) {
        return "string" == typeof a
    }, ga = function(a) {
        return "boolean" == typeof a
    }, ha = function(a) {
        return "number" == typeof a
    }, p = function(a) {
        return "function" == ca(a)
    }, ia = function(a) {
        var b = 
        typeof a;
        return "object" == b && null != a || "function" == b
    };
    Math.random();
    var ja = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ka = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, q = function(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return q.apply(null, arguments)
    }, la = function(a, b) {
        var c = 
        Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, r = function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }, ma = Date.now || function() {
        return +new Date
    }, na = function(a, b) {
        var c = a.split("."), d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && m(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }, t = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.superClass_ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return q.apply(null, c)
        }
        return q(this, a)
    };
    var u = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, u);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    t(u, Error);
    u.prototype.name = "CustomError";
    var oa;
    var pa = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }, qa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, ya = function(a) {
        if (!ra.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(sa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ta, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(ua, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(va, "&quot;"));
        -1 != a.indexOf("'") && 
        (a = a.replace(wa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(xa, "&#0;"));
        return a
    }, sa = /&/g, ta = /</g, ua = />/g, va = /"/g, wa = /'/g, xa = /\x00/g, ra = /[\x00&<>"']/, za = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    Math.random();
    var Aa = function(a, b) {
        b.unshift(a);
        u.call(this, pa.apply(null, b));
        b.shift()
    };
    t(Aa, u);
    Aa.prototype.name = "AssertionError";
    var Ba = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c)
            var e = e + (": " + c), f = d;
        else
            a && (e += ": " + a, f = b);
        throw new Aa("" + e, f || []);
    }, v = function(a, b, c) {
        a || Ba("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ca = function(a, b) {
        throw new Aa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, Da = function(a, b, c) {
        n(a) || Ba("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ea = function(a, b, c) {
        p(a) || Ba("Expected function but got %s: %s.", [ca(a), 
            a], b, Array.prototype.slice.call(arguments, 2))
    }, Fa = function(a, b, c) {
        ia(a) || Ba("Expected object but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ga = function(a, b, c) {
        ea(a) || Ba("Expected array but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
    var w = Array.prototype, Ha = w.indexOf ? function(a, b, c) {
        v(null != a.length);
        return w.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (n(a))
            return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }, Ia = w.forEach ? function(a, b, c) {
        v(null != a.length);
        w.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }, Ja = w.filter ? function(a, b, c) {
        v(null != a.length);
        return w.filter.call(a, 
        b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = n(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in g) {
                var C = g[k];
                b.call(c, C, k, a) && (e[f++] = C)
            }
        return e
    }, Ka = w.map ? function(a, b, c) {
        v(null != a.length);
        return w.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, La = w.some ? function(a, b, c) {
        v(null != a.length);
        return w.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, 
            a))
                return !0;
        return !1
    }, Oa = function(a) {
        var b = Ma(a, Na, void 0);
        return 0 > b ? null : n(a) ? a.charAt(b) : a[b]
    }, Ma = function(a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }, Pa = function(a, b) {
        return 0 <= Ha(a, b)
    }, Ra = function(a, b) {
        var c = Ha(a, b), d;
        (d = 0 <= c) && Qa(a, c);
        return d
    }, Qa = function(a, b) {
        v(null != a.length);
        w.splice.call(a, b, 1)
    }, Sa = function(a, b) {
        var c = Ma(a, b, void 0);
        return 0 <= c ? (Qa(a, c), !0) : !1
    }, Ta = function(a) {
        return w.concat.apply(w, arguments)
    }, Ua = function(a) {
        var b = 
        a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }, Xa = function(a, b, c, d) {
        v(null != a.length);
        w.splice.apply(a, Va(arguments, 1))
    }, Va = function(a, b, c) {
        v(null != a.length);
        return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
    };
    var Ya = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return n(a) && a.match(/\S+/g) || []
    }, Za = function(a, b) {
        return a.classList ? a.classList.contains(b) : Pa(Ya(a), b)
    }, $a = function(a, b) {
        a.classList ? a.classList.add(b) : Za(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }, ab = function(a, b) {
        a.classList ? a.classList.remove(b) : Za(a, b) && (a.className = Ja(Ya(a), function(a) {
            return a != b
        }).join(" "))
    };
    var bb = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }, cb = function(a) {
        var b = {}, c;
        for (c in a)
            da.call(void 0, a[c]) && (b[c] = a[c]);
        return b
    }, db = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }, eb = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }, fb = function(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }, gb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), hb = function(a, b) {
        for (var c, d, e = 1; e < 
        arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < gb.length; f++)
                c = gb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, ib = function(a) {
        var b = arguments.length;
        if (1 == b && ea(arguments[0]))
            return ib.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };
    ib("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var kb = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = jb
    };
    kb.prototype.getDirection = function() {
        return 1
    };
    kb.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
    };
    var jb = {};
    var mb = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = lb;
        this.dir_ = null
    };
    mb.prototype.getDirection = function() {
        return this.dir_
    };
    mb.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
    };
    var lb = {};
    var nb;
    a: {
        var ob = l.navigator;
        if (ob) {
            var pb = ob.userAgent;
            if (pb) {
                nb = pb;
                break a
            }
        }
        nb = ""
    }
    var x = function(a) {
        return -1 != nb.indexOf(a)
    };
    var qb = function() {
        return x("Opera") || x("OPR")
    }, rb = function() {
        return x("Edge") || x("Trident") || x("MSIE")
    }, sb = function() {
        return (x("Chrome") || x("CriOS")) && !qb() && !rb()
    };
    var tb = function() {
        return x("Edge")
    };
    var ub = qb(), y = rb(), vb = x("Gecko") && !(-1 != nb.toLowerCase().indexOf("webkit") && !tb()) && !(x("Trident") || x("MSIE")) && !tb(), z = -1 != nb.toLowerCase().indexOf("webkit") && !tb(), wb = z && x("Mobile"), xb = x("Macintosh"), yb = function() {
        var a = nb;
        if (vb)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (y && tb())
            return /Edge\/([\d\.]+)/.exec(a);
        if (y)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (z)
            return /WebKit\/(\S+)/.exec(a)
    }, zb = function() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }, Ab = function() {
        if (ub && l.opera) {
            var a = l.opera.version;
            return p(a) ? a() : a
        }
        var a = "", b = yb();
        b && (a = b ? b[1] : "");
        return y && !tb() && (b = zb(), b > parseFloat(a)) ? String(b) : a
    }(), Bb = {}, A = function(a) {
        var b;
        if (!(b = Bb[a])) {
            b = 0;
            for (var c = qa(String(Ab)).split("."), d = qa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", k = d[f] || "", C = RegExp("(\\d*)(\\D*)", "g"), Wa = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var cc = C.exec(g) || ["", "", ""], dc = Wa.exec(k) || ["", "", ""];
                    if (0 == cc[0].length && 0 == dc[0].length)
                        break;
                    b = za(0 == cc[1].length ? 0 : parseInt(cc[1], 10), 0 == dc[1].length ? 
                    0 : parseInt(dc[1], 10)) || za(0 == cc[2].length, 0 == dc[2].length) || za(cc[2], dc[2])
                } while (0 == b)
            }
            b = Bb[a] = 0 <= b
        }
        return b
    }, Cb = l.document, Db = zb(), Eb = !Cb || !y || !Db && tb() ? void 0 : Db || ("CSS1Compat" == Cb.compatMode ? parseInt(Ab, 10) : 5);
    var Fb = !y || y && (tb() || 9 <= Eb), Gb = !vb && !y || y && y && (tb() || 9 <= Eb) || vb && A("1.9.1");
    y && A("9");
    var Jb = function(a) {
        return a ? new Hb(Ib(a)) : oa || (oa = new Hb)
    }, Kb = function(a, b) {
        return n(b) ? a.getElementById(b) : b
    }, Lb = function(a, b) {
        var c, d, e, f;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a)
            return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var g = c.getElementsByClassName(a);
            return g
        }
        g = c.getElementsByTagName("*");
        if (a) {
            f = {};
            for (d = e = 0; c = g[d]; d++) {
                var k = c.className;
                "function" == typeof k.split && Pa(k.split(/\s+/), a) && (f[e++] = c)
            }
            f.length = e;
            return f
        }
        return g
    }, Nb = function(a, 
    b) {
        bb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Mb.hasOwnProperty(d) ? a.setAttribute(Mb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, Mb = {cellpadding: "cellPadding",cellspacing: "cellSpacing",colspan: "colSpan",frameborder: "frameBorder",height: "height",maxlength: "maxLength",role: "role",rowspan: "rowSpan",type: "type",usemap: "useMap",valign: "vAlign",width: "width"}, Pb = function(a, b, c) {
        function d(c) {
            c && b.appendChild(n(c) ? 
            a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !fa(f) || ia(f) && 0 < f.nodeType ? d(f) : Ia(Ob(f) ? Ua(f) : f, d)
        }
    }, Qb = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }, Rb = function(a) {
        return Gb && void 0 != a.children ? a.children : Ja(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }, Ib = function(a) {
        v(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }, Ob = function(a) {
        if (a && "number" == typeof a.length) {
            if (ia(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (p(a))
                return "function" == typeof a.item
        }
        return !1
    }, Hb = function(a) {
        this.document_ = a || l.document || document
    };
    h = Hb.prototype;
    h.getDomHelper = Jb;
    h.getElement = function(a) {
        return Kb(this.document_, a)
    };
    h.getElementsByClass = function(a, b) {
        var c = b || this.document_, d = c || document;
        return d.querySelectorAll && d.querySelector ? d.querySelectorAll("." + a) : Lb(a, c)
    };
    h.getElementByClass = function(a, b) {
        var c = b || this.document_, d = c || document, e = null;
        return (e = d.getElementsByClassName ? d.getElementsByClassName(a)[0] : d.querySelectorAll && d.querySelector ? d.querySelector("." + a) : Lb(a, c)[0]) || null
    };
    h.createDom = function(a, b, c) {
        var d = this.document_, e = arguments, f = e[0], g = e[1];
        if (!Fb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ya(g.name), '"');
            if (g.type) {
                f.push(' type="', ya(g.type), '"');
                var k = {};
                hb(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (n(g) ? f.className = g : ea(g) ? f.className = g.join(" ") : Nb(f, g));
        2 < e.length && Pb(d, f, e);
        return f
    };
    h.createElement = function(a) {
        return this.document_.createElement(a)
    };
    h.createTextNode = function(a) {
        return this.document_.createTextNode(String(a))
    };
    h.appendChild = function(a, b) {
        a.appendChild(b)
    };
    h.getChildren = Rb;
    h.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    };
    var Sb = "StopIteration" in l ? l.StopIteration : {message: "StopIteration",stack: ""}, Tb = function() {
    };
    Tb.prototype.next = function() {
        throw Sb;
    };
    Tb.prototype.__iterator__ = function() {
        return this
    };
    var Ub = function(a, b) {
        this.map_ = {};
        this.keys_ = [];
        this.version_ = this.count_ = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.addAll(a)
    };
    Ub.prototype.getValues = function() {
        Vb(this);
        for (var a = [], b = 0; b < this.keys_.length; b++)
            a.push(this.map_[this.keys_[b]]);
        return a
    };
    Ub.prototype.getKeys = function() {
        Vb(this);
        return this.keys_.concat()
    };
    Ub.prototype.containsKey = function(a) {
        return Wb(this.map_, a)
    };
    Ub.prototype.remove = function(a) {
        return Wb(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && Vb(this), !0) : !1
    };
    var Vb = function(a) {
        if (a.count_ != a.keys_.length) {
            for (var b = 0, c = 0; b < a.keys_.length; ) {
                var d = a.keys_[b];
                Wb(a.map_, d) && (a.keys_[c++] = d);
                b++
            }
            a.keys_.length = c
        }
        if (a.count_ != a.keys_.length) {
            for (var e = {}, c = b = 0; b < a.keys_.length; )
                d = a.keys_[b], Wb(e, d) || (a.keys_[c++] = d, e[d] = 1), b++;
            a.keys_.length = c
        }
    };
    h = Ub.prototype;
    h.get = function(a, b) {
        return Wb(this.map_, a) ? this.map_[a] : b
    };
    h.set = function(a, b) {
        Wb(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
        this.map_[a] = b
    };
    h.addAll = function(a) {
        var b;
        a instanceof Ub ? (b = a.getKeys(), a = a.getValues()) : (b = eb(a), a = db(a));
        for (var c = 0; c < b.length; c++)
            this.set(b[c], a[c])
    };
    h.forEach = function(a, b) {
        for (var c = this.getKeys(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() {
        return new Ub(this)
    };
    h.__iterator__ = function(a) {
        Vb(this);
        var b = 0, c = this.version_, d = this, e = new Tb;
        e.next = function() {
            if (c != d.version_)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.keys_.length)
                throw Sb;
            var e = d.keys_[b++];
            return a ? e : d.map_[e]
        };
        return e
    };
    var Wb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Xb = function(a) {
        var b = a.type;
        if (!m(b))
            return null;
        switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : null;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
            case "select-multiple":
                for (var b = [], c, d = 0; c = a.options[d]; d++)
                    c.selected && b.push(c.value);
                return b.length ? b : null;
            default:
                return m(a.value) ? a.value : null
        }
    };
    var Yb = function(a) {
        Yb[" "](a);
        return a
    };
    Yb[" "] = ba;
    var Zb = !y || y && (tb() || 9 <= Eb), $b = y && !A("9");
    !z || A("528");
    vb && A("1.9b") || y && A("8") || ub && A("9.5") || z && A("528");
    vb && !A("8") || y && A("9");
    var ac = function() {
        this.disposed_ = this.disposed_;
        this.onDisposeCallbacks_ = this.onDisposeCallbacks_
    };
    ac.prototype.disposed_ = !1;
    ac.prototype.isDisposed = function() {
        return this.disposed_
    };
    ac.prototype.dispose = function() {
        this.disposed_ || (this.disposed_ = !0, this.disposeInternal())
    };
    var bc = function(a, b) {
        a.disposed_ ? b.call(void 0) : (a.onDisposeCallbacks_ || (a.onDisposeCallbacks_ = []), a.onDisposeCallbacks_.push(m(void 0) ? q(b, void 0) : b))
    };
    ac.prototype.disposeInternal = function() {
        if (this.onDisposeCallbacks_)
            for (; this.onDisposeCallbacks_.length; )
                this.onDisposeCallbacks_.shift()()
    };
    var ec = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    var fc = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.propagationStopped_ = !1;
        this.returnValue_ = !0
    };
    fc.prototype.stopPropagation = function() {
        this.propagationStopped_ = !0
    };
    fc.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.returnValue_ = !1
    };
    var B = function(a, b) {
        fc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.event_ = this.state = null;
        a && this.init(a, b)
    };
    t(B, fc);
    B.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (vb) {
                var e;
                a: {
                    try {
                        Yb(d.nodeName);
                        e = !0;
                        break a
                    } catch (f) {
                    }
                    e = !1
                }
                e || (d = null)
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : 
        a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.event_ = a;
        a.defaultPrevented && this.preventDefault()
    };
    B.prototype.stopPropagation = function() {
        B.superClass_.stopPropagation.call(this);
        this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
    };
    B.prototype.preventDefault = function() {
        B.superClass_.preventDefault.call(this);
        var a = this.event_;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, $b)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {
            }
    };
    var gc = "closure_listenable_" + (1E6 * Math.random() | 0), hc = function(a) {
        return !(!a || !a[gc])
    }, ic = 0;
    var jc = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.handler = e;
        this.key = ++ic;
        this.removed = this.callOnce = !1
    }, kc = function(a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.handler = null
    };
    var lc = function(a) {
        this.src = a;
        this.listeners = {};
        this.typeCount_ = 0
    };
    lc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.typeCount_++);
        var g = mc(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.callOnce = !1)) : (b = new jc(b, this.src, f, !!d, e), b.callOnce = c, a.push(b));
        return b
    };
    lc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners))
            return !1;
        var e = this.listeners[a];
        b = mc(e, b, c, d);
        return -1 < b ? (kc(e[b]), Qa(e, b), 0 == e.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
    };
    var nc = function(a, b) {
        var c = b.type;
        if (!(c in a.listeners))
            return !1;
        var d = Ra(a.listeners[c], b);
        d && (kc(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.typeCount_--));
        return d
    };
    lc.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.listeners)
            if (!a || c == a) {
                for (var d = this.listeners[c], e = 0; e < d.length; e++)
                    ++b, kc(d[e]);
                delete this.listeners[c];
                this.typeCount_--
            }
        return b
    };
    lc.prototype.getListener = function(a, b, c, d) {
        a = this.listeners[a.toString()];
        var e = -1;
        a && (e = mc(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var mc = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d)
                return e
        }
        return -1
    };
    var oc = "closure_lm_" + (1E6 * Math.random() | 0), pc = {}, qc = 0, rc = function(a, b, c, d, e) {
        if (ea(b)) {
            for (var f = 0; f < b.length; f++)
                rc(a, b[f], c, d, e);
            return null
        }
        c = sc(c);
        return hc(a) ? a.listen(b, c, d, e) : tc(a, b, c, !1, d, e)
    }, tc = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = !!e, k = uc(a);
        k || (a[oc] = k = new lc(a));
        c = k.add(b, c, d, e, f);
        if (c.proxy)
            return c;
        d = vc();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, g);
        else if (a.attachEvent)
            a.attachEvent(wc(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        qc++;
        return c
    }, vc = function() {
        var a = xc, b = Zb ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        };
        return b
    }, yc = function(a, b, c, d, e) {
        if (ea(b)) {
            for (var f = 0; f < b.length; f++)
                yc(a, b[f], c, d, e);
            return null
        }
        c = sc(c);
        return hc(a) ? a.listenOnce(b, c, d, e) : tc(a, b, c, !0, d, e)
    }, zc = function(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++)
                zc(a, b[f], c, d, e);
        else
            c = sc(c), hc(a) ? a.unlisten(b, c, d, e) : a && (a = uc(a)) && (b = a.getListener(b, c, !!d, e)) && Ac(b)
    }, Ac = function(a) {
        if (ha(a) || !a || 
        a.removed)
            return !1;
        var b = a.src;
        if (hc(b))
            return nc(b.eventTargetListeners_, a);
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(wc(c), d);
        qc--;
        (c = uc(b)) ? (nc(c, a), 0 == c.typeCount_ && (c.src = null, b[oc] = null)) : kc(a);
        return !0
    }, wc = function(a) {
        return a in pc ? pc[a] : pc[a] = "on" + a
    }, Cc = function(a, b, c, d) {
        var e = !0;
        if (a = uc(a))
            if (b = a.listeners[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.removed && (f = Bc(f, d), e = e && !1 !== f)
                }
        return e
    }, 
    Bc = function(a, b) {
        var c = a.listener, d = a.handler || a.src;
        a.callOnce && Ac(a);
        return c.call(d, b)
    }, xc = function(a, b) {
        if (a.removed)
            return !0;
        if (!Zb) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = l, e; e = c.shift(); )
                        if (null != d[e])
                            d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            e = c;
            c = new B(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode)
                        try {
                            e.keyCode = -1;
                            break a
                        } catch (g) {
                            f = !0
                        }
                    if (f || void 0 == e.returnValue)
                        e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode)
                    e.push(f);
                for (var f = a.type, k = 
                e.length - 1; !c.propagationStopped_ && 0 <= k; k--) {
                    c.currentTarget = e[k];
                    var C = Cc(e[k], f, !0, c), d = d && C
                }
                for (k = 0; !c.propagationStopped_ && k < e.length; k++)
                    c.currentTarget = e[k], C = Cc(e[k], f, !1, c), d = d && C
            }
            return d
        }
        return Bc(a, new B(b, this))
    }, uc = function(a) {
        a = a[oc];
        return a instanceof lc ? a : null
    }, Dc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), sc = function(a) {
        v(a, "Listener can not be null.");
        if (p(a))
            return a;
        v(a.handleEvent, "An object listener must have handleEvent method.");
        a[Dc] || (a[Dc] = function(b) {
            return a.handleEvent(b)
        });
        return a[Dc]
    };
    var D = function() {
        ac.call(this);
        this.eventTargetListeners_ = new lc(this);
        this.actualEventTarget_ = this;
        this.parentEventTarget_ = null
    };
    t(D, ac);
    D.prototype[gc] = !0;
    h = D.prototype;
    h.setParentEventTarget = function(a) {
        this.parentEventTarget_ = a
    };
    h.addEventListener = function(a, b, c, d) {
        rc(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        zc(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        Ec(this);
        var b, c = this.parentEventTarget_;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.parentEventTarget_)
                b.push(c), v(1E3 > ++d, "infinite loop")
        }
        c = this.actualEventTarget_;
        d = a.type || a;
        if (n(a))
            a = new fc(a, c);
        else if (a instanceof fc)
            a.target = a.target || c;
        else {
            var e = a;
            a = new fc(d, c);
            hb(a, e)
        }
        var e = !0, f;
        if (b)
            for (var g = b.length - 1; !a.propagationStopped_ && 0 <= g; g--)
                f = a.currentTarget = b[g], e = Fc(f, d, !0, a) && e;
        a.propagationStopped_ || (f = a.currentTarget = c, e = Fc(f, d, !0, a) && e, a.propagationStopped_ || (e = Fc(f, d, !1, 
        a) && e));
        if (b)
            for (g = 0; !a.propagationStopped_ && g < b.length; g++)
                f = a.currentTarget = b[g], e = Fc(f, d, !1, a) && e;
        return e
    };
    h.disposeInternal = function() {
        D.superClass_.disposeInternal.call(this);
        this.eventTargetListeners_ && this.eventTargetListeners_.removeAll(void 0);
        this.parentEventTarget_ = null
    };
    h.listen = function(a, b, c, d) {
        Ec(this);
        return this.eventTargetListeners_.add(String(a), b, !1, c, d)
    };
    h.listenOnce = function(a, b, c, d) {
        return this.eventTargetListeners_.add(String(a), b, !0, c, d)
    };
    h.unlisten = function(a, b, c, d) {
        return this.eventTargetListeners_.remove(String(a), b, c, d)
    };
    var Fc = function(a, b, c, d) {
        b = a.eventTargetListeners_.listeners[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.removed && g.capture == c) {
                var k = g.listener, C = g.handler || g.src;
                g.callOnce && nc(a.eventTargetListeners_, g);
                e = !1 !== k.call(C, d) && e
            }
        }
        return e && 0 != d.returnValue_
    };
    D.prototype.getListener = function(a, b, c, d) {
        return this.eventTargetListeners_.getListener(String(a), b, c, d)
    };
    var Ec = function(a) {
        v(a.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Gc = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !vb;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }, Jc = function(a, b, c, d, e) {
        if (!(y || z && A("525")))
            return !0;
        if (xb && e)
            return Hc(a);
        if (e && !d)
            return !1;
        ha(b) && (b = 
        Ic(b));
        if (!c && (17 == b || 18 == b || xb && 91 == b))
            return !1;
        if (z && d && c)
            switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
        if (y && d && b == a)
            return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !z
        }
        return Hc(a)
    }, Hc = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || z && 0 == a)
            return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }, Ic = function(a) {
        if (vb)
            a = Kc(a);
        else if (xb && z)
            a: switch (a) {
                case 93:
                    a = 91;
                    break a
            }
        return a
    }, Kc = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
    var Mc = function(a) {
        D.call(this);
        this.element_ = a;
        rc(a, Lc, this.handleKeyDown_, !1, this);
        rc(a, "click", this.handleClick_, !1, this)
    };
    t(Mc, D);
    var Lc = vb ? "keypress" : "keydown";
    Mc.prototype.handleKeyDown_ = function(a) {
        (13 == a.keyCode || z && 3 == a.keyCode) && Nc(this, a)
    };
    Mc.prototype.handleClick_ = function(a) {
        Nc(this, a)
    };
    var Nc = function(a, b) {
        var c = new Oc(b);
        if (a.dispatchEvent(c)) {
            c = new Pc(b);
            try {
                a.dispatchEvent(c)
            }finally {
                b.stopPropagation()
            }
        }
    };
    Mc.prototype.disposeInternal = function() {
        Mc.superClass_.disposeInternal.call(this);
        zc(this.element_, Lc, this.handleKeyDown_, !1, this);
        zc(this.element_, "click", this.handleClick_, !1, this);
        delete this.element_
    };
    var Pc = function(a) {
        B.call(this, a.event_);
        this.type = "action"
    };
    t(Pc, B);
    var Oc = function(a) {
        B.call(this, a.event_);
        this.type = "beforeaction"
    };
    t(Oc, B);
    var Qc = function(a, b, c) {
        this.limit_ = c;
        this.create_ = a;
        this.reset_ = b;
        this.occupants_ = 0;
        this.head_ = null
    };
    Qc.prototype.get = function() {
        var a;
        0 < this.occupants_ ? (this.occupants_--, a = this.head_, this.head_ = a.next, a.next = null) : a = this.create_();
        return a
    };
    Qc.prototype.put = function(a) {
        this.reset_(a);
        this.occupants_ < this.limit_ && (this.occupants_++, a.next = this.head_, this.head_ = a)
    };
    var Rc = function(a) {
        l.setTimeout(function() {
            throw a;
        }, 0)
    }, Sc, Tc = function() {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, 
            a = q(function(a) {
                if (("*" == d || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {postMessage: function() {
                    b.postMessage(c, d)
                }}
        });
        if ("undefined" !== typeof a && !rb()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function() {
                if (m(c.next)) {
                    c = c.next;
                    var a = c.cb;
                    c.cb = null;
                    a()
                }
            };
            return function(a) {
                d.next = {cb: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            l.setTimeout(a, 0)
        }
    };
    var Uc = function() {
        this.workTail_ = this.workHead_ = null
    }, Wc = new Qc(function() {
        return new Vc
    }, function(a) {
        a.reset()
    }, 100);
    Uc.prototype.add = function(a, b) {
        var c = Wc.get();
        c.set(a, b);
        this.workTail_ ? this.workTail_.next = c : (v(!this.workHead_), this.workHead_ = c);
        this.workTail_ = c
    };
    Uc.prototype.remove = function() {
        var a = null;
        this.workHead_ && (a = this.workHead_, this.workHead_ = this.workHead_.next, this.workHead_ || (this.workTail_ = null), a.next = null);
        return a
    };
    var Vc = function() {
        this.next = this.scope = this.fn = null
    };
    Vc.prototype.set = function(a, b) {
        this.fn = a;
        this.scope = b;
        this.next = null
    };
    Vc.prototype.reset = function() {
        this.next = this.scope = this.fn = null
    };
    var ad = function(a, b) {
        Xc || Yc();
        Zc || (Xc(), Zc = !0);
        $c.add(a, b)
    }, Xc, Yc = function() {
        if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve();
            Xc = function() {
                a.then(bd)
            }
        } else
            Xc = function() {
                var a = bd;
                !p(l.setImmediate) || l.Window && l.Window.prototype && l.Window.prototype.setImmediate == l.setImmediate ? (Sc || (Sc = Tc()), Sc(a)) : l.setImmediate(a)
            }
    }, Zc = !1, $c = new Uc, bd = function() {
        for (var a = null; a = $c.remove(); ) {
            try {
                a.fn.call(a.scope)
            } catch (b) {
                Rc(b)
            }
            Wc.put(a)
        }
        Zc = !1
    };
    var cd = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, dd = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var gd = function(a, b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.callbackEntriesTail_ = this.callbackEntries_ = this.parent_ = null;
        this.hadUnhandledRejection_ = this.executing_ = !1;
        if (a != ba)
            try {
                var c = this;
                a.call(b, function(a) {
                    ed(c, 2, a)
                }, function(a) {
                    if (!(a instanceof fd))
                        try {
                            if (a instanceof Error)
                                throw a;
                            throw Error("Promise rejected.");
                        } catch (b) {
                        }
                    ed(c, 3, a)
                })
            } catch (d) {
                ed(this, 3, d)
            }
    }, hd = function() {
        this.next = this.context = this.onRejected = this.onFulfilled = this.child = null;
        this.always = !1
    };
    hd.prototype.reset = function() {
        this.context = this.onRejected = this.onFulfilled = this.child = null;
        this.always = !1
    };
    var id = new Qc(function() {
        return new hd
    }, function(a) {
        a.reset()
    }, 100), jd = function(a, b, c) {
        var d = id.get();
        d.onFulfilled = a;
        d.onRejected = b;
        d.context = c;
        return d
    };
    gd.prototype.then = function(a, b, c) {
        null != a && Ea(a, "opt_onFulfilled should be a function.");
        null != b && Ea(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return kd(this, p(a) ? a : null, p(b) ? b : null, c)
    };
    cd(gd);
    gd.prototype.cancel = function(a) {
        0 == this.state_ && ad(function() {
            var b = new fd(a);
            ld(this, b)
        }, this)
    };
    var ld = function(a, b) {
        if (0 == a.state_)
            if (a.parent_) {
                var c = a.parent_;
                if (c.callbackEntries_) {
                    for (var d = 0, e = null, f = null, g = c.callbackEntries_; g && (g.always || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.state_ && 1 == d ? ld(c, b) : (f ? (d = f, v(c.callbackEntries_), v(null != d), d.next == c.callbackEntriesTail_ && (c.callbackEntriesTail_ = d), d.next = d.next.next) : md(c), nd(c, e, 3, b)))
                }
                a.parent_ = null
            } else
                ed(a, 3, b)
    }, pd = function(a, b) {
        a.callbackEntries_ || 2 != a.state_ && 3 != a.state_ || od(a);
        v(null != b.onFulfilled);
        a.callbackEntriesTail_ ? 
        a.callbackEntriesTail_.next = b : a.callbackEntries_ = b;
        a.callbackEntriesTail_ = b
    }, kd = function(a, b, c, d) {
        var e = jd(null, null, null);
        e.child = new gd(function(a, g) {
            e.onFulfilled = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (Wa) {
                    g(Wa)
                }
            } : a;
            e.onRejected = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !m(e) && b instanceof fd ? g(b) : a(e)
                } catch (Wa) {
                    g(Wa)
                }
            } : g
        });
        e.child.parent_ = a;
        pd(a, e);
        return e.child
    };
    gd.prototype.unblockAndFulfill_ = function(a) {
        v(1 == this.state_);
        this.state_ = 0;
        ed(this, 2, a)
    };
    gd.prototype.unblockAndReject_ = function(a) {
        v(1 == this.state_);
        this.state_ = 0;
        ed(this, 3, a)
    };
    var ed = function(a, b, c) {
        if (0 == a.state_) {
            a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.state_ = 1;
            var d;
            a: {
                var e = c, f = a.unblockAndFulfill_, g = a.unblockAndReject_;
                if (e instanceof gd)
                    null != f && Ea(f, "opt_onFulfilled should be a function."), null != g && Ea(g, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), pd(e, jd(f || ba, g || null, a)), d = !0;
                else if (dd(e))
                    e.then(f, g, a), d = !0;
                else {
                    if (ia(e))
                        try {
                            var k = e.then;
                            if (p(k)) {
                                qd(e, k, f, g, a);
                                d = !0;
                                break a
                            }
                        } catch (C) {
                            g.call(a, 
                            C);
                            d = !0;
                            break a
                        }
                    d = !1
                }
            }
            d || (a.result_ = c, a.state_ = b, a.parent_ = null, od(a), 3 != b || c instanceof fd || rd(a, c))
        }
    }, qd = function(a, b, c, d, e) {
        var f = !1, g = function(a) {
            f || (f = !0, c.call(e, a))
        }, k = function(a) {
            f || (f = !0, d.call(e, a))
        };
        try {
            b.call(a, g, k)
        } catch (C) {
            k(C)
        }
    }, od = function(a) {
        a.executing_ || (a.executing_ = !0, ad(a.executeCallbacks_, a))
    }, md = function(a) {
        var b = null;
        a.callbackEntries_ && (b = a.callbackEntries_, a.callbackEntries_ = b.next, b.next = null);
        a.callbackEntries_ || (a.callbackEntriesTail_ = null);
        null != b && v(null != b.onFulfilled);
        return b
    };
    gd.prototype.executeCallbacks_ = function() {
        for (var a = null; a = md(this); )
            nd(this, a, this.state_, this.result_);
        this.executing_ = !1
    };
    var nd = function(a, b, c, d) {
        if (3 == c && b.onRejected && !b.always)
            for (; a && a.hadUnhandledRejection_; a = a.parent_)
                a.hadUnhandledRejection_ = !1;
        if (b.child)
            b.child.parent_ = null, sd(b, c, d);
        else
            try {
                b.always ? b.onFulfilled.call(b.context) : sd(b, c, d)
            } catch (e) {
                td.call(null, e)
            }
        id.put(b)
    }, sd = function(a, b, c) {
        2 == b ? a.onFulfilled.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    }, rd = function(a, b) {
        a.hadUnhandledRejection_ = !0;
        ad(function() {
            a.hadUnhandledRejection_ && td.call(null, b)
        })
    }, td = Rc, fd = function(a) {
        u.call(this, 
        a)
    };
    t(fd, u);
    fd.prototype.name = "cancel";
    var ud = function(a, b, c) {
        if (p(a))
            c && (a = q(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = q(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
    };
    var vd = function(a) {
        ac.call(this);
        this.handler_ = a;
        this.keys_ = {}
    };
    t(vd, ac);
    var wd = [];
    vd.prototype.listen = function(a, b, c, d) {
        ea(b) || (b && (wd[0] = b.toString()), b = wd);
        for (var e = 0; e < b.length; e++) {
            var f = rc(a, b[e], c || this.handleEvent, d || !1, this.handler_ || this);
            if (!f)
                break;
            this.keys_[f.key] = f
        }
        return this
    };
    vd.prototype.listenOnce = function(a, b, c, d) {
        return xd(this, a, b, c, d)
    };
    var xd = function(a, b, c, d, e, f) {
        if (ea(c))
            for (var g = 0; g < c.length; g++)
                xd(a, b, c[g], d, e, f);
        else {
            b = yc(b, c, d || a.handleEvent, e, f || a.handler_ || a);
            if (!b)
                return a;
            a.keys_[b.key] = b
        }
        return a
    };
    vd.prototype.unlisten = function(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++)
                this.unlisten(a, b[f], c, d, e);
        else
            c = c || this.handleEvent, e = e || this.handler_ || this, c = sc(c), d = !!d, b = hc(a) ? a.getListener(b, c, d, e) : a ? (a = uc(a)) ? a.getListener(b, c, d, e) : null : null, b && (Ac(b), delete this.keys_[b.key]);
        return this
    };
    vd.prototype.removeAll = function() {
        bb(this.keys_, function(a, b) {
            this.keys_.hasOwnProperty(b) && Ac(a)
        }, this);
        this.keys_ = {}
    };
    vd.prototype.disposeInternal = function() {
        vd.superClass_.disposeInternal.call(this);
        this.removeAll()
    };
    vd.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var yd = function(a) {
        D.call(this);
        this.timer_ = null;
        this.element_ = a;
        a = y || z && !A("531") && "TEXTAREA" == a.tagName;
        this.eventHandler_ = new vd(this);
        this.eventHandler_.listen(this.element_, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    t(yd, D);
    yd.prototype.handleEvent = function(a) {
        if ("input" == a.type)
            y && A(10) && 0 == a.keyCode && 0 == a.charCode || (zd(this), this.dispatchEvent(Ad(a)));
        else if ("keydown" != a.type || Gc(a)) {
            var b = "keydown" == a.type ? this.element_.value : null;
            y && 229 == a.keyCode && (b = null);
            var c = Ad(a);
            zd(this);
            this.timer_ = ud(function() {
                this.timer_ = null;
                this.element_.value != b && this.dispatchEvent(c)
            }, 0, this)
        }
    };
    var zd = function(a) {
        null != a.timer_ && (l.clearTimeout(a.timer_), a.timer_ = null)
    }, Ad = function(a) {
        a = new B(a.event_);
        a.type = "input";
        return a
    };
    yd.prototype.disposeInternal = function() {
        yd.superClass_.disposeInternal.call(this);
        this.eventHandler_.dispose();
        zd(this);
        delete this.element_
    };
    var Bd = function(a, b) {
        D.call(this);
        a && (this.keyUpKey_ && this.detach(), this.element_ = a, this.keyPressKey_ = rc(this.element_, "keypress", this, b), this.keyDownKey_ = rc(this.element_, "keydown", this.handleKeyDown_, b, this), this.keyUpKey_ = rc(this.element_, "keyup", this.handleKeyup_, b, this))
    };
    t(Bd, D);
    h = Bd.prototype;
    h.element_ = null;
    h.keyPressKey_ = null;
    h.keyDownKey_ = null;
    h.keyUpKey_ = null;
    h.lastKey_ = -1;
    h.keyCode_ = -1;
    h.altKey_ = !1;
    var Cd = {3: 13,12: 144,63232: 38,63233: 40,63234: 37,63235: 39,63236: 112,63237: 113,63238: 114,63239: 115,63240: 116,63241: 117,63242: 118,63243: 119,63244: 120,63245: 121,63246: 122,63247: 123,63248: 44,63272: 46,63273: 36,63275: 35,63276: 33,63277: 34,63289: 144,63302: 45}, Dd = {Up: 38,Down: 40,Left: 37,Right: 39,Enter: 13,F1: 112,F2: 113,F3: 114,F4: 115,F5: 116,F6: 117,F7: 118,F8: 119,F9: 120,F10: 121,F11: 122,F12: 123,"U+007F": 46,Home: 36,End: 35,PageUp: 33,PageDown: 34,Insert: 45}, Ed = y || z && A("525"), Fd = xb && vb;
    h = Bd.prototype;
    h.handleKeyDown_ = function(a) {
        z && (17 == this.lastKey_ && !a.ctrlKey || 18 == this.lastKey_ && !a.altKey || xb && 91 == this.lastKey_ && !a.metaKey) && (this.keyCode_ = this.lastKey_ = -1);
        -1 == this.lastKey_ && (a.ctrlKey && 17 != a.keyCode ? this.lastKey_ = 17 : a.altKey && 18 != a.keyCode ? this.lastKey_ = 18 : a.metaKey && 91 != a.keyCode && (this.lastKey_ = 91));
        Ed && !Jc(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.keyCode_ = Ic(a.keyCode), Fd && (this.altKey_ = a.altKey))
    };
    h.handleKeyup_ = function(a) {
        this.keyCode_ = this.lastKey_ = -1;
        this.altKey_ = a.altKey
    };
    h.handleEvent = function(a) {
        var b = a.event_, c, d, e = b.altKey;
        y && "keypress" == a.type ? (c = this.keyCode_, d = 13 != c && 27 != c ? b.keyCode : 0) : z && "keypress" == a.type ? (c = this.keyCode_, d = 0 <= b.charCode && 63232 > b.charCode && Hc(c) ? b.charCode : 0) : ub ? (c = this.keyCode_, d = Hc(c) ? b.keyCode : 0) : (c = b.keyCode || this.keyCode_, d = b.charCode || 0, Fd && (e = this.altKey_), xb && 63 == d && 224 == c && (c = 191));
        var f = c = Ic(c), g = b.keyIdentifier;
        c ? 63232 <= c && c in Cd ? f = Cd[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Dd && (f = Dd[g]);
        a = f == this.lastKey_;
        this.lastKey_ = f;
        b = new Gd(f, 
        d, a, b);
        b.altKey = e;
        this.dispatchEvent(b)
    };
    h.getElement = function() {
        return this.element_
    };
    h.detach = function() {
        this.keyPressKey_ && (Ac(this.keyPressKey_), Ac(this.keyDownKey_), Ac(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null);
        this.element_ = null;
        this.keyCode_ = this.lastKey_ = -1
    };
    h.disposeInternal = function() {
        Bd.superClass_.disposeInternal.call(this);
        this.detach()
    };
    var Gd = function(a, b, c, d) {
        B.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    t(Gd, B);
    y && A(12);
    var Hd = function() {
    };
    Hd.getInstance = function() {
        return Hd.instance_ ? Hd.instance_ : Hd.instance_ = new Hd
    };
    Hd.prototype.nextId_ = 0;
    var E = function(a) {
        D.call(this);
        this.dom_ = a || Jb();
        this.id_ = null;
        this.inDocument_ = !1;
        this.element_ = null;
        this.googUiComponentHandler_ = void 0;
        this.childIndex_ = this.children_ = this.parent_ = null;
        this.wasDecorated_ = !1
    };
    t(E, D);
    E.prototype.idGenerator_ = Hd.getInstance();
    E.prototype.getId = function() {
        return this.id_ || (this.id_ = ":" + (this.idGenerator_.nextId_++).toString(36))
    };
    var Id = function(a, b) {
        if (a.parent_ && a.parent_.childIndex_) {
            var c = a.parent_.childIndex_, d = a.id_;
            d in c && delete c[d];
            fb(a.parent_.childIndex_, b, a)
        }
        a.id_ = b
    };
    E.prototype.getElement = function() {
        return this.element_
    };
    E.prototype.getElementsByClass = function(a) {
        return this.element_ ? this.dom_.getElementsByClass(a, this.element_) : []
    };
    E.prototype.getElementByClass = function(a) {
        return this.element_ ? this.dom_.getElementByClass(a, this.element_) : null
    };
    var Jd = function(a) {
        a.googUiComponentHandler_ || (a.googUiComponentHandler_ = new vd(a));
        return a.googUiComponentHandler_
    }, Ld = function(a, b) {
        if (a == b)
            throw Error("Unable to set parent component");
        if (b && a.parent_ && a.id_ && Kd(a.parent_, a.id_) && a.parent_ != b)
            throw Error("Unable to set parent component");
        a.parent_ = b;
        E.superClass_.setParentEventTarget.call(a, b)
    };
    h = E.prototype;
    h.getParent = function() {
        return this.parent_
    };
    h.setParentEventTarget = function(a) {
        if (this.parent_ && this.parent_ != a)
            throw Error("Method not supported");
        E.superClass_.setParentEventTarget.call(this, a)
    };
    h.getDomHelper = function() {
        return this.dom_
    };
    h.createDom = function() {
        this.element_ = this.dom_.createElement("DIV")
    };
    h.render = function(a) {
        if (this.inDocument_)
            throw Error("Component already rendered");
        this.element_ || this.createDom();
        a ? a.insertBefore(this.element_, null) : this.dom_.document_.body.appendChild(this.element_);
        this.parent_ && !this.parent_.inDocument_ || this.enterDocument()
    };
    h.enterDocument = function() {
        this.inDocument_ = !0;
        Md(this, function(a) {
            !a.inDocument_ && a.getElement() && a.enterDocument()
        })
    };
    var Nd = function(a) {
        Md(a, function(a) {
            a.inDocument_ && Nd(a)
        });
        a.googUiComponentHandler_ && a.googUiComponentHandler_.removeAll();
        a.inDocument_ = !1
    };
    E.prototype.disposeInternal = function() {
        this.inDocument_ && Nd(this);
        this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
        Md(this, function(a) {
            a.dispose()
        });
        !this.wasDecorated_ && this.element_ && Qb(this.element_);
        this.parent_ = this.element_ = this.childIndex_ = this.children_ = null;
        E.superClass_.disposeInternal.call(this)
    };
    var Kd = function(a, b) {
        var c;
        a.childIndex_ && b ? (c = a.childIndex_, c = (b in c ? c[b] : void 0) || null) : c = null;
        return c
    }, Md = function(a, b) {
        a.children_ && Ia(a.children_, b, void 0)
    };
    E.prototype.removeChild = function(a, b) {
        if (a) {
            var c = n(a) ? a : a.getId();
            a = Kd(this, c);
            if (c && a) {
                var d = this.childIndex_;
                c in d && delete d[c];
                Ra(this.children_, a);
                b && (Nd(a), a.element_ && Qb(a.element_));
                Ld(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };
    var F = function(a, b) {
        b ? (ab(a, "gitkit-input-invalid"), $a(a, "gitkit-input")) : (ab(a, "gitkit-input"), $a(a, "gitkit-input-invalid"))
    }, Od = function(a, b, c) {
        b = new yd(b);
        bc(a, la(ec, b));
        Jd(a).listen(b, "input", c)
    }, Pd = function(a, b, c) {
        b = new Bd(b);
        bc(a, la(ec, b));
        Jd(a).listen(b, "key", function(a) {
            13 == a.keyCode && (a.stopPropagation(), a.preventDefault(), c(a))
        })
    }, Qd = function(a, b, c) {
        b = new Mc(b);
        bc(a, la(ec, b));
        Jd(a).listen(b, "action", function(a) {
            a.stopPropagation();
            a.preventDefault();
            c(a)
        })
    }, Rd = function(a) {
        return Xb(a)
    }, 
    Sd = function(a) {
        $a(a, "gitkit-hidden")
    }, Td = function(a, b) {
        if (b)
            if (v(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a)
                a.textContent = b;
            else if (3 == a.nodeType)
                a.data = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild; )
                    a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                for (var c; c = a.firstChild; )
                    a.removeChild(c);
                c = Ib(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        ab(a, "gitkit-hidden")
    }, Ud = function(a) {
        return !Za(a, "gitkit-hidden") && "none" != 
        a.style.display
    }, Vd = function(a) {
        for (; a; ) {
            if (!Ud(a))
                return !0;
            a = a.parentElement
        }
        return !1
    };
    var Wd = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    var Xd = function() {
        return this.getElementByClass("gitkit-id-email")
    }, Yd = function() {
        return this.getElementByClass("gitkit-id-email-error")
    }, Zd = function(a, b) {
        var c = Xd.call(this), d = Yd.call(this);
        Od(this, c, function() {
            Ud(d) && (F(c, !0), Sd(d));
            a && a()
        });
        b && Pd(this, c, function() {
            b()
        })
    }, $d = function() {
        return qa(Rd(Xd.call(this)) || "")
    }, ae = function() {
        var a = Xd.call(this), b;
        b = Yd.call(this);
        var c = Xb(a);
        c ? Wd.test(c) ? (F(a, !0), Sd(b), b = !0) : (F(a, !1), Td(b, "Invalid email address."), b = !1) : (F(a, !1), Td(b, "Please fill out the email field."), 
        b = !1);
        return b ? qa(v(Xb(a))) : null
    };
    var be = function() {
        return this.getElementByClass("gitkit-id-submit")
    }, ce = function() {
        return this.getElementByClass("gitkit-id-secondary-link")
    }, de = function(a, b) {
        var c = be.call(this);
        Qd(this, c, function() {
            a()
        });
        (c = ce.call(this)) && b && Qd(this, c, function() {
            b()
        })
    };
    var G = function(a, b, c) {
        this.name_ = v(a);
        this.displayName_ = v(b);
        this.providerId_ = v(c)
    };
    G.prototype.getName = function() {
        return this.name_
    };
    G.prototype.getDisplayName = function() {
        return this.displayName_
    };
    G.prototype.getProviderId = function() {
        return this.providerId_
    };
    G.prototype.toPlainObject = function() {
        return {name: this.name_,displayName: this.displayName_,providerId: this.providerId_}
    };
    var ee = new G("google", "Google", "google.com"), fe = new G("googleplus", "Google", "google.com"), ge = new G("microsoft", "Microsoft", "hotmail.com"), he = new G("yahoo", "Yahoo", "yahoo.com"), ie = new G("aol", "AOL", "aol.com"), je = new G("facebook", "Facebook", "facebook.com"), ke = new G("paypal", "Paypal", "paypal.com"), le = new G("twitter", "Twitter", "twitter.com"), me = new G("password", "Password", "password"), ne = {GOOGLE: ee,GOOGLEPLUS: fe,MICROSOFT: ge,YAHOO: he,AOL: ie,FACEBOOK: je,PAYPAL: ke,TWITTER: le,PASSWORD: me}, oe = function(a) {
        for (var b in ne) {
            var c = 
            ne[b];
            if (c.getName() == a.toLowerCase())
                return c
        }
        return null
    }, pe = function(a) {
        for (var b in ne) {
            var c = ne[b];
            if (c.getProviderId() == a)
                return c
        }
        return null
    };
    !x("Android") || sb() || x("Firefox") || qb();
    sb();
    var qe = !y, re = function(a, b) {
        return qe && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var se = function(a) {
        for (var b = this.getElementsByClass("gitkit-id-idp-button"), c = function(b, c) {
            a(b, c)
        }, d = 0; d < b.length; d++) {
            var e = b[d], f = v(re(e, "idp")), f = oe(f), g = re(e, "authUri");
            Qd(this, e, la(c, f, g))
        }
    };
    var te = function(a) {
        if ("function" == typeof a.getValues)
            return a.getValues();
        if (n(a))
            return a.split("");
        if (fa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return db(a)
    }, ue = function(a) {
        if ("function" == typeof a.getKeys)
            return a.getKeys();
        if ("function" != typeof a.getValues) {
            if (fa(a) || n(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            return eb(a)
        }
    }, ve = function(a, b) {
        if ("function" == typeof a.forEach)
            a.forEach(b, void 0);
        else if (fa(a) || n(a))
            Ia(a, b, void 0);
        else
            for (var c = ue(a), d = 
            te(a), e = d.length, f = 0; f < e; f++)
                b.call(void 0, d[f], c && c[f], a)
    };
    y && A(8);
    var we = {sanitizedContentKindHtml: !0}, xe = {sanitizedContentUri: !0}, ye = {sanitizedContentKindText: !0}, H = function() {
        throw Error("Do not instantiate directly");
    };
    H.prototype.contentDir = null;
    H.prototype.toString = function() {
        return this.content
    };
    var Ce = function(a, b, c, d) {
        v(a, "Soy template may not be null.");
        d = (d || Jb()).createElement("DIV");
        a = ze(a(b || Ae, void 0, c));
        b = a.match(Be);
        v(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a);
        d.innerHTML = a;
        return 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType) ? a : d
    }, ze = function(a) {
        if (!ia(a))
            return String(a);
        if (a instanceof H) {
            if (a.contentKind === we)
                return Da(a.content);
            if (a.contentKind === ye)
                return ya(a.content)
        }
        Ca("Soy template output is unsafe for use as HTML: " + a);
        return "zSoyz"
    }, Be = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i, Ae = {};
    var De = function(a) {
        if (null != a)
            switch (a.contentDir) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
        return null
    }, Ee = function() {
        H.call(this)
    };
    t(Ee, H);
    Ee.prototype.contentKind = we;
    var J = function(a) {
        if (null != a && a.contentKind === we)
            return v(a.constructor === Ee), a;
        if (a instanceof mb) {
            var b = I, c;
            a instanceof mb && a.constructor === mb && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === lb ? c = a.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (Ca("expected object of type SafeHtml, got '" + a + "'"), c = "type_error:SafeHtml");
            a = b(c, a.getDirection())
        } else
            a = I(ya(String(String(a))), De(a));
        return a
    }, Fe = function() {
        H.call(this)
    };
    t(Fe, H);
    Fe.prototype.contentKind = {sanitizedContentJsChars: !0};
    Fe.prototype.contentDir = 1;
    var Ge = function() {
        H.call(this)
    };
    t(Ge, H);
    Ge.prototype.contentKind = xe;
    Ge.prototype.contentDir = 1;
    var He = function() {
        H.call(this)
    };
    t(He, H);
    He.prototype.contentKind = {sanitizedContentHtmlAttribute: !0};
    He.prototype.contentDir = 1;
    var Ie = function() {
        H.call(this)
    };
    t(Ie, H);
    Ie.prototype.contentKind = {sanitizedContentCss: !0};
    Ie.prototype.contentDir = 1;
    var Je = function(a, b) {
        this.content = String(a);
        this.contentDir = null != b ? b : null
    };
    t(Je, H);
    Je.prototype.contentKind = ye;
    var Ke = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a) {
            return new b(String(a))
        }
    }, I = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.contentDir = d);
            return e
        }
    }(Ee);
    Ke(Fe);
    var Le = Ke(Ge);
    Ke(He);
    Ke(Ie);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e)
                return "";
            e = new b(e);
            void 0 !== d && (e.contentDir = d);
            return e
        }
    })(Ee);
    var K = function(a) {
        return J(a)
    }, L = function(a) {
        return null != a && a.contentKind === we ? (v(a.constructor === Ee), a = String(a.content).replace(Me, "").replace(Ne, "&lt;"), String(a).replace(Oe, Pe)) : ya(String(a))
    }, M = function(a) {
        if (null != a && a.contentKind === xe)
            return v(a.constructor === Ge), String(a).replace(Qe, Re);
        a instanceof kb ? (a instanceof kb && a.constructor === kb && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === jb ? a = a.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (Ca("expected object of type SafeUrl, got '" + 
        a + "'"), a = "type_error:SafeUrl"), a = String(a).replace(Qe, Re)) : (a = String(a), Se.test(a) ? a = a.replace(Qe, Re) : (Ca("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz"));
        return a
    }, N = function(a, b, c, d) {
        c = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c;
        v(a, "expected param " + b + " of type " + d + (", but got " + c) + ".", void 0)
    }, Te = {"\x00": "&#0;","\t": "&#9;","\n": "&#10;","\x0B": "&#11;",
        "\f": "&#12;","\r": "&#13;"," ": "&#32;",'"': "&quot;","&": "&amp;","'": "&#39;","-": "&#45;","/": "&#47;","<": "&lt;","=": "&#61;",">": "&gt;","`": "&#96;","\u0085": "&#133;","\u00a0": "&#160;","\u2028": "&#8232;","\u2029": "&#8233;"}, Pe = function(a) {
        return Te[a]
    }, Ue = {"\x00": "\\x00","\b": "\\x08","\t": "\\t","\n": "\\n","\x0B": "\\x0b","\f": "\\f","\r": "\\r",'"': "\\x22",$: "\\x24","&": "\\x26","'": "\\x27","(": "\\x28",")": "\\x29","*": "\\x2a","+": "\\x2b",",": "\\x2c","-": "\\x2d",".": "\\x2e","/": "\\/",":": "\\x3a","<": "\\x3c",
        "=": "\\x3d",">": "\\x3e","?": "\\x3f","[": "\\x5b","\\": "\\\\","]": "\\x5d","^": "\\x5e","{": "\\x7b","|": "\\x7c","}": "\\x7d","\u0085": "\\x85","\u2028": "\\u2028","\u2029": "\\u2029"}, Ve = function(a) {
        return Ue[a]
    }, We = {"\x00": "%00","\u0001": "%01","\u0002": "%02","\u0003": "%03","\u0004": "%04","\u0005": "%05","\u0006": "%06","\u0007": "%07","\b": "%08","\t": "%09","\n": "%0A","\x0B": "%0B","\f": "%0C","\r": "%0D","\u000e": "%0E","\u000f": "%0F","\u0010": "%10","\u0011": "%11","\u0012": "%12","\u0013": "%13","\u0014": "%14","\u0015": "%15",
        "\u0016": "%16","\u0017": "%17","\u0018": "%18","\u0019": "%19","\u001a": "%1A","\u001b": "%1B","\u001c": "%1C","\u001d": "%1D","\u001e": "%1E","\u001f": "%1F"," ": "%20",'"': "%22","'": "%27","(": "%28",")": "%29","<": "%3C",">": "%3E","\\": "%5C","{": "%7B","}": "%7D","\u007f": "%7F","\u0085": "%C2%85","\u00a0": "%C2%A0","\u2028": "%E2%80%A8","\u2029": "%E2%80%A9","\uff01": "%EF%BC%81","\uff03": "%EF%BC%83","\uff04": "%EF%BC%84","\uff06": "%EF%BC%86","\uff07": "%EF%BC%87","\uff08": "%EF%BC%88","\uff09": "%EF%BC%89","\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B","\uff0c": "%EF%BC%8C","\uff0f": "%EF%BC%8F","\uff1a": "%EF%BC%9A","\uff1b": "%EF%BC%9B","\uff1d": "%EF%BC%9D","\uff1f": "%EF%BC%9F","\uff20": "%EF%BC%A0","\uff3b": "%EF%BC%BB","\uff3d": "%EF%BC%BD"}, Re = function(a) {
        return We[a]
    }, Oe = /[\x00\x22\x27\x3c\x3e]/g, Xe = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, Qe = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, Se = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, 
    Me = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Ne = /</g;
    var Ye = function(a) {
        a = a || {};
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        var b = a.email;
        N(null == a.disabled || ga(a.disabled) || 1 === a.disabled || 0 === a.disabled, "disabled", a.disabled, "boolean|null|undefined");
        var c = a.disabled;
        N(null == a.changeEmail || ga(a.changeEmail) || 1 === a.changeEmail || 0 === a.changeEmail, "changeEmail", a.changeEmail, "boolean|null|undefined");
        var d = '<label class="gitkit-label">', d = a.changeEmail ? d + "Enter new email address" : d + "Email", d = d + ('</label><input type="text" name="email" autocomplete="username" class="gitkit-input gitkit-id-email" value="' + 
        L(null == b ? "" : b) + '"' + (c ? "disabled" : "") + '><p class="gitkit-error gitkit-hidden gitkit-id-email-error"></p>');
        return I(d)
    }, af = function(a, b) {
        var c = Fa(a.idp, "expected parameter 'idp' of type [displayName: string, name: string].");
        N(null == a.authUri || a.authUri instanceof H || n(a.authUri), "authUri", a.authUri, "null|string|undefined");
        var d = a.authUri, e = "", f = "" + Ze({idpName: c.name}), f = (f = String(f)) ? new Je(f, void 0) : "", e = e + ('<a href="javascript:void(0)" class="gitkit-idp-button ' + L(f) + ' gitkit-id-idp-button" data-idp="' + 
        L(c.name) + '"' + (d ? 'data-auth-uri="' + L(M(d)) + '"' : "") + ">");
        "password" == c.name ? e += '<span class="gitkit-idp-text">Create password account</span>' : (d = "Sign in with " + J(c.displayName), e += '<img class="gitkit-idp-icon" src="' + L(M($e({idpName: c.name}, b))) + '"><span class="gitkit-idp-text">' + d + "</span>");
        return I(e + "</a>")
    }, O = function(a) {
        N(n(a.type) || a.type instanceof H, "type", a.type, "string|goog.soy.data.SanitizedContent");
        var b = '<button type="submit" class="gitkit-button gitkit-id-submit">';
        switch (a.type) {
            case "signIn":
                b += 
                "Sign in";
                break;
            case "signUp":
                b += "Sign up";
                break;
            case "continue":
                b += "Continue"
        }
        return I(b + "</button>")
    }, bf = function(a) {
        a = a || {};
        N(null == a.choose || ga(a.choose) || 1 === a.choose || 0 === a.choose, "choose", a.choose, "boolean|null|undefined");
        a = a.choose;
        var b;
        b = '<label class="gitkit-label">';
        b = (a ? b + "Choose a password" : b + "New password") + '</label><input type="password" name="newPassword" autocomplete="new-password" class="gitkit-input gitkit-id-new-password"><label class="gitkit-label">Confirm password</label><input type="password" name="passwordAgain" autocomplete="new-password" class="gitkit-input gitkit-id-password-again"><p class="gitkit-error gitkit-hidden gitkit-id-new-password-error"></p>';
        return I(b)
    }, cf = function(a) {
        a = a || {};
        N(null == a.current || ga(a.current) || 1 === a.current || 0 === a.current, "current", a.current, "boolean|null|undefined");
        var b = '<label class="gitkit-label">', b = a.current ? b + "Current password" : b + "Password";
        return I(b + '</label><input type="password" name="password" autocomplete="current-password" class="gitkit-input gitkit-id-password"><p class="gitkit-error gitkit-hidden gitkit-id-password-error"></p>')
    }, df = function(a) {
        var b;
        a = a || {};
        N(null == a.recaptchaId || a.recaptchaId instanceof 
        H || n(a.recaptchaId), "recaptchaId", a.recaptchaId, "null|string|undefined");
        return I('<div id="' + L(null == (b = a.recaptchaId) ? "gitkit-id-recaptcha" : b) + '" class="gitkit-recaptcha" style="display:none"></div><p class="gitkit-error gitkit-hidden gitkit-id-recaptcha-error"></p>')
    }, ef = function(a, b) {
        var c = Fa(a.idp, "expected parameter 'idp' of type [displayName: string, name: string].");
        N(null == a.account || ia(a.account), "account", a.account, "null|undefined|{displayName: (null|string|undefined), email: string, photoUrl: (null|string|undefined), providerId: (null|string|undefined)}");
        var d = a.account;
        return I('<div class="gitkit-avatar-with-idp"><img class="gitkit-idp-icon ' + L(Ze({idpName: c.name})) + '" src="' + L(M($e({idpName: c.name}, b))) + '">' + ((null == d ? 0 : d.photoUrl) ? '<img class="gitkit-account-photo" src="' + L(M(d.photoUrl)) + '" onerror="this.src=\'' + L(String(b.defaultPhotoUrl).replace(Xe, Ve)) + "'; this.onerror=undefined;\">" : "") + "</div>")
    }, ff = function(a) {
        N(n(a.message) || a.message instanceof H, "message", a.message, "string|goog.soy.data.SanitizedContent");
        a = "" + ('<div class="gitkit-info-bar gitkit-id-info-bar"><p class="gitkit-info-bar-message">' + 
        J(a.message) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="gitkit-link gitkit-id-dismiss-info-bar">Dismiss</a></p></div>');
        return I(a)
    };
    ff.soyTemplateName = "gitkit.soy2.element.infoBar";
    var gf = function() {
        return I('<div class="gitkit-busy-indicator gitkit-id-busy-indicator"></div>')
    };
    gf.soyTemplateName = "gitkit.soy2.element.busyIndicator";
    var hf = function(a, b) {
        var c, d = Fa(a.account, "expected parameter 'account' of type [displayName: null|string, email: string, photoUrl: null|string, providerId: null|string].");
        N(null == a.idp || ia(a.idp), "idp", a.idp, "null|undefined|{displayName: string, name: string}");
        var e = a.idp;
        return I('<div class="gitkit-account-chip gitkit-id-account-chip" data-email="' + L(d.email) + '"' + (d.displayName ? 'data-display-name="' + L(d.displayName) + '"' : "") + (d.providerId ? 'data-provider-id="' + L(d.providerId) + '"' : "") + '><img class="gitkit-account-chip-photo" src="' + 
        L(M(null == (c = d.photoUrl) ? b.defaultPhotoUrl : c)) + '" onerror="this.src=\'' + L(String(b.defaultPhotoUrl).replace(Xe, Ve)) + "'; this.onerror=undefined;\">" + (d.displayName ? '<span class="gitkit-account-chip-name">' + J(d.displayName) + "</span>" : "") + '<span class="' + (d.displayName ? "gitkit-account-chip-email" : "gitkit-account-chip-email-only") + '">' + (e ? '<img class="gitkit-idp-favicon ' + L(Ze({idpName: e.name})) + '" src="' + L(M($e({idpName: e.name}, b))) + '" title="' + L(e.displayName) + '">' : "") + '<span class="gitkit-account-chip-email-label">' + 
        J(d.email) + "</span></span></div>")
    }, Ze = function(a) {
        N(n(a.idpName) || a.idpName instanceof H, "idpName", a.idpName, "string|goog.soy.data.SanitizedContent");
        var b = "";
        switch (a.idpName) {
            case "password":
                b += "gitkit-idp-password";
                break;
            case "google":
                b += "gitkit-idp-google";
                break;
            case "googleplus":
                b += "gitkit-idp-googleplus";
                break;
            case "microsoft":
                b += "gitkit-idp-microsoft";
                break;
            case "yahoo":
                b += "gitkit-idp-yahoo";
                break;
            case "aol":
                b += "gitkit-idp-aol";
                break;
            case "facebook":
                b += "gitkit-idp-facebook";
                break;
            case "paypal":
                b += 
                "gitkit-idp-paypal";
                break;
            case "twitter":
                b += "gitkit-idp-twitter"
        }
        return new Je(b, void 0)
    }, $e = function(a, b) {
        N(n(a.idpName) || a.idpName instanceof H, "idpName", a.idpName, "string|goog.soy.data.SanitizedContent");
        var c = "";
        switch (a.idpName) {
            case "google":
                c += M(b.googleLogo);
                break;
            case "googleplus":
                c += M(b.googleplusLogo);
                break;
            case "microsoft":
                c += M(b.microsoftLogo);
                break;
            case "yahoo":
                c += M(b.yahooLogo);
                break;
            case "aol":
                c += M(b.aolLogo);
                break;
            case "facebook":
                c += M(b.facebookLogo);
                break;
            case "paypal":
                c += M(b.paypalLogo);
                break;
            case "twitter":
                c += M(b.twitterLogo)
        }
        return Le(c)
    };
    var kf = function() {
        Qb(jf.call(this))
    }, jf = function() {
        return this.getElementByClass("gitkit-id-info-bar")
    }, lf = function() {
        return this.getElementByClass("gitkit-id-dismiss-info-bar")
    };
    var mf = function() {
        return this.getElementByClass("gitkit-id-name")
    }, nf = function() {
        return this.getElementByClass("gitkit-id-name-error")
    }, of = function(a, b) {
        var c = Xb(a), c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
        F(a, c);
        if (c)
            return Sd(b), !0;
        Td(b, "Please fill out the name field.");
        return !1
    };
    var pf = function() {
        return this.getElementByClass("gitkit-id-new-password")
    }, qf = function() {
        return this.getElementByClass("gitkit-id-password-again")
    }, rf = function() {
        return this.getElementByClass("gitkit-id-new-password-error")
    }, sf = function(a, b, c) {
        var d = Xb(a), e = Xb(b);
        if (d || e) {
            if (d != e)
                return F(a, !!d), F(b, !1), Td(c, "The passwords you entered do not match."), !1;
            F(a, !0);
            F(b, !0);
            Sd(c);
            return !0
        }
        F(a, !1);
        F(b, !1);
        Td(c, "Please fill out the password fields.");
        return !1
    }, tf = function() {
        for (var a = rf.call(this), b = [pf.call(this), 
            qf.call(this)], c = 0; c < b.length; c++)
            Od(this, b[c], function() {
                sf(b[0], b[1], a)
            })
    }, uf = function() {
        var a = pf.call(this), b = qf.call(this), c = rf.call(this);
        return sf(a, b, c) ? Xb(a) : null
    };
    var vf = function() {
        return this.getElementByClass("gitkit-id-password")
    }, wf = function() {
        return this.getElementByClass("gitkit-id-password-error")
    }, xf = function(a, b) {
        if (Xb(a))
            return F(a, !0), Sd(b), !0;
        F(a, !1);
        Td(b, "Please enter your password.");
        return !1
    }, yf = function() {
        var a = vf.call(this), b = wf.call(this);
        Od(this, a, function() {
            Ud(b) && xf(a, b)
        })
    }, zf = function() {
        var a = vf.call(this), b = wf.call(this);
        return xf(a, b) ? Xb(a) : null
    };
    var Af = function(a) {
        fc.call(this, "callback");
        this.response = a
    };
    t(Af, fc);
    var Bf = function() {
        fc.call(this, "expired-callback")
    };
    t(Bf, fc);
    var Df = function(a, b, c) {
        var d = 0 == Rb(Kb(document, c)).length;
        v(d);
        this.widgetId_ = grecaptcha.render(c, Cf(this, a, b));
        this.container_ = Kb(document, c);
        this.key_ = a;
        this.container_.style.display = "block";
        D.call(this)
    };
    t(Df, D);
    var Cf = function(a, b, c) {
        return {sitekey: b,stoken: c,theme: "light",type: "image",callback: function(b) {
                return a.dispatchEvent(new Af(b))
            },"expired-callback": function() {
                return a.dispatchEvent(new Bf)
            }}
    };
    Df.prototype.getContainer = function() {
        return this.container_
    };
    Df.prototype.getKey = function() {
        return this.key_
    };
    Df.prototype.getResponse = function() {
        return grecaptcha.getResponse(this.widgetId_)
    };
    Df.prototype.reset = function(a, b) {
        var c = Cf(this, a, b);
        this.key_ = a;
        grecaptcha.reset(this.widgetId_, c);
        this.container_.style.display = "block"
    };
    var Ef = function() {
        return this.getElementByClass("gitkit-id-recaptcha-error")
    }, Ff = function(a) {
        return Kb(document, a || "gitkit-id-recaptcha")
    }, Jf = function(a, b, c) {
        c = Ff(c);
        if (Gf.call(this) && this.recaptchaInstance_.getContainer() == c && this.recaptchaInstance_.getKey() == a)
            this.recaptchaInstance_.reset(a, b);
        else {
            Hf.call(this);
            this.recaptchaInstance_ = new Df(a, b, c);
            var d = this;
            rc(this.recaptchaInstance_, "callback", function() {
                If.call(d)
            })
        }
    }, Kf = function(a, b) {
        v(Gf.call(this));
        this.recaptchaInstance_.reset(a, b)
    }, Hf = 
    function() {
        if (Gf.call(this)) {
            var a = this.recaptchaInstance_;
            if (a)
                if (hc(a))
                    a.eventTargetListeners_ && a.eventTargetListeners_.removeAll(void 0);
                else {
                    var b = uc(a);
                    if (b) {
                        var c = 0, d;
                        for (d in b.listeners)
                            for (var e = b.listeners[d].concat(), f = 0; f < e.length; ++f)
                                Ac(e[f]) && ++c
                    }
                }
            a.widgetId_ = -1;
            a.key_ = "";
            Kb(document, a.container_).innerHTML = "";
            this.recaptchaInstance_ = a.container_ = null
        }
    }, Gf = function() {
        return "undefined" != typeof this.recaptchaInstance_ && !!this.recaptchaInstance_ && this.recaptchaInstance_ instanceof Df
    }, 
    If = function() {
        var a = null, b = Ef.call(this);
        Gf.call(this) && (a = this.recaptchaInstance_.getResponse());
        a ? Sd(b) : Td(b, "Please click the checkbox above.");
        return a
    };
    var Lf = function() {
        return this.getElementByClass("gitkit-id-tos")
    }, Mf = function() {
        return this.getElementByClass("gitkit-id-tos-error")
    }, Nf = function(a, b) {
        if (Xb(a))
            return Sd(b), !0;
        Td(b, "You must agree to the Terms of Service.");
        return !1
    };
    var Of = function(a, b, c, d) {
        this.email_ = a;
        this.displayName_ = b || null;
        this.photoUrl_ = c || null;
        this.providerId_ = d || null
    };
    Of.prototype.getEmail = function() {
        return this.email_
    };
    Of.prototype.getDisplayName = function() {
        return this.displayName_ || null
    };
    Of.prototype.getProviderId = function() {
        return this.providerId_ || null
    };
    Of.prototype.toPlainObject = function() {
        return {email: this.email_,displayName: this.displayName_,photoUrl: this.photoUrl_,providerId: this.providerId_}
    };
    var Pf = function(a) {
        return a.email ? new Of(a.email, a.displayName, a.photoUrl, a.providerId) : null
    };
    var Qf = function() {
        return I('<div class="gitkit-sign-in-button gitkit-id-page-sign-in-button">' + K(O({type: "signIn"})) + "</div>")
    };
    Qf.soyTemplateName = "gitkit.soy2.page.signInButton";
    var Rf = function(a, b, c) {
        Fa(a.account, "expected parameter 'account' of type [displayName: null|string, email: string, photoUrl: null|string, providerId: null|string].");
        a = "" + ('<div class="gitkit-user-card gitkit-id-page-user-card"><div class="gitkit-user-card-chip gitkit-id-user-card-chip" tabindex="0">' + K(hf(a, c)) + '<div class="gitkit-user-card-arrow"></div></div><ul class="gitkit-hidden gitkit-user-card-menu gitkit-id-user-card-menu"><li class="gitkit-user-card-menuitem gitkit-id-menu-manage-account" tabindex="0">Manage account</li><li class="gitkit-user-card-menuitem gitkit-id-menu-sign-out" tabindex="0">Sign out</li></ul></div>');
        return I(a)
    };
    Rf.soyTemplateName = "gitkit.soy2.page.userCard";
    var Sf = function(a) {
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        N(null == a.remember || ga(a.remember) || 1 === a.remember || 0 === a.remember, "remember", a.remember, "boolean|null|undefined");
        var b;
        b = "";
        var c = '<div class="gitkit-container gitkit-id-page-sign-in"><h1 class="gitkit-title">Sign in</h1><form onsubmit="return false;"><div class="gitkit-relative-wrapper">' + K(Ye(a)) + '<input type="button" class="gitkit-arrow-indicator gitkit-id-arrow-indicator"></div><div class="gitkit-sign-in-options">';
        a = 
        a || {};
        N(null == a.remember || ga(a.remember) || 1 === a.remember || 0 === a.remember, "remember", a.remember, "boolean|null|undefined");
        a = "" + ('<label class="gitkit-checkbox-label"><input type="checkbox" name="remember" class="gitkit-id-remember-account" value="remember"' + (a.remember ? "checked" : "") + ">Remember me on this device</label>");
        a = I(a);
        b += c + J(a) + '<p class="gitkit-text"><a href="javascript:void(0)" class="gitkit-link gitkit-id-problem-sign-in">Problem signing in?</a></p><div></form></div>';
        return I(b)
    };
    Sf.soyTemplateName = "gitkit.soy2.page.signIn";
    var Tf = function(a, b, c) {
        a = a || {};
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        N(null == a.recommendedIdp || ia(a.recommendedIdp), "recommendedIdp", a.recommendedIdp, "null|undefined|{displayName: string, name: string}");
        var d = a.recommendedIdp;
        N(null == a.recommendedIdpAuthUri || a.recommendedIdpAuthUri instanceof H || n(a.recommendedIdpAuthUri), "recommendedIdpAuthUri", a.recommendedIdpAuthUri, "null|string|undefined");
        var e = a.recommendedIdpAuthUri;
        N(null == a.otherIdps || 
        ea(a.otherIdps), "otherIdps", a.otherIdps, "Array<{displayName: string, name: string}>|undefined");
        b = a.otherIdps;
        a = '<div class="gitkit-container gitkit-id-page-sign-up"><h1 class="gitkit-title">Sign up</h1><form onsubmit="return false;">' + K(Ye(a));
        d && (a += '<div class="gitkit-recommend-option"><p class="gitkit-text">Based on your email address, we recommend</p>' + K(af({idp: d,authUri: e}, c)) + "</div>");
        if (b && 0 < b.length) {
            d && (a += '<p class="gitkit-text">Or choose one of the following options</p>');
            a += '<ul class="gitkit-idp-list">';
            d = b.length;
            for (e = 0; e < d; e++)
                a += '<li class="gitkit-list-item">' + K(af({idp: b[e]}, c)) + "</li>";
            a += "</ul>"
        }
        return I(a + "</form></div>")
    };
    Tf.soyTemplateName = "gitkit.soy2.page.signUp";
    var Uf = function(a, b, c) {
        a = a || {};
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        N(null == a.idp || ia(a.idp), "idp", a.idp, "null|undefined|{displayName: string, name: string}");
        b = a.idp;
        N(null == a.authUri || a.authUri instanceof H || n(a.authUri), "authUri", a.authUri, "null|string|undefined");
        N(null == a.recaptchaId || a.recaptchaId instanceof H || n(a.recaptchaId), "recaptchaId", a.recaptchaId, "null|string|undefined");
        var d;
        d = '<div class="gitkit-container gitkit-id-page-password-sign-in"><h1 class="gitkit-title">Sign in</h1><form onsubmit="return false;">' + 
        K(Ye(a));
        b && (d += '<div class="gitkit-recommend-option"><p class="gitkit-text">Based on your email address, we recommend</p>' + K(af(a, c)) + '</div><p class="gitkit-text">Or continue to sign in with password</p>');
        d += K(cf(null)) + K(df(a)) + '<div class="gitkit-form-actions">' + K(O({type: "signIn"})) + '<a class="gitkit-link gitkit-indent gitkit-id-secondary-link" href="javascript:void(0)">Forgot password?</a></div></form></div>';
        return I(d)
    };
    Uf.soyTemplateName = "gitkit.soy2.page.passwordSignIn";
    var Vf = function(a) {
        a = a || {};
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        N(null == a.name || a.name instanceof H || n(a.name), "name", a.name, "null|string|undefined");
        N(null == a.tosUrl || a.tosUrl instanceof H || n(a.tosUrl), "tosUrl", a.tosUrl, "null|string|undefined");
        var b = a.tosUrl;
        N(null == a.recaptchaId || a.recaptchaId instanceof H || n(a.recaptchaId), "recaptchaId", a.recaptchaId, "null|string|undefined");
        N(null == a.allowCancel || ga(a.allowCancel) || 1 === a.allowCancel || 0 === 
        a.allowCancel, "allowCancel", a.allowCancel, "boolean|null|undefined");
        var c = a.allowCancel, d;
        d = "";
        var e = '<div class="gitkit-container gitkit-id-page-password-sign-up"><h1 class="gitkit-title">Sign up</h1><form onsubmit="return false;">' + K(Ye(a)), f, g;
        g = a || {};
        N(null == g.name || g.name instanceof H || n(g.name), "name", g.name, "null|string|undefined");
        g = "" + ('<label class="gitkit-label">Name</label><input type="text" name="name" autocomplete="name" class="gitkit-input gitkit-id-name" value="' + L(null == (f = g.name) ? 
        "" : f) + '"><p class="gitkit-error gitkit-hidden gitkit-id-name-error"></p>');
        f = I(g);
        e = e + J(f) + K(bf({choose: !0})) + K(df(a));
        b ? (b = a, N(n(b.tosUrl) || b.tosUrl instanceof H, "tosUrl", b.tosUrl, "string|goog.soy.data.SanitizedContent"), a = "", b = "I agree to the " + ('<a href="' + L(M(b.tosUrl)) + '" class="gitkit-link" target="_blank">Terms of Service</a>.'), a = I(a + ('<div class="gitkit-tos"><label class="gitkit-checkbox-label"><input type="checkbox" name="tos" class="gitkit-id-tos" value="tos">' + b + '</label></div><p class="gitkit-error gitkit-hidden gitkit-id-tos-error"></p>')), 
        a = J(a)) : a = "";
        d += e + a + '<div class="gitkit-form-actions">' + K(O({type: "signUp"}));
        c && (d += '<a class="gitkit-link gitkit-indent gitkit-id-secondary-link" href="javascript:void(0)">Cancel</a>');
        return I(d + "</div></form></div>")
    };
    Vf.soyTemplateName = "gitkit.soy2.page.passwordSignUp";
    var Wf = function(a) {
        a = a || {};
        N(null == a.email || a.email instanceof H || n(a.email), "email", a.email, "null|string|undefined");
        N(null == a.recaptchaId || a.recaptchaId instanceof H || n(a.recaptchaId), "recaptchaId", a.recaptchaId, "null|string|undefined");
        N(null == a.allowCancel || ga(a.allowCancel) || 1 === a.allowCancel || 0 === a.allowCancel, "allowCancel", a.allowCancel, "boolean|null|undefined");
        var b = a.allowCancel;
        a = "" + ('<div class="gitkit-container gitkit-id-page-password-recovery"><h1 class="gitkit-title">Forgot password</h1><form onsubmit="return false;">' + 
        K(Ye(a)) + K(df(a)) + '<div class="gitkit-form-actions">' + K(O({type: "continue"})));
        b && (a += '<a class="gitkit-link gitkit-indent gitkit-id-secondary-link" href="javascript:void(0)">Cancel</a>');
        return I(a + "</div></form></div>")
    };
    Wf.soyTemplateName = "gitkit.soy2.page.passwordRecovery";
    var Xf = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        var b = "";
        a = "An email has been sent to " + (J(a.email) + ". Please check your email and follow the instructions to reset your password.");
        b += '<div class="gitkit-container gitkit-id-page-password-recovery-email-sent"><h1 class="gitkit-title">Please check your email</h1><p class="gitkit-text">' + a + '</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>";
        return I(b)
    };
    Xf.soyTemplateName = "gitkit.soy2.page.passwordRecoveryEmailSent";
    var Yf = function() {
        return I('<div class="gitkit-container gitkit-id-page-callback"><div class="gitkit-callback-indicator-container">' + K(gf()) + "</div></div>")
    };
    Yf.soyTemplateName = "gitkit.soy2.page.callback";
    var Zf = function(a, b, c) {
        b = Fa(a.newAccount, "expected parameter 'newAccount' of type [displayName: null|string, email: string, photoUrl: null|string, providerId: null|string].");
        var d = Fa(a.newIdp, "expected parameter 'newIdp' of type [displayName: string, name: string].");
        N(null == a.recaptchaId || a.recaptchaId instanceof H || n(a.recaptchaId), "recaptchaId", a.recaptchaId, "null|string|undefined");
        var e = "", f = "Verify " + J(b.email), g = "Previously you signed in with password. But just now, you signed in with " + (J(d.displayName) + 
        "."), e = e + ('<div class="gitkit-container gitkit-id-page-password-linking"><h1 class="gitkit-title">' + f + '</h1><p class="gitkit-text">' + g + "</p>" + K(ef({account: b,idp: d}, c)) + '<p class="gitkit-text">So we need to verify that you are the same person by checking your password.</p><br><form onsubmit="return false;"><input type="email" name="email" class="gitkit-hidden gitkit-id-email" value="' + L(b.email) + '">' + K(cf(null)) + K(df(a)) + '<div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></form></div>");
        return I(e)
    };
    Zf.soyTemplateName = "gitkit.soy2.page.passwordLinking";
    var $f = function(a, b, c) {
        b = Fa(a.oldAccount, "expected parameter 'oldAccount' of type [displayName: null|string, email: string, photoUrl: null|string, providerId: null|string].");
        var d = Fa(a.oldIdp, "expected parameter 'oldIdp' of type [displayName: string, name: string]."), e = Fa(a.newAccount, "expected parameter 'newAccount' of type [displayName: null|string, email: string, photoUrl: null|string, providerId: null|string].");
        a = Fa(a.newIdp, "expected parameter 'newIdp' of type [displayName: string, name: string].");
        var f = "", g = "Verify " + J(e.email), k = "Previously you signed in with " + (J(d.displayName) + "."), C = "But just now, you signed in with " + (J(a.displayName) + "."), Wa = "So we need to verify with " + (J(d.displayName) + " that you are the same person."), f = f + ('<div class="gitkit-container gitkit-id-page-federated-linking"><h1 class="gitkit-title">' + g + '</h1><p class="gitkit-text">' + k + "</p>" + K(ef({account: b,idp: d}, c)) + '<p class="gitkit-text">' + C + "</p>" + K(ef({account: e,idp: a}, c)) + '<p class="gitkit-text">' + Wa + '</p><br><form onsubmit="return false;"><input type="email" name="email" class="gitkit-hidden gitkit-id-email" value="' + 
        L(b.email) + '"><input type="text" name="providerId" class="gitkit-hidden gitkit-id-provider-id" value="' + L(b.providerId) + '"><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></form></div>");
        return I(f)
    };
    $f.soyTemplateName = "gitkit.soy2.page.federatedLinking";
    var ag = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        a = "" + ('<div class="gitkit-container gitkit-id-page-password-reset"><h1 class="gitkit-title">Set a new password</h1><form onsubmit="return false;">' + K(Ye({email: a.email,disabled: !0})) + K(bf(a)) + '<div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></form></div>");
        return I(a)
    };
    ag.soyTemplateName = "gitkit.soy2.page.passwordReset";
    var bg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-password-reset-failure"><h1 class="gitkit-title">Failure</h1><p class="gitkit-text">Your password reset link is invalid or expired.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    bg.soyTemplateName = "gitkit.soy2.page.passwordResetFailure";
    var cg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-email-change-success"><h1 class="gitkit-title">Success</h1><p class="gitkit-text">You have confirmed your new email address. The next time you need to sign-in, please use this address.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    cg.soyTemplateName = "gitkit.soy2.page.emailChangeSuccess";
    var dg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-email-change-failure"><h1 class="gitkit-title">Failure</h1><p class="gitkit-text">Your new email address verification link is invalid or expired.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    dg.soyTemplateName = "gitkit.soy2.page.emailChangeFailure";
    var eg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-email-verification-success"><h1 class="gitkit-title">Success</h1><p class="gitkit-text">Your email address has been verified.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    eg.soyTemplateName = "gitkit.soy2.page.emailVerificationSuccess";
    var fg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-email-verification-failure"><h1 class="gitkit-title">Failure</h1><p class="gitkit-text">Your email address verification link is invalid or expired.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    fg.soyTemplateName = "gitkit.soy2.page.emailVerificationFailure";
    var gg = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        var b = a.email;
        N(null == a.allowChange || ga(a.allowChange) || 1 === a.allowChange || 0 === a.allowChange, "allowChange", a.allowChange, "boolean|null|undefined");
        a = a.allowChange;
        b = "" + ('<div class="gitkit-container gitkit-id-page-email-info"><h1 class="gitkit-title">Email address</h1><p class="gitkit-text">Your current email address on file is:<br><strong>' + J(b) + "</strong></p>");
        a && (b += '<p class="gitkit-text"><a href="javascript:void(0)" class="gitkit-link gitkit-edit-action gitkit-id-change-email">Update email address</a></p>');
        return I(b + "</div>")
    };
    gg.soyTemplateName = "gitkit.soy2.page.emailInfo";
    var hg = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        a = "" + ('<div class="gitkit-container gitkit-id-page-email-change"><h1 class="gitkit-title">Update email address</h1><p class="gitkit-text">Your current email address on file is:<br><strong>' + J(a.email) + '</strong></p><br><form onsubmit="return false;">' + K(Ye({changeEmail: !0})) + '<div class="gitkit-form-actions">' + K(O({type: "continue"})) + '<a class="gitkit-link gitkit-indent gitkit-id-secondary-link" href="javascript:void(0)">Cancel</a></div></form></div>');
        return I(a)
    };
    hg.soyTemplateName = "gitkit.soy2.page.emailChange";
    var ig = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        var b = "";
        a = "A verification email has been sent to " + (J(a.email) + ". Just check your email and follow the link to finish changing your email address.");
        b += '<div class="gitkit-container gitkit-id-page-email-change-email-sent"><h1 class="gitkit-title">Please verify your email address</h1><p class="gitkit-text">' + a + '</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>";
        return I(b)
    };
    ig.soyTemplateName = "gitkit.soy2.page.emailChangeEmailSent";
    var jg = function(a) {
        N(n(a.updateTime) || a.updateTime instanceof H, "updateTime", a.updateTime, "string|goog.soy.data.SanitizedContent");
        a = "" + ('<div class="gitkit-container gitkit-id-page-password-info"><h1 class="gitkit-title">Password</h1><p class="gitkit-text">Your password was last updated on:<br><strong>' + J(a.updateTime) + '</strong></p><p class="gitkit-text"><a href="javascript:void(0)" class="gitkit-link gitkit-edit-action gitkit-id-change-password">Change password</a></p></div>');
        return I(a)
    };
    jg.soyTemplateName = "gitkit.soy2.page.passwordInfo";
    var kg = function(a) {
        N(n(a.email) || a.email instanceof H, "email", a.email, "string|goog.soy.data.SanitizedContent");
        var b = "";
        a = "Set a new password for <strong>" + (J(a.email) + "</strong>. We highly recommend you create a unique password, one that you don't use on any other website.");
        b += '<div class="gitkit-container gitkit-id-page-password-change"><h1 class="gitkit-title">Change password</h1><p class="gitkit-text">' + a + '</p><form onsubmit="return false;">' + K(cf({current: !0})) + K(bf(null)) + '<div class="gitkit-form-actions">' + 
        K(O({type: "continue"})) + '<a class="gitkit-link gitkit-indent gitkit-id-secondary-link" href="javascript:void(0)">Cancel</a></div></form></div>';
        return I(b)
    };
    kg.soyTemplateName = "gitkit.soy2.page.passwordChange";
    var lg = function() {
        var a;
        a = "" + ('<div class="gitkit-container gitkit-id-page-password-change-success"><h1 class="gitkit-title">Password Updated</h1><p class="gitkit-text">You have successfully changed your password.</p><div class="gitkit-form-actions">' + K(O({type: "continue"})) + "</div></div>");
        return I(a)
    };
    lg.soyTemplateName = "gitkit.soy2.page.passwordChangeSuccess";
    var mg = function(a, b, c) {
        var d;
        b = Ga(a.accounts, "expected parameter 'accounts' of type list<[displayName: null|string, email: string, photoUrl: null|string, providerId: null|string]>.");
        var e = Ga(a.idps, "expected parameter 'idps' of type list<[displayName: string, name: string]>.");
        N(null == a.siteName || a.siteName instanceof H || n(a.siteName), "siteName", a.siteName, "null|string|undefined");
        var f;
        f = "" + ('<div class="gitkit-container gitkit-id-page-linked-accounts"><h1 class="gitkit-title">Linked accounts</h1><p class="gitkit-text">Below are the one or more ways you sign in to ' + 
        K(null == (d = a.siteName) ? "this site" : d) + '. You may remove any except the first.</p><ul class="gitkit-account-chip-list">');
        d = b.length;
        for (a = 0; a < d; a++) {
            var g = b[a];
            f += '<li class="gitkit-list-item">' + K(hf({account: g,idp: e[a]}, c));
            if (0 != a) {
                var k;
                k = "Remove".replace(Oe, Pe);
                f += '<a href="javascript:void(0)" class="gitkit-remove-action gitkit-id-remove-idp" title="' + k + '" data-provider-id="' + L(g.providerId) + '"></a>'
            }
            f += "</li>"
        }
        return I(f + "</ul></div>")
    };
    mg.soyTemplateName = "gitkit.soy2.page.linkedAccounts";
    var ng = function(a) {
        a = a || {};
        N(null == a.showTitle || ga(a.showTitle) || 1 === a.showTitle || 0 === a.showTitle, "showTitle", a.showTitle, "boolean|null|undefined");
        var b = '<div class="gitkit-container-outer gitkit-id-page-password-account-manage">';
        a.showTitle && (b += '<h1 class="gitkit-title">Manage account</h1>');
        return I(b + '<ul class="gitkit-manage-account-list"><li class="gitkit-list-item gitkit-id-email-info-container"></li><li class="gitkit-list-item gitkit-id-password-info-container"></li></ul></div>')
    };
    ng.soyTemplateName = "gitkit.soy2.page.passwordAccountManage";
    var og = function(a) {
        a = a || {};
        N(null == a.showTitle || ga(a.showTitle) || 1 === a.showTitle || 0 === a.showTitle, "showTitle", a.showTitle, "boolean|null|undefined");
        var b = '<div class="gitkit-container-outer gitkit-id-page-federated-account-manage">';
        a.showTitle && (b += '<h1 class="gitkit-title">Manage account</h1>');
        return I(b + '<ul class="gitkit-manage-account-list"><li class="gitkit-list-item gitkit-id-email-info-container"></li><li class="gitkit-list-item gitkit-id-linked-accounts-container"></li></ul></div>')
    };
    og.soyTemplateName = "gitkit.soy2.page.federatedAccountManage";
    var pg = {defaultPhotoUrl: "https://www.gstatic.com/authtoolkit/image/profile-picture-small.png",googleLogo: "https://www.gstatic.com/authtoolkit/image/google.png",googleplusLogo: "https://www.gstatic.com/authtoolkit/image/googleplus.png",microsoftLogo: "https://www.gstatic.com/authtoolkit/image/microsoft.png",yahooLogo: "https://www.gstatic.com/authtoolkit/image/yahoo.png",aolLogo: "https://www.gstatic.com/authtoolkit/image/aol.png",facebookLogo: "https://www.gstatic.com/authtoolkit/image/facebook.png",paypalLogo: "https://www.gstatic.com/authtoolkit/image/paypal.png",
        twitterLogo: "https://www.gstatic.com/authtoolkit/image/twitter.png",imageBase: "https://www.gstatic.com/authtoolkit/image/"}, P = function(a, b, c) {
        E.call(this, c);
        this.template_ = a;
        this.templateData_ = b;
        this.inProcessing_ = !1
    };
    t(P, E);
    P.prototype.createDom = function() {
        this.element_ = Ce(this.template_, this.templateData_, pg, this.getDomHelper())
    };
    P.prototype.disposeInternal = function() {
        this.templateData_ = this.template_ = null;
        this.inProcessing_ = !1;
        P.superClass_.disposeInternal.call(this)
    };
    var qg = function(a) {
        var b = Ce(gf, null, null, a.getDomHelper());
        a.getElement().appendChild(b);
        a.inProcessing_ = !0
    }, rg = function(a, b, c, d) {
        a.inProcessing_ || (qg(a), b(c, function(b) {
            if (!a.isDisposed()) {
                a.inProcessing_ = !1;
                var c = a.getElementByClass("gitkit-id-busy-indicator");
                Qb(c);
                d(b)
            }
        }))
    }, sg = function(a, b, c, d, e) {
        rg(a, la(b, c), d, e)
    };
    P.prototype.getContainer = function() {
        return this.getElement().parentElement
    };
    var tg = function(a, b, c) {
        Pd(a, b, function() {
            c.focus()
        })
    }, ug = function(a, b, c) {
        Pd(a, b, function() {
            c()
        })
    }, vg = function(a, b, c, d) {
        Pd(a, b, function() {
            Vd(c) && d()
        })
    };
    r(P.prototype, {showInfoBar: function(a) {
            kf.call(this);
            var b = Ce(ff, {message: a}, null, this.getDomHelper());
            this.getElement().appendChild(b);
            Qd(this, lf.call(this), function() {
                Qb(b)
            })
        },dismissInfoBar: kf,getInfoBarElement: jf,getInfoBarDismissLinkElement: lf});
    var wg = function(a, b, c) {
        P.call(this, gg, {email: a,allowChange: !!b}, c);
        this.onUpdateClick_ = b
    };
    t(wg, P);
    wg.prototype.enterDocument = function() {
        var a = this.getUpdateLinkElement();
        if (a) {
            var b = this;
            Qd(this, a, function() {
                b.onUpdateClick_()
            })
        }
    };
    wg.prototype.disposeInternal = function() {
        this.onUpdateClick_ = null;
        wg.superClass_.disposeInternal.call(this)
    };
    wg.prototype.getUpdateLinkElement = function() {
        return this.getElementByClass("gitkit-id-change-email")
    };
    var xg = function(a, b, c) {
        a = new Date(a);
        P.call(this, jg, {updateTime: a.toLocaleDateString() + " " + a.toLocaleTimeString()}, c);
        this.onUpdateClick_ = b
    };
    t(xg, P);
    xg.prototype.enterDocument = function() {
        var a = this;
        Qd(this, this.getUpdateLinkElement(), function() {
            a.onUpdateClick_()
        })
    };
    xg.prototype.disposeInternal = function() {
        this.onUpdateClick_ = null;
        xg.superClass_.disposeInternal.call(this)
    };
    xg.prototype.getUpdateLinkElement = function() {
        return this.getElementByClass("gitkit-id-change-password")
    };
    var yg = function(a, b, c, d) {
        P.call(this, mg, {accounts: Ka(a, function(a) {
                return a.toPlainObject()
            }),idps: Ka(a, function(a) {
                a = v(a.getProviderId());
                return v(pe(a)).toPlainObject()
            }),siteName: c}, d);
        this.onRemoveClick_ = b
    };
    t(yg, P);
    yg.prototype.enterDocument = function() {
        var a = this;
        Ia(this.getElementsByClass("gitkit-id-remove-idp"), function(b) {
            Qd(a, b, function() {
                var c = v(re(b, "providerId"));
                a.onRemoveClick_(c)
            })
        })
    };
    yg.prototype.disposeInternal = function() {
        this.onRemoveClick_ = null;
        yg.superClass_.disposeInternal.call(this)
    };
    var zg = function(a, b, c) {
        P.call(this, a, {showTitle: b}, c)
    };
    t(zg, P);
    var Ag = function(a, b, c) {
        var d = Kd(a, c.getId());
        d && (a.removeChild(d), d.dispose());
        d = a.children_ ? a.children_.length : 0;
        v(!!c, "Provided element must not be null.");
        if (c.inDocument_ && !a.inDocument_)
            throw Error("Component already rendered");
        if (0 > d || d > (a.children_ ? a.children_.length : 0))
            throw Error("Child component index out of bounds");
        a.childIndex_ && a.children_ || (a.childIndex_ = {}, a.children_ = []);
        if (c.getParent() == a) {
            var e = c.getId();
            a.childIndex_[e] = c;
            Ra(a.children_, c)
        } else
            fb(a.childIndex_, c.getId(), c);
        Ld(c, 
        a);
        Xa(a.children_, d, 0, c);
        c.inDocument_ && a.inDocument_ && c.getParent() == a ? (a = a.element_, d = a.childNodes[d] || null, d != c.getElement() && a.insertBefore(c.getElement(), d)) : a.inDocument_ && !c.inDocument_ && c.element_ && c.element_.parentNode && 1 == c.element_.parentNode.nodeType && c.enterDocument();
        c.render(b)
    }, Bg = function(a, b) {
        zg.call(this, og, a, b)
    };
    t(Bg, zg);
    Bg.prototype.showChildInEmailInfo = function(a) {
        Id(a, "emailInfo");
        Ag(this, this.getEmailInfoContainer(), a)
    };
    var Cg = function(a, b) {
        Id(b, "linkedAccounts");
        Ag(a, a.getElementByClass("gitkit-id-linked-accounts-container"), b)
    };
    Bg.prototype.getEmailInfoContainer = function() {
        return this.getElementByClass("gitkit-id-email-info-container")
    };
    var Dg = function(a, b) {
        zg.call(this, ng, a, b)
    };
    t(Dg, zg);
    Dg.prototype.showChildInEmailInfo = function(a) {
        Id(a, "emailInfo");
        Ag(this, this.getEmailInfoContainer(), a)
    };
    var Eg = function(a, b) {
        Id(b, "passwordInfo");
        Ag(a, a.getElementByClass("gitkit-id-password-info-container"), b)
    };
    Dg.prototype.getEmailInfoContainer = function() {
        return this.getElementByClass("gitkit-id-email-info-container")
    };
    var Fg = function(a) {
        P.call(this, Yf, void 0, a)
    };
    t(Fg, P);
    var Gg = function(a, b, c, d) {
        P.call(this, hg, {email: a}, d);
        this.onSubmitClick_ = b;
        this.onCancelClick_ = c
    };
    t(Gg, P);
    Gg.prototype.enterDocument = function() {
        this.initEmailElement();
        this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
        ug(this, this.getEmailElement(), this.onSubmitClick_);
        this.getEmailElement().focus()
    };
    Gg.prototype.disposeInternal = function() {
        this.onCancelClick_ = this.onSubmitClick_ = null;
        Gg.superClass_.disposeInternal.call(this)
    };
    r(Gg.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Hg = function(a, b, c, d) {
        var e = pe(Da(a.getProviderId())), f = pe(Da(b.getProviderId()));
        P.call(this, $f, {oldAccount: a.toPlainObject(),oldIdp: e.toPlainObject(),newAccount: b.toPlainObject(),newIdp: f.toPlainObject()}, d);
        this.onSubmitClick_ = c
    };
    t(Hg, P);
    Hg.prototype.enterDocument = function() {
        this.initFormElement(this.onSubmitClick_);
        this.getSubmitElement().focus()
    };
    Hg.prototype.disposeInternal = function() {
        this.onSubmitClick_ = null;
        Hg.superClass_.disposeInternal.call(this)
    };
    Hg.prototype.checkAndGetEmail = function() {
        return Da(Rd(this.getElementByClass("gitkit-id-email")))
    };
    r(Hg.prototype, {getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Ig = function(a, b) {
        P.call(this, Qf, null, b);
        this.onClick_ = a
    };
    t(Ig, P);
    Ig.prototype.enterDocument = function() {
        this.initFormElement(this.onClick_)
    };
    Ig.prototype.disposeInternal = function() {
        this.onClick_ = null;
        Ig.superClass_.disposeInternal.call(this)
    };
    r(Ig.prototype, {getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Jg = function(a, b, c, d) {
        P.call(this, Rf, {account: a.toPlainObject()}, d);
        this.onManageAccount_ = b;
        this.onSignOut_ = c
    };
    t(Jg, P);
    Jg.prototype.enterDocument = function() {
        var a = this.getElementByClass("gitkit-id-user-card-menu");
        Qd(this, this.getElementByClass("gitkit-id-user-card-chip"), function() {
            Ud(a) ? Sd(a) : Td(a)
        });
        Jd(this).listen(document, "click", function() {
            Ud(a) && Sd(a)
        });
        var b = this;
        Qd(this, this.getElementByClass("gitkit-id-menu-manage-account"), function() {
            Sd(a);
            b.onManageAccount_()
        });
        Qd(this, this.getElementByClass("gitkit-id-menu-sign-out"), function() {
            Sd(a);
            b.onSignOut_()
        })
    };
    Jg.prototype.disposeInternal = function() {
        this.onClick_ = null;
        Jg.superClass_.disposeInternal.call(this)
    };
    var Q = function(a, b, c, d) {
        P.call(this, a, b, d);
        this.onContinueClick_ = c || null
    };
    t(Q, P);
    Q.prototype.enterDocument = function() {
        this.onContinueClick_ && (this.initFormElement(this.onContinueClick_), this.getSubmitElement().focus())
    };
    Q.prototype.disposeInternal = function() {
        this.onContinueClick_ = null;
        Q.superClass_.disposeInternal.call(this)
    };
    r(Q.prototype, {getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Kg = function(a, b, c) {
        Q.call(this, Xf, {email: a}, b, c)
    };
    t(Kg, Q);
    var Lg = function(a, b) {
        Q.call(this, cg, null, a, b)
    };
    t(Lg, Q);
    var Mg = function(a, b) {
        Q.call(this, dg, null, a, b)
    };
    t(Mg, Q);
    var Ng = function(a, b) {
        Q.call(this, eg, null, a, b)
    };
    t(Ng, Q);
    var Og = function(a, b) {
        Q.call(this, fg, null, a, b)
    };
    t(Og, Q);
    var Pg = function(a, b) {
        Q.call(this, bg, null, a, b)
    };
    t(Pg, Q);
    var Qg = function(a, b, c) {
        Q.call(this, ig, {email: a}, b, c)
    };
    t(Qg, Q);
    var Rg = function(a, b) {
        Q.call(this, lg, null, a, b)
    };
    t(Rg, Q);
    var Sg = function(a, b, c, d) {
        P.call(this, kg, {email: a}, d);
        this.onSubmitClick_ = b;
        this.onCancelClick_ = c
    };
    t(Sg, P);
    Sg.prototype.enterDocument = function() {
        this.initPasswordElement();
        this.initNewPasswordElement();
        this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
        tg(this, this.getPasswordElement(), this.getNewPasswordElement());
        tg(this, this.getNewPasswordElement(), this.getConfirmPasswordElement());
        ug(this, this.getConfirmPasswordElement(), this.onSubmitClick_);
        this.getPasswordElement().focus()
    };
    Sg.prototype.disposeInternal = function() {
        this.onCancelClick_ = this.onSubmitClick_ = null;
        Sg.superClass_.disposeInternal.call(this)
    };
    r(Sg.prototype, {getPasswordElement: vf,getPasswordErrorElement: wf,initPasswordElement: yf,checkAndGetPassword: zf,getNewPasswordElement: pf,getConfirmPasswordElement: qf,getNewPasswordErrorElement: rf,initNewPasswordElement: tf,checkAndGetNewPassword: uf,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Tg = function(a, b, c) {
        var d = pe(Da(a.getProviderId()));
        P.call(this, Zf, {newAccount: a.toPlainObject(),newIdp: d.toPlainObject()}, c);
        this.onSubmitClick_ = b
    };
    t(Tg, P);
    Tg.prototype.enterDocument = function() {
        this.initPasswordElement();
        this.initFormElement(this.onSubmitClick_);
        vg(this, this.getPasswordElement(), this.getRecaptchaElement(), this.onSubmitClick_);
        this.getPasswordElement().focus()
    };
    Tg.prototype.disposeInternal = function() {
        this.onSubmitClick_ = null;
        this.destroyRecaptcha();
        Tg.superClass_.disposeInternal.call(this)
    };
    Tg.prototype.checkAndGetEmail = function() {
        return Da(Rd(this.getElementByClass("gitkit-id-email")))
    };
    r(Tg.prototype, {getPasswordElement: vf,getPasswordErrorElement: wf,initPasswordElement: yf,checkAndGetPassword: zf,getRecaptchaErrorElement: Ef,getRecaptchaElement: Ff,createRecaptcha: Jf,reloadRecaptcha: Kf,destroyRecaptcha: Hf,isRecaptchaShown: Gf,checkAndGetRecaptchaResponse: If,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Ug = function(a, b, c, d) {
        P.call(this, Wf, {email: c,allowCancel: !!b}, d);
        this.onSubmitClick_ = a;
        this.onCancelClick_ = b
    };
    t(Ug, P);
    Ug.prototype.enterDocument = function() {
        this.initEmailElement();
        this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
        Rd(this.getEmailElement()) || this.getEmailElement().focus()
    };
    Ug.prototype.disposeInternal = function() {
        this.onCancelClick_ = this.onSubmitClick_ = null;
        this.destroyRecaptcha();
        Ug.superClass_.disposeInternal.call(this)
    };
    r(Ug.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae,getRecaptchaErrorElement: Ef,getRecaptchaElement: Ff,createRecaptcha: Jf,reloadRecaptcha: Kf,destroyRecaptcha: Hf,isRecaptchaShown: Gf,checkAndGetRecaptchaResponse: If,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Vg = function(a, b, c) {
        P.call(this, ag, {email: a}, c);
        this.onSubmitClick_ = b
    };
    t(Vg, P);
    Vg.prototype.enterDocument = function() {
        this.initNewPasswordElement();
        this.initFormElement(this.onSubmitClick_);
        tg(this, this.getNewPasswordElement(), this.getConfirmPasswordElement());
        ug(this, this.getConfirmPasswordElement(), this.onSubmitClick_);
        this.getNewPasswordElement().focus()
    };
    Vg.prototype.disposeInternal = function() {
        this.onSubmitClick_ = null;
        Vg.superClass_.disposeInternal.call(this)
    };
    r(Vg.prototype, {getNewPasswordElement: pf,getConfirmPasswordElement: qf,getNewPasswordErrorElement: rf,initNewPasswordElement: tf,checkAndGetNewPassword: uf,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Wg = function(a, b, c, d, e, f, g) {
        P.call(this, Uf, {email: d,idp: e ? e.toPlainObject() : void 0,authUri: f}, g);
        this.onSubmitClick_ = a;
        this.onForgotClick_ = b;
        this.onIdpClick_ = c
    };
    t(Wg, P);
    Wg.prototype.enterDocument = function() {
        this.initEmailElement();
        this.initIdpList(this.onIdpClick_);
        this.initPasswordElement();
        this.initFormElement(this.onSubmitClick_, this.onForgotClick_);
        tg(this, this.getEmailElement(), this.getPasswordElement());
        vg(this, this.getPasswordElement(), this.getRecaptchaElement(), this.onSubmitClick_);
        Rd(this.getEmailElement()) ? this.getPasswordElement().focus() : this.getEmailElement().focus()
    };
    Wg.prototype.disposeInternal = function() {
        this.onIdpClick_ = this.onForgotClick_ = this.onSubmitClick_ = null;
        this.destroyRecaptcha();
        Wg.superClass_.disposeInternal.call(this)
    };
    r(Wg.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae,initIdpList: se,getPasswordElement: vf,getPasswordErrorElement: wf,initPasswordElement: yf,checkAndGetPassword: zf,getRecaptchaErrorElement: Ef,getRecaptchaElement: Ff,createRecaptcha: Jf,reloadRecaptcha: Kf,destroyRecaptcha: Hf,isRecaptchaShown: Gf,checkAndGetRecaptchaResponse: If,getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Xg = function(a, b, c, d, e, f) {
        P.call(this, Vf, {email: d,name: e,tosUrl: a,allowCancel: !!c}, f);
        this.onSubmitClick_ = b;
        this.onCancelClick_ = c
    };
    t(Xg, P);
    Xg.prototype.enterDocument = function() {
        this.initEmailElement();
        this.initNameElement();
        this.initNewPasswordElement();
        this.hasTos() && this.initTosElement();
        this.initFormElement(this.onSubmitClick_, this.onCancelClick_);
        Yg(this)
    };
    Xg.prototype.disposeInternal = function() {
        this.onCancelClick_ = this.onSubmitClick_ = null;
        this.destroyRecaptcha();
        Xg.superClass_.disposeInternal.call(this)
    };
    var Yg = function(a) {
        tg(a, a.getEmailElement(), a.getNameElement());
        tg(a, a.getNameElement(), a.getNewPasswordElement());
        tg(a, a.getNewPasswordElement(), a.getConfirmPasswordElement());
        Pd(a, a.getConfirmPasswordElement(), function() {
            var b = a.getRecaptchaElement();
            a.getTosElement();
            if (Vd(b))
                if (a.hasTos())
                    a.getTosElement().focus();
                else
                    a.onSubmitClick_()
        });
        Rd(a.getEmailElement()) ? Rd(a.getNameElement()) ? a.getNewPasswordElement().focus() : a.getNameElement().focus() : a.getEmailElement().focus()
    };
    r(Xg.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae,getNameElement: mf,getNameErrorElement: nf,initNameElement: function() {
            var a = mf.call(this), b = nf.call(this);
            Od(this, a, function() {
                Ud(b) && of(a, b)
            })
        },checkAndGetName: function() {
            var a = mf.call(this), b = nf.call(this);
            return of(a, b) ? qa(v(Xb(a))) : null
        },getNewPasswordElement: pf,getConfirmPasswordElement: qf,getNewPasswordErrorElement: rf,initNewPasswordElement: tf,checkAndGetNewPassword: uf,getRecaptchaErrorElement: Ef,
        getRecaptchaElement: Ff,createRecaptcha: Jf,reloadRecaptcha: Kf,destroyRecaptcha: Hf,isRecaptchaShown: Gf,checkAndGetRecaptchaResponse: If,getTosElement: Lf,getTosErrorElement: Mf,hasTos: function() {
            return null != Lf.call(this)
        },initTosElement: function() {
            var a = Lf.call(this), b = Mf.call(this);
            Jd(this).listen(a, "change", function() {
                Ud(b) && Nf(a, b)
            })
        },checkTosAgreed: function() {
            var a = Lf.call(this), b = Mf.call(this);
            return Nf(a, b)
        },getSubmitElement: be,getSecondaryLinkElement: ce,initFormElement: de});
    var Zg = function(a, b) {
        var c;
        try {
            c = "number" == typeof a.selectionStart
        } catch (d) {
            c = !1
        }
        c ? (a.selectionStart = b, a.selectionEnd = b) : y && (c = b, "textarea" == a.type && (c = a.value.substring(0, c).replace(/(\r\n|\r|\n)/g, "\n").length), b = c, c = a.createTextRange(), c.collapse(!0), c.move("character", b), c.select())
    };
    var $g = function(a, b, c, d, e, f) {
        P.call(this, Sf, {remember: d,email: e}, f);
        this.onEmailChange_ = a;
        this.onEmailEnter_ = b;
        this.onProblemSignInClick_ = c
    };
    t($g, P);
    $g.prototype.enterDocument = function() {
        this.initEmailElement(this.onEmailChange_, this.onEmailEnter_);
        var a = this;
        Qd(this, this.getElementByClass("gitkit-id-problem-sign-in"), function() {
            a.onProblemSignInClick_()
        });
        Qd(this, ah(this), function() {
            a.onEmailEnter_()
        });
        this.getEmailElement().focus();
        Zg(this.getEmailElement(), (this.getEmailElement().value || "").length)
    };
    $g.prototype.disposeInternal = function() {
        this.onProblemSignInClick_ = this.onEmailEnter_ = this.onEmailChange_ = null;
        $g.superClass_.disposeInternal.call(this)
    };
    var ah = function(a) {
        return a.getElementByClass("gitkit-id-arrow-indicator")
    }, bh = function(a, b) {
        if (b) {
            var c = ah(a);
            Za(c, "gitkit-arrow-indicator") && (ab(c, "gitkit-arrow-indicator"), $a(c, "gitkit-arrow-indicator-active"))
        } else
            c = ah(a), Za(c, "gitkit-arrow-indicator-active") && (ab(c, "gitkit-arrow-indicator-active"), $a(c, "gitkit-arrow-indicator"))
    };
    r($g.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae});
    var ch = function(a, b, c, d, e) {
        P.call(this, Tf, {email: e,recommendedIdp: b ? b.toPlainObject() : null,recommendedIdpAuthUri: c,otherIdps: Ka(d, function(a) {
                return a.toPlainObject()
            })});
        this.onIdpClick_ = a
    };
    t(ch, P);
    ch.prototype.enterDocument = function() {
        this.initEmailElement();
        this.initIdpList(this.onIdpClick_)
    };
    ch.prototype.disposeInternal = function() {
        this.onIdpClick_ = null;
        ch.superClass_.disposeInternal.call(this)
    };
    r(ch.prototype, {getEmailElement: Xd,getEmailErrorElement: Yd,initEmailElement: Zd,getEmail: $d,checkAndGetEmail: ae,initIdpList: se});
    var dh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, fh = function(a) {
        if (eh) {
            eh = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = fh(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)
                    throw eh = !0, Error();
            }
        }
        return a.match(dh)
    }, eh = z, gh = function(a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="), f = null, g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    }, hh = 
    function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f)
                    return b;
            b += e + 1
        }
        return -1
    }, ih = /#|$/, jh = function(a, b) {
        var c = a.search(ih), d = hh(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }, kh = /[?&]($|#)/;
    var lh = function(a, b) {
        this.domain_ = this.userInfo_ = this.scheme_ = "";
        this.port_ = null;
        this.fragment_ = this.path_ = "";
        this.ignoreCase_ = this.isReadOnly_ = !1;
        var c;
        if (a instanceof lh)
            this.ignoreCase_ = m(b) ? b : a.ignoreCase_, mh(this, a.scheme_), c = a.userInfo_, nh(this), this.userInfo_ = c, oh(this, a.domain_), ph(this, a.port_), c = a.path_, nh(this), this.path_ = c, qh(this, a.queryData_.clone()), rh(this, a.fragment_);
        else if (a && (c = fh(String(a)))) {
            this.ignoreCase_ = !!b;
            mh(this, c[1] || "", !0);
            var d = c[2] || "";
            nh(this);
            this.userInfo_ = sh(d);
            oh(this, c[3] || "", !0);
            ph(this, c[4]);
            d = c[5] || "";
            nh(this);
            this.path_ = sh(d, !0);
            qh(this, c[6] || "", !0);
            rh(this, c[7] || "", !0)
        } else
            this.ignoreCase_ = !!b, this.queryData_ = new th(null, 0, this.ignoreCase_)
    };
    lh.prototype.toString = function() {
        var a = [], b = this.scheme_;
        b && a.push(uh(b, vh, !0), ":");
        if (b = this.domain_) {
            a.push("//");
            var c = this.userInfo_;
            c && a.push(uh(c, vh, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.port_;
            null != b && a.push(":", String(b))
        }
        if (b = this.path_)
            this.domain_ && "/" != b.charAt(0) && a.push("/"), a.push(uh(b, "/" == b.charAt(0) ? wh : xh, !0));
        (b = this.queryData_.toString()) && a.push("?", b);
        (b = this.fragment_) && a.push("#", uh(b, yh));
        return a.join("")
    };
    lh.prototype.resolve = function(a) {
        var b = this.clone(), c = !!a.scheme_;
        c ? mh(b, a.scheme_) : c = !!a.userInfo_;
        if (c) {
            var d = a.userInfo_;
            nh(b);
            b.userInfo_ = d
        } else
            c = !!a.domain_;
        c ? oh(b, a.domain_) : c = null != a.port_;
        d = a.path_;
        if (c)
            ph(b, a.port_);
        else if (c = !!a.path_) {
            if ("/" != d.charAt(0))
                if (this.domain_ && !this.path_)
                    d = "/" + d;
                else {
                    var e = b.path_.lastIndexOf("/");
                    -1 != e && (d = b.path_.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), 
                f = [], g = 0; g < e.length; ) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? (nh(b), b.path_ = d) : c = "" !== a.queryData_.toString();
        c ? qh(b, sh(a.queryData_.toString())) : c = !!a.fragment_;
        c && rh(b, a.fragment_);
        return b
    };
    lh.prototype.clone = function() {
        return new lh(this)
    };
    var mh = function(a, b, c) {
        nh(a);
        a.scheme_ = c ? sh(b, !0) : b;
        a.scheme_ && (a.scheme_ = a.scheme_.replace(/:$/, ""));
        return a
    }, oh = function(a, b, c) {
        nh(a);
        a.domain_ = c ? sh(b, !0) : b;
        return a
    }, ph = function(a, b) {
        nh(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.port_ = b
        } else
            a.port_ = null
    }, qh = function(a, b, c) {
        nh(a);
        b instanceof th ? (a.queryData_ = b, a.queryData_.setIgnoreCase(a.ignoreCase_)) : (c || (b = uh(b, zh)), a.queryData_ = new th(b, 0, a.ignoreCase_));
        return a
    }, rh = function(a, b, c) {
        nh(a);
        a.fragment_ = c ? sh(b) : 
        b;
        return a
    }, nh = function(a) {
        if (a.isReadOnly_)
            throw Error("Tried to modify a read-only Uri");
    };
    lh.prototype.setIgnoreCase = function(a) {
        this.ignoreCase_ = a;
        this.queryData_ && this.queryData_.setIgnoreCase(a);
        return this
    };
    var Ah = function(a) {
        return a instanceof lh ? a.clone() : new lh(a, void 0)
    }, Bh = function(a, b) {
        a instanceof lh || (a = Ah(a));
        b instanceof lh || (b = Ah(b));
        return a.resolve(b)
    }, sh = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }, uh = function(a, b, c) {
        return n(a) ? (a = encodeURI(a).replace(b, Ch), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }, Ch = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }, vh = /[#\/\?@]/g, xh = /[\#\?:]/g, wh = /[\#\?]/g, zh = 
    /[\#\?@]/g, yh = /#/g, th = function(a, b, c) {
        this.count_ = this.keyMap_ = null;
        this.encodedQuery_ = a || null;
        this.ignoreCase_ = !!c
    }, Dh = function(a) {
        a.keyMap_ || (a.keyMap_ = new Ub, a.count_ = 0, a.encodedQuery_ && gh(a.encodedQuery_, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }, Fh = function(a) {
        var b = ue(a);
        if ("undefined" == typeof b)
            throw Error("Keys are undefined");
        var c = new th(null, 0, void 0);
        a = te(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d], f = a[d];
            ea(f) ? Eh(c, e, f) : c.add(e, f)
        }
        return c
    };
    h = th.prototype;
    h.add = function(a, b) {
        Dh(this);
        this.encodedQuery_ = null;
        a = Gh(this, a);
        var c = this.keyMap_.get(a);
        c || this.keyMap_.set(a, c = []);
        c.push(b);
        this.count_++;
        return this
    };
    h.remove = function(a) {
        Dh(this);
        a = Gh(this, a);
        return this.keyMap_.containsKey(a) ? (this.encodedQuery_ = null, this.count_ -= this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1
    };
    h.containsKey = function(a) {
        Dh(this);
        a = Gh(this, a);
        return this.keyMap_.containsKey(a)
    };
    h.getKeys = function() {
        Dh(this);
        for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    };
    h.getValues = function(a) {
        Dh(this);
        var b = [];
        if (n(a))
            this.containsKey(a) && (b = Ta(b, this.keyMap_.get(Gh(this, a))));
        else {
            a = this.keyMap_.getValues();
            for (var c = 0; c < a.length; c++)
                b = Ta(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        Dh(this);
        this.encodedQuery_ = null;
        a = Gh(this, a);
        this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
        this.keyMap_.set(a, [b]);
        this.count_++;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.getValues(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    var Eh = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.encodedQuery_ = null, a.keyMap_.set(Gh(a, b), Ua(c)), a.count_ += c.length)
    };
    th.prototype.toString = function() {
        if (this.encodedQuery_)
            return this.encodedQuery_;
        if (!this.keyMap_)
            return "";
        for (var a = [], b = this.keyMap_.getKeys(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.getValues(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.encodedQuery_ = a.join("&")
    };
    th.prototype.clone = function() {
        var a = new th;
        a.encodedQuery_ = this.encodedQuery_;
        this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
        return a
    };
    var Gh = function(a, b) {
        var c = String(b);
        a.ignoreCase_ && (c = c.toLowerCase());
        return c
    };
    th.prototype.setIgnoreCase = function(a) {
        a && !this.ignoreCase_ && (Dh(this), this.encodedQuery_ = null, this.keyMap_.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), Eh(this, d, a))
        }, this));
        this.ignoreCase_ = a
    };
    var R = function(a) {
        window.location.assign(a)
    }, Hh = function(a, b) {
        R(a);
        b && window.setTimeout(function() {
            b()
        }, 500)
    }, Ih = function(a) {
        a = ia(a) && 1 == a.nodeType ? a : document.querySelector(String(a));
        if (null == a)
            throw Error("Cannot find element.");
        return a
    };
    var Jh = null, Mh = function(a, b, c) {
        var d = S("language") || null, e = S("acUiConfig") || null;
        Jh || (a = {callbacks: {empty: a,select: function(a) {
                    a && a.account && b ? b(Pf(a.account)) : c && c()
                },store: a,update: a},language: d || "",providers: void 0,ui: e}, "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? Jh = accountchooser.Api.init(a) : (Jh = new Kh(a), Lh()))
    }, Oh = function(a) {
        var b = Nh();
        v(Jh);
        var c = function() {
            var a = Bh(window.location.href, void 0).toString();
            Jh.select(Ka(b || [], function(a) {
                return a.toPlainObject()
            }), 
            {clientCallbackUrl: a})
        };
        b && b.length ? c() : Jh.checkEmpty(function(b, e) {
            b || e ? a() : c()
        })
    }, Kh = function(a) {
        this.config_ = a;
        this.config_.callbacks = this.config_.callbacks || {}
    }, Lh = function() {
        var a = Jh;
        p(a.config_.callbacks.empty) && a.config_.callbacks.empty()
    }, Ph = {code: -32E3,message: "Service unavailable",data: "Service is unavailable."};
    Kh.prototype.select = function() {
        p(this.config_.callbacks.select) && this.config_.callbacks.select(void 0, Ph)
    };
    Kh.prototype.checkEmpty = function(a) {
        a(void 0, Ph)
    };
    var Qh = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {
            }
        throw Error("Invalid JSON string: " + a);
    }, T = function(a) {
        var b = [];
        Rh(new Sh, a, b);
        return b.join("")
    }, Sh = function() {
        this.replacer_ = void 0
    }, Rh = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == 
            typeof b) {
                if (ea(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e), e = d[f], Rh(a, a.replacer_ ? a.replacer_.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Th(d, c), c.push(":"), Rh(a, a.replacer_ ? a.replacer_.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Th(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? b : "null");
                    break;
                case "boolean":
                    c.push(b);
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }, Uh = {'"': '\\"',"\\": "\\\\","/": "\\/","\b": "\\b","\f": "\\f","\n": "\\n","\r": "\\r","\t": "\\t","\x0B": "\\u000b"}, Vh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, Th = function(a, b) {
        b.push('"', a.replace(Vh, function(a) {
            var b = Uh[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Uh[a] = b);
            return b
        }), 
        '"')
    };
    var Wh = function() {
    };
    Wh.prototype.cachedOptions_ = null;
    var Xh = function(a) {
        return a.cachedOptions_ || (a.cachedOptions_ = a.internalGetOptions())
    };
    var Yh, Zh = function() {
    };
    t(Zh, Wh);
    Zh.prototype.createInstance = function() {
        var a = $h(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Zh.prototype.internalGetOptions = function() {
        var a = {};
        $h(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var $h = function(a) {
        if (!a.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.ieProgId_ = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.ieProgId_
    };
    Yh = new Zh;
    var ai = function() {
    };
    t(ai, Wh);
    ai.prototype.createInstance = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a)
            return a;
        if ("undefined" != typeof XDomainRequest)
            return new bi;
        throw Error("Unsupported browser");
    };
    ai.prototype.internalGetOptions = function() {
        return {}
    };
    var bi = function() {
        this.xdr_ = new XDomainRequest;
        this.readyState = 0;
        this.responseText = this.onreadystatechange = null;
        this.status = -1;
        this.statusText = this.responseXML = null;
        this.xdr_.onload = q(this.handleLoad_, this);
        this.xdr_.onerror = q(this.handleError_, this);
        this.xdr_.onprogress = q(this.handleProgress_, this);
        this.xdr_.ontimeout = q(this.handleTimeout_, this)
    };
    h = bi.prototype;
    h.open = function(a, b, c) {
        if (null != c && !c)
            throw Error("Only async requests are supported.");
        this.xdr_.open(a, b)
    };
    h.send = function(a) {
        if (a)
            if ("string" == typeof a)
                this.xdr_.send(a);
            else
                throw Error("Only string data is supported");
        else
            this.xdr_.send()
    };
    h.abort = function() {
        this.xdr_.abort()
    };
    h.setRequestHeader = function() {
    };
    h.handleLoad_ = function() {
        this.status = 200;
        this.responseText = this.xdr_.responseText;
        ci(this, 4)
    };
    h.handleError_ = function() {
        this.status = 500;
        this.responseText = null;
        ci(this, 4)
    };
    h.handleTimeout_ = function() {
        this.handleError_()
    };
    h.handleProgress_ = function() {
        this.status = 200;
        ci(this, 1)
    };
    var ci = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange)
            a.onreadystatechange()
    };
    var di = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    di.prototype.exception_ = null;
    var ei = 0;
    di.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || ei++;
        this.time_ = d || ma();
        this.level_ = a;
        this.msg_ = b;
        this.loggerName_ = c;
        delete this.exception_
    };
    di.prototype.getLevel = function() {
        return this.level_
    };
    di.prototype.setLevel = function(a) {
        this.level_ = a
    };
    var fi = function(a) {
        this.name_ = a;
        this.handlers_ = this.children_ = this.level_ = this.parent_ = null
    }, gi = function(a, b) {
        this.name = a;
        this.value = b
    };
    gi.prototype.toString = function() {
        return this.name
    };
    var hi = new gi("SHOUT", 1200), ii = new gi("SEVERE", 1E3), ji = new gi("WARNING", 900), ki = new gi("CONFIG", 700), li = new gi("FINE", 500);
    h = fi.prototype;
    h.getName = function() {
        return this.name_
    };
    h.getParent = function() {
        return this.parent_
    };
    h.getChildren = function() {
        this.children_ || (this.children_ = {});
        return this.children_
    };
    h.setLevel = function(a) {
        this.level_ = a
    };
    h.getLevel = function() {
        return this.level_
    };
    var mi = function(a) {
        if (a.level_)
            return a.level_;
        if (a.parent_)
            return mi(a.parent_);
        Ca("Root logger has no level set.");
        return null
    };
    fi.prototype.log = function(a, b, c) {
        if (a.value >= mi(this).value)
            for (p(b) && (b = b()), a = new di(a, String(b), this.name_), c && (a.exception_ = c), c = "log:" + a.msg_, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c; ) {
                b = c;
                var d = a;
                if (b.handlers_)
                    for (var e = 0, f = void 0; f = b.handlers_[e]; e++)
                        f(d);
                c = c.getParent()
            }
    };
    var ni = {}, oi = null, pi = function() {
        oi || (oi = new fi(""), ni[""] = oi, oi.setLevel(ki))
    }, qi = function(a) {
        pi();
        var b;
        if (!(b = ni[a])) {
            b = new fi(a);
            var c = a.lastIndexOf("."), d = a.substr(c + 1), c = qi(a.substr(0, c));
            c.getChildren()[d] = b;
            b.parent_ = c;
            ni[a] = b
        }
        return b
    };
    var ri = function(a, b) {
        a && a.log(li, b, void 0)
    };
    var U = function(a) {
        D.call(this);
        this.headers = new Ub;
        this.xmlHttpFactory_ = a || null;
        this.active_ = !1;
        this.xhrOptions_ = this.xhr_ = null;
        this.lastError_ = this.lastMethod_ = this.lastUri_ = "";
        this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
        this.timeoutInterval_ = 0;
        this.timeoutId_ = null;
        this.responseType_ = "";
        this.useXhr2Timeout_ = this.withCredentials_ = !1
    };
    t(U, D);
    U.prototype.logger_ = qi("goog.net.XhrIo");
    var si = /^https?$/i, ti = ["POST", "PUT"];
    U.prototype.send = function(a, b, c, d) {
        if (this.xhr_)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.lastUri_ = a;
        this.lastError_ = "";
        this.lastMethod_ = b;
        this.errorDispatched_ = !1;
        this.active_ = !0;
        this.xhr_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : Yh.createInstance();
        this.xhrOptions_ = this.xmlHttpFactory_ ? Xh(this.xmlHttpFactory_) : Xh(Yh);
        this.xhr_.onreadystatechange = q(this.onReadyStateChange_, this);
        try {
            ri(this.logger_, 
            ui(this, "Opening Xhr")), this.inOpen_ = !0, this.xhr_.open(b, String(a), !0), this.inOpen_ = !1
        } catch (e) {
            ri(this.logger_, ui(this, "Error opening Xhr: " + e.message));
            this.error_(5, e);
            return
        }
        a = c || "";
        var f = this.headers.clone();
        d && ve(d, function(a, b) {
            f.set(b, a)
        });
        d = Oa(f.getKeys());
        c = l.FormData && a instanceof l.FormData;
        !Pa(ti, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.xhr_.setRequestHeader(b, a)
        }, this);
        this.responseType_ && (this.xhr_.responseType = this.responseType_);
        "withCredentials" in this.xhr_ && (this.xhr_.withCredentials = this.withCredentials_);
        try {
            vi(this), 0 < this.timeoutInterval_ && (this.useXhr2Timeout_ = wi(this.xhr_), ri(this.logger_, ui(this, "Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_)), this.useXhr2Timeout_ ? (this.xhr_.timeout = this.timeoutInterval_, this.xhr_.ontimeout = q(this.timeout_, this)) : this.timeoutId_ = ud(this.timeout_, this.timeoutInterval_, this)), ri(this.logger_, ui(this, "Sending request")), this.inSend_ = !0, this.xhr_.send(a), 
            this.inSend_ = !1
        } catch (g) {
            ri(this.logger_, ui(this, "Send error: " + g.message)), this.error_(5, g)
        }
    };
    var wi = function(a) {
        return y && A(9) && ha(a.timeout) && m(a.ontimeout)
    }, Na = function(a) {
        return "content-type" == a.toLowerCase()
    };
    U.prototype.timeout_ = function() {
        "undefined" != typeof aa && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", ri(this.logger_, ui(this, this.lastError_)), this.dispatchEvent("timeout"), this.abort(8))
    };
    U.prototype.error_ = function(a, b) {
        this.active_ = !1;
        this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
        this.lastError_ = b;
        xi(this);
        yi(this)
    };
    var xi = function(a) {
        a.errorDispatched_ || (a.errorDispatched_ = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    U.prototype.abort = function() {
        this.xhr_ && this.active_ && (ri(this.logger_, ui(this, "Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), yi(this))
    };
    U.prototype.disposeInternal = function() {
        this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), yi(this, !0));
        U.superClass_.disposeInternal.call(this)
    };
    U.prototype.onReadyStateChange_ = function() {
        if (!this.isDisposed())
            if (this.inOpen_ || this.inSend_ || this.inAbort_)
                zi(this);
            else
                this.onReadyStateChangeEntryPoint_()
    };
    U.prototype.onReadyStateChangeEntryPoint_ = function() {
        zi(this)
    };
    var zi = function(a) {
        if (a.active_ && "undefined" != typeof aa)
            if (a.xhrOptions_[1] && 4 == Ai(a) && 2 == Bi(a))
                ri(a.logger_, ui(a, "Local request error detected and ignored"));
            else if (a.inSend_ && 4 == Ai(a))
                ud(a.onReadyStateChange_, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Ai(a)) {
                ri(a.logger_, ui(a, "Request complete"));
                a.active_ = !1;
                try {
                    var b = Bi(a), c;
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = fh(String(a.lastUri_))[1] || 
                            null;
                            if (!f && self.location)
                                var g = self.location.protocol, f = g.substr(0, g.length - 1);
                            e = !si.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d)
                        a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        var k;
                        try {
                            k = 2 < Ai(a) ? a.xhr_.statusText : ""
                        } catch (C) {
                            ri(a.logger_, "Can not get status: " + C.message), k = ""
                        }
                        a.lastError_ = k + " [" + Bi(a) + "]";
                        xi(a)
                    }
                }finally {
                    yi(a)
                }
            }
    }, yi = function(a, b) {
        if (a.xhr_) {
            vi(a);
            var c = a.xhr_, d = a.xhrOptions_[0] ? ba : null;
            a.xhr_ = null;
            a.xhrOptions_ = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (c = 
                a.logger_) && c.log(ii, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }, vi = function(a) {
        a.xhr_ && a.useXhr2Timeout_ && (a.xhr_.ontimeout = null);
        ha(a.timeoutId_) && (l.clearTimeout(a.timeoutId_), a.timeoutId_ = null)
    }, Ai = function(a) {
        return a.xhr_ ? a.xhr_.readyState : 0
    }, Bi = function(a) {
        try {
            return 2 < Ai(a) ? a.xhr_.status : -1
        } catch (b) {
            return -1
        }
    };
    U.prototype.getResponse = function() {
        try {
            if (!this.xhr_)
                return null;
            if ("response" in this.xhr_)
                return this.xhr_.response;
            switch (this.responseType_) {
                case "":
                case "text":
                    return this.xhr_.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.xhr_)
                        return this.xhr_.mozResponseArrayBuffer
            }
            var a = this.logger_;
            a && a.log(ii, "Response type " + this.responseType_ + " is not supported on this browser", void 0);
            return null
        } catch (b) {
            return ri(this.logger_, "Can not get response: " + b.message), null
        }
    };
    var ui = function(a, b) {
        return b + " [" + a.lastMethod_ + " " + a.lastUri_ + " " + Bi(a) + "]"
    };
    var Ci, Di = function(a, b, c, d) {
        this.baseUrl_ = a;
        this.key_ = b;
        this.version_ = c;
        this.ajaxSender_ = d;
        this.corsXhrFactory_ = new ai
    };
    Di.prototype.getMethodUrl = function(a) {
        return [this.baseUrl_, "identitytoolkit", this.version_, "relyingparty", a].join("/") + "?key=" + this.key_
    };
    var Ei = function(a, b, c, d, e, f) {
        a.listen("complete", function() {
            var a;
            a = this.xhr_ ? Qh(this.xhr_.responseText) : void 0;
            f(a || null)
        });
        a.listenOnce("ready", a.dispose);
        a.timeoutInterval_ = Math.max(0, 1E4);
        a.listenOnce("timeout", a.dispose);
        a.send(b, c, d, e)
    };
    Di.prototype.requestGitkitEndpoint = function(a, b, c, d) {
        c = cb(c);
        Ei(new U(this.corsXhrFactory_), this.getMethodUrl(a), b, T(c), {"Content-type": "application/json"}, d)
    };
    var Fi = function(a, b, c, d) {
        Di.call(this, a, b, c, d)
    };
    t(Fi, Di);
    Fi.prototype.getMethodUrl = function(a) {
        return ["identitytoolkit", this.version_, "relyingparty", a].join("/")
    };
    Fi.prototype.requestGitkitEndpoint = function(a, b, c, d) {
        var e = gapi.auth.getToken();
        gapi.auth.setToken(null);
        gapi.client.request({path: this.getMethodUrl(a),method: b,body: T(c),callback: function(a) {
                gapi.auth.setToken(e);
                d(a)
            }})
    };
    var Gi = function(a, b) {
        Ci.requestGitkitEndpoint("createAuthUri", "POST", a, b)
    }, Hi = function(a, b) {
        Ci.requestGitkitEndpoint("verifyPassword", "POST", a, b)
    }, Ii = function(a, b) {
        Ci.requestGitkitEndpoint("getAccountInfo", "POST", a, b)
    }, Ji = function(a, b) {
        Ci.requestGitkitEndpoint("setAccountInfo", "POST", a, b)
    }, Ki = function(a, b) {
        Ci.requestGitkitEndpoint("verifyAssertion", "POST", a, b)
    }, Li = function(a, b) {
        Ci.requestGitkitEndpoint("resetPassword", "POST", a, b)
    }, Mi = function(a, b) {
        Ci.requestGitkitEndpoint("getRecaptchaParam", "GET", 
        a, b)
    }, Ni = function(a, b, c) {
        var d = Ci;
        b = cb(b);
        d.ajaxSender_ ? d.ajaxSender_(a, b, c) : Ei(new U, a, "POST", Fh(b).toString(), null, c)
    }, Oi = function(a) {
        return !!a.error
    }, Pi = function(a) {
        return a.error && a.error.message || null
    };
    var Qi = {}, V = function(a, b) {
        if (a.toLowerCase() in Qi)
            throw Error("Configuration " + a + " has already been defined.");
        Qi[a.toLowerCase()] = b
    }, Ri = function(a, b) {
        if (!(a.toLowerCase() in Qi))
            throw Error("Configuration " + a + " is not defined.");
        Qi[a.toLowerCase()] = b
    }, S = function(a) {
        if (!(a.toLowerCase() in Qi))
            throw Error("Configuration " + a + " is not defined.");
        return Qi[a.toLowerCase()]
    }, Si = function(a) {
        var b = S(a);
        if (!b)
            throw Error("Configuration " + a + " is required.");
        return b
    };
    var Ti = null, Ui = null, Vi = null;
    var Wi = function(a) {
        this.document_ = a
    }, Xi = /\s*;\s*/;
    h = Wi.prototype;
    h.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        m(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ma() + 1E3 * c)).toUTCString();
        this.document_.cookie = a + "=" + b + e + d + c + f
    };
    h.get = function(a, b) {
        for (var c = a + "=", d = (this.document_.cookie || "").split(Xi), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    };
    h.remove = function(a, b, c) {
        var d = this.containsKey(a);
        this.set(a, "", 0, b, c);
        return d
    };
    h.getKeys = function() {
        return Yi(this).keys
    };
    h.getValues = function() {
        return Yi(this).values
    };
    h.containsKey = function(a) {
        return m(this.get(a))
    };
    var Yi = function(a) {
        a = (a.document_.cookie || "").split(Xi);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
            d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {keys: b,values: c}
    }, Zi = new Wi(document);
    Zi.MAX_COOKIE_LENGTH = 3950;
    var $i = function(a, b, c, d, e, f, g) {
        this.email_ = c;
        this.exp_ = d;
        this.providerId_ = g
    };
    $i.prototype.getEmail = function() {
        return this.email_
    };
    $i.prototype.getProviderId = function() {
        return this.providerId_ || null
    };
    var aj = function(a) {
        return Zi.get(a)
    }, cj = function(a) {
        return (a = aj(a)) ? bj(a) : null
    }, dj = function(a, b) {
        var c = bj(b);
        if (c) {
            var d = Math.floor(ma() / 1E3);
            Zi.set(a, b, c.exp_ > d ? c.exp_ - d : 0, "/")
        }
    }, fj = function() {
        var a = ej();
        Zi.remove(a, "/")
    }, bj = function(a) {
        a = a.split(".");
        if (2 > a.length)
            return null;
        a = a[1];
        for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
            a += ".";
        b = a;
        if (!Ti)
            for (Ti = {}, Ui = {}, Vi = {}, a = 0; 65 > a; a++)
                Ti[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Ui[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 
                Vi[Ui[a]] = a, 62 <= a && (Vi["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a);
        c = Vi;
        a = [];
        for (var d = 0; d < b.length; ) {
            var e = c[b.charAt(d++)], f = d < b.length ? c[b.charAt(d)] : 0;
            ++d;
            var g = d < b.length ? c[b.charAt(d)] : 64;
            ++d;
            var k = d < b.length ? c[b.charAt(d)] : 64;
            ++d;
            if (null == e || null == f || null == g || null == k)
                throw Error();
            a.push(e << 2 | f >> 4);
            64 != g && (a.push(f << 4 & 240 | g >> 2), 64 != k && a.push(g << 6 & 192 | k))
        }
        if (8192 >= a.length)
            a = String.fromCharCode.apply(null, a);
        else {
            b = "";
            for (c = 0; c < a.length; c += 8192)
                d = Va(a, c, 
                c + 8192), b += String.fromCharCode.apply(null, d);
            a = b
        }
        a = Qh(a);
        return a.iss && a.aud && a.email && a.exp ? new $i(0, 0, a.email, a.exp, 0, 0, a.provider_id) : null
    };
    var gj = function() {
        this.relativeTimeStart_ = ma()
    }, hj = new gj;
    gj.prototype.set = function(a) {
        this.relativeTimeStart_ = a
    };
    gj.prototype.reset = function() {
        this.set(ma())
    };
    gj.prototype.get = function() {
        return this.relativeTimeStart_
    };
    var ij = function(a) {
        this.prefix_ = a || "";
        this.startTimeProvider_ = hj
    };
    h = ij.prototype;
    h.appendNewline = !0;
    h.showAbsoluteTime = !0;
    h.showRelativeTime = !0;
    h.showLoggerName = !0;
    h.showExceptionText = !1;
    h.showSeverityLevel = !1;
    var jj = function(a) {
        return 10 > a ? "0" + a : String(a)
    }, kj = function(a, b) {
        var c = (a.time_ - b) / 1E3, d = c.toFixed(3), e = 0;
        if (1 > c)
            e = 2;
        else
            for (; 100 > c; )
                e++, c *= 10;
        for (; 0 < e--; )
            d = " " + d;
        return d
    }, lj = function(a) {
        ij.call(this, a)
    };
    t(lj, ij);
    var mj = function() {
        this.publishHandler_ = q(this.addLogRecord, this);
        this.formatter_ = new lj;
        this.formatter_.showAbsoluteTime = !1;
        this.formatter_.showExceptionText = !1;
        this.isCapturing_ = this.formatter_.appendNewline = !1;
        this.logBuffer_ = "";
        this.filteredLoggers_ = {}
    };
    mj.prototype.addLogRecord = function(a) {
        if (!this.filteredLoggers_[a.loggerName_]) {
            var b;
            b = this.formatter_;
            var c = [];
            c.push(b.prefix_, " ");
            if (b.showAbsoluteTime) {
                var d = new Date(a.time_);
                c.push("[", jj(d.getFullYear() - 2E3) + jj(d.getMonth() + 1) + jj(d.getDate()) + " " + jj(d.getHours()) + ":" + jj(d.getMinutes()) + ":" + jj(d.getSeconds()) + "." + jj(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            b.showRelativeTime && c.push("[", kj(a, b.startTimeProvider_.get()), "s] ");
            b.showLoggerName && c.push("[", a.loggerName_, "] ");
            b.showSeverityLevel && 
            c.push("[", a.getLevel().name, "] ");
            c.push(a.msg_);
            b.showExceptionText && (d = a.exception_) && c.push("\n", d instanceof Error ? d.message : d.toString());
            b.appendNewline && c.push("\n");
            b = c.join("");
            if (c = nj)
                switch (a.getLevel()) {
                    case hi:
                        oj(c, "info", b);
                        break;
                    case ii:
                        oj(c, "error", b);
                        break;
                    case ji:
                        oj(c, "warn", b);
                        break;
                    default:
                        oj(c, "debug", b)
                }
            else
                this.logBuffer_ += b
        }
    };
    var nj = l.console, oj = function(a, b, c) {
        if (a[b])
            a[b](c);
        else
            a.log(c)
    };
    var pj = qi("identitytoolkit"), qj = new mj;
    if (1 != qj.isCapturing_) {
        pi();
        var rj = oi, sj = qj.publishHandler_;
        rj.handlers_ || (rj.handlers_ = []);
        rj.handlers_.push(sj);
        qj.isCapturing_ = !0
    }
    var tj = function(a) {
        pj && pj.log(ii, a, void 0)
    };
    var uj = /MSIE ([\d.]+).*Windows NT ([\d.]+)/, vj = /Firefox\/([\d.]+)/, wj = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/, xj = /Chrome\/([\d.]+)/, yj = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/, zj = /Mac OS X;.*(?!(Version)).*Safari/, Aj = /Android ([\d.]+).*Safari/, Bj = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/, Cj = /Konqueror\/([\d.]+)/, Dj = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/, W = function(a, b) {
        this.version_ = a;
        var c = a.split(b || ".");
        this.components_ = [];
        for (var d = 0; d < c.length; d++)
            this.components_.push(parseInt(c[d], 
            10))
    };
    W.prototype.compare = function(a) {
        a instanceof W || (a = new W(String(a)));
        for (var b = Math.max(this.components_.length, a.components_.length), c = 0; c < b; c++) {
            var d = this.components_[c], e = a.components_[c];
            if (void 0 !== d && void 0 !== e && d !== e)
                return d - e;
            if (void 0 === d)
                return -1;
            if (void 0 === e)
                return 1
        }
        return 0
    };
    var X = function(a, b) {
        return 0 <= a.compare(b)
    }, Ej = function() {
        var a = window.navigator && window.navigator.userAgent;
        if (a) {
            var b;
            if (b = a.match(wj)) {
                var c = new W(b[3] || b[1]);
                return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && X(c, "10.1") : X(c, "8.0")
            }
            if (b = a.match(vj))
                return X(new W(b[1]), "2.0");
            if (b = a.match(xj))
                return X(new W(b[1]), "6.0");
            if (b = a.match(yj))
                return c = new W(b[6]), a = b[3] && new W(b[3]), b = b[5] && new W(b[5], "_"), (!(!a || !X(a, "6.0")) || !(!b || !X(b, "10.5.6"))) && X(c, "3.0");
            if (b = a.match(Aj))
                return X(new W(b[1]), "3.0");
            if (b = a.match(Bj))
                return X(new W(b[1], "_"), "4.0");
            if (b = a.match(Cj))
                return X(new W(b[1]), "4.7");
            if (b = a.match(Dj))
                return c = new W(b[1]), a = new W(b[2]), X(c, "7.0") && X(a, "7.0");
            if (b = a.match(uj))
                return c = new W(b[1]), a = new W(b[2]), X(c, "7.0") && X(a, "6.0");
            if (a.match(zj))
                return !1
        }
        return !0
    };
    var Fj = function() {
    };
    var Gj = function() {
    };
    t(Gj, Fj);
    var Hj = function(a) {
        this.storage_ = a
    };
    t(Hj, Gj);
    var Ij = function(a) {
        if (!a.storage_)
            return !1;
        try {
            return a.storage_.setItem("__sak", "1"), a.storage_.removeItem("__sak"), !0
        } catch (b) {
            return !1
        }
    };
    h = Hj.prototype;
    h.set = function(a, b) {
        try {
            this.storage_.setItem(a, b)
        } catch (c) {
            if (0 == this.storage_.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    h.get = function(a) {
        a = this.storage_.getItem(a);
        if (!n(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    h.remove = function(a) {
        this.storage_.removeItem(a)
    };
    h.__iterator__ = function(a) {
        var b = 0, c = this.storage_, d = new Tb;
        d.next = function() {
            if (b >= c.length)
                throw Sb;
            var d = Da(c.key(b++));
            if (a)
                return d;
            d = c.getItem(d);
            if (!n(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    h.key = function(a) {
        return this.storage_.key(a)
    };
    var Jj = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {
        }
        this.storage_ = a
    };
    t(Jj, Hj);
    var Kj = function() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {
        }
        this.storage_ = a
    };
    t(Kj, Hj);
    var Lj = function(a, b) {
        this.mechanism_ = a;
        this.prefix_ = b + "::"
    };
    t(Lj, Gj);
    Lj.prototype.set = function(a, b) {
        this.mechanism_.set(this.prefix_ + a, b)
    };
    Lj.prototype.get = function(a) {
        return this.mechanism_.get(this.prefix_ + a)
    };
    Lj.prototype.remove = function(a) {
        this.mechanism_.remove(this.prefix_ + a)
    };
    Lj.prototype.__iterator__ = function(a) {
        var b = this.mechanism_.__iterator__(!0), c = this, d = new Tb;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.prefix_.length) != c.prefix_; )
                d = b.next();
            return a ? d.substr(c.prefix_.length) : c.mechanism_.get(d)
        };
        return d
    };
    var Mj = function(a) {
        this.mechanism = a
    };
    Mj.prototype.set = function(a, b) {
        m(b) ? this.mechanism.set(a, T(b)) : this.mechanism.remove(a)
    };
    Mj.prototype.get = function(a) {
        var b;
        try {
            b = this.mechanism.get(a)
        } catch (c) {
            return
        }
        if (null !== b)
            try {
                return Qh(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
    };
    Mj.prototype.remove = function(a) {
        this.mechanism.remove(a)
    };
    var Nj, Oj = new Jj;
    Nj = Ij(Oj) ? new Lj(Oj, "gitkit") : null;
    var Pj = new Mj(Nj), Qj, Rj = new Kj;
    Qj = Ij(Rj) ? new Lj(Rj, "gitkit") : null;
    var Sj = new Mj(Qj), Tj = {name: "appScheme",persistent: !1}, Uj = {name: "otaAppInstallUrl",persistent: !1}, Vj = {name: "pendingToken",persistent: !1}, Wj = {name: "redirectUrl",persistent: !1}, Xj = {name: "rememberAccount",persistent: !1}, Yj = {name: "currentAccount",persistent: !0}, Zj = {name: "rememberedAccounts",persistent: !0}, ak = function(a) {
        return (a.persistent ? Pj : Sj).get(a.name)
    }, bk = function(a) {
        (a.persistent ? Pj : Sj).remove(a.name)
    }, ck = function(a, b) {
        (a.persistent ? Pj : Sj).set(a.name, b)
    }, dk = function(a) {
        ck(Vj, a)
    }, Nh = function() {
        var a = 
        ak(Zj) || [];
        return Ka(a, function(a) {
            return Pf(a)
        })
    }, ek = function(a) {
        var b = Nh(), c = Ma(b, function(b) {
            return b.getEmail() == a.getEmail() && b.getProviderId() == a.getProviderId()
        });
        -1 < c && Qa(b, c);
        b.unshift(a);
        ck(Zj, Ka(b, function(a) {
            return a.toPlainObject()
        }))
    };
    V("acUiConfig");
    V("ajaxSender");
    V("apiKey");
    V("apiVersion", "v3");
    V("callbacks");
    V("cookieName", "gtoken");
    V("idpButtons", 0);
    V("idps");
    V("signInOptions");
    V("language");
    V("oobActionUrl");
    V("otaApp");
    V("popupMode", !1);
    V("queryParameterForSignInSuccessUrl", "signInSuccessUrl");
    V("queryParameterForWidgetMode", "mode");
    V("signInSuccessUrl");
    V("signOutUrl");
    V("siteName");
    V("tosUrl");
    V("widgetUrl");
    var fk = {AFTER_AC_STORE: "afterStore",CALLBACK: "callback",CHANGE_EMAIL: "changeEmail",MANAGE_ACCOUNT: "manageAccount",MOBILE_LINK_ACCOUNT: "linkAccount",RECOVER_PASSWORD: "recoverPassword",RESET_PASSWORD: "resetPassword",SELECT: "select",VERIFY_EMAIL: "verifyEmail"}, hk = function(a) {
        var b = Si("widgetUrl");
        return gk(b, a)
    }, ik = function(a) {
        var b = S("widgetUrl");
        b || (b = rh(Ah(window.location.href), ""), b = qh(b, "", void 0).toString());
        return gk(b, a)
    }, jk = function() {
        return Bh(window.location.href, ik()).toString()
    }, gk = function(a, 
    b) {
        if (b) {
            for (var c = kk(), d = a.search(ih), e = 0, f, g = []; 0 <= (f = hh(a, e, c, d)); )
                g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
            g.push(a.substr(e));
            c = [g.join("").replace(kh, "$1"), "&", c];
            null != b && c.push("=", encodeURIComponent(String(b)));
            c[1] && (d = c[0], e = d.indexOf("#"), 0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e)), e = d.indexOf("?"), 0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0));
            return c.join("")
        }
        return a
    }, ej = function() {
        return Si("cookieName")
    }, lk = function() {
        var a = S("signInOptions") || S("idps") || [];
        !S("signInOptions") && S("idps") && (Sa(a, function(a) {
            return a == me.getProviderId()
        }), a.push(me.getProviderId()));
        for (var b = [], c = 0; c < a.length; c++) {
            var d = oe(a[c]);
            d && b.push(d)
        }
        return b
    }, kk = function() {
        return Si("queryParameterForWidgetMode")
    }, mk = function() {
        return S("callbacks") || {}
    }, nk = function(a) {
        for (var b in a)
            try {
                Ri(b, a[b])
            } catch (c) {
                tj('Invalid config: "' + b + '"')
            }
        wb ? (Ri("popupMode", !1), Ri("otaApp", void 0)) : S("otaApp") && Ri("popupMode", !0)
    }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var ok = function(a, b) {
        this.sequence_ = [];
        this.onCancelFunction_ = a;
        this.defaultScope_ = b || null;
        this.hadError_ = this.fired_ = !1;
        this.result_ = void 0;
        this.silentlyCanceled_ = this.blocking_ = this.blocked_ = !1;
        this.unhandledErrorId_ = 0;
        this.parent_ = null;
        this.branches_ = 0
    };
    ok.prototype.cancel = function(a) {
        if (this.fired_)
            this.result_ instanceof ok && this.result_.cancel();
        else {
            if (this.parent_) {
                var b = this.parent_;
                delete this.parent_;
                a ? b.cancel(a) : (b.branches_--, 0 >= b.branches_ && b.cancel())
            }
            this.onCancelFunction_ ? this.onCancelFunction_.call(this.defaultScope_, this) : this.silentlyCanceled_ = !0;
            this.fired_ || pk(this, new qk)
        }
    };
    ok.prototype.continue_ = function(a, b) {
        this.blocked_ = !1;
        rk(this, a, b)
    };
    var rk = function(a, b, c) {
        a.fired_ = !0;
        a.result_ = c;
        a.hadError_ = !b;
        sk(a)
    }, uk = function(a) {
        if (a.fired_) {
            if (!a.silentlyCanceled_)
                throw new tk;
            a.silentlyCanceled_ = !1
        }
    };
    ok.prototype.callback = function(a) {
        uk(this);
        vk(a);
        rk(this, !0, a)
    };
    var pk = function(a, b) {
        uk(a);
        vk(b);
        rk(a, !1, b)
    }, vk = function(a) {
        v(!(a instanceof ok), "An execution sequence may not be initiated with a blocking Deferred.")
    }, xk = function(a, b) {
        wk(a, null, b, void 0)
    }, wk = function(a, b, c, d) {
        v(!a.blocking_, "Blocking Deferreds can not be re-used");
        a.sequence_.push([b, c, d]);
        a.fired_ && sk(a)
    };
    ok.prototype.then = function(a, b, c) {
        var d, e, f = new gd(function(a, b) {
            d = a;
            e = b
        });
        wk(this, d, function(a) {
            a instanceof qk ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    cd(ok);
    var yk = function(a) {
        return La(a.sequence_, function(a) {
            return p(a[1])
        })
    }, sk = function(a) {
        if (a.unhandledErrorId_ && a.fired_ && yk(a)) {
            var b = a.unhandledErrorId_, c = zk[b];
            c && (l.clearTimeout(c.id_), delete zk[b]);
            a.unhandledErrorId_ = 0
        }
        a.parent_ && (a.parent_.branches_--, delete a.parent_);
        for (var b = a.result_, d = c = !1; a.sequence_.length && !a.blocked_; ) {
            var e = a.sequence_.shift(), f = e[0], g = e[1], e = e[2];
            if (f = a.hadError_ ? g : f)
                try {
                    var k = f.call(e || a.defaultScope_, b);
                    m(k) && (a.hadError_ = a.hadError_ && (k == b || k instanceof Error), 
                    a.result_ = b = k);
                    if (dd(b) || "function" === typeof l.Promise && b instanceof l.Promise)
                        d = !0, a.blocked_ = !0
                } catch (C) {
                    b = C, a.hadError_ = !0, yk(a) || (c = !0)
                }
        }
        a.result_ = b;
        d && (k = q(a.continue_, a, !0), d = q(a.continue_, a, !1), b instanceof ok ? (wk(b, k, d), b.blocking_ = !0) : b.then(k, d));
        c && (b = new Ak(b), zk[b.id_] = b, a.unhandledErrorId_ = b.id_)
    }, tk = function() {
        u.call(this)
    };
    t(tk, u);
    tk.prototype.message = "Deferred has already fired";
    tk.prototype.name = "AlreadyCalledError";
    var qk = function() {
        u.call(this)
    };
    t(qk, u);
    qk.prototype.message = "Deferred was canceled";
    qk.prototype.name = "CanceledError";
    var Ak = function(a) {
        this.id_ = l.setTimeout(q(this.throwError, this), 0);
        this.error_ = a
    };
    Ak.prototype.throwError = function() {
        v(zk[this.id_], "Cannot throw an error that is not scheduled.");
        delete zk[this.id_];
        throw this.error_;
    };
    var zk = {};
    var Fk = function(a) {
        var b = {}, c = b.document || document, d = document.createElement("SCRIPT"), e = {script_: d,timeout_: void 0}, f = new ok(Bk, e), g = null, k = null != b.timeout ? b.timeout : 5E3;
        0 < k && (g = window.setTimeout(function() {
            Ck(d, !0);
            pk(f, new Dk(1, "Timeout reached for loading script " + a))
        }, k), e.timeout_ = g);
        d.onload = d.onreadystatechange = function() {
            d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Ck(d, b.cleanupWhenDone || !1, g), f.callback(null))
        };
        d.onerror = function() {
            Ck(d, !0, g);
            pk(f, new Dk(0, "Error while loading script " + 
            a))
        };
        Nb(d, {type: "text/javascript",charset: "UTF-8",src: a});
        Ek(c).appendChild(d);
        return f
    }, Ek = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }, Bk = function() {
        if (this && this.script_) {
            var a = this.script_;
            a && "SCRIPT" == a.tagName && Ck(a, !0, this.timeout_)
        }
    }, Ck = function(a, b, c) {
        null != c && l.clearTimeout(c);
        a.onload = ba;
        a.onerror = ba;
        a.onreadystatechange = ba;
        b && window.setTimeout(function() {
            Qb(a)
        }, 0)
    }, Dk = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        u.call(this, 
        c);
        this.code = a
    };
    t(Dk, u);
    var Y = {}, Z = function(a, b, c) {
        var d = Y[a];
        Ea(d);
        d.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Hk = function(a) {
        var b = function() {
            var a = mk().uiShown || null;
            a && a()
        };
        Mh(function() {
            Oh(function() {
                Z("signIn", a);
                b()
            })
        }, function(c) {
            ck(Xj, !1);
            var d = {identifier: c.getEmail(),providerId: c.getProviderId(),continueUri: jk()};
            Gi(d, function(d) {
                Gk(a, c, null, d) && b()
            })
        }, function() {
            Z("signIn", a);
            b()
        })
    }, Ik = function(a) {
        var b = a.idToken;
        dj(ej(), Da(b));
        var c = bj(b), d = new Of(a.email, a.displayName, a.photoUrl, a.providerId || c.getProviderId());
        v(d.getEmail() == c.getEmail());
        ck(Yj, d.toPlainObject());
        null != ak(Xj) && !ak(Xj) || 
        ek(d);
        bk(Xj);
        var e = mk().signInSuccess || null, f = Si("signInSuccessUrl"), g = ak(Wj) || null || void 0;
        bk(Wj);
        (c = a.appScheme || ak(Tj) || null) ? (bk(Tj), c = oh(mh(new lh, c), "gitkit"), qh(c, Fh(cb({idToken: b,displayName: d.getDisplayName(),photoUrl: d.photoUrl_ || null,context: a.context}))), Hh(c.toString(), function() {
            e && !e(b, d.toPlainObject(), g) || R(g || f)
        })) : window.opener ? (e && !e(b, d.toPlainObject(), g) || window.opener.location.assign(g || f), a = a.appInstallationUrl || ak(Uj) || null, bk(Uj), a ? R(a) : window.close()) : e && !e(b, d.toPlainObject(), 
        g) || R(g || f)
    }, Jk = function(a) {
        switch (a) {
            case "INVALID_PASSWORD":
                return "Incorrect password.";
            case "CAPTCHA_CHECK_FAILED":
                return "Incorrect characters.";
            default:
                return "Error code: " + (a + ".")
        }
    }, Kk = ["google.com"], Gk = function(a, b, c, d) {
        if (!d || Oi(d))
            tj("createAuthUri: " + T(d)), d = Jk(Pi(d)), c ? c.showInfoBar(d) : Z("signIn", a, b.getEmail(), d);
        else {
            c && c.dispose();
            c = d.authUri;
            var e = !!d.captchaRequired;
            if (d.registered) {
                if (c && d.forExistingProvider)
                    return R(c), !1;
                c ? Z("passwordSignIn", a, b.getEmail(), pe(d.providerId), c, e) : 
                Z("passwordSignIn", a, b.getEmail(), void 0, void 0, e)
            } else {
                if (c && 0 <= Ha(Kk, d.providerId))
                    return R(c), !1;
                var f = Pa(lk(), me);
                d = c ? pe(d.providerId) : null;
                null == d && f && (d = me);
                if (lk().length)
                    !c && 1 == lk().length && f ? Z("passwordSignUp", a, b.getEmail(), b.getDisplayName(), e) : Z("signUp", a, d, c, b.getEmail(), b.getDisplayName(), e);
                else
                    throw Error("At least one sign in option should be specified!");
            }
        }
        return !0
    }, Lk = function(a, b, c) {
        var d = function() {
            a.createRecaptcha(b, c)
        };
        if ("undefined" == typeof grecaptcha) {
            var e = S("language") || 
            null || "";
            l.__RECAPTCHA_ONLOAD_CALLBACK__ = d;
            xk(Fk("https://www.google.com/recaptcha/api.js?onload=__RECAPTCHA_ONLOAD_CALLBACK__&render=explicit&hl=" + e), function() {
                throw Error("Cannot load Google reCAPTCHA v2 client.");
            })
        } else
            d()
    }, Mk = function(a) {
        rg(a, Mi, {}, function(b) {
            b && !Oi(b) && b.recaptchaStoken && b.recaptchaSiteKey ? Lk(a, b.recaptchaSiteKey, b.recaptchaStoken) : (tj("getRecaptchaParam: " + T(b)), a.showInfoBar("Request failed. Please try again."))
        })
    }, Nk = function(a) {
        var b = a.checkAndGetEmail(), c = a.checkAndGetPassword(), 
        d = a.isRecaptchaShown(), e = d ? "" : null, f = d ? a.checkAndGetRecaptchaResponse() : null;
        if (b && c && (!d || f)) {
            var b = {email: b,password: c,pendingIdToken: ak(Vj) || null,captchaChallenge: e,captchaResponse: f}, g = function(b) {
                F(a.getPasswordElement(), !1);
                Td(a.getPasswordErrorElement(), Jk(b))
            }, k = function(b) {
                Mk(a);
                "CAPTCHA_CHECK_FAILED" == b && Td(a.getRecaptchaErrorElement(), Jk(b))
            };
            rg(a, Hi, b, function(b) {
                if (!b || Oi(b)) {
                    var c = Pi(b);
                    switch (c) {
                        case "INVALID_PASSWORD":
                            g(c);
                            break;
                        case "CAPTCHA_REQUIRED":
                            k(c);
                            break;
                        case "CAPTCHA_CHECK_FAILED":
                            k(c);
                            break;
                        case "CAPTCHA_REQUIRED_INVALID_PASSWORD":
                            g("INVALID_PASSWORD");
                            k("CAPTCHA_REQUIRED");
                            break;
                        default:
                            tj("verifyPassword: " + T(b)), a.showInfoBar(Jk(c))
                    }
                } else
                    bk(Vj), Ik(b)
            })
        }
    };
    var Pk = function(a, b, c) {
        c = new wg(b, c ? function() {
            Ok(a, b)
        } : void 0);
        a.showChildInEmailInfo(c)
    }, Ok = function(a, b) {
        var c = new Gg(b, function() {
            var d = c.checkAndGetEmail();
            d && sg(a, Ni, Si("oobActionUrl"), {action: "changeEmail",oldEmail: b,newEmail: d}, function(e) {
                e && e.success ? Qk(a, b, v(d)) : c.showInfoBar("Request failed. Please try again.")
            })
        }, function() {
            Pk(a, b, !0)
        });
        a.showChildInEmailInfo(c)
    }, Qk = function(a, b) {
        var c = new Qg(b, function() {
            fj();
            R(ik("select"))
        });
        a.showChildInEmailInfo(c)
    }, Sk = function(a, b, c) {
        var d = new xg(c, 
        function() {
            Rk(a, b, c)
        });
        Eg(a, d)
    }, Rk = function(a, b, c) {
        var d = new Sg(b, function() {
            var c = d.checkAndGetPassword(), f = d.checkAndGetNewPassword();
            c && f && rg(a, Li, {email: b,oldPassword: c,newPassword: f}, function(b) {
                !b || Oi(b) ? (tj("resetPassword: " + T(b)), d.showInfoBar(Jk(Pi(b)))) : Tk(a)
            })
        }, function() {
            Sk(a, b, c)
        });
        Eg(a, d)
    }, Tk = function(a) {
        var b = new Rg(function() {
            fj();
            R(ik("select"))
        });
        Eg(a, b)
    }, Uk = function(a, b) {
        var c = new yg(b, function(d) {
            var e = Ka(Ja(b, function(a) {
                return a.getProviderId() != d
            }), function(a) {
                return v(a.getProviderId())
            });
            rg(a, Ji, {idToken: v(aj(ej())),provider: e}, function(b) {
                !b || Oi(b) ? (tj("setAccountInfo: " + T(b)), c.showInfoBar(Jk(Pi(b)))) : Uk(a, Vk(b))
            })
        }, Si("siteName"));
        Cg(a, c)
    }, Vk = function(a) {
        var b = v(a.email);
        return Ka(a.providerUserInfo, function(a) {
            return new Of(b, a.displayName, a.photoUrl, a.providerId)
        })
    };
    Y.accountManage = function(a, b) {
        var c = ej(), d = aj(c), e = cj(c);
        d ? Ii({idToken: d}, function(c) {
            if (!c || Oi(c))
                tj("getAccountInfo: " + T(c)), R(ik("select"));
            else {
                var d = c.users[0];
                ck(Yj, (new Of(d.email, d.displayName, d.photoUrl, e.getProviderId())).toPlainObject());
                if (d.providerUserInfo && d.providerUserInfo.length) {
                    c = Vk(d);
                    var d = d.email, k = new Bg(!b);
                    k.render(a);
                    Pk(k, d, !1);
                    Uk(k, c)
                } else
                    c = d.email, d = d.passwordUpdatedAt, k = new Dg(!b), k.render(a), Pk(k, c, !0), Sk(k, c, d)
            }
        }) : R(ik("select"))
    };
    Y.callback = function(a, b) {
        var c = new Fg;
        c.render(a);
        var d = {requestUri: window.location.href,postBody: b,pendingIdToken: ak(Vj) || null};
        bk(Vj);
        var e = function(b) {
            c.dispose();
            Z("signIn", a, void 0, b)
        };
        rg(c, Ki, d, function(a) {
            if (!a || Oi(a))
                tj("verifyAssertion: " + T(a)), e(Jk(Pi(a)));
            else if (a.inputEmail && a.inputEmail != a.email) {
                var b = pe(a.providerId);
                e("You are currently logged into a different account on " + (b.getDisplayName() + (". Please select another account, or visit " + (b.getDisplayName() + " to login to the desired account then return to this site."))))
            } else if (a.needConfirmation) {
                dk(Da(a.idToken));
                a.appInstallationUrl && ck(Uj, a.appInstallationUrl);
                a.appScheme && ck(Tj, a.appScheme);
                b = new Of(a.email, a.displayName, a.photoUrl, a.providerId);
                a = new Of(b.getEmail(), null, null, a.verifiedProvider && a.verifiedProvider[0]);
                var d = c.getContainer();
                c.dispose();
                a.getProviderId() ? Z("federatedLinking", d, a, b) : Z("passwordLinking", d, b)
            } else
                Ik(a)
        })
    };
    var Wk = function(a, b, c) {
        b = {continueUri: jk(),identifier: a.checkAndGetEmail(),providerId: Da(Rd(a.getElementByClass("gitkit-id-provider-id"))),appId: b,context: c};
        rg(a, Gi, b, function(b) {
            !b || Oi(b) ? (tj("createAuthUri: " + T(b)), a.showInfoBar(Jk(Pi(b)))) : R(Da(b.authUri))
        })
    };
    Y.federatedLinking = function(a, b, c, d, e) {
        var f = new Hg(b, c, function() {
            Wk(f, d, e)
        });
        f.render(a)
    };
    var Xk = function() {
        var a = hk("select");
        if (S("popupMode")) {
            var b = (window.screen.availHeight - 600) / 2, c = (window.screen.availWidth - 500) / 2, d = a || "about:blank", b = {width: 500,height: 600,top: 0 < b ? b : 0,left: 0 < c ? c : 0,location: !0,resizable: !0,statusbar: !0,toolbar: !1};
            b.target = b.target || d.target || "google_popup";
            b.width = b.width || 690;
            b.height = b.height || 500;
            var e;
            (a = b) || (a = {});
            var b = window, c = "undefined" != typeof d.href ? d.href : String(d), d = a.target || d.target, f = [];
            for (e in a)
                switch (e) {
                    case "width":
                    case "height":
                    case "top":
                    case "left":
                        f.push(e + 
                        "=" + a[e]);
                        break;
                    case "target":
                    case "noreferrer":
                        break;
                    default:
                        f.push(e + "=" + (a[e] ? 1 : 0))
                }
            e = f.join(",");
            if ((x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && b.navigator && b.navigator.standalone && d && "_self" != d)
                e = b.document.createElement("A"), e.setAttribute("href", c), e.setAttribute("target", d), a.noreferrer && e.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, b, 1), e.dispatchEvent(c), e = {};
            else if (a.noreferrer) {
                if (e = b.open("", d, e))
                    y && -1 != c.indexOf(";") && 
                    (c = "'" + c.replace(/'/g, "%27") + "'"), e.opener = null, c = ya(c), e.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), e.document.close()
            } else
                e = b.open(c, d, e);
            e && e.focus()
        } else
            R(a)
    }, Yk = function() {
        R(hk("manageAccount"))
    }, Zk = function() {
        fj();
        bk(Yj);
        var a = mk().signOut || null;
        a && !a() || R(Si("signOutUrl"))
    };
    Y.signInButton = function(a) {
        (new Ig(Xk)).render(a)
    };
    Y.userCard = function(a, b) {
        (new Jg(b, Yk, Zk)).render(a)
    };
    var al = function(a, b, c) {
        var d = b.checkAndGetNewPassword();
        d && rg(b, Li, {oobCode: c,newPassword: d}, function(c) {
            c.email ? (fj(), R(ik("select"))) : $k(a, b)
        })
    }, $k = function(a, b) {
        b && b.dispose();
        (new Pg(function() {
            R(ik("select"))
        })).render(a)
    };
    Y.passwordReset = function(a, b) {
        Li({oobCode: b}, function(c) {
            if (c = c.email) {
                var d = new Vg(c, function() {
                    al(a, d, b)
                });
                d.render(a)
            } else
                $k(a)
        })
    };
    Y.emailChange = function(a, b) {
        Ji({oobCode: b}, function(b) {
            (b.email ? new Lg(function() {
                fj();
                R(ik("select"))
            }) : new Mg(function() {
                R(ik("manageAccount"))
            })).render(a)
        })
    };
    Y.emailVerification = function(a, b) {
        Ji({oobCode: b}, function(b) {
            (b.email ? new Ng(function() {
                fj();
                R(ik("select"))
            }) : new Og(function() {
                cj(ej()) ? R(Si("signInSuccessUrl")) : R(ik("select"))
            })).render(a)
        })
    };
    Y.passwordLinking = function(a, b, c) {
        var d = new Tg(b, function() {
            Nk(d)
        });
        d.render(a);
        c && Mk(d)
    };
    var bl = function(a) {
        var b = a.checkAndGetEmail(), c = a.checkAndGetRecaptchaResponse();
        if (b && c) {
            var c = {action: "resetPassword",email: b,challenge: "",response: c}, d = a.getContainer();
            sg(a, Ni, Si("oobActionUrl"), c, function(c) {
                if (c && c.success) {
                    a.dispose();
                    var f = new Kg(v(b), function() {
                        f.dispose();
                        Z("signIn", d)
                    });
                    f.render(d)
                } else
                    a.showInfoBar("Request failed. Please try again."), Mk(a)
            })
        }
    };
    Y.passwordRecovery = function(a, b, c) {
        var d = new Ug(function() {
            bl(d)
        }, c ? void 0 : function() {
            d.dispose();
            Z("signIn", a)
        }, b);
        d.render(a);
        Mk(d)
    };
    Y.passwordSignIn = function(a, b, c, d, e) {
        var f = new Wg(function() {
            Nk(f)
        }, function() {
            var b = f.getEmail();
            f.dispose();
            Z("passwordRecovery", a, b)
        }, function(a, b) {
            R(v(b))
        }, b, c, d);
        f.render(a);
        e && Mk(f)
    };
    var cl = function(a) {
        var b = a.checkAndGetEmail(), c = a.checkAndGetName(), d = a.checkAndGetNewPassword(), e = a.isRecaptchaShown(), f = e ? "" : null, g = e ? a.checkAndGetRecaptchaResponse() : null;
        !b || !c || !d || e && !g || a.hasTos() && !a.checkTosAgreed() || rg(a, Ji, {email: b,displayName: c,password: d,captchaChallenge: f,captchaResponse: g}, function(b) {
            if (!b || Oi(b)) {
                var c = Pi(b);
                switch (c) {
                    case "CAPTCHA_CHECK_FAILED":
                        if (Td(a.getRecaptchaErrorElement(), Jk(c)), a.isRecaptchaShown()) {
                            Mk(a);
                            break
                        }
                    case "CAPTCHA_REQUIRED":
                        Mk(a);
                        break;
                    default:
                        tj("setAccountInfo: " + 
                        T(b)), a.showInfoBar(Jk(c))
                }
            } else
                Ik(b)
        })
    };
    Y.passwordSignUp = function(a, b, c, d, e) {
        var f = function() {
            g.dispose();
            Z("signIn", a)
        }, g = new Xg(S("tosUrl") || null, function() {
            cl(g)
        }, e ? void 0 : f, b, c);
        g.render(a);
        d && Mk(g)
    };
    var dl = function(a) {
        var b = a.getEmail() || "";
        if (Wd.test(b)) {
            var c = a.getContainer();
            rg(a, Gi, {identifier: b,continueUri: jk()}, function(d) {
                var e = !!Rd(a.getElementByClass("gitkit-id-remember-account"));
                ck(Xj, e);
                Gk(c, new Of(b), a, d)
            })
        }
    };
    Y.signIn = function(a, b, c) {
        var d = null == ak(Xj) || !!ak(Xj), e = new $g(function() {
            var a = e, b = a.getEmail() || "";
            Wd.test(b) ? bh(a, !0) : bh(a, !1)
        }, function() {
            dl(e)
        }, function() {
            var b = e.getEmail();
            e.dispose();
            Z("passwordRecovery", a, b)
        }, d, b);
        e.render(a);
        c && e.showInfoBar(c)
    };
    var el = function(a) {
        var b = lk();
        a && (Sa(b, function(b) {
            return b.getProviderId() == a.getProviderId()
        }) || tj("API returns unsupported IDP: " + a.getName() + ". Please check your settings on developer console."));
        return b
    }, fl = function(a, b) {
        rg(a, Gi, {providerId: b.getProviderId(),continueUri: jk(),identifier: a.checkAndGetEmail()}, function(b) {
            !b || Oi(b) ? (tj("createAuthUri: " + T(b)), a.showInfoBar(Jk(Pi(b)))) : (ck(Xj, !1), R(v(b.authUri)))
        })
    };
    Y.signUp = function(a, b, c, d, e, f) {
        var g = new ch(function(b, c) {
            c ? R(c) : b.getName() == me.getName() ? (g.dispose(), Z("passwordSignUp", a, d, e, f)) : fl(g, b)
        }, b, c || null, el(b), d);
        g.render(a)
    };
    var gl = function(a) {
        var b = window.location.href, c = kk(), c = jh(b, c) || "", d;
        for (d in fk)
            if (fk[d].toLowerCase() == c.toLowerCase())
                return fk[d];
        b = Ah(b);
        return b.fragment_ || "" !== b.queryData_.toString() || a ? "callback" : null
    }, hl = function() {
        var a = window.location.href, b = Si("queryParameterForSignInSuccessUrl");
        return jh(a, b)
    }, il = function(a) {
        return Da(jh(window.location.href, a))
    }, kl = function(a) {
        var b = function() {
            var b = Si("apiKey"), d = Si("apiVersion"), e = S("ajaxSender") || null;
            !y || !Eb || 9 < Eb ? Ci = new Di("https://www.googleapis.com", 
            b, d, e) : (gapi.client.setApiKey(b), Ci = new Fi("https://www.googleapis.com", b, d, e));
            a()
        };
        !y || !Eb || 9 < Eb ? b() : jl(b)
    }, jl = function(a) {
        "undefined" == typeof gapi ? (l.__GOOGLE_IDENTITYTOOLKIT_GAPI_CALLBACK__ = a, xk(Fk("//apis.google.com/js/client.js?onload=__GOOGLE_IDENTITYTOOLKIT_GAPI_CALLBACK__"), function() {
            throw Error("Cannot load Google API client.");
        })) : a()
    }, ll = function(a) {
        if ("undefined" == typeof accountchooser && Ej()) {
            var b = Fk("//www.accountchooser.com/client.js");
            wk(b, a, null, void 0);
            xk(b, a)
        } else
            a()
    }, nl = function(a, 
    b) {
        kl(function() {
            ml(a, b)
        })
    }, ml = function(a, b) {
        var c = Ih(a);
        switch (gl(b)) {
            case "callback":
                Z("callback", c, b);
                break;
            case "resetPassword":
                Z("passwordReset", c, il("oobCode"));
                break;
            case "changeEmail":
                Z("emailChange", c, il("oobCode"));
                break;
            case "verifyEmail":
                Z("emailVerification", c, il("oobCode"));
                break;
            case "manageAccount":
                Z("accountManage", c, "true" === jh(window.location.href, "inWebview"));
                break;
            case "recoverPassword":
                Z("passwordRecovery", c, il("identifier"), !0);
                break;
            case "linkAccount":
                dk(il("pendingIdToken"));
                Gi({continueUri: jk(),identifier: il("identifier"),providerId: il("providerId"),appId: il("appId"),context: jh(window.location.href, "context")}, function(a) {
                    R(a.authUri)
                });
                return;
            case "select":
                var d = hl();
                d && ck(Wj, d);
                ll(function() {
                    Hk(c)
                });
                return;
            case null:
                Z("signIn", c, void 0, 'Error MODE_MISSING: "mode" parameter was missing in the widget URL.');
                return;
            default:
                throw Error("Unhandled widget operation.");
        }
        (d = mk().uiShown || null) && d()
    };
    na("google.identitytoolkit.signInButton", function(a, b) {
        nk(b);
        yc(window, "load", function() {
            var b = Ih(a), d = cj(ej());
            if (d) {
                var e;
                e = (e = ak(Yj) || null) ? Pf(e) : null;
                e && e.getEmail() == d.getEmail() || (e = new Of(d.getEmail(), null, null, d.getProviderId()), ck(Yj, e.toPlainObject()));
                Z("userCard", b, e)
            } else
                Z("signInButton", b)
        })
    });
    na("google.identitytoolkit.start", function(a, b, c) {
        nk(b);
        yc(window, "load", function() {
            nl(a, c)
        })
    });
    na("google.identitytoolkit.setConfig", nk);
    na("google.identitytoolkit.signOut", Zk);
    na("google.identitytoolkit.signIn", Xk);
    na("google.identitytoolkit.manageAccount", Yk);
})()
