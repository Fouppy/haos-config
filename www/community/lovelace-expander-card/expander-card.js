var Ai = Object.defineProperty;
var rr = (e) => {
  throw TypeError(e);
};
var Oi = (e, t, n) => t in e ? Ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var P = (e, t, n) => Oi(e, typeof t != "symbol" ? t + "" : t, n), Cn = (e, t, n) => t.has(e) || rr("Cannot " + n);
var c = (e, t, n) => (Cn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), A = (e, t, n) => t.has(e) ? rr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, i) => (Cn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), N = (e, t, n) => (Cn(e, t, "access private method"), n);
var mr;
typeof window < "u" && ((mr = window.__svelte ?? (window.__svelte = {})).v ?? (mr.v = /* @__PURE__ */ new Set())).add("5");
const qi = {
  icon: "",
  "arrow-color": "",
  "icon-rotate-degree": "",
  "header-color": "",
  "button-background": "",
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  "storage-id": "",
  "expander-card-id": "",
  "show-button-users": [],
  "start-expanded-users": [],
  "expander-card-background": "",
  "expander-card-background-expanded": "",
  "expander-card-display": "",
  gap: "",
  padding: "",
  "expanded-gap": "",
  "child-padding": "",
  "child-margin-top": "",
  "overlay-margin": "",
  "title-card-padding": "",
  style: ""
}, Ni = { icon: {} }, Ri = { text: {} }, ji = { text: { multiline: !0 } }, Mi = { boolean: {} }, Pi = { object: {} }, Ii = (e) => ({
  number: {
    unit_of_measurement: e
  }
}), zi = (e, t) => ({
  name: e,
  label: t,
  selector: Ni
}), B = (e, t) => ({
  name: e,
  label: t,
  selector: Ri
}), Di = (e, t) => ({
  name: e,
  label: t,
  selector: ji
}), kt = (e, t) => ({
  name: e,
  label: t,
  selector: Mi
}), Li = (e, t) => ({
  name: e,
  label: t,
  selector: Pi
}), ir = (e, t, n) => ({
  name: e,
  label: t,
  selector: Ii(n)
}), Fi = (e) => ({
  label: e,
  type: "constant"
}), Bi = [
  {
    type: "expandable",
    label: "Expander Card Settings",
    icon: "mdi:arrow-down-bold-box-outline",
    schema: [
      {
        ...B("title", "Title")
      },
      {
        ...zi("icon", "Icon")
      },
      {
        type: "expandable",
        label: "Expander control",
        icon: "mdi:cog-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...kt("expanded", "Start expanded")
              },
              {
                ...kt("animation", "Enable animation")
              },
              {
                ...ir("min-width-expanded", "Min width expanded", "px")
              },
              {
                ...ir("max-width-expanded", "Max width expanded", "px")
              },
              {
                ...B("storage-id", "Storage ID")
              },
              {
                ...B("expander-card-id", "Expander card ID")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Expander styling",
        icon: "mdi:palette-swatch",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...B("arrow-color", "Icon color")
              },
              {
                ...B("icon-rotate-degree", "Icon rotate degree")
              },
              {
                ...B("header-color", "Header color")
              },
              {
                ...B("button-background", "Button background color")
              },
              {
                ...B("expander-card-background", "Background")
              },
              {
                ...B("expander-card-background-expanded", "Background when expanded")
              },
              {
                ...B("expander-card-display", "Expander card display")
              },
              {
                ...kt("clear", "Clear border and background")
              },
              {
                ...B("gap", "Gap")
              },
              {
                ...B("padding", "Padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Card styling",
        icon: "mdi:palette-swatch-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...B("expanded-gap", "Card gap")
              },
              {
                ...B("child-padding", "Card padding")
              },
              {
                ...B("child-margin-top", "Card margin top")
              },
              {
                ...kt("clear-children", "Clear card border and background")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Title card",
        icon: "mdi:subtitles-outline",
        schema: [
          {
            ...Fi("Use YAML to specify a title card to replace the expander title")
          },
          {
            ...Li("title-card", "")
          },
          {
            type: "grid",
            schema: [
              {
                ...kt("title-card-clickable", "Make title card clickable to expand/collapse")
              },
              {
                ...kt("title-card-button-overlay", "Overlay expand button on title card")
              },
              {
                ...B("overlay-margin", "Overlay margin")
              },
              {
                ...B("title-card-padding", "Title card padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "User settings",
        icon: "mdi:account-multiple-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                name: "show-button-users",
                label: "Show button users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              },
              {
                name: "start-expanded-users",
                label: "Start expanded users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Advanced styling",
        icon: "mdi:brush-outline",
        schema: [
          {
            ...Di("style", "Custom CSS style")
          }
        ]
      }
    ]
  }
], Dt = window;
let en = Dt.cardHelpers;
const Hi = new Promise((e) => {
  en && e(), Dt.loadCardHelpers && Dt.loadCardHelpers().then((t) => {
    en = t, Dt.cardHelpers = en, e();
  });
});
async function Yi() {
  const e = document.querySelector("home-assistant"), t = e == null ? void 0 : e.hass;
  return t ? (await t.callWS({ type: "config/auth/list" })).filter((i) => !i.system_generated).map((i) => i.name) : void 0;
}
const Ui = async () => {
  const t = await (await Hi.then(() => en.createCardElement({ type: "vertical-stack", cards: [] }))).constructor.getConfigElement(), n = await Yi();
  return class extends t.constructor {
    constructor() {
      super(), this._computeLabelCallback = (r) => r.label ?? r.name ?? "", this._valueChanged = (r) => {
        const s = r.detail.value, o = Object.entries(qi);
        for (const [a, l] of o) {
          if (typeof l == "object" && Array.isArray(l) && Array.isArray(s[a])) {
            JSON.stringify(s[a]) === JSON.stringify(l) && delete s[a];
            continue;
          }
          s[a] === l && delete s[a];
        }
        this._config = s, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
      }, this._users = n;
    }
    // override setConfig to store config only and not assert stack editor config
    // we also upgrade any old config here if needed
    setConfig(r) {
      this._config = r;
    }
    // define _schema getter to return our own schema
    get _schema() {
      const s = JSON.stringify(Bi), o = this._users.map((f) => f.replace(/\\/g, "\\\\").replace(/"/g, '\\"')).join('","'), a = s.replace(/\[\[users\]\]/g, o);
      return JSON.parse(a);
    }
    // _schema setter does nothing as we want to use our own schema
    set _schema(r) {
    }
  };
}, Vi = (async () => {
  for (; customElements.get("home-assistant") === void 0; )
    await new Promise((e) => Dt.setTimeout(e, 100));
  if (!customElements.get("expander-card-editor")) {
    const e = await Ui();
    customElements.define("expander-card-editor", e);
  }
}), Wi = 1, Ji = 2, Gi = 16, Xi = 1, Ki = 2, yr = "[", pn = "[!", Bn = "]", gt = {}, Y = Symbol(), Zi = "http://www.w3.org/1999/xhtml", Qi = "http://www.w3.org/2000/svg", wr = !1;
var br = Array.isArray, es = Array.prototype.indexOf, Hn = Array.from, an = Object.keys, on = Object.defineProperty, At = Object.getOwnPropertyDescriptor, ts = Object.getOwnPropertyDescriptors, ns = Object.prototype, rs = Array.prototype, $r = Object.getPrototypeOf, sr = Object.isExtensible;
function is(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Er() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const X = 2, _n = 4, Yn = 8, Ye = 16, Ue = 32, rt = 64, gn = 128, ke = 512, V = 1024, ne = 2048, Ve = 4096, fe = 8192, Qe = 16384, mn = 32768, mt = 65536, ar = 1 << 17, xr = 1 << 18, bt = 1 << 19, ss = 1 << 20, Ht = 32768, An = 1 << 21, Un = 1 << 22, et = 1 << 23, tn = Symbol("$state"), as = Symbol("legacy props"), os = Symbol(""), Tt = new class extends Error {
  constructor() {
    super(...arguments);
    P(this, "name", "StaleReactionError");
    P(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), ls = 1, Vn = 3, $t = 8;
function fs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function cs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function us(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ds() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ps() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function _s() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ys() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ws() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let w = !1;
function le(e) {
  w = e;
}
let x;
function F(e) {
  if (e === null)
    throw Xt(), gt;
  return x = e;
}
function nt() {
  return F(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Se(x)
  );
}
function De(e) {
  if (w) {
    if (/* @__PURE__ */ Se(x) !== null)
      throw Xt(), gt;
    x = e;
  }
}
function bs(e = 1) {
  if (w) {
    for (var t = e, n = x; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Se(n);
    x = n;
  }
}
function ln(e = !0) {
  for (var t = 0, n = x; ; ) {
    if (n.nodeType === $t) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === Bn) {
        if (t === 0) return n;
        t -= 1;
      } else (i === yr || i === pn) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(n)
    );
    e && n.remove(), n = r;
  }
}
function kr(e) {
  if (!e || e.nodeType !== $t)
    throw Xt(), gt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Sr(e) {
  return e === this.v;
}
function $s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Cr(e) {
  return !$s(e, this.v);
}
let Es = !1, ce = null;
function Mt(e) {
  ce = e;
}
function Wn(e, t = !1, n) {
  ce = {
    p: ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Jn(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      Xr(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ce = t.p, e ?? /** @type {T} */
  {};
}
function Tr() {
  return !0;
}
let lt = [];
function Ar() {
  var e = lt;
  lt = [], is(e);
}
function yn(e) {
  if (lt.length === 0 && !Lt) {
    var t = lt;
    queueMicrotask(() => {
      t === lt && Ar();
    });
  }
  lt.push(e);
}
function xs() {
  for (; lt.length > 0; )
    Ar();
}
function Or(e) {
  var t = T;
  if (t === null)
    return S.f |= et, e;
  if ((t.f & mn) === 0) {
    if ((t.f & gn) === 0)
      throw e;
    t.b.error(e);
  } else
    Pt(e, t);
}
function Pt(e, t) {
  for (; t !== null; ) {
    if ((t.f & gn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const Zt = /* @__PURE__ */ new Set();
let R = null, I = null, Me = [], wn = null, On = !1, Lt = !1;
var qt, Nt, ct, ut, Vt, Rt, jt, U, qn, ot, qr, Nr;
const dn = class dn {
  constructor() {
    A(this, U);
    P(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    P(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    P(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    A(this, qt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Nt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    A(this, ct, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    A(this, ut, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, Vt, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    A(this, Rt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    A(this, jt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    P(this, "skipped_effects", /* @__PURE__ */ new Set());
    P(this, "is_fork", !1);
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Me = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      N(this, U, qn).call(this, r, n);
    this.is_fork || N(this, U, qr).call(this), c(this, ut) > 0 || this.is_fork ? (N(this, U, ot).call(this, n.effects), N(this, U, ot).call(this, n.render_effects), N(this, U, ot).call(this, n.block_effects)) : (R = null, or(n.render_effects), or(n.effects), (i = c(this, Vt)) == null || i.resolve()), I = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & et) === 0 && (this.current.set(t, t.v), I == null || I.set(t, t.v));
  }
  activate() {
    R = this, this.apply();
  }
  deactivate() {
    R === this && (R = null, I = null);
  }
  flush() {
    if (this.activate(), Me.length > 0) {
      if (Rr(), R !== null && R !== this)
        return;
    } else c(this, ct) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of c(this, Nt)) t(this);
    c(this, Nt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    y(this, ct, c(this, ct) + 1), t && y(this, ut, c(this, ut) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    y(this, ct, c(this, ct) - 1), t && y(this, ut, c(this, ut) - 1), this.revive();
  }
  revive() {
    for (const t of c(this, Rt))
      G(t, ne), yt(t);
    for (const t of c(this, jt))
      G(t, Ve), yt(t);
    y(this, Rt, []), y(this, jt, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    c(this, qt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    c(this, Nt).add(t);
  }
  settled() {
    return (c(this, Vt) ?? y(this, Vt, Er())).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new dn();
      Zt.add(R), Lt || dn.enqueue(() => {
        R === t && t.flush();
      });
    }
    return R;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    yn(t);
  }
  apply() {
  }
};
qt = new WeakMap(), Nt = new WeakMap(), ct = new WeakMap(), ut = new WeakMap(), Vt = new WeakMap(), Rt = new WeakMap(), jt = new WeakMap(), U = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
qn = function(t, n) {
  var u;
  t.f ^= V;
  for (var i = t.first; i !== null; ) {
    var r = i.f, s = (r & (Ue | rt)) !== 0, o = s && (r & V) !== 0, a = o || (r & fe) !== 0 || this.skipped_effects.has(i);
    if ((i.f & gn) !== 0 && ((u = i.b) != null && u.is_pending()) && (n = {
      parent: n,
      effect: i,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !a && i.fn !== null) {
      s ? i.f ^= V : (r & _n) !== 0 ? n.effects.push(i) : Kt(i) && ((i.f & Ye) !== 0 && n.block_effects.push(i), Ut(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var f = i.parent;
    for (i = i.next; i === null && f !== null; )
      f === n.effect && (N(this, U, ot).call(this, n.effects), N(this, U, ot).call(this, n.render_effects), N(this, U, ot).call(this, n.block_effects), n = /** @type {EffectTarget} */
      n.parent), i = f.next, f = f.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ot = function(t) {
  for (const n of t)
    ((n.f & ne) !== 0 ? c(this, Rt) : c(this, jt)).push(n), G(n, V);
}, qr = function() {
  if (c(this, ut) === 0) {
    for (const t of c(this, qt)) t();
    c(this, qt).clear();
  }
  c(this, ct) === 0 && N(this, U, Nr).call(this);
}, Nr = function() {
  var r;
  if (Zt.size > 1) {
    this.previous.clear();
    var t = I, n = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of Zt) {
      if (s === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [l, f] of this.current) {
        if (s.current.has(l))
          if (n && f !== s.current.get(l))
            s.current.set(l, f);
          else
            continue;
        o.push(l);
      }
      if (o.length === 0)
        continue;
      const a = [...s.current.keys()].filter((l) => !this.current.has(l));
      if (a.length > 0) {
        const l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (const u of o)
          jr(u, a, l, f);
        if (Me.length > 0) {
          R = s, s.apply();
          for (const u of Me)
            N(r = s, U, qn).call(r, u, i);
          Me = [], s.deactivate();
        }
      }
    }
    R = null, I = t;
  }
  this.committed = !0, Zt.delete(this);
};
let Pe = dn;
function oe(e) {
  var t = Lt;
  Lt = !0;
  try {
    for (var n; ; ) {
      if (xs(), Me.length === 0 && (R == null || R.flush(), Me.length === 0))
        return wn = null, /** @type {T} */
        n;
      Rr();
    }
  } finally {
    Lt = t;
  }
}
function Rr() {
  var e = pt;
  On = !0;
  try {
    var t = 0;
    for (cr(!0); Me.length > 0; ) {
      var n = Pe.ensure();
      if (t++ > 1e3) {
        var i, r;
        ks();
      }
      n.process(Me), tt.clear();
    }
  } finally {
    On = !1, cr(e), wn = null;
  }
}
function ks() {
  try {
    vs();
  } catch (e) {
    Pt(e, wn);
  }
}
let Ee = null;
function or(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (Qe | fe)) === 0 && Kt(i) && (Ee = /* @__PURE__ */ new Set(), Ut(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null && i.ac === null ? ti(i) : i.fn = null), (Ee == null ? void 0 : Ee.size) > 0)) {
        tt.clear();
        for (const r of Ee) {
          if ((r.f & (Qe | fe)) !== 0) continue;
          const s = [r];
          let o = r.parent;
          for (; o !== null; )
            Ee.has(o) && (Ee.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (Qe | fe)) === 0 && Ut(l);
          }
        }
        Ee.clear();
      }
    }
    Ee = null;
  }
}
function jr(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const s = r.f;
      (s & X) !== 0 ? jr(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (s & (Un | Ye)) !== 0 && (s & ne) === 0 && // we may have scheduled this one already
      Mr(r, t, i) && (G(r, ne), yt(
        /** @type {Effect} */
        r
      ));
    }
}
function Mr(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & X) !== 0 && Mr(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function yt(e) {
  for (var t = wn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (On && t === T && (n & Ye) !== 0 && (n & xr) === 0)
      return;
    if ((n & (rt | Ue)) !== 0) {
      if ((n & V) === 0) return;
      t.f ^= V;
    }
  }
  Me.push(t);
}
function Ss(e) {
  let t = 0, n = wt(0), i;
  return () => {
    $n() && (p(n), Xn(() => (t === 0 && (i = Qn(() => e(() => Ft(n)))), t += 1, () => {
      yn(() => {
        t -= 1, t === 0 && (i == null || i(), i = void 0, Ft(n));
      });
    })));
  };
}
var Cs = mt | bt | gn;
function Ts(e, t, n) {
  new As(e, t, n);
}
var ve, se, Wt, qe, dt, Ne, pe, te, Re, Fe, Xe, ht, Ke, vt, Ze, hn, z, Pr, Ir, Nn, nn, rn, Rn;
class As {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    A(this, z);
    /** @type {Boundary | null} */
    P(this, "parent");
    A(this, ve, !1);
    /** @type {TemplateNode} */
    A(this, se);
    /** @type {TemplateNode | null} */
    A(this, Wt, w ? x : null);
    /** @type {BoundaryProps} */
    A(this, qe);
    /** @type {((anchor: Node) => void)} */
    A(this, dt);
    /** @type {Effect} */
    A(this, Ne);
    /** @type {Effect | null} */
    A(this, pe, null);
    /** @type {Effect | null} */
    A(this, te, null);
    /** @type {Effect | null} */
    A(this, Re, null);
    /** @type {DocumentFragment | null} */
    A(this, Fe, null);
    /** @type {TemplateNode | null} */
    A(this, Xe, null);
    A(this, ht, 0);
    A(this, Ke, 0);
    A(this, vt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, Ze, null);
    A(this, hn, Ss(() => (y(this, Ze, wt(c(this, ht))), () => {
      y(this, Ze, null);
    })));
    y(this, se, t), y(this, qe, n), y(this, dt, i), this.parent = /** @type {Effect} */
    T.b, y(this, ve, !!c(this, qe).pending), y(this, Ne, En(() => {
      if (T.b = this, w) {
        const s = c(this, Wt);
        nt(), /** @type {Comment} */
        s.nodeType === $t && /** @type {Comment} */
        s.data === pn ? N(this, z, Ir).call(this) : N(this, z, Pr).call(this);
      } else {
        var r = N(this, z, Nn).call(this);
        try {
          y(this, pe, ge(() => i(r)));
        } catch (s) {
          this.error(s);
        }
        c(this, Ke) > 0 ? N(this, z, rn).call(this) : y(this, ve, !1);
      }
      return () => {
        var s;
        (s = c(this, Xe)) == null || s.remove();
      };
    }, Cs)), w && y(this, se, x);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, ve) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, qe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    N(this, z, Rn).call(this, t), y(this, ht, c(this, ht) + t), c(this, Ze) && cn(c(this, Ze), c(this, ht));
  }
  get_effect_pending() {
    return c(this, hn).call(this), p(
      /** @type {Source<number>} */
      c(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = c(this, qe).onerror;
    let i = c(this, qe).failed;
    if (c(this, vt) || !n && !i)
      throw t;
    c(this, pe) && (J(c(this, pe)), y(this, pe, null)), c(this, te) && (J(c(this, te)), y(this, te, null)), c(this, Re) && (J(c(this, Re)), y(this, Re, null)), w && (F(
      /** @type {TemplateNode} */
      c(this, Wt)
    ), bs(), F(ln()));
    var r = !1, s = !1;
    const o = () => {
      if (r) {
        ws();
        return;
      }
      r = !0, s && ys(), Pe.ensure(), y(this, ht, 0), c(this, Re) !== null && Ot(c(this, Re), () => {
        y(this, Re, null);
      }), y(this, ve, this.has_pending_snippet()), y(this, pe, N(this, z, nn).call(this, () => (y(this, vt, !1), ge(() => c(this, dt).call(this, c(this, se)))))), c(this, Ke) > 0 ? N(this, z, rn).call(this) : y(this, ve, !1);
    };
    var a = S;
    try {
      W(null), s = !0, n == null || n(t, o), s = !1;
    } catch (l) {
      Pt(l, c(this, Ne) && c(this, Ne).parent);
    } finally {
      W(a);
    }
    i && yn(() => {
      y(this, Re, N(this, z, nn).call(this, () => {
        Pe.ensure(), y(this, vt, !0);
        try {
          return ge(() => {
            i(
              c(this, se),
              () => t,
              () => o
            );
          });
        } catch (l) {
          return Pt(
            l,
            /** @type {Effect} */
            c(this, Ne).parent
          ), null;
        } finally {
          y(this, vt, !1);
        }
      }));
    });
  }
}
ve = new WeakMap(), se = new WeakMap(), Wt = new WeakMap(), qe = new WeakMap(), dt = new WeakMap(), Ne = new WeakMap(), pe = new WeakMap(), te = new WeakMap(), Re = new WeakMap(), Fe = new WeakMap(), Xe = new WeakMap(), ht = new WeakMap(), Ke = new WeakMap(), vt = new WeakMap(), Ze = new WeakMap(), hn = new WeakMap(), z = new WeakSet(), Pr = function() {
  try {
    y(this, pe, ge(() => c(this, dt).call(this, c(this, se))));
  } catch (t) {
    this.error(t);
  }
  y(this, ve, !1);
}, Ir = function() {
  const t = c(this, qe).pending;
  t && (y(this, te, ge(() => t(c(this, se)))), Pe.enqueue(() => {
    var n = N(this, z, Nn).call(this);
    y(this, pe, N(this, z, nn).call(this, () => (Pe.ensure(), ge(() => c(this, dt).call(this, n))))), c(this, Ke) > 0 ? N(this, z, rn).call(this) : (Ot(
      /** @type {Effect} */
      c(this, te),
      () => {
        y(this, te, null);
      }
    ), y(this, ve, !1));
  }));
}, Nn = function() {
  var t = c(this, se);
  return c(this, ve) && (y(this, Xe, ye()), c(this, se).before(c(this, Xe)), t = c(this, Xe)), t;
}, /**
 * @param {() => Effect | null} fn
 */
nn = function(t) {
  var n = T, i = S, r = ce;
  we(c(this, Ne)), W(c(this, Ne)), Mt(c(this, Ne).ctx);
  try {
    return t();
  } catch (s) {
    return Or(s), null;
  } finally {
    we(n), W(i), Mt(r);
  }
}, rn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    c(this, qe).pending
  );
  c(this, pe) !== null && (y(this, Fe, document.createDocumentFragment()), c(this, Fe).append(
    /** @type {TemplateNode} */
    c(this, Xe)
  ), ii(c(this, pe), c(this, Fe))), c(this, te) === null && y(this, te, ge(() => t(c(this, se))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Rn = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && N(n = this.parent, z, Rn).call(n, t);
    return;
  }
  y(this, Ke, c(this, Ke) + t), c(this, Ke) === 0 && (y(this, ve, !1), c(this, te) && Ot(c(this, te), () => {
    y(this, te, null);
  }), c(this, Fe) && (c(this, se).before(c(this, Fe)), y(this, Fe, null)));
};
function Os(e, t, n, i) {
  const r = bn;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var s = R, o = (
    /** @type {Effect} */
    T
  ), a = qs();
  function l() {
    Promise.all(n.map((f) => /* @__PURE__ */ Ns(f))).then((f) => {
      a();
      try {
        i([...t.map(r), ...f]);
      } catch (u) {
        (o.f & Qe) === 0 && Pt(u, o);
      }
      s == null || s.deactivate(), fn();
    }).catch((f) => {
      Pt(f, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), fn();
    }
  }) : l();
}
function qs() {
  var e = T, t = S, n = ce, i = R;
  return function(s = !0) {
    we(e), W(t), Mt(n), s && (i == null || i.activate());
  };
}
function fn() {
  we(null), W(null), Mt(null);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  var t = X | ne, n = S !== null && (S.f & X) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return T !== null && (T.f |= bt), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: Sr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: n ?? T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ns(e, t) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && cs();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = wt(
    /** @type {V} */
    Y
  ), o = !S, a = /* @__PURE__ */ new Map();
  return Fs(() => {
    var d;
    var l = Er();
    r = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        f === R && f.committed && f.deactivate(), fn();
      });
    } catch (v) {
      l.reject(v), fn();
    }
    var f = (
      /** @type {Batch} */
      R
    );
    if (o) {
      var u = !i.is_pending();
      i.update_pending_count(1), f.increment(u), (d = a.get(f)) == null || d.reject(Tt), a.delete(f), a.set(f, l);
    }
    const h = (v, _ = void 0) => {
      if (f.activate(), _)
        _ !== Tt && (s.f |= et, cn(s, _));
      else {
        (s.f & et) !== 0 && (s.f ^= et), cn(s, v);
        for (const [b, $] of a) {
          if (a.delete(b), b === f) break;
          $.reject(Tt);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(u));
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), Gr(() => {
    for (const l of a.values())
      l.reject(Tt);
  }), new Promise((l) => {
    function f(u) {
      function h() {
        u === r ? l(s) : f(r);
      }
      u.then(h, h);
    }
    f(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ bn(e);
  return si(t), t;
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  const t = /* @__PURE__ */ bn(e);
  return t.equals = Cr, t;
}
function zr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      J(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ms(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & X) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Gn(e) {
  var t, n = T;
  we(Ms(e));
  try {
    e.f &= ~Ht, zr(e), t = fi(e);
  } finally {
    we(n);
  }
  return t;
}
function Dr(e) {
  var t = Gn(e);
  if (e.equals(t) || (e.v = t, e.wv = oi()), !Et)
    if (I !== null)
      $n() && I.set(e, e.v);
    else {
      var n = (e.f & ke) === 0 ? Ve : V;
      G(e, n);
    }
}
let jn = /* @__PURE__ */ new Set();
const tt = /* @__PURE__ */ new Map();
let Lr = !1;
function wt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Sr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const n = wt(e);
  return si(n), n;
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t = !1, n = !0) {
  const i = wt(e);
  return t || (i.equals = Cr), i;
}
function k(e, t, n = !1) {
  S !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ie || (S.f & ar) !== 0) && Tr() && (S.f & (X | Ye | Un | ar)) !== 0 && !(Q != null && Q.includes(e)) && ms();
  let i = n ? ft(t) : t;
  return cn(e, i);
}
function cn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Et ? tt.set(e, t) : tt.set(e, n), e.v = t;
    var i = Pe.ensure();
    i.capture(e, n), (e.f & X) !== 0 && ((e.f & ne) !== 0 && Gn(
      /** @type {Derived} */
      e
    ), G(e, (e.f & ke) !== 0 ? V : Ve)), e.wv = oi(), Br(e, ne), T !== null && (T.f & V) !== 0 && (T.f & (Ue | rt)) === 0 && (de === null ? Hs([e]) : de.push(e)), !i.is_fork && jn.size > 0 && !Lr && Ps();
  }
  return t;
}
function Ps() {
  Lr = !1;
  const e = Array.from(jn);
  for (const t of e)
    (t.f & V) !== 0 && G(t, Ve), Kt(t) && Ut(t);
  jn.clear();
}
function Ft(e) {
  k(e, e.v + 1);
}
function Br(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var s = n[r], o = s.f, a = (o & ne) === 0;
      if (a && G(s, t), (o & X) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        I == null || I.delete(l), (o & Ht) === 0 && (o & ke && (s.f |= Ht), Br(l, Ve));
      } else a && ((o & Ye) !== 0 && Ee !== null && Ee.add(
        /** @type {Effect} */
        s
      ), yt(
        /** @type {Effect} */
        s
      ));
    }
}
function ft(e) {
  if (typeof e != "object" || e === null || tn in e)
    return e;
  const t = $r(e);
  if (t !== ns && t !== rs)
    return e;
  var n = /* @__PURE__ */ new Map(), i = br(e), r = /* @__PURE__ */ D(0), s = _t, o = (a) => {
    if (_t === s)
      return a();
    var l = S, f = _t;
    W(null), dr(s);
    var u = a();
    return W(l), dr(f), u;
  };
  return i && n.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && _s();
        var u = n.get(l);
        return u === void 0 ? u = o(() => {
          var h = /* @__PURE__ */ D(f.value);
          return n.set(l, h), h;
        }) : k(u, f.value, !0), !0;
      },
      deleteProperty(a, l) {
        var f = n.get(l);
        if (f === void 0) {
          if (l in a) {
            const u = o(() => /* @__PURE__ */ D(Y));
            n.set(l, u), Ft(r);
          }
        } else
          k(f, Y), Ft(r);
        return !0;
      },
      get(a, l, f) {
        var v;
        if (l === tn)
          return e;
        var u = n.get(l), h = l in a;
        if (u === void 0 && (!h || (v = At(a, l)) != null && v.writable) && (u = o(() => {
          var _ = ft(h ? a[l] : Y), b = /* @__PURE__ */ D(_);
          return b;
        }), n.set(l, u)), u !== void 0) {
          var d = p(u);
          return d === Y ? void 0 : d;
        }
        return Reflect.get(a, l, f);
      },
      getOwnPropertyDescriptor(a, l) {
        var f = Reflect.getOwnPropertyDescriptor(a, l);
        if (f && "value" in f) {
          var u = n.get(l);
          u && (f.value = p(u));
        } else if (f === void 0) {
          var h = n.get(l), d = h == null ? void 0 : h.v;
          if (h !== void 0 && d !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(a, l) {
        var d;
        if (l === tn)
          return !0;
        var f = n.get(l), u = f !== void 0 && f.v !== Y || Reflect.has(a, l);
        if (f !== void 0 || T !== null && (!u || (d = At(a, l)) != null && d.writable)) {
          f === void 0 && (f = o(() => {
            var v = u ? ft(a[l]) : Y, _ = /* @__PURE__ */ D(v);
            return _;
          }), n.set(l, f));
          var h = p(f);
          if (h === Y)
            return !1;
        }
        return u;
      },
      set(a, l, f, u) {
        var C;
        var h = n.get(l), d = l in a;
        if (i && l === "length")
          for (var v = f; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var _ = n.get(v + "");
            _ !== void 0 ? k(_, Y) : v in a && (_ = o(() => /* @__PURE__ */ D(Y)), n.set(v + "", _));
          }
        if (h === void 0)
          (!d || (C = At(a, l)) != null && C.writable) && (h = o(() => /* @__PURE__ */ D(void 0)), k(h, ft(f)), n.set(l, h));
        else {
          d = h.v !== Y;
          var b = o(() => ft(f));
          k(h, b);
        }
        var $ = Reflect.getOwnPropertyDescriptor(a, l);
        if ($ != null && $.set && $.set.call(u, f), !d) {
          if (i && typeof l == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), j = Number(l);
            Number.isInteger(j) && j >= M.v && k(M, j + 1);
          }
          Ft(r);
        }
        return !0;
      },
      ownKeys(a) {
        p(r);
        var l = Reflect.ownKeys(a).filter((h) => {
          var d = n.get(h);
          return d === void 0 || d.v !== Y;
        });
        for (var [f, u] of n)
          u.v !== Y && !(f in a) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        gs();
      }
    }
  );
}
var lr, Hr, Yr, Ur;
function Mn() {
  if (lr === void 0) {
    lr = window, Hr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yr = At(t, "firstChild").get, Ur = At(t, "nextSibling").get, sr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), sr(n) && (n.__t = void 0);
  }
}
function ye(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return Yr.call(e);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return Ur.call(e);
}
function Je(e, t) {
  if (!w)
    return /* @__PURE__ */ me(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(x)
  );
  if (n === null)
    n = x.appendChild(ye());
  else if (t && n.nodeType !== Vn) {
    var i = ye();
    return n == null || n.before(i), F(i), i;
  }
  return F(n), n;
}
function fr(e, t = !1) {
  if (!w) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Se(n) : n;
  }
  if (t && (x == null ? void 0 : x.nodeType) !== Vn) {
    var i = ye();
    return x == null || x.before(i), F(i), i;
  }
  return x;
}
function zt(e, t = 1, n = !1) {
  let i = w ? x : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Se(i);
  if (!w)
    return i;
  if (n && (i == null ? void 0 : i.nodeType) !== Vn) {
    var s = ye();
    return i === null ? r == null || r.after(s) : i.before(s), F(s), s;
  }
  return F(i), /** @type {TemplateNode} */
  i;
}
function Vr(e) {
  e.textContent = "";
}
function Wr() {
  return !1;
}
function Jr(e) {
  var t = S, n = T;
  W(null), we(null);
  try {
    return e();
  } finally {
    W(t), we(n);
  }
}
function Is(e) {
  T === null && (S === null && hs(), ds()), Et && us();
}
function zs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ze(e, t, n, i = !0) {
  var r = T;
  r !== null && (r.f & fe) !== 0 && (e |= fe);
  var s = {
    ctx: ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ne | ke,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Ut(s), s.f |= mn;
    } catch (l) {
      throw J(s), l;
    }
  else t !== null && yt(s);
  if (i) {
    var o = s;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & bt) === 0 && (o = o.first, (e & Ye) !== 0 && (e & mt) !== 0 && o !== null && (o.f |= mt)), o !== null && (o.parent = r, r !== null && zs(o, r), S !== null && (S.f & X) !== 0 && (e & rt) === 0)) {
      var a = (
        /** @type {Derived} */
        S
      );
      (a.effects ?? (a.effects = [])).push(o);
    }
  }
  return s;
}
function $n() {
  return S !== null && !Ie;
}
function Gr(e) {
  const t = ze(Yn, null, !1);
  return G(t, V), t.teardown = e, t;
}
function Bt(e) {
  Is();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !S && (t & Ue) !== 0 && (t & mn) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      ce
    );
    (i.e ?? (i.e = [])).push(e);
  } else
    return Xr(e);
}
function Xr(e) {
  return ze(_n | ss, e, !1);
}
function Ds(e) {
  Pe.ensure();
  const t = ze(rt | bt, e, !0);
  return () => {
    J(t);
  };
}
function Ls(e) {
  Pe.ensure();
  const t = ze(rt | bt, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Ot(t, () => {
      J(t), i(void 0);
    }) : (J(t), i(void 0));
  });
}
function Kr(e) {
  return ze(_n, e, !1);
}
function Fs(e) {
  return ze(Un | bt, e, !0);
}
function Xn(e, t = 0) {
  return ze(Yn | t, e, !0);
}
function Le(e, t = [], n = [], i = [], r = !1) {
  Os(i, t, n, (s) => {
    ze(r ? _n : Yn, () => e(...s.map(p)), !0);
  });
}
function En(e, t = 0) {
  var n = ze(Ye | t, e, !0);
  return n;
}
function ge(e, t = !0) {
  return ze(Ue | bt, e, !0, t);
}
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Et, i = S;
    ur(!0), W(null);
    try {
      t.call(null);
    } finally {
      ur(n), W(i);
    }
  }
}
function Qr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Jr(() => {
      r.abort(Tt);
    });
    var i = n.next;
    (n.f & rt) !== 0 ? n.parent = null : J(n, t), n = i;
  }
}
function Bs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ue) === 0 && J(t), t = n;
  }
}
function J(e, t = !0) {
  var n = !1;
  (t || (e.f & xr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ei(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Qr(e, t && !n), un(e, 0), G(e, Qe);
  var i = e.transitions;
  if (i !== null)
    for (const s of i)
      s.stop();
  Zr(e);
  var r = e.parent;
  r !== null && r.first !== null && ti(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ei(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(e)
    );
    e.remove(), e = n;
  }
}
function ti(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function Ot(e, t, n = !0) {
  var i = [];
  Kn(e, i, !0), ni(i, () => {
    n && J(e), t && t();
  });
}
function ni(e, t) {
  var n = e.length;
  if (n > 0) {
    var i = () => --n || t();
    for (var r of e)
      r.out(i);
  } else
    t();
}
function Kn(e, t, n) {
  if ((e.f & fe) === 0) {
    if (e.f ^= fe, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var r = i.next, s = (i.f & mt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Ue) !== 0 && (e.f & Ye) !== 0;
      Kn(i, t, s ? n : !1), i = r;
    }
  }
}
function Zn(e) {
  ri(e, !0);
}
function ri(e, t) {
  if ((e.f & fe) !== 0) {
    e.f ^= fe, (e.f & V) === 0 && (G(e, ne), yt(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, r = (n.f & mt) !== 0 || (n.f & Ue) !== 0;
      ri(n, r ? t : !1), n = i;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
function ii(e, t) {
  for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
    var r = n === i ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(n)
    );
    t.append(n), n = r;
  }
}
let pt = !1;
function cr(e) {
  pt = e;
}
let Et = !1;
function ur(e) {
  Et = e;
}
let S = null, Ie = !1;
function W(e) {
  S = e;
}
let T = null;
function we(e) {
  T = e;
}
let Q = null;
function si(e) {
  S !== null && (Q === null ? Q = [e] : Q.push(e));
}
let Z = null, ie = 0, de = null;
function Hs(e) {
  de = e;
}
let ai = 1, Yt = 0, _t = Yt;
function dr(e) {
  _t = e;
}
function oi() {
  return ++ai;
}
function Kt(e) {
  var t = e.f;
  if ((t & ne) !== 0)
    return !0;
  if (t & X && (e.f &= ~Ht), (t & Ve) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var i = n.length, r = 0; r < i; r++) {
        var s = n[r];
        if (Kt(
          /** @type {Derived} */
          s
        ) && Dr(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    I === null && G(e, V);
  }
  return !1;
}
function li(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !(Q != null && Q.includes(e)))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      (s.f & X) !== 0 ? li(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? G(s, ne) : (s.f & V) !== 0 && G(s, Ve), yt(
        /** @type {Effect} */
        s
      ));
    }
}
function fi(e) {
  var _;
  var t = Z, n = ie, i = de, r = S, s = Q, o = ce, a = Ie, l = _t, f = e.f;
  Z = /** @type {null | Value[]} */
  null, ie = 0, de = null, S = (f & (Ue | rt)) === 0 ? e : null, Q = null, Mt(e.ctx), Ie = !1, _t = ++Yt, e.ac !== null && (Jr(() => {
    e.ac.abort(Tt);
  }), e.ac = null);
  try {
    e.f |= An;
    var u = (
      /** @type {Function} */
      e.fn
    ), h = u(), d = e.deps;
    if (Z !== null) {
      var v;
      if (un(e, ie), d !== null && ie > 0)
        for (d.length = ie + Z.length, v = 0; v < Z.length; v++)
          d[ie + v] = Z[v];
      else
        e.deps = d = Z;
      if (pt && $n() && (e.f & ke) !== 0)
        for (v = ie; v < d.length; v++)
          ((_ = d[v]).reactions ?? (_.reactions = [])).push(e);
    } else d !== null && ie < d.length && (un(e, ie), d.length = ie);
    if (Tr() && de !== null && !Ie && d !== null && (e.f & (X | Ve | ne)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      de.length; v++)
        li(
          de[v],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (Yt++, de !== null && (i === null ? i = de : i.push(.../** @type {Source[]} */
    de))), (e.f & et) !== 0 && (e.f ^= et), h;
  } catch (b) {
    return Or(b);
  } finally {
    e.f ^= An, Z = t, ie = n, de = i, S = r, Q = s, Mt(o), Ie = a, _t = l;
  }
}
function Ys(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = es.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (t.f & X) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !Z.includes(t)) && (G(t, Ve), (t.f & ke) !== 0 && (t.f ^= ke, t.f &= ~Ht), zr(
    /** @type {Derived} **/
    t
  ), un(
    /** @type {Derived} **/
    t,
    0
  ));
}
function un(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      Ys(e, n[i]);
}
function Ut(e) {
  var t = e.f;
  if ((t & Qe) === 0) {
    G(e, V);
    var n = T, i = pt;
    T = e, pt = !0;
    try {
      (t & Ye) !== 0 ? Bs(e) : Qr(e), Zr(e);
      var r = fi(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ai;
      var s;
      wr && Es && (e.f & ne) !== 0 && e.deps;
    } finally {
      pt = i, T = n;
    }
  }
}
function p(e) {
  var t = e.f, n = (t & X) !== 0;
  if (S !== null && !Ie) {
    var i = T !== null && (T.f & Qe) !== 0;
    if (!i && !(Q != null && Q.includes(e))) {
      var r = S.deps;
      if ((S.f & An) !== 0)
        e.rv < Yt && (e.rv = Yt, Z === null && r !== null && r[ie] === e ? ie++ : Z === null ? Z = [e] : Z.includes(e) || Z.push(e));
      else {
        (S.deps ?? (S.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [S] : s.includes(S) || s.push(S);
      }
    }
  }
  if (Et) {
    if (tt.has(e))
      return tt.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), a = o.v;
      return ((o.f & V) === 0 && o.reactions !== null || ui(o)) && (a = Gn(o)), tt.set(o, a), a;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, I != null && I.has(o))
      return I.get(o);
    Kt(o) && Dr(o), pt && $n() && (o.f & ke) === 0 && ci(o);
  } else if (I != null && I.has(e))
    return I.get(e);
  if ((e.f & et) !== 0)
    throw e.v;
  return e.v;
}
function ci(e) {
  if (e.deps !== null) {
    e.f ^= ke;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & X) !== 0 && (t.f & ke) === 0 && ci(
        /** @type {Derived} */
        t
      );
  }
}
function ui(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (tt.has(t) || (t.f & X) !== 0 && ui(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Qn(e) {
  var t = Ie;
  try {
    return Ie = !0, e();
  } finally {
    Ie = t;
  }
}
const Us = -7169;
function G(e, t) {
  e.f = e.f & Us | t;
}
const di = /* @__PURE__ */ new Set(), Pn = /* @__PURE__ */ new Set();
function Vs(e) {
  for (var t = 0; t < e.length; t++)
    di.add(e[t]);
  for (var n of Pn)
    n(e);
}
let hr = null;
function Qt(e) {
  var $;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = (($ = e.composedPath) == null ? void 0 : $.call(e)) || [], s = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  hr = e;
  var o = 0, a = hr === e && e.__root;
  if (a) {
    var l = r.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = r.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (s = /** @type {Element} */
  r[o] || e.target, s !== t) {
    on(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = S, h = T;
    W(null), we(null);
    try {
      for (var d, v = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + i];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch (M) {
          d ? v.push(M) : d = M;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (d) {
        for (let M of v)
          queueMicrotask(() => {
            throw M;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, W(u), we(h);
    }
  }
}
function hi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function He(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  var n = (t & Xi) !== 0, i = (t & Ki) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (w)
      return He(x, null), x;
    r === void 0 && (r = hi(s ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ me(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Hr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      He(a, l);
    } else
      He(o, o);
    return o;
  };
}
function vr() {
  if (w)
    return He(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ye();
  return e.append(t, n), He(t, n), e;
}
function Oe(e, t) {
  if (w) {
    var n = (
      /** @type {Effect} */
      T
    );
    ((n.f & mn) === 0 || n.nodes_end === null) && (n.nodes_end = x), nt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ws = ["touchstart", "touchmove"];
function Js(e) {
  return Ws.includes(e);
}
const Gs = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Xs(e) {
  return Gs.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ks(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function vi(e, t) {
  return pi(e, t);
}
function Zs(e, t) {
  Mn(), t.intro = t.intro ?? !1;
  const n = t.target, i = w, r = x;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(n)
    ); s && (s.nodeType !== $t || /** @type {Comment} */
    s.data !== yr); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Se(s);
    if (!s)
      throw gt;
    le(!0), F(
      /** @type {Comment} */
      s
    );
    const o = pi(e, { ...t, anchor: s });
    return le(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== gt && console.warn("Failed to hydrate: ", o), t.recover === !1 && ps(), Mn(), Vr(n), le(!1), vi(e, t);
  } finally {
    le(i), F(r);
  }
}
const St = /* @__PURE__ */ new Map();
function pi(e, { target: t, anchor: n, props: i = {}, events: r, context: s, intro: o = !0 }) {
  Mn();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var d = 0; d < h.length; d++) {
      var v = h[d];
      if (!a.has(v)) {
        a.add(v);
        var _ = Js(v);
        t.addEventListener(v, Qt, { passive: _ });
        var b = St.get(v);
        b === void 0 ? (document.addEventListener(v, Qt, { passive: _ }), St.set(v, 1)) : St.set(v, b + 1);
      }
    }
  };
  l(Hn(di)), Pn.add(l);
  var f = void 0, u = Ls(() => {
    var h = n ?? t.appendChild(ye());
    return Ts(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        if (s) {
          Wn({});
          var v = (
            /** @type {ComponentContext} */
            ce
          );
          v.c = s;
        }
        if (r && (i.$$events = r), w && He(
          /** @type {TemplateNode} */
          d,
          null
        ), f = e(d, i) || {}, w && (T.nodes_end = x, x === null || x.nodeType !== $t || /** @type {Comment} */
        x.data !== Bn))
          throw Xt(), gt;
        s && Jn();
      }
    ), () => {
      var _;
      for (var d of a) {
        t.removeEventListener(d, Qt);
        var v = (
          /** @type {number} */
          St.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Qt), St.delete(d)) : St.set(d, v);
      }
      Pn.delete(l), h !== n && ((_ = h.parentNode) == null || _.removeChild(h));
    };
  });
  return In.set(f, u), f;
}
let In = /* @__PURE__ */ new WeakMap();
function Qs(e, t) {
  const n = In.get(e);
  return n ? (In.delete(e), n(t)) : Promise.resolve();
}
var xe, je, ae, Jt, Gt, vn;
class _i {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    P(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, xe, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Effect>} */
    A(this, je, /* @__PURE__ */ new Map());
    /** @type {Map<Key, Branch>} */
    A(this, ae, /* @__PURE__ */ new Map());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, Jt, !0);
    A(this, Gt, () => {
      var t = (
        /** @type {Batch} */
        R
      );
      if (c(this, xe).has(t)) {
        var n = (
          /** @type {Key} */
          c(this, xe).get(t)
        ), i = c(this, je).get(n);
        if (i)
          Zn(i);
        else {
          var r = c(this, ae).get(n);
          r && (c(this, je).set(n, r.effect), c(this, ae).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [s, o] of c(this, xe)) {
          if (c(this, xe).delete(s), s === t)
            break;
          const a = c(this, ae).get(o);
          a && (J(a.effect), c(this, ae).delete(o));
        }
        for (const [s, o] of c(this, je)) {
          if (s === n) continue;
          const a = () => {
            if (Array.from(c(this, xe).values()).includes(s)) {
              var f = document.createDocumentFragment();
              ii(o, f), f.append(ye()), c(this, ae).set(s, { effect: o, fragment: f });
            } else
              J(o);
            c(this, je).delete(s);
          };
          c(this, Jt) || !i ? Ot(o, a, !1) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, vn, (t) => {
      c(this, xe).delete(t);
      const n = Array.from(c(this, xe).values());
      for (const [i, r] of c(this, ae))
        n.includes(i) || (J(r.effect), c(this, ae).delete(i));
    });
    this.anchor = t, y(this, Jt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var i = (
      /** @type {Batch} */
      R
    ), r = Wr();
    if (n && !c(this, je).has(t) && !c(this, ae).has(t))
      if (r) {
        var s = document.createDocumentFragment(), o = ye();
        s.append(o), c(this, ae).set(t, {
          effect: ge(() => n(o)),
          fragment: s
        });
      } else
        c(this, je).set(
          t,
          ge(() => n(this.anchor))
        );
    if (c(this, xe).set(i, t), r) {
      for (const [a, l] of c(this, je))
        a === t ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [a, l] of c(this, ae))
        a === t ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(c(this, Gt)), i.ondiscard(c(this, vn));
    } else
      w && (this.anchor = x), c(this, Gt).call(this);
  }
}
xe = new WeakMap(), je = new WeakMap(), ae = new WeakMap(), Jt = new WeakMap(), Gt = new WeakMap(), vn = new WeakMap();
function gi(e) {
  ce === null && fs(), Bt(() => {
    const t = Qn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ct(e, t, n = !1) {
  w && nt();
  var i = new _i(e), r = n ? mt : 0;
  function s(o, a) {
    if (w) {
      const f = kr(e) === pn;
      if (o === f) {
        var l = ln();
        F(l), i.anchor = l, le(!1), i.ensure(o, a), le(!0);
        return;
      }
    }
    i.ensure(o, a);
  }
  En(() => {
    var o = !1;
    t((a, l = !0) => {
      o = !0, s(l, a);
    }), o || s(!1, null);
  }, r);
}
function ea(e, t, n) {
  for (var i = e.items, r = [], s = t.length, o = 0; o < s; o++)
    Kn(t[o].e, r, !0);
  var a = s > 0 && r.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Vr(l), l.append(
      /** @type {Element} */
      n
    ), i.clear(), Ae(e, t[0].prev, t[s - 1].next);
  }
  ni(r, () => {
    for (var f = 0; f < s; f++) {
      var u = t[f];
      a || (i.delete(u.k), Ae(e, u.prev, u.next)), J(u.e, !a);
    }
  });
}
function ta(e, t, n, i, r, s = null) {
  var o = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = w ? F(
      /** @type {Comment | Text} */
      /* @__PURE__ */ me(l)
    ) : l.appendChild(ye());
  }
  w && nt();
  var f = null, u = !1, h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ js(() => {
    var $ = n();
    return br($) ? $ : $ == null ? [] : Hn($);
  }), v, _;
  function b() {
    na(
      _,
      v,
      a,
      h,
      o,
      r,
      t,
      i,
      n
    ), s !== null && (v.length === 0 ? f ? Zn(f) : f = ge(() => s(o)) : f !== null && Ot(f, () => {
      f = null;
    }));
  }
  En(() => {
    _ ?? (_ = /** @type {Effect} */
    T), v = /** @type {V[]} */
    p(d);
    var $ = v.length;
    if (u && $ === 0)
      return;
    u = $ === 0;
    let M = !1;
    if (w) {
      var j = kr(o) === pn;
      j !== ($ === 0) && (o = ln(), F(o), le(!1), M = !0);
    }
    if (w) {
      for (var C = null, g, q = 0; q < $; q++) {
        if (x.nodeType === $t && /** @type {Comment} */
        x.data === Bn) {
          o = /** @type {Comment} */
          x, M = !0, le(!1);
          break;
        }
        var H = v[q], L = i(H, q);
        g = zn(
          x,
          a,
          C,
          null,
          H,
          L,
          q,
          r,
          t,
          n
        ), a.items.set(L, g), C = g;
      }
      $ > 0 && F(ln());
    }
    if (w)
      $ === 0 && s && (f = ge(() => s(o)));
    else if (Wr()) {
      var ee = /* @__PURE__ */ new Set(), K = (
        /** @type {Batch} */
        R
      );
      for (q = 0; q < $; q += 1) {
        H = v[q], L = i(H, q);
        var it = a.items.get(L) ?? h.get(L);
        it || (g = zn(
          null,
          a,
          null,
          null,
          H,
          L,
          q,
          r,
          t,
          n,
          !0
        ), h.set(L, g)), ee.add(L);
      }
      for (const [We, st] of a.items)
        ee.has(We) || K.skipped_effects.add(st.e);
      K.oncommit(b);
    } else
      b();
    M && le(!0), p(d);
  }), w && (o = x);
}
function na(e, t, n, i, r, s, o, a, l) {
  var f = t.length, u = n.items, h = n.first, d = h, v, _ = null, b = [], $ = [], M, j, C, g;
  for (g = 0; g < f; g += 1) {
    if (M = t[g], j = a(M, g), C = u.get(j), C === void 0) {
      var q = i.get(j);
      if (q !== void 0) {
        i.delete(j), u.set(j, q);
        var H = _ ? _.next : d;
        Ae(n, _, q), Ae(n, q, H), Tn(q, H, r), _ = q;
      } else {
        var L = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : r;
        _ = zn(
          L,
          n,
          _,
          _ === null ? n.first : _.next,
          M,
          j,
          g,
          s,
          o,
          l
        );
      }
      u.set(j, _), b = [], $ = [], d = _.next;
      continue;
    }
    if ((C.e.f & fe) !== 0 && Zn(C.e), C !== d) {
      if (v !== void 0 && v.has(C)) {
        if (b.length < $.length) {
          var ee = $[0], K;
          _ = ee.prev;
          var it = b[0], We = b[b.length - 1];
          for (K = 0; K < b.length; K += 1)
            Tn(b[K], ee, r);
          for (K = 0; K < $.length; K += 1)
            v.delete($[K]);
          Ae(n, it.prev, We.next), Ae(n, _, it), Ae(n, We, ee), d = ee, _ = We, g -= 1, b = [], $ = [];
        } else
          v.delete(C), Tn(C, d, r), Ae(n, C.prev, C.next), Ae(n, C, _ === null ? n.first : _.next), Ae(n, _, C), _ = C;
        continue;
      }
      for (b = [], $ = []; d !== null && d.k !== j; )
        (d.e.f & fe) === 0 && (v ?? (v = /* @__PURE__ */ new Set())).add(d), $.push(d), d = d.next;
      if (d === null)
        continue;
      C = d;
    }
    b.push(C), _ = C, d = C.next;
  }
  if (d !== null || v !== void 0) {
    for (var st = v === void 0 ? [] : Hn(v); d !== null; )
      (d.e.f & fe) === 0 && st.push(d), d = d.next;
    var xn = st.length;
    if (xn > 0) {
      var kn = f === 0 ? r : null;
      ea(n, st, kn);
    }
  }
  e.first = n.first && n.first.e, e.last = _ && _.e;
  for (var Sn of i.values())
    J(Sn.e);
  i.clear();
}
function zn(e, t, n, i, r, s, o, a, l, f, u) {
  var h = (l & Wi) !== 0, d = (l & Gi) === 0, v = h ? d ? /* @__PURE__ */ Fr(r, !1, !1) : wt(r) : r, _ = (l & Ji) === 0 ? o : wt(o), b = {
    i: _,
    v,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: i
  };
  try {
    if (e === null) {
      var $ = document.createDocumentFragment();
      $.append(e = ye());
    }
    return b.e = ge(() => a(
      /** @type {Node} */
      e,
      v,
      _,
      f
    ), w), b.e.prev = n && n.e, b.e.next = i && i.e, n === null ? u || (t.first = b) : (n.next = b, n.e.next = b.e), i !== null && (i.prev = b, i.e.prev = b.e), b;
  } finally {
  }
}
function Tn(e, t, n) {
  for (var i = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== null && s !== i; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(s)
    );
    r.before(s), s = o;
  }
}
function Ae(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ra(e, t, n = !1, i = !1, r = !1) {
  var s = e, o = "";
  Le(() => {
    var a = (
      /** @type {Effect} */
      T
    );
    if (o === (o = t() ?? "")) {
      w && nt();
      return;
    }
    if (a.nodes_start !== null && (ei(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), o !== "") {
      if (w) {
        x.data;
        for (var l = nt(), f = l; l !== null && (l.nodeType !== $t || /** @type {Comment} */
        l.data !== ""); )
          f = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Se(l);
        if (l === null)
          throw Xt(), gt;
        He(x, f), s = F(l);
        return;
      }
      var u = o + "";
      n ? u = `<svg>${u}</svg>` : i && (u = `<math>${u}</math>`);
      var h = hi(u);
      if ((n || i) && (h = /** @type {Element} */
      /* @__PURE__ */ me(h)), He(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || i)
        for (; /* @__PURE__ */ me(h); )
          s.before(
            /** @type {Node} */
            /* @__PURE__ */ me(h)
          );
      else
        s.before(h);
    }
  });
}
function ia(e, t, n, i, r, s) {
  let o = w;
  w && nt();
  var a = null;
  w && x.nodeType === ls && (a = /** @type {Element} */
  x, nt());
  var l = (
    /** @type {TemplateNode} */
    w ? x : e
  ), f = new _i(l, !1);
  En(() => {
    const u = t() || null;
    var h = u === "svg" ? Qi : null;
    if (u === null) {
      f.ensure(null, null);
      return;
    }
    return f.ensure(u, (d) => {
      if (u) {
        if (a = w ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, u) : document.createElement(u), He(a, a), i) {
          w && Xs(u) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            w ? /* @__PURE__ */ me(a) : a.appendChild(ye())
          );
          w && (v === null ? le(!1) : F(v)), i(a, v);
        }
        T.nodes_end = a, d.before(a);
      }
      w && F(d);
    }), () => {
    };
  }, mt), Gr(() => {
  }), o && (le(!0), F(l));
}
function mi(e, t) {
  Kr(() => {
    var n = e.getRootNode(), i = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, i.appendChild(r);
    }
  });
}
function sa(e, t, n) {
  var i = e == null ? "" : "" + e;
  return t && (i = i ? i + " " + t : t), i === "" ? null : i;
}
function aa(e, t) {
  return e == null ? null : String(e);
}
function ue(e, t, n, i, r, s) {
  var o = e.__className;
  if (w || o !== n || o === void 0) {
    var a = sa(n, i);
    (!w || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  }
  return s;
}
function Ge(e, t, n, i) {
  var r = e.__style;
  if (w || r !== t) {
    var s = aa(t);
    (!w || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  }
  return i;
}
const oa = Symbol("is custom element"), la = Symbol("is html");
function yi(e, t, n, i) {
  var r = fa(e);
  w && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "loading" && (e[os] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && wi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pr(e, t, n) {
  var i = S, r = T;
  let s = w;
  w && le(!1), W(null), we(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Dn.has(e.getAttribute("is") || e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.getAttribute("is") || e.tagName.toLowerCase()) ? wi(e).includes(t) : n && typeof n == "object") ? e[t] = n : yi(e, t, n == null ? n : String(n));
  } finally {
    W(i), we(r), s && le(!0);
  }
}
function fa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [oa]: e.nodeName.includes("-"),
      [la]: e.namespaceURI === Zi
    })
  );
}
var Dn = /* @__PURE__ */ new Map();
function wi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Dn.get(t);
  if (n) return n;
  Dn.set(t, n = []);
  for (var i, r = e, s = Element.prototype; s !== r; ) {
    i = ts(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = $r(r);
  }
  return n;
}
function _r(e, t) {
  return e === t || (e == null ? void 0 : e[tn]) === t;
}
function ca(e = {}, t, n, i) {
  return Kr(() => {
    var r, s;
    return Xn(() => {
      r = s, s = [], Qn(() => {
        e !== n(...s) && (t(e, ...s), r && _r(n(...r), e) && t(null, ...r));
      });
    }), () => {
      yn(() => {
        s && _r(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function he(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), s = !0, o = () => (s && (s = !1, r = /** @type {V} */
  i), r), a;
  a = /** @type {V} */
  e[t], a === void 0 && i !== void 0 && (a = o());
  var l;
  l = () => {
    var d = (
      /** @type {V} */
      e[t]
    );
    return d === void 0 ? o() : (s = !0, d);
  };
  var f = !1, u = /* @__PURE__ */ bn(() => (f = !1, l())), h = (
    /** @type {Effect} */
    T
  );
  return (
    /** @type {() => V} */
    (function(d, v) {
      if (arguments.length > 0) {
        const _ = v ? p(u) : d;
        return k(u, _), f = !0, r !== void 0 && (r = _), d;
      }
      return Et && f || (h.f & Qe) !== 0 ? u.v : p(u);
    })
  );
}
function ua(e) {
  return new da(e);
}
var Be, _e;
class da {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    A(this, Be);
    /** @type {Record<string, any>} */
    A(this, _e);
    var s;
    var n = /* @__PURE__ */ new Map(), i = (o, a) => {
      var l = /* @__PURE__ */ Fr(a, !1, !1);
      return n.set(o, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return p(n.get(a) ?? i(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === as ? !0 : (p(n.get(a) ?? i(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, l) {
          return k(n.get(a) ?? i(a, l), l), Reflect.set(o, a, l);
        }
      }
    );
    y(this, _e, (t.hydrate ? Zs : vi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && oe(), y(this, Be, r.$$events);
    for (const o of Object.keys(c(this, _e)))
      o === "$set" || o === "$destroy" || o === "$on" || on(this, o, {
        get() {
          return c(this, _e)[o];
        },
        /** @param {any} value */
        set(a) {
          c(this, _e)[o] = a;
        },
        enumerable: !0
      });
    c(this, _e).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(r, o);
    }, c(this, _e).$destroy = () => {
      Qs(c(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    c(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    c(this, Be)[t] = c(this, Be)[t] || [];
    const i = (...r) => n.call(this, ...r);
    return c(this, Be)[t].push(i), () => {
      c(this, Be)[t] = c(this, Be)[t].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    c(this, _e).$destroy();
  }
}
Be = new WeakMap(), _e = new WeakMap();
let bi;
typeof HTMLElement == "function" && (bi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    P(this, "$$ctor");
    /** Slots */
    P(this, "$$s");
    /** @type {any} The Svelte component instance */
    P(this, "$$c");
    /** Whether or not the custom element is connected */
    P(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    P(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    P(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    P(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    P(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    P(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    P(this, "$$me");
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (s) => {
          const o = document.createElement("slot");
          r !== "default" && (o.name = r), Oe(s, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = ha(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = sn(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ua({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ds(() => {
        Xn(() => {
          var r;
          this.$$r = !0;
          for (const s of an(this.$$c)) {
            if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const o = sn(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const o = this.$$c.$on(r, s);
          this.$$l_u.set(s, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = sn(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return an(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function sn(e, t, n, i) {
  var s;
  const r = (s = n[e]) == null ? void 0 : s.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ha(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function $i(e, t, n, i, r, s) {
  let o = class extends bi {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return an(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return an(t).forEach((a) => {
    on(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var h;
        l = sn(a, l, t), this.$$d[a] = l;
        var f = this.$$c;
        if (f) {
          var u = (h = At(f, a)) == null ? void 0 : h.get;
          u ? f[a] = l : f.$set({ [a]: l });
        }
      }
    });
  }), i.forEach((a) => {
    on(o.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), s && (o = s(o)), e.element = /** @type {any} */
  o, o;
}
class er extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(t, ...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, er), this.name = "TimeoutError", this.timeout = t, this.message = `Timed out in ${t} ms.`;
  }
}
const va = (e, t) => {
  const n = new Promise((i, r) => {
    setTimeout(() => {
      r(new er(e));
    }, e);
  });
  return Promise.race([t, n]);
}, Ei = (e) => {
  if (typeof e.getCardSize == "function")
    try {
      return va(500, e.getCardSize()).catch(
        () => 1
      );
    } catch {
      return 1;
    }
  return customElements.get(e.localName) ? 1 : customElements.whenDefined(e.localName).then(() => Ei(e));
};
var pa = /* @__PURE__ */ xt('<span class="loading svelte-lv9s7p">Loading...</span>'), _a = /* @__PURE__ */ xt("<div><!> <!></div>");
const ga = {
  hash: "svelte-lv9s7p",
  code: `.loading.svelte-lv9s7p {padding:1em;display:block;}.animation.svelte-lv9s7p {hui-card {display:flex;flex-direction:column;}}.outer-container.animation.svelte-lv9s7p {transition:margin-bottom 0.35s ease;}.outer-container.animation.open.svelte-lv9s7p,
  .outer-container.animation.opening.svelte-lv9s7p {margin-bottom:inherit;}.outer-container.animation.close.svelte-lv9s7p,
  .outer-container.animation.closing.svelte-lv9s7p {margin-bottom:var(--expander-animation-height, -100%);}.outer-container.animation.opening.svelte-lv9s7p {
    animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;
    -webkit-animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;}.outer-container.animation.closing.svelte-lv9s7p {
      animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;
      -webkit-animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;}
  @keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
    @keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }`
};
function Ln(e, t) {
  Wn(t, !0), mi(e, ga);
  const n = he(t, "type", 7, "div"), i = he(t, "config"), r = he(t, "hass"), s = he(t, "preview"), o = he(t, "marginTop", 7, "0px"), a = he(t, "open"), l = he(t, "animation", 7, !0), f = he(t, "animationState"), u = he(t, "clearCardCss", 7, !1);
  let h = /* @__PURE__ */ D(void 0), d = /* @__PURE__ */ D(!0), v = /* @__PURE__ */ D(0);
  const _ = JSON.parse(JSON.stringify(i()));
  Bt(() => {
    p(h) && (p(h).hass = r());
  }), Bt(() => {
    p(h) && s() !== void 0 && (p(h).preview = s());
  }), Bt(() => {
    var g;
    p(h) && (_.disabled = !a(), (g = p(h)._element) == null || g.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: a() }, bubbles: !0, composed: !1 })));
  }), gi(async () => {
    const g = document.createElement("hui-card");
    g.hass = r(), g.preview = s(), _.disabled = !a(), g.config = _, g.load(), p(h) && (u() && (g.style.setProperty("--ha-card-background", "transparent"), g.style.setProperty("--ha-card-box-shadow", "none"), g.style.setProperty("--ha-card-border-color", "transparent"), g.style.setProperty("--ha-card-border-width", "0px"), g.style.setProperty("--ha-card-border-radius", "0px"), g.style.setProperty("--ha-card-backdrop-filter", "none")), p(h).replaceWith(g), k(h, g, !0), k(d, !1), l() && (k(v, await Ei(g) * 56), new ResizeObserver((H) => {
      for (const L of H)
        if (L.contentBoxSize) {
          const ee = Array.isArray(L.contentBoxSize) ? L.contentBoxSize[0] : L.contentBoxSize;
          k(v, ee.blockSize || p(v), !0);
        } else
          k(v, L.contentRect.height || p(v), !0);
    }).observe(g)));
  });
  var b = {
    get type() {
      return n();
    },
    set type(g = "div") {
      n(g), oe();
    },
    get config() {
      return i();
    },
    set config(g) {
      i(g), oe();
    },
    get hass() {
      return r();
    },
    set hass(g) {
      r(g), oe();
    },
    get preview() {
      return s();
    },
    set preview(g) {
      s(g), oe();
    },
    get marginTop() {
      return o();
    },
    set marginTop(g = "0px") {
      o(g), oe();
    },
    get open() {
      return a();
    },
    set open(g) {
      a(g), oe();
    },
    get animation() {
      return l();
    },
    set animation(g = !0) {
      l(g), oe();
    },
    get animationState() {
      return f();
    },
    set animationState(g) {
      f(g), oe();
    },
    get clearCardCss() {
      return u();
    },
    set clearCardCss(g = !1) {
      u(g), oe();
    }
  }, $ = _a(), M = Je($);
  ia(M, n, !1, (g, q) => {
    ca(g, (H) => k(h, H, !0), () => p(h)), ue(g, 0, "svelte-lv9s7p");
  });
  var j = zt(M, 2);
  {
    var C = (g) => {
      var q = pa();
      Oe(g, q);
    };
    Ct(j, (g) => {
      p(d) && g(C);
    });
  }
  return De($), Le(() => {
    ue($, 1, `outer-container${a() ? " open" : " close"}${l() ? " animation " + f() : ""}`, "svelte-lv9s7p"), Ge($, `margin-top: ${(a() ? o() : "0px") ?? ""};${p(v) ? ` --expander-animation-height: -${p(v)}px;` : ""}`);
  }), Oe(e, $), Jn(b);
}
customElements.define("expander-sub-card", $i(
  Ln,
  {
    type: {},
    config: {},
    hass: {},
    preview: {},
    marginTop: {},
    open: {},
    animation: {},
    animationState: {},
    clearCardCss: {}
  },
  [],
  [],
  !0
));
const gr = (e, t) => {
  var n;
  (n = e.dispatchEvent) == null || n.call(
    e,
    new CustomEvent(
      "haptic",
      { detail: t, bubbles: !0, composed: !0 }
    )
  );
}, Fn = {
  gap: "0.0em",
  "expanded-gap": "0.6em",
  padding: "1em",
  clear: !1,
  "clear-children": !1,
  title: " ",
  "overlay-margin": "0.0em",
  "child-padding": "0.0em",
  "child-margin-top": "0.0em",
  "button-background": "transparent",
  "expander-card-background": "var(--ha-card-background,var(--card-background-color,#fff))",
  "header-color": "var(--primary-text-color,#fff)",
  "arrow-color": "var(--arrow-color,var(--primary-text-color,#fff))",
  "expander-card-display": "block",
  "title-card-clickable": !1,
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  icon: "mdi:chevron-down",
  "icon-rotate-degree": "180deg",
  animation: !0
};
var ma = /* @__PURE__ */ xt('<button aria-label="Toggle button"><ha-icon></ha-icon></button>', 2), ya = /* @__PURE__ */ xt('<div id="id1"><div id="id2"><!></div> <!></div>'), wa = /* @__PURE__ */ xt("<button><div> </div> <ha-icon></ha-icon></button>", 2), ba = /* @__PURE__ */ xt("<div><div></div></div>"), $a = /* @__PURE__ */ xt("<ha-card><!> <!> <!></ha-card>", 2);
const Ea = {
  hash: "svelte-1jqiztq",
  code: `.expander-card.svelte-1jqiztq {display:var(--expander-card-display,block);gap:var(--gap);padding:var(--padding);background:var(--card-background,#fff);}.expander-card.animation.svelte-1jqiztq {transition:gap 0.35s ease, background-color var(--background-animation-duration, 0) ease;}.children-wrapper.svelte-1jqiztq {display:flex;flex-direction:column;}.children-wrapper.animation.opening.svelte-1jqiztq,
    .children-wrapper.animation.closing.svelte-1jqiztq {overflow:hidden;}.children-container.animation.svelte-1jqiztq {transition:padding 0.35s ease, gap 0.35s ease;}.children-container.svelte-1jqiztq {padding:var(--child-padding);display:var(--expander-card-display,block);gap:var(--gap);}.clear.svelte-1jqiztq {background:none !important;background-color:transparent !important;border-style:none !important;box-shadow:none !important;}.title-card-header.svelte-1jqiztq {display:flex;align-items:center;justify-content:space-between;flex-direction:row;}.title-card-header-overlay.svelte-1jqiztq {display:block;}.title-card-container.svelte-1jqiztq {width:100%;padding:var(--title-padding);}.header.svelte-1jqiztq {display:flex;flex-direction:row;align-items:center;padding:0.8em 0.8em;margin:2px;background:var(--button-background);border-style:none;width:var(--header-width,auto);color:var(--header-color,#fff);}.header-overlay.svelte-1jqiztq {position:absolute;top:0;right:0;margin:var(--overlay-margin);}.title.svelte-1jqiztq {width:100%;text-align:left;}.ico.animation.svelte-1jqiztq {transition-property:transform;transition-duration:0.35s;}.ico.svelte-1jqiztq {color:var(--arrow-color,var(--primary-text-color,#fff));}.flipped.svelte-1jqiztq {transform:rotate(var(--icon-rotate-degree,180deg));}.ripple.svelte-1jqiztq {background-position:center;transition:background 0.8s;border-radius:1em;}.ripple.svelte-1jqiztq:hover {background:#ffffff12 radial-gradient(circle, transparent 1%, #ffffff12 1%) center/15000%;}.ripple.svelte-1jqiztq:active {background-color:#ffffff25;background-size:100%;transition:background 0s;}`
};
function xa(e, t) {
  Wn(t, !0), mi(e, Ea);
  const n = he(t, "hass"), i = he(t, "preview"), r = he(t, "config", 7, Fn);
  let s = /* @__PURE__ */ D(!1), o = /* @__PURE__ */ D(null), a = /* @__PURE__ */ D(ft(!!i())), l = /* @__PURE__ */ D(ft(!!i())), f = /* @__PURE__ */ D(!0), u = /* @__PURE__ */ D("idle"), h = /* @__PURE__ */ D(null), d = /* @__PURE__ */ D(0);
  const v = r()["storage-id"], _ = "expander-open-" + v, b = `<style>${r().style}</style>`;
  k(f, i() || ($(r()["show-button-users"]) ?? !0), !0), Bt(() => {
    i() === p(l) || i() === void 0 || (k(l, i(), !0), p(l) ? (C(!0), k(f, !0)) : (M(), k(f, $(r()["show-button-users"]) ?? !0, !0)));
  });
  function $(m) {
    var E, O, re, be;
    if (m !== void 0)
      return ((O = (E = n()) == null ? void 0 : E.user) == null ? void 0 : O.name) !== void 0 && m.includes((be = (re = n()) == null ? void 0 : re.user) == null ? void 0 : be.name);
  }
  function M() {
    if ($(r()["start-expanded-users"]))
      C(!0);
    else if (v !== void 0)
      try {
        const m = localStorage.getItem(_);
        m === null ? r().expanded !== void 0 && C(r().expanded) : k(a, m ? m === "true" : p(a), !0);
      } catch (m) {
        console.error(m);
      }
    else
      r().expanded !== void 0 ? C(r().expanded) : C(!1);
  }
  function j(m) {
    p(h) && (clearTimeout(p(h)), k(h, null));
    const E = m !== void 0 ? m : !p(a);
    r().animation ? (k(u, E ? "opening" : "closing", !0), E ? (C(!0), k(
      h,
      setTimeout(
        () => {
          k(u, "idle"), k(h, null);
        },
        350
      ),
      !0
    )) : k(
      h,
      setTimeout(
        () => {
          C(!1), k(u, "idle"), k(h, null);
        },
        350
      ),
      !0
    )) : C(E);
  }
  function C(m) {
    if (k(a, m, !0), v !== void 0)
      try {
        localStorage.setItem(_, p(a) ? "true" : "false");
      } catch (E) {
        console.error(E);
      }
    p(a) && p(d) === 0 && k(d, 0.35);
  }
  function g(m) {
    var O, re;
    const E = (re = (O = m.detail) == null ? void 0 : O["expander-card"]) == null ? void 0 : re.data;
    (E == null ? void 0 : E["expander-card-id"]) === r()["expander-card-id"] && (E.action === "open" && !p(a) ? j(!0) : E.action === "close" && p(a) ? j(!1) : E.action === "toggle" && j());
  }
  function q() {
    document.body.removeEventListener("ll-custom", g);
  }
  gi(() => {
    const m = r()["min-width-expanded"], E = r()["max-width-expanded"], O = document.body.offsetWidth;
    return m && E ? r().expanded = O >= m && O <= E : m ? r().expanded = O >= m : E && (r().expanded = O <= E), i() ? C(!0) : M(), document.body.addEventListener("ll-custom", g), q;
  });
  const H = (m) => {
    if (p(s))
      return m.preventDefault(), m.stopImmediatePropagation(), k(s, !1), p(o) && (clearTimeout(p(o)), k(o, null)), !1;
    gr(m.currentTarget, "light"), j();
  }, L = (m) => {
    const E = m.currentTarget;
    E != null && E.classList.contains("title-card-container") && H(m);
  };
  let ee, K = !1, it = 0, We = 0;
  const st = (m) => {
    ee = m.target, it = m.touches[0].clientX, We = m.touches[0].clientY, K = !1;
  }, xn = (m) => {
    const E = m.touches[0].clientX, O = m.touches[0].clientY;
    (Math.abs(E - it) > 10 || Math.abs(O - We) > 10) && (K = !0);
  }, kn = (m) => {
    !K && ee === m.target && r()["title-card-clickable"] && (gr(ee, "light"), j(), k(s, !0), k(
      o,
      window.setTimeout(
        () => {
          k(s, !1), k(o, null);
        },
        100
      ),
      !0
    )), ee = void 0;
  };
  var Sn = {
    get hass() {
      return n();
    },
    set hass(m) {
      n(m), oe();
    },
    get preview() {
      return i();
    },
    set preview(m) {
      i(m), oe();
    },
    get config() {
      return r();
    },
    set config(m = Fn) {
      r(m), oe();
    }
  }, It = $a(), tr = Je(It);
  {
    var xi = (m) => {
      var E = ya(), O = Je(E);
      O.__touchstart = st, O.__touchmove = xn, O.__touchend = kn, O.__click = function(...Te) {
        var $e;
        ($e = r()["title-card-clickable"] ? L : null) == null || $e.apply(this, Te);
      };
      var re = Je(O);
      Ln(re, {
        get hass() {
          return n();
        },
        get preview() {
          return i();
        },
        get config() {
          return r()["title-card"];
        },
        get type() {
          return r()["title-card"].type;
        },
        animation: !1,
        open: !0,
        animationState: "idle",
        get clearCardCss() {
          return r()["clear-children"];
        }
      }), De(O);
      var be = zt(O, 2);
      {
        var Ce = (Te) => {
          var $e = ma();
          $e.__click = H;
          var at = Je($e);
          Le(() => pr(at, "icon", r().icon)), De($e), Le(() => {
            Ge($e, `--overlay-margin:${r()["overlay-margin"] ?? ""}; --button-background:${r()["button-background"] ?? ""}; --header-color:${r()["header-color"] ?? ""};`), ue($e, 1, `header ripple${r()["title-card-button-overlay"] ? " header-overlay" : ""}${p(a) ? " open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq"), Ge(at, `--arrow-color:${r()["arrow-color"] ?? ""}`), ue(at, 1, `ico${p(a) && p(u) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq");
          }), Oe(Te, $e);
        };
        Ct(be, (Te) => {
          p(f) && Te(Ce);
        });
      }
      De(E), Le(() => {
        ue(E, 1, `title-card-header${r()["title-card-button-overlay"] ? "-overlay" : ""}${p(a) ? " open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq"), ue(O, 1, `title-card-container${p(a) ? " open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq"), Ge(O, `--title-padding:${(r()["title-card-padding"] ? r()["title-card-padding"] : "0px") ?? ""};`), yi(O, "role", r()["title-card-clickable"] ? "button" : void 0);
      }), Oe(m, E);
    }, ki = (m) => {
      var E = vr(), O = fr(E);
      {
        var re = (be) => {
          var Ce = wa();
          Ce.__click = H;
          var Te = Je(Ce), $e = Je(Te, !0);
          De(Te);
          var at = zt(Te, 2);
          Le(() => pr(at, "icon", r().icon)), De(Ce), Le(() => {
            ue(Ce, 1, `header${r()["expander-card-background-expanded"] ? "" : " ripple"}${p(a) ? " open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq"), Ge(Ce, `--header-width:100%; --button-background:${r()["button-background"] ?? ""};--header-color:${r()["header-color"] ?? ""};`), ue(Te, 1, `primary title${p(a) ? " open" : " close"}`, "svelte-1jqiztq"), Ks($e, r().title), Ge(at, `--arrow-color:${r()["arrow-color"] ?? ""}`), ue(at, 1, `ico${p(a) && p(u) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq");
          }), Oe(be, Ce);
        };
        Ct(O, (be) => {
          p(f) && be(re);
        });
      }
      Oe(m, E);
    };
    Ct(tr, (m) => {
      r()["title-card"] ? m(xi) : m(ki, !1);
    });
  }
  var nr = zt(tr, 2);
  {
    var Si = (m) => {
      var E = ba(), O = Je(E);
      ta(O, 20, () => r().cards, (re) => re, (re, be) => {
        {
          let Ce = /* @__PURE__ */ Rs(() => p(a) && i());
          Ln(re, {
            get hass() {
              return n();
            },
            get preview() {
              return p(Ce);
            },
            get config() {
              return be;
            },
            get type() {
              return be.type;
            },
            get marginTop() {
              return r()["child-margin-top"];
            },
            get open() {
              return p(a);
            },
            get animation() {
              return r().animation;
            },
            get animationState() {
              return p(u);
            },
            get clearCardCss() {
              return r()["clear-children"];
            }
          });
        }
      }), De(O), De(E), Le(() => {
        ue(E, 1, `children-wrapper ${r().animation ? "animation " + p(u) : ""}${p(a) ? " open" : " close"}`, "svelte-1jqiztq"), Ge(O, `--expander-card-display:${r()["expander-card-display"] ?? ""};
                --gap:${(p(a) && p(u) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""};
                --child-padding:${(p(a) && p(u) !== "closing" ? r()["child-padding"] : "0px") ?? ""};`), ue(O, 1, `children-container${p(a) ? " open" : " close"}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq");
      }), Oe(m, E);
    };
    Ct(nr, (m) => {
      r().cards && m(Si);
    });
  }
  var Ci = zt(nr, 2);
  {
    var Ti = (m) => {
      var E = vr(), O = fr(E);
      ra(O, () => b), Oe(m, E);
    };
    Ct(Ci, (m) => {
      b && m(Ti);
    });
  }
  return De(It), Le(() => {
    ue(It, 1, `expander-card${r().clear ? " clear" : ""}${p(a) ? " open" : " close"} ${p(u)}${r().animation ? " animation " + p(u) : ""}`, "svelte-1jqiztq"), Ge(It, `--expander-card-display:${r()["expander-card-display"] ?? ""};
     --gap:${(p(a) && p(u) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""}; --padding:${r().padding ?? ""};
     --expander-state:${p(a) ?? ""};
     --icon-rotate-degree:${r()["icon-rotate-degree"] ?? ""};
     --card-background:${(p(a) && p(u) !== "closing" && r()["expander-card-background-expanded"] ? r()["expander-card-background-expanded"] : r()["expander-card-background"]) ?? ""};
     --background-animation-duration:${p(d) ?? ""}s;
    `);
  }), Oe(e, It), Jn(Sn);
}
Vs(["touchstart", "touchmove", "touchend", "click"]);
customElements.define("expander-card", $i(xa, { hass: {}, preview: {}, config: {} }, [], [], !0, (e) => class extends e {
  constructor() {
    super(...arguments);
    // re-declare props used in customClass.
    P(this, "config");
  }
  static async getConfigElement() {
    return await Vi(), document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:expander-card",
      title: "Expander Card",
      cards: []
    };
  }
  setConfig(n = {}) {
    this.config = { ...Fn, ...n };
  }
}));
const ka = "3.2.0";
console.info(
  `%c  Expander-Card 
%c Version ${ka}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "expander-card",
  name: "Expander Card",
  preview: !0,
  description: "Expander card"
});
export {
  xa as default
};
//# sourceMappingURL=expander-card.js.map
