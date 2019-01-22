(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Lit = factory());
}(this, function () { 'use strict';

  /**
  @license @nocompile
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  (function () {

    var r,
        t = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    };

    function ca() {
      ca = function () {};

      t.Symbol || (t.Symbol = da);
    }

    var da = function () {
      var a = 0;
      return function (b) {
        return "jscomp_symbol_" + (b || "") + a++;
      };
    }();

    function ea() {
      ca();
      var a = t.Symbol.iterator;
      a || (a = t.Symbol.iterator = t.Symbol("iterator"));
      "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return fa(this);
        }
      });

      ea = function () {};
    }

    function fa(a) {
      var b = 0;
      return ha(function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      });
    }

    function ha(a) {
      ea();
      a = {
        next: a
      };

      a[t.Symbol.iterator] = function () {
        return this;
      };

      return a;
    }

    function ia(a) {
      ea();
      var b = a[Symbol.iterator];
      return b ? b.call(a) : fa(a);
    }

    function ja(a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);

      return c;
    }

    var ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;else {
      var la;

      a: {
        var ma = {
          Ma: !0
        },
            na = {};

        try {
          na.__proto__ = ma;
          la = na.Ma;
          break a;
        } catch (a) {}

        la = !1;
      }

      ka = la ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var oa = ka;

    function pa() {
      this.f = !1;
      this.b = null;
      this.ha = void 0;
      this.a = 1;
      this.H = 0;
      this.c = null;
    }

    function qa(a) {
      if (a.f) throw new TypeError("Generator is already running");
      a.f = !0;
    }

    pa.prototype.v = function (a) {
      this.ha = a;
    };

    function ra(a, b) {
      a.c = {
        Pa: b,
        Ua: !0
      };
      a.a = a.H;
    }

    pa.prototype.return = function (a) {
      this.c = {
        return: a
      };
      this.a = this.H;
    };

    function sa(a, b) {
      a.a = 3;
      return {
        value: b
      };
    }

    function ta(a) {
      this.a = new pa();
      this.b = a;
    }

    function ua(a, b) {
      qa(a.a);
      var c = a.a.b;
      if (c) return xa(a, "return" in c ? c["return"] : function (a) {
        return {
          value: a,
          done: !0
        };
      }, b, a.a.return);
      a.a.return(b);
      return ya(a);
    }

    function xa(a, b, c, d) {
      try {
        var e = b.call(a.a.b, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.a.f = !1, e;
        var f = e.value;
      } catch (g) {
        return a.a.b = null, ra(a.a, g), ya(a);
      }

      a.a.b = null;
      d.call(a.a, f);
      return ya(a);
    }

    function ya(a) {
      for (; a.a.a;) try {
        var b = a.b(a.a);
        if (b) return a.a.f = !1, {
          value: b.value,
          done: !1
        };
      } catch (c) {
        a.a.ha = void 0, ra(a.a, c);
      }

      a.a.f = !1;

      if (a.a.c) {
        b = a.a.c;
        a.a.c = null;
        if (b.Ua) throw b.Pa;
        return {
          value: b.return,
          done: !0
        };
      }

      return {
        value: void 0,
        done: !0
      };
    }

    function za(a) {
      this.next = function (b) {
        qa(a.a);
        a.a.b ? b = xa(a, a.a.b.next, b, a.a.v) : (a.a.v(b), b = ya(a));
        return b;
      };

      this.throw = function (b) {
        qa(a.a);
        a.a.b ? b = xa(a, a.a.b["throw"], b, a.a.v) : (ra(a.a, b), b = ya(a));
        return b;
      };

      this.return = function (b) {
        return ua(a, b);
      };

      ea();

      this[Symbol.iterator] = function () {
        return this;
      };
    }

    function Aa(a, b) {
      b = new za(new ta(b));
      oa && oa(b, a.prototype);
      return b;
    }

    (function () {
      if (!function () {
        var a = document.createEvent("Event");
        a.initEvent("foo", !0, !0);
        a.preventDefault();
        return a.defaultPrevented;
      }()) {
        var a = Event.prototype.preventDefault;

        Event.prototype.preventDefault = function () {
          this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            },
            configurable: !0
          }));
        };
      }

      var b = /Trident/.test(navigator.userAgent);
      if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
        b = b || {};
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
        return c;
      }, window.CustomEvent.prototype = window.Event.prototype;

      if (!window.Event || b && "function" !== typeof window.Event) {
        var c = window.Event;

        window.Event = function (a, b) {
          b = b || {};
          var c = document.createEvent("Event");
          c.initEvent(a, !!b.bubbles, !!b.cancelable);
          return c;
        };

        if (c) for (var d in c) window.Event[d] = c[d];
        window.Event.prototype = c.prototype;
      }

      if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
        b = window.MouseEvent;

        window.MouseEvent = function (a, b) {
          b = b || {};
          var c = document.createEvent("MouseEvent");
          c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
          return c;
        };

        if (b) for (d in b) window.MouseEvent[d] = b[d];
        window.MouseEvent.prototype = b.prototype;
      }

      Array.from || (Array.from = function (a) {
        return [].slice.call(a);
      });
      Object.assign || (Object.assign = function (a, b) {
        for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++) if (e = c[d]) for (var f = a, n = e, p = Object.getOwnPropertyNames(n), G = 0; G < p.length; G++) e = p[G], f[e] = n[e];

        return a;
      });
    })(window.WebComponents);

    (function () {
      function a() {}

      function b(a, b) {
        if (!a.childNodes.length) return [];

        switch (a.nodeType) {
          case Node.DOCUMENT_NODE:
            return Q.call(a, b);

          case Node.DOCUMENT_FRAGMENT_NODE:
            return yb.call(a, b);

          default:
            return x.call(a, b);
        }
      }

      var c = "undefined" === typeof HTMLTemplateElement,
          d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
          e = !1;
      /Trident/.test(navigator.userAgent) && function () {
        function a(a, b) {
          if (a instanceof DocumentFragment) for (var d; d = a.firstChild;) c.call(this, d, b);else c.call(this, a, b);
          return a;
        }

        e = !0;
        var b = Node.prototype.cloneNode;

        Node.prototype.cloneNode = function (a) {
          a = b.call(this, a);
          this instanceof DocumentFragment && (a.__proto__ = DocumentFragment.prototype);
          return a;
        };

        DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
        DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
        Object.defineProperties(DocumentFragment.prototype, {
          nodeType: {
            get: function () {
              return Node.DOCUMENT_FRAGMENT_NODE;
            },
            configurable: !0
          },
          localName: {
            get: function () {},
            configurable: !0
          },
          nodeName: {
            get: function () {
              return "#document-fragment";
            },
            configurable: !0
          }
        });
        var c = Node.prototype.insertBefore;
        Node.prototype.insertBefore = a;
        var d = Node.prototype.appendChild;

        Node.prototype.appendChild = function (b) {
          b instanceof DocumentFragment ? a.call(this, b, null) : d.call(this, b);
          return b;
        };

        var f = Node.prototype.removeChild,
            g = Node.prototype.replaceChild;

        Node.prototype.replaceChild = function (b, c) {
          b instanceof DocumentFragment ? (a.call(this, b, c), f.call(this, c)) : g.call(this, b, c);
          return c;
        };

        Document.prototype.createDocumentFragment = function () {
          var a = this.createElement("df");
          a.__proto__ = DocumentFragment.prototype;
          return a;
        };

        var h = Document.prototype.importNode;

        Document.prototype.importNode = function (a, b) {
          b = h.call(this, a, b || !1);
          a instanceof DocumentFragment && (b.__proto__ = DocumentFragment.prototype);
          return b;
        };
      }();

      var f = Node.prototype.cloneNode,
          g = Document.prototype.createElement,
          h = Document.prototype.importNode,
          k = Node.prototype.removeChild,
          m = Node.prototype.appendChild,
          n = Node.prototype.replaceChild,
          p = DOMParser.prototype.parseFromString,
          G = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
        get: function () {
          return this.innerHTML;
        },
        set: function (a) {
          this.innerHTML = a;
        }
      },
          u = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
        get: function () {
          return this.childNodes;
        }
      },
          x = Element.prototype.querySelectorAll,
          Q = Document.prototype.querySelectorAll,
          yb = DocumentFragment.prototype.querySelectorAll,
          zb = function () {
        if (!c) {
          var a = document.createElement("template"),
              b = document.createElement("template");
          b.content.appendChild(document.createElement("div"));
          a.content.appendChild(b);
          a = a.cloneNode(!0);
          return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || d;
        }
      }();

      if (c) {
        var S = document.implementation.createHTMLDocument("template"),
            Ka = !0,
            q = document.createElement("style");
        q.textContent = "template{display:none;}";
        var va = document.head;
        va.insertBefore(q, va.firstElementChild);
        a.prototype = Object.create(HTMLElement.prototype);
        var Z = !document.createElement("div").hasOwnProperty("innerHTML");

        a.S = function (b) {
          if (!b.content && b.namespaceURI === document.documentElement.namespaceURI) {
            b.content = S.createDocumentFragment();

            for (var c; c = b.firstChild;) m.call(b.content, c);

            if (Z) b.__proto__ = a.prototype;else if (b.cloneNode = function (b) {
              return a.b(this, b);
            }, Ka) try {
              l(b), y(b);
            } catch (gh) {
              Ka = !1;
            }
            a.a(b.content);
          }
        };

        var X = {
          option: ["select"],
          thead: ["table"],
          col: ["colgroup", "table"],
          tr: ["tbody", "table"],
          th: ["tr", "tbody", "table"],
          td: ["tr", "tbody", "table"]
        },
            l = function (b) {
          Object.defineProperty(b, "innerHTML", {
            get: function () {
              return aa(this);
            },
            set: function (b) {
              var c = X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b) || ["", ""])[1].toLowerCase()];
              if (c) for (var d = 0; d < c.length; d++) b = "<" + c[d] + ">" + b + "</" + c[d] + ">";
              S.body.innerHTML = b;

              for (a.a(S); this.content.firstChild;) k.call(this.content, this.content.firstChild);

              b = S.body;
              if (c) for (d = 0; d < c.length; d++) b = b.lastChild;

              for (; b.firstChild;) m.call(this.content, b.firstChild);
            },
            configurable: !0
          });
        },
            y = function (a) {
          Object.defineProperty(a, "outerHTML", {
            get: function () {
              return "<template>" + this.innerHTML + "</template>";
            },
            set: function (a) {
              if (this.parentNode) {
                S.body.innerHTML = a;

                for (a = this.ownerDocument.createDocumentFragment(); S.body.firstChild;) m.call(a, S.body.firstChild);

                n.call(this.parentNode, a, this);
              } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
            },
            configurable: !0
          });
        };

        l(a.prototype);
        y(a.prototype);

        a.a = function (c) {
          c = b(c, "template");

          for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) a.S(f);
        };

        document.addEventListener("DOMContentLoaded", function () {
          a.a(document);
        });

        Document.prototype.createElement = function () {
          var b = g.apply(this, arguments);
          "template" === b.localName && a.S(b);
          return b;
        };

        DOMParser.prototype.parseFromString = function () {
          var b = p.apply(this, arguments);
          a.a(b);
          return b;
        };

        Object.defineProperty(HTMLElement.prototype, "innerHTML", {
          get: function () {
            return aa(this);
          },
          set: function (b) {
            G.set.call(this, b);
            a.a(this);
          },
          configurable: !0,
          enumerable: !0
        });

        var Y = /[&\u00A0"]/g,
            Ab = /[&\u00A0<>]/g,
            La = function (a) {
          switch (a) {
            case "&":
              return "&amp;";

            case "<":
              return "&lt;";

            case ">":
              return "&gt;";

            case '"':
              return "&quot;";

            case "\u00a0":
              return "&nbsp;";
          }
        };

        q = function (a) {
          for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;

          return b;
        };

        var wa = q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
            Ma = q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
            aa = function (a, b) {
          "template" === a.localName && (a = a.content);

          for (var c = "", d = b ? b(a) : u.get.call(a), e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
            a: {
              var h = g;
              var k = a;
              var m = b;

              switch (h.nodeType) {
                case Node.ELEMENT_NODE:
                  for (var l = h.localName, n = "<" + l, p = h.attributes, x = 0; k = p[x]; x++) n += " " + k.name + '="' + k.value.replace(Y, La) + '"';

                  n += ">";
                  h = wa[l] ? n : n + aa(h, m) + "</" + l + ">";
                  break a;

                case Node.TEXT_NODE:
                  h = h.data;
                  h = k && Ma[k.localName] ? h : h.replace(Ab, La);
                  break a;

                case Node.COMMENT_NODE:
                  h = "\x3c!--" + h.data + "--\x3e";
                  break a;

                default:
                  throw window.console.error(h), Error("not implemented");
              }
            }

            c += h;
          }

          return c;
        };
      }

      if (c || zb) {
        a.b = function (a, b) {
          var c = f.call(a, !1);
          this.S && this.S(c);
          b && (m.call(c.content, f.call(a.content, !0)), Na(c.content, a.content));
          return c;
        };

        var Na = function (c, d) {
          if (d.querySelectorAll && (d = b(d, "template"), 0 !== d.length)) {
            c = b(c, "template");

            for (var e = 0, f = c.length, g, h; e < f; e++) h = d[e], g = c[e], a && a.S && a.S(h), n.call(g.parentNode, jf.call(h, !0), g);
          }
        },
            jf = Node.prototype.cloneNode = function (b) {
          if (!e && d && this instanceof DocumentFragment) {
            if (b) var c = kf.call(this.ownerDocument, this, !0);else return this.ownerDocument.createDocumentFragment();
          } else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? c = a.b(this, b) : c = f.call(this, b);
          b && Na(c, this);
          return c;
        },
            kf = Document.prototype.importNode = function (c, d) {
          d = d || !1;
          if ("template" === c.localName) return a.b(c, d);
          var e = h.call(this, c, d);

          if (d) {
            Na(e, c);
            c = b(e, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');

            for (var f, k = 0; k < c.length; k++) {
              f = c[k];
              d = g.call(document, "script");
              d.textContent = f.textContent;

              for (var m = f.attributes, l = 0, p; l < m.length; l++) p = m[l], d.setAttribute(p.name, p.value);

              n.call(f.parentNode, d, f);
            }
          }

          return e;
        };
      }

      c && (window.HTMLTemplateElement = a);
    })();

    var Ba = setTimeout;

    function Ca() {}

    function Da(a, b) {
      return function () {
        a.apply(b, arguments);
      };
    }

    function v(a) {
      if (!(this instanceof v)) throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof a) throw new TypeError("not a function");
      this.K = 0;
      this.ya = !1;
      this.B = void 0;
      this.W = [];
      Ea(a, this);
    }

    function Fa(a, b) {
      for (; 3 === a.K;) a = a.B;

      0 === a.K ? a.W.push(b) : (a.ya = !0, Ga(function () {
        var c = 1 === a.K ? b.Wa : b.Xa;
        if (null === c) (1 === a.K ? Ha : Ia)(b.ta, a.B);else {
          try {
            var d = c(a.B);
          } catch (e) {
            Ia(b.ta, e);
            return;
          }

          Ha(b.ta, d);
        }
      }));
    }

    function Ha(a, b) {
      try {
        if (b === a) throw new TypeError("A promise cannot be resolved with itself.");

        if (b && ("object" === typeof b || "function" === typeof b)) {
          var c = b.then;

          if (b instanceof v) {
            a.K = 3;
            a.B = b;
            Ja(a);
            return;
          }

          if ("function" === typeof c) {
            Ea(Da(c, b), a);
            return;
          }
        }

        a.K = 1;
        a.B = b;
        Ja(a);
      } catch (d) {
        Ia(a, d);
      }
    }

    function Ia(a, b) {
      a.K = 2;
      a.B = b;
      Ja(a);
    }

    function Ja(a) {
      2 === a.K && 0 === a.W.length && Ga(function () {
        a.ya || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a.B);
      });

      for (var b = 0, c = a.W.length; b < c; b++) Fa(a, a.W[b]);

      a.W = null;
    }

    function Oa(a, b, c) {
      this.Wa = "function" === typeof a ? a : null;
      this.Xa = "function" === typeof b ? b : null;
      this.ta = c;
    }

    function Ea(a, b) {
      var c = !1;

      try {
        a(function (a) {
          c || (c = !0, Ha(b, a));
        }, function (a) {
          c || (c = !0, Ia(b, a));
        });
      } catch (d) {
        c || (c = !0, Ia(b, d));
      }
    }

    v.prototype["catch"] = function (a) {
      return this.then(null, a);
    };

    v.prototype.then = function (a, b) {
      var c = new this.constructor(Ca);
      Fa(this, new Oa(a, b, c));
      return c;
    };

    v.prototype["finally"] = function (a) {
      var b = this.constructor;
      return this.then(function (c) {
        return b.resolve(a()).then(function () {
          return c;
        });
      }, function (c) {
        return b.resolve(a()).then(function () {
          return b.reject(c);
        });
      });
    };

    function Pa(a) {
      return new v(function (b, c) {
        function d(a, g) {
          try {
            if (g && ("object" === typeof g || "function" === typeof g)) {
              var h = g.then;

              if ("function" === typeof h) {
                h.call(g, function (b) {
                  d(a, b);
                }, c);
                return;
              }
            }

            e[a] = g;
            0 === --f && b(e);
          } catch (n) {
            c(n);
          }
        }

        if (!a || "undefined" === typeof a.length) throw new TypeError("Promise.all accepts an array");
        var e = Array.prototype.slice.call(a);
        if (0 === e.length) return b([]);

        for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
      });
    }

    function Qa(a) {
      return a && "object" === typeof a && a.constructor === v ? a : new v(function (b) {
        b(a);
      });
    }

    function Ra(a) {
      return new v(function (b, c) {
        c(a);
      });
    }

    function Sa(a) {
      return new v(function (b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c);
      });
    }

    var Ga = "function" === typeof setImmediate && function (a) {
      setImmediate(a);
    } || function (a) {
      Ba(a, 0);
    };
    /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */


    if (!window.Promise) {
      window.Promise = v;
      v.prototype.then = v.prototype.then;
      v.all = Pa;
      v.race = Sa;
      v.resolve = Qa;
      v.reject = Ra;
      var Ta = document.createTextNode(""),
          Ua = [];
      new MutationObserver(function () {
        for (var a = Ua.length, b = 0; b < a; b++) Ua[b]();

        Ua.splice(0, a);
      }).observe(Ta, {
        characterData: !0
      });

      Ga = function (a) {
        Ua.push(a);
        Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
      };
    }
    /*
    Copyright (C) 2015 by WebReflection
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */

    (function (a, b) {
      if (!(b in a)) {
        var c = typeof global === typeof c ? window : global,
            d = 0,
            e = "" + Math.random(),
            f = "__\u0001symbol@@" + e,
            g = a.getOwnPropertyNames,
            h = a.getOwnPropertyDescriptor,
            k = a.create,
            m = a.keys,
            n = a.freeze || a,
            p = a.defineProperty,
            G = a.defineProperties,
            u = h(a, "getOwnPropertyNames"),
            x = a.prototype,
            Q = x.hasOwnProperty,
            yb = x.propertyIsEnumerable,
            zb = x.toString,
            S = function (a, b, c) {
          Q.call(a, f) || p(a, f, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: {}
          });
          a[f]["@@" + b] = c;
        },
            Ka = function (a, b) {
          var c = k(a);
          g(b).forEach(function (a) {
            X.call(b, a) && wa(c, a, b[a]);
          });
          return c;
        },
            q = function () {},
            va = function (a) {
          return a != f && !Q.call(Y, a);
        },
            Z = function (a) {
          return a != f && Q.call(Y, a);
        },
            X = function (a) {
          var b = "" + a;
          return Z(b) ? Q.call(this, b) && this[f]["@@" + b] : yb.call(this, a);
        },
            l = function (b) {
          p(x, b, {
            enumerable: !1,
            configurable: !0,
            get: q,
            set: function (a) {
              aa(this, b, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: a
              });
              S(this, b, !0);
            }
          });
          return n(Y[b] = p(a(b), "constructor", Ab));
        },
            y = function (a) {
          if (this && this !== c) throw new TypeError("Symbol is not a constructor");
          return l("__\u0001symbol:".concat(a || "", e, ++d));
        },
            Y = k(null),
            Ab = {
          value: y
        },
            La = function (a) {
          return Y[a];
        },
            wa = function (a, b, c) {
          var d = "" + b;

          if (Z(d)) {
            b = aa;

            if (c.enumerable) {
              var e = k(c);
              e.enumerable = !1;
            } else e = c;

            b(a, d, e);
            S(a, d, !!c.enumerable);
          } else p(a, b, c);

          return a;
        },
            Ma = function (a) {
          return g(a).filter(Z).map(La);
        };

        u.value = wa;
        p(a, "defineProperty", u);
        u.value = Ma;
        p(a, b, u);

        u.value = function (a) {
          return g(a).filter(va);
        };

        p(a, "getOwnPropertyNames", u);

        u.value = function (a, b) {
          var c = Ma(b);
          c.length ? m(b).concat(c).forEach(function (c) {
            X.call(b, c) && wa(a, c, b[c]);
          }) : G(a, b);
          return a;
        };

        p(a, "defineProperties", u);
        u.value = X;
        p(x, "propertyIsEnumerable", u);
        u.value = y;
        p(c, "Symbol", u);

        u.value = function (a) {
          a = "__\u0001symbol:".concat("__\u0001symbol:", a, e);
          return a in x ? Y[a] : l(a);
        };

        p(y, "for", u);

        u.value = function (a) {
          if (va(a)) throw new TypeError(a + " is not a symbol");
          return Q.call(Y, a) ? a.slice(20, -e.length) : void 0;
        };

        p(y, "keyFor", u);

        u.value = function (a, b) {
          var c = h(a, b);
          c && Z(b) && (c.enumerable = X.call(a, b));
          return c;
        };

        p(a, "getOwnPropertyDescriptor", u);

        u.value = function (a, b) {
          return 1 === arguments.length ? k(a) : Ka(a, b);
        };

        p(a, "create", u);

        u.value = function () {
          var a = zb.call(this);
          return "[object String]" === a && Z(this) ? "[object Symbol]" : a;
        };

        p(x, "toString", u);

        try {
          var aa = k(p({}, "__\u0001symbol:", {
            get: function () {
              return p(this, "__\u0001symbol:", {
                value: !1
              })["__\u0001symbol:"];
            }
          }))["__\u0001symbol:"] || p;
        } catch (Na) {
          aa = function (a, b, c) {
            var d = h(x, b);
            delete x[b];
            p(a, b, c);
            p(x, b, d);
          };
        }
      }
    })(Object, "getOwnPropertySymbols");

    (function (a) {
      var b = a.defineProperty,
          c = a.prototype,
          d = c.toString,
          e;
      "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (f) {
        if (!(f in Symbol)) switch (b(Symbol, f, {
          value: Symbol(f)
        }), f) {
          case "toStringTag":
            e = a.getOwnPropertyDescriptor(c, "toString"), e.value = function () {
              var a = d.call(this),
                  b = this[Symbol.toStringTag];
              return "undefined" === typeof b ? a : "[object " + b + "]";
            }, b(c, "toString", e);
        }
      });
    })(Object, Symbol);

    (function (a, b, c) {
      function d() {
        return this;
      }

      b[a] || (b[a] = function () {
        var b = 0,
            c = this,
            g = {
          next: function () {
            var a = c.length <= b;
            return a ? {
              done: a
            } : {
              done: a,
              value: c[b++]
            };
          }
        };
        g[a] = d;
        return g;
      });
      c[a] || (c[a] = function () {
        var b = String.fromCodePoint,
            c = this,
            g = 0,
            h = c.length,
            k = {
          next: function () {
            var a = h <= g,
                d = a ? "" : b(c.codePointAt(g));
            g += d.length;
            return a ? {
              done: a
            } : {
              done: a,
              value: d
            };
          }
        };
        k[a] = d;
        return k;
      });
    })(Symbol.iterator, Array.prototype, String.prototype);
    /*
    Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */


    var Va = Object.prototype.toString;

    Object.prototype.toString = function () {
      return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Va.call(this);
    };

    Object.keys = function (a) {
      return Object.getOwnPropertyNames(a).filter(function (b) {
        return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable;
      });
    };

    var Wa = window.Symbol.iterator;
    String.prototype[Wa] && String.prototype.codePointAt || (String.prototype[Wa] = function Xa() {
      var b,
          c = this;
      return Aa(Xa, function (d) {
        1 == d.a && (b = 0);
        if (3 != d.a) return b < c.length ? d = sa(d, c[b]) : (d.a = 0, d = void 0), d;
        b++;
        d.a = 2;
      });
    });
    Set.prototype[Wa] || (Set.prototype[Wa] = function Ya() {
      var b,
          c = this,
          d;
      return Aa(Ya, function (e) {
        1 == e.a && (b = [], c.forEach(function (c) {
          b.push(c);
        }), d = 0);
        if (3 != e.a) return d < b.length ? e = sa(e, b[d]) : (e.a = 0, e = void 0), e;
        d++;
        e.a = 2;
      });
    });
    Map.prototype[Wa] || (Map.prototype[Wa] = function Za() {
      var b,
          c = this,
          d;
      return Aa(Za, function (e) {
        1 == e.a && (b = [], c.forEach(function (c, d) {
          b.push([d, c]);
        }), d = 0);
        if (3 != e.a) return d < b.length ? e = sa(e, b[d]) : (e.a = 0, e = void 0), e;
        d++;
        e.a = 2;
      });
    });
    /*
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    window.WebComponents = window.WebComponents || {
      flags: {}
    };
    var $a = document.querySelector('script[src*="webcomponents-bundle"]'),
        ab = /wc-(.+)/,
        w = {};

    if (!w.noOpts) {
      location.search.slice(1).split("&").forEach(function (a) {
        a = a.split("=");
        var b;
        a[0] && (b = a[0].match(ab)) && (w[b[1]] = a[1] || !0);
      });
      if ($a) for (var bb = 0, cb = void 0; cb = $a.attributes[bb]; bb++) "src" !== cb.name && (w[cb.name] = cb.value || !0);

      if (w.log && w.log.split) {
        var db = w.log.split(",");
        w.log = {};
        db.forEach(function (a) {
          w.log[a] = !0;
        });
      } else w.log = {};
    }

    window.WebComponents.flags = w;
    var eb = w.shadydom;
    eb && (window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = eb);
    var fb = w.register || w.ce;
    fb && window.customElements && (window.customElements.forcePolyfill = fb);
    /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    function gb() {
      this.Ba = this.root = null;
      this.ga = !1;
      this.O = this.da = this.pa = this.assignedSlot = this.assignedNodes = this.T = null;
      this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.Y = void 0;
      this.va = this.wa = !1;
      this.ba = {};
    }

    gb.prototype.toJSON = function () {
      return {};
    };

    function z(a) {
      a.__shady || (a.__shady = new gb());
      return a.__shady;
    }

    function A(a) {
      return a && a.__shady;
    }
    var B = window.ShadyDOM || {};
    B.Sa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var hb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    B.G = !!(hb && hb.configurable && hb.get);
    B.ra = B.force || !B.Sa;
    B.X = B.noPatch || !1;
    B.Aa = B.preferPerformance;

    function ib(a) {
      return (a = A(a)) && void 0 !== a.firstChild;
    }

    function C(a) {
      return "ShadyRoot" === a.Ja;
    }

    function jb(a) {
      a = a.__shady_getRootNode();
      if (C(a)) return a;
    }

    function kb(a) {
      return (a = (a = A(a)) && a.root) && lb(a);
    }

    var mb = Element.prototype,
        nb = mb.matches || mb.matchesSelector || mb.mozMatchesSelector || mb.msMatchesSelector || mb.oMatchesSelector || mb.webkitMatchesSelector,
        ob = document.createTextNode(""),
        pb = 0,
        qb = [];
    new MutationObserver(function () {
      for (; qb.length;) try {
        qb.shift()();
      } catch (a) {
        throw ob.textContent = pb++, a;
      }
    }).observe(ob, {
      characterData: !0
    });

    function rb(a) {
      qb.push(a);
      ob.textContent = pb++;
    }

    var sb = !!document.contains;

    function tb(a, b) {
      for (; b;) {
        if (b == a) return !0;
        b = b.__shady_parentNode;
      }

      return !1;
    }

    function ub(a) {
      for (var b = a.length - 1; 0 <= b; b--) {
        var c = a[b],
            d = c.getAttribute("id") || c.getAttribute("name");
        d && "length" !== d && isNaN(d) && (a[d] = c);
      }

      a.item = function (b) {
        return a[b];
      };

      a.namedItem = function (b) {
        if ("length" !== b && isNaN(b) && a[b]) return a[b];

        for (var c = ia(a), d = c.next(); !d.done; d = c.next()) if (d = d.value, (d.getAttribute("id") || d.getAttribute("name")) == b) return d;

        return null;
      };

      return a;
    }

    function D(a, b, c, d) {
      c = void 0 === c ? "" : c;

      for (var e in b) {
        var f = b[e];

        if (!(d && 0 <= d.indexOf(e))) {
          f.configurable = !0;
          var g = c + e;
          if (f.value) a[g] = f.value;else try {
            Object.defineProperty(a, g, f);
          } catch (h) {}
        }
      }
    }

    function E(a) {
      var b = {};
      Object.getOwnPropertyNames(a).forEach(function (c) {
        b[c] = Object.getOwnPropertyDescriptor(a, c);
      });
      return b;
    }
    var vb = [],
        wb;

    function xb(a) {
      wb || (wb = !0, rb(Bb));
      vb.push(a);
    }

    function Bb() {
      wb = !1;

      for (var a = !!vb.length; vb.length;) vb.shift()();

      return a;
    }

    Bb.list = vb;

    function Cb() {
      this.a = !1;
      this.addedNodes = [];
      this.removedNodes = [];
      this.fa = new Set();
    }

    function Db(a) {
      a.a || (a.a = !0, rb(function () {
        a.flush();
      }));
    }

    Cb.prototype.flush = function () {
      if (this.a) {
        this.a = !1;
        var a = this.takeRecords();
        a.length && this.fa.forEach(function (b) {
          b(a);
        });
      }
    };

    Cb.prototype.takeRecords = function () {
      if (this.addedNodes.length || this.removedNodes.length) {
        var a = [{
          addedNodes: this.addedNodes,
          removedNodes: this.removedNodes
        }];
        this.addedNodes = [];
        this.removedNodes = [];
        return a;
      }

      return [];
    };

    function Eb(a, b) {
      var c = z(a);
      c.T || (c.T = new Cb());
      c.T.fa.add(b);
      var d = c.T;
      return {
        Ia: b,
        P: d,
        Ka: a,
        takeRecords: function () {
          return d.takeRecords();
        }
      };
    }

    function Fb(a) {
      var b = a && a.P;
      b && (b.fa.delete(a.Ia), b.fa.size || (z(a.Ka).T = null));
    }

    function Gb(a, b) {
      var c = b.getRootNode();
      return a.map(function (a) {
        var b = c === a.target.getRootNode();

        if (b && a.addedNodes) {
          if (b = Array.from(a.addedNodes).filter(function (a) {
            return c === a.getRootNode();
          }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
            value: b,
            configurable: !0
          }), a;
        } else if (b) return a;
      }).filter(function (a) {
        return a;
      });
    }
    var Hb = /[&\u00A0"]/g,
        Ib = /[&\u00A0<>]/g;

    function Jb(a) {
      switch (a) {
        case "&":
          return "&amp;";

        case "<":
          return "&lt;";

        case ">":
          return "&gt;";

        case '"':
          return "&quot;";

        case "\u00a0":
          return "&nbsp;";
      }
    }

    function Kb(a) {
      for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;

      return b;
    }

    var Lb = Kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        Mb = Kb("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function Nb(a, b) {
      "template" === a.localName && (a = a.content);

      for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
        a: {
          var h = g;
          var k = a,
              m = b;

          switch (h.nodeType) {
            case Node.ELEMENT_NODE:
              k = h.localName;

              for (var n = "<" + k, p = h.attributes, G = 0, u; u = p[G]; G++) n += " " + u.name + '="' + u.value.replace(Hb, Jb) + '"';

              n += ">";
              h = Lb[k] ? n : n + Nb(h, m) + "</" + k + ">";
              break a;

            case Node.TEXT_NODE:
              h = h.data;
              h = k && Mb[k.localName] ? h : h.replace(Ib, Jb);
              break a;

            case Node.COMMENT_NODE:
              h = "\x3c!--" + h.data + "--\x3e";
              break a;

            default:
              throw window.console.error(h), Error("not implemented");
          }
        }

        c += h;
      }

      return c;
    }
    var Ob = B.G,
        Pb = {
      querySelector: function (a) {
        return this.__shady_native_querySelector(a);
      },
      querySelectorAll: function (a) {
        return this.__shady_native_querySelectorAll(a);
      }
    },
        Qb = {};

    function Rb(a) {
      Qb[a] = function (b) {
        return b["__shady_native_" + a];
      };
    }

    function Sb(a, b) {
      D(a, b, "__shady_native_");

      for (var c in b) Rb(c);
    }

    function F(a, b) {
      b = void 0 === b ? [] : b;

      for (var c = 0; c < b.length; c++) {
        var d = b[c],
            e = Object.getOwnPropertyDescriptor(a, d);
        e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Pb[d] || (Pb[d] = e.value) : Rb(d));
      }
    }

    var H = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        I = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        Tb = document.implementation.createHTMLDocument("inert");

    function Ub(a) {
      for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
    }

    var Vb = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        Wb = ["querySelector", "querySelectorAll"];

    function Xb() {
      var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
      window.EventTarget ? F(window.EventTarget.prototype, a) : (F(Node.prototype, a), F(Window.prototype, a));
      Ob ? F(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Sb(Node.prototype, {
        parentNode: {
          get: function () {
            H.currentNode = this;
            return H.parentNode();
          }
        },
        firstChild: {
          get: function () {
            H.currentNode = this;
            return H.firstChild();
          }
        },
        lastChild: {
          get: function () {
            H.currentNode = this;
            return H.lastChild();
          }
        },
        previousSibling: {
          get: function () {
            H.currentNode = this;
            return H.previousSibling();
          }
        },
        nextSibling: {
          get: function () {
            H.currentNode = this;
            return H.nextSibling();
          }
        },
        childNodes: {
          get: function () {
            var a = [];
            H.currentNode = this;

            for (var c = H.firstChild(); c;) a.push(c), c = H.nextSibling();

            return a;
          }
        },
        parentElement: {
          get: function () {
            I.currentNode = this;
            return I.parentNode();
          }
        },
        textContent: {
          get: function () {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                for (var a = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = a.nextNode();) c += d.nodeValue;

                return c;

              default:
                return this.nodeValue;
            }
          },
          set: function (a) {
            if ("undefined" === typeof a || null === a) a = "";

            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                Ub(this);
                (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(a), void 0);
                break;

              default:
                this.nodeValue = a;
            }
          }
        }
      });
      F(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
      a = {
        firstElementChild: {
          get: function () {
            I.currentNode = this;
            return I.firstChild();
          }
        },
        lastElementChild: {
          get: function () {
            I.currentNode = this;
            return I.lastChild();
          }
        },
        children: {
          get: function () {
            var a = [];
            I.currentNode = this;

            for (var c = I.firstChild(); c;) a.push(c), c = I.nextSibling();

            return ub(a);
          }
        },
        childElementCount: {
          get: function () {
            return this.children.length;
          }
        }
      };
      Ob ? (F(Element.prototype, Vb), F(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML"]), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && F(HTMLElement.prototype, ["children"]), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && F(HTMLElement.prototype, ["innerHTML"])) : (Sb(Element.prototype, a), Sb(Element.prototype, {
        previousElementSibling: {
          get: function () {
            I.currentNode = this;
            return I.previousSibling();
          }
        },
        nextElementSibling: {
          get: function () {
            I.currentNode = this;
            return I.nextSibling();
          }
        },
        innerHTML: {
          get: function () {
            return Nb(this, function (a) {
              return a.__shady_native_childNodes;
            });
          },
          set: function (a) {
            var b = "template" === this.localName ? this.content : this;
            Ub(b);
            var d = this.localName || "div";
            d = this.namespaceURI && this.namespaceURI !== Tb.namespaceURI ? Tb.createElementNS(this.namespaceURI, d) : Tb.createElement(d);
            d.innerHTML = a;

            for (a = "template" === this.localName ? d.content : d; d = a.__shady_native_firstChild;) b.__shady_native_insertBefore(d, void 0);
          }
        }
      }));
      F(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
      F(Element.prototype, Wb);
      F(HTMLElement.prototype, ["focus", "blur", "contains"]);
      Ob && F(HTMLElement.prototype, ["parentElement", "children", "innerHTML"]);
      window.HTMLTemplateElement && F(window.HTMLTemplateElement.prototype, ["innerHTML"]);
      Ob ? F(DocumentFragment.prototype, Vb) : Sb(DocumentFragment.prototype, a);
      F(DocumentFragment.prototype, Wb);
      Ob ? (F(DocumentFragment.prototype, Vb), F(Document.prototype, ["activeElement"])) : Sb(Document.prototype, a);
      F(Document.prototype, ["importNode", "getElementById"]);
      F(Document.prototype, Wb);
    }
    var Yb = E({
      get childNodes() {
        return this.__shady_childNodes;
      },

      get firstChild() {
        return this.__shady_firstChild;
      },

      get lastChild() {
        return this.__shady_lastChild;
      },

      get textContent() {
        return this.__shady_textContent;
      },

      set textContent(a) {
        this.__shady_textContent = a;
      },

      get childElementCount() {
        return this.__shady_childElementCount;
      },

      get children() {
        return this.__shady_children;
      },

      get firstElementChild() {
        return this.__shady_firstElementChild;
      },

      get lastElementChild() {
        return this.__shady_lastElementChild;
      },

      get innerHTML() {
        return this.__shady_innerHTML;
      },

      set innerHTML(a) {
        return this.__shady_innerHTML = a;
      },

      get shadowRoot() {
        return this.__shady_shadowRoot;
      }

    }),
        Zb = E({
      get parentElement() {
        return this.__shady_parentElement;
      },

      get parentNode() {
        return this.__shady_parentNode;
      },

      get nextSibling() {
        return this.__shady_nextSibling;
      },

      get previousSibling() {
        return this.__shady_previousSibling;
      },

      get nextElementSibling() {
        return this.__shady_nextElementSibling;
      },

      get previousElementSibling() {
        return this.__shady_previousElementSibling;
      },

      get className() {
        return this.__shady_className;
      },

      set className(a) {
        return this.__shady_className = a;
      }

    }),
        $b;

    for ($b in Yb) Yb[$b].enumerable = !1;

    for (var ac in Zb) Zb[ac].enumerable = !1;

    var bc = B.G || B.X,
        cc = bc ? function () {} : function (a) {
      var b = z(a);
      b.wa || (b.wa = !0, D(a, Zb));
    },
        dc = bc ? function () {} : function (a) {
      var b = z(a);
      b.va || (b.va = !0, D(a, Yb));
    };

    var ec = "__eventWrappers" + Date.now(),
        fc = function () {
      var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
      return a ? function (b) {
        return a.get.call(b);
      } : null;
    }(),
        gc = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0
    },
        hc = {
      DOMAttrModified: !0,
      DOMAttributeNameChanged: !0,
      DOMCharacterDataModified: !0,
      DOMElementNameChanged: !0,
      DOMNodeInserted: !0,
      DOMNodeInsertedIntoDocument: !0,
      DOMNodeRemoved: !0,
      DOMNodeRemovedFromDocument: !0,
      DOMSubtreeModified: !0
    };

    function ic(a) {
      return a instanceof Node ? a.__shady_getRootNode() : a;
    }

    function jc(a, b) {
      var c = [],
          d = a;

      for (a = ic(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;

      c[c.length - 1] === document && c.push(window);
      return c;
    }

    function kc(a) {
      a.V || (a.V = jc(a.target, !0));
      return a.V;
    }

    function lc(a, b) {
      if (!C) return a;
      a = jc(a, !0);

      for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = ic(d), f !== e && (g = a.indexOf(f), e = f), !C(f) || -1 < g) return d;
    }

    function mc(a) {
      function b(b, d) {
        b = new a(b, d);
        b.aa = d && !!d.composed;
        return b;
      }

      b.__proto__ = a;
      b.prototype = a.prototype;
      return b;
    }

    var nc = {
      focus: !0,
      blur: !0
    };

    function oc(a) {
      return a.__target !== a.target || a.na !== a.relatedTarget;
    }

    function pc(a, b, c) {
      if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!oc(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.Ea); d++);
    }

    function qc(a) {
      var b = a.composedPath();
      Object.defineProperty(a, "currentTarget", {
        get: function () {
          return d;
        },
        configurable: !0
      });

      for (var c = b.length - 1; 0 <= c; c--) {
        var d = b[c];
        pc(a, d, "capture");
        if (a.ma) return;
      }

      Object.defineProperty(a, "eventPhase", {
        get: function () {
          return Event.AT_TARGET;
        }
      });
      var e;

      for (c = 0; c < b.length; c++) {
        d = b[c];
        var f = A(d);
        f = f && f.root;
        if (0 === c || f && f === e) if (pc(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.ma) break;
      }
    }

    function rc(a, b, c, d, e, f) {
      for (var g = 0; g < a.length; g++) {
        var h = a[g],
            k = h.type,
            m = h.capture,
            n = h.once,
            p = h.passive;
        if (b === h.node && c === k && d === m && e === n && f === p) return g;
      }

      return -1;
    }

    function sc(a, b, c) {
      if (b) {
        var d = typeof b;
        if ("function" === d || "object" === d) if ("object" !== d || b.handleEvent && "function" === typeof b.handleEvent) {
          if (hc[a]) return this.__shady_native_addEventListener(a, b, c);

          if (c && "object" === typeof c) {
            var e = !!c.capture;
            var f = !!c.once;
            var g = !!c.passive;
          } else e = !!c, g = f = !1;

          var h = c && c.oa || this,
              k = b[ec];

          if (k) {
            if (-1 < rc(k, h, a, e, f, g)) return;
          } else b[ec] = [];

          k = function (e) {
            f && this.__shady_removeEventListener(a, b, c);
            e.__target || tc(e);

            if (h !== this) {
              var g = Object.getOwnPropertyDescriptor(e, "currentTarget");
              Object.defineProperty(e, "currentTarget", {
                get: function () {
                  return h;
                },
                configurable: !0
              });
            }

            e.__previousCurrentTarget = e.currentTarget;
            if (!C(h) || -1 != e.composedPath().indexOf(h)) if (e.composed || -1 < e.composedPath().indexOf(h)) if (oc(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation();else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === h || h instanceof Window) {
              var k = "function" === d ? b.call(h, e) : b.handleEvent && b.handleEvent(e);
              h !== this && (g ? (Object.defineProperty(e, "currentTarget", g), g = null) : delete e.currentTarget);
              return k;
            }
          };

          b[ec].push({
            node: h,
            type: a,
            capture: e,
            once: f,
            passive: g,
            hb: k
          });
          nc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
            capture: [],
            bubble: []
          }, this.__handlers[a][e ? "capture" : "bubble"].push(k)) : this.__shady_native_addEventListener(a, k, c);
        }
      }
    }

    function uc(a, b, c) {
      if (b) {
        if (hc[a]) return this.__shady_native_removeEventListener(a, b, c);

        if (c && "object" === typeof c) {
          var d = !!c.capture;
          var e = !!c.once;
          var f = !!c.passive;
        } else d = !!c, f = e = !1;

        var g = c && c.oa || this,
            h = void 0;
        var k = null;

        try {
          k = b[ec];
        } catch (m) {}

        k && (e = rc(k, g, a, d, e, f), -1 < e && (h = k.splice(e, 1)[0].hb, k.length || (b[ec] = void 0)));

        this.__shady_native_removeEventListener(a, h || b, c);

        h && nc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1));
      }
    }

    function vc() {
      for (var a in nc) window.__shady_native_addEventListener(a, function (a) {
        a.__target || (tc(a), qc(a));
      }, !0);
    }

    var wc = E({
      get composed() {
        void 0 === this.aa && (fc ? this.aa = "focusin" === this.type || "focusout" === this.type || fc(this) : !1 !== this.isTrusted && (this.aa = gc[this.type]));
        return this.aa || !1;
      },

      composedPath: function () {
        this.V || (this.V = jc(this.__target, this.composed));
        return this.V;
      },

      get target() {
        return lc(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
      },

      get relatedTarget() {
        if (!this.na) return null;
        this.xa || (this.xa = jc(this.na, !0));
        return lc(this.currentTarget || this.__previousCurrentTarget, this.xa);
      },

      stopPropagation: function () {
        Event.prototype.stopPropagation.call(this);
        this.ma = !0;
      },
      stopImmediatePropagation: function () {
        Event.prototype.stopImmediatePropagation.call(this);
        this.ma = this.Ea = !0;
      }
    });

    function tc(a) {
      a.__target = a.target;
      a.na = a.relatedTarget;

      if (B.G) {
        var b = Object.getPrototypeOf(a);

        if (!Object.hasOwnProperty(b, "__shady_patchedProto")) {
          var c = Object.create(b);
          c.__shady_sourceProto = b;
          D(c, wc);
          b.__shady_patchedProto = c;
        }

        a.__proto__ = b.__shady_patchedProto;
      } else D(a, wc);
    }

    var xc = mc(Event),
        yc = mc(CustomEvent),
        zc = mc(MouseEvent);

    function Ac() {
      if (!fc && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
        var a = function () {
          var a = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            composed: !0
          });

          this.__shady_dispatchEvent(a);
        };

        Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
      }
    }

    var Bc = Object.getOwnPropertyNames(Document.prototype).filter(function (a) {
      return "on" === a.substring(0, 2);
    });

    function Cc(a, b) {
      return {
        index: a,
        Z: [],
        ea: b
      };
    }

    function Dc(a, b, c, d) {
      var e = 0,
          f = 0,
          g = 0,
          h = 0,
          k = Math.min(b - e, d - f);
      if (0 == e && 0 == f) a: {
        for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;

        g = k;
      }

      if (b == a.length && d == c.length) {
        h = a.length;

        for (var m = c.length, n = 0; n < k - g && Ec(a[--h], c[--m]);) n++;

        h = n;
      }

      e += g;
      f += g;
      b -= h;
      d -= h;
      if (0 == b - e && 0 == d - f) return [];

      if (e == b) {
        for (b = Cc(e, 0); f < d;) b.Z.push(c[f++]);

        return [b];
      }

      if (f == d) return [Cc(e, b - e)];
      k = e;
      g = f;
      d = d - g + 1;
      h = b - k + 1;
      b = Array(d);

      for (m = 0; m < d; m++) b[m] = Array(h), b[m][0] = m;

      for (m = 0; m < h; m++) b[0][m] = m;

      for (m = 1; m < d; m++) for (n = 1; n < h; n++) if (a[k + n - 1] === c[g + m - 1]) b[m][n] = b[m - 1][n - 1];else {
        var p = b[m - 1][n] + 1,
            G = b[m][n - 1] + 1;
        b[m][n] = p < G ? p : G;
      }

      k = b.length - 1;
      g = b[0].length - 1;
      d = b[k][g];

      for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], m = b[k - 1][g], n = b[k][g - 1], p = m < n ? m < h ? m : h : n < h ? n : h, p == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : p == m ? (a.push(3), k--, d = m) : (a.push(2), g--, d = n));

      a.reverse();
      b = void 0;
      k = [];

      for (g = 0; g < a.length; g++) switch (a[g]) {
        case 0:
          b && (k.push(b), b = void 0);
          e++;
          f++;
          break;

        case 1:
          b || (b = Cc(e, 0));
          b.ea++;
          e++;
          b.Z.push(c[f]);
          f++;
          break;

        case 2:
          b || (b = Cc(e, 0));
          b.ea++;
          e++;
          break;

        case 3:
          b || (b = Cc(e, 0)), b.Z.push(c[f]), f++;
      }

      b && k.push(b);
      return k;
    }

    function Ec(a, b) {
      return a === b;
    }

    function Fc(a, b, c) {
      cc(a);
      c = c || null;
      var d = z(a),
          e = z(b),
          f = c ? z(c) : null;
      d.previousSibling = c ? f.previousSibling : b.__shady_lastChild;
      if (f = A(d.previousSibling)) f.nextSibling = a;
      if (f = A(d.nextSibling = c)) f.previousSibling = a;
      d.parentNode = b;
      c ? c === e.firstChild && (e.firstChild = a) : (e.lastChild = a, e.firstChild || (e.firstChild = a));
      e.childNodes = null;
    }

    function Gc(a, b, c) {
      dc(b);
      var d = z(b);
      void 0 !== d.firstChild && (d.childNodes = null);

      if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        d = a.__shady_childNodes;

        for (var e = 0; e < d.length; e++) Fc(d[e], b, c);

        a = z(a);
        b = void 0 !== a.firstChild ? null : void 0;
        a.firstChild = a.lastChild = b;
        a.childNodes = b;
      } else Fc(a, b, c);
    }

    function Hc(a, b) {
      var c = z(a);
      b = z(b);
      a === b.firstChild && (b.firstChild = c.nextSibling);
      a === b.lastChild && (b.lastChild = c.previousSibling);
      a = c.previousSibling;
      var d = c.nextSibling;
      a && (z(a).nextSibling = d);
      d && (z(d).previousSibling = a);
      c.parentNode = c.previousSibling = c.nextSibling = void 0;
      void 0 !== b.childNodes && (b.childNodes = null);
    }

    function Ic(a) {
      var b = z(a);

      if (void 0 === b.firstChild) {
        b.childNodes = null;
        var c = b.firstChild = a.__shady_native_firstChild || null;
        b.lastChild = a.__shady_native_lastChild || null;
        dc(a);
        b = c;

        for (c = void 0; b; b = b.__shady_native_nextSibling) {
          var d = z(b);
          d.parentNode = a;
          d.nextSibling = b.__shady_native_nextSibling || null;
          d.previousSibling = c || null;
          c = b;
          cc(b);
        }
      }
    }
    var Jc = null;

    function Kc() {
      Jc || (Jc = window.ShadyCSS && window.ShadyCSS.ScopingShim);
      return Jc || null;
    }

    function Lc(a, b) {
      var c = Kc();
      c && c.unscopeNode(a, b);
    }

    function Mc(a, b) {
      var c = Kc();
      if (!c) return !0;

      if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        c = !0;
        a = a.__shady_childNodes;

        for (var d = 0; c && d < a.length; d++) c = c && Mc(a[d], b);

        return c;
      }

      return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
    }

    function Nc(a) {
      if (a.nodeType !== Node.ELEMENT_NODE) return "";
      var b = Kc();
      return b ? b.currentScopeForNode(a) : "";
    }

    function Oc(a, b) {
      if (a) {
        a.nodeType === Node.ELEMENT_NODE && b(a);
        a = a.__shady_childNodes;

        for (var c = 0, d; c < a.length; c++) d = a[c], d.nodeType === Node.ELEMENT_NODE && Oc(d, b);
      }
    }
    var Pc = window.document,
        Qc = B.Aa,
        Rc = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        Sc = Rc && Rc.get;

    function Tc(a) {
      for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
    }

    function Uc(a) {
      var b = A(a);

      if (b && void 0 !== b.Y) {
        b = a.__shady_childNodes;

        for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Uc(e);
      }

      if (a = A(a)) a.Y = void 0;
    }

    function Vc(a) {
      var b = a;
      a && "slot" === a.localName && (b = (b = (b = A(a)) && b.O) && b.length ? b[0] : Vc(a.__shady_nextSibling));
      return b;
    }

    function Wc(a, b, c) {
      if (a = (a = A(a)) && a.T) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Db(a);
    }

    var Zc = E({
      get parentNode() {
        var a = A(this);
        a = a && a.parentNode;
        return void 0 !== a ? a : this.__shady_native_parentNode;
      },

      get firstChild() {
        var a = A(this);
        a = a && a.firstChild;
        return void 0 !== a ? a : this.__shady_native_firstChild;
      },

      get lastChild() {
        var a = A(this);
        a = a && a.lastChild;
        return void 0 !== a ? a : this.__shady_native_lastChild;
      },

      get nextSibling() {
        var a = A(this);
        a = a && a.nextSibling;
        return void 0 !== a ? a : this.__shady_native_nextSibling;
      },

      get previousSibling() {
        var a = A(this);
        a = a && a.previousSibling;
        return void 0 !== a ? a : this.__shady_native_previousSibling;
      },

      get childNodes() {
        if (ib(this)) {
          var a = A(this);

          if (!a.childNodes) {
            a.childNodes = [];

            for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
          }

          var c = a.childNodes;
        } else c = this.__shady_native_childNodes;

        c.item = function (a) {
          return c[a];
        };

        return c;
      },

      get parentElement() {
        var a = A(this);
        (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
        return void 0 !== a ? a : this.__shady_native_parentElement;
      },

      get isConnected() {
        if (Sc && Sc.call(this)) return !0;
        if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
        var a = this.ownerDocument;

        if (sb) {
          if (a.__shady_native_contains(this)) return !0;
        } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;

        for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (C(a) ? a.host : void 0);

        return !!(a && a instanceof Document);
      },

      get textContent() {
        if (ib(this)) {
          for (var a = [], b = 0, c = this.__shady_childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.__shady_textContent);

          return a.join("");
        }

        return this.__shady_native_textContent;
      },

      set textContent(a) {
        if ("undefined" === typeof a || null === a) a = "";

        switch (this.nodeType) {
          case Node.ELEMENT_NODE:
          case Node.DOCUMENT_FRAGMENT_NODE:
            if (!ib(this) && B.G) {
              var b = this.__shady_firstChild;
              (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Tc(this);
              this.__shady_native_textContent = a;
            } else Tc(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));

            break;

          default:
            this.nodeValue = a;
        }
      },

      insertBefore: function (a, b) {
        if (this.ownerDocument !== Pc && a.ownerDocument !== Pc) return this.__shady_native_insertBefore(a, b), a;
        if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");

        if (b) {
          var c = A(b);
          c = c && c.parentNode;
          if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }

        if (b === a) return a;
        var d = [],
            e = (c = jb(this)) ? c.host.localName : Nc(this),
            f = a.__shady_parentNode;

        if (f) {
          var g = Nc(a);

          f.__shady_removeChild(a, !!c || !jb(a));
        }

        f = !0;
        var h = (!Qc || void 0 === a.__noInsertionPoint) && !Mc(a, e),
            k = c && !a.__noInsertionPoint && (!Qc || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
        if (k || h) h && (g = g || Nc(a)), Oc(a, function (a) {
          k && "slot" === a.localName && d.push(a);

          if (h) {
            var b = g;
            Kc() && (b && Lc(a, b), (b = Kc()) && b.scopeNode(a, e));
          }
        });
        if ("slot" === this.localName || d.length) d.length && (c.J = c.J || [], c.m = c.m || [], c.w = c.w || {}, c.J.push.apply(c.J, d instanceof Array ? d : ja(ia(d)))), c && Xc(c);
        ib(this) && (Gc(a, this, b), c = A(this), kb(this) ? (Xc(c.root), f = !1) : c.root && (f = !1));
        f ? (c = C(this) ? this.host : this, b ? (b = Vc(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
        Wc(this, a);
        return a;
      },
      appendChild: function (a) {
        return this.__shady_insertBefore(a);
      },
      removeChild: function (a, b) {
        b = void 0 === b ? !1 : b;
        if (this.ownerDocument !== Pc) return this.__shady_native_removeChild(a);
        if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
        var c = jb(a),
            d = A(this);

        if (ib(this) && (Hc(a, this), kb(this))) {
          Xc(d.root);
          var e = !0;
        }

        if (Kc() && !b && c) {
          var f = Nc(a);
          Oc(a, function (a) {
            Lc(a, f);
          });
        }

        Uc(a);

        if (c) {
          var g = this && "slot" === this.localName;
          g && (e = !0);
          ((b = Yc(c, a)) || g) && Xc(c);
        }

        e || (e = C(this) ? this.host : this, (!d.root && "slot" !== a.localName || e === a.__shady_native_parentNode) && e.__shady_native_removeChild(a));
        Wc(this, null, a);
        return a;
      },
      replaceChild: function (a, b) {
        this.__shady_insertBefore(a, b);

        this.__shady_removeChild(b);

        return a;
      },
      cloneNode: function (a) {
        if ("template" == this.localName) return this.__shady_native_cloneNode(a);

        var b = this.__shady_native_cloneNode(!1);

        if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
          a = this.__shady_childNodes;

          for (var c = 0, d; c < a.length; c++) d = a[c].__shady_cloneNode(!0), b.__shady_appendChild(d);
        }

        return b;
      },
      getRootNode: function (a) {
        if (this && this.nodeType) {
          var b = z(this),
              c = b.Y;
          void 0 === c && (C(this) ? (c = this, b.Y = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.Y = c)));
          return c;
        }
      },
      contains: function (a) {
        return tb(this, a);
      }
    });

    function $c(a, b, c) {
      var d = [];
      ad(a.__shady_childNodes, b, c, d);
      return d;
    }

    function ad(a, b, c, d) {
      for (var e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
        var h;

        if (h = g.nodeType === Node.ELEMENT_NODE) {
          h = g;
          var k = b,
              m = c,
              n = d,
              p = k(h);
          p && n.push(h);
          m && m(p) ? h = p : (ad(h.__shady_childNodes, k, m, n), h = void 0);
        }

        if (h) break;
      }
    }

    var bd = E({
      get firstElementChild() {
        var a = A(this);

        if (a && void 0 !== a.firstChild) {
          for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;

          return a;
        }

        return this.__shady_native_firstElementChild;
      },

      get lastElementChild() {
        var a = A(this);

        if (a && void 0 !== a.lastChild) {
          for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;

          return a;
        }

        return this.__shady_native_lastElementChild;
      },

      get children() {
        return ib(this) ? ub(Array.prototype.filter.call(this.__shady_childNodes, function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        })) : this.__shady_native_children;
      },

      get childElementCount() {
        return this.__shady_children.length;
      }

    }),
        cd = E({
      querySelector: function (a) {
        return $c(this, function (b) {
          return nb.call(b, a);
        }, function (a) {
          return !!a;
        })[0] || null;
      },
      querySelectorAll: function (a, b) {
        if (b) {
          b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));

          var c = this.__shady_getRootNode();

          return b.filter(function (a) {
            return a.__shady_getRootNode() == c;
          });
        }

        return $c(this, function (b) {
          return nb.call(b, a);
        });
      }
    }),
        dd = B.Aa ? Object.assign({}, bd) : bd;
    Object.assign(bd, cd);
    var ed = E({
      getElementById: function (a) {
        return "" === a ? null : $c(this, function (b) {
          return b.id == a;
        }, function (a) {
          return !!a;
        })[0] || null;
      }
    });
    var fd = E({
      get activeElement() {
        var a = B.G ? document.__shady_native_activeElement : document.activeElement;
        if (!a || !a.nodeType) return null;
        var b = !!C(this);
        if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;

        for (b = jb(a); b && b !== this;) a = b.host, b = jb(a);

        return this === document ? b ? null : a : b === this ? a : null;
      }

    });
    var gd = document.implementation.createHTMLDocument("inert"),
        hd = E({
      get innerHTML() {
        return ib(this) ? Nb("template" === this.localName ? this.content : this, function (a) {
          return a.__shady_childNodes;
        }) : this.__shady_native_innerHTML;
      },

      set innerHTML(a) {
        if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
          Tc(this);
          var b = this.localName || "div";
          b = this.namespaceURI && this.namespaceURI !== gd.namespaceURI ? gd.createElementNS(this.namespaceURI, b) : gd.createElement(b);

          for (B.G ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
        }
      }

    });
    var id = E({
      addEventListener: function (a, b, c) {
        "object" !== typeof c && (c = {
          capture: !!c
        });
        c.oa = this;

        this.host.__shady_addEventListener(a, b, c);
      },
      removeEventListener: function (a, b, c) {
        "object" !== typeof c && (c = {
          capture: !!c
        });
        c.oa = this;

        this.host.__shady_removeEventListener(a, b, c);
      }
    });

    function jd(a, b) {
      D(a, id, b);
      D(a, fd, b);
      D(a, hd, b);
      D(a, bd, b);
      B.X && !b ? (D(a, Zc, b), D(a, ed, b)) : B.G || (D(a, Zb), D(a, Yb));
    }
    var kd = {},
        ld = B.deferConnectionCallbacks && "loading" === document.readyState,
        md;

    function nd(a) {
      var b = [];

      do b.unshift(a); while (a = a.__shady_parentNode);

      return b;
    }

    function od(a, b, c) {
      if (a !== kd) throw new TypeError("Illegal constructor");
      this.Ja = "ShadyRoot";
      this.host = b;
      this.mode = c && c.mode;
      Ic(b);
      a = z(b);
      a.root = this;
      a.Ba = "closed" !== this.mode ? this : null;
      a = z(this);
      a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
      a.childNodes = [];
      this.a = this.R = !1;
      this.J = this.w = this.m = null;
      if (B.preferPerformance) for (; a = b.__shady_native_firstChild;) b.__shady_native_removeChild(a);else Xc(this);
    }

    function Xc(a) {
      a.R || (a.R = !0, xb(function () {
        var b = pd(a);
        b && b._renderRoot();
      }));
    }

    function pd(a) {
      for (var b; a;) {
        a.R && (b = a);

        a: {
          var c = a;
          a = c.host.__shady_getRootNode();

          if (C(a)) {
            c = c.host.__shady_childNodes;

            for (var d = 0, e; d < c.length; d++) if (e = c[d], "slot" == e.localName) break a;
          }

          a = void 0;
        }
      }

      return b;
    }

    od.prototype.ca = function () {
      var a = pd(this);
      a && a.R && a._renderRoot();
    };

    od.prototype._renderRoot = function () {
      var a = ld;
      ld = !0;
      this.R = !1;

      if (this.m) {
        qd(this);

        for (var b = 0, c; b < this.m.length; b++) {
          c = this.m[b];
          var d = A(c),
              e = d.assignedNodes;
          d.assignedNodes = [];
          d.O = [];
          if (d.pa = e) for (d = 0; d < e.length; d++) {
            var f = A(e[d]);
            f.da = f.assignedSlot;
            f.assignedSlot === c && (f.assignedSlot = null);
          }
        }

        for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) rd(this, b);

        for (b = 0; b < this.m.length; b++) {
          c = this.m[b];
          e = A(c);
          if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) rd(this, d, c);
          (d = (d = A(c.__shady_parentNode)) && d.root) && (lb(d) || d.R) && d._renderRoot();
          sd(this, e.O, e.assignedNodes);

          if (d = e.pa) {
            for (f = 0; f < d.length; f++) A(d[f]).da = null;

            e.pa = null;
            d.length > e.assignedNodes.length && (e.ga = !0);
          }

          e.ga && (e.ga = !1, td(this, c));
        }

        c = this.m;
        b = [];

        for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = A(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);

        for (c = 0; c < b.length; c++) {
          f = b[c];
          e = f === this ? this.host : f;
          d = [];
          f = f.__shady_childNodes;

          for (var g = 0; g < f.length; g++) {
            var h = f[g];

            if ("slot" == h.localName) {
              h = A(h).O;

              for (var k = 0; k < h.length; k++) d.push(h[k]);
            } else d.push(h);
          }

          f = Array.prototype.slice.call(e.__shady_native_childNodes);
          g = Dc(d, d.length, f, f.length);
          k = h = 0;

          for (var m = void 0; h < g.length && (m = g[h]); h++) {
            for (var n = 0, p = void 0; n < m.Z.length && (p = m.Z[n]); n++) p.__shady_native_parentNode === e && e.__shady_native_removeChild(p), f.splice(m.index + k, 1);

            k -= m.ea;
          }

          k = 0;

          for (m = void 0; k < g.length && (m = g[k]); k++) for (h = f[m.index], n = m.index; n < m.index + m.ea; n++) p = d[n], e.__shady_native_insertBefore(p, h), f.splice(n, 0, p);
        }
      }

      if (!B.preferPerformance && !this.a) for (b = this.host.__shady_childNodes, c = 0, e = b.length; c < e; c++) d = b[c], f = A(d), d.__shady_native_parentNode !== this.host || "slot" !== d.localName && f.assignedSlot || this.host.__shady_native_removeChild(d);
      this.a = !0;
      ld = a;
      md && md();
    };

    function rd(a, b, c) {
      var d = z(b),
          e = d.da;
      d.da = null;
      c || (c = (a = a.w[b.__shady_slot || "__catchall"]) && a[0]);
      c ? (z(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
      e !== d.assignedSlot && d.assignedSlot && (z(d.assignedSlot).ga = !0);
    }

    function sd(a, b, c) {
      for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
        var f = A(e).assignedNodes;
        f && f.length && sd(a, b, f);
      } else b.push(c[d]);
    }

    function td(a, b) {
      b.__shady_native_dispatchEvent(new Event("slotchange"));

      b = A(b);
      b.assignedSlot && td(a, b.assignedSlot);
    }

    function qd(a) {
      if (a.J && a.J.length) {
        for (var b = a.J, c, d = 0; d < b.length; d++) {
          var e = b[d];
          Ic(e);
          Ic(e.__shady_parentNode);
          var f = ud(e);
          a.w[f] ? (c = c || {}, c[f] = !0, a.w[f].push(e)) : a.w[f] = [e];
          a.m.push(e);
        }

        if (c) for (var g in c) a.w[g] = vd(a.w[g]);
        a.J = [];
      }
    }

    function ud(a) {
      var b = a.name || a.getAttribute("name") || "__catchall";
      return a.Ha = b;
    }

    function vd(a) {
      return a.sort(function (a, c) {
        a = nd(a);

        for (var b = nd(c), e = 0; e < a.length; e++) {
          c = a[e];
          var f = b[e];
          if (c !== f) return a = Array.from(c.__shady_parentNode.__shady_childNodes), a.indexOf(c) - a.indexOf(f);
        }
      });
    }

    function Yc(a, b) {
      if (a.m) {
        qd(a);
        var c = a.w,
            d;

        for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
          var g = e[f];

          if (tb(b, g)) {
            e.splice(f, 1);
            var h = a.m.indexOf(g);
            0 <= h && a.m.splice(h, 1);
            f--;
            g = A(g);
            if (h = g.O) for (var k = 0; k < h.length; k++) {
              var m = h[k],
                  n = m.__shady_native_parentNode;
              n && n.__shady_native_removeChild(m);
            }
            g.O = [];
            g.assignedNodes = [];
            h = !0;
          }
        }

        return h;
      }
    }

    function lb(a) {
      qd(a);
      return !(!a.m || !a.m.length);
    }

    (function (a) {
      a.__proto__ = DocumentFragment.prototype;
      jd(a, "__shady_");
      jd(a);
      Object.defineProperties(a, {
        nodeType: {
          value: Node.DOCUMENT_FRAGMENT_NODE,
          configurable: !0
        },
        nodeName: {
          value: "#document-fragment",
          configurable: !0
        },
        nodeValue: {
          value: null,
          configurable: !0
        }
      });
      ["localName", "namespaceURI", "prefix"].forEach(function (b) {
        Object.defineProperty(a, b, {
          value: void 0,
          configurable: !0
        });
      });
      ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
        Object.defineProperty(a, b, {
          get: function () {
            return this.host[b];
          },
          configurable: !0
        });
      });
    })(od.prototype);

    if (window.customElements && B.ra && !B.preferPerformance) {
      var wd = new Map();

      md = function () {
        var a = [];
        wd.forEach(function (b, c) {
          a.push([c, b]);
        });
        wd.clear();

        for (var b = 0; b < a.length; b++) {
          var c = a[b][0];
          a[b][1] ? c.Fa() : c.Ga();
        }
      };

      ld && document.addEventListener("readystatechange", function () {
        ld = !1;
        md();
      }, {
        once: !0
      });

      var xd = function (a, b, c) {
        var d = 0,
            e = "__isConnected" + d++;
        if (b || c) a.prototype.connectedCallback = a.prototype.Fa = function () {
          ld ? wd.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
        }, a.prototype.disconnectedCallback = a.prototype.Ga = function () {
          ld ? this.isConnected || wd.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
        };
        return a;
      },
          define = window.customElements.define;

      Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
        value: function (a, b) {
          var c = b.prototype.connectedCallback,
              d = b.prototype.disconnectedCallback;
          define.call(window.customElements, a, xd(b, c, d));
          b.prototype.connectedCallback = c;
          b.prototype.disconnectedCallback = d;
        }
      });
    }

    function yd(a) {
      this.node = a;
    }

    r = yd.prototype;

    r.addEventListener = function (a, b, c) {
      return this.node.__shady_addEventListener(a, b, c);
    };

    r.removeEventListener = function (a, b, c) {
      return this.node.__shady_removeEventListener(a, b, c);
    };

    r.appendChild = function (a) {
      return this.node.__shady_appendChild(a);
    };

    r.insertBefore = function (a, b) {
      return this.node.__shady_insertBefore(a, b);
    };

    r.removeChild = function (a) {
      return this.node.__shady_removeChild(a);
    };

    r.replaceChild = function (a, b) {
      return this.node.__shady_replaceChild(a, b);
    };

    r.cloneNode = function (a) {
      return this.node.__shady_cloneNode(a);
    };

    r.getRootNode = function (a) {
      return this.node.__shady_getRootNode(a);
    };

    r.contains = function (a) {
      return this.node.__shady_contains(a);
    };

    r.dispatchEvent = function (a) {
      return this.node.__shady_dispatchEvent(a);
    };

    r.setAttribute = function (a, b) {
      this.node.__shady_setAttribute(a, b);
    };

    r.getAttribute = function (a) {
      return this.node.__shady_native_getAttribute(a);
    };

    r.hasAttribute = function (a) {
      return this.node.__shady_native_hasAttribute(a);
    };

    r.removeAttribute = function (a) {
      this.node.__shady_removeAttribute(a);
    };

    r.attachShadow = function (a) {
      return this.node.__shady_attachShadow(a);
    };

    r.focus = function () {
      this.node.__shady_native_focus();
    };

    r.blur = function () {
      this.node.__shady_blur();
    };

    r.importNode = function (a, b) {
      if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
    };

    r.getElementById = function (a) {
      if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
    };

    r.querySelector = function (a) {
      return this.node.__shady_querySelector(a);
    };

    r.querySelectorAll = function (a, b) {
      return this.node.__shady_querySelectorAll(a, b);
    };

    r.assignedNodes = function (a) {
      if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
    };

    t.Object.defineProperties(yd.prototype, {
      activeElement: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          if (C(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
        }
      },
      _activeElement: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.activeElement;
        }
      },
      host: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          if (C(this.node)) return this.node.host;
        }
      },
      parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_parentNode;
        }
      },
      firstChild: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_firstChild;
        }
      },
      lastChild: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_lastChild;
        }
      },
      nextSibling: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_nextSibling;
        }
      },
      previousSibling: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_previousSibling;
        }
      },
      childNodes: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_childNodes;
        }
      },
      parentElement: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_parentElement;
        }
      },
      firstElementChild: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_firstElementChild;
        }
      },
      lastElementChild: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_lastElementChild;
        }
      },
      nextElementSibling: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_nextElementSibling;
        }
      },
      previousElementSibling: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_previousElementSibling;
        }
      },
      children: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_children;
        }
      },
      childElementCount: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_childElementCount;
        }
      },
      shadowRoot: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_shadowRoot;
        }
      },
      assignedSlot: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_assignedSlot;
        }
      },
      isConnected: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_isConnected;
        }
      },
      innerHTML: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_innerHTML;
        },
        set: function (a) {
          this.node.__shady_innerHTML = a;
        }
      },
      textContent: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_textContent;
        },
        set: function (a) {
          this.node.__shady_textContent = a;
        }
      },
      slot: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return this.node.__shady_slot;
        },
        set: function (a) {
          this.node.__shady_slot = a;
        }
      }
    });
    Bc.forEach(function (a) {
      Object.defineProperty(yd.prototype, a, {
        get: function () {
          return this.node["__shady_" + a];
        },
        set: function (b) {
          this.node["__shady_" + a] = b;
        },
        configurable: !0
      });
    });
    var zd = new WeakMap();

    function Ad(a) {
      if (C(a) || a instanceof yd) return a;
      var b = zd.get(a);
      b || (b = new yd(a), zd.set(a, b));
      return b;
    }
    var Bd = E({
      dispatchEvent: function (a) {
        Bb();
        return this.__shady_native_dispatchEvent(a);
      },
      addEventListener: sc,
      removeEventListener: uc
    });
    var Cd = E({
      get assignedSlot() {
        var a = this.__shady_parentNode;
        (a = a && a.__shady_shadowRoot) && a.ca();
        return (a = A(this)) && a.assignedSlot || null;
      }

    });
    var Dd = window.document;

    function Ed(a, b) {
      if ("slot" === b) a = a.__shady_parentNode, kb(a) && Xc(A(a).root);else if ("slot" === a.localName && "name" === b && (b = jb(a))) {
        if (b.m) {
          qd(b);
          var c = a.Ha,
              d = ud(a);

          if (d !== c) {
            c = b.w[c];
            var e = c.indexOf(a);
            0 <= e && c.splice(e, 1);
            c = b.w[d] || (b.w[d] = []);
            c.push(a);
            1 < c.length && (b.w[d] = vd(c));
          }
        }

        Xc(b);
      }
    }

    var Fd = E({
      get previousElementSibling() {
        var a = A(this);

        if (a && void 0 !== a.previousSibling) {
          for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;

          return a;
        }

        return this.__shady_native_previousElementSibling;
      },

      get nextElementSibling() {
        var a = A(this);

        if (a && void 0 !== a.nextSibling) {
          for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;

          return a;
        }

        return this.__shady_native_nextElementSibling;
      },

      get slot() {
        return this.getAttribute("slot");
      },

      set slot(a) {
        this.__shady_setAttribute("slot", a);
      },

      get shadowRoot() {
        var a = A(this);
        return a && a.Ba || null;
      },

      get className() {
        return this.getAttribute("class") || "";
      },

      set className(a) {
        this.__shady_setAttribute("class", a);
      },

      setAttribute: function (a, b) {
        if (this.ownerDocument !== Dd) this.__shady_native_setAttribute(a, b);else {
          var c;
          (c = Kc()) && "class" === a ? (c.setElementClass(this, b), c = !0) : c = !1;
          c || (this.__shady_native_setAttribute(a, b), Ed(this, a));
        }
      },
      removeAttribute: function (a) {
        this.__shady_native_removeAttribute(a);

        Ed(this, a);
      },
      attachShadow: function (a) {
        if (!this) throw "Must provide a host.";
        if (!a) throw "Not enough arguments.";
        return new od(kd, this, a);
      }
    });
    var Gd = E({
      blur: function () {
        var a = A(this);
        (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
      }
    });
    Bc.forEach(function (a) {
      Gd[a] = {
        set: function (b) {
          var c = z(this),
              d = a.substring(2);
          c.ba[a] && this.removeEventListener(d, c.ba[a]);

          this.__shady_addEventListener(d, b);

          c.ba[a] = b;
        },
        get: function () {
          var b = A(this);
          return b && b.ba[a];
        },
        configurable: !0
      };
    });
    var Hd = E({
      assignedNodes: function (a) {
        if ("slot" === this.localName) {
          var b = this.__shady_getRootNode();

          b && C(b) && b.ca();
          return (b = A(this)) ? (a && a.flatten ? b.O : b.assignedNodes) || [] : [];
        }
      }
    });
    var Id = window.document,
        Jd = E({
      importNode: function (a, b) {
        if (a.ownerDocument !== Id || "template" === a.localName) return this.__shady_native_importNode(a, b);

        var c = this.__shady_native_importNode(a, !1);

        if (b) {
          a = a.__shady_childNodes;
          b = 0;

          for (var d; b < a.length; b++) d = this.__shady_importNode(a[b], !0), c.__shady_appendChild(d);
        }

        return c;
      }
    });
    var Kd = E({
      addEventListener: sc.bind(window),
      removeEventListener: uc.bind(window)
    });
    var Ld = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Ld.parentElement = Zc.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Ld.contains = Zc.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Ld.children = bd.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Ld.innerHTML = hd.innerHTML);
    var Md = {
      EventTarget: [Bd],
      Node: [Zc, window.EventTarget ? null : Bd],
      Text: [Cd],
      Element: [Fd, bd, Cd, !B.G || "innerHTML" in Element.prototype ? hd : null, window.HTMLSlotElement ? null : Hd],
      HTMLElement: [Gd, Ld],
      HTMLSlotElement: [Hd],
      DocumentFragment: [dd, ed],
      Document: [Jd, dd, ed, fd],
      Window: [Kd]
    },
        Nd = B.G ? null : ["innerHTML", "textContent"];

    function Od(a) {
      var b = a ? null : Nd,
          c = {},
          d;

      for (d in Md) c.ka = window[d] && window[d].prototype, Md[d].forEach(function (c) {
        return function (d) {
          return c.ka && d && D(c.ka, d, a, b);
        };
      }(c)), c = {
        ka: c.ka
      };
    }

    if (B.ra) {
      var ShadyDOM = {
        inUse: B.ra,
        patch: function (a) {
          dc(a);
          cc(a);
          return a;
        },
        isShadyRoot: C,
        enqueue: xb,
        flush: Bb,
        settings: B,
        filterMutations: Gb,
        observeChildren: Eb,
        unobserveChildren: Fb,
        deferConnectionCallbacks: B.deferConnectionCallbacks,
        preferPerformance: B.preferPerformance,
        handlesDynamicScoping: !0,
        wrap: B.X ? Ad : function (a) {
          return a;
        },
        Wrapper: yd,
        composedPath: kc,
        noPatch: B.X,
        nativeMethods: Pb,
        nativeTree: Qb
      };
      window.ShadyDOM = ShadyDOM;
      Xb();
      Od("__shady_");
      Object.defineProperty(document, "_activeElement", fd.activeElement);
      D(Window.prototype, Kd, "__shady_");
      B.X || (Od(), Ac());
      vc();
      window.Event = xc;
      window.CustomEvent = yc;
      window.MouseEvent = zc;
      window.ShadowRoot = od;
    }
    var Pd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

    function Qd(a) {
      var b = Pd.has(a);
      a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
      return !b && a;
    }

    function J(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;

      for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);

      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }

    function Rd(a, b) {
      for (; b && b !== a && !b.nextSibling;) b = b.parentNode;

      return b && b !== a ? b.nextSibling : null;
    }

    function Sd(a, b, c) {
      c = void 0 === c ? new Set() : c;

      for (var d = a; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;
          b(e);
          var f = e.localName;

          if ("link" === f && "import" === e.getAttribute("rel")) {
            d = e.import;
            if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) Sd(d, b, c);
            d = Rd(a, e);
            continue;
          } else if ("template" === f) {
            d = Rd(a, e);
            continue;
          }

          if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) Sd(e, b, c);
        }

        d = d.firstChild ? d.firstChild : Rd(a, d);
      }
    }

    function K(a, b, c) {
      a[b] = c;
    }

    function Td() {
      this.a = new Map();
      this.v = new Map();
      this.f = [];
      this.c = !1;
    }

    function Ud(a, b, c) {
      a.a.set(b, c);
      a.v.set(c.constructorFunction, c);
    }

    function Vd(a, b) {
      a.c = !0;
      a.f.push(b);
    }

    function Wd(a, b) {
      a.c && Sd(b, function (b) {
        return a.b(b);
      });
    }

    Td.prototype.b = function (a) {
      if (this.c && !a.__CE_patched) {
        a.__CE_patched = !0;

        for (var b = 0; b < this.f.length; b++) this.f[b](a);
      }
    };

    function L(a, b) {
      var c = [];
      Sd(b, function (a) {
        return c.push(a);
      });

      for (b = 0; b < c.length; b++) {
        var d = c[b];
        1 === d.__CE_state ? a.connectedCallback(d) : Xd(a, d);
      }
    }

    function M(a, b) {
      var c = [];
      Sd(b, function (a) {
        return c.push(a);
      });

      for (b = 0; b < c.length; b++) {
        var d = c[b];
        1 === d.__CE_state && a.disconnectedCallback(d);
      }
    }

    function N(a, b, c) {
      c = void 0 === c ? {} : c;

      var d = c.gb || new Set(),
          e = c.la || function (b) {
        return Xd(a, b);
      },
          f = [];

      Sd(b, function (b) {
        if ("link" === b.localName && "import" === b.getAttribute("rel")) {
          var c = b.import;
          c instanceof Node && (c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0);
          c && "complete" === c.readyState ? c.__CE_documentLoadHandled = !0 : b.addEventListener("load", function () {
            var c = b.import;

            if (!c.__CE_documentLoadHandled) {
              c.__CE_documentLoadHandled = !0;
              var f = new Set(d);
              f.delete(c);
              N(a, c, {
                gb: f,
                la: e
              });
            }
          });
        } else f.push(b);
      }, d);
      if (a.c) for (b = 0; b < f.length; b++) a.b(f[b]);

      for (b = 0; b < f.length; b++) e(f[b]);
    }

    function Xd(a, b) {
      if (void 0 === b.__CE_state) {
        var c = b.ownerDocument;
        if (c.defaultView || c.__CE_isImportDocument && c.__CE_hasRegistry) if (c = a.a.get(b.localName)) {
          c.constructionStack.push(b);
          var d = c.constructorFunction;

          try {
            try {
              if (new d() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              c.constructionStack.pop();
            }
          } catch (g) {
            throw b.__CE_state = 2, g;
          }

          b.__CE_state = 1;
          b.__CE_definition = c;
          if (c.attributeChangedCallback) for (c = c.observedAttributes, d = 0; d < c.length; d++) {
            var e = c[d],
                f = b.getAttribute(e);
            null !== f && a.attributeChangedCallback(b, e, null, f, null);
          }
          J(b) && a.connectedCallback(b);
        }
      }
    }

    Td.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      b.connectedCallback && b.connectedCallback.call(a);
    };

    Td.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;
      b.disconnectedCallback && b.disconnectedCallback.call(a);
    };

    Td.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition;
      f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
    };

    function Yd(a) {
      var b = document;
      this.b = a;
      this.a = b;
      this.P = void 0;
      N(this.b, this.a);
      "loading" === this.a.readyState && (this.P = new MutationObserver(this.c.bind(this)), this.P.observe(this.a, {
        childList: !0,
        subtree: !0
      }));
    }

    function Zd(a) {
      a.P && a.P.disconnect();
    }

    Yd.prototype.c = function (a) {
      var b = this.a.readyState;
      "interactive" !== b && "complete" !== b || Zd(this);

      for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) N(this.b, c[d]);
    };

    function $d() {
      var a = this;
      this.a = this.B = void 0;
      this.b = new Promise(function (b) {
        a.a = b;
        a.B && b(a.B);
      });
    }

    $d.prototype.resolve = function (a) {
      if (this.B) throw Error("Already resolved.");
      this.B = a;
      this.a && this.a(a);
    };

    function O(a) {
      this.c = !1;
      this.a = a;
      this.H = new Map();

      this.f = function (a) {
        return a();
      };

      this.b = !1;
      this.v = [];
      this.ha = new Yd(a);
    }

    r = O.prototype;

    r.define = function (a, b) {
      var c = this;
      if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!Qd(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
      if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
      if (this.c) throw Error("A custom element is already being defined.");
      this.c = !0;

      try {
        var d = function (a) {
          var b = e[a];
          if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
          return b;
        },
            e = b.prototype;

        if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var f = d("connectedCallback");
        var g = d("disconnectedCallback");
        var h = d("adoptedCallback");
        var k = d("attributeChangedCallback");
        var m = b.observedAttributes || [];
      } catch (n) {
        return;
      } finally {
        this.c = !1;
      }

      b = {
        localName: a,
        constructorFunction: b,
        connectedCallback: f,
        disconnectedCallback: g,
        adoptedCallback: h,
        attributeChangedCallback: k,
        observedAttributes: m,
        constructionStack: []
      };
      Ud(this.a, a, b);
      this.v.push(b);
      this.b || (this.b = !0, this.f(function () {
        return c.ca();
      }));
    };

    r.la = function (a) {
      N(this.a, a);
    };

    r.ca = function () {
      var a = this;

      if (!1 !== this.b) {
        this.b = !1;

        for (var b = this.v, c = [], d = new Map(), e = 0; e < b.length; e++) d.set(b[e].localName, []);

        N(this.a, document, {
          la: function (b) {
            if (void 0 === b.__CE_state) {
              var e = b.localName,
                  f = d.get(e);
              f ? f.push(b) : a.a.a.get(e) && c.push(b);
            }
          }
        });

        for (e = 0; e < c.length; e++) Xd(this.a, c[e]);

        for (; 0 < b.length;) {
          var f = b.shift();
          e = f.localName;
          f = d.get(f.localName);

          for (var g = 0; g < f.length; g++) Xd(this.a, f[g]);

          (e = this.H.get(e)) && e.resolve(void 0);
        }
      }
    };

    r.get = function (a) {
      if (a = this.a.a.get(a)) return a.constructorFunction;
    };

    r.Da = function (a) {
      if (!Qd(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
      var b = this.H.get(a);
      if (b) return b.b;
      b = new $d();
      this.H.set(a, b);
      this.a.a.get(a) && !this.v.some(function (b) {
        return b.localName === a;
      }) && b.resolve(void 0);
      return b.b;
    };

    r.Ya = function (a) {
      Zd(this.ha);
      var b = this.f;

      this.f = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };

    window.CustomElementRegistry = O;
    O.prototype.define = O.prototype.define;
    O.prototype.upgrade = O.prototype.la;
    O.prototype.get = O.prototype.get;
    O.prototype.whenDefined = O.prototype.Da;
    O.prototype.polyfillWrapFlushCallback = O.prototype.Ya;
    var ae = window.Document.prototype.createElement,
        be = window.Document.prototype.createElementNS,
        ce = window.Document.prototype.importNode,
        de = window.Document.prototype.prepend,
        ee = window.Document.prototype.append,
        fe = window.DocumentFragment.prototype.prepend,
        ge = window.DocumentFragment.prototype.append,
        he = window.Node.prototype.cloneNode,
        ie = window.Node.prototype.appendChild,
        je = window.Node.prototype.insertBefore,
        ke = window.Node.prototype.removeChild,
        le = window.Node.prototype.replaceChild,
        me = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        ne = window.Element.prototype.attachShadow,
        oe = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        pe = window.Element.prototype.getAttribute,
        qe = window.Element.prototype.setAttribute,
        re = window.Element.prototype.removeAttribute,
        se = window.Element.prototype.getAttributeNS,
        te = window.Element.prototype.setAttributeNS,
        ue = window.Element.prototype.removeAttributeNS,
        ve = window.Element.prototype.insertAdjacentElement,
        we = window.Element.prototype.insertAdjacentHTML,
        xe = window.Element.prototype.prepend,
        ye = window.Element.prototype.append,
        ze = window.Element.prototype.before,
        Ae = window.Element.prototype.after,
        Be = window.Element.prototype.replaceWith,
        Ce = window.Element.prototype.remove,
        De = window.HTMLElement,
        Ee = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        Fe = window.HTMLElement.prototype.insertAdjacentElement,
        Ge = window.HTMLElement.prototype.insertAdjacentHTML;
    var He = new function () {}();

    function Ie() {
      var a = Je;

      window.HTMLElement = function () {
        function b() {
          var b = this.constructor,
              d = a.v.get(b);
          if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
          var e = d.constructionStack;
          if (0 === e.length) return e = ae.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.b(e), e;
          d = e.length - 1;
          var f = e[d];
          if (f === He) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          e[d] = He;
          Object.setPrototypeOf(f, b.prototype);
          a.b(f);
          return f;
        }

        b.prototype = De.prototype;
        Object.defineProperty(b.prototype, "constructor", {
          writable: !0,
          configurable: !0,
          enumerable: !1,
          value: b
        });
        return b;
      }();
    }

    function Ke(a, b, c) {
      function d(b) {
        return function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];

          e = [];

          for (var f = [], m = 0; m < d.length; m++) {
            var n = d[m];
            n instanceof Element && J(n) && f.push(n);
            if (n instanceof DocumentFragment) for (n = n.firstChild; n; n = n.nextSibling) e.push(n);else e.push(n);
          }

          b.apply(this, d);

          for (d = 0; d < f.length; d++) M(a, f[d]);

          if (J(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && L(a, f);
        };
      }

      void 0 !== c.ja && (b.prepend = d(c.ja));
      void 0 !== c.append && (b.append = d(c.append));
    }

    function Le() {
      var a = Je;
      K(Document.prototype, "createElement", function (b) {
        if (this.__CE_hasRegistry) {
          var c = a.a.get(b);
          if (c) return new c.constructorFunction();
        }

        b = ae.call(this, b);
        a.b(b);
        return b;
      });
      K(Document.prototype, "importNode", function (b, c) {
        b = ce.call(this, b, !!c);
        this.__CE_hasRegistry ? N(a, b) : Wd(a, b);
        return b;
      });
      K(Document.prototype, "createElementNS", function (b, c) {
        if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
          var d = a.a.get(c);
          if (d) return new d.constructorFunction();
        }

        b = be.call(this, b, c);
        a.b(b);
        return b;
      });
      Ke(a, Document.prototype, {
        ja: de,
        append: ee
      });
    }

    function Me() {
      function a(a, d) {
        Object.defineProperty(a, "textContent", {
          enumerable: d.enumerable,
          configurable: !0,
          get: d.get,
          set: function (a) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, a);else {
              var c = void 0;

              if (this.firstChild) {
                var e = this.childNodes,
                    h = e.length;

                if (0 < h && J(this)) {
                  c = Array(h);

                  for (var k = 0; k < h; k++) c[k] = e[k];
                }
              }

              d.set.call(this, a);
              if (c) for (a = 0; a < c.length; a++) M(b, c[a]);
            }
          }
        });
      }

      var b = Je;
      K(Node.prototype, "insertBefore", function (a, d) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);
          a = je.call(this, a, d);
          if (J(this)) for (d = 0; d < c.length; d++) L(b, c[d]);
          return a;
        }

        c = J(a);
        d = je.call(this, a, d);
        c && M(b, a);
        J(this) && L(b, a);
        return d;
      });
      K(Node.prototype, "appendChild", function (a) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);
          a = ie.call(this, a);
          if (J(this)) for (var e = 0; e < c.length; e++) L(b, c[e]);
          return a;
        }

        c = J(a);
        e = ie.call(this, a);
        c && M(b, a);
        J(this) && L(b, a);
        return e;
      });
      K(Node.prototype, "cloneNode", function (a) {
        a = he.call(this, !!a);
        this.ownerDocument.__CE_hasRegistry ? N(b, a) : Wd(b, a);
        return a;
      });
      K(Node.prototype, "removeChild", function (a) {
        var c = J(a),
            e = ke.call(this, a);
        c && M(b, a);
        return e;
      });
      K(Node.prototype, "replaceChild", function (a, d) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);
          a = le.call(this, a, d);
          if (J(this)) for (M(b, d), d = 0; d < c.length; d++) L(b, c[d]);
          return a;
        }

        c = J(a);
        var f = le.call(this, a, d),
            g = J(this);
        g && M(b, d);
        c && M(b, a);
        g && L(b, a);
        return f;
      });
      me && me.get ? a(Node.prototype, me) : Vd(b, function (b) {
        a(b, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);

            return a.join("");
          },
          set: function (a) {
            for (; this.firstChild;) ke.call(this, this.firstChild);

            ie.call(this, document.createTextNode(a));
          }
        });
      });
    }

    function Ne(a) {
      function b(b) {
        return function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];

          e = [];

          for (var h = [], k = 0; k < d.length; k++) {
            var m = d[k];
            m instanceof Element && J(m) && h.push(m);
            if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m);else e.push(m);
          }

          b.apply(this, d);

          for (d = 0; d < h.length; d++) M(a, h[d]);

          if (J(this)) for (d = 0; d < e.length; d++) h = e[d], h instanceof Element && L(a, h);
        };
      }

      var c = Element.prototype;
      void 0 !== ze && (c.before = b(ze));
      void 0 !== ze && (c.after = b(Ae));
      void 0 !== Be && K(c, "replaceWith", function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];

        d = [];

        for (var g = [], h = 0; h < c.length; h++) {
          var k = c[h];
          k instanceof Element && J(k) && g.push(k);
          if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) d.push(k);else d.push(k);
        }

        h = J(this);
        Be.apply(this, c);

        for (c = 0; c < g.length; c++) M(a, g[c]);

        if (h) for (M(a, this), c = 0; c < d.length; c++) g = d[c], g instanceof Element && L(a, g);
      });
      void 0 !== Ce && K(c, "remove", function () {
        var b = J(this);
        Ce.call(this);
        b && M(a, this);
      });
    }

    function Oe() {
      function a(a, b) {
        Object.defineProperty(a, "innerHTML", {
          enumerable: b.enumerable,
          configurable: !0,
          get: b.get,
          set: function (a) {
            var c = this,
                e = void 0;
            J(this) && (e = [], Sd(this, function (a) {
              a !== c && e.push(a);
            }));
            b.set.call(this, a);
            if (e) for (var f = 0; f < e.length; f++) {
              var g = e[f];
              1 === g.__CE_state && d.disconnectedCallback(g);
            }
            this.ownerDocument.__CE_hasRegistry ? N(d, this) : Wd(d, this);
            return a;
          }
        });
      }

      function b(a, b) {
        K(a, "insertAdjacentElement", function (a, c) {
          var e = J(c);
          a = b.call(this, a, c);
          e && M(d, c);
          J(a) && L(d, c);
          return a;
        });
      }

      function c(a, b) {
        function c(a, b) {
          for (var c = []; a !== b; a = a.nextSibling) c.push(a);

          for (b = 0; b < c.length; b++) N(d, c[b]);
        }

        K(a, "insertAdjacentHTML", function (a, d) {
          a = a.toLowerCase();

          if ("beforebegin" === a) {
            var e = this.previousSibling;
            b.call(this, a, d);
            c(e || this.parentNode.firstChild, this);
          } else if ("afterbegin" === a) e = this.firstChild, b.call(this, a, d), c(this.firstChild, e);else if ("beforeend" === a) e = this.lastChild, b.call(this, a, d), c(e || this.firstChild, null);else if ("afterend" === a) e = this.nextSibling, b.call(this, a, d), c(this.nextSibling, e);else throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        });
      }

      var d = Je;
      ne && K(Element.prototype, "attachShadow", function (a) {
        return this.__CE_shadowRoot = a = ne.call(this, a);
      });
      oe && oe.get ? a(Element.prototype, oe) : Ee && Ee.get ? a(HTMLElement.prototype, Ee) : Vd(d, function (b) {
        a(b, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return he.call(this, !0).innerHTML;
          },
          set: function (a) {
            var b = "template" === this.localName,
                c = b ? this.content : this,
                d = be.call(document, this.namespaceURI, this.localName);

            for (d.innerHTML = a; 0 < c.childNodes.length;) ke.call(c, c.childNodes[0]);

            for (a = b ? d.content : d; 0 < a.childNodes.length;) ie.call(c, a.childNodes[0]);
          }
        });
      });
      K(Element.prototype, "setAttribute", function (a, b) {
        if (1 !== this.__CE_state) return qe.call(this, a, b);
        var c = pe.call(this, a);
        qe.call(this, a, b);
        b = pe.call(this, a);
        d.attributeChangedCallback(this, a, c, b, null);
      });
      K(Element.prototype, "setAttributeNS", function (a, b, c) {
        if (1 !== this.__CE_state) return te.call(this, a, b, c);
        var e = se.call(this, a, b);
        te.call(this, a, b, c);
        c = se.call(this, a, b);
        d.attributeChangedCallback(this, b, e, c, a);
      });
      K(Element.prototype, "removeAttribute", function (a) {
        if (1 !== this.__CE_state) return re.call(this, a);
        var b = pe.call(this, a);
        re.call(this, a);
        null !== b && d.attributeChangedCallback(this, a, b, null, null);
      });
      K(Element.prototype, "removeAttributeNS", function (a, b) {
        if (1 !== this.__CE_state) return ue.call(this, a, b);
        var c = se.call(this, a, b);
        ue.call(this, a, b);
        var e = se.call(this, a, b);
        c !== e && d.attributeChangedCallback(this, b, c, e, a);
      });
      Fe ? b(HTMLElement.prototype, Fe) : ve ? b(Element.prototype, ve) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
      Ge ? c(HTMLElement.prototype, Ge) : we ? c(Element.prototype, we) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
      Ke(d, Element.prototype, {
        ja: xe,
        append: ye
      });
      Ne(d);
    }
    var Pe = window.customElements;

    if (!Pe || Pe.forcePolyfill || "function" != typeof Pe.define || "function" != typeof Pe.get) {
      var Je = new Td();
      Ie();
      Le();
      Ke(Je, DocumentFragment.prototype, {
        ja: fe,
        append: ge
      });
      Me();
      Oe();
      document.__CE_hasRegistry = !0;
      var customElements = new O(Je);
      Object.defineProperty(window, "customElements", {
        configurable: !0,
        enumerable: !0,
        value: customElements
      });
    }

    function Qe() {
      this.end = this.start = 0;
      this.rules = this.parent = this.previous = null;
      this.cssText = this.parsedCssText = "";
      this.atRule = !1;
      this.type = 0;
      this.parsedSelector = this.selector = this.keyframesName = "";
    }

    function Re(a) {
      a = a.replace(Se, "").replace(Te, "");
      var b = Ue,
          c = a,
          d = new Qe();
      d.start = 0;
      d.end = c.length;

      for (var e = d, f = 0, g = c.length; f < g; f++) if ("{" === c[f]) {
        e.rules || (e.rules = []);
        var h = e,
            k = h.rules[h.rules.length - 1] || null;
        e = new Qe();
        e.start = f + 1;
        e.parent = h;
        e.previous = k;
        h.rules.push(e);
      } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);

      return b(d, a);
    }

    function Ue(a, b) {
      var c = b.substring(a.start, a.end - 1);
      a.parsedCssText = a.cssText = c.trim();
      a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Ve(c), c = c.replace(We, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Xe : c.match(Ye) && (a.type = Ze, a.keyframesName = a.selector.split(We).pop()) : a.type = 0 === c.indexOf("--") ? $e : af);
      if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Ue(f, b);
      return a;
    }

    function Ve(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
        a = c;

        for (c = 6 - a.length; c--;) a = "0" + a;

        return "\\" + a;
      });
    }

    function bf(a, b, c) {
      c = void 0 === c ? "" : c;
      var d = "";

      if (a.cssText || a.rules) {
        var e = a.rules,
            f;
        if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));

        if (f) {
          f = 0;

          for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = bf(h, b, d);
        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(cf, "").replace(df, ""), b = b.replace(ef, "").replace(ff, "")), (d = b.trim()) && (d = "  " + d + "\n");
      }

      d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
      return c;
    }

    var af = 1,
        Ze = 7,
        Xe = 4,
        $e = 1E3,
        Se = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        Te = /@import[^;]*;/gim,
        cf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        df = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        ef = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        ff = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        Ye = /^@[^\s]*keyframes/,
        We = /\s+/g;
    var P = !(window.ShadyDOM && window.ShadyDOM.inUse),
        gf;

    function hf(a) {
      gf = a && a.shimcssproperties ? !1 : P || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }

    var lf;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (lf = window.ShadyCSS.cssBuild);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? gf = window.ShadyCSS.nativeCss : window.ShadyCSS ? (hf(window.ShadyCSS), window.ShadyCSS = void 0) : hf(window.WebComponents && window.WebComponents.flags);
    var R = gf,
        mf = lf;
    var nf = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        of = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        pf = /(--[\w-]+)\s*([:,;)]|$)/gi,
        qf = /(animation\s*:)|(animation-name\s*:)/,
        rf = /@media\s(.*)/,
        sf = /\{[^}]*\}/g;
    var tf = new Set();

    function uf(a, b) {
      if (!a) return "";
      "string" === typeof a && (a = Re(a));
      b && vf(a, b);
      return bf(a, R);
    }

    function wf(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = Re(a.textContent));
      return a.__cssRules || null;
    }

    function xf(a) {
      return !!a.parent && a.parent.type === Ze;
    }

    function vf(a, b, c, d) {
      if (a) {
        var e = !1,
            f = a.type;

        if (d && f === Xe) {
          var g = a.selector.match(rf);
          g && (window.matchMedia(g[1]).matches || (e = !0));
        }

        f === af ? b(a) : c && f === Ze ? c(a) : f === $e && (e = !0);
        if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) vf(g, b, c, d);
      }
    }

    function yf(a, b, c, d) {
      var e = document.createElement("style");
      b && e.setAttribute("scope", b);
      e.textContent = a;
      zf(e, c, d);
      return e;
    }

    var Af = null;

    function Bf(a) {
      a = document.createComment(" Shady DOM styles for " + a + " ");
      var b = document.head;
      b.insertBefore(a, (Af ? Af.nextSibling : null) || b.firstChild);
      return Af = a;
    }

    function zf(a, b, c) {
      b = b || document.head;
      b.insertBefore(a, c && c.nextSibling || b.firstChild);
      Af ? a.compareDocumentPosition(Af) === Node.DOCUMENT_POSITION_PRECEDING && (Af = a) : Af = a;
    }

    function Cf(a, b) {
      for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;

      return -1;
    }

    function Df(a, b) {
      var c = a.indexOf("var(");
      if (-1 === c) return b(a, "", "", "");
      var d = Cf(a, c + 3),
          e = a.substring(c + 4, d);
      c = a.substring(0, c);
      a = Df(a.substring(d + 1), b);
      d = e.indexOf(",");
      return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
    }

    function Ef(a, b) {
      P ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }

    var Ff = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
      return a;
    };

    function Gf(a) {
      var b = a.localName,
          c = "";
      b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
      return {
        is: b,
        $: c
      };
    }

    function Hf(a) {
      for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
        var e = Cf(a, d);
        c += a.slice(d, e + 1);
        d = e;
      } else "," === a[d] ? (b.push(c), c = "") : c += a[d];

      c && b.push(c);
      return b;
    }

    function If(a) {
      if (void 0 !== mf) return mf;

      if (void 0 === a.__cssBuild) {
        var b = a.getAttribute("css-build");
        if (b) a.__cssBuild = b;else {
          a: {
            b = "template" === a.localName ? a.content.firstChild : a.firstChild;

            if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
              b = b[1];
              break a;
            }

            b = "";
          }

          if ("" !== b) {
            var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
            c.parentNode.removeChild(c);
          }

          a.__cssBuild = b;
        }
      }

      return a.__cssBuild || "";
    }

    function Jf(a) {
      a = void 0 === a ? "" : a;
      return "" !== a && R ? P ? "shadow" === a : "shady" === a : !1;
    }

    function Kf() {}

    function Lf(a, b) {
      Mf(T, a, function (a) {
        Nf(a, b || "");
      });
    }

    function Mf(a, b, c) {
      b.nodeType === Node.ELEMENT_NODE && c(b);
      var d;
      "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
      if (d) for (b = 0; b < d.length; b++) Mf(a, d[b], c);
    }

    function Nf(a, b, c) {
      if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
        var d = a.getAttribute("class");
        c ? d && (b = d.replace("style-scope", "").replace(b, ""), Ef(a, b)) : Ef(a, (d ? d + " " : "") + "style-scope " + b);
      }
    }

    function Of(a, b, c) {
      Mf(T, a, function (a) {
        Nf(a, b, !0);
        Nf(a, c);
      });
    }

    function Pf(a, b) {
      Mf(T, a, function (a) {
        Nf(a, b || "", !0);
      });
    }

    function Qf(a, b, c, d, e) {
      var f = T;
      e = void 0 === e ? "" : e;
      "" === e && (P || "shady" === (void 0 === d ? "" : d) ? e = uf(b, c) : (a = Gf(a), e = Rf(f, b, a.is, a.$, c) + "\n\n"));
      return e.trim();
    }

    function Rf(a, b, c, d, e) {
      var f = Sf(c, d);
      c = c ? "." + c : "";
      return uf(b, function (b) {
        b.c || (b.selector = b.F = Tf(a, b, a.b, c, f), b.c = !0);
        e && e(b, c, f);
      });
    }

    function Sf(a, b) {
      return b ? "[is=" + a + "]" : a;
    }

    function Tf(a, b, c, d, e) {
      var f = Hf(b.selector);

      if (!xf(b)) {
        b = 0;

        for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
      }

      return f.filter(function (a) {
        return !!a;
      }).join(",");
    }

    function Uf(a) {
      return a.replace(Vf, function (a, c, d) {
        -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
        return ":" + c + "(" + d + ")";
      });
    }

    function Wf(a) {
      for (var b = [], c; c = a.match(Xf);) {
        var d = c.index,
            e = Cf(a, d);
        if (-1 === e) throw Error(c.input + " selector missing ')'");
        c = a.slice(d, e + 1);
        a = a.replace(c, "\ue000");
        b.push(c);
      }

      return {
        ua: a,
        matches: b
      };
    }

    function Yf(a, b) {
      var c = a.split("\ue000");
      return b.reduce(function (a, b, f) {
        return a + b + c[f + 1];
      }, c[0]);
    }

    Kf.prototype.b = function (a, b, c) {
      var d = !1;
      a = a.trim();
      var e = Vf.test(a);
      e && (a = a.replace(Vf, function (a, b, c) {
        return ":" + b + "(" + c.replace(/\s/g, "") + ")";
      }), a = Uf(a));
      var f = Xf.test(a);

      if (f) {
        var g = Wf(a);
        a = g.ua;
        g = g.matches;
      }

      a = a.replace(Zf, ":host $1");
      a = a.replace($f, function (a, e, f) {
        d || (a = ag(f, e, b, c), d = d || a.stop, e = a.Na, f = a.value);
        return e + f;
      });
      f && (a = Yf(a, g));
      e && (a = Uf(a));
      return a;
    };

    function ag(a, b, c, d) {
      var e = a.indexOf("::slotted");
      0 <= a.indexOf(":host") ? a = bg(a, d) : 0 !== e && (a = c ? cg(a, c) : a);
      c = !1;
      0 <= e && (b = "", c = !0);

      if (c) {
        var f = !0;
        c && (a = a.replace(dg, function (a, b) {
          return " > " + b;
        }));
      }

      a = a.replace(eg, function (a, b, c) {
        return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
      });
      return {
        value: a,
        Na: b,
        stop: f
      };
    }

    function cg(a, b) {
      a = a.split(/(\[.+?\])/);

      for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
        var e = a[d];
        if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
      }

      return c.join("");
    }

    function bg(a, b) {
      var c = a.match(fg);
      return (c = c && c[2].trim() || "") ? c[0].match(gg) ? a.replace(fg, function (a, c, f) {
        return b + f;
      }) : c.split(gg)[0] === b ? c : "should_not_match" : a.replace(":host", b);
    }

    function hg(a) {
      ":root" === a.selector && (a.selector = "html");
    }

    Kf.prototype.c = function (a) {
      return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : cg(a.trim(), ":not(.style-scope)");
    };

    t.Object.defineProperties(Kf.prototype, {
      a: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return "style-scope";
        }
      }
    });
    var Vf = /:(nth[-\w]+)\(([^)]+)\)/,
        $f = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
        gg = /[[.:#*]/,
        Zf = /^(::slotted)/,
        fg = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        dg = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        eg = /(.*):dir\((?:(ltr|rtl))\)/,
        Xf = /:(?:matches|any|-(?:webkit|moz)-any)/,
        T = new Kf();

    function ig(a, b, c, d, e) {
      this.N = a || null;
      this.b = b || null;
      this.sa = c || [];
      this.U = null;
      this.cssBuild = e || "";
      this.$ = d || "";
      this.a = this.I = this.M = null;
    }

    function U(a) {
      return a ? a.__styleInfo : null;
    }

    function jg(a, b) {
      return a.__styleInfo = b;
    }

    ig.prototype.c = function () {
      return this.N;
    };

    ig.prototype._getStyleRules = ig.prototype.c;

    function kg(a) {
      var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
      return b && b.call(this, a);
    }

    var lg = navigator.userAgent.match("Trident");

    function mg() {}

    function ng(a) {
      var b = {},
          c = [],
          d = 0;
      vf(a, function (a) {
        og(a);
        a.index = d++;
        a = a.C.cssText;

        for (var c; c = pf.exec(a);) {
          var e = c[1];
          ":" !== c[2] && (b[e] = !0);
        }
      }, function (a) {
        c.push(a);
      });
      a.b = c;
      a = [];

      for (var e in b) a.push(e);

      return a;
    }

    function og(a) {
      if (!a.C) {
        var b = {},
            c = {};
        pg(a, c) && (b.L = c, a.rules = null);
        b.cssText = a.parsedCssText.replace(sf, "").replace(nf, "");
        a.C = b;
      }
    }

    function pg(a, b) {
      var c = a.C;

      if (c) {
        if (c.L) return Object.assign(b, c.L), !0;
      } else {
        c = a.parsedCssText;

        for (var d; a = nf.exec(c);) {
          d = (a[2] || a[3]).trim();
          if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
          d = !0;
        }

        return d;
      }
    }

    function qg(a, b, c) {
      b && (b = 0 <= b.indexOf(";") ? rg(a, b, c) : Df(b, function (b, e, f, g) {
        if (!e) return b + g;
        (e = qg(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = qg(a, c[f] || f, c) || f;
        return b + (e || "") + g;
      }));
      return b && b.trim() || "";
    }

    function rg(a, b, c) {
      b = b.split(";");

      for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
        of.lastIndex = 0;
        if (f = of.exec(e)) e = qg(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
          var g = e.substring(f);
          g = g.trim();
          g = qg(a, g, c) || g;
          e = e.substring(0, f) + g;
        }
        b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
      }

      return b.join(";");
    }

    function sg(a, b) {
      var c = {},
          d = [];
      vf(a, function (a) {
        a.C || og(a);
        var e = a.F || a.parsedSelector;
        b && a.C.L && e && kg.call(b, e) && (pg(a, c), a = a.index, e = parseInt(a / 32, 10), d[e] = (d[e] || 0) | 1 << a % 32);
      }, null, !0);
      return {
        L: c,
        key: d
      };
    }

    function tg(a, b, c, d) {
      b.C || og(b);

      if (b.C.L) {
        var e = Gf(a);
        a = e.is;
        e = e.$;
        e = a ? Sf(a, e) : "html";
        var f = b.parsedSelector,
            g = ":host > *" === f || "html" === f,
            h = 0 === f.indexOf(":host") && !g;
        "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
        if (g || h) c = e, h && (b.F || (b.F = Tf(T, b, T.b, a ? "." + a : "", e)), c = b.F || e), d({
          ua: c,
          Va: h,
          ib: g
        });
      }
    }

    function ug(a, b, c) {
      var d = {},
          e = {};
      vf(b, function (b) {
        tg(a, b, c, function (c) {
          kg.call(a._element || a, c.ua) && (c.Va ? pg(b, d) : pg(b, e));
        });
      }, null, !0);
      return {
        $a: e,
        Ta: d
      };
    }

    function vg(a, b, c, d) {
      var e = Gf(b),
          f = Sf(e.is, e.$),
          g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
          h = U(b);
      e = h.N;
      h = h.cssBuild;
      var k = wg(e, d);
      return Qf(b, e, function (b) {
        var e = "";
        b.C || og(b);
        b.C.cssText && (e = rg(a, b.C.cssText, c));
        b.cssText = e;

        if (!P && !xf(b) && b.cssText) {
          var h = e = b.cssText;
          null == b.za && (b.za = qf.test(e));
          if (b.za) if (null == b.ia) {
            b.ia = [];

            for (var m in k) h = k[m], h = h(e), e !== h && (e = h, b.ia.push(m));
          } else {
            for (m = 0; m < b.ia.length; ++m) h = k[b.ia[m]], e = h(e);

            h = e;
          }
          b.cssText = h;
          b.F = b.F || b.selector;
          e = "." + d;
          m = Hf(b.F);
          h = 0;

          for (var u = m.length, x = void 0; h < u && (x = m[h]); h++) m[h] = x.match(g) ? x.replace(f, e) : e + " " + x;

          b.selector = m.join(",");
        }
      }, h);
    }

    function wg(a, b) {
      a = a.b;
      var c = {};
      if (!P && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        var f = e,
            g = b;
        f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
        f.a = f.keyframesName + "-" + g;
        f.F = f.F || f.selector;
        f.selector = f.F.replace(f.keyframesName, f.a);
        c[e.keyframesName] = xg(e);
      }
      return c;
    }

    function xg(a) {
      return function (b) {
        return b.replace(a.f, a.a);
      };
    }

    function yg(a, b) {
      var c = zg,
          d = wf(a);
      a.textContent = uf(d, function (a) {
        var d = a.cssText = a.parsedCssText;
        a.C && a.C.cssText && (d = d.replace(cf, "").replace(df, ""), a.cssText = rg(c, d, b));
      });
    }

    t.Object.defineProperties(mg.prototype, {
      a: {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return "x-scope";
        }
      }
    });
    var zg = new mg();
    var Ag = {},
        Bg = window.customElements;

    if (Bg && !P) {
      var Cg = Bg.define;

      Bg.define = function (a, b, c) {
        Ag[a] || (Ag[a] = Bf(a));
        Cg.call(Bg, a, b, c);
      };
    }

    function Dg() {
      this.cache = {};
    }

    Dg.prototype.store = function (a, b, c, d) {
      var e = this.cache[a] || [];
      e.push({
        L: b,
        styleElement: c,
        I: d
      });
      100 < e.length && e.shift();
      this.cache[a] = e;
    };

    Dg.prototype.fetch = function (a, b, c) {
      if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
        var e = a[d],
            f;

        a: {
          for (f = 0; f < c.length; f++) {
            var g = c[f];

            if (e.L[g] !== b[g]) {
              f = !1;
              break a;
            }
          }

          f = !0;
        }

        if (f) return e;
      }
    };

    function Eg() {}

    var Fg = new RegExp(T.a + "\\s*([^\\s]*)");

    function Gg(a) {
      return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Fg)) ? a[1] : "";
    }

    function Hg(a) {
      var b = Ff(a).getRootNode();
      return b === a || b === a.ownerDocument ? "" : (a = b.host) ? Gf(a).is : "";
    }

    function Ig(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];

          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode(),
                g = Gg(e);
            if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === If(e))) Pf(e, g);else if (f instanceof ShadowRoot) for (f = Hg(e), f !== g && Of(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + T.a + ")"), g = 0; g < e.length; g++) {
              f = e[g];
              var h = Hg(f);
              h && Nf(f, h);
            }
          }
        }
      }
    }

    if (!(P || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
      var Jg = new MutationObserver(Ig),
          Kg = function (a) {
        Jg.observe(a, {
          childList: !0,
          subtree: !0
        });
      };

      if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Kg(document);else {
        var Lg = function () {
          Kg(document.body);
        };

        window.HTMLImports ? window.HTMLImports.whenReady(Lg) : requestAnimationFrame(function () {
          if ("loading" === document.readyState) {
            var a = function () {
              Lg();
              document.removeEventListener("readystatechange", a);
            };

            document.addEventListener("readystatechange", a);
          } else Lg();
        });
      }

      Eg = function () {
        Ig(Jg.takeRecords());
      };
    }

    var Mg = Eg;
    var Ng = {};
    var Og = Promise.resolve();

    function Pg(a) {
      if (a = Ng[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }

    function Qg(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }

    function Rg(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;
      a._validating || (a._validating = !0, Og.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a._validating = !1;
      }));
    }
    var Sg = {},
        Tg = new Dg();

    function V() {
      this.H = {};
      this.c = document.documentElement;
      var a = new Qe();
      a.rules = [];
      this.f = jg(this.c, new ig(a));
      this.v = !1;
      this.b = this.a = null;
    }

    r = V.prototype;

    r.flush = function () {
      Mg();
    };

    r.Ra = function (a) {
      return wf(a);
    };

    r.eb = function (a) {
      return uf(a);
    };

    r.prepareTemplate = function (a, b, c) {
      this.prepareTemplateDom(a, b);
      this.prepareTemplateStyles(a, b, c);
    };

    r.prepareTemplateStyles = function (a, b, c) {
      if (!a._prepared) {
        P || Ag[b] || (Ag[b] = Bf(b));
        a._prepared = !0;
        a.name = b;
        a.extends = c;
        Ng[b] = a;
        var d = If(a),
            e = Jf(d);
        c = {
          is: b,
          extends: c
        };

        for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
          var k = g[h];

          if (k.hasAttribute("shady-unscoped")) {
            if (!P) {
              var m = k.textContent;
              tf.has(m) || (tf.add(m), m = k.cloneNode(!0), document.head.appendChild(m));
              k.parentNode.removeChild(k);
            }
          } else f.push(k.textContent), k.parentNode.removeChild(k);
        }

        f = f.join("").trim() + (Sg[b] || "");
        Ug(this);

        if (!e) {
          if (g = !d) g = of.test(f) || nf.test(f), of.lastIndex = 0, nf.lastIndex = 0;
          h = Re(f);
          g && R && this.a && this.a.transformRules(h, b);
          a._styleAst = h;
        }

        g = [];
        R || (g = ng(a._styleAst));
        if (!g.length || R) h = P ? a.content : null, b = Ag[b] || null, d = Qf(c, a._styleAst, null, d, e ? f : ""), d = d.length ? yf(d, c.is, h, b) : null, a._style = d;
        a.a = g;
      }
    };

    r.Za = function (a, b) {
      Sg[b] = a.join(" ");
    };

    r.prepareTemplateDom = function (a, b) {
      var c = If(a);
      P || "shady" === c || a._domPrepared || (a._domPrepared = !0, Lf(a.content, b));
    };

    function Vg(a) {
      var b = Gf(a),
          c = b.is;
      b = b.$;
      var d = Ag[c] || null,
          e = Ng[c];

      if (e) {
        c = e._styleAst;
        var f = e.a;
        e = If(e);
        b = new ig(c, d, f, b, e);
        jg(a, b);
        return b;
      }
    }

    function Wg(a) {
      !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
        a.Ca(b);
      }, a.b.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.b.enqueued || a.v) && a.flushCustomStyles();
        });
      });
    }

    function Ug(a) {
      !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = Pg);
      Wg(a);
    }

    r.flushCustomStyles = function () {
      Ug(this);

      if (this.b) {
        var a = this.b.processStyles();

        if (this.b.enqueued && !Jf(this.f.cssBuild)) {
          if (R) {
            if (!this.f.cssBuild) for (var b = 0; b < a.length; b++) {
              var c = this.b.getStyleForCustomStyle(a[b]);

              if (c && R && this.a) {
                var d = wf(c);
                Ug(this);
                this.a.transformRules(d);
                c.textContent = uf(d);
              }
            }
          } else {
            Xg(this, this.c, this.f);

            for (b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && yg(c, this.f.M);

            this.v && this.styleDocument();
          }

          this.b.enqueued = !1;
        }
      }
    };

    r.styleElement = function (a, b) {
      var c = U(a) || Vg(a);
      if (c) if (a !== this.c && (this.v = !0), b && (c.U = c.U || {}, Object.assign(c.U, b)), R) {
        b = Gf(a).is;

        if (c.U) {
          var d = c.U,
              e;

          for (e in d) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, d[e]);
        }

        if (!(!(e = Ng[b]) && a !== this.c || e && "" !== If(e)) && e && e._style && !Qg(e)) {
          if (Qg(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Ug(this), this.a && this.a.transformRules(e._styleAst, b), e._style.textContent = Qf(a, c.N), Rg(e);
          P && (b = a.shadowRoot) && (b = b.querySelector("style")) && (b.textContent = Qf(a, c.N));
          c.N = e._styleAst;
        }
      } else if (this.flush(), Xg(this, a, c), c.sa && c.sa.length) {
        b = Gf(a).is;
        var f = (e = Tg.fetch(b, c.M, c.sa)) ? e.styleElement : null;
        d = c.I;
        var g;
        (g = e && e.I) || (g = this.H[b] = (this.H[b] || 0) + 1, g = b + "-" + g);
        c.I = g;
        g = c.I;
        var h = zg;
        h = f ? f.textContent || "" : vg(h, a, c.M, g);
        var k = U(a),
            m = k.a;
        m && !P && m !== f && (m._useCount--, 0 >= m._useCount && m.parentNode && m.parentNode.removeChild(m));
        P ? k.a ? (k.a.textContent = h, f = k.a) : h && (f = yf(h, g, a.shadowRoot, k.b)) : f ? f.parentNode || (lg && -1 < h.indexOf("@media") && (f.textContent = h), zf(f, null, k.b)) : h && (f = yf(h, g, null, k.b));
        f && (f._useCount = f._useCount || 0, k.a != f && f._useCount++, k.a = f);
        g = f;
        P || (f = c.I, k = h = a.getAttribute("class") || "", d && (k = h.replace(new RegExp("\\s*x-scope\\s*" + d + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + f, h !== k && Ef(a, k));
        e || Tg.store(b, c.M, g, c.I);
      }
    };

    function Yg(a, b) {
      return (b = Ff(b).getRootNode().host) ? U(b) || Vg(b) ? b : Yg(a, b) : a.c;
    }

    function Xg(a, b, c) {
      var d = Yg(a, b),
          e = U(d),
          f = e.M;
      d === a.c || f || (Xg(a, d, e), f = e.M);
      a = Object.create(f || null);
      d = ug(b, c.N, c.cssBuild);
      b = sg(e.N, b).L;
      Object.assign(a, d.Ta, b, d.$a);
      b = c.U;

      for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;

      g = zg;
      b = Object.getOwnPropertyNames(a);

      for (e = 0; e < b.length; e++) d = b[e], a[d] = qg(g, a[d], a);

      c.M = a;
    }

    r.styleDocument = function (a) {
      this.styleSubtree(this.c, a);
    };

    r.styleSubtree = function (a, b) {
      var c = Ff(a),
          d = c.shadowRoot;
      (d || a === this.c) && this.styleElement(a, b);
      if (a = d && (d.children || d.childNodes)) for (c = 0; c < a.length; c++) this.styleSubtree(a[c]);else if (c = c.children || c.childNodes) for (a = 0; a < c.length; a++) this.styleSubtree(c[a]);
    };

    r.Ca = function (a) {
      var b = this,
          c = If(a);
      c !== this.f.cssBuild && (this.f.cssBuild = c);

      if (!Jf(c)) {
        var d = wf(a);
        vf(d, function (a) {
          if (P) hg(a);else {
            var d = T;
            a.selector = a.parsedSelector;
            hg(a);
            a.selector = a.F = Tf(d, a, d.c, void 0, void 0);
          }
          R && "" === c && (Ug(b), b.a && b.a.transformRule(a));
        });
        R ? a.textContent = uf(d) : this.f.N.rules.push(d);
      }
    };

    r.getComputedStyleValue = function (a, b) {
      var c;
      R || (c = (U(a) || U(Yg(this, a))).M[b]);
      return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
    };

    r.cb = function (a, b) {
      var c = Ff(a).getRootNode();
      b = b ? b.split(/\s/) : [];
      c = c.host && c.host.localName;

      if (!c) {
        var d = a.getAttribute("class");

        if (d) {
          d = d.split(/\s/);

          for (var e = 0; e < d.length; e++) if (d[e] === T.a) {
            c = d[e + 1];
            break;
          }
        }
      }

      c && b.push(T.a, c);
      R || (c = U(a)) && c.I && b.push(zg.a, c.I);
      Ef(a, b.join(" "));
    };

    r.La = function (a) {
      return U(a);
    };

    r.bb = function (a, b) {
      Nf(a, b);
    };

    r.fb = function (a, b) {
      Nf(a, b, !0);
    };

    r.ab = function (a) {
      return Hg(a);
    };

    r.Oa = function (a) {
      return Gg(a);
    };

    V.prototype.flush = V.prototype.flush;
    V.prototype.prepareTemplate = V.prototype.prepareTemplate;
    V.prototype.styleElement = V.prototype.styleElement;
    V.prototype.styleDocument = V.prototype.styleDocument;
    V.prototype.styleSubtree = V.prototype.styleSubtree;
    V.prototype.getComputedStyleValue = V.prototype.getComputedStyleValue;
    V.prototype.setElementClass = V.prototype.cb;
    V.prototype._styleInfoForNode = V.prototype.La;
    V.prototype.transformCustomStyleForDocument = V.prototype.Ca;
    V.prototype.getStyleAst = V.prototype.Ra;
    V.prototype.styleAstToString = V.prototype.eb;
    V.prototype.flushCustomStyles = V.prototype.flushCustomStyles;
    V.prototype.scopeNode = V.prototype.bb;
    V.prototype.unscopeNode = V.prototype.fb;
    V.prototype.scopeForNode = V.prototype.ab;
    V.prototype.currentScopeForNode = V.prototype.Oa;
    V.prototype.prepareAdoptedCssText = V.prototype.Za;
    Object.defineProperties(V.prototype, {
      nativeShadow: {
        get: function () {
          return P;
        }
      },
      nativeCss: {
        get: function () {
          return R;
        }
      }
    });
    var W = new V(),
        Zg,
        $g;
    window.ShadyCSS && (Zg = window.ShadyCSS.ApplyShim, $g = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
      ScopingShim: W,
      prepareTemplate: function (a, b, c) {
        W.flushCustomStyles();
        W.prepareTemplate(a, b, c);
      },
      prepareTemplateDom: function (a, b) {
        W.prepareTemplateDom(a, b);
      },
      prepareTemplateStyles: function (a, b, c) {
        W.flushCustomStyles();
        W.prepareTemplateStyles(a, b, c);
      },
      styleSubtree: function (a, b) {
        W.flushCustomStyles();
        W.styleSubtree(a, b);
      },
      styleElement: function (a) {
        W.flushCustomStyles();
        W.styleElement(a);
      },
      styleDocument: function (a) {
        W.flushCustomStyles();
        W.styleDocument(a);
      },
      flushCustomStyles: function () {
        W.flushCustomStyles();
      },
      getComputedStyleValue: function (a, b) {
        return W.getComputedStyleValue(a, b);
      },
      nativeCss: R,
      nativeShadow: P,
      cssBuild: mf
    };
    Zg && (window.ShadyCSS.ApplyShim = Zg);
    $g && (window.ShadyCSS.CustomStyleInterface = $g);
    Window.prototype.Qa = !1;

    (function (a) {
      function b(a) {
        "" == a && (f.call(this), this.i = !0);
        return a.toLowerCase();
      }

      function c(a) {
        var b = a.charCodeAt(0);
        return 32 < b && 127 > b && -1 == [34, 35, 60, 62, 63, 96].indexOf(b) ? a : encodeURIComponent(a);
      }

      function d(a) {
        var b = a.charCodeAt(0);
        return 32 < b && 127 > b && -1 == [34, 35, 60, 62, 96].indexOf(b) ? a : encodeURIComponent(a);
      }

      function e(a, e, g) {
        function h(a) {
        }

        var k = e || "scheme start",
            x = 0,
            q = "",
            u = !1,
            Q = !1;

        a: for (; (void 0 != a[x - 1] || 0 == x) && !this.i;) {
          var l = a[x];

          switch (k) {
            case "scheme start":
              if (l && p.test(l)) q += l.toLowerCase(), k = "scheme";else if (e) {
                break a;
              } else {
                q = "";
                k = "no scheme";
                continue;
              }
              break;

            case "scheme":
              if (l && G.test(l)) q += l.toLowerCase();else if (":" == l) {
                this.h = q;
                q = "";
                if (e) break a;
                void 0 !== m[this.h] && (this.D = !0);
                k = "file" == this.h ? "relative" : this.D && g && g.h == this.h ? "relative or authority" : this.D ? "authority first slash" : "scheme data";
              } else if (e) {
                break a;
              } else {
                q = "";
                x = 0;
                k = "no scheme";
                continue;
              }
              break;

            case "scheme data":
              "?" == l ? (this.s = "?", k = "query") : "#" == l ? (this.A = "#", k = "fragment") : void 0 != l && "\t" != l && "\n" != l && "\r" != l && (this.qa += c(l));
              break;

            case "no scheme":
              if (g && void 0 !== m[g.h]) {
                k = "relative";
                continue;
              } else f.call(this), this.i = !0;

              break;

            case "relative or authority":
              if ("/" == l && "/" == a[x + 1]) k = "authority ignore slashes";else {
                k = "relative";
                continue;
              }
              break;

            case "relative":
              this.D = !0;
              "file" != this.h && (this.h = g.h);

              if (void 0 == l) {
                this.j = g.j;
                this.o = g.o;
                this.l = g.l.slice();
                this.s = g.s;
                this.u = g.u;
                this.g = g.g;
                break a;
              } else if ("/" == l || "\\" == l) k = "relative slash";else if ("?" == l) this.j = g.j, this.o = g.o, this.l = g.l.slice(), this.s = "?", this.u = g.u, this.g = g.g, k = "query";else if ("#" == l) this.j = g.j, this.o = g.o, this.l = g.l.slice(), this.s = g.s, this.A = "#", this.u = g.u, this.g = g.g, k = "fragment";else {
                k = a[x + 1];
                var y = a[x + 2];
                if ("file" != this.h || !p.test(l) || ":" != k && "|" != k || void 0 != y && "/" != y && "\\" != y && "?" != y && "#" != y) this.j = g.j, this.o = g.o, this.u = g.u, this.g = g.g, this.l = g.l.slice(), this.l.pop();
                k = "relative path";
                continue;
              }

              break;

            case "relative slash":
              if ("/" == l || "\\" == l) k = "file" == this.h ? "file host" : "authority ignore slashes";else {
                "file" != this.h && (this.j = g.j, this.o = g.o, this.u = g.u, this.g = g.g);
                k = "relative path";
                continue;
              }
              break;

            case "authority first slash":
              if ("/" == l) k = "authority second slash";else {
                k = "authority ignore slashes";
                continue;
              }
              break;

            case "authority second slash":
              k = "authority ignore slashes";

              if ("/" != l) {
                continue;
              }

              break;

            case "authority ignore slashes":
              if ("/" != l && "\\" != l) {
                k = "authority";
                continue;
              }

              break;

            case "authority":
              if ("@" == l) {
                u && (q += "%40");
                u = !0;

                for (l = 0; l < q.length; l++) y = q[l], "\t" == y || "\n" == y || "\r" == y ? h("Invalid whitespace in authority.") : ":" == y && null === this.g ? this.g = "" : (y = c(y), null !== this.g ? this.g += y : this.u += y);

                q = "";
              } else if (void 0 == l || "/" == l || "\\" == l || "?" == l || "#" == l) {
                x -= q.length;
                q = "";
                k = "host";
                continue;
              } else q += l;

              break;

            case "file host":
              if (void 0 == l || "/" == l || "\\" == l || "?" == l || "#" == l) {
                2 != q.length || !p.test(q[0]) || ":" != q[1] && "|" != q[1] ? (0 != q.length && (this.j = b.call(this, q), q = ""), k = "relative path start") : k = "relative path";
                continue;
              } else "\t" == l || "\n" == l || "\r" == l ? h("Invalid whitespace in file host.") : q += l;

              break;

            case "host":
            case "hostname":
              if (":" != l || Q) {
                if (void 0 == l || "/" == l || "\\" == l || "?" == l || "#" == l) {
                  this.j = b.call(this, q);
                  q = "";
                  k = "relative path start";
                  if (e) break a;
                  continue;
                } else "\t" != l && "\n" != l && "\r" != l ? ("[" == l ? Q = !0 : "]" == l && (Q = !1), q += l) : h("Invalid code point in host/hostname: " + l);
              } else if (this.j = b.call(this, q), q = "", k = "port", "hostname" == e) break a;
              break;

            case "port":
              if (/[0-9]/.test(l)) q += l;else if (void 0 == l || "/" == l || "\\" == l || "?" == l || "#" == l || e) {
                "" != q && (q = parseInt(q, 10), q != m[this.h] && (this.o = q + ""), q = "");
                if (e) break a;
                k = "relative path start";
                continue;
              } else "\t" == l || "\n" == l || "\r" == l ? h("Invalid code point in port: " + l) : (f.call(this), this.i = !0);
              break;

            case "relative path start":
              k = "relative path";
              if ("/" != l && "\\" != l) continue;
              break;

            case "relative path":
              if (void 0 != l && "/" != l && "\\" != l && (e || "?" != l && "#" != l)) "\t" != l && "\n" != l && "\r" != l && (q += c(l));else {
                if (y = n[q.toLowerCase()]) q = y;
                ".." == q ? (this.l.pop(), "/" != l && "\\" != l && this.l.push("")) : "." == q && "/" != l && "\\" != l ? this.l.push("") : "." != q && ("file" == this.h && 0 == this.l.length && 2 == q.length && p.test(q[0]) && "|" == q[1] && (q = q[0] + ":"), this.l.push(q));
                q = "";
                "?" == l ? (this.s = "?", k = "query") : "#" == l && (this.A = "#", k = "fragment");
              }
              break;

            case "query":
              e || "#" != l ? void 0 != l && "\t" != l && "\n" != l && "\r" != l && (this.s += d(l)) : (this.A = "#", k = "fragment");
              break;

            case "fragment":
              void 0 != l && "\t" != l && "\n" != l && "\r" != l && (this.A += l);
          }

          x++;
        }
      }

      function f() {
        this.u = this.qa = this.h = "";
        this.g = null;
        this.o = this.j = "";
        this.l = [];
        this.A = this.s = "";
        this.D = this.i = !1;
      }

      function g(a, b) {
        void 0 === b || b instanceof g || (b = new g(String(b)));
        this.a = a;
        f.call(this);
        a = this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
        e.call(this, a, null, b);
      }

      var h = !1;
      if (!a.Qa) try {
        var k = new URL("b", "http://a");
        k.pathname = "c%20d";
        h = "http://a/c%20d" === k.href;
      } catch (x) {}

      if (!h) {
        var m = Object.create(null);
        m.ftp = 21;
        m.file = 0;
        m.gopher = 70;
        m.http = 80;
        m.https = 443;
        m.ws = 80;
        m.wss = 443;
        var n = Object.create(null);
        n["%2e"] = ".";
        n[".%2e"] = "..";
        n["%2e."] = "..";
        n["%2e%2e"] = "..";
        var p = /[a-zA-Z]/,
            G = /[a-zA-Z0-9\+\-\.]/;
        g.prototype = {
          toString: function () {
            return this.href;
          },

          get href() {
            if (this.i) return this.a;
            var a = "";
            if ("" != this.u || null != this.g) a = this.u + (null != this.g ? ":" + this.g : "") + "@";
            return this.protocol + (this.D ? "//" + a + this.host : "") + this.pathname + this.s + this.A;
          },

          set href(a) {
            f.call(this);
            e.call(this, a);
          },

          get protocol() {
            return this.h + ":";
          },

          set protocol(a) {
            this.i || e.call(this, a + ":", "scheme start");
          },

          get host() {
            return this.i ? "" : this.o ? this.j + ":" + this.o : this.j;
          },

          set host(a) {
            !this.i && this.D && e.call(this, a, "host");
          },

          get hostname() {
            return this.j;
          },

          set hostname(a) {
            !this.i && this.D && e.call(this, a, "hostname");
          },

          get port() {
            return this.o;
          },

          set port(a) {
            !this.i && this.D && e.call(this, a, "port");
          },

          get pathname() {
            return this.i ? "" : this.D ? "/" + this.l.join("/") : this.qa;
          },

          set pathname(a) {
            !this.i && this.D && (this.l = [], e.call(this, a, "relative path start"));
          },

          get search() {
            return this.i || !this.s || "?" == this.s ? "" : this.s;
          },

          set search(a) {
            !this.i && this.D && (this.s = "?", "?" == a[0] && (a = a.slice(1)), e.call(this, a, "query"));
          },

          get hash() {
            return this.i || !this.A || "#" == this.A ? "" : this.A;
          },

          set hash(a) {
            this.i || (a ? (this.A = "#", "#" == a[0] && (a = a.slice(1)), e.call(this, a, "fragment")) : this.A = "");
          },

          get origin() {
            var a;
            if (this.i || !this.h) return "";

            switch (this.h) {
              case "data":
              case "file":
              case "javascript":
              case "mailto":
                return "null";
            }

            return (a = this.host) ? this.h + "://" + a : "";
          }

        };
        var u = a.URL;
        u && (g.createObjectURL = function (a) {
          return u.createObjectURL.apply(u, arguments);
        }, g.revokeObjectURL = function (a) {
          u.revokeObjectURL(a);
        });
        a.URL = g;
      }
    })(window);

    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
      get: function () {
        var a = (this.ownerDocument || this).querySelector("base[href]");
        return a && a.href || window.location.href;
      },
      configurable: !0,
      enumerable: !0
    });
    var ah = document.createElement("style");
    ah.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var bh = document.querySelector("head");
    bh.insertBefore(ah, bh.firstChild);
    var ch = window.customElements,
        dh = !1,
        eh = null;
    ch.polyfillWrapFlushCallback && ch.polyfillWrapFlushCallback(function (a) {
      eh = a;
      dh && a();
    });

    function fh() {
      window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
      eh && eh();
      dh = !0;
      window.WebComponents.ready = !0;
      document.dispatchEvent(new CustomEvent("WebComponentsReady", {
        bubbles: !0
      }));
    }

    "complete" !== document.readyState ? (window.addEventListener("load", fh), window.addEventListener("DOMContentLoaded", function () {
      window.removeEventListener("load", fh);
      fh();
    })) : fh();
  }).call(window);

  function Lit() {}

  if (typeof window !== 'undefined') {
    window.Lit = Lit;
  }

  const isArray = Array.isArray;

  /**
   * 初始化组件 props 配置
   * @param {{}} userOptions 用户传入的组件配置
   * @param {{}} options 格式化后的组件配置
   */

  function initProps(userOptions, options) {
    /** 格式化后的 props 配置 */
    const props = options.props = {};
    /** 用户传入的 props 配置 */

    const userProps = userOptions.props;
    /** 用户传入的 props 配置是否是数组 */

    let propsIsArray = false; // 去除不合法参数

    if (userProps == null || !(propsIsArray = isArray(userProps))) {
      return;
    } // 格式化数组参数


    if (propsIsArray) {
      if (!userProps.length) return;

      for (let name of userProps) {
        props[name] = {};
      }
    }
  }

  /**
   * 初始化组件配置
   * @param {{}} userOptions 用户传入的组件配置
   */

  function initOptions(userOptions) {
    /** 格式化后的组件配置 */
    const options = {};
    initProps(userOptions, options);
    return options;
  }

  function each(obj, cb) {
    for (let name in obj) cb(name, obj[name]);
  }

  /**
   * 初始化当前组件 props 属性
   * @param {HTMLElement} root 
   * @param {{}} options 
   * @param {{}} target 
   */

  function initProps$1(root, options, target) {
    const props = options.props;
    const propsTarget = {};
    each(props, (name, options) => {
      let value = root.getAttribute(name);

      if (value !== null) {
        propsTarget[name] = value;
      } else {
        propsTarget[name] = undefined;
      }
    });
    target.$props = new Proxy(propsTarget, {});
  }

  /**
   * 初始化当前组件属性
   * @param {HTMLElement} root 组件根节点
   * @param {{}} options 组件配置
   */

  function init(root, options) {
    /** 当前组件对象 */
    const target = {};
    initProps$1(root, options, target);
    return new Proxy(target, {});
  }

  /**
   * 定义自定义标签
   * @param {string} name 标签名
   * @param {{}} options 组件配置
   */

  function define(name, options) {
    // 初始化组件配置
    options = initOptions(options); // 创建组件

    const LitElement = class Lit$$1 extends HTMLElement {
      constructor() {
        super();
        this.$lit = init(this, options); // this.$lit = new Proxy({}, {
        // });
        // this.$lit.$el = this.attachShadow({ mode: 'open' });
        // this.$lit.$root = this;
        // this.$lit.$data = {};
        // this.$lit.$props = {};
        // this.$lit.$methods = {};
        // this.$lit.$computed = {};
      }

      attributeChangedCallback(name, value, oldValue) {}

      connectedCallback() {
        console.log('connectedCallback');
      }

      disconnectedCallback() {
        console.log('disconnectedCallback');
      }

      adoptedCallback() {
        console.log('adoptedCallback');
      }

    }; // 注册组件

    customElements.define(name, LitElement);
  }
  Lit.define = define;

  return Lit;

}));
