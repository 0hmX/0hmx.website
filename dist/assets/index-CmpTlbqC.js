const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/BlogPage-CzQ_wodQ.js',
      'assets/useBlogPosts-lacGZoTb.js',
      'assets/BlogPostDetail-ecCTtXJE.js',
    ]),
) => i.map((i) => d[i]);
var ey = Object.defineProperty;
var ty = (e, t, n) =>
  t in e ? ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Ju = (e, t, n) => ty(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
const ny = 'modulepreload',
  ry = function (e) {
    return '/' + e;
  },
  ec = {},
  Wo = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const s = document.querySelector('meta[property=csp-nonce]'),
        a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute('nonce'));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = ry(l)), l in ec)) return;
          ec[l] = !0;
          const u = l.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : ny),
            u || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = l),
            a && f.setAttribute('nonce', a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, g) => {
              (f.addEventListener('load', d),
                f.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function o(s) {
      const a = new Event('vite:preloadError', { cancelable: !0 });
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented)) throw s;
    }
    return i.then((s) => {
      for (const a of s || []) a.status === 'rejected' && o(a.reason);
      return t().catch(o);
    });
  };
var uP =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var zd = { exports: {} },
  Ho = {},
  Bd = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = Symbol.for('react.element'),
  iy = Symbol.for('react.portal'),
  oy = Symbol.for('react.fragment'),
  sy = Symbol.for('react.strict_mode'),
  ay = Symbol.for('react.profiler'),
  ly = Symbol.for('react.provider'),
  uy = Symbol.for('react.context'),
  cy = Symbol.for('react.forward_ref'),
  fy = Symbol.for('react.suspense'),
  dy = Symbol.for('react.memo'),
  hy = Symbol.for('react.lazy'),
  tc = Symbol.iterator;
