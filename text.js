var gc = e => {
    throw TypeError(e)
}
;
var ul = (e, t, n) => t.has(e) || gc("Cannot " + n);
var N = (e, t, n) => (ul(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? gc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , U = (e, t, n, r) => (ul(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ne = (e, t, n) => (ul(e, t, "access private method"),
n);
var hi = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function wg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function xf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var wf = {
    exports: {}
}
  , Rs = {}
  , Sf = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri = Symbol.for("react.element")
  , Sg = Symbol.for("react.portal")
  , bg = Symbol.for("react.fragment")
  , Cg = Symbol.for("react.strict_mode")
  , Eg = Symbol.for("react.profiler")
  , kg = Symbol.for("react.provider")
  , Ng = Symbol.for("react.context")
  , Pg = Symbol.for("react.forward_ref")
  , Tg = Symbol.for("react.suspense")
  , jg = Symbol.for("react.memo")
  , Rg = Symbol.for("react.lazy")
  , vc = Symbol.iterator;
function Mg(e) {
    return e === null || typeof e != "object" ? null : (e = vc && e[vc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var bf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Cf = Object.assign
  , Ef = {};
function to(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ef,
    this.updater = n || bf
}
to.prototype.isReactComponent = {};
to.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
to.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function kf() {}
kf.prototype = to.prototype;
function Ja(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ef,
    this.updater = n || bf
}
var eu = Ja.prototype = new kf;
eu.constructor = Ja;
Cf(eu, to.prototype);
eu.isPureReactComponent = !0;
var yc = Array.isArray
  , Nf = Object.prototype.hasOwnProperty
  , tu = {
    current: null
}
  , Pf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Tf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Nf.call(t, r) && !Pf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ri,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: tu.current
    }
}
function _g(e, t) {
    return {
        $$typeof: ri,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function nu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ri
}
function Og(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var xc = /\/+/g;
function cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Og("" + e.key) : t.toString(36)
}
function Di(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ri:
            case Sg:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + cl(s, 0) : r,
        yc(o) ? (n = "",
        e != null && (n = e.replace(xc, "$&/") + "/"),
        Di(o, t, n, "", function(u) {
            return u
        })) : o != null && (nu(o) && (o = _g(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(xc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    yc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + cl(i, l);
            s += Di(i, t, n, a, o)
        }
    else if (a = Mg(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + cl(i, l++),
            s += Di(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function mi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Di(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Ag(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ie = {
    current: null
}
  , zi = {
    transition: null
}
  , Lg = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: tu
};
function jf() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: mi,
    forEach: function(e, t, n) {
        mi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return mi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return mi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = to;
Y.Fragment = bg;
Y.Profiler = Eg;
Y.PureComponent = Ja;
Y.StrictMode = Cg;
Y.Suspense = Tg;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
Y.act = jf;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Cf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = tu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Nf.call(t, a) && !Pf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ri,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: Ng,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: kg,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Tf;
Y.createFactory = function(e) {
    var t = Tf.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: Pg,
        render: e
    }
}
;
Y.isValidElement = nu;
Y.lazy = function(e) {
    return {
        $$typeof: Rg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ag
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: jg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = zi.transition;
    zi.transition = {};
    try {
        e()
    } finally {
        zi.transition = t
    }
}
;
Y.unstable_act = jf;
Y.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Ie.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Ie.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Ie.current.useRef(e)
}
;
Y.useState = function(e) {
    return Ie.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Ie.current.useTransition()
}
;
Y.version = "18.3.1";
Sf.exports = Y;
var w = Sf.exports;
const M = xf(w)
  , Rf = wg({
    __proto__: null,
    default: M
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ig = w
  , Dg = Symbol.for("react.element")
  , zg = Symbol.for("react.fragment")
  , Fg = Object.prototype.hasOwnProperty
  , $g = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Bg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Fg.call(t, r) && !Bg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Dg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: $g.current
    }
}
Rs.Fragment = zg;
Rs.jsx = Mf;
Rs.jsxs = Mf;
wf.exports = Rs;
var d = wf.exports
  , _f = {
    exports: {}
}
  , Ze = {}
  , Of = {
    exports: {}
}
  , Af = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var L = P.length;
        P.push(T);
        e: for (; 0 < L; ) {
            var V = L - 1 >>> 1
              , z = P[V];
            if (0 < o(z, T))
                P[V] = T,
                P[L] = z,
                L = V;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , L = P.pop();
        if (L !== T) {
            P[0] = L;
            e: for (var V = 0, z = P.length, K = z >>> 1; V < K; ) {
                var G = 2 * (V + 1) - 1
                  , me = P[G]
                  , ke = G + 1
                  , J = P[ke];
                if (0 > o(me, L))
                    ke < z && 0 > o(J, me) ? (P[V] = J,
                    P[ke] = L,
                    V = ke) : (P[V] = me,
                    P[G] = L,
                    V = G);
                else if (ke < z && 0 > o(J, L))
                    P[V] = J,
                    P[ke] = L,
                    V = ke;
                else
                    break e
            }
        }
        return T
    }
    function o(P, T) {
        var L = P.sortIndex - T.sortIndex;
        return L !== 0 ? L : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , p = null
      , m = 3
      , f = !1
      , S = !1
      , y = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= P)
                r(u),
                T.sortIndex = T.expirationTime,
                t(a, T);
            else
                break;
            T = n(u)
        }
    }
    function b(P) {
        if (y = !1,
        v(P),
        !S)
            if (n(a) !== null)
                S = !0,
                $(C);
            else {
                var T = n(u);
                T !== null && H(b, T.startTime - P)
            }
    }
    function C(P, T) {
        S = !1,
        y && (y = !1,
        g(j),
        j = -1),
        f = !0;
        var L = m;
        try {
            for (v(T),
            p = n(a); p !== null && (!(p.expirationTime > T) || P && !F()); ) {
                var V = p.callback;
                if (typeof V == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var z = V(p.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof z == "function" ? p.callback = z : p === n(a) && r(a),
                    v(T)
                } else
                    r(a);
                p = n(a)
            }
            if (p !== null)
                var K = !0;
            else {
                var G = n(u);
                G !== null && H(b, G.startTime - T),
                K = !1
            }
            return K
        } finally {
            p = null,
            m = L,
            f = !1
        }
    }
    var E = !1
      , k = null
      , j = -1
      , O = 5
      , _ = -1;
    function F() {
        return !(e.unstable_now() - _ < O)
    }
    function D() {
        if (k !== null) {
            var P = e.unstable_now();
            _ = P;
            var T = !0;
            try {
                T = k(!0, P)
            } finally {
                T ? Q() : (E = !1,
                k = null)
            }
        } else
            E = !1
    }
    var Q;
    if (typeof h == "function")
        Q = function() {
            h(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , q = A.port2;
        A.port1.onmessage = D,
        Q = function() {
            q.postMessage(null)
        }
    } else
        Q = function() {
            x(D, 0)
        }
        ;
    function $(P) {
        k = P,
        E || (E = !0,
        Q())
    }
    function H(P, T) {
        j = x(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || f || (S = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(P) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = m
        }
        var L = m;
        m = T;
        try {
            return P()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var L = m;
        m = P;
        try {
            return T()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, T, L) {
        var V = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? V + L : V) : L = V,
        P) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = L + z,
        P = {
            id: c++,
            callback: T,
            priorityLevel: P,
            startTime: L,
            expirationTime: z,
            sortIndex: -1
        },
        L > V ? (P.sortIndex = L,
        t(u, P),
        n(a) === null && P === n(u) && (y ? (g(j),
        j = -1) : y = !0,
        H(b, L - V))) : (P.sortIndex = z,
        t(a, P),
        S || f || (S = !0,
        $(C))),
        P
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(P) {
        var T = m;
        return function() {
            var L = m;
            m = T;
            try {
                return P.apply(this, arguments)
            } finally {
                m = L
            }
        }
    }
}
)(Af);
Of.exports = Af;
var Ug = Of.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vg = w
  , Xe = Ug;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lf = new Set
  , Ao = {};
function ar(e, t) {
    Qr(e, t),
    Qr(e + "Capture", t)
}
function Qr(e, t) {
    for (Ao[e] = t,
    e = 0; e < t.length; e++)
        Lf.add(t[e])
}
var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Hl = Object.prototype.hasOwnProperty
  , Hg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , wc = {}
  , Sc = {};
function Wg(e) {
    return Hl.call(Sc, e) ? !0 : Hl.call(wc, e) ? !1 : Hg.test(e) ? Sc[e] = !0 : (wc[e] = !0,
    !1)
}
function Qg(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Kg(e, t, n, r) {
    if (t === null || typeof t > "u" || Qg(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function De(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ee[e] = new De(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ee[t] = new De(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ee[e] = new De(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ee[e] = new De(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ee[e] = new De(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ee[e] = new De(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ee[e] = new De(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ee[e] = new De(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ee[e] = new De(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ru = /[\-:]([a-z])/g;
function ou(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ru, ou);
    Ee[t] = new De(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ru, ou);
    Ee[t] = new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ru, ou);
    Ee[t] = new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ee[e] = new De(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref = new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ee[e] = new De(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function iu(e, t, n, r) {
    var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kg(t, n, o, r) && (n = null),
    r || o === null ? Wg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qt = Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , gi = Symbol.for("react.element")
  , vr = Symbol.for("react.portal")
  , yr = Symbol.for("react.fragment")
  , su = Symbol.for("react.strict_mode")
  , Wl = Symbol.for("react.profiler")
  , If = Symbol.for("react.provider")
  , Df = Symbol.for("react.context")
  , lu = Symbol.for("react.forward_ref")
  , Ql = Symbol.for("react.suspense")
  , Kl = Symbol.for("react.suspense_list")
  , au = Symbol.for("react.memo")
  , an = Symbol.for("react.lazy")
  , zf = Symbol.for("react.offscreen")
  , bc = Symbol.iterator;
function uo(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, dl;
function wo(e) {
    if (dl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            dl = t && t[1] || ""
        }
    return `
` + dl + e
}
var fl = !1;
function pl(e, t) {
    if (!e || fl)
        return "";
    fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        fl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wo(e) : ""
}
function Yg(e) {
    switch (e.tag) {
    case 5:
        return wo(e.type);
    case 16:
        return wo("Lazy");
    case 13:
        return wo("Suspense");
    case 19:
        return wo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = pl(e.type, !1),
        e;
    case 11:
        return e = pl(e.type.render, !1),
        e;
    case 1:
        return e = pl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Yl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case yr:
        return "Fragment";
    case vr:
        return "Portal";
    case Wl:
        return "Profiler";
    case su:
        return "StrictMode";
    case Ql:
        return "Suspense";
    case Kl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Df:
            return (e.displayName || "Context") + ".Consumer";
        case If:
            return (e._context.displayName || "Context") + ".Provider";
        case lu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case au:
            return t = e.displayName || null,
            t !== null ? t : Yl(e.type) || "Memo";
        case an:
            t = e._payload,
            e = e._init;
            try {
                return Yl(e(t))
            } catch {}
        }
    return null
}
function Gg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Yl(t);
    case 8:
        return t === su ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Tn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function qg(e) {
    var t = Ff(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function vi(e) {
    e._valueTracker || (e._valueTracker = qg(e))
}
function $f(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ff(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Gl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Cc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Tn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Bf(e, t) {
    t = t.checked,
    t != null && iu(e, "checked", t, !1)
}
function ql(e, t) {
    Bf(e, t);
    var n = Tn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Xl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xl(e, t.type, Tn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ec(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Xl(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var So = Array.isArray;
function jr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Tn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Zl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function kc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (So(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Tn(n)
    }
}
function Uf(e, t) {
    var n = Tn(t.value)
      , r = Tn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Nc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Vf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var yi, Hf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (yi = yi || document.createElement("div"),
        yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = yi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Lo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Eo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Xg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Eo).forEach(function(e) {
    Xg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Eo[t] = Eo[e]
    })
});
function Wf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Eo.hasOwnProperty(e) && Eo[e] ? ("" + t).trim() : t + "px"
}
function Qf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Wf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Zg = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ea(e, t) {
    if (t) {
        if (Zg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function ta(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var na = null;
function uu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ra = null
  , Rr = null
  , Mr = null;
function Pc(e) {
    if (e = si(e)) {
        if (typeof ra != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Ls(t),
        ra(e.stateNode, e.type, t))
    }
}
function Kf(e) {
    Rr ? Mr ? Mr.push(e) : Mr = [e] : Rr = e
}
function Yf() {
    if (Rr) {
        var e = Rr
          , t = Mr;
        if (Mr = Rr = null,
        Pc(e),
        t)
            for (e = 0; e < t.length; e++)
                Pc(t[e])
    }
}
function Gf(e, t) {
    return e(t)
}
function qf() {}
var hl = !1;
function Xf(e, t, n) {
    if (hl)
        return e(t, n);
    hl = !0;
    try {
        return Gf(e, t, n)
    } finally {
        hl = !1,
        (Rr !== null || Mr !== null) && (qf(),
        Yf())
    }
}
function Io(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ls(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var oa = !1;
if (Ht)
    try {
        var co = {};
        Object.defineProperty(co, "passive", {
            get: function() {
                oa = !0
            }
        }),
        window.addEventListener("test", co, co),
        window.removeEventListener("test", co, co)
    } catch {
        oa = !1
    }
function Jg(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var ko = !1
  , Ji = null
  , es = !1
  , ia = null
  , ev = {
    onError: function(e) {
        ko = !0,
        Ji = e
    }
};
function tv(e, t, n, r, o, i, s, l, a) {
    ko = !1,
    Ji = null,
    Jg.apply(ev, arguments)
}
function nv(e, t, n, r, o, i, s, l, a) {
    if (tv.apply(this, arguments),
    ko) {
        if (ko) {
            var u = Ji;
            ko = !1,
            Ji = null
        } else
            throw Error(R(198));
        es || (es = !0,
        ia = u)
    }
}
function ur(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Zf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Tc(e) {
    if (ur(e) !== e)
        throw Error(R(188))
}
function rv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ur(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Tc(o),
                    e;
                if (i === r)
                    return Tc(o),
                    t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function Jf(e) {
    return e = rv(e),
    e !== null ? ep(e) : null
}
function ep(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ep(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var tp = Xe.unstable_scheduleCallback
  , jc = Xe.unstable_cancelCallback
  , ov = Xe.unstable_shouldYield
  , iv = Xe.unstable_requestPaint
  , he = Xe.unstable_now
  , sv = Xe.unstable_getCurrentPriorityLevel
  , cu = Xe.unstable_ImmediatePriority
  , np = Xe.unstable_UserBlockingPriority
  , ts = Xe.unstable_NormalPriority
  , lv = Xe.unstable_LowPriority
  , rp = Xe.unstable_IdlePriority
  , Ms = null
  , _t = null;
function av(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
        try {
            _t.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var xt = Math.clz32 ? Math.clz32 : dv
  , uv = Math.log
  , cv = Math.LN2;
function dv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (uv(e) / cv | 0) | 0
}
var xi = 64
  , wi = 4194304;
function bo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = bo(l) : (i &= s,
        i !== 0 && (r = bo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = bo(s) : i !== 0 && (r = bo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - xt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function fv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function pv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - xt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = fv(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function sa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function op() {
    var e = xi;
    return xi <<= 1,
    !(xi & 4194240) && (xi = 64),
    e
}
function ml(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function oi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - xt(t),
    e[t] = n
}
function hv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - xt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function du(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - xt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function ip(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var sp, fu, lp, ap, up, la = !1, Si = [], wn = null, Sn = null, bn = null, Do = new Map, zo = new Map, cn = [], mv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        wn = null;
        break;
    case "dragenter":
    case "dragleave":
        Sn = null;
        break;
    case "mouseover":
    case "mouseout":
        bn = null;
        break;
    case "pointerover":
    case "pointerout":
        Do.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zo.delete(t.pointerId)
    }
}
function fo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = si(t),
    t !== null && fu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function gv(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return wn = fo(wn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Sn = fo(Sn, e, t, n, r, o),
        !0;
    case "mouseover":
        return bn = fo(bn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Do.set(i, fo(Do.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        zo.set(i, fo(zo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function cp(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = ur(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Zf(n),
                t !== null) {
                    e.blockedOn = t,
                    up(e.priority, function() {
                        lp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Fi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            na = r,
            n.target.dispatchEvent(r),
            na = null
        } else
            return t = si(n),
            t !== null && fu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Mc(e, t, n) {
    Fi(e) && n.delete(t)
}
function vv() {
    la = !1,
    wn !== null && Fi(wn) && (wn = null),
    Sn !== null && Fi(Sn) && (Sn = null),
    bn !== null && Fi(bn) && (bn = null),
    Do.forEach(Mc),
    zo.forEach(Mc)
}
function po(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    la || (la = !0,
    Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, vv)))
}
function Fo(e) {
    function t(o) {
        return po(o, e)
    }
    if (0 < Si.length) {
        po(Si[0], e);
        for (var n = 1; n < Si.length; n++) {
            var r = Si[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wn !== null && po(wn, e),
    Sn !== null && po(Sn, e),
    bn !== null && po(bn, e),
    Do.forEach(t),
    zo.forEach(t),
    n = 0; n < cn.length; n++)
        r = cn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && (n = cn[0],
    n.blockedOn === null); )
        cp(n),
        n.blockedOn === null && cn.shift()
}
var _r = qt.ReactCurrentBatchConfig
  , rs = !0;
function yv(e, t, n, r) {
    var o = ee
      , i = _r.transition;
    _r.transition = null;
    try {
        ee = 1,
        pu(e, t, n, r)
    } finally {
        ee = o,
        _r.transition = i
    }
}
function xv(e, t, n, r) {
    var o = ee
      , i = _r.transition;
    _r.transition = null;
    try {
        ee = 4,
        pu(e, t, n, r)
    } finally {
        ee = o,
        _r.transition = i
    }
}
function pu(e, t, n, r) {
    if (rs) {
        var o = aa(e, t, n, r);
        if (o === null)
            kl(e, t, r, os, n),
            Rc(e, r);
        else if (gv(o, e, t, n, r))
            r.stopPropagation();
        else if (Rc(e, r),
        t & 4 && -1 < mv.indexOf(e)) {
            for (; o !== null; ) {
                var i = si(o);
                if (i !== null && sp(i),
                i = aa(e, t, n, r),
                i === null && kl(e, t, r, os, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            kl(e, t, r, null, n)
    }
}
var os = null;
function aa(e, t, n, r) {
    if (os = null,
    e = uu(r),
    e = Wn(e),
    e !== null)
        if (t = ur(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Zf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return os = e,
    null
}
function dp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (sv()) {
        case cu:
            return 1;
        case np:
            return 4;
        case ts:
        case lv:
            return 16;
        case rp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var vn = null
  , hu = null
  , $i = null;
function fp() {
    if ($i)
        return $i;
    var e, t = hu, n = t.length, r, o = "value"in vn ? vn.value : vn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return $i = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Bi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function bi() {
    return !0
}
function _c() {
    return !1
}
function Je(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bi : _c,
        this.isPropagationStopped = _c,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = bi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = bi)
        },
        persist: function() {},
        isPersistent: bi
    }),
    t
}
var no = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, mu = Je(no), ii = de({}, no, {
    view: 0,
    detail: 0
}), wv = Je(ii), gl, vl, ho, _s = de({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ho && (ho && e.type === "mousemove" ? (gl = e.screenX - ho.screenX,
        vl = e.screenY - ho.screenY) : vl = gl = 0,
        ho = e),
        gl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : vl
    }
}), Oc = Je(_s), Sv = de({}, _s, {
    dataTransfer: 0
}), bv = Je(Sv), Cv = de({}, ii, {
    relatedTarget: 0
}), yl = Je(Cv), Ev = de({}, no, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), kv = Je(Ev), Nv = de({}, no, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Pv = Je(Nv), Tv = de({}, no, {
    data: 0
}), Ac = Je(Tv), jv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function _v(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mv[e]) ? !!t[e] : !1
}
function gu() {
    return _v
}
var Ov = de({}, ii, {
    key: function(e) {
        if (e.key) {
            var t = jv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Bi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function(e) {
        return e.type === "keypress" ? Bi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Av = Je(Ov)
  , Lv = de({}, _s, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Lc = Je(Lv)
  , Iv = de({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu
})
  , Dv = Je(Iv)
  , zv = de({}, no, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Fv = Je(zv)
  , $v = de({}, _s, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Bv = Je($v)
  , Uv = [9, 13, 27, 32]
  , vu = Ht && "CompositionEvent"in window
  , No = null;
Ht && "documentMode"in document && (No = document.documentMode);
var Vv = Ht && "TextEvent"in window && !No
  , pp = Ht && (!vu || No && 8 < No && 11 >= No)
  , Ic = " "
  , Dc = !1;
function hp(e, t) {
    switch (e) {
    case "keyup":
        return Uv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var xr = !1;
function Hv(e, t) {
    switch (e) {
    case "compositionend":
        return mp(t);
    case "keypress":
        return t.which !== 32 ? null : (Dc = !0,
        Ic);
    case "textInput":
        return e = t.data,
        e === Ic && Dc ? null : e;
    default:
        return null
    }
}
function Wv(e, t) {
    if (xr)
        return e === "compositionend" || !vu && hp(e, t) ? (e = fp(),
        $i = hu = vn = null,
        xr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return pp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Qv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qv[e.type] : t === "textarea"
}
function gp(e, t, n, r) {
    Kf(r),
    t = is(t, "onChange"),
    0 < t.length && (n = new mu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Po = null
  , $o = null;
function Kv(e) {
    Pp(e, 0)
}
function Os(e) {
    var t = br(e);
    if ($f(t))
        return e
}
function Yv(e, t) {
    if (e === "change")
        return t
}
var vp = !1;
if (Ht) {
    var xl;
    if (Ht) {
        var wl = "oninput"in document;
        if (!wl) {
            var Fc = document.createElement("div");
            Fc.setAttribute("oninput", "return;"),
            wl = typeof Fc.oninput == "function"
        }
        xl = wl
    } else
        xl = !1;
    vp = xl && (!document.documentMode || 9 < document.documentMode)
}
function $c() {
    Po && (Po.detachEvent("onpropertychange", yp),
    $o = Po = null)
}
function yp(e) {
    if (e.propertyName === "value" && Os($o)) {
        var t = [];
        gp(t, $o, e, uu(e)),
        Xf(Kv, t)
    }
}
function Gv(e, t, n) {
    e === "focusin" ? ($c(),
    Po = t,
    $o = n,
    Po.attachEvent("onpropertychange", yp)) : e === "focusout" && $c()
}
function qv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Os($o)
}
function Xv(e, t) {
    if (e === "click")
        return Os(t)
}
function Zv(e, t) {
    if (e === "input" || e === "change")
        return Os(t)
}
function Jv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var bt = typeof Object.is == "function" ? Object.is : Jv;
function Bo(e, t) {
    if (bt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Hl.call(t, o) || !bt(e[o], t[o]))
            return !1
    }
    return !0
}
function Bc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Uc(e, t) {
    var n = Bc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Bc(n)
    }
}
function xp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function wp() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Zi(e.document)
    }
    return t
}
function yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ey(e) {
    var t = wp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xp(n.ownerDocument.documentElement, n)) {
        if (r !== null && yu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Uc(n, i);
                var s = Uc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ty = Ht && "documentMode"in document && 11 >= document.documentMode
  , wr = null
  , ua = null
  , To = null
  , ca = !1;
function Vc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ca || wr == null || wr !== Zi(r) || (r = wr,
    "selectionStart"in r && yu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    To && Bo(To, r) || (To = r,
    r = is(ua, "onSelect"),
    0 < r.length && (t = new mu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = wr)))
}
function Ci(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Sr = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd")
}
  , Sl = {}
  , Sp = {};
Ht && (Sp = document.createElement("div").style,
"AnimationEvent"in window || (delete Sr.animationend.animation,
delete Sr.animationiteration.animation,
delete Sr.animationstart.animation),
"TransitionEvent"in window || delete Sr.transitionend.transition);
function As(e) {
    if (Sl[e])
        return Sl[e];
    if (!Sr[e])
        return e;
    var t = Sr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Sp)
            return Sl[e] = t[n];
    return e
}
var bp = As("animationend")
  , Cp = As("animationiteration")
  , Ep = As("animationstart")
  , kp = As("transitionend")
  , Np = new Map
  , Hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function In(e, t) {
    Np.set(e, t),
    ar(t, [e])
}
for (var bl = 0; bl < Hc.length; bl++) {
    var Cl = Hc[bl]
      , ny = Cl.toLowerCase()
      , ry = Cl[0].toUpperCase() + Cl.slice(1);
    In(ny, "on" + ry)
}
In(bp, "onAnimationEnd");
In(Cp, "onAnimationIteration");
In(Ep, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(kp, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , oy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));
function Wc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    nv(r, t, void 0, e),
    e.currentTarget = null
}
function Pp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Wc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Wc(o, l, u),
                    i = a
                }
        }
    }
    if (es)
        throw e = ia,
        es = !1,
        ia = null,
        e
}
function ie(e, t) {
    var n = t[ma];
    n === void 0 && (n = t[ma] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Tp(t, e, 2, !1),
    n.add(r))
}
function El(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Tp(n, e, r, t)
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
    if (!e[Ei]) {
        e[Ei] = !0,
        Lf.forEach(function(n) {
            n !== "selectionchange" && (oy.has(n) || El(n, !1, e),
            El(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ei] || (t[Ei] = !0,
        El("selectionchange", !1, t))
    }
}
function Tp(e, t, n, r) {
    switch (dp(t)) {
    case 1:
        var o = yv;
        break;
    case 4:
        o = xv;
        break;
    default:
        o = pu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !oa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function kl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Wn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Xf(function() {
        var u = i
          , c = uu(n)
          , p = [];
        e: {
            var m = Np.get(e);
            if (m !== void 0) {
                var f = mu
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Bi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    f = Av;
                    break;
                case "focusin":
                    S = "focus",
                    f = yl;
                    break;
                case "focusout":
                    S = "blur",
                    f = yl;
                    break;
                case "beforeblur":
                case "afterblur":
                    f = yl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    f = Oc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    f = bv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    f = Dv;
                    break;
                case bp:
                case Cp:
                case Ep:
                    f = kv;
                    break;
                case kp:
                    f = Fv;
                    break;
                case "scroll":
                    f = wv;
                    break;
                case "wheel":
                    f = Bv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    f = Pv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    f = Lc
                }
                var y = (t & 4) !== 0
                  , x = !y && e === "scroll"
                  , g = y ? m !== null ? m + "Capture" : null : m;
                y = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var b = v.stateNode;
                    if (v.tag === 5 && b !== null && (v = b,
                    g !== null && (b = Io(h, g),
                    b != null && y.push(Vo(h, b, v)))),
                    x)
                        break;
                    h = h.return
                }
                0 < y.length && (m = new f(m,S,null,n,c),
                p.push({
                    event: m,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                f = e === "mouseout" || e === "pointerout",
                m && n !== na && (S = n.relatedTarget || n.fromElement) && (Wn(S) || S[Wt]))
                    break e;
                if ((f || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window,
                f ? (S = n.relatedTarget || n.toElement,
                f = u,
                S = S ? Wn(S) : null,
                S !== null && (x = ur(S),
                S !== x || S.tag !== 5 && S.tag !== 6) && (S = null)) : (f = null,
                S = u),
                f !== S)) {
                    if (y = Oc,
                    b = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Lc,
                    b = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    x = f == null ? m : br(f),
                    v = S == null ? m : br(S),
                    m = new y(b,h + "leave",f,n,c),
                    m.target = x,
                    m.relatedTarget = v,
                    b = null,
                    Wn(c) === u && (y = new y(g,h + "enter",S,n,c),
                    y.target = v,
                    y.relatedTarget = x,
                    b = y),
                    x = b,
                    f && S)
                        t: {
                            for (y = f,
                            g = S,
                            h = 0,
                            v = y; v; v = gr(v))
                                h++;
                            for (v = 0,
                            b = g; b; b = gr(b))
                                v++;
                            for (; 0 < h - v; )
                                y = gr(y),
                                h--;
                            for (; 0 < v - h; )
                                g = gr(g),
                                v--;
                            for (; h--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = gr(y),
                                g = gr(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    f !== null && Qc(p, m, f, y, !1),
                    S !== null && x !== null && Qc(p, x, S, y, !0)
                }
            }
            e: {
                if (m = u ? br(u) : window,
                f = m.nodeName && m.nodeName.toLowerCase(),
                f === "select" || f === "input" && m.type === "file")
                    var C = Yv;
                else if (zc(m))
                    if (vp)
                        C = Zv;
                    else {
                        C = qv;
                        var E = Gv
                    }
                else
                    (f = m.nodeName) && f.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Xv);
                if (C && (C = C(e, u))) {
                    gp(p, C, n, c);
                    break e
                }
                E && E(e, m, u),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && Xl(m, "number", m.value)
            }
            switch (E = u ? br(u) : window,
            e) {
            case "focusin":
                (zc(E) || E.contentEditable === "true") && (wr = E,
                ua = u,
                To = null);
                break;
            case "focusout":
                To = ua = wr = null;
                break;
            case "mousedown":
                ca = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ca = !1,
                Vc(p, n, c);
                break;
            case "selectionchange":
                if (ty)
                    break;
            case "keydown":
            case "keyup":
                Vc(p, n, c)
            }
            var k;
            if (vu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                xr ? hp(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (pp && n.locale !== "ko" && (xr || j !== "onCompositionStart" ? j === "onCompositionEnd" && xr && (k = fp()) : (vn = c,
            hu = "value"in vn ? vn.value : vn.textContent,
            xr = !0)),
            E = is(u, j),
            0 < E.length && (j = new Ac(j,e,null,n,c),
            p.push({
                event: j,
                listeners: E
            }),
            k ? j.data = k : (k = mp(n),
            k !== null && (j.data = k)))),
            (k = Vv ? Hv(e, n) : Wv(e, n)) && (u = is(u, "onBeforeInput"),
            0 < u.length && (c = new Ac("onBeforeInput","beforeinput",null,n,c),
            p.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        Pp(p, t)
    })
}
function Vo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Io(e, n),
        i != null && r.unshift(Vo(e, i, o)),
        i = Io(e, t),
        i != null && r.push(Vo(e, i, o))),
        e = e.return
    }
    return r
}
function gr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Qc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Io(n, i),
        a != null && s.unshift(Vo(n, a, l))) : o || (a = Io(n, i),
        a != null && s.push(Vo(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var iy = /\r\n?/g
  , sy = /\u0000|\uFFFD/g;
function Kc(e) {
    return (typeof e == "string" ? e : "" + e).replace(iy, `
`).replace(sy, "")
}
function ki(e, t, n) {
    if (t = Kc(t),
    Kc(e) !== t && n)
        throw Error(R(425))
}
function ss() {}
var da = null
  , fa = null;
function pa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ha = typeof setTimeout == "function" ? setTimeout : void 0
  , ly = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yc = typeof Promise == "function" ? Promise : void 0
  , ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yc < "u" ? function(e) {
    return Yc.resolve(null).then(e).catch(uy)
}
: ha;
function uy(e) {
    setTimeout(function() {
        throw e
    })
}
function Nl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Fo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Fo(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Gc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ro = Math.random().toString(36).slice(2)
  , Mt = "__reactFiber$" + ro
  , Ho = "__reactProps$" + ro
  , Wt = "__reactContainer$" + ro
  , ma = "__reactEvents$" + ro
  , cy = "__reactListeners$" + ro
  , dy = "__reactHandles$" + ro;
function Wn(e) {
    var t = e[Mt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Wt] || n[Mt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Gc(e); e !== null; ) {
                    if (n = e[Mt])
                        return n;
                    e = Gc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function si(e) {
    return e = e[Mt] || e[Wt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function br(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Ls(e) {
    return e[Ho] || null
}
var ga = []
  , Cr = -1;
function Dn(e) {
    return {
        current: e
    }
}
function se(e) {
    0 > Cr || (e.current = ga[Cr],
    ga[Cr] = null,
    Cr--)
}
function ne(e, t) {
    Cr++,
    ga[Cr] = e.current,
    e.current = t
}
var jn = {}
  , Me = Dn(jn)
  , Be = Dn(!1)
  , nr = jn;
function Kr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ue(e) {
    return e = e.childContextTypes,
    e != null
}
function ls() {
    se(Be),
    se(Me)
}
function qc(e, t, n) {
    if (Me.current !== jn)
        throw Error(R(168));
    ne(Me, t),
    ne(Be, n)
}
function jp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(R(108, Gg(e) || "Unknown", o));
    return de({}, n, r)
}
function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn,
    nr = Me.current,
    ne(Me, e),
    ne(Be, Be.current),
    !0
}
function Xc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = jp(e, t, nr),
    r.__reactInternalMemoizedMergedChildContext = e,
    se(Be),
    se(Me),
    ne(Me, e)) : se(Be),
    ne(Be, n)
}
var Ft = null
  , Is = !1
  , Pl = !1;
function Rp(e) {
    Ft === null ? Ft = [e] : Ft.push(e)
}
function fy(e) {
    Is = !0,
    Rp(e)
}
function zn() {
    if (!Pl && Ft !== null) {
        Pl = !0;
        var e = 0
          , t = ee;
        try {
            var n = Ft;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ft = null,
            Is = !1
        } catch (o) {
            throw Ft !== null && (Ft = Ft.slice(e + 1)),
            tp(cu, zn),
            o
        } finally {
            ee = t,
            Pl = !1
        }
    }
    return null
}
var Er = []
  , kr = 0
  , us = null
  , cs = 0
  , nt = []
  , rt = 0
  , rr = null
  , Bt = 1
  , Ut = "";
function Vn(e, t) {
    Er[kr++] = cs,
    Er[kr++] = us,
    us = e,
    cs = t
}
function Mp(e, t, n) {
    nt[rt++] = Bt,
    nt[rt++] = Ut,
    nt[rt++] = rr,
    rr = e;
    var r = Bt;
    e = Ut;
    var o = 32 - xt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - xt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Bt = 1 << 32 - xt(t) + o | n << o | r,
        Ut = i + e
    } else
        Bt = 1 << i | n << o | r,
        Ut = e
}
function xu(e) {
    e.return !== null && (Vn(e, 1),
    Mp(e, 1, 0))
}
function wu(e) {
    for (; e === us; )
        us = Er[--kr],
        Er[kr] = null,
        cs = Er[--kr],
        Er[kr] = null;
    for (; e === rr; )
        rr = nt[--rt],
        nt[rt] = null,
        Ut = nt[--rt],
        nt[rt] = null,
        Bt = nt[--rt],
        nt[rt] = null
}
var Ge = null
  , Ye = null
  , ae = !1
  , yt = null;
function _p(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Zc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = rr !== null ? {
            id: Bt,
            overflow: Ut
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function va(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ya(e) {
    if (ae) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!Zc(e, t)) {
                if (va(e))
                    throw Error(R(418));
                t = Cn(n.nextSibling);
                var r = Ge;
                t && Zc(e, t) ? _p(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                Ge = e)
            }
        } else {
            if (va(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            Ge = e
        }
    }
}
function Jc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function Ni(e) {
    if (e !== Ge)
        return !1;
    if (!ae)
        return Jc(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !pa(e.type, e.memoizedProps)),
    t && (t = Ye)) {
        if (va(e))
            throw Op(),
            Error(R(418));
        for (; t; )
            _p(e, t),
            t = Cn(t.nextSibling)
    }
    if (Jc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Ge ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function Op() {
    for (var e = Ye; e; )
        e = Cn(e.nextSibling)
}
function Yr() {
    Ye = Ge = null,
    ae = !1
}
function Su(e) {
    yt === null ? yt = [e] : yt.push(e)
}
var py = qt.ReactCurrentBatchConfig;
function mo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Pi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ed(e) {
    var t = e._init;
    return t(e._payload)
}
function Ap(e) {
    function t(g, h) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [h],
            g.flags |= 16) : v.push(h)
        }
    }
    function n(g, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function o(g, h) {
        return g = Pn(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, h, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < h ? (g.flags |= 2,
        h) : v) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, h, v, b) {
        return h === null || h.tag !== 6 ? (h = Al(v, g.mode, b),
        h.return = g,
        h) : (h = o(h, v),
        h.return = g,
        h)
    }
    function a(g, h, v, b) {
        var C = v.type;
        return C === yr ? c(g, h, v.props.children, b, v.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && ed(C) === h.type) ? (b = o(h, v.props),
        b.ref = mo(g, h, v),
        b.return = g,
        b) : (b = Yi(v.type, v.key, v.props, null, g.mode, b),
        b.ref = mo(g, h, v),
        b.return = g,
        b)
    }
    function u(g, h, v, b) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Ll(v, g.mode, b),
        h.return = g,
        h) : (h = o(h, v.children || []),
        h.return = g,
        h)
    }
    function c(g, h, v, b, C) {
        return h === null || h.tag !== 7 ? (h = tr(v, g.mode, b, C),
        h.return = g,
        h) : (h = o(h, v),
        h.return = g,
        h)
    }
    function p(g, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Al("" + h, g.mode, v),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case gi:
                return v = Yi(h.type, h.key, h.props, null, g.mode, v),
                v.ref = mo(g, null, h),
                v.return = g,
                v;
            case vr:
                return h = Ll(h, g.mode, v),
                h.return = g,
                h;
            case an:
                var b = h._init;
                return p(g, b(h._payload), v)
            }
            if (So(h) || uo(h))
                return h = tr(h, g.mode, v, null),
                h.return = g,
                h;
            Pi(g, h)
        }
        return null
    }
    function m(g, h, v, b) {
        var C = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : l(g, h, "" + v, b);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case gi:
                return v.key === C ? a(g, h, v, b) : null;
            case vr:
                return v.key === C ? u(g, h, v, b) : null;
            case an:
                return C = v._init,
                m(g, h, C(v._payload), b)
            }
            if (So(v) || uo(v))
                return C !== null ? null : c(g, h, v, b, null);
            Pi(g, v)
        }
        return null
    }
    function f(g, h, v, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return g = g.get(v) || null,
            l(h, g, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case gi:
                return g = g.get(b.key === null ? v : b.key) || null,
                a(h, g, b, C);
            case vr:
                return g = g.get(b.key === null ? v : b.key) || null,
                u(h, g, b, C);
            case an:
                var E = b._init;
                return f(g, h, v, E(b._payload), C)
            }
            if (So(b) || uo(b))
                return g = g.get(v) || null,
                c(h, g, b, C, null);
            Pi(h, b)
        }
        return null
    }
    function S(g, h, v, b) {
        for (var C = null, E = null, k = h, j = h = 0, O = null; k !== null && j < v.length; j++) {
            k.index > j ? (O = k,
            k = null) : O = k.sibling;
            var _ = m(g, k, v[j], b);
            if (_ === null) {
                k === null && (k = O);
                break
            }
            e && k && _.alternate === null && t(g, k),
            h = i(_, h, j),
            E === null ? C = _ : E.sibling = _,
            E = _,
            k = O
        }
        if (j === v.length)
            return n(g, k),
            ae && Vn(g, j),
            C;
        if (k === null) {
            for (; j < v.length; j++)
                k = p(g, v[j], b),
                k !== null && (h = i(k, h, j),
                E === null ? C = k : E.sibling = k,
                E = k);
            return ae && Vn(g, j),
            C
        }
        for (k = r(g, k); j < v.length; j++)
            O = f(k, g, j, v[j], b),
            O !== null && (e && O.alternate !== null && k.delete(O.key === null ? j : O.key),
            h = i(O, h, j),
            E === null ? C = O : E.sibling = O,
            E = O);
        return e && k.forEach(function(F) {
            return t(g, F)
        }),
        ae && Vn(g, j),
        C
    }
    function y(g, h, v, b) {
        var C = uo(v);
        if (typeof C != "function")
            throw Error(R(150));
        if (v = C.call(v),
        v == null)
            throw Error(R(151));
        for (var E = C = null, k = h, j = h = 0, O = null, _ = v.next(); k !== null && !_.done; j++,
        _ = v.next()) {
            k.index > j ? (O = k,
            k = null) : O = k.sibling;
            var F = m(g, k, _.value, b);
            if (F === null) {
                k === null && (k = O);
                break
            }
            e && k && F.alternate === null && t(g, k),
            h = i(F, h, j),
            E === null ? C = F : E.sibling = F,
            E = F,
            k = O
        }
        if (_.done)
            return n(g, k),
            ae && Vn(g, j),
            C;
        if (k === null) {
            for (; !_.done; j++,
            _ = v.next())
                _ = p(g, _.value, b),
                _ !== null && (h = i(_, h, j),
                E === null ? C = _ : E.sibling = _,
                E = _);
            return ae && Vn(g, j),
            C
        }
        for (k = r(g, k); !_.done; j++,
        _ = v.next())
            _ = f(k, g, j, _.value, b),
            _ !== null && (e && _.alternate !== null && k.delete(_.key === null ? j : _.key),
            h = i(_, h, j),
            E === null ? C = _ : E.sibling = _,
            E = _);
        return e && k.forEach(function(D) {
            return t(g, D)
        }),
        ae && Vn(g, j),
        C
    }
    function x(g, h, v, b) {
        if (typeof v == "object" && v !== null && v.type === yr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case gi:
                e: {
                    for (var C = v.key, E = h; E !== null; ) {
                        if (E.key === C) {
                            if (C = v.type,
                            C === yr) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    h = o(E, v.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && ed(C) === E.type) {
                                n(g, E.sibling),
                                h = o(E, v.props),
                                h.ref = mo(g, E, v),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    v.type === yr ? (h = tr(v.props.children, g.mode, b, v.key),
                    h.return = g,
                    g = h) : (b = Yi(v.type, v.key, v.props, null, g.mode, b),
                    b.ref = mo(g, h, v),
                    b.return = g,
                    g = b)
                }
                return s(g);
            case vr:
                e: {
                    for (E = v.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(g, h.sibling),
                                h = o(h, v.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            t(g, h);
                        h = h.sibling
                    }
                    h = Ll(v, g.mode, b),
                    h.return = g,
                    g = h
                }
                return s(g);
            case an:
                return E = v._init,
                x(g, h, E(v._payload), b)
            }
            if (So(v))
                return S(g, h, v, b);
            if (uo(v))
                return y(g, h, v, b);
            Pi(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = o(h, v),
        h.return = g,
        g = h) : (n(g, h),
        h = Al(v, g.mode, b),
        h.return = g,
        g = h),
        s(g)) : n(g, h)
    }
    return x
}
var Gr = Ap(!0)
  , Lp = Ap(!1)
  , ds = Dn(null)
  , fs = null
  , Nr = null
  , bu = null;
function Cu() {
    bu = Nr = fs = null
}
function Eu(e) {
    var t = ds.current;
    se(ds),
    e._currentValue = t
}
function xa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Or(e, t) {
    fs = e,
    bu = Nr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0),
    e.firstContext = null)
}
function st(e) {
    var t = e._currentValue;
    if (bu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Nr === null) {
            if (fs === null)
                throw Error(R(308));
            Nr = e,
            fs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Nr = Nr.next = e;
    return t
}
var Qn = null;
function ku(e) {
    Qn === null ? Qn = [e] : Qn.push(e)
}
function Ip(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ku(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Qt(e, r)
}
function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var un = !1;
function Nu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Dp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function En(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Qt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ku(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Qt(e, n)
}
function Ui(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        du(e, n)
    }
}
function td(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ps(e, t, n, r) {
    var o = e.updateQueue;
    un = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = o.baseState;
        s = 0,
        c = u = a = null,
        l = i;
        do {
            var m = l.lane
              , f = l.eventTime;
            if ((r & m) === m) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var S = e
                      , y = l;
                    switch (m = t,
                    f = n,
                    y.tag) {
                    case 1:
                        if (S = y.payload,
                        typeof S == "function") {
                            p = S.call(f, p, m);
                            break e
                        }
                        p = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = y.payload,
                        m = typeof S == "function" ? S.call(f, p, m) : S,
                        m == null)
                            break e;
                        p = de({}, p, m);
                        break e;
                    case 2:
                        un = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [l] : m.push(l))
            } else
                f = {
                    eventTime: f,
                    lane: m,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = f,
                a = p) : c = c.next = f,
                s |= m;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                m = l,
                l = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = p),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        ir |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function nd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(r)
            }
        }
}
var li = {}
  , Ot = Dn(li)
  , Wo = Dn(li)
  , Qo = Dn(li);
function Kn(e) {
    if (e === li)
        throw Error(R(174));
    return e
}
function Pu(e, t) {
    switch (ne(Qo, t),
    ne(Wo, e),
    ne(Ot, li),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Jl(t, e)
    }
    se(Ot),
    ne(Ot, t)
}
function qr() {
    se(Ot),
    se(Wo),
    se(Qo)
}
function zp(e) {
    Kn(Qo.current);
    var t = Kn(Ot.current)
      , n = Jl(t, e.type);
    t !== n && (ne(Wo, e),
    ne(Ot, n))
}
function Tu(e) {
    Wo.current === e && (se(Ot),
    se(Wo))
}
var ue = Dn(0);
function hs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Tl = [];
function ju() {
    for (var e = 0; e < Tl.length; e++)
        Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0
}
var Vi = qt.ReactCurrentDispatcher
  , jl = qt.ReactCurrentBatchConfig
  , or = 0
  , ce = null
  , ve = null
  , we = null
  , ms = !1
  , jo = !1
  , Ko = 0
  , hy = 0;
function Pe() {
    throw Error(R(321))
}
function Ru(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!bt(e[n], t[n]))
            return !1;
    return !0
}
function Mu(e, t, n, r, o, i) {
    if (or = i,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Vi.current = e === null || e.memoizedState === null ? yy : xy,
    e = n(r, o),
    jo) {
        i = 0;
        do {
            if (jo = !1,
            Ko = 0,
            25 <= i)
                throw Error(R(301));
            i += 1,
            we = ve = null,
            t.updateQueue = null,
            Vi.current = wy,
            e = n(r, o)
        } while (jo)
    }
    if (Vi.current = gs,
    t = ve !== null && ve.next !== null,
    or = 0,
    we = ve = ce = null,
    ms = !1,
    t)
        throw Error(R(300));
    return e
}
function _u() {
    var e = Ko !== 0;
    return Ko = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ce.memoizedState = we = e : we = we.next = e,
    we
}
function lt() {
    if (ve === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ve.next;
    var t = we === null ? ce.memoizedState : we.next;
    if (t !== null)
        we = t,
        ve = e;
    else {
        if (e === null)
            throw Error(R(310));
        ve = e,
        e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        },
        we === null ? ce.memoizedState = we = e : we = we.next = e
    }
    return we
}
function Yo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Rl(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = ve
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((or & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p,
                s = r) : a = a.next = p,
                ce.lanes |= c,
                ir |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        bt(r, t.memoizedState) || ($e = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ce.lanes |= i,
            ir |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ml(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        bt(i, t.memoizedState) || ($e = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Fp() {}
function $p(e, t) {
    var n = ce
      , r = lt()
      , o = t()
      , i = !bt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    $e = !0),
    r = r.queue,
    Ou(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Go(9, Up.bind(null, n, r, o, t), void 0, null),
        Se === null)
            throw Error(R(349));
        or & 30 || Bp(n, t, o)
    }
    return o
}
function Bp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Up(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Hp(t) && Wp(e)
}
function Vp(e, t, n) {
    return n(function() {
        Hp(t) && Wp(e)
    })
}
function Hp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !bt(e, n)
    } catch {
        return !0
    }
}
function Wp(e) {
    var t = Qt(e, 1);
    t !== null && wt(t, e, 1, -1)
}
function rd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = vy.bind(null, ce, e),
    [t.memoizedState, e]
}
function Go(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Qp() {
    return lt().memoizedState
}
function Hi(e, t, n, r) {
    var o = Pt();
    ce.flags |= e,
    o.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ds(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (i = s.destroy,
        r !== null && Ru(r, s.deps)) {
            o.memoizedState = Go(t, n, i, r);
            return
        }
    }
    ce.flags |= e,
    o.memoizedState = Go(1 | t, n, i, r)
}
function od(e, t) {
    return Hi(8390656, 8, e, t)
}
function Ou(e, t) {
    return Ds(2048, 8, e, t)
}
function Kp(e, t) {
    return Ds(4, 2, e, t)
}
function Yp(e, t) {
    return Ds(4, 4, e, t)
}
function Gp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function qp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ds(4, 4, Gp.bind(null, t, e), n)
}
function Au() {}
function Xp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Zp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Jp(e, t, n) {
    return or & 21 ? (bt(n, t) || (n = op(),
    ce.lanes |= n,
    ir |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    $e = !0),
    e.memoizedState = n)
}
function my(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = jl.transition;
    jl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        jl.transition = r
    }
}
function eh() {
    return lt().memoizedState
}
function gy(e, t, n) {
    var r = Nn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    th(e))
        nh(t, n);
    else if (n = Ip(e, t, n, r),
    n !== null) {
        var o = Le();
        wt(n, e, r, o),
        rh(n, t, r)
    }
}
function vy(e, t, n) {
    var r = Nn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (th(e))
        nh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                bt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    ku(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Ip(e, t, o, r),
        n !== null && (o = Le(),
        wt(n, e, r, o),
        rh(n, t, r))
    }
}
function th(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function nh(e, t) {
    jo = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function rh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        du(e, n)
    }
}
var gs = {
    readContext: st,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1
}
  , yy = {
    readContext: st,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: st,
    useEffect: od,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Hi(4194308, 4, Gp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Hi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Hi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = gy.bind(null, ce, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: rd,
    useDebugValue: Au,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = rd(!1)
          , t = e[0];
        return e = my.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ce
          , o = Pt();
        if (ae) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Se === null)
                throw Error(R(349));
            or & 30 || Bp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        od(Vp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Go(9, Up.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = Se.identifierPrefix;
        if (ae) {
            var n = Ut
              , r = Bt;
            n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ko++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = hy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , xy = {
    readContext: st,
    useCallback: Xp,
    useContext: st,
    useEffect: Ou,
    useImperativeHandle: qp,
    useInsertionEffect: Kp,
    useLayoutEffect: Yp,
    useMemo: Zp,
    useReducer: Rl,
    useRef: Qp,
    useState: function() {
        return Rl(Yo)
    },
    useDebugValue: Au,
    useDeferredValue: function(e) {
        var t = lt();
        return Jp(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Rl(Yo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Fp,
    useSyncExternalStore: $p,
    useId: eh,
    unstable_isNewReconciler: !1
}
  , wy = {
    readContext: st,
    useCallback: Xp,
    useContext: st,
    useEffect: Ou,
    useImperativeHandle: qp,
    useInsertionEffect: Kp,
    useLayoutEffect: Yp,
    useMemo: Zp,
    useReducer: Ml,
    useRef: Qp,
    useState: function() {
        return Ml(Yo)
    },
    useDebugValue: Au,
    useDeferredValue: function(e) {
        var t = lt();
        return ve === null ? t.memoizedState = e : Jp(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Ml(Yo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Fp,
    useSyncExternalStore: $p,
    useId: eh,
    unstable_isNewReconciler: !1
};
function pt(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function wa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : de({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ur(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = Nn(e)
          , i = Vt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = En(e, i, o),
        t !== null && (wt(t, e, o, r),
        Ui(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = Nn(e)
          , i = Vt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = En(e, i, o),
        t !== null && (wt(t, e, o, r),
        Ui(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le()
          , r = Nn(e)
          , o = Vt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = En(e, o, r),
        t !== null && (wt(t, e, r, n),
        Ui(t, e, r))
    }
};
function id(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(o, i) : !0
}
function oh(e, t, n) {
    var r = !1
      , o = jn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = Ue(t) ? nr : Me.current,
    r = t.contextTypes,
    i = (r = r != null) ? Kr(e, o) : jn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = zs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function sd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zs.enqueueReplaceState(t, t.state, null)
}
function Sa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Nu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = Ue(t) ? nr : Me.current,
    o.context = Kr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (wa(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && zs.enqueueReplaceState(o, o.state, null),
    ps(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Xr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Yg(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function _l(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ba(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Sy = typeof WeakMap == "function" ? WeakMap : Map;
function ih(e, t, n) {
    n = Vt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ys || (ys = !0,
        _a = r),
        ba(e, t)
    }
    ,
    n
}
function sh(e, t, n) {
    n = Vt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ba(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ba(e, t),
        typeof r != "function" && (kn === null ? kn = new Set([this]) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function ld(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Sy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ly.bind(null, e, t, n),
    t.then(e, e))
}
function ad(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ud(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1),
    t.tag = 2,
    En(n, t, 1))),
    n.lanes |= 1),
    e)
}
var by = qt.ReactCurrentOwner
  , $e = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? Lp(t, null, n, r) : Gr(t, e.child, n, r)
}
function cd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Or(t, o),
    r = Mu(e, t, n, r, i, o),
    n = _u(),
    e !== null && !$e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Kt(e, t, o)) : (ae && n && xu(t),
    t.flags |= 1,
    Oe(e, t, r, o),
    t.child)
}
function dd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Uu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        lh(e, t, i, r, o)) : (e = Yi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Bo,
        n(s, r) && e.ref === t.ref)
            return Kt(e, t, o)
    }
    return t.flags |= 1,
    e = Pn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function lh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Bo(i, r) && e.ref === t.ref)
            if ($e = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && ($e = !0);
            else
                return t.lanes = e.lanes,
                Kt(e, t, o)
    }
    return Ca(e, t, n, r, o)
}
function ah(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Tr, Qe),
            Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Tr, Qe),
                Qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Tr, Qe),
            Qe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Tr, Qe),
        Qe |= r;
    return Oe(e, t, o, n),
    t.child
}
function uh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ca(e, t, n, r, o) {
    var i = Ue(n) ? nr : Me.current;
    return i = Kr(t, i),
    Or(t, o),
    n = Mu(e, t, n, r, i, o),
    r = _u(),
    e !== null && !$e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Kt(e, t, o)) : (ae && r && xu(t),
    t.flags |= 1,
    Oe(e, t, n, o),
    t.child)
}
function fd(e, t, n, r, o) {
    if (Ue(n)) {
        var i = !0;
        as(t)
    } else
        i = !1;
    if (Or(t, o),
    t.stateNode === null)
        Wi(e, t),
        oh(t, n, r),
        Sa(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = Ue(n) ? nr : Me.current,
        u = Kr(t, u));
        var c = n.getDerivedStateFromProps
          , p = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && sd(t, s, r, u),
        un = !1;
        var m = t.memoizedState;
        s.state = m,
        ps(t, r, s, o),
        a = t.memoizedState,
        l !== r || m !== a || Be.current || un ? (typeof c == "function" && (wa(t, n, c, r),
        a = t.memoizedState),
        (l = un || id(t, n, l, r, m, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Dp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : pt(t.type, l),
        s.props = u,
        p = t.pendingProps,
        m = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = st(a) : (a = Ue(n) ? nr : Me.current,
        a = Kr(t, a));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || m !== a) && sd(t, s, r, a),
        un = !1,
        m = t.memoizedState,
        s.state = m,
        ps(t, r, s, o);
        var S = t.memoizedState;
        l !== p || m !== S || Be.current || un ? (typeof f == "function" && (wa(t, n, f, r),
        S = t.memoizedState),
        (u = un || id(t, n, u, r, m, S, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        s.props = r,
        s.state = S,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ea(e, t, n, r, i, o)
}
function Ea(e, t, n, r, o, i) {
    uh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Xc(t, n, !1),
        Kt(e, t, i);
    r = t.stateNode,
    by.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Gr(t, e.child, null, i),
    t.child = Gr(t, null, l, i)) : Oe(e, t, l, i),
    t.memoizedState = r.state,
    o && Xc(t, n, !0),
    t.child
}
function ch(e) {
    var t = e.stateNode;
    t.pendingContext ? qc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qc(e, t.context, !1),
    Pu(e, t.containerInfo)
}
function pd(e, t, n, r, o) {
    return Yr(),
    Su(o),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var ka = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Na(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function dh(e, t, n) {
    var r = t.pendingProps, o = ue.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
        return ya(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Bs(s, r, 0, null),
        e = tr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Na(n),
        t.memoizedState = ka,
        e) : Lu(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Cy(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Pn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Pn(l, i) : (i = tr(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Na(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ka,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Pn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Lu(e, t) {
    return t = Bs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ti(e, t, n, r) {
    return r !== null && Su(r),
    Gr(t, e.child, null, n),
    e = Lu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Cy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = _l(Error(R(422))),
        Ti(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Bs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = tr(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Gr(t, e.child, null, s),
        t.child.memoizedState = Na(s),
        t.memoizedState = ka,
        i);
    if (!(t.mode & 1))
        return Ti(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(R(419)),
        r = _l(i, r, void 0),
        Ti(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    $e || l) {
        if (r = Se,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Qt(e, o),
            wt(r, e, o, -1))
        }
        return Bu(),
        r = _l(Error(R(421))),
        Ti(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Iy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ye = Cn(o.nextSibling),
    Ge = t,
    ae = !0,
    yt = null,
    e !== null && (nt[rt++] = Bt,
    nt[rt++] = Ut,
    nt[rt++] = rr,
    Bt = e.id,
    Ut = e.overflow,
    rr = t),
    t = Lu(t, r.children),
    t.flags |= 4096,
    t)
}
function hd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    xa(e.return, t, n)
}
function Ol(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function fh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Oe(e, t, r.children, n),
    r = ue.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && hd(e, n, t);
                else if (e.tag === 19)
                    hd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ue, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && hs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ol(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && hs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ol(t, !0, n, null, i);
            break;
        case "together":
            Ol(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Wi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ir |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Pn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Pn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ey(e, t, n) {
    switch (t.tag) {
    case 3:
        ch(t),
        Yr();
        break;
    case 5:
        zp(t);
        break;
    case 1:
        Ue(t.type) && as(t);
        break;
    case 4:
        Pu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(ds, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ue, ue.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? dh(e, t, n) : (ne(ue, ue.current & 1),
            e = Kt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ue, ue.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return fh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ue, ue.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        ah(e, t, n)
    }
    return Kt(e, t, n)
}
var ph, Pa, hh, mh;
ph = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Pa = function() {}
;
hh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Kn(Ot.current);
        var i = null;
        switch (n) {
        case "input":
            o = Gl(e, o),
            r = Gl(e, r),
            i = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            r = de({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Zl(e, o),
            r = Zl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss)
        }
        ea(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ao.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ao.hasOwnProperty(u) ? (a != null && u === "onScroll" && ie("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
mh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function go(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ky(e, t, n) {
    var r = t.pendingProps;
    switch (wu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Te(t),
        null;
    case 1:
        return Ue(t.type) && ls(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        qr(),
        se(Be),
        se(Me),
        ju(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        yt !== null && (La(yt),
        yt = null))),
        Pa(e, t),
        Te(t),
        null;
    case 5:
        Tu(t);
        var o = Kn(Qo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            hh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Te(t),
                null
            }
            if (e = Kn(Ot.current),
            Ni(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Mt] = t,
                r[Ho] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ie("cancel", r),
                    ie("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Co.length; o++)
                        ie(Co[o], r);
                    break;
                case "source":
                    ie("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", r),
                    ie("load", r);
                    break;
                case "details":
                    ie("toggle", r);
                    break;
                case "input":
                    Cc(r, i),
                    ie("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    ie("invalid", r);
                    break;
                case "textarea":
                    kc(r, i),
                    ie("invalid", r)
                }
                ea(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        o = ["children", "" + l]) : Ao.hasOwnProperty(s) && l != null && s === "onScroll" && ie("scroll", r)
                    }
                switch (n) {
                case "input":
                    vi(r),
                    Ec(r, i, !0);
                    break;
                case "textarea":
                    vi(r),
                    Nc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ss)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Vf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Mt] = t,
                e[Ho] = r,
                ph(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = ta(n, r),
                    n) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Co.length; o++)
                            ie(Co[o], e);
                        o = r;
                        break;
                    case "source":
                        ie("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        o = r;
                        break;
                    case "details":
                        ie("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Cc(e, r),
                        o = Gl(e, r),
                        ie("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = de({}, r, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        kc(e, r),
                        o = Zl(e, r),
                        ie("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ea(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Qf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Hf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Lo(e, a) : typeof a == "number" && Lo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ao.hasOwnProperty(i) ? a != null && i === "onScroll" && ie("scroll", e) : a != null && iu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        vi(e),
                        Ec(e, r, !1);
                        break;
                    case "textarea":
                        vi(e),
                        Nc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Tn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? jr(e, !!r.multiple, i, !1) : r.defaultValue != null && jr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = ss)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            mh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = Kn(Qo.current),
            Kn(Ot.current),
            Ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Mt] = t,
                (i = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ki(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ki(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Mt] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (se(ue),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && Ye !== null && t.mode & 1 && !(t.flags & 128))
                Op(),
                Yr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(R(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(R(317));
                    i[Mt] = t
                } else
                    Yr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                yt !== null && (La(yt),
                yt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : Bu())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return qr(),
        Pa(e, t),
        e === null && Uo(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return Eu(t.type._context),
        Te(t),
        null;
    case 17:
        return Ue(t.type) && ls(),
        Te(t),
        null;
    case 19:
        if (se(ue),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                go(i, !1);
            else {
                if (xe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = hs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            go(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && he() > Zr && (t.flags |= 128,
                r = !0,
                go(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = hs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    go(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
                        return Te(t),
                        null
                } else
                    2 * he() - i.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    go(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = he(),
        t.sibling = null,
        n = ue.current,
        ne(ue, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return $u(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function Ny(e, t) {
    switch (wu(t),
    t.tag) {
    case 1:
        return Ue(t.type) && ls(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return qr(),
        se(Be),
        se(Me),
        ju(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Tu(t),
        null;
    case 13:
        if (se(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Yr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return se(ue),
        null;
    case 4:
        return qr(),
        null;
    case 10:
        return Eu(t.type._context),
        null;
    case 22:
    case 23:
        return $u(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ji = !1
  , Re = !1
  , Py = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function Ta(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var md = !1;
function Ty(e, t) {
    if (da = rs,
    e = wp(),
    yu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var f; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o),
                        p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (f = p.firstChild) !== null; )
                            m = p,
                            p = f;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++u === o && (l = s),
                            m === i && ++c === r && (a = s),
                            (f = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = f
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (fa = {
        focusedElem: e,
        selectionRange: n
    },
    rs = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps
                                  , x = S.memoizedState
                                  , g = t.stateNode
                                  , h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : pt(t.type, y), x);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (b) {
                    pe(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return S = md,
    md = !1,
    S
}
function Ro(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Ta(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Fs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ja(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function gh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    gh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Mt],
    delete t[Ho],
    delete t[ma],
    delete t[cy],
    delete t[dy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function gd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ss));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ra(e, t, n),
        e = e.sibling; e !== null; )
            Ra(e, t, n),
            e = e.sibling
}
function Ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ma(e, t, n),
        e = e.sibling; e !== null; )
            Ma(e, t, n),
            e = e.sibling
}
var be = null
  , vt = !1;
function rn(e, t, n) {
    for (n = n.child; n !== null; )
        yh(e, t, n),
        n = n.sibling
}
function yh(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
        try {
            _t.onCommitFiberUnmount(Ms, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Re || Pr(n, t);
    case 6:
        var r = be
          , o = vt;
        be = null,
        rn(e, t, n),
        be = r,
        vt = o,
        be !== null && (vt ? (e = be,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
        break;
    case 18:
        be !== null && (vt ? (e = be,
        n = n.stateNode,
        e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n),
        Fo(e)) : Nl(be, n.stateNode));
        break;
    case 4:
        r = be,
        o = vt,
        be = n.stateNode.containerInfo,
        vt = !0,
        rn(e, t, n),
        be = r,
        vt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Ta(n, t, s),
                o = o.next
            } while (o !== r)
        }
        rn(e, t, n);
        break;
    case 1:
        if (!Re && (Pr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                pe(n, t, l)
            }
        rn(e, t, n);
        break;
    case 21:
        rn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null,
        rn(e, t, n),
        Re = r) : rn(e, t, n);
        break;
    default:
        rn(e, t, n)
    }
}
function vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Py),
        t.forEach(function(r) {
            var o = Dy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        be = l.stateNode,
                        vt = !1;
                        break e;
                    case 3:
                        be = l.stateNode.containerInfo,
                        vt = !0;
                        break e;
                    case 4:
                        be = l.stateNode.containerInfo,
                        vt = !0;
                        break e
                    }
                    l = l.return
                }
                if (be === null)
                    throw Error(R(160));
                yh(i, s, o),
                be = null,
                vt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            xh(t, e),
            t = t.sibling
}
function xh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (dt(t, e),
        Nt(e),
        r & 4) {
            try {
                Ro(3, e, e.return),
                Fs(3, e)
            } catch (y) {
                pe(e, e.return, y)
            }
            try {
                Ro(5, e, e.return)
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 1:
        dt(t, e),
        Nt(e),
        r & 512 && n !== null && Pr(n, n.return);
        break;
    case 5:
        if (dt(t, e),
        Nt(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Lo(o, "")
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Bf(o, i),
                    ta(l, s);
                    var u = ta(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , p = a[s + 1];
                        c === "style" ? Qf(o, p) : c === "dangerouslySetInnerHTML" ? Hf(o, p) : c === "children" ? Lo(o, p) : iu(o, c, p, u)
                    }
                    switch (l) {
                    case "input":
                        ql(o, i);
                        break;
                    case "textarea":
                        Uf(o, i);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var f = i.value;
                        f != null ? jr(o, !!i.multiple, f, !1) : m !== !!i.multiple && (i.defaultValue != null ? jr(o, !!i.multiple, i.defaultValue, !0) : jr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ho] = i
                } catch (y) {
                    pe(e, e.return, y)
                }
        }
        break;
    case 6:
        if (dt(t, e),
        Nt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 3:
        if (dt(t, e),
        Nt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fo(t.containerInfo)
            } catch (y) {
                pe(e, e.return, y)
            }
        break;
    case 4:
        dt(t, e),
        Nt(e);
        break;
    case 13:
        dt(t, e),
        Nt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (zu = he())),
        r & 4 && vd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Re = (u = Re) || c,
        dt(t, e),
        Re = u) : dt(t, e),
        Nt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (I = e,
                c = e.child; c !== null; ) {
                    for (p = I = c; I !== null; ) {
                        switch (m = I,
                        f = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ro(4, m, m.return);
                            break;
                        case 1:
                            Pr(m, m.return);
                            var S = m.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (y) {
                                    pe(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Pr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                xd(p);
                                continue
                            }
                        }
                        f !== null ? (f.return = m,
                        I = f) : xd(p)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (c === null) {
                        c = p;
                        try {
                            o = p.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode,
                            a = p.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Wf("display", s))
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                    }
                } else if (p.tag === 6) {
                    if (c === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    c === p && (c = null),
                    p = p.return
                }
                c === p && (c = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        dt(t, e),
        Nt(e),
        r & 4 && vd(e);
        break;
    case 21:
        break;
    default:
        dt(t, e),
        Nt(e)
    }
}
function Nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Lo(o, ""),
                r.flags &= -33);
                var i = gd(e);
                Ma(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = gd(e);
                Ra(e, l, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (a) {
            pe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function jy(e, t, n) {
    I = e,
    wh(e)
}
function wh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ji;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Re;
                l = ji;
                var u = Re;
                if (ji = s,
                (Re = a) && !u)
                    for (I = o; I !== null; )
                        s = I,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? wd(o) : a !== null ? (a.return = s,
                        I = a) : wd(o);
                for (; i !== null; )
                    I = i,
                    wh(i),
                    i = i.sibling;
                I = o,
                ji = l,
                Re = u
            }
            yd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            I = i) : yd(e)
    }
}
function yd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || Fs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && nd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            nd(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var p = c.dehydrated;
                                    p !== null && Fo(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Re || t.flags & 512 && ja(t)
            } catch (m) {
                pe(t, t.return, m)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function xd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function wd(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Fs(4, t)
                } catch (a) {
                    pe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        pe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    ja(t)
                } catch (a) {
                    pe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ja(t)
                } catch (a) {
                    pe(t, s, a)
                }
            }
        } catch (a) {
            pe(t, t.return, a)
        }
        if (t === e) {
            I = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            I = l;
            break
        }
        I = t.return
    }
}
var Ry = Math.ceil
  , vs = qt.ReactCurrentDispatcher
  , Iu = qt.ReactCurrentOwner
  , it = qt.ReactCurrentBatchConfig
  , X = 0
  , Se = null
  , ge = null
  , Ce = 0
  , Qe = 0
  , Tr = Dn(0)
  , xe = 0
  , qo = null
  , ir = 0
  , $s = 0
  , Du = 0
  , Mo = null
  , Fe = null
  , zu = 0
  , Zr = 1 / 0
  , zt = null
  , ys = !1
  , _a = null
  , kn = null
  , Ri = !1
  , yn = null
  , xs = 0
  , _o = 0
  , Oa = null
  , Qi = -1
  , Ki = 0;
function Le() {
    return X & 6 ? he() : Qi !== -1 ? Qi : Qi = he()
}
function Nn(e) {
    return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : py.transition !== null ? (Ki === 0 && (Ki = op()),
    Ki) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : dp(e.type)),
    e) : 1
}
function wt(e, t, n, r) {
    if (50 < _o)
        throw _o = 0,
        Oa = null,
        Error(R(185));
    oi(e, n, r),
    (!(X & 2) || e !== Se) && (e === Se && (!(X & 2) && ($s |= n),
    xe === 4 && dn(e, Ce)),
    Ve(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (Zr = he() + 500,
    Is && zn()))
}
function Ve(e, t) {
    var n = e.callbackNode;
    pv(e, t);
    var r = ns(e, e === Se ? Ce : 0);
    if (r === 0)
        n !== null && jc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && jc(n),
        t === 1)
            e.tag === 0 ? fy(Sd.bind(null, e)) : Rp(Sd.bind(null, e)),
            ay(function() {
                !(X & 6) && zn()
            }),
            n = null;
        else {
            switch (ip(r)) {
            case 1:
                n = cu;
                break;
            case 4:
                n = np;
                break;
            case 16:
                n = ts;
                break;
            case 536870912:
                n = rp;
                break;
            default:
                n = ts
            }
            n = Th(n, Sh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Sh(e, t) {
    if (Qi = -1,
    Ki = 0,
    X & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (Ar() && e.callbackNode !== n)
        return null;
    var r = ns(e, e === Se ? Ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ws(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = Ch();
        (Se !== e || Ce !== t) && (zt = null,
        Zr = he() + 500,
        er(e, t));
        do
            try {
                Oy();
                break
            } catch (l) {
                bh(e, l)
            }
        while (!0);
        Cu(),
        vs.current = i,
        X = o,
        ge !== null ? t = 0 : (Se = null,
        Ce = 0,
        t = xe)
    }
    if (t !== 0) {
        if (t === 2 && (o = sa(e),
        o !== 0 && (r = o,
        t = Aa(e, o))),
        t === 1)
            throw n = qo,
            er(e, 0),
            dn(e, r),
            Ve(e, he()),
            n;
        if (t === 6)
            dn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !My(o) && (t = ws(e, r),
            t === 2 && (i = sa(e),
            i !== 0 && (r = i,
            t = Aa(e, i))),
            t === 1))
                throw n = qo,
                er(e, 0),
                dn(e, r),
                Ve(e, he()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Hn(e, Fe, zt);
                break;
            case 3:
                if (dn(e, r),
                (r & 130023424) === r && (t = zu + 500 - he(),
                10 < t)) {
                    if (ns(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Le(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ha(Hn.bind(null, e, Fe, zt), t);
                    break
                }
                Hn(e, Fe, zt);
                break;
            case 4:
                if (dn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - xt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = he() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ry(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ha(Hn.bind(null, e, Fe, zt), r);
                    break
                }
                Hn(e, Fe, zt);
                break;
            case 5:
                Hn(e, Fe, zt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return Ve(e, he()),
    e.callbackNode === n ? Sh.bind(null, e) : null
}
function Aa(e, t) {
    var n = Mo;
    return e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    e = ws(e, t),
    e !== 2 && (t = Fe,
    Fe = n,
    t !== null && La(t)),
    e
}
function La(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e)
}
function My(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!bt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function dn(e, t) {
    for (t &= ~Du,
    t &= ~$s,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - xt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Sd(e) {
    if (X & 6)
        throw Error(R(327));
    Ar();
    var t = ns(e, 0);
    if (!(t & 1))
        return Ve(e, he()),
        null;
    var n = ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = sa(e);
        r !== 0 && (t = r,
        n = Aa(e, r))
    }
    if (n === 1)
        throw n = qo,
        er(e, 0),
        dn(e, t),
        Ve(e, he()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Hn(e, Fe, zt),
    Ve(e, he()),
    null
}
function Fu(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (Zr = he() + 500,
        Is && zn())
    }
}
function sr(e) {
    yn !== null && yn.tag === 0 && !(X & 6) && Ar();
    var t = X;
    X |= 1;
    var n = it.transition
      , r = ee;
    try {
        if (it.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        it.transition = n,
        X = t,
        !(X & 6) && zn()
    }
}
function $u() {
    Qe = Tr.current,
    se(Tr)
}
function er(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    ly(n)),
    ge !== null)
        for (n = ge.return; n !== null; ) {
            var r = n;
            switch (wu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ls();
                break;
            case 3:
                qr(),
                se(Be),
                se(Me),
                ju();
                break;
            case 5:
                Tu(r);
                break;
            case 4:
                qr();
                break;
            case 13:
                se(ue);
                break;
            case 19:
                se(ue);
                break;
            case 10:
                Eu(r.type._context);
                break;
            case 22:
            case 23:
                $u()
            }
            n = n.return
        }
    if (Se = e,
    ge = e = Pn(e.current, null),
    Ce = Qe = t,
    xe = 0,
    qo = null,
    Du = $s = ir = 0,
    Fe = Mo = null,
    Qn !== null) {
        for (t = 0; t < Qn.length; t++)
            if (n = Qn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Qn = null
    }
    return e
}
function bh(e, t) {
    do {
        var n = ge;
        try {
            if (Cu(),
            Vi.current = gs,
            ms) {
                for (var r = ce.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ms = !1
            }
            if (or = 0,
            we = ve = ce = null,
            jo = !1,
            Ko = 0,
            Iu.current = null,
            n === null || n.return === null) {
                xe = 1,
                qo = t,
                ge = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ce,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , p = c.tag;
                    if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = c.alternate;
                        m ? (c.updateQueue = m.updateQueue,
                        c.memoizedState = m.memoizedState,
                        c.lanes = m.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var f = ad(s);
                    if (f !== null) {
                        f.flags &= -257,
                        ud(f, s, l, i, t),
                        f.mode & 1 && ld(i, u, t),
                        t = f,
                        a = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(a),
                            t.updateQueue = y
                        } else
                            S.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ld(i, u, t),
                            Bu();
                            break e
                        }
                        a = Error(R(426))
                    }
                } else if (ae && l.mode & 1) {
                    var x = ad(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        ud(x, s, l, i, t),
                        Su(Xr(a, l));
                        break e
                    }
                }
                i = a = Xr(a, l),
                xe !== 4 && (xe = 2),
                Mo === null ? Mo = [i] : Mo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = ih(i, a, t);
                        td(i, g);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (kn === null || !kn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var b = sh(i, l, t);
                            td(i, b);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            kh(n)
        } catch (C) {
            t = C,
            ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Ch() {
    var e = vs.current;
    return vs.current = gs,
    e === null ? gs : e
}
function Bu() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || !(ir & 268435455) && !($s & 268435455) || dn(Se, Ce)
}
function ws(e, t) {
    var n = X;
    X |= 2;
    var r = Ch();
    (Se !== e || Ce !== t) && (zt = null,
    er(e, t));
    do
        try {
            _y();
            break
        } catch (o) {
            bh(e, o)
        }
    while (!0);
    if (Cu(),
    X = n,
    vs.current = r,
    ge !== null)
        throw Error(R(261));
    return Se = null,
    Ce = 0,
    xe
}
function _y() {
    for (; ge !== null; )
        Eh(ge)
}
function Oy() {
    for (; ge !== null && !ov(); )
        Eh(ge)
}
function Eh(e) {
    var t = Ph(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
    t === null ? kh(e) : ge = t,
    Iu.current = null
}
function kh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ny(n, t),
            n !== null) {
                n.flags &= 32767,
                ge = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                xe = 6,
                ge = null;
                return
            }
        } else if (n = ky(n, t, Qe),
        n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    xe === 0 && (xe = 5)
}
function Hn(e, t, n) {
    var r = ee
      , o = it.transition;
    try {
        it.transition = null,
        ee = 1,
        Ay(e, t, n, r)
    } finally {
        it.transition = o,
        ee = r
    }
    return null
}
function Ay(e, t, n, r) {
    do
        Ar();
    while (yn !== null);
    if (X & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (hv(e, i),
    e === Se && (ge = Se = null,
    Ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ri || (Ri = !0,
    Th(ts, function() {
        return Ar(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = it.transition,
        it.transition = null;
        var s = ee;
        ee = 1;
        var l = X;
        X |= 4,
        Iu.current = null,
        Ty(e, n),
        xh(n, e),
        ey(fa),
        rs = !!da,
        fa = da = null,
        e.current = n,
        jy(n),
        iv(),
        X = l,
        ee = s,
        it.transition = i
    } else
        e.current = n;
    if (Ri && (Ri = !1,
    yn = e,
    xs = o),
    i = e.pendingLanes,
    i === 0 && (kn = null),
    av(n.stateNode),
    Ve(e, he()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ys)
        throw ys = !1,
        e = _a,
        _a = null,
        e;
    return xs & 1 && e.tag !== 0 && Ar(),
    i = e.pendingLanes,
    i & 1 ? e === Oa ? _o++ : (_o = 0,
    Oa = e) : _o = 0,
    zn(),
    null
}
function Ar() {
    if (yn !== null) {
        var e = ip(xs)
          , t = it.transition
          , n = ee;
        try {
            if (it.transition = null,
            ee = 16 > e ? 16 : e,
            yn === null)
                var r = !1;
            else {
                if (e = yn,
                yn = null,
                xs = 0,
                X & 6)
                    throw Error(R(331));
                var o = X;
                for (X |= 4,
                I = e.current; I !== null; ) {
                    var i = I
                      , s = i.child;
                    if (I.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (I = u; I !== null; ) {
                                    var c = I;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ro(8, c, i)
                                    }
                                    var p = c.child;
                                    if (p !== null)
                                        p.return = c,
                                        I = p;
                                    else
                                        for (; I !== null; ) {
                                            c = I;
                                            var m = c.sibling
                                              , f = c.return;
                                            if (gh(c),
                                            c === u) {
                                                I = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = f,
                                                I = m;
                                                break
                                            }
                                            I = f
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var x = y.sibling;
                                        y.sibling = null,
                                        y = x
                                    } while (y !== null)
                                }
                            }
                            I = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        I = s;
                    else
                        e: for (; I !== null; ) {
                            if (i = I,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ro(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                I = g;
                                break e
                            }
                            I = i.return
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    s = I;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        I = v;
                    else
                        e: for (s = h; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fs(9, l)
                                    }
                                } catch (C) {
                                    pe(l, l.return, C)
                                }
                            if (l === s) {
                                I = null;
                                break e
                            }
                            var b = l.sibling;
                            if (b !== null) {
                                b.return = l.return,
                                I = b;
                                break e
                            }
                            I = l.return
                        }
                }
                if (X = o,
                zn(),
                _t && typeof _t.onPostCommitFiberRoot == "function")
                    try {
                        _t.onPostCommitFiberRoot(Ms, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            it.transition = t
        }
    }
    return !1
}
function bd(e, t, n) {
    t = Xr(n, t),
    t = ih(e, t, 1),
    e = En(e, t, 1),
    t = Le(),
    e !== null && (oi(e, 1, t),
    Ve(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        bd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                bd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
                    e = Xr(n, e),
                    e = sh(t, e, 1),
                    t = En(t, e, 1),
                    e = Le(),
                    t !== null && (oi(t, 1, e),
                    Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ly(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Le(),
    e.pingedLanes |= e.suspendedLanes & n,
    Se === e && (Ce & n) === n && (xe === 4 || xe === 3 && (Ce & 130023424) === Ce && 500 > he() - zu ? er(e, 0) : Du |= n),
    Ve(e, t)
}
function Nh(e, t) {
    t === 0 && (e.mode & 1 ? (t = wi,
    wi <<= 1,
    !(wi & 130023424) && (wi = 4194304)) : t = 1);
    var n = Le();
    e = Qt(e, t),
    e !== null && (oi(e, t, n),
    Ve(e, n))
}
function Iy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Nh(e, n)
}
function Dy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    Nh(e, n)
}
var Ph;
Ph = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current)
            $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return $e = !1,
                Ey(e, t, n);
            $e = !!(e.flags & 131072)
        }
    else
        $e = !1,
        ae && t.flags & 1048576 && Mp(t, cs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Wi(e, t),
        e = t.pendingProps;
        var o = Kr(t, Me.current);
        Or(t, n),
        o = Mu(null, t, r, e, o, n);
        var i = _u();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ue(r) ? (i = !0,
        as(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Nu(t),
        o.updater = zs,
        t.stateNode = o,
        o._reactInternals = t,
        Sa(t, r, e, n),
        t = Ea(null, t, r, !0, i, n)) : (t.tag = 0,
        ae && i && xu(t),
        Oe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Wi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Fy(r),
            e = pt(r, e),
            o) {
            case 0:
                t = Ca(null, t, r, e, n);
                break e;
            case 1:
                t = fd(null, t, r, e, n);
                break e;
            case 11:
                t = cd(null, t, r, e, n);
                break e;
            case 14:
                t = dd(null, t, r, pt(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        Ca(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        fd(e, t, r, o, n);
    case 3:
        e: {
            if (ch(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Dp(e, t),
            ps(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Xr(Error(R(423)), t),
                    t = pd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Xr(Error(R(424)), t),
                    t = pd(e, t, r, n, o);
                    break e
                } else
                    for (Ye = Cn(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    ae = !0,
                    yt = null,
                    n = Lp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Yr(),
                r === o) {
                    t = Kt(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return zp(t),
        e === null && ya(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        pa(r, o) ? s = null : i !== null && pa(r, i) && (t.flags |= 32),
        uh(e, t),
        Oe(e, t, s, n),
        t.child;
    case 6:
        return e === null && ya(t),
        null;
    case 13:
        return dh(e, t, n);
    case 4:
        return Pu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Gr(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        cd(e, t, r, o, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(ds, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (bt(i.value, s)) {
                    if (i.children === o.children && !Be.current) {
                        t = Kt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Vt(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    xa(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            xa(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Oe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Or(t, n),
        o = st(o),
        r = r(o),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = pt(r, t.pendingProps),
        o = pt(r.type, o),
        dd(e, t, r, o, n);
    case 15:
        return lh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        Wi(e, t),
        t.tag = 1,
        Ue(r) ? (e = !0,
        as(t)) : e = !1,
        Or(t, n),
        oh(t, r, o),
        Sa(t, r, o, n),
        Ea(null, t, r, !0, e, n);
    case 19:
        return fh(e, t, n);
    case 22:
        return ah(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function Th(e, t) {
    return tp(e, t)
}
function zy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new zy(e,t,n,r)
}
function Uu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Fy(e) {
    if (typeof e == "function")
        return Uu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === lu)
            return 11;
        if (e === au)
            return 14
    }
    return 2
}
function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Yi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Uu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case yr:
            return tr(n.children, o, i, t);
        case su:
            s = 8,
            o |= 8;
            break;
        case Wl:
            return e = ot(12, n, t, o | 2),
            e.elementType = Wl,
            e.lanes = i,
            e;
        case Ql:
            return e = ot(13, n, t, o),
            e.elementType = Ql,
            e.lanes = i,
            e;
        case Kl:
            return e = ot(19, n, t, o),
            e.elementType = Kl,
            e.lanes = i,
            e;
        case zf:
            return Bs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case If:
                    s = 10;
                    break e;
                case Df:
                    s = 9;
                    break e;
                case lu:
                    s = 11;
                    break e;
                case au:
                    s = 14;
                    break e;
                case an:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function tr(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function Bs(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = zf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Al(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function Ll(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function $y(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ml(0),
    this.expirationTimes = ml(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ml(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Vu(e, t, n, r, o, i, s, l, a) {
    return e = new $y(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = ot(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Nu(i),
    e
}
function By(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function jh(e) {
    if (!e)
        return jn;
    e = e._reactInternals;
    e: {
        if (ur(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ue(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n))
            return jp(e, n, t)
    }
    return t
}
function Rh(e, t, n, r, o, i, s, l, a) {
    return e = Vu(n, r, !0, e, o, i, s, l, a),
    e.context = jh(null),
    n = e.current,
    r = Le(),
    o = Nn(n),
    i = Vt(r, o),
    i.callback = t ?? null,
    En(n, i, o),
    e.current.lanes = o,
    oi(e, o, r),
    Ve(e, r),
    e
}
function Us(e, t, n, r) {
    var o = t.current
      , i = Le()
      , s = Nn(o);
    return n = jh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Vt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = En(o, t, s),
    e !== null && (wt(e, o, s, i),
    Ui(e, o, s)),
    s
}
function Ss(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Cd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Hu(e, t) {
    Cd(e, t),
    (e = e.alternate) && Cd(e, t)
}
function Uy() {
    return null
}
var Mh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Wu(e) {
    this._internalRoot = e
}
Vs.prototype.render = Wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Us(e, t, null, null)
}
;
Vs.prototype.unmount = Wu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sr(function() {
            Us(null, e, null, null)
        }),
        t[Wt] = null
    }
}
;
function Vs(e) {
    this._internalRoot = e
}
Vs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ap();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++)
            ;
        cn.splice(n, 0, e),
        n === 0 && cp(e)
    }
}
;
function Qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ed() {}
function Vy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ss(s);
                i.call(u)
            }
        }
        var s = Rh(t, r, e, 0, null, !1, !1, "", Ed);
        return e._reactRootContainer = s,
        e[Wt] = s.current,
        Uo(e.nodeType === 8 ? e.parentNode : e),
        sr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Ss(a);
            l.call(u)
        }
    }
    var a = Vu(e, 0, !1, null, null, !1, !1, "", Ed);
    return e._reactRootContainer = a,
    e[Wt] = a.current,
    Uo(e.nodeType === 8 ? e.parentNode : e),
    sr(function() {
        Us(t, a, n, r)
    }),
    a
}
function Ws(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = Ss(s);
                l.call(a)
            }
        }
        Us(t, s, e, o)
    } else
        s = Vy(n, t, e, o, r);
    return Ss(s)
}
sp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = bo(t.pendingLanes);
            n !== 0 && (du(t, n | 1),
            Ve(t, he()),
            !(X & 6) && (Zr = he() + 500,
            zn()))
        }
        break;
    case 13:
        sr(function() {
            var r = Qt(e, 1);
            if (r !== null) {
                var o = Le();
                wt(r, e, 1, o)
            }
        }),
        Hu(e, 1)
    }
}
;
fu = function(e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Le();
            wt(t, e, 134217728, n)
        }
        Hu(e, 134217728)
    }
}
;
lp = function(e) {
    if (e.tag === 13) {
        var t = Nn(e)
          , n = Qt(e, t);
        if (n !== null) {
            var r = Le();
            wt(n, e, t, r)
        }
        Hu(e, t)
    }
}
;
ap = function() {
    return ee
}
;
up = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
ra = function(e, t, n) {
    switch (t) {
    case "input":
        if (ql(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ls(r);
                    if (!o)
                        throw Error(R(90));
                    $f(r),
                    ql(r, o)
                }
            }
        }
        break;
    case "textarea":
        Uf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && jr(e, !!n.multiple, t, !1)
    }
}
;
Gf = Fu;
qf = sr;
var Hy = {
    usingClientEntryPoint: !1,
    Events: [si, br, Ls, Kf, Yf, Fu]
}
  , vo = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Wy = {
    bundleType: vo.bundleType,
    version: vo.version,
    rendererPackageName: vo.rendererPackageName,
    rendererConfig: vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Jf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vo.findFiberByHostInstance || Uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mi.isDisabled && Mi.supportsFiber)
        try {
            Ms = Mi.inject(Wy),
            _t = Mi
        } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hy;
Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qu(t))
        throw Error(R(200));
    return By(e, t, null, n)
}
;
Ze.createRoot = function(e, t) {
    if (!Qu(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , o = Mh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Vu(e, 1, !1, null, null, n, !1, r, o),
    e[Wt] = t.current,
    Uo(e.nodeType === 8 ? e.parentNode : e),
    new Wu(t)
}
;
Ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = Jf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ze.flushSync = function(e) {
    return sr(e)
}
;
Ze.hydrate = function(e, t, n) {
    if (!Hs(t))
        throw Error(R(200));
    return Ws(null, e, t, !0, n)
}
;
Ze.hydrateRoot = function(e, t, n) {
    if (!Qu(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Mh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Rh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Wt] = t.current,
    Uo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Vs(t)
}
;
Ze.render = function(e, t, n) {
    if (!Hs(t))
        throw Error(R(200));
    return Ws(null, e, t, !1, n)
}
;
Ze.unmountComponentAtNode = function(e) {
    if (!Hs(e))
        throw Error(R(40));
    return e._reactRootContainer ? (sr(function() {
        Ws(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Wt] = null
        })
    }),
    !0) : !1
}
;
Ze.unstable_batchedUpdates = Fu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hs(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return Ws(e, t, n, !1, r)
}
;
Ze.version = "18.3.1-next-f1338f8080-20240426";
function _h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_h)
        } catch (e) {
            console.error(e)
        }
}
_h(),
_f.exports = Ze;
var ai = _f.exports;
const Oh = xf(ai);
var Ah, kd = ai;
Ah = kd.createRoot,
kd.hydrateRoot;
const Qy = 1
  , Ky = 1e6;
let Il = 0;
function Yy() {
    return Il = (Il + 1) % Number.MAX_SAFE_INTEGER,
    Il.toString()
}
const Dl = new Map
  , Nd = e => {
    if (Dl.has(e))
        return;
    const t = setTimeout( () => {
        Dl.delete(e),
        Oo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Ky);
    Dl.set(e, t)
}
  , Gy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Qy)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Nd(n) : e.toasts.forEach(r => {
                Nd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Gi = [];
let qi = {
    toasts: []
};
function Oo(e) {
    qi = Gy(qi, e),
    Gi.forEach(t => {
        t(qi)
    }
    )
}
function qy({...e}) {
    const t = Yy()
      , n = o => Oo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Oo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Oo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Xy() {
    const [e,t] = w.useState(qi);
    return w.useEffect( () => (Gi.push(t),
    () => {
        const n = Gi.indexOf(t);
        n > -1 && Gi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: qy,
        dismiss: n => Oo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ye(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Pd(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Lh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Pd(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Pd(e[o], null)
                }
            }
    }
}
function Ct(...e) {
    return w.useCallback(Lh(...e), e)
}
function Qs(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = p => {
            var g;
            const {scope: m, children: f, ...S} = p
              , y = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l
              , x = w.useMemo( () => S, Object.values(S));
            return d.jsx(y.Provider, {
                value: x,
                children: f
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(p, m) {
            var y;
            const f = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[a]) || l
              , S = w.useContext(f);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Zy(o, ...t)]
}
function Zy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function bs(e) {
    const t = e0(e)
      , n = w.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = w.Children.toArray(i)
          , a = l.find(n0);
        if (a) {
            const u = a.props.children
              , c = l.map(p => p === a ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : p);
            return d.jsx(t, {
                ...s,
                ref: o,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return d.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var Jy = bs("Slot");
function e0(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (w.isValidElement(o)) {
            const s = o0(o)
              , l = r0(i, o.props);
            return o.type !== w.Fragment && (l.ref = r ? Lh(r, s) : s),
            w.cloneElement(o, l)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Ih = Symbol("radix.slottable");
function t0(e) {
    const t = ({children: n}) => d.jsx(d.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Ih,
    t
}
function n0(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Ih
}
function r0(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function o0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function i0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Qs(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: x, children: g} = y
          , h = M.useRef(null)
          , v = M.useRef(new Map).current;
        return d.jsx(o, {
            scope: x,
            itemMap: v,
            collectionRef: h,
            children: g
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = bs(l)
      , u = M.forwardRef( (y, x) => {
        const {scope: g, children: h} = y
          , v = i(l, g)
          , b = Ct(x, v.collectionRef);
        return d.jsx(a, {
            ref: b,
            children: h
        })
    }
    );
    u.displayName = l;
    const c = e + "CollectionItemSlot"
      , p = "data-radix-collection-item"
      , m = bs(c)
      , f = M.forwardRef( (y, x) => {
        const {scope: g, children: h, ...v} = y
          , b = M.useRef(null)
          , C = Ct(x, b)
          , E = i(c, g);
        return M.useEffect( () => (E.itemMap.set(b, {
            ref: b,
            ...v
        }),
        () => void E.itemMap.delete(b))),
        d.jsx(m, {
            [p]: "",
            ref: C,
            children: h
        })
    }
    );
    f.displayName = c;
    function S(y) {
        const x = i(e + "CollectionConsumer", y);
        return M.useCallback( () => {
            const h = x.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${p}]`));
            return Array.from(x.itemMap.values()).sort( (E, k) => v.indexOf(E.ref.current) - v.indexOf(k.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: f
    }, S, r]
}
var s0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , We = s0.reduce( (e, t) => {
    const n = bs(`Primitive.${t}`)
      , r = w.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        d.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Dh(e, t) {
    e && ai.flushSync( () => e.dispatchEvent(t))
}
function Rn(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function l0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e);
    w.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var a0 = "DismissableLayer", Ia = "dismissableLayer.update", u0 = "dismissableLayer.pointerDownOutside", c0 = "dismissableLayer.focusOutside", Td, zh = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ku = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = w.useContext(zh)
      , [c,p] = w.useState(null)
      , m = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,f] = w.useState({})
      , S = Ct(t, k => p(k))
      , y = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(x)
      , h = c ? y.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = h >= g
      , C = f0(k => {
        const j = k.target
          , O = [...u.branches].some(_ => _.contains(j));
        !b || O || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , m)
      , E = p0(k => {
        const j = k.target;
        [...u.branches].some(_ => _.contains(j)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , m);
    return l0(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && l && (k.preventDefault(),
        l()))
    }
    , m),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Td = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            jd(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Td)
            }
    }
    , [c, m, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        jd())
    }
    , [c, u]),
    w.useEffect( () => {
        const k = () => f({});
        return document.addEventListener(Ia, k),
        () => document.removeEventListener(Ia, k)
    }
    , []),
    d.jsx(We.div, {
        ...a,
        ref: S,
        style: {
            pointerEvents: v ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ye(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: ye(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Ku.displayName = a0;
var d0 = "DismissableLayerBranch"
  , Fh = w.forwardRef( (e, t) => {
    const n = w.useContext(zh)
      , r = w.useRef(null)
      , o = Ct(t, r);
    return w.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    d.jsx(We.div, {
        ...e,
        ref: o
    })
}
);
Fh.displayName = d0;
function f0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , r = w.useRef(!1)
      , o = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    $h(u0, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function p0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const o = i => {
            i.target && !r.current && $h(c0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function jd() {
    const e = new CustomEvent(Ia);
    document.dispatchEvent(e)
}
function $h(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Dh(o, i) : o.dispatchEvent(i)
}
var h0 = Ku
  , m0 = Fh
  , Mn = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , g0 = "Portal"
  , Bh = w.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = w.useState(!1);
    Mn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Oh.createPortal(d.jsx(We.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Bh.displayName = g0;
function v0(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Yu = e => {
    const {present: t, children: n} = e
      , r = y0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , i = Ct(r.ref, x0(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
}
;
Yu.displayName = "Presence";
function y0(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , o = w.useRef(e)
      , i = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = v0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = _i(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    Mn( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const m = i.current
              , f = _i(u);
            e ? a("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && m !== f ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Mn( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , p = f => {
                const y = _i(r.current).includes(f.animationName);
                if (f.target === t && y && (a("ANIMATION_END"),
                !o.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , m = f => {
                f.target === t && (i.current = _i(r.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function _i(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function x0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var w0 = Rf[" useInsertionEffect ".trim().toString()] || Mn;
function S0({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = b0({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const p = c.current;
            p !== l && console.warn(`${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = l
        }
        , [l, r])
    }
    const u = w.useCallback(c => {
        var p;
        if (l) {
            const m = C0(c) ? c(e) : c;
            m !== e && ((p = s.current) == null || p.call(s, m))
        } else
            i(c)
    }
    , [l, e, i, s]);
    return [a, u]
}
function b0({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , o = w.useRef(n)
      , i = w.useRef(t);
    return w0( () => {
        i.current = t
    }
    , [t]),
    w.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function C0(e) {
    return typeof e == "function"
}
var E0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , k0 = "VisuallyHidden"
  , Ks = w.forwardRef( (e, t) => d.jsx(We.span, {
    ...e,
    ref: t,
    style: {
        ...E0,
        ...e.style
    }
}));
Ks.displayName = k0;
var N0 = Ks
  , Gu = "ToastProvider"
  , [qu,P0,T0] = i0("Toast")
  , [Uh,ZS] = Qs("Toast", [T0])
  , [j0,Ys] = Uh(Gu)
  , Vh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = w.useState(null)
      , [u,c] = w.useState(0)
      , p = w.useRef(!1)
      , m = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Gu}\`. Expected non-empty \`string\`.`),
    d.jsx(qu.Provider, {
        scope: t,
        children: d.jsx(j0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: w.useCallback( () => c(f => f + 1), []),
            onToastRemove: w.useCallback( () => c(f => f - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: m,
            children: s
        })
    })
}
;
Vh.displayName = Gu;
var Hh = "ToastViewport"
  , R0 = ["F8"]
  , Da = "toast.viewportPause"
  , za = "toast.viewportResume"
  , Wh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=R0, label: o="Notifications ({hotkey})", ...i} = e
      , s = Ys(Hh, n)
      , l = P0(n)
      , a = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , p = w.useRef(null)
      , m = Ct(t, p, s.onViewportChange)
      , f = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    w.useEffect( () => {
        const x = g => {
            var v;
            r.length !== 0 && r.every(b => g[b] || g.code === b) && ((v = p.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = a.current
          , g = p.current;
        if (S && x && g) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const E = new CustomEvent(Da);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const E = new CustomEvent(za);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !1
                }
            }
              , b = E => {
                !x.contains(E.relatedTarget) && v()
            }
              , C = () => {
                x.contains(document.activeElement) || v()
            }
            ;
            return x.addEventListener("focusin", h),
            x.addEventListener("focusout", b),
            x.addEventListener("pointermove", h),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                x.removeEventListener("focusin", h),
                x.removeEventListener("focusout", b),
                x.removeEventListener("pointermove", h),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const y = w.useCallback( ({tabbingDirection: x}) => {
        const h = l().map(v => {
            const b = v.ref.current
              , C = [b, ...V0(b)];
            return x === "forwards" ? C : C.reverse()
        }
        );
        return (x === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return w.useEffect( () => {
        const x = p.current;
        if (x) {
            const g = h => {
                var C, E, k;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const j = document.activeElement
                      , O = h.shiftKey;
                    if (h.target === x && O) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const D = y({
                        tabbingDirection: O ? "backwards" : "forwards"
                    })
                      , Q = D.findIndex(A => A === j);
                    zl(D.slice(Q + 1)) ? h.preventDefault() : O ? (E = u.current) == null || E.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return x.addEventListener("keydown", g),
            () => x.removeEventListener("keydown", g)
        }
    }
    , [l, y]),
    d.jsxs(m0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && d.jsx(Fa, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = y({
                    tabbingDirection: "forwards"
                });
                zl(x)
            }
        }), d.jsx(qu.Slot, {
            scope: n,
            children: d.jsx(We.ol, {
                tabIndex: -1,
                ...i,
                ref: m
            })
        }), S && d.jsx(Fa, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = y({
                    tabbingDirection: "backwards"
                });
                zl(x)
            }
        })]
    })
}
);
Wh.displayName = Hh;
var Qh = "ToastFocusProxy"
  , Fa = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Ys(Qh, n);
    return d.jsx(Ks, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Fa.displayName = Qh;
var ui = "Toast"
  , M0 = "toast.swipeStart"
  , _0 = "toast.swipeMove"
  , O0 = "toast.swipeCancel"
  , A0 = "toast.swipeEnd"
  , Kh = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = S0({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: ui
    });
    return d.jsx(Yu, {
        present: n || l,
        children: d.jsx(D0, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: Rn(e.onPause),
            onResume: Rn(e.onResume),
            onSwipeStart: ye(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ye(e.onSwipeMove, u => {
                const {x: c, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: ye(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ye(e.onSwipeEnd, u => {
                const {x: c, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                a(!1)
            }
            )
        })
    })
}
);
Kh.displayName = ui;
var [L0,I0] = Uh(ui, {
    onClose() {}
})
  , D0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: c, onSwipeMove: p, onSwipeCancel: m, onSwipeEnd: f, ...S} = e
      , y = Ys(ui, n)
      , [x,g] = w.useState(null)
      , h = Ct(t, A => g(A))
      , v = w.useRef(null)
      , b = w.useRef(null)
      , C = o || y.duration
      , E = w.useRef(0)
      , k = w.useRef(C)
      , j = w.useRef(0)
      , {onToastAdd: O, onToastRemove: _} = y
      , F = Rn( () => {
        var q;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((q = y.viewport) == null || q.focus()),
        s()
    }
    )
      , D = w.useCallback(A => {
        !A || A === 1 / 0 || (window.clearTimeout(j.current),
        E.current = new Date().getTime(),
        j.current = window.setTimeout(F, A))
    }
    , [F]);
    w.useEffect( () => {
        const A = y.viewport;
        if (A) {
            const q = () => {
                D(k.current),
                u == null || u()
            }
              , $ = () => {
                const H = new Date().getTime() - E.current;
                k.current = k.current - H,
                window.clearTimeout(j.current),
                a == null || a()
            }
            ;
            return A.addEventListener(Da, $),
            A.addEventListener(za, q),
            () => {
                A.removeEventListener(Da, $),
                A.removeEventListener(za, q)
            }
        }
    }
    , [y.viewport, C, a, u, D]),
    w.useEffect( () => {
        i && !y.isClosePausedRef.current && D(C)
    }
    , [i, C, y.isClosePausedRef, D]),
    w.useEffect( () => (O(),
    () => _()), [O, _]);
    const Q = w.useMemo( () => x ? em(x) : null, [x]);
    return y.viewport ? d.jsxs(d.Fragment, {
        children: [Q && d.jsx(z0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), d.jsx(L0, {
            scope: n,
            onClose: F,
            children: ai.createPortal(d.jsx(qu.ItemSlot, {
                scope: n,
                children: d.jsx(h0, {
                    asChild: !0,
                    onEscapeKeyDown: ye(l, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || F(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: d.jsx(We.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ye(e.onKeyDown, A => {
                            A.key === "Escape" && (l == null || l(A.nativeEvent),
                            A.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: ye(e.onPointerDown, A => {
                            A.button === 0 && (v.current = {
                                x: A.clientX,
                                y: A.clientY
                            })
                        }
                        ),
                        onPointerMove: ye(e.onPointerMove, A => {
                            if (!v.current)
                                return;
                            const q = A.clientX - v.current.x
                              , $ = A.clientY - v.current.y
                              , H = !!b.current
                              , P = ["left", "right"].includes(y.swipeDirection)
                              , T = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , L = P ? T(0, q) : 0
                              , V = P ? 0 : T(0, $)
                              , z = A.pointerType === "touch" ? 10 : 2
                              , K = {
                                x: L,
                                y: V
                            }
                              , G = {
                                originalEvent: A,
                                delta: K
                            };
                            H ? (b.current = K,
                            Oi(_0, p, G, {
                                discrete: !1
                            })) : Rd(K, y.swipeDirection, z) ? (b.current = K,
                            Oi(M0, c, G, {
                                discrete: !1
                            }),
                            A.target.setPointerCapture(A.pointerId)) : (Math.abs(q) > z || Math.abs($) > z) && (v.current = null)
                        }
                        ),
                        onPointerUp: ye(e.onPointerUp, A => {
                            const q = b.current
                              , $ = A.target;
                            if ($.hasPointerCapture(A.pointerId) && $.releasePointerCapture(A.pointerId),
                            b.current = null,
                            v.current = null,
                            q) {
                                const H = A.currentTarget
                                  , P = {
                                    originalEvent: A,
                                    delta: q
                                };
                                Rd(q, y.swipeDirection, y.swipeThreshold) ? Oi(A0, f, P, {
                                    discrete: !0
                                }) : Oi(O0, m, P, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , z0 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Ys(ui, t)
      , [i,s] = w.useState(!1)
      , [l,a] = w.useState(!1);
    return B0( () => s(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : d.jsx(Bh, {
        asChild: !0,
        children: d.jsx(Ks, {
            ...r,
            children: i && d.jsxs(d.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , F0 = "ToastTitle"
  , Yh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(We.div, {
        ...r,
        ref: t
    })
}
);
Yh.displayName = F0;
var $0 = "ToastDescription"
  , Gh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(We.div, {
        ...r,
        ref: t
    })
}
);
Gh.displayName = $0;
var qh = "ToastAction"
  , Xh = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? d.jsx(Jh, {
        altText: n,
        asChild: !0,
        children: d.jsx(Xu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${qh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Xh.displayName = qh;
var Zh = "ToastClose"
  , Xu = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = I0(Zh, n);
    return d.jsx(Jh, {
        asChild: !0,
        children: d.jsx(We.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ye(e.onClick, o.onClose)
        })
    })
}
);
Xu.displayName = Zh;
var Jh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return d.jsx(We.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function em(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        U0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...em(r))
        }
    }
    ),
    t
}
function Oi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Dh(o, i) : o.dispatchEvent(i)
}
var Rd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function B0(e= () => {}
) {
    const t = Rn(e);
    Mn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function U0(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function V0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function zl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var H0 = Vh
  , tm = Wh
  , nm = Kh
  , rm = Yh
  , om = Gh
  , im = Xh
  , sm = Xu;
function lm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = lm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function am() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = lm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Md = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , _d = am
  , um = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return _d(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , p = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const m = Md(c) || Md(p);
        return o[u][m]
    }
    )
      , l = n && Object.entries(n).reduce( (u, c) => {
        let[p,m] = c;
        return m === void 0 || (u[p] = m),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: p, className: m, ...f} = c;
        return Object.entries(f).every(S => {
            let[y,x] = S;
            return Array.isArray(x) ? x.includes({
                ...i,
                ...l
            }[y]) : {
                ...i,
                ...l
            }[y] === x
        }
        ) ? [...u, p, m] : u
    }
    , []);
    return _d(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , cm = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Q0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => w.createElement("svg", {
    ref: a,
    ...Q0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: cm("lucide", o),
    ...l
}, [...s.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = (e, t) => {
    const n = w.forwardRef( ({className: r, ...o}, i) => w.createElement(K0, {
        ref: i,
        iconNode: t,
        className: cm(`lucide-${W0(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = re("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = re("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = re("CalendarClock", [["path", {
    d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
    key: "1osxxc"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M3 10h5",
    key: "r794hk"
}], ["path", {
    d: "M17.5 17.5 16 16.3V14",
    key: "akvzfd"
}], ["circle", {
    cx: "16",
    cy: "16",
    r: "6",
    key: "qoo3c4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = re("Castle", [["path", {
    d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",
    key: "109fe4"
}], ["path", {
    d: "M18 11V4H6v7",
    key: "mon5oj"
}], ["path", {
    d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",
    key: "1k4jtn"
}], ["path", {
    d: "M22 11V9",
    key: "3zbp94"
}], ["path", {
    d: "M2 11V9",
    key: "1x5rnq"
}], ["path", {
    d: "M6 4V2",
    key: "1rsq15"
}], ["path", {
    d: "M18 4V2",
    key: "1jsdo1"
}], ["path", {
    d: "M10 4V2",
    key: "75d9ly"
}], ["path", {
    d: "M14 4V2",
    key: "8nj3z6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = re("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = re("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = re("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = re("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = re("ClipboardList", [["rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1",
    ry: "1",
    key: "tgr4d6"
}], ["path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    key: "116196"
}], ["path", {
    d: "M12 11h4",
    key: "1jrz19"
}], ["path", {
    d: "M12 16h4",
    key: "n85exb"
}], ["path", {
    d: "M8 11h.01",
    key: "1dfujw"
}], ["path", {
    d: "M8 16h.01",
    key: "18s6g9"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = re("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = re("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = re("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = re("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = re("Flag", [["path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
    key: "i9b6wo"
}], ["line", {
    x1: "4",
    x2: "4",
    y1: "22",
    y2: "15",
    key: "1cm3nv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = re("Gem", [["path", {
    d: "M6 3h12l4 6-10 13L2 9Z",
    key: "1pcd5k"
}], ["path", {
    d: "M11 3 8 9l4 13 4-13-3-6",
    key: "1fcu3u"
}], ["path", {
    d: "M2 9h20",
    key: "16fsjt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = re("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = re("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = re("Layers", [["path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    key: "8b97xw"
}], ["path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    key: "dd6zsq"
}], ["path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
    key: "ep9fru"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = re("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = re("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = re("PenTool", [["path", {
    d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
    key: "nt11vn"
}], ["path", {
    d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
    key: "15qc1e"
}], ["path", {
    d: "m2.3 2.3 7.286 7.286",
    key: "1wuzzi"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "2",
    key: "xmgehs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = re("Radio", [["path", {
    d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9",
    key: "1vaf9d"
}], ["path", {
    d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",
    key: "u1ii0m"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}], ["path", {
    d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",
    key: "1j5fej"
}], ["path", {
    d: "M19.1 4.9C23 8.8 23 15.1 19.1 19",
    key: "10b0cb"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = re("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = re("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = re("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = re("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Zu = "-"
  , x1 = e => {
    const t = S1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Zu);
            return l[0] === "" && l.length !== 1 && l.shift(),
            fm(l, t) || w1(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , fm = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? fm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Zu);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , Od = /^\[(.+)\]$/
  , w1 = e => {
    if (Od.test(e)) {
        const t = Od.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , S1 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return C1(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        $a(s, r, i, t)
    }
    ),
    r
}
  , $a = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Ad(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (b1(o)) {
                $a(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            $a(s, Ad(t, i), n, r)
        }
        )
    }
    )
}
  , Ad = (e, t) => {
    let n = e;
    return t.split(Zu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , b1 = e => e.isThemeGetter
  , C1 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , E1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , pm = "!"
  , k1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, c = 0, p;
        for (let x = 0; x < l.length; x++) {
            let g = l[x];
            if (u === 0) {
                if (g === o && (r || l.slice(x, x + i) === t)) {
                    a.push(l.slice(c, x)),
                    c = x + i;
                    continue
                }
                if (g === "/") {
                    p = x;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const m = a.length === 0 ? l : l.substring(c)
          , f = m.startsWith(pm)
          , S = f ? m.substring(1) : m
          , y = p && p > c ? p - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: f,
            baseClassName: S,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , N1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , P1 = e => ({
    cache: E1(e.cacheSize),
    parseClassName: k1(e),
    ...x1(e)
})
  , T1 = /\s+/
  , j1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(T1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: c, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: f} = n(u);
        let S = !!f
          , y = r(S ? m.substring(0, f) : m);
        if (!y) {
            if (!S) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (y = r(m),
            !y) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            S = !1
        }
        const x = N1(c).join(":")
          , g = p ? x + pm : x
          , h = g + y;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(y, S);
        for (let b = 0; b < v.length; ++b) {
            const C = v[b];
            i.push(g + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function R1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = hm(t)) && (r && (r += " "),
        r += n);
    return r
}
const hm = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = hm(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function M1(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (c, p) => p(c), e());
        return n = P1(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const c = j1(a, n);
        return o(a, c),
        c
    }
    return function() {
        return i(R1.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , mm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , _1 = /^\d+\/\d+$/
  , O1 = new Set(["px", "full", "screen"])
  , A1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , L1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , I1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , D1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , z1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , It = e => Lr(e) || O1.has(e) || _1.test(e)
  , on = e => oo(e, "length", Q1)
  , Lr = e => !!e && !Number.isNaN(Number(e))
  , Fl = e => oo(e, "number", Lr)
  , yo = e => !!e && Number.isInteger(Number(e))
  , F1 = e => e.endsWith("%") && Lr(e.slice(0, -1))
  , W = e => mm.test(e)
  , sn = e => A1.test(e)
  , $1 = new Set(["length", "size", "percentage"])
  , B1 = e => oo(e, $1, gm)
  , U1 = e => oo(e, "position", gm)
  , V1 = new Set(["image", "url"])
  , H1 = e => oo(e, V1, Y1)
  , W1 = e => oo(e, "", K1)
  , xo = () => !0
  , oo = (e, t, n) => {
    const r = mm.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Q1 = e => L1.test(e) && !I1.test(e)
  , gm = () => !1
  , K1 = e => D1.test(e)
  , Y1 = e => z1.test(e)
  , G1 = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , o = oe("borderColor")
      , i = oe("borderRadius")
      , s = oe("borderSpacing")
      , l = oe("borderWidth")
      , a = oe("contrast")
      , u = oe("grayscale")
      , c = oe("hueRotate")
      , p = oe("invert")
      , m = oe("gap")
      , f = oe("gradientColorStops")
      , S = oe("gradientColorStopPositions")
      , y = oe("inset")
      , x = oe("margin")
      , g = oe("opacity")
      , h = oe("padding")
      , v = oe("saturate")
      , b = oe("scale")
      , C = oe("sepia")
      , E = oe("skew")
      , k = oe("space")
      , j = oe("translate")
      , O = () => ["auto", "contain", "none"]
      , _ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", W, t]
      , D = () => [W, t]
      , Q = () => ["", It, on]
      , A = () => ["auto", Lr, W]
      , q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", W]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [Lr, W];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xo],
            spacing: [It, on],
            blur: ["none", "", sn, W],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", sn, W],
            borderSpacing: D(),
            borderWidth: Q(),
            contrast: V(),
            grayscale: T(),
            hueRotate: V(),
            invert: T(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [F1, on],
            inset: F(),
            margin: F(),
            opacity: V(),
            padding: D(),
            saturate: V(),
            scale: V(),
            sepia: T(),
            skew: V(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", W]
            }],
            container: ["container"],
            columns: [{
                columns: [sn]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...q(), W]
            }],
            overflow: [{
                overflow: _()
            }],
            "overflow-x": [{
                "overflow-x": _()
            }],
            "overflow-y": [{
                "overflow-y": _()
            }],
            overscroll: [{
                overscroll: O()
            }],
            "overscroll-x": [{
                "overscroll-x": O()
            }],
            "overscroll-y": [{
                "overscroll-y": O()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", yo, W]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", W]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", yo, W]
            }],
            "grid-cols": [{
                "grid-cols": [xo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", yo, W]
                }, W]
            }],
            "col-start": [{
                "col-start": A()
            }],
            "col-end": [{
                "col-end": A()
            }],
            "grid-rows": [{
                "grid-rows": [xo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [yo, W]
                }, W]
            }],
            "row-start": [{
                "row-start": A()
            }],
            "row-end": [{
                "row-end": A()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", W]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", W]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
            }],
            "min-w": [{
                "min-w": [W, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [sn]
                }, sn]
            }],
            h: [{
                h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [W, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", sn, on]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fl]
            }],
            "font-family": [{
                font: [xo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Lr, Fl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", It, W]
            }],
            "list-image": [{
                "list-image": ["none", W]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", W]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", It, on]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", It, W]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", W]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...q(), U1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", B1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, H1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [f]
            }],
            "gradient-via": [{
                via: [f]
            }],
            "gradient-to": [{
                to: [f]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [It, W]
            }],
            "outline-w": [{
                outline: [It, on]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [It, on]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", sn, W1]
            }],
            "shadow-color": [{
                shadow: [xo]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", sn, W]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", W]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", W]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [yo, W]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", W]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [It, on, Fl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , q1 = M1(G1);
function Fn(...e) {
    return q1(am(e))
}
const X1 = H0
  , vm = w.forwardRef( ({className: e, ...t}, n) => d.jsx(tm, {
    ref: n,
    className: Fn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
vm.displayName = tm.displayName;
const Z1 = um("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ym = w.forwardRef( ({className: e, variant: t, ...n}, r) => d.jsx(nm, {
    ref: r,
    className: Fn(Z1({
        variant: t
    }), e),
    ...n
}));
ym.displayName = nm.displayName;
const J1 = w.forwardRef( ({className: e, ...t}, n) => d.jsx(im, {
    ref: n,
    className: Fn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
J1.displayName = im.displayName;
const xm = w.forwardRef( ({className: e, ...t}, n) => d.jsx(sm, {
    ref: n,
    className: Fn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: d.jsx(dm, {
        className: "h-4 w-4"
    })
}));
xm.displayName = sm.displayName;
const wm = w.forwardRef( ({className: e, ...t}, n) => d.jsx(rm, {
    ref: n,
    className: Fn("text-sm font-semibold", e),
    ...t
}));
wm.displayName = rm.displayName;
const Sm = w.forwardRef( ({className: e, ...t}, n) => d.jsx(om, {
    ref: n,
    className: Fn("text-sm opacity-90", e),
    ...t
}));
Sm.displayName = om.displayName;
function ex() {
    const {toasts: e} = Xy();
    return d.jsxs(X1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return d.jsxs(ym, {
                ...i,
                children: [d.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && d.jsx(wm, {
                        children: n
                    }), r && d.jsx(Sm, {
                        children: r
                    })]
                }), o, d.jsx(xm, {})]
            }, t)
        }), d.jsx(vm, {})]
    })
}
var Ld = ["light", "dark"]
  , tx = "(prefers-color-scheme: dark)"
  , nx = w.createContext(void 0)
  , rx = {
    setTheme: e => {}
    ,
    themes: []
}
  , ox = () => {
    var e;
    return (e = w.useContext(nx)) != null ? e : rx
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = o ? Ld.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (S, y=!1, x=!0) => {
        let g = s ? s[S] : S
          , h = y ? S + "|| ''" : `'${g}'`
          , v = "";
        return o && x && !y && Ld.includes(S) && (v += `d.style.colorScheme = '${S}';`),
        n === "class" ? y || g ? v += `c.add(${h})` : v += "null" : g && (v += `d[s](n,${h})`),
        v
    }
      , f = e ? `!function(){${c}${m(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${tx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(i, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${p}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
}
);
var ix = e => {
    switch (e) {
    case "success":
        return ax;
    case "info":
        return cx;
    case "warning":
        return ux;
    case "error":
        return dx;
    default:
        return null
    }
}
  , sx = Array(12).fill(0)
  , lx = ({visible: e, className: t}) => M.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, M.createElement("div", {
    className: "sonner-spinner"
}, sx.map( (n, r) => M.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , ax = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , ux = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , cx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , dx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , fx = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, M.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), M.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , px = () => {
    let[e,t] = M.useState(document.hidden);
    return M.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Ba = 1
  , hx = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ba++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                if (i = ["resolve", a],
                M.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (gx(a) && !a.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async a => {
                if (i = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, u) => s.then( () => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Ba++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , ze = new hx
  , mx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ba++;
    return ze.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , gx = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , vx = mx
  , yx = () => ze.toasts
  , xx = () => ze.getActiveToasts();
Object.assign(vx, {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading
}, {
    getHistory: yx,
    getToasts: xx
});
function wx(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
wx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ai(e) {
    return e.label !== void 0
}
var Sx = 3
  , bx = "32px"
  , Cx = "16px"
  , Id = 4e3
  , Ex = 356
  , kx = 14
  , Nx = 20
  , Px = 200;
function ft(...e) {
    return e.filter(Boolean).join(" ")
}
function Tx(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var jx = e => {
    var t, n, r, o, i, s, l, a, u, c, p;
    let {invert: m, toast: f, unstyled: S, interacting: y, setHeights: x, visibleToasts: g, heights: h, index: v, toasts: b, expanded: C, removeToast: E, defaultRichColors: k, closeButton: j, style: O, cancelButtonStyle: _, actionButtonStyle: F, className: D="", descriptionClassName: Q="", duration: A, position: q, gap: $, loadingIcon: H, expandByDefault: P, classNames: T, icons: L, closeButtonAriaLabel: V="Close toast", pauseWhenPageIsHidden: z} = e
      , [K,G] = M.useState(null)
      , [me,ke] = M.useState(null)
      , [J,cr] = M.useState(!1)
      , [Xt,$n] = M.useState(!1)
      , [Zt,dr] = M.useState(!1)
      , [Jt,di] = M.useState(!1)
      , [il,fi] = M.useState(!1)
      , [sl,lo] = M.useState(0)
      , [fr,cc] = M.useState(0)
      , ao = M.useRef(f.duration || A || Id)
      , dc = M.useRef(null)
      , Bn = M.useRef(null)
      , dg = v === 0
      , fg = v + 1 <= g
      , et = f.type
      , pr = f.dismissible !== !1
      , pg = f.className || ""
      , hg = f.descriptionClassName || ""
      , pi = M.useMemo( () => h.findIndex(B => B.toastId === f.id) || 0, [h, f.id])
      , mg = M.useMemo( () => {
        var B;
        return (B = f.closeButton) != null ? B : j
    }
    , [f.closeButton, j])
      , fc = M.useMemo( () => f.duration || A || Id, [f.duration, A])
      , ll = M.useRef(0)
      , hr = M.useRef(0)
      , pc = M.useRef(0)
      , mr = M.useRef(null)
      , [gg,vg] = q.split("-")
      , hc = M.useMemo( () => h.reduce( (B, te, le) => le >= pi ? B : B + te.height, 0), [h, pi])
      , mc = px()
      , yg = f.invert || m
      , al = et === "loading";
    hr.current = M.useMemo( () => pi * $ + hc, [pi, hc]),
    M.useEffect( () => {
        ao.current = fc
    }
    , [fc]),
    M.useEffect( () => {
        cr(!0)
    }
    , []),
    M.useEffect( () => {
        let B = Bn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return cc(te),
            x(le => [{
                toastId: f.id,
                height: te,
                position: f.position
            }, ...le]),
            () => x(le => le.filter(at => at.toastId !== f.id))
        }
    }
    , [x, f.id]),
    M.useLayoutEffect( () => {
        if (!J)
            return;
        let B = Bn.current
          , te = B.style.height;
        B.style.height = "auto";
        let le = B.getBoundingClientRect().height;
        B.style.height = te,
        cc(le),
        x(at => at.find(ut => ut.toastId === f.id) ? at.map(ut => ut.toastId === f.id ? {
            ...ut,
            height: le
        } : ut) : [{
            toastId: f.id,
            height: le,
            position: f.position
        }, ...at])
    }
    , [J, f.title, f.description, x, f.id]);
    let en = M.useCallback( () => {
        $n(!0),
        lo(hr.current),
        x(B => B.filter(te => te.toastId !== f.id)),
        setTimeout( () => {
            E(f)
        }
        , Px)
    }
    , [f, E, x, hr]);
    M.useEffect( () => {
        if (f.promise && et === "loading" || f.duration === 1 / 0 || f.type === "loading")
            return;
        let B;
        return C || y || z && mc ? ( () => {
            if (pc.current < ll.current) {
                let te = new Date().getTime() - ll.current;
                ao.current = ao.current - te
            }
            pc.current = new Date().getTime()
        }
        )() : ao.current !== 1 / 0 && (ll.current = new Date().getTime(),
        B = setTimeout( () => {
            var te;
            (te = f.onAutoClose) == null || te.call(f, f),
            en()
        }
        , ao.current)),
        () => clearTimeout(B)
    }
    , [C, y, f, et, z, mc, en]),
    M.useEffect( () => {
        f.delete && en()
    }
    , [en, f.delete]);
    function xg() {
        var B, te, le;
        return L != null && L.loading ? M.createElement("div", {
            className: ft(T == null ? void 0 : T.loader, (B = f == null ? void 0 : f.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, L.loading) : H ? M.createElement("div", {
            className: ft(T == null ? void 0 : T.loader, (te = f == null ? void 0 : f.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, H) : M.createElement(lx, {
            className: ft(T == null ? void 0 : T.loader, (le = f == null ? void 0 : f.classNames) == null ? void 0 : le.loader),
            visible: et === "loading"
        })
    }
    return M.createElement("li", {
        tabIndex: 0,
        ref: Bn,
        className: ft(D, pg, T == null ? void 0 : T.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[et], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[et]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : k,
        "data-styled": !(f.jsx || f.unstyled || S),
        "data-mounted": J,
        "data-promise": !!f.promise,
        "data-swiped": il,
        "data-removed": Xt,
        "data-visible": fg,
        "data-y-position": gg,
        "data-x-position": vg,
        "data-index": v,
        "data-front": dg,
        "data-swiping": Zt,
        "data-dismissible": pr,
        "data-type": et,
        "data-invert": yg,
        "data-swipe-out": Jt,
        "data-swipe-direction": me,
        "data-expanded": !!(C || P && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": b.length - v,
            "--offset": `${Xt ? sl : hr.current}px`,
            "--initial-height": P ? "auto" : `${fr}px`,
            ...O,
            ...f.style
        },
        onDragEnd: () => {
            dr(!1),
            G(null),
            mr.current = null
        }
        ,
        onPointerDown: B => {
            al || !pr || (dc.current = new Date,
            lo(hr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (dr(!0),
            mr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, te, le, at;
            if (Jt || !pr)
                return;
            mr.current = null;
            let ut = Number(((B = Bn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , tn = Number(((te = Bn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Un = new Date().getTime() - ((le = dc.current) == null ? void 0 : le.getTime())
              , ct = K === "x" ? ut : tn
              , nn = Math.abs(ct) / Un;
            if (Math.abs(ct) >= Nx || nn > .11) {
                lo(hr.current),
                (at = f.onDismiss) == null || at.call(f, f),
                ke(K === "x" ? ut > 0 ? "right" : "left" : tn > 0 ? "down" : "up"),
                en(),
                di(!0),
                fi(!1);
                return
            }
            dr(!1),
            G(null)
        }
        ,
        onPointerMove: B => {
            var te, le, at, ut;
            if (!mr.current || !pr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let tn = B.clientY - mr.current.y
              , Un = B.clientX - mr.current.x
              , ct = (le = e.swipeDirections) != null ? le : Tx(q);
            !K && (Math.abs(Un) > 1 || Math.abs(tn) > 1) && G(Math.abs(Un) > Math.abs(tn) ? "x" : "y");
            let nn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ct.includes("top") || ct.includes("bottom")) && (ct.includes("top") && tn < 0 || ct.includes("bottom") && tn > 0) && (nn.y = tn) : K === "x" && (ct.includes("left") || ct.includes("right")) && (ct.includes("left") && Un < 0 || ct.includes("right") && Un > 0) && (nn.x = Un),
            (Math.abs(nn.x) > 0 || Math.abs(nn.y) > 0) && fi(!0),
            (at = Bn.current) == null || at.style.setProperty("--swipe-amount-x", `${nn.x}px`),
            (ut = Bn.current) == null || ut.style.setProperty("--swipe-amount-y", `${nn.y}px`)
        }
    }, mg && !f.jsx ? M.createElement("button", {
        "aria-label": V,
        "data-disabled": al,
        "data-close-button": !0,
        onClick: al || !pr ? () => {}
        : () => {
            var B;
            en(),
            (B = f.onDismiss) == null || B.call(f, f)
        }
        ,
        className: ft(T == null ? void 0 : T.closeButton, (o = f == null ? void 0 : f.classNames) == null ? void 0 : o.closeButton)
    }, (i = L == null ? void 0 : L.close) != null ? i : fx) : null, f.jsx || w.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : M.createElement(M.Fragment, null, et || f.icon || f.promise ? M.createElement("div", {
        "data-icon": "",
        className: ft(T == null ? void 0 : T.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || xg() : null, f.type !== "loading" ? f.icon || (L == null ? void 0 : L[et]) || ix(et) : null) : null, M.createElement("div", {
        "data-content": "",
        className: ft(T == null ? void 0 : T.content, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.content)
    }, M.createElement("div", {
        "data-title": "",
        className: ft(T == null ? void 0 : T.title, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? M.createElement("div", {
        "data-description": "",
        className: ft(Q, hg, T == null ? void 0 : T.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), w.isValidElement(f.cancel) ? f.cancel : f.cancel && Ai(f.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || _,
        onClick: B => {
            var te, le;
            Ai(f.cancel) && pr && ((le = (te = f.cancel).onClick) == null || le.call(te, B),
            en())
        }
        ,
        className: ft(T == null ? void 0 : T.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, w.isValidElement(f.action) ? f.action : f.action && Ai(f.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || F,
        onClick: B => {
            var te, le;
            Ai(f.action) && ((le = (te = f.action).onClick) == null || le.call(te, B),
            !B.defaultPrevented && en())
        }
        ,
        className: ft(T == null ? void 0 : T.actionButton, (p = f == null ? void 0 : f.classNames) == null ? void 0 : p.actionButton)
    }, f.action.label) : null))
}
;
function Dd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Rx(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , l = i ? Cx : bx;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : a(l)
    }
    ),
    n
}
var Mx = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: l, offset: a, mobileOffset: u, theme: c="light", richColors: p, duration: m, style: f, visibleToasts: S=Sx, toastOptions: y, dir: x=Dd(), gap: g=kx, loadingIcon: h, icons: v, containerAriaLabel: b="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,k] = M.useState([])
      , j = M.useMemo( () => Array.from(new Set([r].concat(E.filter(z => z.position).map(z => z.position)))), [E, r])
      , [O,_] = M.useState([])
      , [F,D] = M.useState(!1)
      , [Q,A] = M.useState(!1)
      , [q,$] = M.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , H = M.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = M.useRef(null)
      , L = M.useRef(!1)
      , V = M.useCallback(z => {
        k(K => {
            var G;
            return (G = K.find(me => me.id === z.id)) != null && G.delete || ze.dismiss(z.id),
            K.filter( ({id: me}) => me !== z.id)
        }
        )
    }
    , []);
    return M.useEffect( () => ze.subscribe(z => {
        if (z.dismiss) {
            k(K => K.map(G => G.id === z.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Oh.flushSync( () => {
                k(K => {
                    let G = K.findIndex(me => me.id === z.id);
                    return G !== -1 ? [...K.slice(0, G), {
                        ...K[G],
                        ...z
                    }, ...K.slice(G + 1)] : [z, ...K]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    M.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: K}) => {
                $(K ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: G}) => {
                try {
                    $(G ? "dark" : "light")
                } catch (me) {
                    console.error(me)
                }
            }
            )
        }
    }
    , [c]),
    M.useEffect( () => {
        E.length <= 1 && D(!1)
    }
    , [E]),
    M.useEffect( () => {
        let z = K => {
            var G, me;
            o.every(ke => K[ke] || K.code === ke) && (D(!0),
            (G = H.current) == null || G.focus()),
            K.code === "Escape" && (document.activeElement === H.current || (me = H.current) != null && me.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [o]),
    M.useEffect( () => {
        if (H.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                L.current = !1)
            }
    }
    , [H.current]),
    M.createElement("section", {
        ref: t,
        "aria-label": `${b} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, j.map( (z, K) => {
        var G;
        let[me,ke] = z.split("-");
        return E.length ? M.createElement("ol", {
            key: z,
            dir: x === "auto" ? Dd() : x,
            tabIndex: -1,
            ref: H,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": q,
            "data-y-position": me,
            "data-lifted": F && E.length > 1 && !i,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((G = O[0]) == null ? void 0 : G.height) || 0}px`,
                "--width": `${Ex}px`,
                "--gap": `${g}px`,
                ...f,
                ...Rx(a, u)
            },
            onBlur: J => {
                L.current && !J.currentTarget.contains(J.relatedTarget) && (L.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                T.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                Q || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || A(!0)
            }
            ,
            onPointerUp: () => A(!1)
        }, E.filter(J => !J.position && K === 0 || J.position === z).map( (J, cr) => {
            var Xt, $n;
            return M.createElement(jx, {
                key: J.id,
                icons: v,
                index: cr,
                toast: J,
                defaultRichColors: p,
                duration: (Xt = y == null ? void 0 : y.duration) != null ? Xt : m,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: ($n = y == null ? void 0 : y.closeButton) != null ? $n : s,
                interacting: Q,
                position: z,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: V,
                toasts: E.filter(Zt => Zt.position == J.position),
                heights: O.filter(Zt => Zt.position == J.position),
                setHeights: _,
                expandByDefault: i,
                gap: g,
                loadingIcon: h,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const _x = ({...e}) => {
    const {theme: t="system"} = ox();
    return d.jsx(Mx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , Ox = ["top", "right", "bottom", "left"]
  , _n = Math.min
  , Ke = Math.max
  , Cs = Math.round
  , Li = Math.floor
  , On = e => ({
    x: e,
    y: e
})
  , Ax = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Lx = {
    start: "end",
    end: "start"
};
function Ua(e, t, n) {
    return Ke(e, _n(t, n))
}
function Yt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Gt(e) {
    return e.split("-")[0]
}
function io(e) {
    return e.split("-")[1]
}
function Ju(e) {
    return e === "x" ? "y" : "x"
}
function ec(e) {
    return e === "y" ? "height" : "width"
}
function An(e) {
    return ["top", "bottom"].includes(Gt(e)) ? "y" : "x"
}
function tc(e) {
    return Ju(An(e))
}
function Ix(e, t, n) {
    n === void 0 && (n = !1);
    const r = io(e)
      , o = tc(e)
      , i = ec(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Es(s)),
    [s, Es(s)]
}
function Dx(e) {
    const t = Es(e);
    return [Va(e), t, Va(t)]
}
function Va(e) {
    return e.replace(/start|end/g, t => Lx[t])
}
function zx(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function Fx(e, t, n, r) {
    const o = io(e);
    let i = zx(Gt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Va)))),
    i
}
function Es(e) {
    return e.replace(/left|right|bottom|top/g, t => Ax[t])
}
function $x(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function bm(e) {
    return typeof e != "number" ? $x(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ks(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function zd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = An(t)
      , s = tc(t)
      , l = ec(s)
      , a = Gt(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , p = r.y + r.height / 2 - o.height / 2
      , m = r[l] / 2 - o[l] / 2;
    let f;
    switch (a) {
    case "top":
        f = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        f = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        f = {
            x: r.x + r.width,
            y: p
        };
        break;
    case "left":
        f = {
            x: r.x - o.width,
            y: p
        };
        break;
    default:
        f = {
            x: r.x,
            y: r.y
        }
    }
    switch (io(t)) {
    case "start":
        f[s] -= m * (n && u ? -1 : 1);
        break;
    case "end":
        f[s] += m * (n && u ? -1 : 1);
        break
    }
    return f
}
const Bx = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: p} = zd(u, r, a)
      , m = r
      , f = {}
      , S = 0;
    for (let y = 0; y < l.length; y++) {
        const {name: x, fn: g} = l[y]
          , {x: h, y: v, data: b, reset: C} = await g({
            x: c,
            y: p,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = h ?? c,
        p = v ?? p,
        f = {
            ...f,
            [x]: {
                ...f[x],
                ...b
            }
        },
        C && S <= 50 && (S++,
        typeof C == "object" && (C.placement && (m = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: c, y: p} = zd(u, m, a)),
        y = -1)
    }
    return {
        x: c,
        y: p,
        placement: m,
        strategy: o,
        middlewareData: f
    }
}
;
async function Xo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: p="floating", altBoundary: m=!1, padding: f=0} = Yt(t, e)
      , S = bm(f)
      , x = l[m ? p === "floating" ? "reference" : "floating" : p]
      , g = ks(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    }))
      , h = p === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , b = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = ks(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: v,
        strategy: a
    }) : h);
    return {
        top: (g.top - C.top + S.top) / b.y,
        bottom: (C.bottom - g.bottom + S.bottom) / b.y,
        left: (g.left - C.left + S.left) / b.x,
        right: (C.right - g.right + S.right) / b.x
    }
}
const Ux = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: c=0} = Yt(e, t) || {};
        if (u == null)
            return {};
        const p = bm(c)
          , m = {
            x: n,
            y: r
        }
          , f = tc(o)
          , S = ec(f)
          , y = await s.getDimensions(u)
          , x = f === "y"
          , g = x ? "top" : "left"
          , h = x ? "bottom" : "right"
          , v = x ? "clientHeight" : "clientWidth"
          , b = i.reference[S] + i.reference[f] - m[f] - i.floating[S]
          , C = m[f] - i.reference[f]
          , E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = E ? E[v] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(E))) && (k = l.floating[v] || i.floating[S]);
        const j = b / 2 - C / 2
          , O = k / 2 - y[S] / 2 - 1
          , _ = _n(p[g], O)
          , F = _n(p[h], O)
          , D = _
          , Q = k - y[S] - F
          , A = k / 2 - y[S] / 2 + j
          , q = Ua(D, A, Q)
          , $ = !a.arrow && io(o) != null && A !== q && i.reference[S] / 2 - (A < D ? _ : F) - y[S] / 2 < 0
          , H = $ ? A < D ? A - D : A - Q : 0;
        return {
            [f]: m[f] + H,
            data: {
                [f]: q,
                centerOffset: A - q - H,
                ...$ && {
                    alignmentOffset: H
                }
            },
            reset: $
        }
    }
})
  , Vx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: c=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: y=!0, ...x} = Yt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const g = Gt(o)
              , h = An(l)
              , v = Gt(l) === l
              , b = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , C = m || (v || !y ? [Es(l)] : Dx(l))
              , E = S !== "none";
            !m && E && C.push(...Fx(l, y, S, b));
            const k = [l, ...C]
              , j = await Xo(t, x)
              , O = [];
            let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && O.push(j[g]),
            p) {
                const A = Ix(o, s, b);
                O.push(j[A[0]], j[A[1]])
            }
            if (_ = [..._, {
                placement: o,
                overflows: O
            }],
            !O.every(A => A <= 0)) {
                var F, D;
                const A = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , q = k[A];
                if (q)
                    return {
                        data: {
                            index: A,
                            overflows: _
                        },
                        reset: {
                            placement: q
                        }
                    };
                let $ = (D = _.filter(H => H.overflows[0] <= 0).sort( (H, P) => H.overflows[1] - P.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!$)
                    switch (f) {
                    case "bestFit":
                        {
                            var Q;
                            const H = (Q = _.filter(P => {
                                if (E) {
                                    const T = An(P.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(T => T > 0).reduce( (T, L) => T + L, 0)]).sort( (P, T) => P[1] - T[1])[0]) == null ? void 0 : Q[0];
                            H && ($ = H);
                            break
                        }
                    case "initialPlacement":
                        $ = l;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Fd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function $d(e) {
    return Ox.some(t => e[t] >= 0)
}
const Hx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Yt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Xo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Fd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: $d(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Xo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Fd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: $d(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Wx(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Gt(n)
      , l = io(n)
      , a = An(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = i && a ? -1 : 1
      , p = Yt(t, e);
    let {mainAxis: m, crossAxis: f, alignmentAxis: S} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return l && typeof S == "number" && (f = l === "end" ? S * -1 : S),
    a ? {
        x: f * c,
        y: m * u
    } : {
        x: m * u,
        y: f * c
    }
}
const Qx = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await Wx(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , Kx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: x => {
                    let {x: g, y: h} = x;
                    return {
                        x: g,
                        y: h
                    }
                }
            }, ...a} = Yt(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Xo(t, a)
              , p = An(Gt(o))
              , m = Ju(p);
            let f = u[m]
              , S = u[p];
            if (i) {
                const x = m === "y" ? "top" : "left"
                  , g = m === "y" ? "bottom" : "right"
                  , h = f + c[x]
                  , v = f - c[g];
                f = Ua(h, f, v)
            }
            if (s) {
                const x = p === "y" ? "top" : "left"
                  , g = p === "y" ? "bottom" : "right"
                  , h = S + c[x]
                  , v = S - c[g];
                S = Ua(h, S, v)
            }
            const y = l.fn({
                ...t,
                [m]: f,
                [p]: S
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [m]: i,
                        [p]: s
                    }
                }
            }
        }
    }
}
  , Yx = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Yt(e, t)
              , c = {
                x: n,
                y: r
            }
              , p = An(o)
              , m = Ju(p);
            let f = c[m]
              , S = c[p];
            const y = Yt(l, t)
              , x = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (a) {
                const v = m === "y" ? "height" : "width"
                  , b = i.reference[m] - i.floating[v] + x.mainAxis
                  , C = i.reference[m] + i.reference[v] - x.mainAxis;
                f < b ? f = b : f > C && (f = C)
            }
            if (u) {
                var g, h;
                const v = m === "y" ? "width" : "height"
                  , b = ["top", "left"].includes(Gt(o))
                  , C = i.reference[p] - i.floating[v] + (b && ((g = s.offset) == null ? void 0 : g[p]) || 0) + (b ? 0 : x.crossAxis)
                  , E = i.reference[p] + i.reference[v] + (b ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) - (b ? x.crossAxis : 0);
                S < C ? S = C : S > E && (S = E)
            }
            return {
                [m]: f,
                [p]: S
            }
        }
    }
}
  , Gx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Yt(e, t)
              , c = await Xo(t, u)
              , p = Gt(o)
              , m = io(o)
              , f = An(o) === "y"
              , {width: S, height: y} = i.floating;
            let x, g;
            p === "top" || p === "bottom" ? (x = p,
            g = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (g = p,
            x = m === "end" ? "top" : "bottom");
            const h = y - c.top - c.bottom
              , v = S - c.left - c.right
              , b = _n(y - c[x], h)
              , C = _n(S - c[g], v)
              , E = !t.middlewareData.shift;
            let k = b
              , j = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            E && !m) {
                const _ = Ke(c.left, 0)
                  , F = Ke(c.right, 0)
                  , D = Ke(c.top, 0)
                  , Q = Ke(c.bottom, 0);
                f ? j = S - 2 * (_ !== 0 || F !== 0 ? _ + F : Ke(c.left, c.right)) : k = y - 2 * (D !== 0 || Q !== 0 ? D + Q : Ke(c.top, c.bottom))
            }
            await a({
                ...t,
                availableWidth: j,
                availableHeight: k
            });
            const O = await s.getDimensions(l.floating);
            return S !== O.width || y !== O.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Gs() {
    return typeof window < "u"
}
function so(e) {
    return Cm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Lt(e) {
    var t;
    return (t = (Cm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Cm(e) {
    return Gs() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function Et(e) {
    return Gs() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function At(e) {
    return Gs() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function Bd(e) {
    return !Gs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
function ci(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function qx(e) {
    return ["table", "td", "th"].includes(so(e))
}
function qs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function nc(e) {
    const t = rc()
      , n = Et(e) ? kt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function Xx(e) {
    let t = Ln(e);
    for (; At(t) && !Jr(t); ) {
        if (nc(t))
            return t;
        if (qs(t))
            return null;
        t = Ln(t)
    }
    return null
}
function rc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Jr(e) {
    return ["html", "body", "#document"].includes(so(e))
}
function kt(e) {
    return qe(e).getComputedStyle(e)
}
function Xs(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ln(e) {
    if (so(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Bd(e) && e.host || Lt(e);
    return Bd(t) ? t.host : t
}
function Em(e) {
    const t = Ln(e);
    return Jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : At(t) && ci(t) ? t : Em(t)
}
function Zo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Em(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = qe(o);
    if (i) {
        const l = Ha(s);
        return t.concat(s, s.visualViewport || [], ci(o) ? o : [], l && n ? Zo(l) : [])
    }
    return t.concat(o, Zo(o, [], n))
}
function Ha(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function km(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = At(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = Cs(n) !== i || Cs(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function oc(e) {
    return Et(e) ? e : e.contextElement
}
function Ir(e) {
    const t = oc(e);
    if (!At(t))
        return On(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = km(t);
    let s = (i ? Cs(n.width) : n.width) / r
      , l = (i ? Cs(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const Zx = On(0);
function Nm(e) {
    const t = qe(e);
    return !rc() || !t.visualViewport ? Zx : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Jx(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function lr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = oc(e);
    let s = On(1);
    t && (r ? Et(r) && (s = Ir(r)) : s = Ir(e));
    const l = Jx(i, n, r) ? Nm(i) : On(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , c = o.width / s.x
      , p = o.height / s.y;
    if (i) {
        const m = qe(i)
          , f = r && Et(r) ? qe(r) : r;
        let S = m
          , y = Ha(S);
        for (; y && r && f !== S; ) {
            const x = Ir(y)
              , g = y.getBoundingClientRect()
              , h = kt(y)
              , v = g.left + (y.clientLeft + parseFloat(h.paddingLeft)) * x.x
              , b = g.top + (y.clientTop + parseFloat(h.paddingTop)) * x.y;
            a *= x.x,
            u *= x.y,
            c *= x.x,
            p *= x.y,
            a += v,
            u += b,
            S = qe(y),
            y = Ha(S)
        }
    }
    return ks({
        width: c,
        height: p,
        x: a,
        y: u
    })
}
function ew(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = Lt(r)
      , l = t ? qs(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = On(1);
    const c = On(0)
      , p = At(r);
    if ((p || !p && !i) && ((so(r) !== "body" || ci(s)) && (a = Xs(r)),
    At(r))) {
        const m = lr(r);
        u = Ir(r),
        c.x = m.x + r.clientLeft,
        c.y = m.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y
    }
}
function tw(e) {
    return Array.from(e.getClientRects())
}
function Wa(e, t) {
    const n = Xs(e).scrollLeft;
    return t ? t.left + n : lr(Lt(e)).left + n
}
function nw(e) {
    const t = Lt(e)
      , n = Xs(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Wa(e);
    const l = -n.scrollTop;
    return kt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function rw(e, t) {
    const n = qe(e)
      , r = Lt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = rc();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function ow(e, t) {
    const n = lr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = At(e) ? Ir(e) : On(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Ud(e, t, n) {
    let r;
    if (t === "viewport")
        r = rw(e, n);
    else if (t === "document")
        r = nw(Lt(e));
    else if (Et(t))
        r = ow(t, n);
    else {
        const o = Nm(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ks(r)
}
function Pm(e, t) {
    const n = Ln(e);
    return n === t || !Et(n) || Jr(n) ? !1 : kt(n).position === "fixed" || Pm(n, t)
}
function iw(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Zo(e, [], !1).filter(l => Et(l) && so(l) !== "body")
      , o = null;
    const i = kt(e).position === "fixed";
    let s = i ? Ln(e) : e;
    for (; Et(s) && !Jr(s); ) {
        const l = kt(s)
          , a = nc(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ci(s) && !a && Pm(e, s)) ? r = r.filter(c => c !== s) : o = l,
        s = Ln(s)
    }
    return t.set(e, r),
    r
}
function sw(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? qs(t) ? [] : iw(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, c) => {
        const p = Ud(t, c, o);
        return u.top = Ke(p.top, u.top),
        u.right = _n(p.right, u.right),
        u.bottom = _n(p.bottom, u.bottom),
        u.left = Ke(p.left, u.left),
        u
    }
    , Ud(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function lw(e) {
    const {width: t, height: n} = km(e);
    return {
        width: t,
        height: n
    }
}
function aw(e, t, n) {
    const r = At(t)
      , o = Lt(t)
      , i = n === "fixed"
      , s = lr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = On(0);
    if (r || !r && !i)
        if ((so(t) !== "body" || ci(o)) && (l = Xs(t)),
        r) {
            const f = lr(t, !0, i, t);
            a.x = f.x + t.clientLeft,
            a.y = f.y + t.clientTop
        } else
            o && (a.x = Wa(o));
    let u = 0
      , c = 0;
    if (o && !r && !i) {
        const f = o.getBoundingClientRect();
        c = f.top + l.scrollTop,
        u = f.left + l.scrollLeft - Wa(o, f)
    }
    const p = s.left + l.scrollLeft - a.x - u
      , m = s.top + l.scrollTop - a.y - c;
    return {
        x: p,
        y: m,
        width: s.width,
        height: s.height
    }
}
function $l(e) {
    return kt(e).position === "static"
}
function Vd(e, t) {
    if (!At(e) || kt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Lt(e) === n && (n = n.ownerDocument.body),
    n
}
function Tm(e, t) {
    const n = qe(e);
    if (qs(e))
        return n;
    if (!At(e)) {
        let o = Ln(e);
        for (; o && !Jr(o); ) {
            if (Et(o) && !$l(o))
                return o;
            o = Ln(o)
        }
        return n
    }
    let r = Vd(e, t);
    for (; r && qx(r) && $l(r); )
        r = Vd(r, t);
    return r && Jr(r) && $l(r) && !nc(r) ? n : r || Xx(e) || n
}
const uw = async function(e) {
    const t = this.getOffsetParent || Tm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: aw(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function cw(e) {
    return kt(e).direction === "rtl"
}
const dw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: ew,
    getDocumentElement: Lt,
    getClippingRect: sw,
    getOffsetParent: Tm,
    getElementRects: uw,
    getClientRects: tw,
    getDimensions: lw,
    getScale: Ir,
    isElement: Et,
    isRTL: cw
};
function fw(e, t) {
    let n = null, r;
    const o = Lt(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: c, width: p, height: m} = e.getBoundingClientRect();
        if (l || t(),
        !p || !m)
            return;
        const f = Li(c)
          , S = Li(o.clientWidth - (u + p))
          , y = Li(o.clientHeight - (c + m))
          , x = Li(u)
          , h = {
            rootMargin: -f + "px " + -S + "px " + -y + "px " + -x + "px",
            threshold: Ke(0, _n(1, a)) || 1
        };
        let v = !0;
        function b(C) {
            const E = C[0].intersectionRatio;
            if (E !== a) {
                if (!v)
                    return s();
                E ? s(!1, E) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,h)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function pw(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = oc(e)
      , c = o || i ? [...u ? Zo(u) : [], ...Zo(t)] : [];
    c.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
        i && g.addEventListener("resize", n)
    }
    );
    const p = u && l ? fw(u, n) : null;
    let m = -1
      , f = null;
    s && (f = new ResizeObserver(g => {
        let[h] = g;
        h && h.target === u && f && (f.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var v;
            (v = f) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && f.observe(u),
    f.observe(t));
    let S, y = a ? lr(e) : null;
    a && x();
    function x() {
        const g = lr(e);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
        y = g,
        S = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var g;
        c.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (g = f) == null || g.disconnect(),
        f = null,
        a && cancelAnimationFrame(S)
    }
}
const hw = Qx
  , mw = Kx
  , gw = Vx
  , vw = Gx
  , yw = Hx
  , Hd = Ux
  , xw = Yx
  , ww = (e, t, n) => {
    const r = new Map
      , o = {
        platform: dw,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return Bx(e, t, {
        ...o,
        platform: i
    })
}
;
var Xi = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Ns(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ns(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ns(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function jm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Wd(e, t) {
    const n = jm(e);
    return Math.round(t * n) / n
}
function Bl(e) {
    const t = w.useRef(e);
    return Xi( () => {
        t.current = e
    }
    ),
    t
}
function Sw(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [c,p] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,f] = w.useState(r);
    Ns(m, r) || f(r);
    const [S,y] = w.useState(null)
      , [x,g] = w.useState(null)
      , h = w.useCallback(P => {
        P !== E.current && (E.current = P,
        y(P))
    }
    , [])
      , v = w.useCallback(P => {
        P !== k.current && (k.current = P,
        g(P))
    }
    , [])
      , b = i || S
      , C = s || x
      , E = w.useRef(null)
      , k = w.useRef(null)
      , j = w.useRef(c)
      , O = a != null
      , _ = Bl(a)
      , F = Bl(o)
      , D = Bl(u)
      , Q = w.useCallback( () => {
        if (!E.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: m
        };
        F.current && (P.platform = F.current),
        ww(E.current, k.current, P).then(T => {
            const L = {
                ...T,
                isPositioned: D.current !== !1
            };
            A.current && !Ns(j.current, L) && (j.current = L,
            ai.flushSync( () => {
                p(L)
            }
            ))
        }
        )
    }
    , [m, t, n, F, D]);
    Xi( () => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        p(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const A = w.useRef(!1);
    Xi( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    Xi( () => {
        if (b && (E.current = b),
        C && (k.current = C),
        b && C) {
            if (_.current)
                return _.current(b, C, Q);
            Q()
        }
    }
    , [b, C, Q, _, O]);
    const q = w.useMemo( () => ({
        reference: E,
        floating: k,
        setReference: h,
        setFloating: v
    }), [h, v])
      , $ = w.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , H = w.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return P;
        const T = Wd($.floating, c.x)
          , L = Wd($.floating, c.y);
        return l ? {
            ...P,
            transform: "translate(" + T + "px, " + L + "px)",
            ...jm($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: L
        }
    }
    , [n, l, $.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: Q,
        refs: q,
        elements: $,
        floatingStyles: H
    }), [c, Q, q, $, H])
}
const bw = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Hd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Hd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , Cw = (e, t) => ({
    ...hw(e),
    options: [e, t]
})
  , Ew = (e, t) => ({
    ...mw(e),
    options: [e, t]
})
  , kw = (e, t) => ({
    ...xw(e),
    options: [e, t]
})
  , Nw = (e, t) => ({
    ...gw(e),
    options: [e, t]
})
  , Pw = (e, t) => ({
    ...vw(e),
    options: [e, t]
})
  , Tw = (e, t) => ({
    ...yw(e),
    options: [e, t]
})
  , jw = (e, t) => ({
    ...bw(e),
    options: [e, t]
});
var Rw = "Arrow"
  , Rm = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return d.jsx(We.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : d.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Rm.displayName = Rw;
var Mw = Rm;
function _w(e) {
    const [t,n] = w.useState(void 0);
    return Mn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Mm = "Popper"
  , [_m,Om] = Qs(Mm)
  , [JS,Am] = _m(Mm)
  , Lm = "PopperAnchor"
  , Im = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Am(Lm, n)
      , s = w.useRef(null)
      , l = Ct(t, s);
    return w.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : d.jsx(We.div, {
        ...o,
        ref: l
    })
}
);
Im.displayName = Lm;
var ic = "PopperContent"
  , [Ow,Aw] = _m(ic)
  , Dm = w.forwardRef( (e, t) => {
    var J, cr, Xt, $n, Zt, dr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: p="partial", hideWhenDetached: m=!1, updatePositionStrategy: f="optimized", onPlaced: S, ...y} = e
      , x = Am(ic, n)
      , [g,h] = w.useState(null)
      , v = Ct(t, Jt => h(Jt))
      , [b,C] = w.useState(null)
      , E = _w(b)
      , k = (E == null ? void 0 : E.width) ?? 0
      , j = (E == null ? void 0 : E.height) ?? 0
      , O = r + (i !== "center" ? "-" + i : "")
      , _ = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , F = Array.isArray(u) ? u : [u]
      , D = F.length > 0
      , Q = {
        padding: _,
        boundary: F.filter(Iw),
        altBoundary: D
    }
      , {refs: A, floatingStyles: q, placement: $, isPositioned: H, middlewareData: P} = Sw({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...Jt) => pw(...Jt, {
            animationFrame: f === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [Cw({
            mainAxis: o + j,
            alignmentAxis: s
        }), a && Ew({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? kw() : void 0,
            ...Q
        }), a && Nw({
            ...Q
        }), Pw({
            ...Q,
            apply: ({elements: Jt, rects: di, availableWidth: il, availableHeight: fi}) => {
                const {width: sl, height: lo} = di.reference
                  , fr = Jt.floating.style;
                fr.setProperty("--radix-popper-available-width", `${il}px`),
                fr.setProperty("--radix-popper-available-height", `${fi}px`),
                fr.setProperty("--radix-popper-anchor-width", `${sl}px`),
                fr.setProperty("--radix-popper-anchor-height", `${lo}px`)
            }
        }), b && jw({
            element: b,
            padding: l
        }), Dw({
            arrowWidth: k,
            arrowHeight: j
        }), m && Tw({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [T,L] = $m($)
      , V = Rn(S);
    Mn( () => {
        H && (V == null || V())
    }
    , [H, V]);
    const z = (J = P.arrow) == null ? void 0 : J.x
      , K = (cr = P.arrow) == null ? void 0 : cr.y
      , G = ((Xt = P.arrow) == null ? void 0 : Xt.centerOffset) !== 0
      , [me,ke] = w.useState();
    return Mn( () => {
        g && ke(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    d.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...q,
            transform: H ? q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: me,
            "--radix-popper-transform-origin": [($n = P.transformOrigin) == null ? void 0 : $n.x, (Zt = P.transformOrigin) == null ? void 0 : Zt.y].join(" "),
            ...((dr = P.hide) == null ? void 0 : dr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: d.jsx(Ow, {
            scope: n,
            placedSide: T,
            onArrowChange: C,
            arrowX: z,
            arrowY: K,
            shouldHideArrow: G,
            children: d.jsx(We.div, {
                "data-side": T,
                "data-align": L,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
Dm.displayName = ic;
var zm = "PopperArrow"
  , Lw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Fm = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = Aw(zm, r)
      , s = Lw[i.placedSide];
    return d.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: d.jsx(Mw, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Fm.displayName = zm;
function Iw(e) {
    return e !== null
}
var Dw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, g, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,c] = $m(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2
          , f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let S = ""
          , y = "";
        return u === "bottom" ? (S = s ? p : `${m}px`,
        y = `${-a}px`) : u === "top" ? (S = s ? p : `${m}px`,
        y = `${r.floating.height + a}px`) : u === "right" ? (S = `${-a}px`,
        y = s ? p : `${f}px`) : u === "left" && (S = `${r.floating.width + a}px`,
        y = s ? p : `${f}px`),
        {
            data: {
                x: S,
                y
            }
        }
    }
});
function $m(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var zw = Im
  , Fw = Dm
  , $w = Fm
  , [Zs,eb] = Qs("Tooltip", [Om])
  , sc = Om()
  , Bm = "TooltipProvider"
  , Bw = 700
  , Qd = "tooltip.open"
  , [Uw,Um] = Zs(Bm)
  , Vm = e => {
    const {__scopeTooltip: t, delayDuration: n=Bw, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = w.useRef(!0)
      , l = w.useRef(!1)
      , a = w.useRef(0);
    return w.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    d.jsx(Uw, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(a.current),
            s.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: w.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Vm.displayName = Bm;
var Hm = "Tooltip"
  , [tb,Js] = Zs(Hm)
  , Qa = "TooltipTrigger"
  , Vw = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Js(Qa, n)
      , i = Um(Qa, n)
      , s = sc(n)
      , l = w.useRef(null)
      , a = Ct(t, l, o.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , p = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    d.jsx(zw, {
        asChild: !0,
        ...s,
        children: d.jsx(We.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ye(e.onPointerMove, m => {
                m.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: ye(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: ye(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: ye(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ye(e.onBlur, o.onClose),
            onClick: ye(e.onClick, o.onClose)
        })
    })
}
);
Vw.displayName = Qa;
var Hw = "TooltipPortal"
  , [nb,Ww] = Zs(Hw, {
    forceMount: void 0
})
  , eo = "TooltipContent"
  , Wm = w.forwardRef( (e, t) => {
    const n = Ww(eo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Js(eo, e.__scopeTooltip);
    return d.jsx(Yu, {
        present: r || s.open,
        children: s.disableHoverableContent ? d.jsx(Qm, {
            side: o,
            ...i,
            ref: t
        }) : d.jsx(Qw, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Qw = w.forwardRef( (e, t) => {
    const n = Js(eo, e.__scopeTooltip)
      , r = Um(eo, e.__scopeTooltip)
      , o = w.useRef(null)
      , i = Ct(t, o)
      , [s,l] = w.useState(null)
      , {trigger: a, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: p} = r
      , m = w.useCallback( () => {
        l(null),
        p(!1)
    }
    , [p])
      , f = w.useCallback( (S, y) => {
        const x = S.currentTarget
          , g = {
            x: S.clientX,
            y: S.clientY
        }
          , h = Xw(g, x.getBoundingClientRect())
          , v = Zw(g, h)
          , b = Jw(y.getBoundingClientRect())
          , C = t2([...v, ...b]);
        l(C),
        p(!0)
    }
    , [p]);
    return w.useEffect( () => () => m(), [m]),
    w.useEffect( () => {
        if (a && c) {
            const S = x => f(x, c)
              , y = x => f(x, a);
            return a.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", y),
            () => {
                a.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", y)
            }
        }
    }
    , [a, c, f, m]),
    w.useEffect( () => {
        if (s) {
            const S = y => {
                const x = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , h = (a == null ? void 0 : a.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , v = !e2(g, s);
                h ? m() : v && (m(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [a, c, s, u, m]),
    d.jsx(Qm, {
        ...e,
        ref: i
    })
}
)
  , [Kw,Yw] = Zs(Hm, {
    isInside: !1
})
  , Gw = t0("TooltipContent")
  , Qm = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Js(eo, n)
      , u = sc(n)
      , {onClose: c} = a;
    return w.useEffect( () => (document.addEventListener(Qd, c),
    () => document.removeEventListener(Qd, c)), [c]),
    w.useEffect( () => {
        if (a.trigger) {
            const p = m => {
                const f = m.target;
                f != null && f.contains(a.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [a.trigger, c]),
    d.jsx(Ku, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: c,
        children: d.jsxs(Fw, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [d.jsx(Gw, {
                children: r
            }), d.jsx(Kw, {
                scope: n,
                isInside: !0,
                children: d.jsx(N0, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Wm.displayName = eo;
var Km = "TooltipArrow"
  , qw = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = sc(n);
    return Yw(Km, n).isInside ? null : d.jsx($w, {
        ...o,
        ...r,
        ref: t
    })
}
);
qw.displayName = Km;
function Xw(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Zw(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Jw(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function e2(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i]
          , a = t[s]
          , u = l.x
          , c = l.y
          , p = a.x
          , m = a.y;
        c > r != m > r && n < (p - u) * (r - c) / (m - c) + u && (o = !o)
    }
    return o
}
function t2(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    n2(t)
}
function n2(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var r2 = Vm
  , Ym = Wm;
const o2 = r2
  , i2 = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => d.jsx(Ym, {
    ref: r,
    sideOffset: t,
    className: Fn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
i2.displayName = Ym.displayName;
var el = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , tl = typeof window > "u" || "Deno"in globalThis;
function ht() {}
function s2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function l2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function a2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ka(e, t) {
    return typeof e == "function" ? e(t) : e
}
function u2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kd(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== lc(s, t.options))
                return !1
        } else if (!ei(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Yd(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Jo(t.options.mutationKey) !== Jo(i))
                return !1
        } else if (!ei(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function lc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e)
}
function Jo(e) {
    return JSON.stringify(e, (t, n) => Ya(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ei(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ei(e[n], t[n])) : !1
}
function Gm(e, t) {
    if (e === t)
        return e;
    const n = Gd(e) && Gd(t);
    if (n || Ya(e) && Ya(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {}
          , a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const p = n ? c : i[c];
            (!n && a.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] = void 0,
            u++) : (l[p] = Gm(e[p], t[p]),
            l[p] === e[p] && e[p] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}
function Gd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ya(e) {
    if (!qd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!qd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function qd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function c2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function d2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Gm(e, t) : t
}
function f2(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function p2(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ac = Symbol();
function qm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ac ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Yn, fn, zr, df, h2 = (df = class extends el {
    constructor() {
        super();
        Z(this, Yn);
        Z(this, fn);
        Z(this, zr);
        U(this, zr, t => {
            if (!tl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, fn) || this.setEventListener(N(this, zr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, fn)) == null || t.call(this),
        U(this, fn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, zr, t),
        (n = N(this, fn)) == null || n.call(this),
        U(this, fn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Yn) !== t && (U(this, Yn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Yn) == "boolean" ? N(this, Yn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Yn = new WeakMap,
fn = new WeakMap,
zr = new WeakMap,
df), Xm = new h2, Fr, pn, $r, ff, m2 = (ff = class extends el {
    constructor() {
        super();
        Z(this, Fr, !0);
        Z(this, pn);
        Z(this, $r);
        U(this, $r, t => {
            if (!tl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, pn) || this.setEventListener(N(this, $r))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, pn)) == null || t.call(this),
        U(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, $r, t),
        (n = N(this, pn)) == null || n.call(this),
        U(this, pn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Fr) !== t && (U(this, Fr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, Fr)
    }
}
,
Fr = new WeakMap,
pn = new WeakMap,
$r = new WeakMap,
ff), Ps = new m2;
function g2() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function v2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Zm(e) {
    return (e ?? "online") === "online" ? Ps.isOnline() : !0
}
var Jm = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ul(e) {
    return e instanceof Jm
}
function eg(e) {
    let t = !1, n = 0, r = !1, o;
    const i = g2()
      , s = y => {
        var x;
        r || (m(new Jm(y)),
        (x = e.abort) == null || x.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Xm.isFocused() && (e.networkMode === "always" || Ps.isOnline()) && e.canRun()
      , c = () => Zm(e.networkMode) && e.canRun()
      , p = y => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, y),
        o == null || o(),
        i.resolve(y))
    }
      , m = y => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, y),
        o == null || o(),
        i.reject(y))
    }
      , f = () => new Promise(y => {
        var x;
        o = g => {
            (r || u()) && y(g)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let y;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            y = x ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(p).catch(g => {
            var E;
            if (r)
                return;
            const h = e.retry ?? (tl ? 0 : 3)
              , v = e.retryDelay ?? v2
              , b = typeof v == "function" ? v(n, g) : v
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, g);
            if (t || !C) {
                m(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            c2(b).then( () => u() ? void 0 : f()).then( () => {
                t ? m(g) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? S() : f().then(S),
        i)
    }
}
var y2 = e => setTimeout(e, 0);
function x2() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = y2;
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Ae = x2(), Gn, pf, tg = (pf = class {
    constructor() {
        Z(this, Gn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        l2(this.gcTime) && U(this, Gn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (tl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Gn) && (clearTimeout(N(this, Gn)),
        U(this, Gn, void 0))
    }
}
,
Gn = new WeakMap,
pf), Br, qn, tt, Xn, je, ti, Zn, mt, Dt, hf, w2 = (hf = class extends tg {
    constructor(t) {
        super();
        Z(this, mt);
        Z(this, Br);
        Z(this, qn);
        Z(this, tt);
        Z(this, Xn);
        Z(this, je);
        Z(this, ti);
        Z(this, Zn);
        U(this, Zn, !1),
        U(this, ti, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        U(this, Xn, t.client),
        U(this, tt, N(this, Xn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        U(this, Br, b2(this.options)),
        this.state = t.state ?? N(this, Br),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, ti),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, tt).remove(this)
    }
    setData(t, n) {
        const r = d2(this.state.data, t, this.options);
        return Ne(this, mt, Dt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ne(this, mt, Dt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, je)) == null ? void 0 : r.promise;
        return (o = N(this, je)) == null || o.cancel(t),
        n ? n.then(ht).catch(ht) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Br))
    }
    isActive() {
        return this.observers.some(t => u2(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ac || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ka(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !a2(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, je) && (N(this, Zn) ? N(this, je).cancel({
            revert: !0
        }) : N(this, je).cancelRetry()),
        this.scheduleGc()),
        N(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, mt, Dt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, p;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, je))
                return N(this, je).continueRetry(),
                N(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(f => f.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (U(this, Zn, !0),
                r.signal)
            })
        }
          , i = () => {
            const m = qm(this.options, n)
              , S = ( () => {
                const y = {
                    client: N(this, Xn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(y),
                y
            }
            )();
            return U(this, Zn, !1),
            this.options.persister ? this.options.persister(m, S, this) : m(S)
        }
          , l = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, Xn),
                state: this.state,
                fetchFn: i
            };
            return o(m),
            m
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        U(this, qn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && Ne(this, mt, Dt).call(this, {
            type: "fetch",
            meta: (p = l.fetchOptions) == null ? void 0 : p.meta
        });
        const a = m => {
            var f, S, y, x;
            Ul(m) && m.silent || Ne(this, mt, Dt).call(this, {
                type: "error",
                error: m
            }),
            Ul(m) || ((S = (f = N(this, tt).config).onError) == null || S.call(f, m, this),
            (x = (y = N(this, tt).config).onSettled) == null || x.call(y, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return U(this, je, eg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var f, S, y, x;
                if (m === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (g) {
                    a(g);
                    return
                }
                (S = (f = N(this, tt).config).onSuccess) == null || S.call(f, m, this),
                (x = (y = N(this, tt).config).onSettled) == null || x.call(y, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (m, f) => {
                Ne(this, mt, Dt).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: f
                })
            }
            ,
            onPause: () => {
                Ne(this, mt, Dt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, mt, Dt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        N(this, je).start()
    }
}
,
Br = new WeakMap,
qn = new WeakMap,
tt = new WeakMap,
Xn = new WeakMap,
je = new WeakMap,
ti = new WeakMap,
Zn = new WeakMap,
mt = new WeakSet,
Dt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...S2(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return U(this, qn, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ul(o) && o.revert && N(this, qn) ? {
                ...N(this, qn),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ae.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, tt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
hf);
function S2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Zm(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function b2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tt, mf, C2 = (mf = class extends el {
    constructor(t={}) {
        super();
        Z(this, Tt);
        this.config = t,
        U(this, Tt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? lc(o, n);
        let s = this.get(i);
        return s || (s = new w2({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Tt).has(t.queryHash) || (N(this, Tt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Tt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Tt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Tt).get(t)
    }
    getAll() {
        return [...N(this, Tt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Kd(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Kd(t, r)) : n
    }
    notify(t) {
        Ae.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Tt = new WeakMap,
mf), jt, _e, Jn, Rt, ln, gf, E2 = (gf = class extends tg {
    constructor(t) {
        super();
        Z(this, Rt);
        Z(this, jt);
        Z(this, _e);
        Z(this, Jn);
        this.mutationId = t.mutationId,
        U(this, _e, t.mutationCache),
        U(this, jt, []),
        this.state = t.state || k2(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, jt).includes(t) || (N(this, jt).push(t),
        this.clearGcTimeout(),
        N(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        U(this, jt, N(this, jt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, jt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, _e).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, Jn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, l, a, u, c, p, m, f, S, y, x, g, h, v, b, C, E, k, j;
        const n = () => {
            Ne(this, Rt, ln).call(this, {
                type: "continue"
            })
        }
        ;
        U(this, Jn, eg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, _) => {
                Ne(this, Rt, ln).call(this, {
                    type: "failed",
                    failureCount: O,
                    error: _
                })
            }
            ,
            onPause: () => {
                Ne(this, Rt, ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, _e).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, Jn).canStart();
        try {
            if (r)
                n();
            else {
                Ne(this, Rt, ln).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = N(this, _e).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const _ = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                _ !== this.state.context && Ne(this, Rt, ln).call(this, {
                    type: "pending",
                    context: _,
                    variables: t,
                    isPaused: o
                })
            }
            const O = await N(this, Jn).start();
            return await ((c = (u = N(this, _e).config).onSuccess) == null ? void 0 : c.call(u, O, t, this.state.context, this)),
            await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, O, t, this.state.context)),
            await ((S = (f = N(this, _e).config).onSettled) == null ? void 0 : S.call(f, O, null, this.state.variables, this.state.context, this)),
            await ((x = (y = this.options).onSettled) == null ? void 0 : x.call(y, O, null, t, this.state.context)),
            Ne(this, Rt, ln).call(this, {
                type: "success",
                data: O
            }),
            O
        } catch (O) {
            try {
                throw await ((h = (g = N(this, _e).config).onError) == null ? void 0 : h.call(g, O, t, this.state.context, this)),
                await ((b = (v = this.options).onError) == null ? void 0 : b.call(v, O, t, this.state.context)),
                await ((E = (C = N(this, _e).config).onSettled) == null ? void 0 : E.call(C, void 0, O, this.state.variables, this.state.context, this)),
                await ((j = (k = this.options).onSettled) == null ? void 0 : j.call(k, void 0, O, t, this.state.context)),
                O
            } finally {
                Ne(this, Rt, ln).call(this, {
                    type: "error",
                    error: O
                })
            }
        } finally {
            N(this, _e).runNext(this)
        }
    }
}
,
jt = new WeakMap,
_e = new WeakMap,
Jn = new WeakMap,
Rt = new WeakSet,
ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ae.batch( () => {
        N(this, jt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, _e).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
gf);
function k2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var $t, gt, ni, vf, N2 = (vf = class extends el {
    constructor(t={}) {
        super();
        Z(this, $t);
        Z(this, gt);
        Z(this, ni);
        this.config = t,
        U(this, $t, new Set),
        U(this, gt, new Map),
        U(this, ni, 0)
    }
    build(t, n, r) {
        const o = new E2({
            mutationCache: this,
            mutationId: ++hi(this, ni)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, $t).add(t);
        const n = Ii(t);
        if (typeof n == "string") {
            const r = N(this, gt).get(n);
            r ? r.push(t) : N(this, gt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, $t).delete(t)) {
            const n = Ii(t);
            if (typeof n == "string") {
                const r = N(this, gt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, gt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Ii(t);
        if (typeof n == "string") {
            const r = N(this, gt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Ii(t);
        if (typeof n == "string") {
            const o = (r = N(this, gt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ae.batch( () => {
            N(this, $t).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, $t).clear(),
            N(this, gt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, $t))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Yd(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Yd(t, n))
    }
    notify(t) {
        Ae.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ae.batch( () => Promise.all(t.map(n => n.continue().catch(ht))))
    }
}
,
$t = new WeakMap,
gt = new WeakMap,
ni = new WeakMap,
vf);
function Ii(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Xd(e) {
    return {
        onFetch: (t, n) => {
            var c, p, m, f, S;
            const r = t.options
              , o = (m = (p = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction
              , i = ((f = t.state.data) == null ? void 0 : f.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let y = !1;
                const x = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = qm(t.options, t.fetchOptions)
                  , h = async (v, b, C) => {
                    if (y)
                        return Promise.reject();
                    if (b == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: b,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(F),
                        F
                    }
                    )()
                      , j = await g(k)
                      , {maxPages: O} = t.options
                      , _ = C ? p2 : f2;
                    return {
                        pages: _(v.pages, j, O),
                        pageParams: _(v.pageParams, b, O)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , b = v ? P2 : Zd
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , E = b(r, C);
                    l = await h(C, E, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const b = a === 0 ? s[0] ?? r.initialPageParam : Zd(r, l);
                        if (a > 0 && b == null)
                            break;
                        l = await h(l, b),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, x;
                return (x = (y = t.options).persister) == null ? void 0 : x.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Zd(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function P2(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, hn, mn, Ur, Vr, gn, Hr, Wr, yf, T2 = (yf = class {
    constructor(e={}) {
        Z(this, fe);
        Z(this, hn);
        Z(this, mn);
        Z(this, Ur);
        Z(this, Vr);
        Z(this, gn);
        Z(this, Hr);
        Z(this, Wr);
        U(this, fe, e.queryCache || new C2),
        U(this, hn, e.mutationCache || new N2),
        U(this, mn, e.defaultOptions || {}),
        U(this, Ur, new Map),
        U(this, Vr, new Map),
        U(this, gn, 0)
    }
    mount() {
        hi(this, gn)._++,
        N(this, gn) === 1 && (U(this, Hr, Xm.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onFocus())
        }
        )),
        U(this, Wr, Ps.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        hi(this, gn)._--,
        N(this, gn) === 0 && ((e = N(this, Hr)) == null || e.call(this),
        U(this, Hr, void 0),
        (t = N(this, Wr)) == null || t.call(this),
        U(this, Wr, void 0))
    }
    isFetching(e) {
        return N(this, fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, hn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, fe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ka(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, fe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = s2(t, i);
        if (s !== void 0)
            return N(this, fe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ae.batch( () => N(this, fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, fe);
        Ae.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, fe);
        return Ae.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ae.batch( () => N(this, fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(ht).catch(ht)
    }
    invalidateQueries(e, t={}) {
        return Ae.batch( () => (N(this, fe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Ae.batch( () => N(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(ht)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(ht)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, fe).build(this, t);
        return n.isStaleByTime(Ka(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ht).catch(ht)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Xd(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ht).catch(ht)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Xd(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ps.isOnline() ? N(this, hn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, fe)
    }
    getMutationCache() {
        return N(this, hn)
    }
    getDefaultOptions() {
        return N(this, mn)
    }
    setDefaultOptions(e) {
        U(this, mn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Ur).set(Jo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Ur).values()]
          , n = {};
        return t.forEach(r => {
            ei(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Vr).set(Jo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Vr).values()]
          , n = {};
        return t.forEach(r => {
            ei(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, mn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = lc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === ac && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, mn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, fe).clear(),
        N(this, hn).clear()
    }
}
,
fe = new WeakMap,
hn = new WeakMap,
mn = new WeakMap,
Ur = new WeakMap,
Vr = new WeakMap,
gn = new WeakMap,
Hr = new WeakMap,
Wr = new WeakMap,
yf), j2 = w.createContext(void 0), R2 = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
d.jsx(j2.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ts() {
    return Ts = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ts.apply(this, arguments)
}
var xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xn || (xn = {}));
const Jd = "popstate";
function M2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ga("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : rg(o)
    }
    return O2(t, n, null, e)
}
function He(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function ng(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function _2() {
    return Math.random().toString(36).substr(2, 8)
}
function ef(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ga(e, t, n, r) {
    return n === void 0 && (n = null),
    Ts({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? nl(t) : t, {
        state: n,
        key: t && t.key || r || _2()
    })
}
function rg(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function nl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function O2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = xn.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(Ts({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function p() {
        l = xn.Pop;
        let x = c()
          , g = x == null ? null : x - u;
        u = x,
        a && a({
            action: l,
            location: y.location,
            delta: g
        })
    }
    function m(x, g) {
        l = xn.Push;
        let h = Ga(y.location, x, g);
        u = c() + 1;
        let v = ef(h, u)
          , b = y.createHref(h);
        try {
            s.pushState(v, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(b)
        }
        i && a && a({
            action: l,
            location: y.location,
            delta: 1
        })
    }
    function f(x, g) {
        l = xn.Replace;
        let h = Ga(y.location, x, g);
        u = c();
        let v = ef(h, u)
          , b = y.createHref(h);
        s.replaceState(v, "", b),
        i && a && a({
            action: l,
            location: y.location,
            delta: 0
        })
    }
    function S(x) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof x == "string" ? x : rg(x);
        return h = h.replace(/ $/, "%20"),
        He(g, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,g)
    }
    let y = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(x) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Jd, p),
            a = x,
            () => {
                o.removeEventListener(Jd, p),
                a = null
            }
        },
        createHref(x) {
            return t(o, x)
        },
        createURL: S,
        encodeLocation(x) {
            let g = S(x);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: m,
        replace: f,
        go(x) {
            return s.go(x)
        }
    };
    return y
}
var tf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(tf || (tf = {}));
function A2(e, t, n) {
    return n === void 0 && (n = "/"),
    L2(e, t, n, !1)
}
function L2(e, t, n, r) {
    let o = typeof t == "string" ? nl(t) : t
      , i = sg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = og(e);
    I2(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = K2(i);
        l = W2(s[a], u, r)
    }
    return l
}
function og(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (He(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Dr([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (He(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        og(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: V2(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of ig(i.path))
                o(i, s, a)
    }
    ),
    t
}
function ig(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = ig(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function I2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : H2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const D2 = /^:[\w-]+$/
  , z2 = 3
  , F2 = 2
  , $2 = 1
  , B2 = 10
  , U2 = -2
  , nf = e => e === "*";
function V2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(nf) && (r += U2),
    t && (r += F2),
    n.filter(o => !nf(o)).reduce( (o, i) => o + (D2.test(i) ? z2 : i === "" ? $2 : B2), r)
}
function H2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function W2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , p = rf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , m = a.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = rf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !p)
            return null;
        Object.assign(o, p.params),
        s.push({
            params: o,
            pathname: Dr([i, p.pathname]),
            pathnameBase: Y2(Dr([i, p.pathnameBase])),
            route: m
        }),
        p.pathnameBase !== "/" && (i = Dr([i, p.pathnameBase]))
    }
    return s
}
function rf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Q2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, c, p) => {
            let {paramName: m, isOptional: f} = c;
            if (m === "*") {
                let y = l[p] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const S = l[p];
            return f && !S ? u[m] = void 0 : u[m] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function Q2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ng(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function K2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ng(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function sg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Dr = e => e.join("/").replace(/\/\/+/g, "/")
  , Y2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function G2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const lg = ["post", "put", "patch", "delete"];
new Set(lg);
const q2 = ["get", ...lg];
new Set(q2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function js() {
    return js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    js.apply(this, arguments)
}
const X2 = w.createContext(null)
  , Z2 = w.createContext(null)
  , ag = w.createContext(null)
  , rl = w.createContext(null)
  , ol = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ug = w.createContext(null);
function uc() {
    return w.useContext(rl) != null
}
function cg() {
    return uc() || He(!1),
    w.useContext(rl).location
}
function J2(e, t) {
    return eS(e, t)
}
function eS(e, t, n, r) {
    uc() || He(!1);
    let {navigator: o} = w.useContext(ag)
      , {matches: i} = w.useContext(ol)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = cg(), c;
    if (t) {
        var p;
        let x = typeof t == "string" ? nl(t) : t;
        a === "/" || (p = x.pathname) != null && p.startsWith(a) || He(!1),
        c = x
    } else
        c = u;
    let m = c.pathname || "/"
      , f = m;
    if (a !== "/") {
        let x = a.replace(/^\//, "").split("/");
        f = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let S = A2(e, {
        pathname: f
    })
      , y = iS(S && S.map(x => Object.assign({}, x, {
        params: Object.assign({}, l, x.params),
        pathname: Dr([a, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? a : Dr([a, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), i, n, r);
    return t && y ? w.createElement(rl.Provider, {
        value: {
            location: js({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: xn.Pop
        }
    }, y) : y
}
function tS() {
    let e = uS()
      , t = G2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, null)
}
const nS = w.createElement(tS, null);
class rS extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(ol.Provider, {
            value: this.props.routeContext
        }, w.createElement(ug.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function oS(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = w.useContext(X2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(ol.Provider, {
        value: t
    }, r)
}
function iS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(p => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0);
        c >= 0 || He(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let p = s[c];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
            p.route.id) {
                let {loaderData: m, errors: f} = n
                  , S = p.route.loader && m[p.route.id] === void 0 && (!f || f[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, p, m) => {
        let f, S = !1, y = null, x = null;
        n && (f = l && p.route.id ? l[p.route.id] : void 0,
        y = p.route.errorElement || nS,
        a && (u < 0 && m === 0 ? (S = !0,
        x = null) : u === m && (S = !0,
        x = p.route.hydrateFallbackElement || null)));
        let g = t.concat(s.slice(0, m + 1))
          , h = () => {
            let v;
            return f ? v = y : S ? v = x : p.route.Component ? v = w.createElement(p.route.Component, null) : p.route.element ? v = p.route.element : v = c,
            w.createElement(oS, {
                match: p,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? w.createElement(rS, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: f,
            children: h(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var qa = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(qa || {});
function sS(e) {
    let t = w.useContext(Z2);
    return t || He(!1),
    t
}
function lS(e) {
    let t = w.useContext(ol);
    return t || He(!1),
    t
}
function aS(e) {
    let t = lS()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || He(!1),
    n.route.id
}
function uS() {
    var e;
    let t = w.useContext(ug)
      , n = sS(qa.UseRouteError)
      , r = aS(qa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function cS(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Xa(e) {
    He(!1)
}
function dS(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=xn.Pop, navigator: i, static: s=!1, future: l} = e;
    uc() && He(!1);
    let a = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: js({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = nl(r));
    let {pathname: c="/", search: p="", hash: m="", state: f=null, key: S="default"} = r
      , y = w.useMemo( () => {
        let x = sg(c, a);
        return x == null ? null : {
            location: {
                pathname: x,
                search: p,
                hash: m,
                state: f,
                key: S
            },
            navigationType: o
        }
    }
    , [a, c, p, m, f, S, o]);
    return y == null ? null : w.createElement(ag.Provider, {
        value: u
    }, w.createElement(rl.Provider, {
        children: n,
        value: y
    }))
}
function fS(e) {
    let {children: t, location: n} = e;
    return J2(Za(t), n)
}
new Promise( () => {}
);
function Za(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, Za(r.props.children, i));
            return
        }
        r.type !== Xa && He(!1),
        !r.props.index || !r.props.children || He(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Za(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const pS = "6";
try {
    window.__reactRouterVersion = pS
} catch {}
const hS = "startTransition"
  , of = Rf[hS];
function mS(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = w.useRef();
    i.current == null && (i.current = M2({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(p => {
        u && of ? of( () => a(p)) : a(p)
    }
    , [a, u]);
    return w.useLayoutEffect( () => s.listen(c), [s, c]),
    w.useEffect( () => cS(r), [r]),
    w.createElement(dS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var sf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(sf || (sf = {}));
var lf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(lf || (lf = {}));
const gS = um("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            gold: "bg-primary text-primary-foreground font-semibold tracking-wide hover:shadow-[0_0_30px_-5px_hsl(43_56%_52%/0.4)] hover:bg-primary/80 transition-all duration-300",
            goldOutline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 font-semibold tracking-wide transition-all duration-300"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            xl: "h-14 rounded-xl px-10 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , St = w.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? Jy : "button";
    return d.jsx(s, {
        className: Fn(gS({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
St.displayName = "Button";
const af = [{
    label: "Services",
    href: "#services"
}, {
    label: "Portfolio",
    href: "#portfolio"
}, {
    label: "Pricing",
    href: "#pricing"
}, {
    label: "Contact",
    href: "#intake"
}]
  , vS = () => {
    const [e,t] = w.useState(!1);
    return d.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30",
        children: [d.jsxs("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8",
            children: [d.jsx("a", {
                href: "#",
                className: "font-heading text-2xl font-bold text-gradient-gold",
                children: "LEGACY"
            }), d.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [af.map(n => d.jsx("a", {
                    href: n.href,
                    className: "text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body",
                    children: n.label
                }, n.label)), d.jsx(St, {
                    variant: "gold",
                    size: "sm",
                    asChild: !0,
                    children: d.jsx("a", {
                        href: "#intake",
                        children: "Start Project"
                    })
                })]
            }), d.jsx("button", {
                className: "md:hidden text-foreground",
                onClick: () => t(!e),
                children: e ? d.jsx(dm, {
                    className: "w-6 h-6"
                }) : d.jsx(f1, {
                    className: "w-6 h-6"
                })
            })]
        }), e && d.jsxs("div", {
            className: "md:hidden bg-background border-t border-border/30 px-4 py-6 space-y-4",
            children: [af.map(n => d.jsx("a", {
                href: n.href,
                className: "block text-foreground hover:text-primary transition-colors font-body",
                onClick: () => t(!1),
                children: n.label
            }, n.label)), d.jsx(St, {
                variant: "gold",
                size: "lg",
                className: "w-full",
                asChild: !0,
                children: d.jsx("a", {
                    href: "#intake",
                    onClick: () => t(!1),
                    children: "Start Project"
                })
            })]
        })]
    })
}
  , yS = "/assets/hero-bg-Cp9cSR4l.jpg"
  , xS = [{
    icon: r1,
    label: "15+ Years Experience"
}, {
    icon: Y0,
    label: "350+ Projects Completed"
}, {
    icon: y1,
    label: "98% Client Satisfaction"
}, {
    icon: g1,
    label: "24/7 Support Available"
}]
  , wS = () => d.jsxs("section", {
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [d.jsx("div", {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
            backgroundImage: `url(${yS})`
        }
    }), d.jsx("div", {
        className: "absolute inset-0 bg-background/75"
    }), d.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"
    }), d.jsxs("div", {
        className: "relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 text-center py-32",
        children: [d.jsx("p", {
            className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up",
            children: "Premium Construction Services"
        }), d.jsxs("h1", {
            className: "font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-6 animate-fade-up-delay-1",
            children: ["Building Legacy.", d.jsx("br", {}), d.jsx("span", {
                className: "text-gradient-gold",
                children: "Not Just Structures."
            })]
        }), d.jsx("p", {
            className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-up-delay-2",
            children: "Custom residential and commercial construction crafted with precision, transparency, and care."
        }), d.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-up-delay-3",
            children: [d.jsx(St, {
                variant: "gold",
                size: "xl",
                asChild: !0,
                children: d.jsx("a", {
                    href: "#intake",
                    children: "Start Your Project"
                })
            }), d.jsx(St, {
                variant: "goldOutline",
                size: "xl",
                asChild: !0,
                children: d.jsx("a", {
                    href: "#portfolio",
                    children: "View Portfolio"
                })
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up-delay-3",
            children: xS.map(e => d.jsxs("div", {
                className: "flex flex-col items-center gap-2 p-4",
                children: [d.jsx(e.icon, {
                    className: "w-5 h-5 text-primary mb-1"
                }), d.jsx("span", {
                    className: "text-foreground/80 text-sm font-medium text-center",
                    children: e.label
                })]
            }, e.label))
        })]
    })]
})
  , SS = [{
    icon: u1,
    title: "Residential Construction",
    description: "Custom-built homes designed to reflect your lifestyle and exceed expectations."
}, {
    icon: G0,
    title: "Commercial Development",
    description: "State-of-the-art commercial spaces built for performance and longevity."
}, {
    icon: a1,
    title: "Luxury Renovations",
    description: "Transforming existing spaces into extraordinary living experiences."
}, {
    icon: h1,
    title: "Design-Build Services",
    description: "Seamless integration of design and construction under one expert team."
}, {
    icon: X0,
    title: "Custom Homes",
    description: "One-of-a-kind residences crafted with meticulous attention to detail."
}, {
    icon: n1,
    title: "Project Management",
    description: "End-to-end oversight ensuring your project stays on time and on budget."
}]
  , bS = () => d.jsx("section", {
    className: "section-padding bg-gradient-navy",
    children: d.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [d.jsxs("div", {
            className: "text-center mb-16",
            children: [d.jsx("p", {
                className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                children: "What We Do"
            }), d.jsx("h2", {
                className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                children: "Our Expertise"
            }), d.jsx("p", {
                className: "text-muted-foreground max-w-xl mx-auto",
                children: "Comprehensive construction services tailored to your vision."
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: SS.map(e => d.jsxs("div", {
                className: "bg-gradient-card rounded-2xl p-8 border border-border card-hover group cursor-default",
                children: [d.jsx(e.icon, {
                    className: "w-8 h-8 text-primary mb-5 transition-transform duration-300 group-hover:scale-110"
                }), d.jsx("h3", {
                    className: "font-heading text-2xl font-semibold mb-3",
                    children: e.title
                }), d.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children: e.description
                })]
            }, e.title))
        })]
    })
})
  , CS = [{
    icon: i1,
    title: "3D Concept Visualizations",
    description: "See your project come to life before construction begins with immersive visual renderings."
}, {
    icon: d1,
    title: "Smart Material Selection",
    description: "Intelligent recommendations for materials that balance quality, budget, and sustainability."
}, {
    icon: q0,
    title: "Predictive Scheduling",
    description: "Advanced planning tools that anticipate delays and keep your project on track."
}, {
    icon: m1,
    title: "Real-Time Project Updates",
    description: "Stay connected with live progress reports, photos, and milestone notifications."
}]
  , ES = () => d.jsx("section", {
    className: "section-padding",
    children: d.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [d.jsxs("div", {
            className: "text-center mb-16",
            children: [d.jsx("p", {
                className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                children: "Innovation"
            }), d.jsxs("h2", {
                className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                children: ["Construction Meets", " ", d.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Intelligence"
                })]
            }), d.jsx("p", {
                className: "text-muted-foreground max-w-2xl mx-auto",
                children: "Smart planning tools, precision estimating, and seamless project coordination."
            })]
        }), d.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
            children: CS.map(e => d.jsxs("div", {
                className: "glass-card rounded-2xl p-8 card-hover group",
                children: [d.jsx("div", {
                    className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300",
                    children: d.jsx(e.icon, {
                        className: "w-6 h-6 text-primary"
                    })
                }), d.jsx("h3", {
                    className: "font-heading text-2xl font-semibold mb-3",
                    children: e.title
                }), d.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children: e.description
                })]
            }, e.title))
        })]
    })
})
  , kS = "/assets/project-1-CRUhxhrc.jpg"
  , NS = "/assets/project-2-Cy1lx_eN.jpg"
  , PS = "/assets/project-3-CDr-WdWJ.jpg"
  , TS = "/assets/project-4-DAB37IaS.jpg"
  , jS = "/assets/project-5-CZyII8qV.jpg"
  , RS = "/assets/project-6-Bz87MxqI.jpg"
  , MS = [{
    image: kS,
    name: "The Meridian Estate",
    category: "Residential"
}, {
    image: NS,
    name: "Apex Tower",
    category: "Commercial"
}, {
    image: PS,
    name: "Grand Palazzo Interior",
    category: "Renovation"
}, {
    image: TS,
    name: "Skyline Penthouse",
    category: "Custom Home"
}, {
    image: jS,
    name: "Marble Sanctuary Spa",
    category: "Luxury Bath"
}, {
    image: RS,
    name: "Industrial Loft Conversion",
    category: "Renovation"
}]
  , _S = () => {
    const [e,t] = w.useState(null);
    return d.jsx("section", {
        id: "portfolio",
        className: "section-padding bg-gradient-navy",
        children: d.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("p", {
                    className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                    children: "Portfolio"
                }), d.jsx("h2", {
                    className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                    children: "Project Showcase"
                }), d.jsx("p", {
                    className: "text-muted-foreground max-w-xl mx-auto",
                    children: "A selection of our finest work across residential and commercial construction."
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                children: MS.map( (n, r) => d.jsxs("div", {
                    className: "relative group rounded-2xl overflow-hidden aspect-square cursor-pointer",
                    onMouseEnter: () => t(r),
                    onMouseLeave: () => t(null),
                    children: [d.jsx("img", {
                        src: n.image,
                        alt: n.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                        loading: "lazy"
                    }), d.jsxs("div", {
                        className: `absolute inset-0 bg-background/70 flex flex-col items-center justify-center transition-opacity duration-500 ${e === r ? "opacity-100" : "opacity-0"}`,
                        children: [d.jsx("h3", {
                            className: "font-heading text-xl md:text-2xl font-semibold text-foreground mb-1",
                            children: n.name
                        }), d.jsx("p", {
                            className: "text-primary text-sm tracking-wider uppercase",
                            children: n.category
                        })]
                    })]
                }, n.name))
            })]
        })
    })
}
  , uf = ["Custom Home", "Residential Renovation", "Commercial Build", "Luxury Addition", "Design-Build"]
  , OS = ["Standard", "Premium", "Luxury"]
  , AS = () => {
    const [e,t] = w.useState(uf[0])
      , [n,r] = w.useState(2500)
      , [o,i] = w.useState("12")
      , [s,l] = w.useState("Premium");
    w.useState(5e5);
    const a = w.useMemo( () => {
        const u = s === "Standard" ? 150 : s === "Premium" ? 250 : 400
          , c = e === "Commercial Build" ? 1.3 : e === "Luxury Addition" ? 1.5 : 1
          , p = parseInt(o) <= 6 ? 1.2 : 1;
        return Math.round(n * u * c * p)
    }
    , [n, s, e, o]);
    return d.jsx("section", {
        className: "section-padding",
        children: d.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("p", {
                    className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                    children: "Investment"
                }), d.jsx("h2", {
                    className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                    children: "Transparent Pricing"
                }), d.jsx("p", {
                    className: "text-muted-foreground max-w-2xl mx-auto",
                    children: "No hidden fees, no surprises. Get an instant estimate for your project."
                })]
            }), d.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                children: [d.jsxs("div", {
                    children: [d.jsxs("h3", {
                        className: "font-heading text-3xl font-semibold mb-6",
                        children: ["Honest Pricing,", " ", d.jsx("span", {
                            className: "text-gradient-gold",
                            children: "Always"
                        })]
                    }), d.jsx("p", {
                        className: "text-muted-foreground leading-relaxed mb-6",
                        children: "We believe every client deserves full transparency. Our pricing model is straightforward — you'll know exactly where every dollar goes. From materials to labor, permits to finishing touches, we break it all down so you can make informed decisions."
                    }), d.jsx("ul", {
                        className: "space-y-3 text-foreground/80",
                        children: ["Detailed line-item proposals", "No change-order surprises", "Flexible payment schedules", "Material cost transparency"].map(u => d.jsxs("li", {
                            className: "flex items-center gap-3",
                            children: [d.jsx("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-primary"
                            }), u]
                        }, u))
                    })]
                }), d.jsxs("div", {
                    className: "glass-card rounded-2xl p-8",
                    children: [d.jsx("h4", {
                        className: "font-heading text-2xl font-semibold mb-6",
                        children: "Instant Estimate"
                    }), d.jsxs("div", {
                        className: "space-y-5",
                        children: [d.jsxs("div", {
                            children: [d.jsx("label", {
                                className: "text-sm text-muted-foreground mb-2 block",
                                children: "Project Type"
                            }), d.jsx("select", {
                                value: e,
                                onChange: u => t(u.target.value),
                                className: "w-full h-12 rounded-lg bg-secondary border-border border px-4 text-foreground focus:ring-2 focus:ring-primary focus:outline-none",
                                children: uf.map(u => d.jsx("option", {
                                    value: u,
                                    children: u
                                }, u))
                            })]
                        }), d.jsxs("div", {
                            children: [d.jsxs("label", {
                                className: "text-sm text-muted-foreground mb-2 block",
                                children: ["Square Footage: ", n.toLocaleString(), " sq ft"]
                            }), d.jsx("input", {
                                type: "range",
                                min: 500,
                                max: 15e3,
                                step: 100,
                                value: n,
                                onChange: u => r(Number(u.target.value)),
                                className: "w-full accent-primary"
                            })]
                        }), d.jsxs("div", {
                            children: [d.jsx("label", {
                                className: "text-sm text-muted-foreground mb-2 block",
                                children: "Timeline (months)"
                            }), d.jsx("select", {
                                value: o,
                                onChange: u => i(u.target.value),
                                className: "w-full h-12 rounded-lg bg-secondary border-border border px-4 text-foreground focus:ring-2 focus:ring-primary focus:outline-none",
                                children: ["3", "6", "9", "12", "18", "24"].map(u => d.jsxs("option", {
                                    value: u,
                                    children: [u, " months"]
                                }, u))
                            })]
                        }), d.jsxs("div", {
                            children: [d.jsx("label", {
                                className: "text-sm text-muted-foreground mb-2 block",
                                children: "Material Level"
                            }), d.jsx("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: OS.map(u => d.jsx("button", {
                                    onClick: () => l(u),
                                    className: `h-11 rounded-lg border text-sm font-medium transition-all duration-300 ${s === u ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border text-muted-foreground hover:border-primary/50"}`,
                                    children: u
                                }, u))
                            })]
                        }), d.jsxs("div", {
                            className: "pt-4 border-t border-border",
                            children: [d.jsx("p", {
                                className: "text-sm text-muted-foreground mb-1",
                                children: "Estimated Investment"
                            }), d.jsxs("p", {
                                className: "font-heading text-4xl font-bold text-gradient-gold",
                                children: ["$", a.toLocaleString()]
                            })]
                        }), d.jsx(St, {
                            variant: "gold",
                            size: "lg",
                            className: "w-full",
                            children: "Get Detailed Proposal"
                        })]
                    })]
                })]
            })]
        })
    })
}
  , LS = [{
    icon: Z0,
    label: "Project Progress",
    value: "68%",
    color: "bg-primary"
}, {
    icon: o1,
    label: "Budget Tracking",
    value: "$842K / $1.2M",
    color: "bg-emerald-500"
}, {
    icon: s1,
    label: "Documents",
    value: "24 Files",
    color: "bg-blue-500"
}, {
    icon: c1,
    label: "Renderings",
    value: "12 Views",
    color: "bg-amber-500"
}, {
    icon: p1,
    label: "Messages",
    value: "3 New",
    color: "bg-violet-500"
}, {
    icon: l1,
    label: "Milestones",
    value: "5 of 12",
    color: "bg-rose-500"
}]
  , IS = () => d.jsx("section", {
    className: "section-padding bg-gradient-navy",
    children: d.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [d.jsxs("div", {
            className: "text-center mb-16",
            children: [d.jsx("p", {
                className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                children: "Client Portal"
            }), d.jsxs("h2", {
                className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                children: ["Your Project.", " ", d.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Always Within Reach."
                })]
            }), d.jsx("p", {
                className: "text-muted-foreground max-w-2xl mx-auto",
                children: "Track every detail of your build from anywhere, at any time."
            })]
        }), d.jsxs("div", {
            className: "glass-card rounded-3xl p-6 md:p-10 max-w-4xl mx-auto",
            children: [d.jsxs("div", {
                className: "flex items-center gap-3 mb-8",
                children: [d.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-destructive/60"
                }), d.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-primary/60"
                }), d.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-emerald-500/60"
                }), d.jsx("span", {
                    className: "ml-4 text-sm text-muted-foreground font-body",
                    children: "client.buildlegacy.com/dashboard"
                })]
            }), d.jsxs("div", {
                className: "mb-8",
                children: [d.jsxs("div", {
                    className: "flex justify-between items-center mb-2",
                    children: [d.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Overall Progress"
                    }), d.jsx("span", {
                        className: "text-sm text-primary font-semibold",
                        children: "68%"
                    })]
                }), d.jsx("div", {
                    className: "h-3 bg-secondary rounded-full overflow-hidden",
                    children: d.jsx("div", {
                        className: "h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-1000",
                        style: {
                            width: "68%"
                        }
                    })
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                children: LS.map(e => d.jsxs("div", {
                    className: "bg-secondary/50 rounded-xl p-5 border border-border/50 transition-all duration-300 hover:border-primary/30",
                    children: [d.jsx(e.icon, {
                        className: "w-5 h-5 text-primary mb-3"
                    }), d.jsx("p", {
                        className: "text-xs text-muted-foreground mb-1",
                        children: e.label
                    }), d.jsx("p", {
                        className: "text-sm font-semibold",
                        children: e.value
                    })]
                }, e.label))
            })]
        }), d.jsx("div", {
            className: "text-center mt-10",
            children: d.jsx(St, {
                variant: "gold",
                size: "xl",
                asChild: !0,
                children: d.jsx("a", {
                    href: "#intake",
                    children: "Access Client Portal"
                })
            })
        })]
    })
})
  , cf = ["Personal Info", "Project Details", "Specifications", "Review"]
  , DS = ["Custom Home", "Residential Renovation", "Commercial Build", "Luxury Addition", "Design-Build"]
  , zS = ["3 months", "6 months", "9 months", "12 months", "18+ months"]
  , FS = ["$100K – $250K", "$250K – $500K", "$500K – $1M", "$1M – $2.5M", "$2.5M+"]
  , $S = ["Natural Stone", "Hardwood", "Marble", "Custom Millwork", "Sustainable Materials", "Premium Metals"]
  , BS = ["Modern Minimalist", "Contemporary", "Traditional", "Industrial", "Mediterranean", "Transitional"]
  , US = () => {
    const [e,t] = w.useState(0)
      , [n,r] = w.useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        projectType: "",
        sqft: "",
        timeline: "",
        budgetRange: "",
        description: "",
        materials: [],
        style: "",
        specialRequirements: ""
    })
      , o = (u, c) => {
        r(p => ({
            ...p,
            [u]: c
        }))
    }
      , i = u => {
        r(c => ({
            ...c,
            materials: c.materials.includes(u) ? c.materials.filter(p => p !== u) : [...c.materials, u]
        }))
    }
      , s = () => e === 0 ? n.fullName && n.email : e === 1 ? n.projectType : !0
      , l = "w-full h-12 rounded-lg bg-secondary border border-border px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none font-body text-sm"
      , a = "text-sm text-muted-foreground mb-2 block font-body";
    return d.jsx("section", {
        id: "intake",
        className: "section-padding",
        children: d.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [d.jsxs("div", {
                className: "text-center mb-12",
                children: [d.jsx("p", {
                    className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                    children: "Get Started"
                }), d.jsx("h2", {
                    className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                    children: "Project Intake"
                }), d.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Tell us about your vision. We'll handle the rest."
                })]
            }), d.jsx("div", {
                className: "flex items-center justify-center gap-2 mb-12",
                children: cf.map( (u, c) => d.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [d.jsx("div", {
                        className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${c < e ? "bg-primary text-primary-foreground" : c === e ? "bg-primary text-primary-foreground gold-glow" : "bg-secondary text-muted-foreground"}`,
                        children: c < e ? d.jsx(J0, {
                            className: "w-4 h-4"
                        }) : c + 1
                    }), d.jsx("span", {
                        className: "hidden sm:inline text-sm text-muted-foreground",
                        children: u
                    }), c < cf.length - 1 && d.jsx("div", {
                        className: `w-8 md:w-12 h-0.5 ${c < e ? "bg-primary" : "bg-border"}`
                    })]
                }, u))
            }), d.jsxs("div", {
                className: "glass-card rounded-2xl p-8",
                children: [e === 0 && d.jsxs("div", {
                    className: "space-y-5",
                    children: [d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Full Name *"
                        }), d.jsx("input", {
                            className: l,
                            placeholder: "John Smith",
                            value: n.fullName,
                            onChange: u => o("fullName", u.target.value)
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Email *"
                        }), d.jsx("input", {
                            className: l,
                            type: "email",
                            placeholder: "john@example.com",
                            value: n.email,
                            onChange: u => o("email", u.target.value)
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Phone"
                        }), d.jsx("input", {
                            className: l,
                            placeholder: "(555) 123-4567",
                            value: n.phone,
                            onChange: u => o("phone", u.target.value)
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Property Address"
                        }), d.jsx("input", {
                            className: l,
                            placeholder: "123 Main St, City, State",
                            value: n.address,
                            onChange: u => o("address", u.target.value)
                        })]
                    })]
                }), e === 1 && d.jsxs("div", {
                    className: "space-y-5",
                    children: [d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Project Type *"
                        }), d.jsxs("select", {
                            className: l,
                            value: n.projectType,
                            onChange: u => o("projectType", u.target.value),
                            children: [d.jsx("option", {
                                value: "",
                                children: "Select type"
                            }), DS.map(u => d.jsx("option", {
                                value: u,
                                children: u
                            }, u))]
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Square Footage"
                        }), d.jsx("input", {
                            className: l,
                            placeholder: "e.g. 3,500",
                            value: n.sqft,
                            onChange: u => o("sqft", u.target.value)
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Timeline"
                        }), d.jsxs("select", {
                            className: l,
                            value: n.timeline,
                            onChange: u => o("timeline", u.target.value),
                            children: [d.jsx("option", {
                                value: "",
                                children: "Select timeline"
                            }), zS.map(u => d.jsx("option", {
                                value: u,
                                children: u
                            }, u))]
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Budget Range"
                        }), d.jsxs("select", {
                            className: l,
                            value: n.budgetRange,
                            onChange: u => o("budgetRange", u.target.value),
                            children: [d.jsx("option", {
                                value: "",
                                children: "Select budget"
                            }), FS.map(u => d.jsx("option", {
                                value: u,
                                children: u
                            }, u))]
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Project Description"
                        }), d.jsx("textarea", {
                            className: "w-full rounded-lg bg-secondary border border-border p-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none font-body text-sm min-h-[100px] resize-y",
                            placeholder: "Tell us about your project...",
                            value: n.description,
                            onChange: u => o("description", u.target.value)
                        })]
                    })]
                }), e === 2 && d.jsxs("div", {
                    className: "space-y-5",
                    children: [d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Material Preferences"
                        }), d.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                            children: $S.map(u => d.jsx("button", {
                                onClick: () => i(u),
                                className: `h-11 rounded-lg border text-sm font-medium transition-all duration-300 ${n.materials.includes(u) ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border text-muted-foreground hover:border-primary/50"}`,
                                children: u
                            }, u))
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Style Selection"
                        }), d.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                            children: BS.map(u => d.jsx("button", {
                                onClick: () => o("style", u),
                                className: `h-11 rounded-lg border text-sm font-medium transition-all duration-300 ${n.style === u ? "bg-primary text-primary-foreground border-primary" : "bg-secondary border-border text-muted-foreground hover:border-primary/50"}`,
                                children: u
                            }, u))
                        })]
                    }), d.jsxs("div", {
                        children: [d.jsx("label", {
                            className: a,
                            children: "Special Requirements"
                        }), d.jsx("textarea", {
                            className: "w-full rounded-lg bg-secondary border border-border p-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none font-body text-sm min-h-[100px] resize-y",
                            placeholder: "Any special considerations, accessibility needs, etc.",
                            value: n.specialRequirements,
                            onChange: u => o("specialRequirements", u.target.value)
                        })]
                    })]
                }), e === 3 && d.jsxs("div", {
                    className: "space-y-6",
                    children: [d.jsx("h3", {
                        className: "font-heading text-2xl font-semibold",
                        children: "Review Your Project"
                    }), [{
                        label: "Name",
                        value: n.fullName
                    }, {
                        label: "Email",
                        value: n.email
                    }, {
                        label: "Phone",
                        value: n.phone
                    }, {
                        label: "Address",
                        value: n.address
                    }, {
                        label: "Project Type",
                        value: n.projectType
                    }, {
                        label: "Square Footage",
                        value: n.sqft
                    }, {
                        label: "Timeline",
                        value: n.timeline
                    }, {
                        label: "Budget",
                        value: n.budgetRange
                    }, {
                        label: "Materials",
                        value: n.materials.join(", ")
                    }, {
                        label: "Style",
                        value: n.style
                    }].filter(u => u.value).map(u => d.jsxs("div", {
                        className: "flex justify-between items-center py-3 border-b border-border/50",
                        children: [d.jsx("span", {
                            className: "text-muted-foreground text-sm",
                            children: u.label
                        }), d.jsx("span", {
                            className: "text-sm font-medium text-right max-w-[60%]",
                            children: u.value
                        })]
                    }, u.label)), n.description && d.jsxs("div", {
                        className: "pt-2",
                        children: [d.jsx("span", {
                            className: "text-muted-foreground text-sm block mb-2",
                            children: "Description"
                        }), d.jsx("p", {
                            className: "text-sm",
                            children: n.description
                        })]
                    })]
                }), d.jsxs("div", {
                    className: "flex justify-between mt-8 gap-4",
                    children: [e > 0 ? d.jsx(St, {
                        variant: "goldOutline",
                        size: "lg",
                        onClick: () => t(u => u - 1),
                        children: "Back"
                    }) : d.jsx("div", {}), e < 3 ? d.jsx(St, {
                        variant: "gold",
                        size: "lg",
                        onClick: () => t(u => u + 1),
                        disabled: !s(),
                        children: "Next Step"
                    }) : d.jsx(St, {
                        variant: "gold",
                        size: "lg",
                        onClick: () => alert("Project submitted! We'll be in touch within 24 hours."),
                        children: "Submit Project"
                    })]
                })]
            })]
        })
    })
}
  , Vl = [{
    name: "Jonathan & Maria Chen",
    role: "Custom Home – Bellevue, WA",
    quote: "From the first meeting to move-in day, the experience was exceptional. They built our dream home with incredible attention to detail and kept us informed every step of the way.",
    rating: 5
}, {
    name: "Sarah Williams",
    role: "Luxury Renovation – Manhattan, NY",
    quote: "The team transformed our pre-war apartment into a modern masterpiece. Their transparent pricing and flawless execution made a complex renovation feel effortless.",
    rating: 5
}, {
    name: "David Park",
    role: "Commercial Development – Austin, TX",
    quote: "Our office build was completed on time and under budget. The real-time project tracking gave us complete peace of mind throughout the entire process.",
    rating: 5
}, {
    name: "Alexandra Foster",
    role: "Design-Build – Scottsdale, AZ",
    quote: "Working with this team was a true partnership. They listened to our vision and delivered something beyond what we imagined. Five stars is not enough.",
    rating: 5
}]
  , VS = () => {
    const [e,t] = w.useState(0)
      , n = () => t(i => i === 0 ? Vl.length - 1 : i - 1)
      , r = () => t(i => i === Vl.length - 1 ? 0 : i + 1)
      , o = Vl[e];
    return d.jsx("section", {
        className: "section-padding",
        children: d.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [d.jsx("p", {
                className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                children: "Testimonials"
            }), d.jsx("h2", {
                className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-16",
                children: "Client Stories"
            }), d.jsxs("div", {
                className: "glass-card rounded-2xl p-10 md:p-14 relative",
                children: [d.jsx("div", {
                    className: "flex justify-center gap-1 mb-6",
                    children: Array.from({
                        length: o.rating
                    }).map( (i, s) => d.jsx(v1, {
                        className: "w-5 h-5 fill-primary text-primary"
                    }, s))
                }), d.jsxs("blockquote", {
                    className: "font-heading text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-8 text-foreground/90",
                    children: ['"', o.quote, '"']
                }), d.jsx("p", {
                    className: "font-semibold text-foreground",
                    children: o.name
                }), d.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: o.role
                }), d.jsxs("div", {
                    className: "flex justify-center gap-4 mt-8",
                    children: [d.jsx("button", {
                        onClick: n,
                        className: "w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300",
                        children: d.jsx(e1, {
                            className: "w-5 h-5"
                        })
                    }), d.jsx("button", {
                        onClick: r,
                        className: "w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300",
                        children: d.jsx(t1, {
                            className: "w-5 h-5"
                        })
                    })]
                })]
            })]
        })
    })
}
  , HS = ["Custom Home", "Renovation", "Commercial", "Design-Build", "Other"]
  , WS = () => {
    const [e,t] = w.useState("")
      , [n,r] = w.useState("")
      , [o,i] = w.useState("")
      , s = "w-full h-12 rounded-lg bg-secondary border border-border px-4 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none font-body text-sm";
    return d.jsx("section", {
        className: "section-padding bg-gradient-navy",
        children: d.jsxs("div", {
            className: "max-w-3xl mx-auto text-center",
            children: [d.jsx("p", {
                className: "text-primary font-body text-sm tracking-[0.3em] uppercase mb-4",
                children: "Let's Build Together"
            }), d.jsx("h2", {
                className: "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",
                children: "Start Your Journey"
            }), d.jsx("p", {
                className: "text-muted-foreground max-w-xl mx-auto mb-12",
                children: "Tell us about your vision and we'll guide you through the next steps."
            }), d.jsx("div", {
                className: "glass-card rounded-2xl p-8 max-w-lg mx-auto",
                children: d.jsxs("div", {
                    className: "space-y-4",
                    children: [d.jsx("input", {
                        className: s,
                        placeholder: "Your Name",
                        value: e,
                        onChange: l => t(l.target.value)
                    }), d.jsx("input", {
                        className: s,
                        type: "email",
                        placeholder: "Your Email",
                        value: n,
                        onChange: l => r(l.target.value)
                    }), d.jsxs("select", {
                        className: s,
                        value: o,
                        onChange: l => i(l.target.value),
                        children: [d.jsx("option", {
                            value: "",
                            children: "Project Type"
                        }), HS.map(l => d.jsx("option", {
                            value: l,
                            children: l
                        }, l))]
                    }), d.jsx(St, {
                        variant: "gold",
                        size: "lg",
                        className: "w-full",
                        children: "Begin Your Project"
                    })]
                })
            })]
        })
    })
}
  , QS = () => d.jsx("footer", {
    className: "border-t border-border/30 py-12 px-4 md:px-8",
    children: d.jsxs("div", {
        className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6",
        children: [d.jsxs("div", {
            children: [d.jsx("span", {
                className: "font-heading text-xl font-bold text-gradient-gold",
                children: "LEGACY"
            }), d.jsx("p", {
                className: "text-muted-foreground text-sm mt-1",
                children: "Building tomorrow, today."
            })]
        }), d.jsxs("div", {
            className: "flex gap-8 text-sm text-muted-foreground",
            children: [d.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Privacy"
            }), d.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Terms"
            }), d.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Contact"
            })]
        }), d.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: "© 2026 Legacy Construction. All rights reserved."
        })]
    })
})
  , KS = () => d.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [d.jsx(vS, {}), d.jsx(wS, {}), d.jsx(bS, {}), d.jsx(ES, {}), d.jsx(_S, {}), d.jsx(AS, {}), d.jsx(IS, {}), d.jsx(US, {}), d.jsx(VS, {}), d.jsx(WS, {}), d.jsx(QS, {})]
})
  , YS = () => {
    const e = cg();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    d.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), d.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), d.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , GS = new T2
  , qS = () => d.jsx(R2, {
    client: GS,
    children: d.jsxs(o2, {
        children: [d.jsx(ex, {}), d.jsx(_x, {}), d.jsx(mS, {
            children: d.jsxs(fS, {
                children: [d.jsx(Xa, {
                    path: "/",
                    element: d.jsx(KS, {})
                }), d.jsx(Xa, {
                    path: "*",
                    element: d.jsx(YS, {})
                })]
            })
        })]
    })
});
Ah(document.getElementById("root")).render(d.jsx(qS, {}));