function py(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (tc && e[tc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var $d = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ud = Object.assign,
  Wd = {};
function tr(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Wd), (this.updater = n || $d));
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Hd() {}
Hd.prototype = tr.prototype;
function gl(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Wd), (this.updater = n || $d));
}
var yl = (gl.prototype = new Hd());
yl.constructor = gl;
Ud(yl, tr.prototype);
yl.isPureReactComponent = !0;
var nc = Array.isArray,
  Kd = Object.prototype.hasOwnProperty,
  vl = { current: null },
  bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      Kd.call(t, r) && !bd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: fi, type: e, key: o, ref: s, props: i, _owner: vl.current };
}
function my(e, t) {
  return { $$typeof: fi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fi;
}
function gy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var rc = /\/+/g;
function ps(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? gy('' + e.key) : t.toString(36);
}
function Yi(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case fi:
          case iy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + ps(s, 0) : r),
      nc(i)
        ? ((n = ''),
          e != null && (n = e.replace(rc, '$&/') + '/'),
          Yi(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (wl(i) &&
            (i = my(
              i,
              n +
                (!i.key || (s && s.key === i.key) ? '' : ('' + i.key).replace(rc, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), nc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ps(o, a);
      s += Yi(o, t, n, l, i);
    }
  else if (((l = py(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = r + ps(o, a++)), (s += Yi(o, t, n, l, i)));
  else if (o === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      )
    );
  return s;
}
function Ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Yi(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function yy(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Gi = { transition: null },
  vy = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: Gi, ReactCurrentOwner: vl };
function Yd() {
  throw Error('act(...) is not supported in production builds of React.');
}
j.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wl(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
j.Component = tr;
j.Fragment = oy;
j.Profiler = ay;
j.PureComponent = gl;
j.StrictMode = sy;
j.Suspense = fy;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy;
j.act = Yd;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    );
  var r = Ud({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = vl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Kd.call(t, l) &&
        !bd.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: fi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: uy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ly, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Qd;
j.createFactory = function (e) {
  var t = Qd.bind(null, e);
  return ((t.type = e), t);
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: cy, render: e };
};
j.isValidElement = wl;
j.lazy = function (e) {
  return { $$typeof: hy, _payload: { _status: -1, _result: e }, _init: yy };
};
j.memo = function (e, t) {
  return { $$typeof: dy, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Gi.transition;
  Gi.transition = {};
  try {
    e();
  } finally {
    Gi.transition = t;
  }
};
j.unstable_act = Yd;
j.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ke.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
j.useId = function () {
  return ke.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ke.current.useRef(e);
};
j.useState = function (e) {
  return ke.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ke.current.useTransition();
};
j.version = '18.3.1';
Bd.exports = j;
var y = Bd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy = y,
  xy = Symbol.for('react.element'),
  Sy = Symbol.for('react.fragment'),
  ky = Object.prototype.hasOwnProperty,
  Ey = wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) ky.call(t, r) && !Cy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: xy, type: e, key: o, ref: s, props: i, _owner: Ey.current };
}
Ho.Fragment = Sy;
Ho.jsx = Gd;
Ho.jsxs = Gd;
zd.exports = Ho;
var E = zd.exports,
  Xd = { exports: {} },
  Ve = {},
  Zd = { exports: {} },
  qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, _) {
    var V = M.length;
    M.push(_);
    e: for (; 0 < V; ) {
      var q = (V - 1) >>> 1,
        se = M[q];
      if (0 < i(se, _)) ((M[q] = _), (M[V] = se), (V = q));
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var _ = M[0],
      V = M.pop();
    if (V !== _) {
      M[0] = V;
      e: for (var q = 0, se = M.length, Ci = se >>> 1; q < Ci; ) {
        var qt = 2 * (q + 1) - 1,
          hs = M[qt],
          Jt = qt + 1,
          Pi = M[Jt];
        if (0 > i(hs, V))
          Jt < se && 0 > i(Pi, hs)
            ? ((M[q] = Pi), (M[Jt] = V), (q = Jt))
            : ((M[q] = hs), (M[qt] = V), (q = qt));
        else if (Jt < se && 0 > i(Pi, V)) ((M[q] = Pi), (M[Jt] = V), (q = Jt));
        else break e;
      }
    }
    return _;
  }
  function i(M, _) {
    var V = M.sortIndex - _.sortIndex;
    return V !== 0 ? V : M.id - _.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= M) (r(u), (_.sortIndex = _.expirationTime), t(l, _));
      else break;
      _ = n(u);
    }
  }
  function x(M) {
    if (((w = !1), m(M), !v))
      if (n(l) !== null) ((v = !0), Ei(S));
      else {
        var _ = n(u);
        _ !== null && re(x, _.startTime - M);
      }
  }
  function S(M, _) {
    ((v = !1), w && ((w = !1), p(C), (C = -1)), (g = !0));
    var V = d;
    try {
      for (m(_), f = n(l); f !== null && (!(f.expirationTime > _) || (M && !H())); ) {
        var q = f.callback;
        if (typeof q == 'function') {
          ((f.callback = null), (d = f.priorityLevel));
          var se = q(f.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof se == 'function' ? (f.callback = se) : f === n(l) && r(l),
            m(_));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ci = !0;
      else {
        var qt = n(u);
        (qt !== null && re(x, qt.startTime - _), (Ci = !1));
      }
      return Ci;
    } finally {
      ((f = null), (d = V), (g = !1));
    }
  }
  var P = !1,
    T = null,
    C = -1,
    A = 5,
    D = -1;
  function H() {
    return !(e.unstable_now() - D < A);
  }
  function Tt() {
    if (T !== null) {
      var M = e.unstable_now();
      D = M;
      var _ = !0;
      try {
        _ = T(!0, M);
      } finally {
        _ ? Zt() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var Zt;
  if (typeof h == 'function')
    Zt = function () {
      h(Tt);
    };
  else if (typeof MessageChannel < 'u') {
    var cr = new MessageChannel(),
      qu = cr.port2;
    ((cr.port1.onmessage = Tt),
      (Zt = function () {
        qu.postMessage(null);
      }));
  } else
    Zt = function () {
      k(Tt, 0);
    };
  function Ei(M) {
    ((T = M), P || ((P = !0), Zt()));
  }
  function re(M, _) {
    C = k(function () {
      M(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Ei(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = d;
      }
      var V = d;
      d = _;
      try {
        return M();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, _) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var V = d;
      d = M;
      try {
        return _();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (M, _, V) {
      var q = e.unstable_now();
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? q + V : q))
          : (V = q),
        M)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = V + se),
        (M = {
          id: c++,
          callback: _,
          priorityLevel: M,
          startTime: V,
          expirationTime: se,
          sortIndex: -1,
        }),
        V > q
          ? ((M.sortIndex = V),
            t(u, M),
            n(l) === null && M === n(u) && (w ? (p(C), (C = -1)) : (w = !0), re(x, V - q)))
          : ((M.sortIndex = se), t(l, M), v || g || ((v = !0), Ei(S))),
        M
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (M) {
      var _ = d;
      return function () {
        var V = d;
        d = _;
        try {
          return M.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    }));
})(qd);
Zd.exports = qd;
var Py = Zd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty = y,
  _e = Py;
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Jd = new Set(),
  Br = {};
function xn(e, t) {
  (bn(e, t), bn(e + 'Capture', t));
}
function bn(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) Jd.add(t[e]);
}
var yt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  na = Object.prototype.hasOwnProperty,
  Ry =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ic = {},
  oc = {};
function My(e) {
  return na.call(oc, e) ? !0 : na.call(ic, e) ? !1 : Ry.test(e) ? (oc[e] = !0) : ((ic[e] = !0), !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Dy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ly(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ee(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  de[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  de[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  de[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  de[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  de[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  de[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xl = /[\-:]([a-z])/g;
function Sl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xl, Sl);
    de[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xl, Sl);
    de[t] = new Ee(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(xl, Sl);
  de[t] = new Ee(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  de[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Ee('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  de[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kl(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Dy(t, n, i, r) && (n = null),
    r || i === null
      ? My(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ri = Symbol.for('react.element'),
  En = Symbol.for('react.portal'),
  Cn = Symbol.for('react.fragment'),
  El = Symbol.for('react.strict_mode'),
  ra = Symbol.for('react.profiler'),
  eh = Symbol.for('react.provider'),
  th = Symbol.for('react.context'),
  Cl = Symbol.for('react.forward_ref'),
  ia = Symbol.for('react.suspense'),
  oa = Symbol.for('react.suspense_list'),
  Pl = Symbol.for('react.memo'),
  Lt = Symbol.for('react.lazy'),
  nh = Symbol.for('react.offscreen'),
  sc = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (sc && e[sc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var G = Object.assign,
  ms;
function Sr(e) {
  if (ms === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ms = (t && t[1]) || '';
    }
  return (
    `
` +
    ms +
    e
  );
}
var gs = !1;
function ys(e, t) {
  if (!e || gs) return '';
  gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((gs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? Sr(e) : '';
}
function Ay(e) {
  switch (e.tag) {
    case 5:
      return Sr(e.type);
    case 16:
      return Sr('Lazy');
    case 13:
      return Sr('Suspense');
    case 19:
      return Sr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = ys(e.type, !1)), e);
    case 11:
      return ((e = ys(e.type.render, !1)), e);
    case 1:
      return ((e = ys(e.type, !0)), e);
    default:
      return '';
  }
}
function sa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Cn:
      return 'Fragment';
    case En:
      return 'Portal';
    case ra:
      return 'Profiler';
    case El:
      return 'StrictMode';
    case ia:
      return 'Suspense';
    case oa:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case th:
        return (e.displayName || 'Context') + '.Consumer';
      case eh:
        return (e._context.displayName || 'Context') + '.Provider';
      case Cl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Pl:
        return ((t = e.displayName || null), t !== null ? t : sa(e.type) || 'Memo');
      case Lt:
        ((t = e._payload), (e = e._init));
        try {
          return sa(e(t));
        } catch {}
    }
  return null;
}
function Ny(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return sa(t);
    case 8:
      return t === El ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function rh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function _y(e) {
  var t = rh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = '' + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Mi(e) {
  e._valueTracker || (e._valueTracker = _y(e));
}
function ih(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = rh(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ho(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function aa(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ac(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    }));
}
function oh(e, t) {
  ((t = t.checked), t != null && kl(e, 'checked', t, !1));
}
function la(e, t) {
  oh(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? ua(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ua(e, t.type, Wt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function lc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function ua(e, t, n) {
  (t !== 'number' || ho(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var kr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ca(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function sh(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function cc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ah(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function fa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ah(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Li,
  lh = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Li = Li || document.createElement('div'),
          Li.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
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
    strokeWidth: !0,
  },
  Vy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Tr).forEach(function (e) {
  Vy.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]));
  });
});
function uh(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function ch(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = uh(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var jy = G(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function da(e, t) {
  if (t) {
    if (jy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62));
  }
}
function ha(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var pa = null;
function Tl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ma = null,
  $n = null,
  Un = null;
function fc(e) {
  if ((e = pi(e))) {
    if (typeof ma != 'function') throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Go(t)), ma(e.stateNode, e.type, t));
  }
}
function fh(e) {
  $n ? (Un ? Un.push(e) : (Un = [e])) : ($n = e);
}
function dh() {
  if ($n) {
    var e = $n,
      t = Un;
    if (((Un = $n = null), fc(e), t)) for (e = 0; e < t.length; e++) fc(t[e]);
  }
}
function hh(e, t) {
  return e(t);
}
function ph() {}
var vs = !1;
function mh(e, t, n) {
  if (vs) return e(t, n);
  vs = !0;
  try {
    return hh(e, t, n);
  } finally {
    ((vs = !1), ($n !== null || Un !== null) && (ph(), dh()));
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Go(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
  return n;
}
var ga = !1;
if (yt)
  try {
    var dr = {};
    (Object.defineProperty(dr, 'passive', {
      get: function () {
        ga = !0;
      },
    }),
      window.addEventListener('test', dr, dr),
      window.removeEventListener('test', dr, dr));
  } catch {
    ga = !1;
  }
function Oy(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Rr = !1,
  po = null,
  mo = !1,
  ya = null,
  Iy = {
    onError: function (e) {
      ((Rr = !0), (po = e));
    },
  };
function Fy(e, t, n, r, i, o, s, a, l) {
  ((Rr = !1), (po = null), Oy.apply(Iy, arguments));
}
function zy(e, t, n, r, i, o, s, a, l) {
  if ((Fy.apply(this, arguments), Rr)) {
    if (Rr) {
      var u = po;
      ((Rr = !1), (po = null));
    } else throw Error(R(198));
    mo || ((mo = !0), (ya = u));
  }
}
function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function dc(e) {
  if (Sn(e) !== e) throw Error(R(188));
}
function By(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (dc(i), e);
        if (o === r) return (dc(i), t);
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function yh(e) {
  return ((e = By(e)), e !== null ? vh(e) : null);
}
function vh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wh = _e.unstable_scheduleCallback,
  hc = _e.unstable_cancelCallback,
  $y = _e.unstable_shouldYield,
  Uy = _e.unstable_requestPaint,
  ee = _e.unstable_now,
  Wy = _e.unstable_getCurrentPriorityLevel,
  Rl = _e.unstable_ImmediatePriority,
  xh = _e.unstable_UserBlockingPriority,
  go = _e.unstable_NormalPriority,
  Hy = _e.unstable_LowPriority,
  Sh = _e.unstable_IdlePriority,
  Ko = null,
  it = null;
function Ky(e) {
  if (it && typeof it.onCommitFiberRoot == 'function')
    try {
      it.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Yy,
  by = Math.log,
  Qy = Math.LN2;
function Yy(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((by(e) / Qy) | 0)) | 0);
}
var Di = 64,
  Ai = 4194304;
function Er(e) {
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
      return e;
  }
}
function yo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Er(a)) : ((o &= s), o !== 0 && (r = Er(o)));
  } else ((s = n & ~i), s !== 0 ? (r = Er(s)) : o !== 0 && (r = Er(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Gy(e, t) {
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
      return -1;
  }
}
function Xy(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Xe(o),
      a = 1 << s,
      l = i[s];
    (l === -1 ? (!(a & n) || a & r) && (i[s] = Gy(a, t)) : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function va(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function kh() {
  var e = Di;
  return ((Di <<= 1), !(Di & 4194240) && (Di = 64), e);
}
function ws(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function di(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n));
}
function Zy(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Ml(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var F = 0;
function Eh(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var Ch,
  Ll,
  Ph,
  Th,
  Rh,
  wa = !1,
  Ni = [],
  jt = null,
  Ot = null,
  It = null,
  Wr = new Map(),
  Hr = new Map(),
  At = [],
  qy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function pc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      jt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ot = null;
      break;
    case 'mouseover':
    case 'mouseout':
      It = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Wr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Hr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = pi(t)), t !== null && Ll(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Jy(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return ((jt = hr(jt, e, t, n, r, i)), !0);
    case 'dragenter':
      return ((Ot = hr(Ot, e, t, n, r, i)), !0);
    case 'mouseover':
      return ((It = hr(It, e, t, n, r, i)), !0);
    case 'pointerover':
      var o = i.pointerId;
      return (Wr.set(o, hr(Wr.get(o) || null, e, t, n, r, i)), !0);
    case 'gotpointercapture':
      return ((o = i.pointerId), Hr.set(o, hr(Hr.get(o) || null, e, t, n, r, i)), !0);
  }
  return !1;
}
function Mh(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gh(n)), t !== null)) {
          ((e.blockedOn = t),
            Rh(e.priority, function () {
              Ph(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((pa = r), n.target.dispatchEvent(r), (pa = null));
    } else return ((t = pi(n)), t !== null && Ll(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function mc(e, t, n) {
  Xi(e) && n.delete(t);
}
function ev() {
  ((wa = !1),
    jt !== null && Xi(jt) && (jt = null),
    Ot !== null && Xi(Ot) && (Ot = null),
    It !== null && Xi(It) && (It = null),
    Wr.forEach(mc),
    Hr.forEach(mc));
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wa || ((wa = !0), _e.unstable_scheduleCallback(_e.unstable_NormalPriority, ev)));
}
function Kr(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < Ni.length) {
    pr(Ni[0], e);
    for (var n = 1; n < Ni.length; n++) {
      var r = Ni[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && pr(jt, e),
      Ot !== null && pr(Ot, e),
      It !== null && pr(It, e),
      Wr.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < At.length;
    n++
  )
    ((r = At[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
    (Mh(n), n.blockedOn === null && At.shift());
}
var Wn = Ct.ReactCurrentBatchConfig,
  vo = !0;
function tv(e, t, n, r) {
  var i = F,
    o = Wn.transition;
  Wn.transition = null;
  try {
    ((F = 1), Dl(e, t, n, r));
  } finally {
    ((F = i), (Wn.transition = o));
  }
}
function nv(e, t, n, r) {
  var i = F,
    o = Wn.transition;
  Wn.transition = null;
  try {
    ((F = 4), Dl(e, t, n, r));
  } finally {
    ((F = i), (Wn.transition = o));
  }
}
function Dl(e, t, n, r) {
  if (vo) {
    var i = xa(e, t, n, r);
    if (i === null) (Ls(e, t, r, wo, n), pc(e, r));
    else if (Jy(i, e, t, n, r)) r.stopPropagation();
    else if ((pc(e, r), t & 4 && -1 < qy.indexOf(e))) {
      for (; i !== null; ) {
        var o = pi(i);
        if ((o !== null && Ch(o), (o = xa(e, t, n, r)), o === null && Ls(e, t, r, wo, n), o === i))
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ls(e, t, r, null, n);
  }
}
var wo = null;
function xa(e, t, n, r) {
  if (((wo = null), (e = Tl(r)), (e = sn(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((wo = e), null);
}
function Lh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Wy()) {
        case Rl:
          return 1;
        case xh:
          return 4;
        case go:
        case Hy:
          return 16;
        case Sh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  Al = null,
  Zi = null;
function Dh() {
  if (Zi) return Zi;
  var e,
    t = Al,
    n = t.length,
    r,
    i = 'value' in _t ? _t.value : _t.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Zi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function qi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _i() {
  return !0;
}
function gc() {
  return !1;
}
function je(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? _i
        : gc),
      (this.isPropagationStopped = gc),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = _i));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = _i));
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nl = je(nr),
  hi = G({}, nr, { view: 0, detail: 0 }),
  rv = je(hi),
  xs,
  Ss,
  mr,
  bo = G({}, hi, {
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
    getModifierState: _l,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === 'mousemove'
              ? ((xs = e.screenX - mr.screenX), (Ss = e.screenY - mr.screenY))
              : (Ss = xs = 0),
            (mr = e)),
          xs);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ss;
    },
  }),
  yc = je(bo),
  iv = G({}, bo, { dataTransfer: 0 }),
  ov = je(iv),
  sv = G({}, hi, { relatedTarget: 0 }),
  ks = je(sv),
  av = G({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lv = je(av),
  uv = G({}, nr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cv = je(uv),
  fv = G({}, nr, { data: 0 }),
  vc = je(fv),
  dv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  hv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  pv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function mv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pv[e]) ? !!t[e] : !1;
}
function _l() {
  return mv;
}
var gv = G({}, hi, {
    key: function (e) {
      if (e.key) {
        var t = dv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = qi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? hv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _l,
    charCode: function (e) {
      return e.type === 'keypress' ? qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? qi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  yv = je(gv),
  vv = G({}, bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wc = je(vv),
  wv = G({}, hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _l,
  }),
  xv = je(wv),
  Sv = G({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = je(Sv),
  Ev = G({}, bo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Cv = je(Ev),
  Pv = [9, 13, 27, 32],
  Vl = yt && 'CompositionEvent' in window,
  Mr = null;
yt && 'documentMode' in document && (Mr = document.documentMode);
var Tv = yt && 'TextEvent' in window && !Mr,
  Ah = yt && (!Vl || (Mr && 8 < Mr && 11 >= Mr)),
  xc = ' ',
  Sc = !1;
function Nh(e, t) {
  switch (e) {
    case 'keyup':
      return Pv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function _h(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Pn = !1;
function Rv(e, t) {
  switch (e) {
    case 'compositionend':
      return _h(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Sc = !0), xc);
    case 'textInput':
      return ((e = t.data), e === xc && Sc ? null : e);
    default:
      return null;
  }
}
function Mv(e, t) {
  if (Pn)
    return e === 'compositionend' || (!Vl && Nh(e, t))
      ? ((e = Dh()), (Zi = Al = _t = null), (Pn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ah && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Lv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function kc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Lv[e.type] : t === 'textarea';
}
function Vh(e, t, n, r) {
  (fh(r),
    (t = xo(t, 'onChange')),
    0 < t.length &&
      ((n = new Nl('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Lr = null,
  br = null;
function Dv(e) {
  Kh(e, 0);
}
function Qo(e) {
  var t = Mn(e);
  if (ih(t)) return e;
}
function Av(e, t) {
  if (e === 'change') return t;
}
var jh = !1;
if (yt) {
  var Es;
  if (yt) {
    var Cs = 'oninput' in document;
    if (!Cs) {
      var Ec = document.createElement('div');
      (Ec.setAttribute('oninput', 'return;'), (Cs = typeof Ec.oninput == 'function'));
    }
    Es = Cs;
  } else Es = !1;
  jh = Es && (!document.documentMode || 9 < document.documentMode);
}
function Cc() {
  Lr && (Lr.detachEvent('onpropertychange', Oh), (br = Lr = null));
}
function Oh(e) {
  if (e.propertyName === 'value' && Qo(br)) {
    var t = [];
    (Vh(t, br, e, Tl(e)), mh(Dv, t));
  }
}
function Nv(e, t, n) {
  e === 'focusin'
    ? (Cc(), (Lr = t), (br = n), Lr.attachEvent('onpropertychange', Oh))
    : e === 'focusout' && Cc();
}
function _v(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Qo(br);
}
function Vv(e, t) {
  if (e === 'click') return Qo(t);
}
function jv(e, t) {
  if (e === 'input' || e === 'change') return Qo(t);
}
function Ov(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == 'function' ? Object.is : Ov;
function Qr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!na.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tc(e, t) {
  var n = Pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pc(n);
  }
}
function Ih(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ih(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Fh() {
  for (var e = window, t = ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ho(e.document);
  }
  return t;
}
function jl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Iv(e) {
  var t = Fh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ih(n.ownerDocument.documentElement, n)) {
    if (r !== null && jl(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Tc(n, o)));
        var s = Tc(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var Fv = yt && 'documentMode' in document && 11 >= document.documentMode,
  Tn = null,
  Sa = null,
  Dr = null,
  ka = !1;
function Rc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ka ||
    Tn == null ||
    Tn !== ho(r) ||
    ((r = Tn),
    'selectionStart' in r && jl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Qr(Dr, r)) ||
      ((Dr = r),
      (r = xo(Sa, 'onSelect')),
      0 < r.length &&
        ((t = new Nl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function Vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Rn = {
    animationend: Vi('Animation', 'AnimationEnd'),
    animationiteration: Vi('Animation', 'AnimationIteration'),
    animationstart: Vi('Animation', 'AnimationStart'),
    transitionend: Vi('Transition', 'TransitionEnd'),
  },
  Ps = {},
  zh = {};
yt &&
  ((zh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Rn.animationend.animation,
    delete Rn.animationiteration.animation,
    delete Rn.animationstart.animation),
  'TransitionEvent' in window || delete Rn.transitionend.transition);
function Yo(e) {
  if (Ps[e]) return Ps[e];
  if (!Rn[e]) return e;
  var t = Rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zh) return (Ps[e] = t[n]);
  return e;
}
var Bh = Yo('animationend'),
  $h = Yo('animationiteration'),
  Uh = Yo('animationstart'),
  Wh = Yo('transitionend'),
  Hh = new Map(),
  Mc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Qt(e, t) {
  (Hh.set(e, t), xn(t, [e]));
}
for (var Ts = 0; Ts < Mc.length; Ts++) {
  var Rs = Mc[Ts],
    zv = Rs.toLowerCase(),
    Bv = Rs[0].toUpperCase() + Rs.slice(1);
  Qt(zv, 'on' + Bv);
}
Qt(Bh, 'onAnimationEnd');
Qt($h, 'onAnimationIteration');
Qt(Uh, 'onAnimationStart');
Qt('dblclick', 'onDoubleClick');
Qt('focusin', 'onFocus');
Qt('focusout', 'onBlur');
Qt(Wh, 'onTransitionEnd');
bn('onMouseEnter', ['mouseout', 'mouseover']);
bn('onMouseLeave', ['mouseout', 'mouseover']);
bn('onPointerEnter', ['pointerout', 'pointerover']);
bn('onPointerLeave', ['pointerout', 'pointerover']);
xn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
xn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
xn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
xn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
xn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
xn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  $v = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cr));
function Lc(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), zy(r, t, void 0, e), (e.currentTarget = null));
}
function Kh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (Lc(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (Lc(i, a, u), (o = l));
        }
    }
  }
  if (mo) throw ((e = ya), (mo = !1), (ya = null), e);
}
function B(e, t) {
  var n = t[Ra];
  n === void 0 && (n = t[Ra] = new Set());
  var r = e + '__bubble';
  n.has(r) || (bh(t, e, 2, !1), n.add(r));
}
function Ms(e, t, n) {
  var r = 0;
  (t && (r |= 4), bh(n, e, r, t));
}
var ji = '_reactListening' + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[ji]) {
    ((e[ji] = !0),
      Jd.forEach(function (n) {
        n !== 'selectionchange' && ($v.has(n) || Ms(n, !1, e), Ms(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || ((t[ji] = !0), Ms('selectionchange', !1, t));
  }
}
function bh(e, t, n, r) {
  switch (Lh(t)) {
    case 1:
      var i = tv;
      break;
    case 4:
      i = nv;
      break;
    default:
      i = Dl;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !ga || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Ls(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = sn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  mh(function () {
    var u = o,
      c = Tl(n),
      f = [];
    e: {
      var d = Hh.get(e);
      if (d !== void 0) {
        var g = Nl,
          v = e;
        switch (e) {
          case 'keypress':
            if (qi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = yv;
            break;
          case 'focusin':
            ((v = 'focus'), (g = ks));
            break;
          case 'focusout':
            ((v = 'blur'), (g = ks));
            break;
          case 'beforeblur':
          case 'afterblur':
            g = ks;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = yc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = ov;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = xv;
            break;
          case Bh:
          case $h:
          case Uh:
            g = lv;
            break;
          case Wh:
            g = kv;
            break;
          case 'scroll':
            g = rv;
            break;
          case 'wheel':
            g = Cv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = cv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = wc;
        }
        var w = (t & 4) !== 0,
          k = !w && e === 'scroll',
          p = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x), p !== null && ((x = Ur(h, p)), x != null && w.push(Gr(h, x, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < w.length && ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d && n !== pa && (v = n.relatedTarget || n.fromElement) && (sn(v) || v[vt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? sn(v) : null),
              v !== null && ((k = Sn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((w = yc),
            (x = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = wc), (x = 'onPointerLeave'), (p = 'onPointerEnter'), (h = 'pointer')),
            (k = g == null ? d : Mn(g)),
            (m = v == null ? d : Mn(v)),
            (d = new w(x, h + 'leave', g, n, c)),
            (d.target = k),
            (d.relatedTarget = m),
            (x = null),
            sn(c) === u &&
              ((w = new w(p, h + 'enter', v, n, c)),
              (w.target = m),
              (w.relatedTarget = k),
              (x = w)),
            (k = x),
            g && v)
          )
            t: {
              for (w = g, p = v, h = 0, m = w; m; m = kn(m)) h++;
              for (m = 0, x = p; x; x = kn(x)) m++;
              for (; 0 < h - m; ) ((w = kn(w)), h--);
              for (; 0 < m - h; ) ((p = kn(p)), m--);
              for (; h--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                ((w = kn(w)), (p = kn(p)));
              }
              w = null;
            }
          else w = null;
          (g !== null && Dc(f, d, g, w, !1), v !== null && k !== null && Dc(f, k, v, w, !0));
        }
      }
      e: {
        if (
          ((d = u ? Mn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var S = Av;
        else if (kc(d))
          if (jh) S = jv;
          else {
            S = _v;
            var P = Nv;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = Vv);
        if (S && (S = S(e, u))) {
          Vh(f, S, n, c);
          break e;
        }
        (P && P(e, d, u),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            ua(d, 'number', d.value));
      }
      switch (((P = u ? Mn(u) : window), e)) {
        case 'focusin':
          (kc(P) || P.contentEditable === 'true') && ((Tn = P), (Sa = u), (Dr = null));
          break;
        case 'focusout':
          Dr = Sa = Tn = null;
          break;
        case 'mousedown':
          ka = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((ka = !1), Rc(f, n, c));
          break;
        case 'selectionchange':
          if (Fv) break;
        case 'keydown':
        case 'keyup':
          Rc(f, n, c);
      }
      var T;
      if (Vl)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        Pn
          ? Nh(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      (C &&
        (Ah &&
          n.locale !== 'ko' &&
          (Pn || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && Pn && (T = Dh())
            : ((_t = c), (Al = 'value' in _t ? _t.value : _t.textContent), (Pn = !0))),
        (P = xo(u, C)),
        0 < P.length &&
          ((C = new vc(C, e, null, n, c)),
          f.push({ event: C, listeners: P }),
          T ? (C.data = T) : ((T = _h(n)), T !== null && (C.data = T)))),
        (T = Tv ? Rv(e, n) : Mv(e, n)) &&
          ((u = xo(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new vc('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T))));
    }
    Kh(f, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ur(e, n)),
      o != null && r.unshift(Gr(e, o, i)),
      (o = Ur(e, t)),
      o != null && r.push(Gr(e, o, i))),
      (e = e.return));
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ur(n, o)), l != null && s.unshift(Gr(n, l, a)))
        : i || ((l = Ur(n, o)), l != null && s.push(Gr(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Uv = /\r\n?/g,
  Wv = /\u0000|\uFFFD/g;
function Ac(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Uv,
      `
`,
    )
    .replace(Wv, '');
}
function Oi(e, t, n) {
  if (((t = Ac(t)), Ac(e) !== t && n)) throw Error(R(425));
}
function So() {}
var Ea = null,
  Ca = null;
function Pa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ta = typeof setTimeout == 'function' ? setTimeout : void 0,
  Hv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Nc = typeof Promise == 'function' ? Promise : void 0,
  Kv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Nc < 'u'
        ? function (e) {
            return Nc.resolve(null).then(e).catch(bv);
          }
        : Ta;
function bv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ds(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(i), Kr(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Kr(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function _c(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  nt = '__reactFiber$' + rr,
  Xr = '__reactProps$' + rr,
  vt = '__reactContainer$' + rr,
  Ra = '__reactEvents$' + rr,
  Qv = '__reactListeners$' + rr,
  Yv = '__reactHandles$' + rr;
function sn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[nt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = _c(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = _c(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function pi(e) {
  return (
    (e = e[nt] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Go(e) {
  return e[Xr] || null;
}
var Ma = [],
  Ln = -1;
function Yt(e) {
  return { current: e };
}
function $(e) {
  0 > Ln || ((e.current = Ma[Ln]), (Ma[Ln] = null), Ln--);
}
function z(e, t) {
  (Ln++, (Ma[Ln] = e.current), (e.current = t));
}
var Ht = {},
  ye = Yt(Ht),
  Re = Yt(!1),
  mn = Ht;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Me(e) {
  return ((e = e.childContextTypes), e != null);
}
function ko() {
  ($(Re), $(ye));
}
function Vc(e, t, n) {
  if (ye.current !== Ht) throw Error(R(168));
  (z(ye, t), z(Re, n));
}
function Qh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, Ny(e) || 'Unknown', i));
  return G({}, n, r);
}
function Eo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (mn = ye.current),
    z(ye, e),
    z(Re, Re.current),
    !0
  );
}
function jc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((e = Qh(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Re),
      $(ye),
      z(ye, e))
    : $(Re),
    z(Re, n));
}
var dt = null,
  Xo = !1,
  As = !1;
function Yh(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function Gv(e) {
  ((Xo = !0), Yh(e));
}
function Gt() {
  if (!As && dt !== null) {
    As = !0;
    var e = 0,
      t = F;
    try {
      var n = dt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((dt = null), (Xo = !1));
    } catch (i) {
      throw (dt !== null && (dt = dt.slice(e + 1)), wh(Rl, Gt), i);
    } finally {
      ((F = t), (As = !1));
    }
  }
  return null;
}
var Dn = [],
  An = 0,
  Co = null,
  Po = 0,
  Fe = [],
  ze = 0,
  gn = null,
  ht = 1,
  pt = '';
function tn(e, t) {
  ((Dn[An++] = Po), (Dn[An++] = Co), (Co = e), (Po = t));
}
function Gh(e, t, n) {
  ((Fe[ze++] = ht), (Fe[ze++] = pt), (Fe[ze++] = gn), (gn = e));
  var r = ht;
  e = pt;
  var i = 32 - Xe(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Xe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ht = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (pt = o + e));
  } else ((ht = (1 << o) | (n << i) | r), (pt = e));
}
function Ol(e) {
  e.return !== null && (tn(e, 1), Gh(e, 1, 0));
}
function Il(e) {
  for (; e === Co; ) ((Co = Dn[--An]), (Dn[An] = null), (Po = Dn[--An]), (Dn[An] = null));
  for (; e === gn; )
    ((gn = Fe[--ze]),
      (Fe[ze] = null),
      (pt = Fe[--ze]),
      (Fe[ze] = null),
      (ht = Fe[--ze]),
      (Fe[ze] = null));
}
var Ne = null,
  Ae = null,
  U = !1,
  Ge = null;
function Xh(e, t) {
  var n = Be(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Oc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Ae = Ft(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: ht, overflow: pt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function La(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Da(e) {
  if (U) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Oc(e, t)) {
        if (La(e)) throw Error(R(418));
        t = Ft(n.nextSibling);
        var r = Ne;
        t && Oc(e, t) ? Xh(r, n) : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ne = e));
      }
    } else {
      if (La(e)) throw Error(R(418));
      ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ne = e));
    }
  }
}
function Ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function Ii(e) {
  if (e !== Ne) return !1;
  if (!U) return (Ic(e), (U = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Pa(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (La(e)) throw (Zh(), Error(R(418)));
    for (; t; ) (Xh(e, t), (t = Ft(t.nextSibling)));
  }
  if ((Ic(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ae = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ne ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Zh() {
  for (var e = Ae; e; ) e = Ft(e.nextSibling);
}
function Yn() {
  ((Ae = Ne = null), (U = !1));
}
function Fl(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var Xv = Ct.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Fi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      R(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    )
  );
}
function Fc(e) {
  var t = e._init;
  return t(e._payload);
}
function qh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = Ut(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m) : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = Fs(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, x) {
    var S = m.type;
    return S === Cn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == 'object' && S !== null && S.$$typeof === Lt && Fc(S) === h.type))
        ? ((x = i(h, m.props)), (x.ref = gr(p, h, m)), (x.return = p), x)
        : ((x = oo(m.type, m.key, m.props, null, p.mode, x)),
          (x.ref = gr(p, h, m)),
          (x.return = p),
          x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = zs(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = dn(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return ((h = Fs('' + h, p.mode, m)), (h.return = p), h);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Ri:
          return (
            (m = oo(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = gr(p, null, h)),
            (m.return = p),
            m
          );
        case En:
          return ((h = zs(h, p.mode, m)), (h.return = p), h);
        case Lt:
          var x = h._init;
          return f(p, x(h._payload), m);
      }
      if (kr(h) || fr(h)) return ((h = dn(h, p.mode, m, null)), (h.return = p), h);
      Fi(p, h);
    }
    return null;
  }
  function d(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return S !== null ? null : a(p, h, '' + m, x);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Ri:
          return m.key === S ? l(p, h, m, x) : null;
        case En:
          return m.key === S ? u(p, h, m, x) : null;
        case Lt:
          return ((S = m._init), d(p, h, S(m._payload), x));
      }
      if (kr(m) || fr(m)) return S !== null ? null : c(p, h, m, x, null);
      Fi(p, m);
    }
    return null;
  }
  function g(p, h, m, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return ((p = p.get(m) || null), a(h, p, '' + x, S));
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Ri:
          return ((p = p.get(x.key === null ? m : x.key) || null), l(h, p, x, S));
        case En:
          return ((p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, S));
        case Lt:
          var P = x._init;
          return g(p, h, m, P(x._payload), S);
      }
      if (kr(x) || fr(x)) return ((p = p.get(m) || null), c(h, p, x, S, null));
      Fi(h, x);
    }
    return null;
  }
  function v(p, h, m, x) {
    for (var S = null, P = null, T = h, C = (h = 0), A = null; T !== null && C < m.length; C++) {
      T.index > C ? ((A = T), (T = null)) : (A = T.sibling);
      var D = d(p, T, m[C], x);
      if (D === null) {
        T === null && (T = A);
        break;
      }
      (e && T && D.alternate === null && t(p, T),
        (h = o(D, h, C)),
        P === null ? (S = D) : (P.sibling = D),
        (P = D),
        (T = A));
    }
    if (C === m.length) return (n(p, T), U && tn(p, C), S);
    if (T === null) {
      for (; C < m.length; C++)
        ((T = f(p, m[C], x)),
          T !== null && ((h = o(T, h, C)), P === null ? (S = T) : (P.sibling = T), (P = T)));
      return (U && tn(p, C), S);
    }
    for (T = r(p, T); C < m.length; C++)
      ((A = g(T, p, C, m[C], x)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? C : A.key),
          (h = o(A, h, C)),
          P === null ? (S = A) : (P.sibling = A),
          (P = A)));
    return (
      e &&
        T.forEach(function (H) {
          return t(p, H);
        }),
      U && tn(p, C),
      S
    );
  }
  function w(p, h, m, x) {
    var S = fr(m);
    if (typeof S != 'function') throw Error(R(150));
    if (((m = S.call(m)), m == null)) throw Error(R(151));
    for (
      var P = (S = null), T = h, C = (h = 0), A = null, D = m.next();
      T !== null && !D.done;
      C++, D = m.next()
    ) {
      T.index > C ? ((A = T), (T = null)) : (A = T.sibling);
      var H = d(p, T, D.value, x);
      if (H === null) {
        T === null && (T = A);
        break;
      }
      (e && T && H.alternate === null && t(p, T),
        (h = o(H, h, C)),
        P === null ? (S = H) : (P.sibling = H),
        (P = H),
        (T = A));
    }
    if (D.done) return (n(p, T), U && tn(p, C), S);
    if (T === null) {
      for (; !D.done; C++, D = m.next())
        ((D = f(p, D.value, x)),
          D !== null && ((h = o(D, h, C)), P === null ? (S = D) : (P.sibling = D), (P = D)));
      return (U && tn(p, C), S);
    }
    for (T = r(p, T); !D.done; C++, D = m.next())
      ((D = g(T, p, C, D.value, x)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? C : D.key),
          (h = o(D, h, C)),
          P === null ? (S = D) : (P.sibling = D),
          (P = D)));
    return (
      e &&
        T.forEach(function (Tt) {
          return t(p, Tt);
        }),
      U && tn(p, C),
      S
    );
  }
  function k(p, h, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Cn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ri:
          e: {
            for (var S = m.key, P = h; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === Cn)) {
                  if (P.tag === 7) {
                    (n(p, P.sibling), (h = i(P, m.props.children)), (h.return = p), (p = h));
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == 'object' && S !== null && S.$$typeof === Lt && Fc(S) === P.type)
                ) {
                  (n(p, P.sibling),
                    (h = i(P, m.props)),
                    (h.ref = gr(p, P, m)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Cn
              ? ((h = dn(m.props.children, p.mode, x, m.key)), (h.return = p), (p = h))
              : ((x = oo(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = gr(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case En:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  (n(p, h.sibling), (h = i(h, m.children || [])), (h.return = p), (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = zs(m, p.mode, x)), (h.return = p), (p = h));
          }
          return s(p);
        case Lt:
          return ((P = m._init), k(p, h, P(m._payload), x));
      }
      if (kr(m)) return v(p, h, m, x);
      if (fr(m)) return w(p, h, m, x);
      Fi(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Fs(m, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return k;
}
var Gn = qh(!0),
  Jh = qh(!1),
  To = Yt(null),
  Ro = null,
  Nn = null,
  zl = null;
function Bl() {
  zl = Nn = Ro = null;
}
function $l(e) {
  var t = To.current;
  ($(To), (e._currentValue = t));
}
function Aa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  ((Ro = e),
    (zl = Nn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), (e.firstContext = null)));
}
function We(e) {
  var t = e._currentValue;
  if (zl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (Ro === null) throw Error(R(308));
      ((Nn = e), (Ro.dependencies = { lanes: 0, firstContext: e }));
    } else Nn = Nn.next = e;
  return t;
}
var an = null;
function Ul(e) {
  an === null ? (an = [e]) : an.push(e);
}
function ep(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ul(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Dt = !1;
function Wl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function tp(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ul(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function Ji(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ml(e, n));
  }
}
function zc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Mo(e, t, n, r) {
  var i = e.updateQueue;
  Dt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    ((s = 0), (c = u = l = null), (a = o));
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((d = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == 'function')) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = w.payload), (d = typeof v == 'function' ? v.call(g, f, d) : v), d == null))
                break e;
              f = G({}, f, d);
              break e;
            case 2:
              Dt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a), (a = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((vn |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function Bc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(R(191, i));
        i.call(r);
      }
    }
}
var mi = {},
  ot = Yt(mi),
  Zr = Yt(mi),
  qr = Yt(mi);
function ln(e) {
  if (e === mi) throw Error(R(174));
  return e;
}
function Hl(e, t) {
  switch ((z(qr, t), z(Zr, e), z(ot, mi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fa(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fa(t, e)));
  }
  ($(ot), z(ot, t));
}
function Xn() {
  ($(ot), $(Zr), $(qr));
}
function np(e) {
  ln(qr.current);
  var t = ln(ot.current),
    n = fa(t, e.type);
  t !== n && (z(Zr, e), z(ot, n));
}
function Kl(e) {
  Zr.current === e && ($(ot), $(Zr));
}
var K = Yt(0);
function Lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Ns = [];
function bl() {
  for (var e = 0; e < Ns.length; e++) Ns[e]._workInProgressVersionPrimary = null;
  Ns.length = 0;
}
var eo = Ct.ReactCurrentDispatcher,
  _s = Ct.ReactCurrentBatchConfig,
  yn = 0,
  Q = null,
  ie = null,
  ae = null,
  Do = !1,
  Ar = !1,
  Jr = 0,
  Zv = 0;
function he() {
  throw Error(R(321));
}
function Ql(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Yl(e, t, n, r, i, o) {
  if (
    ((yn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (eo.current = e === null || e.memoizedState === null ? t0 : n0),
    (e = n(r, i)),
    Ar)
  ) {
    o = 0;
    do {
      if (((Ar = !1), (Jr = 0), 25 <= o)) throw Error(R(301));
      ((o += 1), (ae = ie = null), (t.updateQueue = null), (eo.current = r0), (e = n(r, i)));
    } while (Ar);
  }
  if (
    ((eo.current = Ao),
    (t = ie !== null && ie.next !== null),
    (yn = 0),
    (ae = ie = Q = null),
    (Do = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Gl() {
  var e = Jr !== 0;
  return ((Jr = 0), e);
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (ae === null ? (Q.memoizedState = ae = e) : (ae = ae.next = e), ae);
}
function He() {
  if (ie === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ae === null ? Q.memoizedState : ae.next;
  if (t !== null) ((ae = t), (ie = e));
  else {
    if (e === null) throw Error(R(310));
    ((ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ae === null ? (Q.memoizedState = ae = e) : (ae = ae.next = e));
  }
  return ae;
}
function ei(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Vs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((yn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (Q.lanes |= c), (vn |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      qe(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (Q.lanes |= o), (vn |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function js(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (qe(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function rp() {}
function ip(e, t) {
  var n = Q,
    r = He(),
    i = t(),
    o = !qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Xl(ap.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ti(9, sp.bind(null, n, r, i, t), void 0, null), le === null))
      throw Error(R(349));
    yn & 30 || op(n, t, i);
  }
  return i;
}
function op(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function sp(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), lp(t) && up(e));
}
function ap(e, t, n) {
  return n(function () {
    lp(t) && up(e);
  });
}
function lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function up(e) {
  var t = wt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function $c(e) {
  var t = tt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = e0.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cp() {
  return He().memoizedState;
}
function to(e, t, n, r) {
  var i = tt();
  ((Q.flags |= e), (i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Zo(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((o = s.destroy), r !== null && Ql(r, s.deps))) {
      i.memoizedState = ti(t, n, o, r);
      return;
    }
  }
  ((Q.flags |= e), (i.memoizedState = ti(1 | t, n, o, r)));
}
function Uc(e, t) {
  return to(8390656, 8, e, t);
}
function Xl(e, t) {
  return Zo(2048, 8, e, t);
}
function fp(e, t) {
  return Zo(4, 2, e, t);
}
function dp(e, t) {
  return Zo(4, 4, e, t);
}
function hp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pp(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Zo(4, 4, hp.bind(null, t, e), n));
}
function Zl() {}
function mp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function gp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yp(e, t, n) {
  return yn & 21
    ? (qe(n, t) || ((n = kh()), (Q.lanes |= n), (vn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function qv(e, t) {
  var n = F;
  ((F = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = _s.transition;
  _s.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((F = n), (_s.transition = r));
  }
}
function vp() {
  return He().memoizedState;
}
function Jv(e, t, n) {
  var r = $t(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), wp(e)))
    xp(t, n);
  else if (((n = ep(e, t, n, r)), n !== null)) {
    var i = Se();
    (Ze(n, e, r, i), Sp(n, t, r));
  }
}
function e0(e, t, n) {
  var r = $t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wp(e)) xp(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), qe(a, s))) {
          var l = t.interleaved;
          (l === null ? ((i.next = i), Ul(t)) : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ep(e, t, i, r)), n !== null && ((i = Se()), Ze(n, e, r, i), Sp(n, t, r)));
  }
}
function wp(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function xp(e, t) {
  Ar = Do = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ml(e, n));
  }
}
var Ao = {
    readContext: We,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  t0 = {
    readContext: We,
    useCallback: function (e, t) {
      return ((tt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: We,
    useEffect: Uc,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), to(4194308, 4, hp.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return to(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return to(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jv.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: $c,
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = $c(!1),
        t = e[0];
      return ((e = qv.bind(null, e[1])), (tt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = tt();
      if (U) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(R(349));
        yn & 30 || op(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Uc(ap.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ti(9, sp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = le.identifierPrefix;
      if (U) {
        var n = pt,
          r = ht;
        ((n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Jr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = Zv++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  n0 = {
    readContext: We,
    useCallback: mp,
    useContext: We,
    useEffect: Xl,
    useImperativeHandle: pp,
    useInsertionEffect: fp,
    useLayoutEffect: dp,
    useMemo: gp,
    useReducer: Vs,
    useRef: cp,
    useState: function () {
      return Vs(ei);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = He();
      return yp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(ei)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: ip,
    useId: vp,
    unstable_isNewReconciler: !1,
  },
  r0 = {
    readContext: We,
    useCallback: mp,
    useContext: We,
    useEffect: Xl,
    useImperativeHandle: pp,
    useInsertionEffect: fp,
    useLayoutEffect: dp,
    useMemo: gp,
    useReducer: js,
    useRef: cp,
    useState: function () {
      return js(ei);
    },
    useDebugValue: Zl,
    useDeferredValue: function (e) {
      var t = He();
      return ie === null ? (t.memoizedState = e) : yp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = js(ei)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: ip,
    useId: vp,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    ((t = G({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Na(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = $t(e),
      o = mt(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = zt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Ji(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = $t(e),
      o = mt(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = zt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Ji(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = $t(e),
      i = mt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = zt(e, i, r)),
      t !== null && (Ze(t, e, r, n), Ji(t, e, r)));
  },
};
function Wc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Qr(n, r) || !Qr(i, o)
        : !0
  );
}
function kp(e, t, n) {
  var r = !1,
    i = Ht,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = We(o))
      : ((i = Me(t) ? mn : ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Qn(e, i) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Hc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qo.enqueueReplaceState(t, t.state, null));
}
function _a(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Wl(e));
  var o = t.contextType;
  (typeof o == 'object' && o !== null
    ? (i.context = We(o))
    : ((o = Me(t) ? mn : ye.current), (i.context = Qn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Na(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && qo.enqueueReplaceState(i, i.state, null),
      Mo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308));
}
function Zn(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += Ay(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Os(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var i0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Ep(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (_o || ((_o = !0), (Ha = r)), Va(e, t));
    }),
    n
  );
}
function Cp(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Va(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        (Va(e, t), typeof r != 'function' && (Bt === null ? (Bt = new Set([this])) : Bt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
      }),
    n
  );
}
function Kc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new i0();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = v0.bind(null, e, t, n)), t.then(e, e));
}
function bc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = mt(-1, 1)), (t.tag = 2), zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var o0 = Ct.ReactCurrentOwner,
  Pe = !1;
function we(e, t, n, r) {
  t.child = e === null ? Jh(t, null, n, r) : Gn(t, e.child, n, r);
}
function Yc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Hn(t, i),
    (r = Yl(e, t, n, r, o, i)),
    (n = Gl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), xt(e, t, i))
      : (U && n && Ol(t), (t.flags |= 1), we(e, t, r, i), t.child)
  );
}
function Gc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !ou(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pp(e, t, o, r, i))
      : ((e = oo(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Qr), n(s, r) && e.ref === t.ref))
      return xt(e, t, i);
  }
  return ((t.flags |= 1), (e = Ut(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function Pp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Pe = !0);
      else return ((t.lanes = e.lanes), xt(e, t, i));
  }
  return ja(e, t, n, r, i);
}
function Tp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Vn, De),
        (De |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          z(Vn, De),
          (De |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Vn, De),
        (De |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Vn, De),
      (De |= r));
  return (we(e, t, i, n), t.child);
}
function Rp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ja(e, t, n, r, i) {
  var o = Me(n) ? mn : ye.current;
  return (
    (o = Qn(t, o)),
    Hn(t, i),
    (n = Yl(e, t, n, r, o, i)),
    (r = Gl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), xt(e, t, i))
      : (U && r && Ol(t), (t.flags |= 1), we(e, t, n, i), t.child)
  );
}
function Xc(e, t, n, r, i) {
  if (Me(n)) {
    var o = !0;
    Eo(t);
  } else o = !1;
  if ((Hn(t, i), t.stateNode === null)) (no(e, t), kp(t, n, r), _a(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = We(u))
      : ((u = Me(n) ? mn : ye.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Hc(t, s, r, u)),
      (Dt = !1));
    var d = t.memoizedState;
    ((s.state = d),
      Mo(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Re.current || Dt
        ? (typeof c == 'function' && (Na(t, n, c, r), (l = t.memoizedState)),
          (a = Dt || Wc(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
  } else {
    ((s = t.stateNode),
      tp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Qe(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = We(l))
        : ((l = Me(n) ? mn : ye.current), (l = Qn(t, l))));
    var g = n.getDerivedStateFromProps;
    ((c = typeof g == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && Hc(t, s, r, l)),
      (Dt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Mo(t, r, s, i));
    var v = t.memoizedState;
    a !== f || d !== v || Re.current || Dt
      ? (typeof g == 'function' && (Na(t, n, g, r), (v = t.memoizedState)),
        (u = Dt || Wc(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oa(e, t, n, r, o, i);
}
function Oa(e, t, n, r, i, o) {
  Rp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && jc(t, n, !1), xt(e, t, o));
  ((r = t.stateNode), (o0.current = t));
  var a = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, o)), (t.child = Gn(t, null, a, o)))
      : we(e, t, a, o),
    (t.memoizedState = r.state),
    i && jc(t, n, !0),
    t.child
  );
}
function Mp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Vc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vc(e, t.context, !1),
    Hl(e, t.containerInfo));
}
function Zc(e, t, n, r, i) {
  return (Yn(), Fl(i), (t.flags |= 256), we(e, t, n, r), t.child);
}
var Ia = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    z(K, i & 1),
    e === null)
  )
    return (
      Da(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ts(s, r, 0, null)),
              (e = dn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fa(n)),
              (t.memoizedState = Ia),
              e)
            : ql(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return s0(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Ut(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Ut(a, o)) : ((o = dn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Fa(n)
          : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ia),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ut(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ql(e, t) {
  return (
    (t = ts({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zi(e, t, n, r) {
  return (
    r !== null && Fl(r),
    Gn(t, e.child, null, n),
    (e = ql(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function s0(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Os(Error(R(422)))), zi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ts({ mode: 'visible', children: r.children }, i, 0, null)),
          (o = dn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Gn(t, e.child, null, s),
          (t.child.memoizedState = Fa(s)),
          (t.memoizedState = Ia),
          o);
  if (!(t.mode & 1)) return zi(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return ((r = a), (o = Error(R(419))), (r = Os(o, r, void 0)), zi(e, t, s, r));
  }
  if (((a = (s & e.childLanes) !== 0), Pe || a)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), wt(e, i), Ze(r, e, i, -1)));
    }
    return (iu(), (r = Os(Error(R(421)))), zi(e, t, s, r));
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = w0.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (Ae = Ft(i.nextSibling)),
      (Ne = t),
      (U = !0),
      (Ge = null),
      e !== null &&
        ((Fe[ze++] = ht),
        (Fe[ze++] = pt),
        (Fe[ze++] = gn),
        (ht = e.id),
        (pt = e.overflow),
        (gn = t)),
      (t = ql(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Aa(e.return, t, n));
}
function Is(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Dp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((we(e, t, r.children, n), (r = K.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qc(e, n, t);
        else if (e.tag === 19) qc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((z(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate), e !== null && Lo(e) === null && (i = n), (n = n.sibling));
        ((n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Is(t, !1, i, n, o));
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Lo(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Is(t, !0, n, null, o);
        break;
      case 'together':
        Is(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function no(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (vn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function a0(e, t, n) {
  switch (t.tag) {
    case 3:
      (Mp(t), Yn());
      break;
    case 5:
      np(t);
      break;
    case 1:
      Me(t.type) && Eo(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (z(To, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Lp(e, t, n)
            : (z(K, K.current & 1), (e = xt(e, t, n)), e !== null ? e.sibling : null);
      z(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Tp(e, t, n));
  }
  return xt(e, t, n);
}
var Ap, za, Np, _p;
Ap = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
za = function () {};
Np = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), ln(ot.current));
    var o = null;
    switch (n) {
      case 'input':
        ((i = aa(e, i)), (r = aa(e, r)), (o = []));
        break;
      case 'select':
        ((i = G({}, i, { value: void 0 })), (r = G({}, r, { value: void 0 })), (o = []));
        break;
      case 'textarea':
        ((i = ca(e, i)), (r = ca(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = So);
    }
    da(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Br.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') || (o = o || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Br.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && B('scroll', e), o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_p = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function l0(e, t, n) {
  var r = t.pendingProps;
  switch ((Il(t), t.tag)) {
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
      return (pe(t), null);
    case 1:
      return (Me(t.type) && ko(), pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        $(Re),
        $(ye),
        bl(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (Qa(Ge), (Ge = null)))),
        za(e, t),
        pe(t),
        null
      );
    case 5:
      Kl(t);
      var i = ln(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Np(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return (pe(t), null);
        }
        if (((e = ln(ot.current)), Ii(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[Xr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (B('cancel', r), B('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Cr.length; i++) B(Cr[i], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (B('error', r), B('load', r));
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              (ac(r, o), B('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!o.multiple }), B('invalid', r));
              break;
            case 'textarea':
              (uc(r, o), B('invalid', r));
          }
          (da(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 && Oi(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Br.hasOwnProperty(s) && a != null && s === 'onScroll' && B('scroll', r);
            }
          switch (n) {
            case 'input':
              (Mi(r), lc(r, o, !0));
              break;
            case 'textarea':
              (Mi(r), cc(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = So);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ah(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Xr] = r),
            Ap(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = ha(n, r)), n)) {
              case 'dialog':
                (B('cancel', e), B('close', e), (i = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (B('load', e), (i = r));
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Cr.length; i++) B(Cr[i], e);
                i = r;
                break;
              case 'source':
                (B('error', e), (i = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (B('error', e), B('load', e), (i = r));
                break;
              case 'details':
                (B('toggle', e), (i = r));
                break;
              case 'input':
                (ac(e, r), (i = aa(e, r)), B('invalid', e));
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  B('invalid', e));
                break;
              case 'textarea':
                (uc(e, r), (i = ca(e, r)), B('invalid', e));
                break;
              default:
                i = r;
            }
            (da(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === 'style'
                  ? ch(e, l)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && lh(e, l))
                    : o === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && $r(e, l)
                        : typeof l == 'number' && $r(e, '' + l)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Br.hasOwnProperty(o)
                          ? l != null && o === 'onScroll' && B('scroll', e)
                          : l != null && kl(e, o, l, s));
              }
            switch (n) {
              case 'input':
                (Mi(e), lc(e, r, !1));
                break;
              case 'textarea':
                (Mi(e), cc(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Wt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Bn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = So);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (pe(t), null);
    case 6:
      if (e && t.stateNode != null) _p(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
        if (((n = ln(qr.current)), ln(ot.current), Ii(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r));
      }
      return (pe(t), null);
    case 13:
      if (
        ($(K),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ae !== null && t.mode & 1 && !(t.flags & 128))
          (Zh(), Yn(), (t.flags |= 98560), (o = !1));
        else if (((o = Ii(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(R(317));
            o[nt] = t;
          } else (Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (pe(t), (o = !1));
        } else (Ge !== null && (Qa(Ge), (Ge = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || K.current & 1 ? oe === 0 && (oe = 3) : iu())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (Xn(), za(e, t), e === null && Yr(t.stateNode.containerInfo), pe(t), null);
    case 10:
      return ($l(t.type._context), pe(t), null);
    case 17:
      return (Me(t.type) && ko(), pe(t), null);
    case 19:
      if (($(K), (o = t.memoizedState), o === null)) return (pe(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) yr(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Lo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    yr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return (z(K, (K.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > qn &&
            ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Lo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !U)
            )
              return (pe(t), null);
          } else
            2 * ee() - o.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          z(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function u0(e, t) {
  switch ((Il(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && ko(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        $(Re),
        $(ye),
        bl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Kl(t), null);
    case 13:
      if (($(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        Yn();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return ($(K), null);
    case 4:
      return (Xn(), null);
    case 10:
      return ($l(t.type._context), null);
    case 22:
    case 23:
      return (ru(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  me = !1,
  c0 = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ba(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Jc = !1;
function f0(e, t) {
  if (((Ea = vo), (e = Fh()), jl(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              ((d = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ca = { focusedElem: e, selectionRange: n }, vo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Qe(t.type, w), k);
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((v = Jc), (Jc = !1), v);
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && Ba(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Jo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $a(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Vp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Vp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[nt], delete t[Xr], delete t[Ra], delete t[Qv], delete t[Yv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function jp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ef(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = So)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) (Ua(e, t, n), (e = e.sibling));
}
function Wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wa(e, t, n), e = e.sibling; e !== null; ) (Wa(e, t, n), (e = e.sibling));
}
var ue = null,
  Ye = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) (Op(e, t, n), (n = n.sibling));
}
function Op(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == 'function')
    try {
      it.onCommitFiberUnmount(Ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || _n(n, t);
    case 6:
      var r = ue,
        i = Ye;
      ((ue = null),
        Rt(e, t, n),
        (ue = r),
        (Ye = i),
        ue !== null &&
          (Ye
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode)));
      break;
    case 18:
      ue !== null &&
        (Ye
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8 ? Ds(e.parentNode, n) : e.nodeType === 1 && Ds(e, n),
            Kr(e))
          : Ds(ue, n.stateNode));
      break;
    case 4:
      ((r = ue),
        (i = Ye),
        (ue = n.stateNode.containerInfo),
        (Ye = !0),
        Rt(e, t, n),
        (ue = r),
        (Ye = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag), s !== void 0 && (o & 2 || o & 4) && Ba(n, t, s), (i = i.next));
        } while (i !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (!me && (_n(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (a) {
          Z(n, t, a);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Rt(e, t, n), (me = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function tf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new c0()),
      t.forEach(function (r) {
        var i = x0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ue = a.stateNode), (Ye = !1));
              break e;
            case 3:
              ((ue = a.stateNode.containerInfo), (Ye = !0));
              break e;
            case 4:
              ((ue = a.stateNode.containerInfo), (Ye = !0));
              break e;
          }
          a = a.return;
        }
        if (ue === null) throw Error(R(160));
        (Op(o, s, i), (ue = null), (Ye = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ip(t, e), (t = t.sibling));
}
function Ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), et(e), r & 4)) {
        try {
          (Nr(3, e, e.return), Jo(3, e));
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Nr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ke(t, e), et(e), r & 512 && n !== null && _n(n, n.return));
      break;
    case 5:
      if ((Ke(t, e), et(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          $r(i, '');
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === 'input' && o.type === 'radio' && o.name != null && oh(i, o), ha(a, s));
            var u = ha(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === 'style'
                ? ch(i, f)
                : c === 'dangerouslySetInnerHTML'
                  ? lh(i, f)
                  : c === 'children'
                    ? $r(i, f)
                    : kl(i, c, f, u);
            }
            switch (a) {
              case 'input':
                la(i, o);
                break;
              case 'textarea':
                sh(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Bn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(i, !!o.multiple, o.defaultValue, !0)
                      : Bn(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Xr] = o;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Kr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      (Ke(t, e), et(e));
      break;
    case 13:
      (Ke(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (tu = ee())),
        r & 4 && tf(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ke(t, e), (me = u)) : Ke(t, e),
        et(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, d, d.return);
                  break;
                case 1:
                  _n(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  _n(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    rf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : rf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = uh('display', s))));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ke(t, e), et(e), r & 4 && tf(e));
      break;
    case 21:
      break;
    default:
      (Ke(t, e), et(e));
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && ($r(i, ''), (r.flags &= -33));
          var o = ef(e);
          Wa(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ef(e);
          Ua(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function d0(e, t, n) {
  ((L = e), Fp(e));
}
function Fp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Bi;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || me;
        a = Bi;
        var u = me;
        if (((Bi = s), (me = l) && !u))
          for (L = i; L !== null; )
            ((s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? of(i)
                : l !== null
                  ? ((l.return = s), (L = l))
                  : of(i));
        for (; o !== null; ) ((L = o), Fp(o), (o = o.sibling));
        ((L = i), (Bi = a), (me = u));
      }
      nf(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : nf(e);
  }
}
function nf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Bc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bc(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                    var f = c.dehydrated;
                    f !== null && Kr(f);
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
              throw Error(R(163));
          }
        me || (t.flags & 512 && $a(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function rf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function of(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var o = t.return;
          try {
            $a(t);
          } catch (l) {
            Z(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $a(t);
          } catch (l) {
            Z(t, s, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (L = a));
      break;
    }
    L = t.return;
  }
}
var h0 = Math.ceil,
  No = Ct.ReactCurrentDispatcher,
  Jl = Ct.ReactCurrentOwner,
  $e = Ct.ReactCurrentBatchConfig,
  O = 0,
  le = null,
  ne = null,
  fe = 0,
  De = 0,
  Vn = Yt(0),
  oe = 0,
  ni = null,
  vn = 0,
  es = 0,
  eu = 0,
  _r = null,
  Ce = null,
  tu = 0,
  qn = 1 / 0,
  ft = null,
  _o = !1,
  Ha = null,
  Bt = null,
  $i = !1,
  Vt = null,
  Vo = 0,
  Vr = 0,
  Ka = null,
  ro = -1,
  io = 0;
function Se() {
  return O & 6 ? ee() : ro !== -1 ? ro : (ro = ee());
}
function $t(e) {
  return e.mode & 1
    ? O & 2 && fe !== 0
      ? fe & -fe
      : Xv.transition !== null
        ? (io === 0 && (io = kh()), io)
        : ((e = F), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lh(e.type))), e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (Ka = null), Error(R(185)));
  (di(e, n, r),
    (!(O & 2) || e !== le) &&
      (e === le && (!(O & 2) && (es |= n), oe === 4 && Nt(e, fe)),
      Le(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((qn = ee() + 500), Xo && Gt())));
}
function Le(e, t) {
  var n = e.callbackNode;
  Xy(e, t);
  var r = yo(e, e === le ? fe : 0);
  if (r === 0) (n !== null && hc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hc(n), t === 1))
      (e.tag === 0 ? Gv(sf.bind(null, e)) : Yh(sf.bind(null, e)),
        Kv(function () {
          !(O & 6) && Gt();
        }),
        (n = null));
    else {
      switch (Eh(r)) {
        case 1:
          n = Rl;
          break;
        case 4:
          n = xh;
          break;
        case 16:
          n = go;
          break;
        case 536870912:
          n = Sh;
          break;
        default:
          n = go;
      }
      n = bp(n, zp.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function zp(e, t) {
  if (((ro = -1), (io = 0), O & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = yo(e, e === le ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = $p();
    (le !== e || fe !== t) && ((ft = null), (qn = ee() + 500), fn(e, t));
    do
      try {
        g0();
        break;
      } catch (a) {
        Bp(e, a);
      }
    while (!0);
    (Bl(), (No.current = o), (O = i), ne !== null ? (t = 0) : ((le = null), (fe = 0), (t = oe)));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = va(e)), i !== 0 && ((r = i), (t = ba(e, i)))), t === 1))
      throw ((n = ni), fn(e, 0), Nt(e, r), Le(e, ee()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !p0(i) &&
          ((t = jo(e, r)), t === 2 && ((o = va(e)), o !== 0 && ((r = o), (t = ba(e, o)))), t === 1))
      )
        throw ((n = ni), fn(e, 0), Nt(e, r), Le(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          nn(e, Ce, ft);
          break;
        case 3:
          if ((Nt(e, r), (r & 130023424) === r && ((t = tu + 500 - ee()), 10 < t))) {
            if (yo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Se(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Ta(nn.bind(null, e, Ce, ft), t);
            break;
          }
          nn(e, Ce, ft);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * h0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ta(nn.bind(null, e, Ce, ft), r);
            break;
          }
          nn(e, Ce, ft);
          break;
        case 5:
          nn(e, Ce, ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (Le(e, ee()), e.callbackNode === n ? zp.bind(null, e) : null);
}
function ba(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = jo(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Qa(t)),
    e
  );
}
function Qa(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function p0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Nt(e, t) {
  for (
    t &= ~eu, t &= ~es, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function sf(e) {
  if (O & 6) throw Error(R(327));
  Kn();
  var t = yo(e, 0);
  if (!(t & 1)) return (Le(e, ee()), null);
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = va(e);
    r !== 0 && ((t = r), (n = ba(e, r)));
  }
  if (n === 1) throw ((n = ni), fn(e, 0), Nt(e, t), Le(e, ee()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Ce, ft),
    Le(e, ee()),
    null
  );
}
function nu(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    ((O = n), O === 0 && ((qn = ee() + 500), Xo && Gt()));
  }
}
function wn(e) {
  Vt !== null && Vt.tag === 0 && !(O & 6) && Kn();
  var t = O;
  O |= 1;
  var n = $e.transition,
    r = F;
  try {
    if ((($e.transition = null), (F = 1), e)) return e();
  } finally {
    ((F = r), ($e.transition = n), (O = t), !(O & 6) && Gt());
  }
}
function ru() {
  ((De = Vn.current), $(Vn));
}
function fn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hv(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Il(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ko());
          break;
        case 3:
          (Xn(), $(Re), $(ye), bl());
          break;
        case 5:
          Kl(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          $(K);
          break;
        case 19:
          $(K);
          break;
        case 10:
          $l(r.type._context);
          break;
        case 22:
        case 23:
          ru();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ne = e = Ut(e.current, null)),
    (fe = De = t),
    (oe = 0),
    (ni = null),
    (eu = es = vn = 0),
    (Ce = _r = null),
    an !== null)
  ) {
    for (t = 0; t < an.length; t++)
      if (((n = an[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    an = null;
  }
  return e;
}
function Bp(e, t) {
  do {
    var n = ne;
    try {
      if ((Bl(), (eo.current = Ao), Do)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Do = !1;
      }
      if (
        ((yn = 0),
        (ae = ie = Q = null),
        (Ar = !1),
        (Jr = 0),
        (Jl.current = null),
        n === null || n.return === null)
      ) {
        ((oe = 1), (ni = t), (ne = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = fe),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = bc(s);
          if (g !== null) {
            ((g.flags &= -257), Qc(g, s, a, o, t), g.mode & 1 && Kc(o, u, t), (t = g), (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              (w.add(l), (t.updateQueue = w));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Kc(o, u, t), iu());
              break e;
            }
            l = Error(R(426));
          }
        } else if (U && a.mode & 1) {
          var k = bc(s);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256), Qc(k, s, a, o, t), Fl(Zn(l, a)));
            break e;
          }
        }
        ((o = l = Zn(l, a)), oe !== 4 && (oe = 2), _r === null ? (_r = [o]) : _r.push(o), (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = Ep(o, l, t);
              zc(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Bt === null || !Bt.has(m))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var x = Cp(o, a, t);
                zc(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Wp(n);
    } catch (S) {
      ((t = S), ne === n && n !== null && (ne = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function $p() {
  var e = No.current;
  return ((No.current = Ao), e === null ? Ao : e);
}
function iu() {
  ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    le === null || (!(vn & 268435455) && !(es & 268435455)) || Nt(le, fe));
}
function jo(e, t) {
  var n = O;
  O |= 2;
  var r = $p();
  (le !== e || fe !== t) && ((ft = null), fn(e, t));
  do
    try {
      m0();
      break;
    } catch (i) {
      Bp(e, i);
    }
  while (!0);
  if ((Bl(), (O = n), (No.current = r), ne !== null)) throw Error(R(261));
  return ((le = null), (fe = 0), oe);
}
function m0() {
  for (; ne !== null; ) Up(ne);
}
function g0() {
  for (; ne !== null && !$y(); ) Up(ne);
}
function Up(e) {
  var t = Kp(e.alternate, e, De);
  ((e.memoizedProps = e.pendingProps), t === null ? Wp(e) : (ne = t), (Jl.current = null));
}
function Wp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = u0(n, t)), n !== null)) {
        ((n.flags &= 32767), (ne = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((oe = 6), (ne = null));
        return;
      }
    } else if (((n = l0(n, t, De)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function nn(e, t, n) {
  var r = F,
    i = $e.transition;
  try {
    (($e.transition = null), (F = 1), y0(e, t, n, r));
  } finally {
    (($e.transition = i), (F = r));
  }
  return null;
}
function y0(e, t, n, r) {
  do Kn();
  while (Vt !== null);
  if (O & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Zy(e, o),
    e === le && ((ne = le = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $i ||
      (($i = !0),
      bp(go, function () {
        return (Kn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = $e.transition), ($e.transition = null));
    var s = F;
    F = 1;
    var a = O;
    ((O |= 4),
      (Jl.current = null),
      f0(e, n),
      Ip(n, e),
      Iv(Ca),
      (vo = !!Ea),
      (Ca = Ea = null),
      (e.current = n),
      d0(n),
      Uy(),
      (O = a),
      (F = s),
      ($e.transition = o));
  } else e.current = n;
  if (
    ($i && (($i = !1), (Vt = e), (Vo = i)),
    (o = e.pendingLanes),
    o === 0 && (Bt = null),
    Ky(n.stateNode),
    Le(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (_o) throw ((_o = !1), (e = Ha), (Ha = null), e);
  return (
    Vo & 1 && e.tag !== 0 && Kn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ka ? Vr++ : ((Vr = 0), (Ka = e))) : (Vr = 0),
    Gt(),
    null
  );
}
function Kn() {
  if (Vt !== null) {
    var e = Eh(Vo),
      t = $e.transition,
      n = F;
    try {
      if ((($e.transition = null), (F = 16 > e ? 16 : e), Vt === null)) var r = !1;
      else {
        if (((e = Vt), (Vt = null), (Vo = 0), O & 6)) throw Error(R(331));
        var i = O;
        for (O |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (L = f));
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        g = c.return;
                      if ((Vp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = g), (L = d));
                        break;
                      }
                      L = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    ((w.sibling = null), (w = k));
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (L = s));
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (L = p));
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) ((m.return = s), (L = m));
          else
            e: for (s = h; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, a);
                  }
                } catch (S) {
                  Z(a, a.return, S);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (L = x));
                break e;
              }
              L = a.return;
            }
        }
        if (((O = i), Gt(), it && typeof it.onPostCommitFiberRoot == 'function'))
          try {
            it.onPostCommitFiberRoot(Ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((F = n), ($e.transition = t));
    }
  }
  return !1;
}
function af(e, t, n) {
  ((t = Zn(n, t)),
    (t = Ep(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = Se()),
    e !== null && (di(e, 1, t), Le(e, t)));
}
function Z(e, t, n) {
  if (e.tag === 3) af(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        af(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Bt === null || !Bt.has(r)))
        ) {
          ((e = Zn(n, e)),
            (e = Cp(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = Se()),
            t !== null && (di(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function v0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (fe & n) === n &&
      (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > ee() - tu) ? fn(e, 0) : (eu |= n)),
    Le(e, t));
}
function Hp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Ai), (Ai <<= 1), !(Ai & 130023424) && (Ai = 4194304)) : (t = 1));
  var n = Se();
  ((e = wt(e, t)), e !== null && (di(e, t, n), Le(e, n)));
}
function w0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Hp(e, n));
}
function x0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  (r !== null && r.delete(t), Hp(e, n));
}
var Kp;
Kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Pe = !1), a0(e, t, n));
      Pe = !!(e.flags & 131072);
    }
  else ((Pe = !1), U && t.flags & 1048576 && Gh(t, Po, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (no(e, t), (e = t.pendingProps));
      var i = Qn(t, ye.current);
      (Hn(t, n), (i = Yl(null, t, r, e, i, n)));
      var o = Gl();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), Eo(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Wl(t),
            (i.updater = qo),
            (t.stateNode = i),
            (i._reactInternals = t),
            _a(t, r, e, n),
            (t = Oa(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && Ol(t), we(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (no(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = k0(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = ja(null, t, r, e, n);
            break e;
          case 1:
            t = Xc(null, t, r, e, n);
            break e;
          case 11:
            t = Yc(null, t, r, e, n);
            break e;
          case 14:
            t = Gc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        ja(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Xc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Mp(t), e === null)) throw Error(R(387));
        ((r = t.pendingProps), (o = t.memoizedState), (i = o.element), tp(e, t), Mo(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = Zn(Error(R(423)), t)), (t = Zc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Zn(Error(R(424)), t)), (t = Zc(e, t, r, n, i)));
            break e;
          } else
            for (
              Ae = Ft(t.stateNode.containerInfo.firstChild),
                Ne = t,
                U = !0,
                Ge = null,
                n = Jh(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Yn(), r === i)) {
            t = xt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        np(t),
        e === null && Da(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Pa(r, i) ? (s = null) : o !== null && Pa(r, o) && (t.flags |= 32),
        Rp(e, t),
        we(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Da(t), null);
    case 13:
      return Lp(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Yc(e, t, r, i, n)
      );
    case 7:
      return (we(e, t, t.pendingProps, n), t.child);
    case 8:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(To, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (qe(o.value, s)) {
            if (o.children === i.children && !Re.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = mt(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Aa(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(R(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Aa(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (we(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (i = Qe(r, t.pendingProps)), (i = Qe(r.type, i)), Gc(e, t, r, i, n));
    case 15:
      return Pp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        no(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Eo(t)) : (e = !1),
        Hn(t, n),
        kp(t, r, i),
        _a(t, r, i, n),
        Oa(null, t, r, !0, e, n)
      );
    case 19:
      return Dp(e, t, n);
    case 22:
      return Tp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function bp(e, t) {
  return wh(e, t);
}
function S0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Be(e, t, n, r) {
  return new S0(e, t, n, r);
}
function ou(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function k0(e) {
  if (typeof e == 'function') return ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cl)) return 11;
    if (e === Pl) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function oo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) ou(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Cn:
        return dn(n.children, i, o, t);
      case El:
        ((s = 8), (i |= 8));
        break;
      case ra:
        return ((e = Be(12, n, t, i | 2)), (e.elementType = ra), (e.lanes = o), e);
      case ia:
        return ((e = Be(13, n, t, i)), (e.elementType = ia), (e.lanes = o), e);
      case oa:
        return ((e = Be(19, n, t, i)), (e.elementType = oa), (e.lanes = o), e);
      case nh:
        return ts(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case eh:
              s = 10;
              break e;
            case th:
              s = 9;
              break e;
            case Cl:
              s = 11;
              break e;
            case Pl:
              s = 14;
              break e;
            case Lt:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ''));
    }
  return ((t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
}
function dn(e, t, n, r) {
  return ((e = Be(7, e, r, t)), (e.lanes = n), e);
}
function ts(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = nh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fs(e, t, n) {
  return ((e = Be(6, e, null, t)), (e.lanes = n), e);
}
function zs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function E0(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ws(0)),
    (this.expirationTimes = ws(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ws(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function su(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new E0(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wl(o),
    e
  );
}
function C0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: En,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qp(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Qh(e, n, t);
  }
  return t;
}
function Yp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = su(n, r, !0, e, i, o, s, a, l)),
    (e.context = Qp(null)),
    (n = e.current),
    (r = Se()),
    (i = $t(n)),
    (o = mt(r, i)),
    (o.callback = t ?? null),
    zt(n, o, i),
    (e.current.lanes = i),
    di(e, i, r),
    Le(e, r),
    e
  );
}
function ns(e, t, n, r) {
  var i = t.current,
    o = Se(),
    s = $t(i);
  return (
    (n = Qp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zt(i, t, s)),
    e !== null && (Ze(e, i, s, o), Ji(e, i, s)),
    s
  );
}
function Oo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function au(e, t) {
  (lf(e, t), (e = e.alternate) && lf(e, t));
}
function P0() {
  return null;
}
var Gp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
rs.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ns(e, t, null, null);
};
rs.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (wn(function () {
      ns(null, e, null, null);
    }),
      (t[vt] = null));
  }
};
function rs(e) {
  this._internalRoot = e;
}
rs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
    (At.splice(n, 0, e), n === 0 && Mh(e));
  }
};
function uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function is(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function uf() {}
function T0(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = Oo(s);
        o.call(u);
      };
    }
    var s = Yp(t, r, e, 0, null, !1, !1, '', uf);
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Oo(l);
      a.call(u);
    };
  }
  var l = su(e, 0, !1, null, null, !1, !1, '', uf);
  return (
    (e._reactRootContainer = l),
    (e[vt] = l.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      ns(t, l, n, r);
    }),
    l
  );
}
function os(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = Oo(s);
        a.call(l);
      };
    }
    ns(t, s, e, i);
  } else s = T0(n, t, e, i, r);
  return Oo(s);
}
Ch = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (Ml(t, n | 1), Le(t, ee()), !(O & 6) && ((qn = ee() + 500), Gt()));
      }
      break;
    case 13:
      (wn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var i = Se();
          Ze(r, e, 1, i);
        }
      }),
        au(e, 1));
  }
};
Ll = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Ze(t, e, 134217728, n);
    }
    au(e, 134217728);
  }
};
Ph = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = wt(e, t);
    if (n !== null) {
      var r = Se();
      Ze(n, e, t, r);
    }
    au(e, t);
  }
};
Th = function () {
  return F;
};
Rh = function (e, t) {
  var n = F;
  try {
    return ((F = e), t());
  } finally {
    F = n;
  }
};
ma = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((la(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Go(r);
            if (!i) throw Error(R(90));
            (ih(r), la(r, i));
          }
        }
      }
      break;
    case 'textarea':
      sh(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && Bn(e, !!n.multiple, t, !1));
  }
};
hh = nu;
ph = wn;
var R0 = { usingClientEntryPoint: !1, Events: [pi, Mn, Go, fh, dh, nu] },
  vr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  M0 = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = yh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || P0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ui.isDisabled && Ui.supportsFiber)
    try {
      ((Ko = Ui.inject(M0)), (it = Ui));
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uu(t)) throw Error(R(200));
  return C0(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!uu(e)) throw Error(R(299));
  var n = !1,
    r = '',
    i = Gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = su(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)));
  return ((e = yh(t)), (e = e === null ? null : e.stateNode), e);
};
Ve.flushSync = function (e) {
  return wn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!is(t)) throw Error(R(200));
  return os(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!uu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Gp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Yp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[vt] = t.current),
    Yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new rs(t);
};
Ve.render = function (e, t, n) {
  if (!is(t)) throw Error(R(200));
  return os(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!is(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (wn(function () {
        os(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[vt] = null));
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = nu;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!is(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return os(e, t, n, !1, r);
};
Ve.version = '18.3.1-next-f1338f8080-20240426';
function Xp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xp);
    } catch (e) {
      console.error(e);
    }
}
(Xp(), (Xd.exports = Ve));
var L0 = Xd.exports,
  Zp,
  cf = L0;
((Zp = cf.createRoot), cf.hydrateRoot);
var cu = {};
Object.defineProperty(cu, '__esModule', { value: !0 });
cu.parse = O0;
cu.serialize = I0;
const D0 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  A0 = /^[\u0021-\u003A\u003C-\u007E]*$/,
  N0 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  _0 = /^[\u0020-\u003A\u003D-\u007E]*$/,
  V0 = Object.prototype.toString,
  j0 = (() => {
    const e = function () {};
    return ((e.prototype = Object.create(null)), e);
  })();
function O0(e, t) {
  const n = new j0(),
    r = e.length;
  if (r < 2) return n;
  const i = (t == null ? void 0 : t.decode) || F0;
  let o = 0;
  do {
    const s = e.indexOf('=', o);
    if (s === -1) break;
    const a = e.indexOf(';', o),
      l = a === -1 ? r : a;
    if (s > l) {
      o = e.lastIndexOf(';', s - 1) + 1;
      continue;
    }
    const u = ff(e, o, s),
      c = df(e, s, u),
      f = e.slice(u, c);
    if (n[f] === void 0) {
      let d = ff(e, s + 1, l),
        g = df(e, l, d);
      const v = i(e.slice(d, g));
      n[f] = v;
    }
    o = l + 1;
  } while (o < r);
  return n;
}
function ff(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function df(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function I0(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!D0.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const i = r(t);
  if (!A0.test(i)) throw new TypeError(`argument val is invalid: ${t}`);
  let o = e + '=' + i;
  if (!n) return o;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    o += '; Max-Age=' + n.maxAge;
  }
  if (n.domain) {
    if (!N0.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
    o += '; Domain=' + n.domain;
  }
  if (n.path) {
    if (!_0.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
    o += '; Path=' + n.path;
  }
  if (n.expires) {
    if (!z0(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    o += '; Expires=' + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (o += '; HttpOnly'),
    n.secure && (o += '; Secure'),
    n.partitioned && (o += '; Partitioned'),
    n.priority)
  )
    switch (typeof n.priority == 'string' ? n.priority.toLowerCase() : void 0) {
      case 'low':
        o += '; Priority=Low';
        break;
      case 'medium':
        o += '; Priority=Medium';
        break;
      case 'high':
        o += '; Priority=High';
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (typeof n.sameSite == 'string' ? n.sameSite.toLowerCase() : n.sameSite) {
      case !0:
      case 'strict':
        o += '; SameSite=Strict';
        break;
      case 'lax':
        o += '; SameSite=Lax';
        break;
      case 'none':
        o += '; SameSite=None';
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return o;
}
function F0(e) {
  if (e.indexOf('%') === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function z0(e) {
  return V0.call(e) === '[object Date]';
}
var hf = 'popstate';
function B0(e = {}) {
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Ya(
      '',
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : ri(i);
  }
  return U0(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ut(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $0() {
  return Math.random().toString(36).substring(2, 10);
}
function pf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ya(e, t, n = null, r) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? ir(t) : t),
    state: n,
    key: (t && t.key) || r || $0(),
  };
}
function ri({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function ir(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))), e && (t.pathname = e));
  }
  return t;
}
function U0(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = 'POP',
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState({ ...s.state, idx: u }, ''));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = 'POP';
    let k = c(),
      p = k == null ? null : k - u;
    ((u = k), l && l({ action: a, location: w.location, delta: p }));
  }
  function d(k, p) {
    a = 'PUSH';
    let h = Ya(w.location, k, p);
    u = c() + 1;
    let m = pf(h, u),
      x = w.createHref(h);
    try {
      s.pushState(m, '', x);
    } catch (S) {
      if (S instanceof DOMException && S.name === 'DataCloneError') throw S;
      i.location.assign(x);
    }
    o && l && l({ action: a, location: w.location, delta: 1 });
  }
  function g(k, p) {
    a = 'REPLACE';
    let h = Ya(w.location, k, p);
    u = c();
    let m = pf(h, u),
      x = w.createHref(h);
    (s.replaceState(m, '', x), o && l && l({ action: a, location: w.location, delta: 0 }));
  }
  function v(k) {
    return W0(k);
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(hf, f),
        (l = k),
        () => {
          (i.removeEventListener(hf, f), (l = null));
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let p = v(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(k) {
      return s.go(k);
    },
  };
  return w;
}
function W0(e, t = !1) {
  let n = 'http://localhost';
  (typeof window < 'u' &&
    (n = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Y(n, 'No window.location.(origin|href) available to create URL'));
  let r = typeof e == 'string' ? e : ri(e);
  return ((r = r.replace(/ $/, '%20')), !t && r.startsWith('//') && (r = n + r), new URL(r, n));
}
function qp(e, t, n = '/') {
  return H0(e, t, n, !1);
}
function H0(e, t, n, r) {
  let i = typeof t == 'string' ? ir(t) : t,
    o = St(i.pathname || '/', n);
  if (o == null) return null;
  let s = Jp(e);
  K0(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = n1(o);
    a = e1(s[l], u, r);
  }
  return a;
}
function Jp(e, t = [], n = [], r = '') {
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith('/') &&
      (Y(
        l.relativePath.startsWith(r),
        `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = gt([r, l.relativePath]),
      c = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (Y(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
      ),
      Jp(o.children, t, c, u)),
      !(o.path == null && !o.index) && t.push({ path: u, score: q0(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, s);
      else for (let l of em(o.path)) i(o, s, l);
    }),
    t
  );
}
function em(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let s = em(r.join('/')),
    a = [];
  return (
    a.push(...s.map((l) => (l === '' ? o : [o, l].join('/')))),
    i && a.push(...s),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function K0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : J0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var b0 = /^:[\w-]+$/,
  Q0 = 3,
  Y0 = 2,
  G0 = 1,
  X0 = 10,
  Z0 = -2,
  mf = (e) => e === '*';
function q0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(mf) && (r += Z0),
    t && (r += Y0),
    n.filter((i) => !mf(i)).reduce((i, o) => i + (b0.test(o) ? Q0 : o === '' ? G0 : X0), r)
  );
}
function J0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function e1(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    o = '/',
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === '/' ? t : t.slice(o.length) || '/',
      f = Io({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, c),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Io({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, c)),
      !f)
    )
      return null;
    (Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: gt([o, f.pathname]),
        pathnameBase: s1(gt([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== '/' && (o = gt([o, f.pathnameBase])));
  }
  return s;
}
function Io(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = t1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((u, { paramName: c, isOptional: f }, d) => {
      if (c === '*') {
        let v = a[d] || '';
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const g = a[d];
      return (f && !g ? (u[c] = void 0) : (u[c] = (g || '').replace(/%2F/g, '/')), u);
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function t1(e, t = !1, n = !0) {
  ut(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`,
  );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function n1(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ut(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function St(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function r1(e, t = '/') {
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? ir(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : i1(n, t)) : t, search: a1(r), hash: l1(i) };
}
function i1(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Bs(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function o1(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function tm(e) {
  let t = o1(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function nm(e, t, n, r = !1) {
  let i;
  typeof e == 'string'
    ? (i = ir(e))
    : ((i = { ...e }),
      Y(!i.pathname || !i.pathname.includes('?'), Bs('?', 'pathname', 'search', i)),
      Y(!i.pathname || !i.pathname.includes('#'), Bs('#', 'pathname', 'hash', i)),
      Y(!i.search || !i.search.includes('#'), Bs('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    s = o ? '/' : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith('..')) {
      let d = s.split('/');
      for (; d[0] === '..'; ) (d.shift(), (f -= 1));
      i.pathname = d.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let l = r1(i, a),
    u = s && s !== '/' && s.endsWith('/'),
    c = (o || s === '.') && n.endsWith('/');
  return (!l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l);
}
var gt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  s1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  a1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  l1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function u1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var rm = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(rm);
var c1 = ['GET', ...rm];
new Set(c1);
var or = y.createContext(null);
or.displayName = 'DataRouter';
var ss = y.createContext(null);
ss.displayName = 'DataRouterState';
var im = y.createContext({ isTransitioning: !1 });
im.displayName = 'ViewTransition';
var f1 = y.createContext(new Map());
f1.displayName = 'Fetchers';
var d1 = y.createContext(null);
d1.displayName = 'Await';
var ct = y.createContext(null);
ct.displayName = 'Navigation';
var gi = y.createContext(null);
gi.displayName = 'Location';
var Je = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Je.displayName = 'Route';
var fu = y.createContext(null);
fu.displayName = 'RouteError';
function h1(e, { relative: t } = {}) {
  Y(yi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: n, navigator: r } = y.useContext(ct),
    { hash: i, pathname: o, search: s } = vi(e, { relative: t }),
    a = o;
  return (
    n !== '/' && (a = o === '/' ? n : gt([n, o])),
    r.createHref({ pathname: a, search: s, hash: i })
  );
}
function yi() {
  return y.useContext(gi) != null;
}
function Pt() {
  return (
    Y(yi(), 'useLocation() may be used only in the context of a <Router> component.'),
    y.useContext(gi).location
  );
}
var om =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function sm(e) {
  y.useContext(ct).static || y.useLayoutEffect(e);
}
function p1() {
  let { isDataRoute: e } = y.useContext(Je);
  return e ? L1() : m1();
}
function m1() {
  Y(yi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let e = y.useContext(or),
    { basename: t, navigator: n } = y.useContext(ct),
    { matches: r } = y.useContext(Je),
    { pathname: i } = Pt(),
    o = JSON.stringify(tm(r)),
    s = y.useRef(!1);
  return (
    sm(() => {
      s.current = !0;
    }),
    y.useCallback(
      (l, u = {}) => {
        if ((ut(s.current, om), !s.current)) return;
        if (typeof l == 'number') {
          n.go(l);
          return;
        }
        let c = nm(l, JSON.parse(o), i, u.relative === 'path');
        (e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : gt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u));
      },
      [t, n, o, i, e],
    )
  );
}
var g1 = y.createContext(null);
function y1(e) {
  let t = y.useContext(Je).outlet;
  return t && y.createElement(g1.Provider, { value: e }, t);
}
function cP() {
  let { matches: e } = y.useContext(Je),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function vi(e, { relative: t } = {}) {
  let { matches: n } = y.useContext(Je),
    { pathname: r } = Pt(),
    i = JSON.stringify(tm(n));
  return y.useMemo(() => nm(e, JSON.parse(i), r, t === 'path'), [e, i, r, t]);
}
function v1(e, t) {
  return am(e, t);
}
function am(e, t, n, r) {
  var p;
  Y(yi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: i } = y.useContext(ct),
    { matches: o } = y.useContext(Je),
    s = o[o.length - 1],
    a = s ? s.params : {},
    l = s ? s.pathname : '/',
    u = s ? s.pathnameBase : '/',
    c = s && s.route;
  {
    let h = (c && c.path) || '';
    lm(
      l,
      !c || h.endsWith('*') || h.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h === '/' ? '*' : `${h}/*`}">.`,
    );
  }
  let f = Pt(),
    d;
  if (t) {
    let h = typeof t == 'string' ? ir(t) : t;
    (Y(
      u === '/' || ((p = h.pathname) == null ? void 0 : p.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`,
    ),
      (d = h));
  } else d = f;
  let g = d.pathname || '/',
    v = g;
  if (u !== '/') {
    let h = u.replace(/^\//, '').split('/');
    v = '/' + g.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let w = qp(e, { pathname: v });
  (ut(c || w != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `),
    ut(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let k = E1(
    w &&
      w.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, a, h.params),
          pathname: gt([u, i.encodeLocation ? i.encodeLocation(h.pathname).pathname : h.pathname]),
          pathnameBase:
            h.pathnameBase === '/'
              ? u
              : gt([
                  u,
                  i.encodeLocation ? i.encodeLocation(h.pathnameBase).pathname : h.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  );
  return t && k
    ? y.createElement(
        gi.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...d },
            navigationType: 'POP',
          },
        },
        k,
      )
    : k;
}
function w1() {
  let e = M1(),
    t = u1(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    i = { padding: '0.5rem', backgroundColor: r },
    o = { padding: '2px 4px', backgroundColor: r },
    s = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (s = y.createElement(
      y.Fragment,
      null,
      y.createElement('p', null, '💿 Hey developer 👋'),
      y.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        y.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        y.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    y.createElement(
      y.Fragment,
      null,
      y.createElement('h2', null, 'Unexpected Application Error!'),
      y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? y.createElement('pre', { style: i }, n) : null,
      s,
    )
  );
}
var x1 = y.createElement(w1, null),
  S1 = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error('React Router caught the following error during render', e, t);
    }
    render() {
      return this.state.error !== void 0
        ? y.createElement(
            Je.Provider,
            { value: this.props.routeContext },
            y.createElement(fu.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function k1({ routeContext: e, match: t, children: n }) {
  let r = y.useContext(or);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    y.createElement(Je.Provider, { value: e }, n)
  );
}
function E1(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
    else return null;
  }
  let i = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let l = i.findIndex((u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0);
    (Y(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`,
    ),
      (i = i.slice(0, Math.min(i.length, l + 1))));
  }
  let s = !1,
    a = -1;
  if (n)
    for (let l = 0; l < i.length; l++) {
      let u = i[l];
      if (((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = l), u.route.id)) {
        let { loaderData: c, errors: f } = n,
          d = u.route.loader && !c.hasOwnProperty(u.route.id) && (!f || f[u.route.id] === void 0);
        if (u.route.lazy || d) {
          ((s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((l, u, c) => {
    let f,
      d = !1,
      g = null,
      v = null;
    n &&
      ((f = o && u.route.id ? o[u.route.id] : void 0),
      (g = u.route.errorElement || x1),
      s &&
        (a < 0 && c === 0
          ? (lm(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (d = !0),
            (v = null))
          : a === c && ((d = !0), (v = u.route.hydrateFallbackElement || null))));
    let w = t.concat(i.slice(0, c + 1)),
      k = () => {
        let p;
        return (
          f
            ? (p = g)
            : d
              ? (p = v)
              : u.route.Component
                ? (p = y.createElement(u.route.Component, null))
                : u.route.element
                  ? (p = u.route.element)
                  : (p = l),
          y.createElement(k1, {
            match: u,
            routeContext: { outlet: l, matches: w, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? y.createElement(S1, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: f,
          children: k(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : k();
  }, null);
}
function du(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function C1(e) {
  let t = y.useContext(or);
  return (Y(t, du(e)), t);
}
function P1(e) {
  let t = y.useContext(ss);
  return (Y(t, du(e)), t);
}
function T1(e) {
  let t = y.useContext(Je);
  return (Y(t, du(e)), t);
}
function hu(e) {
  let t = T1(e),
    n = t.matches[t.matches.length - 1];
  return (Y(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id);
}
function R1() {
  return hu('useRouteId');
}
function M1() {
  var r;
  let e = y.useContext(fu),
    t = P1('useRouteError'),
    n = hu('useRouteError');
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function L1() {
  let { router: e } = C1('useNavigate'),
    t = hu('useNavigate'),
    n = y.useRef(!1);
  return (
    sm(() => {
      n.current = !0;
    }),
    y.useCallback(
      async (i, o = {}) => {
        (ut(n.current, om),
          n.current &&
            (typeof i == 'number' ? e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...o })));
      },
      [e, t],
    )
  );
}
var gf = {};
function lm(e, t, n) {
  !t && !gf[e] && ((gf[e] = !0), ut(!1, n));
}
y.memo(D1);
function D1({ routes: e, future: t, state: n }) {
  return am(e, void 0, n, t);
}
function rn(e) {
  Y(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function A1({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: i,
  static: o = !1,
}) {
  Y(
    !yi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let s = e.replace(/^\/*/, '/'),
    a = y.useMemo(() => ({ basename: s, navigator: i, static: o, future: {} }), [s, i, o]);
  typeof n == 'string' && (n = ir(n));
  let { pathname: l = '/', search: u = '', hash: c = '', state: f = null, key: d = 'default' } = n,
    g = y.useMemo(() => {
      let v = St(l, s);
      return v == null
        ? null
        : { location: { pathname: v, search: u, hash: c, state: f, key: d }, navigationType: r };
    }, [s, l, u, c, f, d, r]);
  return (
    ut(
      g != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    g == null
      ? null
      : y.createElement(
          ct.Provider,
          { value: a },
          y.createElement(gi.Provider, { children: t, value: g }),
        )
  );
}
function N1({ children: e, location: t }) {
  return v1(Ga(e), t);
}
function Ga(e, t = []) {
  let n = [];
  return (
    y.Children.forEach(e, (r, i) => {
      if (!y.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === y.Fragment) {
        n.push.apply(n, Ga(r.props.children, o));
        return;
      }
      (Y(
        r.type === rn,
        `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Y(!r.props.index || !r.props.children, 'An index route cannot have child routes.'));
      let s = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = Ga(r.props.children, o)), n.push(s));
    }),
    n
  );
}
var so = 'get',
  ao = 'application/x-www-form-urlencoded';
function as(e) {
  return e != null && typeof e.tagName == 'string';
}
function _1(e) {
  return as(e) && e.tagName.toLowerCase() === 'button';
}
function V1(e) {
  return as(e) && e.tagName.toLowerCase() === 'form';
}
function j1(e) {
  return as(e) && e.tagName.toLowerCase() === 'input';
}
function O1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function I1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !O1(e);
}
var Wi = null;
function F1() {
  if (Wi === null)
    try {
      (new FormData(document.createElement('form'), 0), (Wi = !1));
    } catch {
      Wi = !0;
    }
  return Wi;
}
var z1 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function $s(e) {
  return e != null && !z1.has(e)
    ? (ut(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ao}"`,
      ),
      null)
    : e;
}
function B1(e, t) {
  let n, r, i, o, s;
  if (V1(e)) {
    let a = e.getAttribute('action');
    ((r = a ? St(a, t) : null),
      (n = e.getAttribute('method') || so),
      (i = $s(e.getAttribute('enctype')) || ao),
      (o = new FormData(e)));
  } else if (_1(e) || (j1(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = l ? St(l, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || so),
      (i = $s(e.getAttribute('formenctype')) || $s(a.getAttribute('enctype')) || ao),
      (o = new FormData(a, e)),
      !F1())
    ) {
      let { name: u, type: c, value: f } = e;
      if (c === 'image') {
        let d = u ? `${u}.` : '';
        (o.append(`${d}x`, '0'), o.append(`${d}y`, '0'));
      } else u && o.append(u, f);
    }
  } else {
    if (as(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((n = so), (r = null), (i = ao), (s = e));
  }
  return (
    o && i === 'text/plain' && ((s = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: o, body: s }
  );
}
function pu(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
async function $1(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return ((t[e.id] = n), n);
  } catch (n) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function U1(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function W1(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let s = await $1(o, n);
        return s.links ? s.links() : [];
      }
      return [];
    }),
  );
  return Q1(
    r
      .flat(1)
      .filter(U1)
      .filter((i) => i.rel === 'stylesheet' || i.rel === 'preload')
      .map((i) =>
        i.rel === 'stylesheet' ? { ...i, rel: 'prefetch', as: 'style' } : { ...i, rel: 'prefetch' },
      ),
  );
}
function yf(e, t, n, r, i, o) {
  let s = (l, u) => (n[u] ? l.route.id !== n[u].route.id : !0),
    a = (l, u) => {
      var c;
      return (
        n[u].pathname !== l.pathname ||
        (((c = n[u].route.path) == null ? void 0 : c.endsWith('*')) &&
          n[u].params['*'] !== l.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((l, u) => s(l, u) || a(l, u))
    : o === 'data'
      ? t.filter((l, u) => {
          var f;
          let c = r.routes[l.route.id];
          if (!c || !c.hasLoader) return !1;
          if (s(l, u) || a(l, u)) return !0;
          if (l.route.shouldRevalidate) {
            let d = l.route.shouldRevalidate({
              currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
              currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: l.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof d == 'boolean') return d;
          }
          return !0;
        })
      : [];
}
function H1(e, t, { includeHydrateFallback: n } = {}) {
  return K1(
    e
      .map((r) => {
        let i = t.routes[r.route.id];
        if (!i) return [];
        let o = [i.module];
        return (
          i.clientActionModule && (o = o.concat(i.clientActionModule)),
          i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)),
          n && i.hydrateFallbackModule && (o = o.concat(i.hydrateFallbackModule)),
          i.imports && (o = o.concat(i.imports)),
          o
        );
      })
      .flat(1),
  );
}
function K1(e) {
  return [...new Set(e)];
}
function b1(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Q1(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, i) => {
      let o = JSON.stringify(b1(i));
      return (n.has(o) || (n.add(o), r.push({ key: o, link: i })), r);
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Y1 = new Set([100, 101, 204, 205]);
function G1(e, t) {
  let n =
    typeof e == 'string'
      ? new URL(e, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : e;
  return (
    n.pathname === '/'
      ? (n.pathname = '_root.data')
      : t && St(n.pathname, t) === '/'
        ? (n.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (n.pathname = `${n.pathname.replace(/\/$/, '')}.data`),
    n
  );
}
function um() {
  let e = y.useContext(or);
  return (pu(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
}
function X1() {
  let e = y.useContext(ss);
  return (
    pu(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    e
  );
}
var mu = y.createContext(void 0);
mu.displayName = 'FrameworkContext';
function cm() {
  let e = y.useContext(mu);
  return (pu(e, 'You must render this element inside a <HydratedRouter> element'), e);
}
function Z1(e, t) {
  let n = y.useContext(mu),
    [r, i] = y.useState(!1),
    [o, s] = y.useState(!1),
    { onFocus: a, onBlur: l, onMouseEnter: u, onMouseLeave: c, onTouchStart: f } = t,
    d = y.useRef(null);
  (y.useEffect(() => {
    if ((e === 'render' && s(!0), e === 'viewport')) {
      let w = (p) => {
          p.forEach((h) => {
            s(h.isIntersecting);
          });
        },
        k = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        d.current && k.observe(d.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [e]),
    y.useEffect(() => {
      if (r) {
        let w = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [r]));
  let g = () => {
      i(!0);
    },
    v = () => {
      (i(!1), s(!1));
    };
  return n
    ? e !== 'intent'
      ? [o, d, {}]
      : [
          o,
          d,
          {
            onFocus: wr(a, g),
            onBlur: wr(l, v),
            onMouseEnter: wr(u, g),
            onMouseLeave: wr(c, v),
            onTouchStart: wr(f, g),
          },
        ]
    : [!1, d, {}];
}
function wr(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function q1({ page: e, ...t }) {
  let { router: n } = um(),
    r = y.useMemo(() => qp(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? y.createElement(ew, { page: e, matches: r, ...t }) : null;
}
function J1(e) {
  let { manifest: t, routeModules: n } = cm(),
    [r, i] = y.useState([]);
  return (
    y.useEffect(() => {
      let o = !1;
      return (
        W1(e, t, n).then((s) => {
          o || i(s);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function ew({ page: e, matches: t, ...n }) {
  let r = Pt(),
    { manifest: i, routeModules: o } = cm(),
    { basename: s } = um(),
    { loaderData: a, matches: l } = X1(),
    u = y.useMemo(() => yf(e, t, l, i, r, 'data'), [e, t, l, i, r]),
    c = y.useMemo(() => yf(e, t, l, i, r, 'assets'), [e, t, l, i, r]),
    f = y.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        w = !1;
      if (
        (t.forEach((p) => {
          var m;
          let h = i.routes[p.route.id];
          !h ||
            !h.hasLoader ||
            ((!u.some((x) => x.route.id === p.route.id) &&
              p.route.id in a &&
              (m = o[p.route.id]) != null &&
              m.shouldRevalidate) ||
            h.hasClientLoader
              ? (w = !0)
              : v.add(p.route.id));
        }),
        v.size === 0)
      )
        return [];
      let k = G1(e, s);
      return (
        w &&
          v.size > 0 &&
          k.searchParams.set(
            '_routes',
            t
              .filter((p) => v.has(p.route.id))
              .map((p) => p.route.id)
              .join(','),
          ),
        [k.pathname + k.search]
      );
    }, [s, a, r, i, u, t, e, o]),
    d = y.useMemo(() => H1(c, i), [c, i]),
    g = J1(c);
  return y.createElement(
    y.Fragment,
    null,
    f.map((v) => y.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...n })),
    d.map((v) => y.createElement('link', { key: v, rel: 'modulepreload', href: v, ...n })),
    g.map(({ key: v, link: w }) => y.createElement('link', { key: v, ...w })),
  );
}
function tw(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var fm =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  fm && (window.__reactRouterVersion = '7.6.3');
} catch {}
function nw({ basename: e, children: t, window: n }) {
  let r = y.useRef();
  r.current == null && (r.current = B0({ window: n, v5Compat: !0 }));
  let i = r.current,
    [o, s] = y.useState({ action: i.action, location: i.location }),
    a = y.useCallback(
      (l) => {
        y.startTransition(() => s(l));
      },
      [s],
    );
  return (
    y.useLayoutEffect(() => i.listen(a), [i, a]),
    y.createElement(A1, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
var dm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ls = y.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: r = 'none',
      relative: i,
      reloadDocument: o,
      replace: s,
      state: a,
      target: l,
      to: u,
      preventScrollReset: c,
      viewTransition: f,
      ...d
    },
    g,
  ) {
    let { basename: v } = y.useContext(ct),
      w = typeof u == 'string' && dm.test(u),
      k,
      p = !1;
    if (typeof u == 'string' && w && ((k = u), fm))
      try {
        let A = new URL(window.location.href),
          D = u.startsWith('//') ? new URL(A.protocol + u) : new URL(u),
          H = St(D.pathname, v);
        D.origin === A.origin && H != null ? (u = H + D.search + D.hash) : (p = !0);
      } catch {
        ut(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let h = h1(u, { relative: i }),
      [m, x, S] = Z1(r, d),
      P = sw(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function T(A) {
      (t && t(A), A.defaultPrevented || P(A));
    }
    let C = y.createElement('a', {
      ...d,
      ...S,
      href: k || h,
      onClick: p || o ? t : T,
      ref: tw(g, x),
      target: l,
      'data-discover': !w && n === 'render' ? 'true' : void 0,
    });
    return m && !w ? y.createElement(y.Fragment, null, C, y.createElement(q1, { page: h })) : C;
  });
ls.displayName = 'Link';
var rw = y.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: r = '',
    end: i = !1,
    style: o,
    to: s,
    viewTransition: a,
    children: l,
    ...u
  },
  c,
) {
  let f = vi(s, { relative: u.relative }),
    d = Pt(),
    g = y.useContext(ss),
    { navigator: v, basename: w } = y.useContext(ct),
    k = g != null && fw(f) && a === !0,
    p = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname,
    h = d.pathname,
    m = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
  (n || ((h = h.toLowerCase()), (m = m ? m.toLowerCase() : null), (p = p.toLowerCase())),
    m && w && (m = St(m, w) || m));
  const x = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
  let S = h === p || (!i && h.startsWith(p) && h.charAt(x) === '/'),
    P = m != null && (m === p || (!i && m.startsWith(p) && m.charAt(p.length) === '/')),
    T = { isActive: S, isPending: P, isTransitioning: k },
    C = S ? t : void 0,
    A;
  typeof r == 'function'
    ? (A = r(T))
    : (A = [r, S ? 'active' : null, P ? 'pending' : null, k ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let D = typeof o == 'function' ? o(T) : o;
  return y.createElement(
    ls,
    { ...u, 'aria-current': C, className: A, ref: c, style: D, to: s, viewTransition: a },
    typeof l == 'function' ? l(T) : l,
  );
});
rw.displayName = 'NavLink';
var iw = y.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: o,
      method: s = so,
      action: a,
      onSubmit: l,
      relative: u,
      preventScrollReset: c,
      viewTransition: f,
      ...d
    },
    g,
  ) => {
    let v = uw(),
      w = cw(a, { relative: u }),
      k = s.toLowerCase() === 'get' ? 'get' : 'post',
      p = typeof a == 'string' && dm.test(a),
      h = (m) => {
        if ((l && l(m), m.defaultPrevented)) return;
        m.preventDefault();
        let x = m.nativeEvent.submitter,
          S = (x == null ? void 0 : x.getAttribute('formmethod')) || s;
        v(x || m.currentTarget, {
          fetcherKey: t,
          method: S,
          navigate: n,
          replace: i,
          state: o,
          relative: u,
          preventScrollReset: c,
          viewTransition: f,
        });
      };
    return y.createElement('form', {
      ref: g,
      method: k,
      action: w,
      onSubmit: r ? l : h,
      ...d,
      'data-discover': !p && e === 'render' ? 'true' : void 0,
    });
  },
);
iw.displayName = 'Form';
function ow(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hm(e) {
  let t = y.useContext(or);
  return (Y(t, ow(e)), t);
}
function sw(
  e,
  { target: t, replace: n, state: r, preventScrollReset: i, relative: o, viewTransition: s } = {},
) {
  let a = p1(),
    l = Pt(),
    u = vi(e, { relative: o });
  return y.useCallback(
    (c) => {
      if (I1(c, t)) {
        c.preventDefault();
        let f = n !== void 0 ? n : ri(l) === ri(u);
        a(e, { replace: f, state: r, preventScrollReset: i, relative: o, viewTransition: s });
      }
    },
    [l, a, u, n, r, t, e, i, o, s],
  );
}
var aw = 0,
  lw = () => `__${String(++aw)}__`;
function uw() {
  let { router: e } = hm('useSubmit'),
    { basename: t } = y.useContext(ct),
    n = R1();
  return y.useCallback(
    async (r, i = {}) => {
      let { action: o, method: s, encType: a, formData: l, body: u } = B1(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || lw();
        await e.fetch(c, n, i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n],
  );
}
function cw(e, { relative: t } = {}) {
  let { basename: n } = y.useContext(ct),
    r = y.useContext(Je);
  Y(r, 'useFormAction must be used inside a RouteContext');
  let [i] = r.matches.slice(-1),
    o = { ...vi(e || '.', { relative: t }) },
    s = Pt();
  if (e == null) {
    o.search = s.search;
    let a = new URLSearchParams(o.search),
      l = a.getAll('index');
    if (l.some((c) => c === '')) {
      (a.delete('index'), l.filter((f) => f).forEach((f) => a.append('index', f)));
      let c = a.toString();
      o.search = c ? `?${c}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (o.pathname = o.pathname === '/' ? n : gt([n, o.pathname])),
    ri(o)
  );
}
function fw(e, t = {}) {
  let n = y.useContext(im);
  Y(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = hm('useViewTransitionState'),
    i = vi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = St(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = St(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Io(i.pathname, s) != null || Io(i.pathname, o) != null;
}
[...Y1];
var gu = {};
gu.match = yw;
gu.parse = pm;
var dw = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
  hw = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
  pw = /^(?:(min|max)-)?(.+)/,
  mw = /(em|rem|px|cm|mm|in|pt|pc)?$/,
  gw = /(dpi|dpcm|dppx)?$/;
function yw(e, t) {
  return pm(e).some(function (n) {
    var r = n.inverse,
      i = n.type === 'all' || t.type === n.type;
    if ((i && r) || !(i || r)) return !1;
    var o = n.expressions.every(function (s) {
      var a = s.feature,
        l = s.modifier,
        u = s.value,
        c = t[a];
      if (!c) return !1;
      switch (a) {
        case 'orientation':
        case 'scan':
          return c.toLowerCase() === u.toLowerCase();
        case 'width':
        case 'height':
        case 'device-width':
        case 'device-height':
          ((u = xf(u)), (c = xf(c)));
          break;
        case 'resolution':
          ((u = wf(u)), (c = wf(c)));
          break;
        case 'aspect-ratio':
        case 'device-aspect-ratio':
        case 'device-pixel-ratio':
          ((u = vf(u)), (c = vf(c)));
          break;
        case 'grid':
        case 'color':
        case 'color-index':
        case 'monochrome':
          ((u = parseInt(u, 10) || 1), (c = parseInt(c, 10) || 0));
          break;
      }
      switch (l) {
        case 'min':
          return c >= u;
        case 'max':
          return c <= u;
        default:
          return c === u;
      }
    });
    return (o && !r) || (!o && r);
  });
}
function pm(e) {
  return e.split(',').map(function (t) {
    t = t.trim();
    var n = t.match(dw),
      r = n[1],
      i = n[2],
      o = n[3] || '',
      s = {};
    return (
      (s.inverse = !!r && r.toLowerCase() === 'not'),
      (s.type = i ? i.toLowerCase() : 'all'),
      (o = o.match(/\([^\)]+\)/g) || []),
      (s.expressions = o.map(function (a) {
        var l = a.match(hw),
          u = l[1].toLowerCase().match(pw);
        return { modifier: u[1], feature: u[2], value: l[2] };
      })),
      s
    );
  });
}
function vf(e) {
  var t = Number(e),
    n;
  return (t || ((n = e.match(/^(\d+)\s*\/\s*(\d+)$/)), (t = n[1] / n[2])), t);
}
function wf(e) {
  var t = parseFloat(e),
    n = String(e).match(gw)[1];
  switch (n) {
    case 'dpcm':
      return t / 2.54;
    case 'dppx':
      return t * 96;
    default:
      return t;
  }
}
function xf(e) {
  var t = parseFloat(e),
    n = String(e).match(mw)[1];
  switch (n) {
    case 'em':
      return t * 16;
    case 'rem':
      return t * 16;
    case 'cm':
      return (t * 96) / 2.54;
    case 'mm':
      return (t * 96) / 2.54 / 10;
    case 'in':
      return t * 96;
    case 'pt':
      return t * 72;
    case 'pc':
      return (t * 72) / 12;
    default:
      return t;
  }
}
var vw = gu.match,
  Sf = typeof window < 'u' ? window.matchMedia : null;
function ww(e, t, n) {
  var r = this,
    i;
  (Sf && !n && (i = Sf.call(window, e)),
    i
      ? ((this.matches = i.matches), (this.media = i.media), i.addListener(a))
      : ((this.matches = vw(e, t)), (this.media = e)),
    (this.addListener = o),
    (this.removeListener = s),
    (this.dispose = l));
  function o(u) {
    i && i.addListener(u);
  }
  function s(u) {
    i && i.removeListener(u);
  }
  function a(u) {
    ((r.matches = u.matches), (r.media = u.media));
  }
  function l() {
    i && i.removeListener(a);
  }
}
function xw(e, t, n) {
  return new ww(e, t, n);
}
var Sw = xw;
const kw = Fd(Sw);
var Ew = /[A-Z]/g,
  Cw = /^ms-/,
  Us = {};
function Pw(e) {
  return '-' + e.toLowerCase();
}
function mm(e) {
  if (Us.hasOwnProperty(e)) return Us[e];
  var t = e.replace(Ew, Pw);
  return (Us[e] = Cw.test(t) ? '-' + t : t);
}
function Tw(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e),
    r = Object.keys(t),
    i = n.length;
  if (r.length !== i) return !1;
  for (let o = 0; o < i; o++) {
    const s = n[o];
    if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1;
  }
  return !0;
}
var gm = { exports: {} },
  Rw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Mw = Rw,
  Lw = Mw;
function ym() {}
function vm() {}
vm.resetWarningCache = ym;
var Dw = function () {
  function e(r, i, o, s, a, l) {
    if (l !== Lw) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: vm,
    resetWarningCache: ym,
  };
  return ((n.PropTypes = n), n);
};
gm.exports = Dw();
var Aw = gm.exports;
const I = Fd(Aw),
  ve = I.oneOfType([I.string, I.number]),
  wm = {
    all: I.bool,
    grid: I.bool,
    aural: I.bool,
    braille: I.bool,
    handheld: I.bool,
    print: I.bool,
    projection: I.bool,
    screen: I.bool,
    tty: I.bool,
    tv: I.bool,
    embossed: I.bool,
  },
  Nw = {
    orientation: I.oneOf(['portrait', 'landscape']),
    scan: I.oneOf(['progressive', 'interlace']),
    aspectRatio: I.string,
    deviceAspectRatio: I.string,
    height: ve,
    deviceHeight: ve,
    width: ve,
    deviceWidth: ve,
    color: I.bool,
    colorIndex: I.bool,
    monochrome: I.bool,
    resolution: ve,
    type: Object.keys(wm),
  },
  { type: fP, ..._w } = Nw,
  Vw = {
    minAspectRatio: I.string,
    maxAspectRatio: I.string,
    minDeviceAspectRatio: I.string,
    maxDeviceAspectRatio: I.string,
    minHeight: ve,
    maxHeight: ve,
    minDeviceHeight: ve,
    maxDeviceHeight: ve,
    minWidth: ve,
    maxWidth: ve,
    minDeviceWidth: ve,
    maxDeviceWidth: ve,
    minColor: I.number,
    maxColor: I.number,
    minColorIndex: I.number,
    maxColorIndex: I.number,
    minMonochrome: I.number,
    maxMonochrome: I.number,
    minResolution: ve,
    maxResolution: ve,
    ..._w,
  },
  jw = { ...wm, ...Vw };
var Ow = { all: jw };
const Iw = (e) => `not ${e}`,
  Fw = (e, t) => {
    const n = mm(e);
    return (
      typeof t == 'number' && (t = `${t}px`),
      t === !0 ? n : t === !1 ? Iw(n) : `(${n}: ${t})`
    );
  },
  zw = (e) => e.join(' and '),
  Bw = (e) => {
    const t = [];
    return (
      Object.keys(Ow.all).forEach((n) => {
        const r = e[n];
        r != null && t.push(Fw(n, r));
      }),
      zw(t)
    );
  },
  $w = y.createContext(void 0),
  Uw = (e) => e.query || Bw(e),
  kf = (e) => (e ? Object.keys(e).reduce((n, r) => ((n[mm(r)] = e[r]), n), {}) : void 0),
  xm = () => {
    const e = y.useRef(!1);
    return (
      y.useEffect(() => {
        e.current = !0;
      }, []),
      e.current
    );
  },
  Ww = (e) => {
    const t = y.useContext($w),
      n = () => kf(e) || kf(t),
      [r, i] = y.useState(n);
    return (
      y.useEffect(() => {
        const o = n();
        Tw(r, o) || i(o);
      }, [e, t]),
      r
    );
  },
  Hw = (e) => {
    const t = () => Uw(e),
      [n, r] = y.useState(t);
    return (
      y.useEffect(() => {
        const i = t();
        n !== i && r(i);
      }, [e]),
      n
    );
  },
  Kw = (e, t) => {
    const n = () => kw(e, t || {}, !!t),
      [r, i] = y.useState(n),
      o = xm();
    return (
      y.useEffect(() => {
        if (o) {
          const s = n();
          return (
            i(s),
            () => {
              s && s.dispose();
            }
          );
        }
      }, [e, t]),
      r
    );
  },
  bw = (e) => {
    const [t, n] = y.useState(e.matches);
    return (
      y.useEffect(() => {
        const r = (i) => {
          n(i.matches);
        };
        return (
          e.addListener(r),
          n(e.matches),
          () => {
            e.removeListener(r);
          }
        );
      }, [e]),
      t
    );
  },
  Qw = (e, t, n) => {
    const r = Ww(t),
      i = Hw(e);
    if (!i) throw new Error('Invalid or missing MediaQuery!');
    const o = Kw(i, r),
      s = bw(o);
    return (
      xm(),
      y.useEffect(() => {}, [s]),
      y.useEffect(
        () => () => {
          o && o.dispose();
        },
        [],
      ),
      s
    );
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yw = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gw = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  sr = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          className: a = '',
          children: l,
          ...u
        },
        c,
      ) =>
        y.createElement(
          'svg',
          {
            ref: c,
            ...Yw,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
            className: ['lucide', `lucide-${Gw(e)}`, a].join(' '),
            ...u,
          },
          [...t.map(([f, d]) => y.createElement(f, d)), ...(Array.isArray(l) ? l : [l])],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xw = sr('BookOpen', [
  ['path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', key: 'vv98re' }],
  ['path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z', key: '1cyq3y' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zw = sr('BrainCircuit', [
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
      key: 'l5xja',
    },
  ],
  ['path', { d: 'M9 13a4.5 4.5 0 0 0 3-4', key: '10igwf' }],
  ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5', key: '105sqy' }],
  ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396', key: 'ql3yin' }],
  ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516', key: '2e4loj' }],
  ['path', { d: 'M12 13h4', key: '1ku699' }],
  ['path', { d: 'M12 18h6a2 2 0 0 1 2 2v1', key: '105ag5' }],
  ['path', { d: 'M12 8h8', key: '1lhi5i' }],
  ['path', { d: 'M16 8V5a2 2 0 0 1 2-2', key: 'u6izg6' }],
  ['circle', { cx: '16', cy: '13', r: '.5', key: 'ry7gng' }],
  ['circle', { cx: '18', cy: '3', r: '.5', key: '1aiba7' }],
  ['circle', { cx: '20', cy: '21', r: '.5', key: 'yhc1fs' }],
  ['circle', { cx: '20', cy: '8', r: '.5', key: '1e43v0' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qw = sr('Home', [
  ['path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', key: 'y5dka4' }],
  ['polyline', { points: '9 22 9 12 15 12 15 22', key: 'e2us08' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jw = sr('Mail', [
  ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' }],
  ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = sr('Moon', [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = sr('Sun', [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ]),
  nx = { about_me: 'ABOUT ME', contact: 'Contact', blogs: 'Blogs', quizzes: 'Quizzes' },
  rx = {
    get_in_touch: 'Get in Touch',
    intro_text: 'The best way to get in touch is to send an email',
    email_label: 'Email: 8ankanroy@gmail.com',
    resume_intro: 'You can also view my resume here',
    view_resume: 'View My Resume',
    resume_link:
      'https://drive.google.com/file/d/1ZW0o_SIzzkozCVL1i2qxA65it5cLUMSy/view?usp=sharing',
  },
  ix = { title: '0hmx' },
  ox = {
    alt_text: 'Ankan giving information about himself',
    play_button_text_line1: 'PLAY',
    play_button_text_line2: 'THE REEL',
  },
  sx = {
    paragraph: 'Our world is just a bunch of poeple who said yes and did it',
    signature: 'ankan',
  },
  ax = {
    header_title: 'INSIGHTS',
    header_description: 'Thoughts on LLMs, Next.js, and Rust (sometimes) anything tech!',
  },
  rt = {
    navigation: nx,
    contact_page: rx,
    hero_section: ix,
    hero_image: ox,
    biography: sx,
    blog_page: ax,
  },
  Sm = () => {
    const [e, t] = y.useState(() => {
      const r = localStorage.getItem('theme');
      return r ? r === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    y.useEffect(() => {
      const r = window.document.documentElement;
      e
        ? (r.classList.add('dark'), localStorage.setItem('theme', 'dark'))
        : (r.classList.remove('dark'), localStorage.setItem('theme', 'light'));
    }, [e]);
    const n = () => {
      t(!e);
    };
    return E.jsx('button', {
      onClick: n,
      className: 'p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200',
      children: e ? E.jsx(tx, { className: 'w-6 h-6' }) : E.jsx(ex, { className: 'w-6 h-6' }),
    });
  },
  km = [
    { label: rt.navigation.about_me, path: '/', icon: qw },
    { label: rt.navigation.blogs, path: '/blogs', icon: Xw },
    { label: rt.navigation.quizzes, path: '/quizzes', icon: Zw },
    { label: rt.navigation.contact, path: '/contact', icon: Jw },
  ],
  lx = () => {
    const e = Pt();
    return E.jsx('nav', {
      className: 'w-full py-6 px-8 bg-background',
      children: E.jsxs('div', {
        className: 'max-w-7xl mx-auto relative',
        children: [
          E.jsx('ul', {
            className: 'flex justify-center space-x-12',
            children: km.map((t, n) =>
              E.jsx(
                'li',
                {
                  children: E.jsx(ls, {
                    to: t.path,
                    className: `text-body-sm font-medium transition-colors duration-200 tracking-wide ${e.pathname === t.path ? 'text-foreground border-b border-foreground pb-1' : 'text-muted-foreground hover:text-foreground'}`,
                    children: t.label,
                  }),
                },
                n,
              ),
            ),
          }),
          E.jsx('div', {
            className: 'absolute top-1/2 right-0 -translate-y-1/2',
            children: E.jsx(Sm, {}),
          }),
        ],
      }),
    });
  },
  ux = () => {
    const e = Pt();
    return E.jsx('nav', {
      className:
        'fixed bottom-4 left-1/2 -translate-x-1/2 w-fit max-w-[90%] bg-secondary/80 backdrop-blur-md rounded-full shadow-xl p-3 z-50 md:hidden',
      children: E.jsxs('ul', {
        className: 'flex justify-around items-center gap-4',
        children: [
          km.map((t, n) =>
            E.jsx(
              'li',
              {
                children: E.jsx(ls, {
                  to: t.path,
                  className: `flex flex-col items-center text-body-xs font-medium p-2 rounded-lg 
                ${(t.path === '/blogs' ? e.pathname.startsWith(t.path) : e.pathname === t.path) ? 'text-primary scale-110' : 'text-muted-foreground hover:text-foreground'}`,
                  children: E.jsx(t.icon, { className: 'w-6 h-6 mb-1' }),
                }),
              },
              n,
            ),
          ),
          E.jsx('li', { className: 'ml-auto', children: E.jsx(Sm, {}) }),
        ],
      }),
    });
  },
  cx = () => {
    const e = Qw({ maxWidth: 767 });
    return E.jsxs(E.Fragment, { children: [!e && E.jsx(lx, {}), e && E.jsx(ux, {})] });
  },
  yu = y.createContext({});
function vu(e) {
  const t = y.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const wu = typeof window < 'u',
  Em = wu ? y.useLayoutEffect : y.useEffect,
  us = y.createContext(null);
function xu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Su(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const kt = (e, t, n) => (n > t ? t : n < e ? e : n);
let ku = () => {};
const Et = {},
  Cm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Pm(e) {
  return typeof e == 'object' && e !== null;
}
const Tm = (e) => /^0[^.\s]+$/u.test(e);
function Eu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ue = (e) => e,
  fx = (e, t) => (n) => t(e(n)),
  wi = (...e) => e.reduce(fx),
  ii = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Cu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (xu(this.subscriptions, t), () => Su(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const st = (e) => e * 1e3,
  at = (e) => e / 1e3;
function Rm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Mm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  dx = 1e-7,
  hx = 12;
function px(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = Mm(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > dx && ++a < hx);
  return s;
}
function xi(e, t, n, r) {
  if (e === t && n === r) return Ue;
  const i = (o) => px(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Mm(i(o), t, r));
}
const Lm = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Dm = (e) => (t) => 1 - e(1 - t),
  Am = xi(0.33, 1.53, 0.69, 0.99),
  Pu = Dm(Am),
  Nm = Lm(Pu),
  _m = (e) => ((e *= 2) < 1 ? 0.5 * Pu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Tu = (e) => 1 - Math.sin(Math.acos(e)),
  Vm = Dm(Tu),
  jm = Lm(Tu),
  mx = xi(0.42, 0, 1, 1),
  gx = xi(0, 0, 0.58, 1),
  Om = xi(0.42, 0, 0.58, 1),
  yx = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Im = (e) => Array.isArray(e) && typeof e[0] == 'number',
  vx = {
    linear: Ue,
    easeIn: mx,
    easeInOut: Om,
    easeOut: gx,
    circIn: Tu,
    circInOut: jm,
    circOut: Vm,
    backIn: Pu,
    backInOut: Nm,
    backOut: Am,
    anticipate: _m,
  },
  wx = (e) => typeof e == 'string',
  Ef = (e) => {
    if (Im(e)) {
      ku(e.length === 4);
      const [t, n, r, i] = e;
      return xi(t, n, r, i);
    } else if (wx(e)) return vx[e];
    return e;
  },
  Hi = [
    'setup',
    'read',
    'resolveKeyframes',
    'preUpdate',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  Cf = { value: null };
function xx(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(f) {
    (s.has(f) && (c.schedule(f), e()), l++, f(a));
  }
  const c = {
    schedule: (f, d = !1, g = !1) => {
      const w = g && i ? n : r;
      return (d && s.add(f), w.has(f) || w.add(f), f);
    },
    cancel: (f) => {
      (r.delete(f), s.delete(f));
    },
    process: (f) => {
      if (((a = f), i)) {
        o = !0;
        return;
      }
      ((i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && Cf.value && Cf.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(f)));
    },
  };
  return c;
}
const Sx = 40;
function Fm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Hi.reduce((m, x) => ((m[x] = xx(o, t ? x : void 0)), m), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: g,
      postRender: v,
    } = s,
    w = () => {
      const m = Et.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        Et.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Sx), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        g.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(w)));
    },
    k = () => {
      ((n = !0), (r = !0), i.isProcessing || e(w));
    };
  return {
    schedule: Hi.reduce((m, x) => {
      const S = s[x];
      return ((m[x] = (P, T = !1, C = !1) => (n || k(), S.schedule(P, T, C))), m);
    }, {}),
    cancel: (m) => {
      for (let x = 0; x < Hi.length; x++) s[Hi[x]].cancel(m);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: W,
  cancel: Kt,
  state: ce,
  steps: Ws,
} = Fm(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Ue, !0);
let lo;
function kx() {
  lo = void 0;
}
const Te = {
    now: () => (
      lo === void 0 &&
        Te.set(ce.isProcessing || Et.useManualTiming ? ce.timestamp : performance.now()),
      lo
    ),
    set: (e) => {
      ((lo = e), queueMicrotask(kx));
    },
  },
  zm = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Ru = zm('--'),
  Ex = zm('var(--'),
  Mu = (e) => (Ex(e) ? Cx.test(e.split('/*')[0].trim()) : !1),
  Cx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ar = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  oi = { ...ar, transform: (e) => kt(0, 1, e) },
  Ki = { ...ar, default: 1 },
  jr = (e) => Math.round(e * 1e5) / 1e5,
  Lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Px(e) {
  return e == null;
}
const Tx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Du = (e, t) => (n) =>
    !!(
      (typeof n == 'string' && Tx.test(n) && n.startsWith(e)) ||
      (t && !Px(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Bm = (e, t, n) => (r) => {
    if (typeof r != 'string') return r;
    const [i, o, s, a] = r.match(Lu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Rx = (e) => kt(0, 255, e),
  Hs = { ...ar, transform: (e) => Math.round(Rx(e)) },
  un = {
    test: Du('rgb', 'red'),
    parse: Bm('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Hs.transform(e) +
      ', ' +
      Hs.transform(t) +
      ', ' +
      Hs.transform(n) +
      ', ' +
      jr(oi.transform(r)) +
      ')',
  };
function Mx(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Xa = { test: Du('#'), parse: Mx, transform: un.transform },
  Si = (e) => ({
    test: (t) => typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mt = Si('deg'),
  lt = Si('%'),
  N = Si('px'),
  Lx = Si('vh'),
  Dx = Si('vw'),
  Pf = { ...lt, parse: (e) => lt.parse(e) / 100, transform: (e) => lt.transform(e * 100) },
  jn = {
    test: Du('hsl', 'hue'),
    parse: Bm('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      lt.transform(jr(t)) +
      ', ' +
      lt.transform(jr(n)) +
      ', ' +
      jr(oi.transform(r)) +
      ')',
  },
  te = {
    test: (e) => un.test(e) || Xa.test(e) || jn.test(e),
    parse: (e) => (un.test(e) ? un.parse(e) : jn.test(e) ? jn.parse(e) : Xa.parse(e)),
    transform: (e) =>
      typeof e == 'string' ? e : e.hasOwnProperty('red') ? un.transform(e) : jn.transform(e),
    getAnimatableNone: (e) => {
      const t = te.parse(e);
      return ((t.alpha = 0), te.transform(t));
    },
  },
  Ax =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Nx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(Lu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(Ax)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const $m = 'number',
  Um = 'color',
  _x = 'var',
  Vx = 'var(',
  Tf = '${}',
  jx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function si(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      jx,
      (l) => (
        te.test(l)
          ? (r.color.push(o), i.push(Um), n.push(te.parse(l)))
          : l.startsWith(Vx)
            ? (r.var.push(o), i.push(_x), n.push(l))
            : (r.number.push(o), i.push($m), n.push(parseFloat(l))),
        ++o,
        Tf
      ),
    )
    .split(Tf);
  return { values: n, split: a, indexes: r, types: i };
}
function Wm(e) {
  return si(e).values;
}
function Hm(e) {
  const { split: t, types: n } = si(e),
    r = t.length;
  return (i) => {
    let o = '';
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === $m ? (o += jr(i[s])) : a === Um ? (o += te.transform(i[s])) : (o += i[s]);
      }
    return o;
  };
}
const Ox = (e) => (typeof e == 'number' ? 0 : te.test(e) ? te.getAnimatableNone(e) : e);
function Ix(e) {
  const t = Wm(e);
  return Hm(e)(t.map(Ox));
}
const bt = { test: Nx, parse: Wm, createTransformer: Hm, getAnimatableNone: Ix };
function Ks(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Fx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Ks(l, a, e + 1 / 3)), (o = Ks(l, a, e)), (s = Ks(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Fo(e, t) {
  return (n) => (n > 0 ? t : e);
}
const b = (e, t, n) => e + (t - e) * n,
  bs = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  zx = [Xa, un, jn],
  Bx = (e) => zx.find((t) => t.test(e));
function Rf(e) {
  const t = Bx(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === jn && (n = Fx(n)), n);
}
const Mf = (e, t) => {
    const n = Rf(e),
      r = Rf(t);
    if (!n || !r) return Fo(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = bs(n.red, r.red, o)),
      (i.green = bs(n.green, r.green, o)),
      (i.blue = bs(n.blue, r.blue, o)),
      (i.alpha = b(n.alpha, r.alpha, o)),
      un.transform(i)
    );
  },
  Za = new Set(['none', 'hidden']);
function $x(e, t) {
  return Za.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Ux(e, t) {
  return (n) => b(e, t, n);
}
function Au(e) {
  return typeof e == 'number'
    ? Ux
    : typeof e == 'string'
      ? Mu(e)
        ? Fo
        : te.test(e)
          ? Mf
          : Kx
      : Array.isArray(e)
        ? Km
        : typeof e == 'object'
          ? te.test(e)
            ? Mf
            : Wx
          : Fo;
}
function Km(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Au(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function Wx(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Au(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function Hx(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    ((n[i] = a), r[o]++);
  }
  return n;
}
const Kx = (e, t) => {
  const n = bt.createTransformer(t),
    r = si(e),
    i = si(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Za.has(e) && !i.values.length) || (Za.has(t) && !r.values.length)
      ? $x(e, t)
      : wi(Km(Hx(r, i), i.values), n)
    : Fo(e, t);
};
function bm(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? b(e, t, n)
    : Au(e)(e, t);
}
const bx = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => W.update(t, n),
      stop: () => Kt(t),
      now: () => (ce.isProcessing ? ce.timestamp : Te.now()),
    };
  },
  Qm = (e, t, n = 10) => {
    let r = '';
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  zo = 2e4;
function Nu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < zo; ) ((t += n), (r = e.next(t)));
  return t >= zo ? 1 / 0 : t;
}
function Qx(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Nu(r), zo);
  return { type: 'keyframes', ease: (o) => r.next(i * o).value / t, duration: at(i) };
}
const Yx = 5;
function Ym(e, t, n) {
  const r = Math.max(t - Yx, 0);
  return Rm(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Qs = 0.001;
function Gx({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    o,
    s = 1 - t;
  ((s = kt(X.minDamping, X.maxDamping, s)),
    (e = kt(X.minDuration, X.maxDuration, at(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = qa(u, s),
            v = Math.exp(-f);
          return Qs - (d / g) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            w = qa(Math.pow(u, 2), s);
          return ((-i(u) + Qs > 0 ? -1 : 1) * ((d - g) * v)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Qs + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = Zx(i, o, a);
  if (((e = st(e)), isNaN(l))) return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Xx = 12;
function Zx(e, t, n) {
  let r = n;
  for (let i = 1; i < Xx; i++) r = r - e(r) / t(r);
  return r;
}
function qa(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const qx = ['duration', 'bounce'],
  Jx = ['stiffness', 'damping', 'mass'];
function Lf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function eS(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Lf(e, Jx) && Lf(e, qx))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * kt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: o };
    } else {
      const n = Gx(e);
      ((t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Bo(e = X.visualDuration, t = X.bounce) {
  const n = typeof e != 'object' ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: g,
    } = eS({ ...n, velocity: -at(n.velocity || 0) }),
    v = d || 0,
    w = u / (2 * Math.sqrt(l * c)),
    k = s - o,
    p = at(Math.sqrt(l / c)),
    h = Math.abs(k) < 5;
  (r || (r = h ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = h ? X.restDelta.granular : X.restDelta.default));
  let m;
  if (w < 1) {
    const S = qa(p, w);
    m = (P) => {
      const T = Math.exp(-w * p * P);
      return s - T * (((v + w * p * k) / S) * Math.sin(S * P) + k * Math.cos(S * P));
    };
  } else if (w === 1) m = (S) => s - Math.exp(-p * S) * (k + (v + p * k) * S);
  else {
    const S = p * Math.sqrt(w * w - 1);
    m = (P) => {
      const T = Math.exp(-w * p * P),
        C = Math.min(S * P, 300);
      return s - (T * ((v + w * p * k) * Math.sinh(C) + S * k * Math.cosh(C))) / S;
    };
  }
  const x = {
    calculatedDuration: (g && f) || null,
    next: (S) => {
      const P = m(S);
      if (g) a.done = S >= f;
      else {
        let T = S === 0 ? v : 0;
        w < 1 && (T = S === 0 ? st(v) : Ym(m, S, P));
        const C = Math.abs(T) <= r,
          A = Math.abs(s - P) <= i;
        a.done = C && A;
      }
      return ((a.value = a.done ? s : P), a);
    },
    toString: () => {
      const S = Math.min(Nu(x), zo),
        P = Qm((T) => x.next(S * T).value, S, 30);
      return S + 'ms ' + P;
    },
    toTransition: () => {},
  };
  return x;
}
Bo.applyToOptions = (e) => {
  const t = Qx(e, 100, Bo);
  return ((e.ease = t.ease), (e.duration = st(t.duration)), (e.type = 'keyframes'), e);
};
function Ja({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    v = (C) => (a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l);
  let w = n * t;
  const k = f + w,
    p = s === void 0 ? k : s(k);
  p !== k && (w = p - f);
  const h = (C) => -w * Math.exp(-C / r),
    m = (C) => p + h(C),
    x = (C) => {
      const A = h(C),
        D = m(C);
      ((d.done = Math.abs(A) <= u), (d.value = d.done ? p : D));
    };
  let S, P;
  const T = (C) => {
    g(d.value) &&
      ((S = C),
      (P = Bo({
        keyframes: [d.value, v(d.value)],
        velocity: Ym(m, C, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let A = !1;
        return (
          !P && S === void 0 && ((A = !0), x(C), T(C)),
          S !== void 0 && C >= S ? P.next(C - S) : (!A && x(C), d)
        );
      },
    }
  );
}
function tS(e, t, n) {
  const r = [],
    i = n || Et.mix || bm,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ue : t;
      a = wi(l, a);
    }
    r.push(a);
  }
  return r;
}
function nS(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((ku(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = tS(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = ii(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(kt(e[0], e[o - 1], c)) : u;
}
function rS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ii(0, t, r);
    e.push(b(n, 1, i));
  }
}
function iS(e) {
  const t = [0];
  return (rS(t, e.length - 1), t);
}
function oS(e, t) {
  return e.map((n) => n * t);
}
function sS(e, t) {
  return e.map(() => t || Om).splice(0, e.length - 1);
}
function Or({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
  const i = yx(r) ? r.map(Ef) : Ef(r),
    o = { done: !1, value: t[0] },
    s = oS(n && n.length === t.length ? n : iS(t), e),
    a = nS(s, t, { ease: Array.isArray(i) ? i : sS(t, i) });
  return { calculatedDuration: e, next: (l) => ((o.value = a(l)), (o.done = l >= e), o) };
}
const aS = (e) => e !== null;
function _u(e, { repeat: t, repeatType: n = 'loop' }, r, i = 1) {
  const o = e.filter(aS),
    a = i < 0 || (t && n !== 'loop' && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const lS = { decay: Ja, inertia: Ja, tween: Or, keyframes: Or, spring: Bo };
function Gm(e) {
  typeof e.type == 'string' && (e.type = lS[e.type]);
}
class Vu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const uS = (e) => e / 100;
class ju extends Vu {
  constructor(t) {
    (super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Te.now() && this.tick(Te.now()),
          (this.isStopped = !0),
          this.state !== 'idle' &&
            (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Gm(t);
    const { type: n = Or, repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Or;
    l !== Or &&
      typeof a[0] != 'number' &&
      ((this.mixKeyframes = wi(uS, bm(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (o === 'mirror' &&
      (this.mirroredGenerator = l({ ...t, keyframes: [...a].reverse(), velocity: -s })),
      u.calculatedDuration === null && (u.calculatedDuration = Nu(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: g,
      type: v,
      onUpdate: w,
      finalKeyframe: k,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = i));
    let m = this.currentTime,
      x = r;
    if (f) {
      const C = Math.min(this.currentTime, i) / a;
      let A = Math.floor(C),
        D = C % 1;
      (!D && C >= 1 && (D = 1),
        D === 1 && A--,
        (A = Math.min(A, f + 1)),
        !!(A % 2) &&
          (d === 'reverse' ? ((D = 1 - D), g && (D -= g / a)) : d === 'mirror' && (x = s)),
        (m = kt(0, 1, D) * a));
    }
    const S = h ? { done: !1, value: c[0] } : x.next(m);
    o && (S.value = o(S.value));
    let { done: P } = S;
    !h &&
      l !== null &&
      (P = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const T =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && P));
    return (
      T && v !== Ja && (S.value = _u(c, this.options, k, this.speed)),
      w && w(S.value),
      T && this.finish(),
      S
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return at(this.calculatedDuration);
  }
  get time() {
    return at(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = st(t)),
      (this.currentTime = t),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Te.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = at(this.currentTime)));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = bx, startTime: n } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i));
    const r = this.driver.now();
    (this.state === 'finished'
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === 'finished' && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start());
  }
  pause() {
    ((this.state = 'paused'), this.updateTime(Te.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== 'running' && this.play(), (this.state = 'finished'), (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = 'idle'), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'), (this.options.ease = 'linear'), this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function cS(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const cn = (e) => (e * 180) / Math.PI,
  el = (e) => {
    const t = cn(Math.atan2(e[1], e[0]));
    return tl(t);
  },
  fS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: el,
    rotateZ: el,
    skewX: (e) => cn(Math.atan(e[1])),
    skewY: (e) => cn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  tl = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Df = el,
  Af = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Nf = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  dS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Af,
    scaleY: Nf,
    scale: (e) => (Af(e) + Nf(e)) / 2,
    rotateX: (e) => tl(cn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => tl(cn(Math.atan2(-e[2], e[0]))),
    rotateZ: Df,
    rotate: Df,
    skewX: (e) => cn(Math.atan(e[4])),
    skewY: (e) => cn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function nl(e) {
  return e.includes('scale') ? 1 : 0;
}
function rl(e, t) {
  if (!e || e === 'none') return nl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = dS), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = fS), (i = a));
  }
  if (!i) return nl(t);
  const o = r[t],
    s = i[1].split(',').map(pS);
  return typeof o == 'function' ? o(s) : s[o];
}
const hS = (e, t) => {
  const { transform: n = 'none' } = getComputedStyle(e);
  return rl(n, t);
};
function pS(e) {
  return parseFloat(e.trim());
}
const lr = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  ur = new Set(lr),
  _f = (e) => e === ar || e === N,
  mS = new Set(['x', 'y', 'z']),
  gS = lr.filter((e) => !mS.has(e));
function yS(e) {
  const t = [];
  return (
    gS.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const hn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => rl(t, 'x'),
  y: (e, { transform: t }) => rl(t, 'y'),
};
hn.translateX = hn.x;
hn.translateY = hn.y;
const pn = new Set();
let il = !1,
  ol = !1,
  sl = !1;
function Xm() {
  if (ol) {
    const e = Array.from(pn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = yS(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((ol = !1), (il = !1), pn.forEach((e) => e.complete(sl)), pn.clear());
}
function Zm() {
  pn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (ol = !0));
  });
}
function vS() {
  ((sl = !0), Zm(), Xm(), (sl = !1));
}
class Ou {
  constructor(t, n, r, i, o, s = !1) {
    ((this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = 'scheduled'),
      this.isAsync
        ? (pn.add(this), il || ((il = !0), W.read(Zm), W.resolveKeyframes(Xm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]));
    }
    cS(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      pn.delete(this));
  }
  cancel() {
    this.state === 'scheduled' && (pn.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const wS = (e) => e.startsWith('--');
function xS(e, t, n) {
  wS(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const SS = Eu(() => window.ScrollTimeline !== void 0),
  kS = {};
function ES(e, t) {
  const n = Eu(e);
  return () => kS[t] ?? n();
}
const qm = ES(() => {
    try {
      document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  Pr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Vf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Pr([0, 0.65, 0.55, 1]),
    circOut: Pr([0.55, 0, 1, 0.45]),
    backIn: Pr([0.31, 0.01, 0.66, -0.59]),
    backOut: Pr([0.33, 1.53, 0.69, 0.99]),
  };
function Jm(e, t) {
  if (e)
    return typeof e == 'function'
      ? qm()
        ? Qm(e, t)
        : 'ease-out'
      : Im(e)
        ? Pr(e)
        : Array.isArray(e)
          ? e.map((n) => Jm(n, t) || Vf.easeOut)
          : Vf[e];
}
function CS(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: a = 'easeOut',
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Jm(a, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? 'linear' : f,
    fill: 'both',
    iterations: o + 1,
    direction: s === 'reverse' ? 'alternate' : 'normal',
  };
  return (u && (d.pseudoElement = u), e.animate(c, d));
}
function eg(e) {
  return typeof e == 'function' && 'applyToOptions' in e;
}
function PS({ type: e, ...t }) {
  return eg(e) && qm()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = 'easeOut'), t);
}
class TS extends Vu {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t)) return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      ku(typeof t.type != 'string'));
    const u = PS(t);
    ((this.animation = CS(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = _u(i, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : xS(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === 'idle' ||
      t === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null
        ? void 0
        : r.call(n).duration) || 0;
    return at(Number(t));
  }
  get time() {
    return at(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.finishedTime = null), (this.animation.currentTime = st(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null || r.updateTiming({ easing: 'linear' })),
      (this.animation.onfinish = null),
      t && SS() ? ((this.animation.timeline = t), Ue) : n(this)
    );
  }
}
const tg = { anticipate: _m, backInOut: Nm, circInOut: jm };
function RS(e) {
  return e in tg;
}
function MS(e) {
  typeof e.ease == 'string' && RS(e.ease) && (e.ease = tg[e.ease]);
}
const jf = 10;
class LS extends TS {
  constructor(t) {
    (MS(t), Gm(t), super(t), t.startTime && (this.startTime = t.startTime), (this.options = t));
  }
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: o, ...s } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new ju({ ...s, autoplay: !1 }),
      l = st(this.finishedTime ?? this.time);
    (n.setWithVelocity(a.sample(l - jf).value, a.sample(l).value, jf), a.stop());
  }
}
const Of = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' && (bt.test(e) || e === '0') && !e.startsWith('url('))
      );
function DS(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function AS(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  const o = e[e.length - 1],
    s = Of(i, t),
    a = Of(o, t);
  return !s || !a ? !1 : DS(e) || ((n === 'spring' || eg(n)) && r);
}
function Iu(e) {
  return Pm(e) && 'offsetHeight' in e;
}
const NS = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  _S = Eu(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function VS(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = e;
  if (!Iu((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current)) return !1;
  const { onUpdate: a, transformTemplate: l } = t.owner.getProps();
  return (
    _S() &&
    n &&
    NS.has(n) &&
    (n !== 'transform' || !l) &&
    !a &&
    !r &&
    i !== 'mirror' &&
    o !== 0 &&
    s !== 'inertia'
  );
}
const jS = 40;
class OS extends Vu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var w, k;
        (this._animation &&
          (this._animation.stop(), (w = this.stopTimeline) == null || w.call(this)),
          (k = this.keyframeResolver) == null || k.cancel());
      }),
      (this.createdAt = Te.now()));
    const d = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      g = (c == null ? void 0 : c.KeyframeResolver) || Ou;
    ((this.keyframeResolver = new g(
      a,
      (w, k, p) => this.onKeyframesResolved(w, k, d, !p),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: s, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
    ((this.resolvedAt = Te.now()),
      AS(t, o, s, a) ||
        ((Et.instantAnimations || !l) && (c == null || c(_u(t, r, n))),
        (t[0] = t[t.length - 1]),
        (r.duration = 0),
        (r.repeat = 0)));
    const d = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > jS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      g = !u && VS(d) ? new LS({ ...d, element: d.motionValue.owner.current }) : new ju(d);
    (g.finished.then(() => this.notifyFinished()).catch(Ue),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation || ((t = this.keyframeResolver) == null || t.resume(), vS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel());
  }
}
const IS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FS(e) {
  const t = IS.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ng(e, t, n = 1) {
  const [r, i] = FS(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Cm(s) ? parseFloat(s) : s;
  }
  return Mu(i) ? ng(i, t, n + 1) : i;
}
function Fu(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const rg = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...lr]),
  zS = { test: (e) => e === 'auto', parse: (e) => e },
  ig = (e) => (t) => t.test(e),
  og = [ar, N, lt, Mt, Dx, Lx, zS],
  If = (e) => og.find(ig(e));
function BS(e) {
  return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || Tm(e) : !0;
}
const $S = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function US(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(Lu) || [];
  if (!r) return e;
  const i = n.replace(r, '');
  let o = $S.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + '(' + o + i + ')');
}
const WS = /\b([a-z-]*)\(.*?\)/gu,
  al = {
    ...bt,
    getAnimatableNone: (e) => {
      const t = e.match(WS);
      return t ? t.map(US).join(' ') : e;
    },
  },
  Ff = { ...ar, transform: Math.round },
  HS = {
    rotate: Mt,
    rotateX: Mt,
    rotateY: Mt,
    rotateZ: Mt,
    scale: Ki,
    scaleX: Ki,
    scaleY: Ki,
    scaleZ: Ki,
    skew: Mt,
    skewX: Mt,
    skewY: Mt,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: oi,
    originX: Pf,
    originY: Pf,
    originZ: N,
  },
  zu = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    backgroundPositionX: N,
    backgroundPositionY: N,
    ...HS,
    zIndex: Ff,
    fillOpacity: oi,
    strokeOpacity: oi,
    numOctaves: Ff,
  },
  KS = {
    ...zu,
    color: te,
    backgroundColor: te,
    outlineColor: te,
    fill: te,
    stroke: te,
    borderColor: te,
    borderTopColor: te,
    borderRightColor: te,
    borderBottomColor: te,
    borderLeftColor: te,
    filter: al,
    WebkitFilter: al,
  },
  sg = (e) => KS[e];
function ag(e, t) {
  let n = sg(e);
  return (n !== al && (n = bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
const bS = new Set(['auto', 'none', '0']);
function QS(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    (typeof o == 'string' && !bS.has(o) && si(o).values.length && (i = e[r]), r++);
  }
  if (i && n) for (const o of t) e[o] = ag(n, i);
}
class YS extends Ou {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == 'string' && ((u = u.trim()), Mu(u))) {
        const c = ng(u, n.current);
        (c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !rg.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = If(i),
      a = If(o);
    if (s !== a)
      if (_f(s) && _f(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == 'string' && (t[l] = parseFloat(u));
        }
      else hn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || BS(t[i])) && r.push(i);
    r.length && QS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = hn[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    ((r[o] = hn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function GS(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == 'string') {
    let r = document;
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const lg = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  zf = 30,
  XS = (e) => !isNaN(parseFloat(e));
class ZS {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        var s, a;
        const o = Te.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current), this.dependents))
        )
          for (const l of this.dependents) l.dirty();
        i && ((a = this.events.renderRequest) == null || a.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Te.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = XS(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Cu());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          (r(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Te.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > zf)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, zf);
    return Rm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Jn(e, t) {
  return new ZS(e, t);
}
const { schedule: Bu } = Fm(queueMicrotask, !1),
  be = { x: !1, y: !1 };
function ug() {
  return be.x || be.y;
}
function qS(e) {
  return e === 'x' || e === 'y'
    ? be[e]
      ? null
      : ((be[e] = !0),
        () => {
          be[e] = !1;
        })
    : be.x || be.y
      ? null
      : ((be.x = be.y = !0),
        () => {
          be.x = be.y = !1;
        });
}
function cg(e, t) {
  const n = GS(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Bf(e) {
  return !(e.pointerType === 'touch' || ug());
}
function JS(e, t, n = {}) {
  const [r, i, o] = cg(e, n),
    s = (a) => {
      if (!Bf(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != 'function' || !l) return;
      const c = (f) => {
        Bf(f) && (u(f), l.removeEventListener('pointerleave', c));
      };
      l.addEventListener('pointerleave', c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener('pointerenter', s, i);
    }),
    o
  );
}
const fg = (e, t) => (t ? (e === t ? !0 : fg(e, t.parentElement)) : !1),
  $u = (e) =>
    e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1,
  ek = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function tk(e) {
  return ek.has(e.tagName) || e.tabIndex !== -1;
}
const uo = new WeakSet();
function $f(e) {
  return (t) => {
    t.key === 'Enter' && e(t);
  };
}
function Ys(e, t) {
  e.dispatchEvent(new PointerEvent('pointer' + t, { isPrimary: !0, bubbles: !0 }));
}
const nk = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = $f(() => {
    if (uo.has(n)) return;
    Ys(n, 'down');
    const i = $f(() => {
        Ys(n, 'up');
      }),
      o = () => Ys(n, 'cancel');
    (n.addEventListener('keyup', i, t), n.addEventListener('blur', o, t));
  });
  (n.addEventListener('keydown', r, t),
    n.addEventListener('blur', () => n.removeEventListener('keydown', r), t));
};
function Uf(e) {
  return $u(e) && !ug();
}
function rk(e, t, n = {}) {
  const [r, i, o] = cg(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Uf(a)) return;
      uo.add(l);
      const u = t(l, a),
        c = (g, v) => {
          (window.removeEventListener('pointerup', f),
            window.removeEventListener('pointercancel', d),
            uo.has(l) && uo.delete(l),
            Uf(g) && typeof u == 'function' && u(g, { success: v }));
        },
        f = (g) => {
          c(g, l === window || l === document || n.useGlobalTarget || fg(l, g.target));
        },
        d = (g) => {
          c(g, !1);
        };
      (window.addEventListener('pointerup', f, i), window.addEventListener('pointercancel', d, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener('pointerdown', s, i),
        Iu(a) &&
          (a.addEventListener('focus', (u) => nk(u, i)),
          !tk(a) && !a.hasAttribute('tabindex') && (a.tabIndex = 0)));
    }),
    o
  );
}
function dg(e) {
  return Pm(e) && 'ownerSVGElement' in e;
}
function ik(e) {
  return dg(e) && e.tagName === 'svg';
}
const ge = (e) => !!(e && e.getVelocity),
  ok = [...og, te, bt],
  sk = (e) => ok.find(ig(e)),
  Uu = y.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' });
class ak extends y.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (Iu(r) && r.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function lk({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = y.useId(),
    o = y.useRef(null),
    s = y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = y.useContext(Uu);
  return (
    y.useInsertionEffect(() => {
      const { width: l, height: u, top: c, left: f, right: d } = s.current;
      if (t || !o.current || !l || !u) return;
      const g = n === 'left' ? `left: ${f}` : `right: ${d}`;
      o.current.dataset.motionPopId = i;
      const v = document.createElement('style');
      a && (v.nonce = a);
      const w = r ?? document.head;
      return (
        w.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${g}px !important;
            top: ${c}px !important;
          }
        `),
        () => {
          (w.removeChild(v), w.contains(v) && w.removeChild(v));
        }
      );
    }, [t]),
    E.jsx(ak, { isPresent: t, childRef: o, sizeRef: s, children: y.cloneElement(e, { ref: o }) })
  );
}
const uk = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  root: l,
}) => {
  const u = vu(ck),
    c = y.useId();
  let f = !0,
    d = y.useMemo(
      () => (
        (f = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (g) => {
            u.set(g, !0);
            for (const v of u.values()) if (!v) return;
            r && r();
          },
          register: (g) => (u.set(g, !1), () => u.delete(g)),
        }
      ),
      [n, u, r],
    );
  return (
    o && f && (d = { ...d }),
    y.useMemo(() => {
      u.forEach((g, v) => u.set(v, !1));
    }, [n]),
    y.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    s === 'popLayout' && (e = E.jsx(lk, { isPresent: n, anchorX: a, root: l, children: e })),
    E.jsx(us.Provider, { value: d, children: e })
  );
};
function ck() {
  return new Map();
}
function hg(e = !0) {
  const t = y.useContext(us);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = y.useId();
  y.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = y.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const bi = (e) => e.key || '';
function Wf(e) {
  const t = [];
  return (
    y.Children.forEach(e, (n) => {
      y.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const fk = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = 'sync',
    propagate: s = !1,
    anchorX: a = 'left',
    root: l,
  }) => {
    const [u, c] = hg(s),
      f = y.useMemo(() => Wf(e), [e]),
      d = s && !u ? [] : f.map(bi),
      g = y.useRef(!0),
      v = y.useRef(f),
      w = vu(() => new Map()),
      [k, p] = y.useState(f),
      [h, m] = y.useState(f);
    Em(() => {
      ((g.current = !1), (v.current = f));
      for (let P = 0; P < h.length; P++) {
        const T = bi(h[P]);
        d.includes(T) ? w.delete(T) : w.get(T) !== !0 && w.set(T, !1);
      }
    }, [h, d.length, d.join('-')]);
    const x = [];
    if (f !== k) {
      let P = [...f];
      for (let T = 0; T < h.length; T++) {
        const C = h[T],
          A = bi(C);
        d.includes(A) || (P.splice(T, 0, C), x.push(C));
      }
      return (o === 'wait' && x.length && (P = x), m(Wf(P)), p(f), null);
    }
    const { forceRender: S } = y.useContext(yu);
    return E.jsx(E.Fragment, {
      children: h.map((P) => {
        const T = bi(P),
          C = s && !u ? !1 : f === h || d.includes(T),
          A = () => {
            if (w.has(T)) w.set(T, !0);
            else return;
            let D = !0;
            (w.forEach((H) => {
              H || (D = !1);
            }),
              D && (S == null || S(), m(v.current), s && (c == null || c()), r && r()));
          };
        return E.jsx(
          uk,
          {
            isPresent: C,
            initial: !g.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: o,
            root: l,
            onExitComplete: C ? void 0 : A,
            anchorX: a,
            children: P,
          },
          T,
        );
      }),
    });
  },
  pg = y.createContext({ strict: !1 }),
  Hf = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  er = {};
for (const e in Hf) er[e] = { isEnabled: (t) => Hf[e].some((n) => !!t[n]) };
function dk(e) {
  for (const t in e) er[t] = { ...er[t], ...e[t] };
}
const hk = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function $o(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    hk.has(e)
  );
}
let mg = (e) => !$o(e);
function pk(e) {
  typeof e == 'function' && (mg = (t) => (t.startsWith('on') ? !$o(t) : e(t)));
}
try {
  pk(require('@emotion/is-prop-valid').default);
} catch {}
function mk(e, t, n) {
  const r = {};
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((mg(i) ||
        (n === !0 && $o(i)) ||
        (!t && !$o(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
function gk(e) {
  if (typeof Proxy > 'u') return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) => (i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i))),
  });
}
const cs = y.createContext({});
function fs(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
function ai(e) {
  return typeof e == 'string' || Array.isArray(e);
}
const Wu = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Hu = ['initial', ...Wu];
function ds(e) {
  return fs(e.animate) || Hu.some((t) => ai(e[t]));
}
function gg(e) {
  return !!(ds(e) || e.variants);
}
function yk(e, t) {
  if (ds(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || ai(n) ? n : void 0, animate: ai(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function vk(e) {
  const { initial: t, animate: n } = yk(e, y.useContext(cs));
  return y.useMemo(() => ({ initial: t, animate: n }), [Kf(t), Kf(n)]);
}
function Kf(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const wk = Symbol.for('motionComponentSymbol');
function On(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function xk(e, t, n) {
  return y.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : On(n) && (n.current = r)));
    },
    [t],
  );
}
const Ku = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Sk = 'framerAppearId',
  yg = 'data-' + Ku(Sk),
  vg = y.createContext({});
function kk(e, t, n, r, i) {
  var w, k;
  const { visualElement: o } = y.useContext(cs),
    s = y.useContext(pg),
    a = y.useContext(us),
    l = y.useContext(Uu).reducedMotion,
    u = y.useRef(null);
  ((r = r || s.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  const c = u.current,
    f = y.useContext(vg);
  c && !c.projection && i && (c.type === 'html' || c.type === 'svg') && Ek(u.current, n, i, f);
  const d = y.useRef(!1);
  y.useInsertionEffect(() => {
    c && d.current && c.update(n, a);
  });
  const g = n[yg],
    v = y.useRef(
      !!g &&
        !((w = window.MotionHandoffIsComplete) != null && w.call(window, g)) &&
        ((k = window.MotionHasOptimisedAnimation) == null ? void 0 : k.call(window, g)),
    );
  return (
    Em(() => {
      c &&
        ((d.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        Bu.render(c.render),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    y.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null || p.call(window, g);
          }),
          (v.current = !1)));
    }),
    c
  );
}
function Ek(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(e.latestValues, t['data-framer-portal-id'] ? void 0 : wg(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && On(a)),
      visualElement: e,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function wg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : wg(e.parent);
}
function Ck({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && dk(e);
  function o(a, l) {
    let u;
    const c = { ...y.useContext(Uu), ...a, layoutId: Pk(a) },
      { isStatic: f } = c,
      d = vk(a),
      g = r(a, f);
    if (!f && wu) {
      Tk();
      const v = Rk(c);
      ((u = v.MeasureLayout), (d.visualElement = kk(i, g, c, t, v.ProjectionNode)));
    }
    return E.jsxs(cs.Provider, {
      value: d,
      children: [
        u && d.visualElement ? E.jsx(u, { visualElement: d.visualElement, ...c }) : null,
        n(i, a, xk(g, d.visualElement, l), g, f, d.visualElement),
      ],
    });
  }
  o.displayName = `motion.${typeof i == 'string' ? i : `create(${i.displayName ?? i.name ?? ''})`}`;
  const s = y.forwardRef(o);
  return ((s[wk] = i), s);
}
function Pk({ layoutId: e }) {
  const t = y.useContext(yu).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function Tk(e, t) {
  y.useContext(pg).strict;
}
function Rk(e) {
  const { drag: t, layout: n } = er;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const li = {};
function Mk(e) {
  for (const t in e) ((li[t] = e[t]), Ru(t) && (li[t].isCSSVariable = !0));
}
function xg(e, { layout: t, layoutId: n }) {
  return (
    ur.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!li[e] || e === 'opacity'))
  );
}
const Lk = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  Dk = lr.length;
function Ak(e, t, n) {
  let r = '',
    i = !0;
  for (let o = 0; o < Dk; o++) {
    const s = lr[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == 'number'
        ? (l = a === (s.startsWith('scale') ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = lg(a, zu[s]);
      if (!l) {
        i = !1;
        const c = Lk[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r);
}
function bu(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (ur.has(l)) {
      s = !0;
      continue;
    } else if (Ru(l)) {
      i[l] = u;
      continue;
    } else {
      const c = lg(u, zu[l]);
      l.startsWith('origin') ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n ? (r.transform = Ak(t, e.transform, n)) : r.transform && (r.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Qu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Sg(e, t, n) {
  for (const r in t) !ge(t[r]) && !xg(r, n) && (e[r] = t[r]);
}
function Nk({ transformTemplate: e }, t) {
  return y.useMemo(() => {
    const n = Qu();
    return (bu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function _k(e, t) {
  const n = e.style || {},
    r = {};
  return (Sg(r, n, e), Object.assign(r, Nk(e, t)), r);
}
function Vk(e, t) {
  const n = {},
    r = _k(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const jk = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Ok = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function Ik(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? jk : Ok;
  e[o.offset] = N.transform(-r);
  const s = N.transform(t),
    a = N.transform(n);
  e[o.array] = `${s} ${a}`;
}
function kg(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: o = 1, pathOffset: s = 0, ...a },
  l,
  u,
  c,
) {
  if ((bu(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: d } = e;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? '50% 50%'), delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? 'fill-box'),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && Ik(f, i, o, s, !1));
}
const Eg = () => ({ ...Qu(), attrs: {} }),
  Cg = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function Fk(e, t, n, r) {
  const i = y.useMemo(() => {
    const o = Eg();
    return (kg(o, t, Cg(r), e.transformTemplate, e.style), { ...o.attrs, style: { ...o.style } });
  }, [t]);
  if (e.style) {
    const o = {};
    (Sg(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const zk = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Yu(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(zk.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Bk(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Yu(n) ? Fk : Vk)(r, o, s, n),
      u = mk(r, typeof n == 'string', e),
      c = n !== y.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = y.useMemo(() => (ge(f) ? f.get() : f), [f]);
    return y.createElement(n, { ...c, children: d });
  };
}
function bf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Gu(e, t, n, r) {
  if (typeof t == 'function') {
    const [i, o] = bf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if ((typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')) {
    const [i, o] = bf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function co(e) {
  return ge(e) ? e.get() : e;
}
function $k({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: Uk(n, r, i, e), renderState: t() };
}
const Pg = (e) => (t, n) => {
  const r = y.useContext(cs),
    i = y.useContext(us),
    o = () => $k(e, t, r, i);
  return n ? o() : vu(o);
};
function Uk(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = co(o[d]);
  let { initial: s, animate: a } = e;
  const l = ds(e),
    u = gg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != 'boolean' && !fs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const v = Gu(e, d[g]);
      if (v) {
        const { transitionEnd: w, transition: k, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[h] = m);
        }
        for (const h in w) i[h] = w[h];
      }
    }
  }
  return i;
}
function Xu(e, t, n) {
  var o;
  const { style: r } = e,
    i = {};
  for (const s in r)
    (ge(r[s]) ||
      (t.style && ge(t.style[s])) ||
      xg(s, e) ||
      ((o = n == null ? void 0 : n.getValue(s)) == null ? void 0 : o.liveStyle) !== void 0) &&
      (i[s] = r[s]);
  return i;
}
const Wk = { useVisualState: Pg({ scrapeMotionValuesFromProps: Xu, createRenderState: Qu }) };
function Tg(e, t, n) {
  const r = Xu(e, t, n);
  for (const i in e)
    if (ge(e[i]) || ge(t[i])) {
      const o = lr.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
const Hk = { useVisualState: Pg({ scrapeMotionValuesFromProps: Tg, createRenderState: Eg }) };
function Kk(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Yu(r) ? Hk : Wk),
      preloadedFeatures: e,
      useRender: Bk(i),
      createVisualElement: t,
      Component: r,
    };
    return Ck(s);
  };
}
function ui(e, t, n) {
  const r = e.getProps();
  return Gu(r, t, n !== void 0 ? n : r.custom, e);
}
const ll = (e) => Array.isArray(e);
function bk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jn(n));
}
function Qk(e) {
  return ll(e) ? e[e.length - 1] || 0 : e;
}
function Yk(e, t) {
  const n = ui(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Qk(o[s]);
    bk(e, s, a);
  }
}
function Gk(e) {
  return !!(ge(e) && e.add);
}
function ul(e, t) {
  const n = e.getValue('willChange');
  if (Gk(n)) return n.add(t);
  if (!n && Et.WillChange) {
    const r = new Et.WillChange('auto');
    (e.addValue('willChange', r), r.add(t));
  }
}
function Rg(e) {
  return e.props[yg];
}
const Xk = (e) => e !== null;
function Zk(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(Xk),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const qk = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Jk = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eE = { type: 'keyframes', duration: 0.8 },
  tE = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nE = (e, { keyframes: t }) =>
    t.length > 2 ? eE : ur.has(e) ? (e.startsWith('scale') ? Jk(t[1]) : qk) : tE;
function rE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Zu =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Fu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - st(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    (rE(a) || Object.assign(c, nE(e, c)),
      c.duration && (c.duration = st(c.duration)),
      c.repeatDelay && (c.repeatDelay = st(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      (Et.instantAnimations || Et.skipAnimations) && ((f = !0), (c.duration = 0), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !o && t.get() !== void 0)
    ) {
      const d = Zk(c.keyframes, a);
      if (d !== void 0) {
        W.update(() => {
          (c.onUpdate(d), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new ju(c) : new OS(c);
  };
function iE({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Mg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const f = e.getValue(c, e.latestValues[c] ?? null),
      d = a[c];
    if (d === void 0 || (u && iE(u, c))) continue;
    const g = { delay: n, ...Fu(o || {}, c) },
      v = f.get();
    if (v !== void 0 && !f.isAnimating && !Array.isArray(d) && d === v && !g.velocity) continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const p = Rg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, c, W);
        h !== null && ((g.startTime = h), (w = !0));
      }
    }
    (ul(e, c), f.start(Zu(c, f, d, e.shouldReduceMotion && rg.has(c) ? { type: !1 } : g, e, w)));
    const k = f.animation;
    k && l.push(k);
  }
  return (
    s &&
      Promise.all(l).then(() => {
        W.update(() => {
          s && Yk(e, s);
        });
      }),
    l
  );
}
function cl(e, t, n = {}) {
  var l;
  const r = ui(
    e,
    t,
    n.type === 'exit' ? ((l = e.presenceContext) == null ? void 0 : l.custom) : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Mg(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = i;
            return oE(e, t, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function oE(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [],
    l = e.variantChildren.size,
    u = (l - 1) * i,
    c = typeof r == 'function',
    f = c ? (d) => r(d, l) : o === 1 ? (d = 0) => d * i : (d = 0) => u - d * i;
  return (
    Array.from(e.variantChildren)
      .sort(sE)
      .forEach((d, g) => {
        (d.notify('AnimationStart', t),
          a.push(
            cl(d, t, { ...s, delay: n + (c ? 0 : r) + f(g) }).then(() =>
              d.notify('AnimationComplete', t),
            ),
          ));
      }),
    Promise.all(a)
  );
}
function sE(e, t) {
  return e.sortNodePosition(t);
}
function aE(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => cl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = cl(e, t, n);
  else {
    const i = typeof t == 'function' ? ui(e, t, n.custom) : t;
    r = Promise.all(Mg(e, i, n));
  }
  return r.then(() => {
    e.notify('AnimationComplete', t);
  });
}
function Lg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const lE = Hu.length;
function Dg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Dg(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < lE; n++) {
    const r = Hu[n],
      i = e.props[r];
    (ai(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const uE = [...Wu].reverse(),
  cE = Wu.length;
function fE(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => aE(e, n, r)));
}
function dE(e) {
  let t = fE(e),
    n = Qf(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = ui(
      e,
      c,
      l === 'exit' ? ((d = e.presenceContext) == null ? void 0 : d.custom) : void 0,
    );
    if (f) {
      const { transition: g, transitionEnd: v, ...w } = f;
      u = { ...u, ...w, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Dg(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      v = 1 / 0;
    for (let k = 0; k < cE; k++) {
      const p = uE[k],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        x = ai(m),
        S = p === l ? h.isActive : null;
      S === !1 && (v = k);
      let P = m === c[p] && m !== u[p] && x;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) || (!m && !h.prevProp) || fs(m) || typeof m == 'boolean')
      )
        continue;
      const T = hE(h.prevProp, m);
      let C = T || (p === l && h.isActive && !P && x) || (k > v && x),
        A = !1;
      const D = Array.isArray(m) ? m : [m];
      let H = D.reduce(i(p), {});
      S === !1 && (H = {});
      const { prevResolvedValues: Tt = {} } = h,
        Zt = { ...Tt, ...H },
        cr = (re) => {
          ((C = !0), d.has(re) && ((A = !0), d.delete(re)), (h.needsAnimating[re] = !0));
          const M = e.getValue(re);
          M && (M.liveStyle = !1);
        };
      for (const re in Zt) {
        const M = H[re],
          _ = Tt[re];
        if (g.hasOwnProperty(re)) continue;
        let V = !1;
        (ll(M) && ll(_) ? (V = !Lg(M, _)) : (V = M !== _),
          V
            ? M != null
              ? cr(re)
              : d.add(re)
            : M !== void 0 && d.has(re)
              ? cr(re)
              : (h.protectedKeys[re] = !0));
      }
      ((h.prevProp = m),
        (h.prevResolvedValues = H),
        h.isActive && (g = { ...g, ...H }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!(P && T) || A) &&
          f.push(...D.map((re) => ({ animation: re, options: { type: p } }))));
    }
    if (d.size) {
      const k = {};
      if (typeof u.initial != 'boolean') {
        const p = ui(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (k.transition = p.transition);
      }
      (d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        (m && (m.liveStyle = !0), (k[p] = h ?? null));
      }),
        f.push({ animation: k }));
    }
    let w = !!f.length;
    return (
      r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (w = !1),
      (r = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    ((f = e.variantChildren) == null ||
      f.forEach((d) => {
        var g;
        return (g = d.animationState) == null ? void 0 : g.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Qf()), (r = !0));
    },
  };
}
function hE(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Lg(t, e) : !1;
}
function en(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Qf() {
  return {
    animate: en(!0),
    whileInView: en(),
    whileHover: en(),
    whileTap: en(),
    whileDrag: en(),
    whileFocus: en(),
    exit: en(),
  };
}
class Xt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class pE extends Xt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = dE(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    fs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this));
  }
}
let mE = 0;
class gE extends Xt {
  constructor() {
    (super(...arguments), (this.id = mE++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive('exit', !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const yE = { animation: { Feature: pE }, exit: { Feature: gE } };
function ci(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ki(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const vE = (e) => (t) => $u(t) && e(t, ki(t));
function Ir(e, t, n, r) {
  return ci(e, t, vE(n), r);
}
function Ag({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function wE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function xE(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
const Ng = 1e-4,
  SE = 1 - Ng,
  kE = 1 + Ng,
  _g = 0.01,
  EE = 0 - _g,
  CE = 0 + _g;
function xe(e) {
  return e.max - e.min;
}
function PE(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Yf(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = b(t.min, t.max, e.origin)),
    (e.scale = xe(n) / xe(t)),
    (e.translate = b(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= SE && e.scale <= kE) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= EE && e.translate <= CE) || isNaN(e.translate)) && (e.translate = 0));
}
function Fr(e, t, n, r) {
  (Yf(e.x, t.x, n.x, r ? r.originX : void 0), Yf(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Gf(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + xe(t)));
}
function TE(e, t, n) {
  (Gf(e.x, t.x, n.x), Gf(e.y, t.y, n.y));
}
function Xf(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + xe(t)));
}
function zr(e, t, n) {
  (Xf(e.x, t.x, n.x), Xf(e.y, t.y, n.y));
}
const Zf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  In = () => ({ x: Zf(), y: Zf() }),
  qf = () => ({ min: 0, max: 0 }),
  J = () => ({ x: qf(), y: qf() });
function Ie(e) {
  return [e('x'), e('y')];
}
function Gs(e) {
  return e === void 0 || e === 1;
}
function fl({ scale: e, scaleX: t, scaleY: n }) {
  return !Gs(e) || !Gs(t) || !Gs(n);
}
function on(e) {
  return fl(e) || Vg(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Vg(e) {
  return Jf(e.x) || Jf(e.y);
}
function Jf(e) {
  return e && e !== '0%';
}
function Uo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ed(e, t, n, r, i) {
  return (i !== void 0 && (e = Uo(e, i, r)), Uo(e, n, r) + t);
}
function dl(e, t = 0, n = 1, r, i) {
  ((e.min = ed(e.min, t, n, r, i)), (e.max = ed(e.max, t, n, r, i)));
}
function jg(e, { x: t, y: n }) {
  (dl(e.x, t.translate, t.scale, t.originPoint), dl(e.y, n.translate, n.scale, n.originPoint));
}
const td = 0.999999999999,
  nd = 1.0000000000001;
function RE(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), jg(e, s)),
      r && on(o.latestValues) && zn(e, o.latestValues));
  }
  (t.x < nd && t.x > td && (t.x = 1), t.y < nd && t.y > td && (t.y = 1));
}
function Fn(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function rd(e, t, n, r, i = 0.5) {
  const o = b(e.min, e.max, i);
  dl(e, t, n, o, r);
}
function zn(e, t) {
  (rd(e.x, t.x, t.scaleX, t.scale, t.originX), rd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Og(e, t) {
  return Ag(xE(e.getBoundingClientRect(), t));
}
function ME(e, t, n) {
  const r = Og(e, n),
    { scroll: i } = t;
  return (i && (Fn(r.x, i.offset.x), Fn(r.y, i.offset.y)), r);
}
const Ig = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  id = (e, t) => Math.abs(e - t);
function LE(e, t) {
  const n = id(e.x, t.x),
    r = id(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Fg {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Zs(this.lastMoveEventInfo, this.history),
          g = this.startEvent !== null,
          v = LE(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!g && !v) return;
        const { point: w } = d,
          { timestamp: k } = ce;
        this.history.push({ ...w, timestamp: k });
        const { onStart: p, onMove: h } = this.handlers;
        (g || (p && p(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, d));
      }),
      (this.handlePointerMove = (d, g) => {
        ((this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Xs(g, this.transformPagePoint)),
          W.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (d, g) => {
        this.end();
        const { onEnd: v, onSessionEnd: w, resumeAnimation: k } = this.handlers;
        if ((this.dragSnapToOrigin && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const p = Zs(
          d.type === 'pointercancel' ? this.lastMoveEventInfo : Xs(g, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && v && v(d, p), w && w(d, p));
      }),
      !$u(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window));
    const a = ki(t),
      l = Xs(a, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = ce;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: f } = n;
    (f && f(t, Zs(l, this.history)),
      (this.removeListeners = wi(
        Ir(this.contextWindow, 'pointermove', this.handlePointerMove),
        Ir(this.contextWindow, 'pointerup', this.handlePointerUp),
        Ir(this.contextWindow, 'pointercancel', this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Kt(this.updatePoint));
  }
}
function Xs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function od(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Zs({ point: e }, t) {
  return { point: e, delta: od(e, zg(t)), offset: od(e, DE(t)), velocity: AE(t, 0.1) };
}
function DE(e) {
  return e[0];
}
function zg(e) {
  return e[e.length - 1];
}
function AE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = zg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > st(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = at(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function NE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? b(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? b(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function sd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function _E(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: sd(e.x, n, i), y: sd(e.y, t, r) };
}
function ad(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function VE(e, t) {
  return { x: ad(e.x, t.x), y: ad(e.y, t.y) };
}
function jE(e, t) {
  let n = 0.5;
  const r = xe(e),
    i = xe(t);
  return (
    i > r ? (n = ii(t.min, t.max - r, e.min)) : r > i && (n = ii(e.min, e.max - i, t.min)),
    kt(0, 1, n)
  );
}
function OE(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hl = 0.35;
function IE(e = hl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hl),
    { x: ld(e, 'left', 'right'), y: ld(e, 'top', 'bottom') }
  );
}
function ld(e, t, n) {
  return { min: ud(e, t), max: ud(e, n) };
}
function ud(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const FE = new WeakMap();
class zE {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = J()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (f) => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ki(f).point));
      },
      s = (f, d) => {
        const { drag: g, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          g &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = qS(g)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (lt.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const x = m.layout.layoutBox[p];
                x && (h = xe(x) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          w && W.postRender(() => w(f, d)),
          ul(this.visualElement, 'transform'));
        const { animationState: k } = this.visualElement;
        k && k.setActive('whileDrag', !0);
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: g,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: k,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: p } = d;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = BE(p)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis('x', d.point, p),
          this.updateAxis('y', d.point, p),
          this.visualElement.render(),
          k && k(f, d));
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () =>
        Ie((f) => {
          var d;
          return (
            this.getAnimationState(f) === 'paused' &&
            ((d = this.getAxisMotionValue(f).animation) == null ? void 0 : d.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Fg(
      t,
      { onSessionStart: o, onStart: s, onMove: a, onSessionEnd: l, resumeAnimation: u },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: Ig(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && W.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Qi(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints && this.constraints[t] && (s = NE(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    (t && On(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = _E(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = IE(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = OE(r.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = ME(r, i.root, this.visualElement.getTransformPagePoint());
    let s = VE(i.layout.layoutBox, o);
    if (n) {
      const a = n(wE(s));
      ((this.hasMutatedConstraints = !!a), a && (s = Ag(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ie((c) => {
        if (!Qi(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (ul(this.visualElement, t), r.start(Zu(t, r, 0, n, this.visualElement, !1)));
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!Qi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - b(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!On(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = jE({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((s) => {
        if (!Qi(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(b(l, u, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    FE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ir(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        On(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), W.read(r));
    const s = ci(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (Ie((c) => {
            const f = this.getAxisMotionValue(c);
            f && ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = hl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Qi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function BE(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n);
}
class $E extends Xt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new zE(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const cd = (e) => (t, n) => {
  e && W.postRender(() => e(t, n));
};
class UE extends Xt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ue));
  }
  onPointerDown(t) {
    this.session = new Fg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ig(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: cd(t),
      onStart: cd(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && W.postRender(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ir(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const fo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function fd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const xr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const n = fd(e, t.target.x),
        r = fd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  WE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = bt.parse(e);
      if (i.length > 5) return r;
      const o = bt.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = b(a, l, 0.5);
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= u),
        typeof i[3 + s] == 'number' && (i[3 + s] /= u),
        o(i)
      );
    },
  };
let dd = !1;
class HE extends y.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: o } = t;
    (Mk(KE),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        dd && o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (fo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        (dd = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              W.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Bu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Bg(e) {
  const [t, n] = hg(),
    r = y.useContext(yu);
  return E.jsx(HE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: y.useContext(vg),
    isPresent: t,
    safeToRemove: n,
  });
}
const KE = {
  borderRadius: {
    ...xr,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: xr,
  borderTopRightRadius: xr,
  borderBottomLeftRadius: xr,
  borderBottomRightRadius: xr,
  boxShadow: WE,
};
function bE(e, t, n) {
  const r = ge(e) ? e : Jn(e);
  return (r.start(Zu('', r, t, n)), r.animation);
}
const QE = (e, t) => e.depth - t.depth;
class YE {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (xu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Su(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(QE), (this.isDirty = !1), this.children.forEach(t));
  }
}
function GE(e, t) {
  const n = Te.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Kt(r), e(o - t));
    };
  return (W.setup(r, !0), () => Kt(r));
}
const $g = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  XE = $g.length,
  hd = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  pd = (e) => typeof e == 'number' || N.test(e);
function ZE(e, t, n, r, i, o) {
  i
    ? ((e.opacity = b(0, n.opacity ?? 1, qE(r))), (e.opacityExit = b(t.opacity ?? 1, 0, JE(r))))
    : o && (e.opacity = b(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < XE; s++) {
    const a = `border${$g[s]}Radius`;
    let l = md(t, a),
      u = md(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || pd(l) === pd(u)
        ? ((e[a] = Math.max(b(hd(l), hd(u), r), 0)), (lt.test(u) || lt.test(l)) && (e[a] += '%'))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = b(t.rotate || 0, n.rotate || 0, r));
}
function md(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const qE = Ug(0, 0.5, Vm),
  JE = Ug(0.5, 0.95, Ue);
function Ug(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ii(e, t, r)));
}
function gd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Oe(e, t) {
  (gd(e.x, t.x), gd(e.y, t.y));
}
function yd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function vd(e, t, n, r, i) {
  return ((e -= t), (e = Uo(e, 1 / n, r)), i !== void 0 && (e = Uo(e, 1 / i, r)), e);
}
function eC(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (lt.test(t) && ((t = parseFloat(t)), (t = b(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = b(o.min, o.max, r);
  (e === o && (a -= t), (e.min = vd(e.min, t, n, a, i)), (e.max = vd(e.max, t, n, a, i)));
}
function wd(e, t, [n, r, i], o, s) {
  eC(e, t[n], t[r], t[i], t.scale, o, s);
}
const tC = ['x', 'scaleX', 'originX'],
  nC = ['y', 'scaleY', 'originY'];
function xd(e, t, n, r) {
  (wd(e.x, t, tC, n ? n.x : void 0, r ? r.x : void 0),
    wd(e.y, t, nC, n ? n.y : void 0, r ? r.y : void 0));
}
function Sd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Wg(e) {
  return Sd(e.x) && Sd(e.y);
}
function kd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function rC(e, t) {
  return kd(e.x, t.x) && kd(e.y, t.y);
}
function Ed(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Hg(e, t) {
  return Ed(e.x, t.x) && Ed(e.y, t.y);
}
function Cd(e) {
  return xe(e.x) / xe(e.y);
}
function Pd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class iC {
  constructor() {
    this.members = [];
  }
  add(t) {
    (xu(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if ((Su(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function oC(e, t, n) {
  let r = '';
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: v } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none');
}
const qs = ['', 'X', 'Y', 'Z'],
  sC = 1e3;
let aC = 0;
function Js(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Kg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Rg(t);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', W, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Kg(r);
}
function bg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = aC++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(cC),
            this.nodes.forEach(pC),
            this.nodes.forEach(mC),
            this.nodes.forEach(fC));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new YE());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Cu()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = dg(s) && !ik(s)), (this.instance = s));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (W.read(() => {
          f = window.innerWidth;
        }),
          e(s, () => {
            const g = window.innerWidth;
            g !== f &&
              ((f = g),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = GE(d, 250)),
              fo.hasAnimatedSinceResize &&
                ((fo.hasAnimatedSinceResize = !1), this.nodes.forEach(Md)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: g }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v = this.options.transition || u.getDefaultTransition() || xC,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: k } = u.getProps(),
                p = !this.targetLayout || !Hg(this.targetLayout, g),
                h = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const m = { ...Fu(v, 'layout'), onPlay: w, onComplete: k };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((m.delay = 0), (m.type = !1)),
                  this.startAnimation(m),
                  this.setAnimationOrigin(c, h));
              } else
                (f || Md(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = g;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Kt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(gC), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Kg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate'));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Td));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Rd);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(hC),
            this.nodes.forEach(lC),
            this.nodes.forEach(uC))
          : this.nodes.forEach(Rd),
        this.clearAllSnapshots());
      const a = Te.now();
      ((ce.delta = kt(0, 1e3 / 60, a - ce.timestamp)),
        (ce.timestamp = a),
        (ce.isProcessing = !0),
        Ws.update.process(ce),
        Ws.preRender.process(ce),
        Ws.render.process(ce),
        (ce.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Bu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(dC), this.sharedNodes.forEach(yC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !xe(this.snapshot.measuredBox.x) &&
          !xe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Wg(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || on(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        SC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return J();
      const a = s.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(kC))) {
        const { scroll: c } = this.root;
        c && (Fn(a.x, c.offset.x), Fn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = J();
      if ((Oe(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Oe(a, s), Fn(a.x, f.offset.x), Fn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = J();
      Oe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          on(c.latestValues) && zn(l, c.latestValues));
      }
      return (on(this.latestValues) && zn(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = J();
      Oe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !on(u.latestValues)) continue;
        fl(u.latestValues) && u.updateSnapshot();
        const c = J(),
          f = u.measurePageBox();
        (Oe(c, f), xd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (on(this.latestValues) && xd(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var d;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((d = this.parent) != null && d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ce.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              zr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = J()), (this.targetWithTransforms = J())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              TE(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                jg(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const g = this.getClosestProjectingParent();
          g &&
          !!g.resumingFrom == !!this.resumingFrom &&
          !g.options.layoutScroll &&
          g.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              zr(this.relativeTargetOrigin, this.target, g.target),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || fl(this.parent.latestValues) || Vg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty || ((v = this.parent) != null && v.isProjectionDirty)) && (l = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === ce.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (RE(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = J())));
      const { target: g } = s;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (yd(this.prevProjectionDelta.x, this.projectionDelta.x),
          yd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Fr(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !Pd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Pd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', g)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = In()),
        (this.projectionDelta = In()),
        (this.projectionDeltaWithTransform = In()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = In();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = J(),
        g = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        w = g !== v,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(w && !p && this.options.crossfade === !0 && !this.path.some(wC));
      this.animationProgress = 0;
      let m;
      ((this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        (Ld(f.x, s.x, S),
          Ld(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (zr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            vC(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && rC(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = J()),
            Oe(m, this.relativeTarget)),
          w && ((this.animationValues = c), ZE(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      var a, l, u;
      (this.notifyListeners('animationStart'),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
        this.pendingAnimation && (Kt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          ((fo.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Jn(0)),
            (this.currentAnimation = bE(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete'));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(sC), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Qg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || J();
          const f = xe(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + f));
          const d = xe(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + d));
        }
        (Oe(a, l), zn(a, c), Fr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new iC()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Js('z', s, u, this.animationValues);
      for (let c = 0; c < qs.length; c++)
        (Js(`rotate${qs[c]}`, s, u, this.animationValues),
          Js(`skew${qs[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = 'hidden';
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ''),
          (s.opacity = ''),
          (s.pointerEvents = co(a == null ? void 0 : a.pointerEvents) || ''),
          (s.transform = l ? l(this.latestValues, '') : 'none'));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (s.pointerEvents = co(a == null ? void 0 : a.pointerEvents) || '')),
          this.hasProjected &&
            !on(this.latestValues) &&
            ((s.transform = l ? l({}, '') : 'none'), (this.hasProjected = !1)));
        return;
      }
      s.visibility = '';
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = oC(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (s.transform = f));
      const { x: d, y: g } = this.projectionDelta;
      ((s.transformOrigin = `${d.origin * 100}% ${g.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ''
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in li) {
        if (c[v] === void 0) continue;
        const { correct: w, applyTo: k, isCSSVariable: p } = li[v],
          h = f === 'none' ? c[v] : w(c[v], u);
        if (k) {
          const m = k.length;
          for (let x = 0; x < m; x++) s[k[x]] = h;
        } else p ? (this.options.visualElement.renderState.vars[v] = h) : (s[v] = h);
      }
      this.options.layoutId &&
        (s.pointerEvents = u === this ? co(a == null ? void 0 : a.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Td),
        this.root.sharedNodes.clear());
    }
  };
}
function lC(e) {
  e.updateLayout();
}
function uC(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === 'size'
      ? Ie((f) => {
          const d = s ? t.measuredBox[f] : t.layoutBox[f],
            g = xe(d);
          ((d.min = r[f].min), (d.max = d.min + g));
        })
      : Qg(o, t.layoutBox, r) &&
        Ie((f) => {
          const d = s ? t.measuredBox[f] : t.layoutBox[f],
            g = xe(r[f]);
          ((d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
        });
    const a = In();
    Fr(a, r, t.layoutBox);
    const l = In();
    s ? Fr(l, e.applyTransform(i, !0), t.measuredBox) : Fr(l, r, t.layoutBox);
    const u = !Wg(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const v = J();
          zr(v, t.layoutBox, d.layoutBox);
          const w = J();
          (zr(w, r, g.layoutBox),
            Hg(v, w) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = w), (e.relativeTargetOrigin = v), (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function cC(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function fC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dC(e) {
  e.clearSnapshot();
}
function Td(e) {
  e.clearMeasurements();
}
function Rd(e) {
  e.isLayoutDirty = !1;
}
function hC(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform());
}
function Md(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function pC(e) {
  e.resolveTargetDelta();
}
function mC(e) {
  e.calcProjection();
}
function gC(e) {
  e.resetSkewAndRotation();
}
function yC(e) {
  e.removeLeadSnapshot();
}
function Ld(e, t, n) {
  ((e.translate = b(t.translate, 0, n)),
    (e.scale = b(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Dd(e, t, n, r) {
  ((e.min = b(t.min, n.min, r)), (e.max = b(t.max, n.max, r)));
}
function vC(e, t, n, r) {
  (Dd(e.x, t.x, n.x, r), Dd(e.y, t.y, n.y, r));
}
function wC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ad = (e) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Nd = Ad('applewebkit/') && !Ad('chrome/') ? Math.round : Ue;
function _d(e) {
  ((e.min = Nd(e.min)), (e.max = Nd(e.max)));
}
function SC(e) {
  (_d(e.x), _d(e.y));
}
function Qg(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !PE(Cd(t), Cd(n), 0.2));
}
function kC(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const EC = bg({
    attachResizeListener: (e, t) => ci(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ea = { current: void 0 },
  Yg = bg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ea.current) {
        const e = new EC({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (ea.current = e));
      }
      return ea.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  CC = { pan: { Feature: UE }, drag: { Feature: $E, ProjectionNode: Yg, MeasureLayout: Bg } };
function Vd(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    o = r[i];
  o && W.postRender(() => o(t, ki(t)));
}
class PC extends Xt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = JS(t, (n, r) => (Vd(this.node, r, 'Start'), (i) => Vd(this.node, i, 'End'))));
  }
  unmount() {}
}
class TC extends Xt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = wi(
      ci(this.node.current, 'focus', () => this.onFocus()),
      ci(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function jd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    o = r[i];
  o && W.postRender(() => o(t, ki(t)));
}
class RC extends Xt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = rk(
        t,
        (n, r) => (
          jd(this.node, r, 'Start'),
          (i, { success: o }) => jd(this.node, i, o ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const pl = new WeakMap(),
  ta = new WeakMap(),
  MC = (e) => {
    const t = pl.get(e.target);
    t && t(e);
  },
  LC = (e) => {
    e.forEach(MC);
  };
function DC({ root: e, ...t }) {
  const n = e || document;
  ta.has(n) || ta.set(n, {});
  const r = ta.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(LC, { root: e, ...t })), r[i]);
}
function AC(e, t, n) {
  const r = DC(t);
  return (
    pl.set(e, n),
    r.observe(e),
    () => {
      (pl.delete(e), r.unobserve(e));
    }
  );
}
const NC = { some: 0, all: 1 };
class _C extends Xt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : NC[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return AC(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(VC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function VC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const jC = {
    inView: { Feature: _C },
    tap: { Feature: RC },
    focus: { Feature: TC },
    hover: { Feature: PC },
  },
  OC = { layout: { ProjectionNode: Yg, MeasureLayout: Bg } },
  ml = { current: null },
  Gg = { current: !1 };
function IC() {
  if (((Gg.current = !0), !!wu))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (ml.current = e.matches);
      (e.addEventListener('change', t), t());
    } else ml.current = !1;
}
const FC = new WeakMap();
function zC(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (ge(i)) e.addValue(r, i);
    else if (ge(o)) e.addValue(r, Jn(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Jn(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Od = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class BC {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ou),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = Te.now();
        this.renderScheduledAt < d && ((this.renderScheduledAt = d), W.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = s;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ds(n)),
      (this.isVariantNode = gg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const g = f[d];
      l[d] !== void 0 && ge(g) && g.set(l[d], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      FC.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Gg.current || IC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : ml.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Kt(this.notifyUpdate),
      Kt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ur.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on('change', (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && W.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on('renderRequest', this.scheduleRender);
    let s;
    (window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), o(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = 'animation';
    for (t in er) {
      const n = er[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Od.length; r++) {
      const i = Od[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = 'on' + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    ((this.prevMotionValues = zC(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t));
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Jn(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == 'string' && (Cm(r) || Tm(r))
          ? (r = parseFloat(r))
          : !sk(r) && bt.test(n) && (r = ag(t, n)),
        this.setBaseTarget(t, ge(r) ? r.get() : r)),
      ge(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == 'string' || typeof n == 'object') {
      const s = Gu(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ge(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (this.events[t] || (this.events[t] = new Cu()), this.events[t].add(n));
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Xg extends BC {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = YS));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Zg(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function $C(e) {
  return window.getComputedStyle(e);
}
class UC extends Xg {
  constructor() {
    (super(...arguments), (this.type = 'html'), (this.renderInstance = Zg));
  }
  readValueFromInstance(t, n) {
    var r;
    if (ur.has(n)) return (r = this.projection) != null && r.isProjecting ? nl(n) : hS(t, n);
    {
      const i = $C(t),
        o = (Ru(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Og(t, n);
  }
  build(t, n, r) {
    bu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Xu(t, n, r);
  }
}
const qg = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function WC(e, t, n, r) {
  Zg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(qg.has(i) ? i : Ku(i), t.attrs[i]);
}
class HC extends Xg {
  constructor() {
    (super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = J));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ur.has(n)) {
      const r = sg(n);
      return (r && r.default) || 0;
    }
    return ((n = qg.has(n) ? n : Ku(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Tg(t, n, r);
  }
  build(t, n, r) {
    kg(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    WC(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Cg(t.tagName)), super.mount(t));
  }
}
const KC = (e, t) => (Yu(e) ? new HC(t) : new UC(t, { allowProjection: e !== y.Fragment })),
  bC = Kk({ ...yE, ...jC, ...CC, ...OC }, KC),
  QC = gk(bC),
  YC = { initial: { opacity: 0, y: 20 }, in: { opacity: 1, y: 0 }, out: { opacity: 0, y: -20 } },
  GC = { type: 'tween', ease: 'anticipate', duration: 0.5 },
  XC = () => {
    const e = y1();
    return E.jsx(fk, {
      mode: 'wait',
      children:
        e &&
        E.jsx(
          QC.div,
          {
            initial: 'initial',
            animate: 'in',
            exit: 'out',
            variants: YC,
            transition: GC,
            children: e,
          },
          e.props.children.props.match.pathname,
        ),
    });
  };
function ZC() {
  return E.jsxs('div', {
    className: 'min-h-screen bg-background',
    children: [E.jsx(cx, {}), E.jsx(XC, {})],
  });
}
class qC extends y.Component {
  constructor() {
    super(...arguments);
    Ju(this, 'state', { hasError: !1 });
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0 };
  }
  componentDidCatch(n, r) {
    console.error('Uncaught error:', n, r);
  }
  render() {
    return this.state.hasError
      ? E.jsxs('div', {
          className:
            'flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-8',
          children: [
            E.jsx('h1', {
              className: 'text-heading-1 font-bold text-destructive-foreground mb-4',
              children: 'Oops! Something went wrong.',
            }),
            E.jsx('p', {
              className: 'text-body-base text-center',
              children:
                "We're sorry, but an unexpected error occurred. Please try refreshing the page.",
            }),
          ],
        })
      : this.props.children;
  }
}
const JC = () =>
    E.jsx('section', {
      className: 'w-full px-4 md:px-8 mt-12 mb-8 md:mt-0 md:mb-12',
      children: E.jsx('div', {
        className: 'max-w-7xl mx-auto',
        children: E.jsx('h1', {
          className:
            'text-[7rem] md:text-[10rem] lg:text-[14rem] whitespace-nowrap text-nowrap font-black text-foreground leading-none tracking-tighter text-center',
          children: rt.hero_section.title,
        }),
      }),
    }),
  eP = () =>
    E.jsx('section', {
      className: 'w-full px-8 mb-16',
      children: E.jsx('div', {
        className: 'max-w-4xl mx-auto relative',
        children: E.jsxs('div', {
          className: 'relative overflow-hidden rounded-lg',
          children: [
            E.jsx('img', {
              src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200',
              alt: rt.hero_image.alt_text,
              className: 'w-full h-[600px] object-cover',
            }),
            E.jsx('div', {
              className: 'absolute inset-0 flex items-center justify-center',
              children: E.jsxs('button', {
                className: 'group relative',
                children: [
                  E.jsx('div', {
                    className:
                      'w-24 h-24 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group-hover:scale-110',
                    children: E.jsxs('div', {
                      className: 'text-white text-xs font-medium text-center leading-tight',
                      children: [
                        E.jsx('div', { children: rt.hero_image.play_button_text_line1 }),
                        E.jsx('div', { children: rt.hero_image.play_button_text_line2 }),
                      ],
                    }),
                  }),
                  E.jsx('div', {
                    className:
                      'absolute inset-0 rounded-full border-2 border-primary-foreground opacity-50 animate-ping',
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  tP = () =>
    E.jsx('section', {
      className: 'w-full px-4 md:px-8 mb-12 md:mb-16 font-mono',
      children: E.jsx('div', {
        className: 'max-w-6xl mx-auto',
        children: E.jsxs('div', {
          className: 'space-y-6',
          children: [
            E.jsx('p', {
              className: 'text-foreground leading-relaxed',
              children: rt.biography.paragraph,
            }),
            E.jsx('div', {
              className: 'pt-8 text-right',
              children: E.jsx('div', {
                className: 'text-display-md font-handwritten italic text-foreground',
                children: rt.biography.signature,
              }),
            }),
          ],
        }),
      }),
    }),
  nP = () =>
    E.jsxs('div', {
      className: 'group cursor-pointer px-4 md:px-0',
      children: [
        E.jsx('div', {
          className: 'overflow-hidden rounded-lg mb-4',
          children: E.jsx('div', { className: 'w-full h-48 bg-gray-300 animate-pulse' }),
        }),
        E.jsxs('div', {
          className: 'space-y-3',
          children: [
            E.jsxs('div', {
              className: 'flex items-center space-x-4',
              children: [
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-1/4 animate-pulse' }),
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-1/4 animate-pulse' }),
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-1/4 animate-pulse' }),
              ],
            }),
            E.jsx('div', { className: 'h-6 bg-muted-foreground rounded w-3/4 animate-pulse' }),
            E.jsxs('div', {
              className: 'space-y-2',
              children: [
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded animate-pulse' }),
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-5/6 animate-pulse' }),
              ],
            }),
            E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-1/3 animate-pulse' }),
          ],
        }),
      ],
    }),
  rP = () =>
    E.jsx('div', {
      className: 'mb-16',
      children: E.jsx('div', {
        className: 'bg-muted rounded-lg overflow-hidden animate-pulse',
        children: E.jsxs('div', {
          className: 'grid md:grid-cols-2 gap-0',
          children: [
            E.jsxs('div', {
              className: 'p-8 md:p-12 flex flex-col justify-center',
              children: [
                E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-1/3 mb-4' }),
                E.jsx('div', { className: 'h-8 bg-muted-foreground rounded w-full mb-4' }),
                E.jsx('div', { className: 'h-8 bg-muted-foreground rounded w-5/6 mb-6' }),
                E.jsxs('div', {
                  className: 'space-y-2 mb-6',
                  children: [
                    E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-full' }),
                    E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-full' }),
                    E.jsx('div', { className: 'h-4 bg-muted-foreground rounded w-3/4' }),
                  ],
                }),
                E.jsx('div', { className: 'h-6 bg-muted-foreground rounded w-1/2' }),
              ],
            }),
            E.jsx('div', { className: 'h-64 md:h-auto bg-muted-foreground' }),
          ],
        }),
      }),
    }),
  Jg = y.createContext(void 0),
  iP = ({ children: e }) => {
    const [t, n] = y.useState(!1),
      r = () => {
        n((i) => !i);
      };
    return (
      y.useEffect(() => {
        const i = (o) => {
          o.ctrlKey && o.shiftKey && o.altKey && o.key === 'D' && r();
        };
        return (
          window.addEventListener('keydown', i),
          () => {
            window.removeEventListener('keydown', i);
          }
        );
      }, []),
      E.jsx(Jg.Provider, { value: { isDebugMode: t, toggleDebugMode: r }, children: e })
    );
  },
  hP = () => {
    const e = y.useContext(Jg);
    if (!e) throw new Error('useDebug must be used within a DebugProvider');
    return e;
  },
  oP = y.lazy(() => Wo(() => import('./BlogPage-CzQ_wodQ.js'), __vite__mapDeps([0, 1]))),
  Id = y.lazy(() => Wo(() => import('./BlogPostDetail-ecCTtXJE.js'), __vite__mapDeps([2, 1]))),
  sP = y.lazy(() => Wo(() => import('./ContactPage-BFjdHpt_.js'), [])),
  aP = y.lazy(() => Wo(() => import('./QuizPage-COdTMu8q.js'), []));
Zp(document.getElementById('root')).render(
  E.jsx(y.StrictMode, {
    children: E.jsx(qC, {
      children: E.jsx(iP, {
        children: E.jsx(nw, {
          children: E.jsx(N1, {
            children: E.jsxs(rn, {
              path: '/',
              element: E.jsx(ZC, {}),
              children: [
                E.jsx(rn, {
                  index: !0,
                  element: E.jsxs(E.Fragment, {
                    children: [E.jsx(JC, {}), E.jsx(eP, {}), E.jsx(tP, {})],
                  }),
                }),
                E.jsx(rn, {
                  path: 'blogs',
                  element: E.jsx(y.Suspense, {
                    fallback: E.jsx('div', {
                      className: 'min-h-screen min-w-screen',
                      children: E.jsx(rP, {}),
                    }),
                    children: E.jsx(oP, {}),
                  }),
                }),
                E.jsx(rn, {
                  path: 'blogs/:id',
                  element: E.jsx(y.Suspense, {
                    fallback: E.jsx('div', {
                      className: 'min-h-screen min-w-screen',
                      children: E.jsx(nP, {}),
                    }),
                    children: E.jsx(Id, {}),
                  }),
                }),
                E.jsx(rn, {
                  path: 'contact',
                  element: E.jsx(y.Suspense, {
                    fallback: E.jsx('div', {
                      className: 'min-h-screen min-w-screen',
                      children: E.jsx(Id, {}),
                    }),
                    children: E.jsx(sP, {}),
                  }),
                }),
                E.jsx(rn, {
                  path: 'quizzes',
                  element: E.jsx(y.Suspense, {
                    fallback: E.jsx('div', {
                      className: 'min-h-screen min-w-screen',
                      children: E.jsx('p', { children: 'Loading...' }),
                    }),
                    children: E.jsx(aP, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  }),
);
export { ls as L, nP as S, Wo as _, hP as a, uP as c, rt as e, Fd as g, E as j, y as r, cP as u };
