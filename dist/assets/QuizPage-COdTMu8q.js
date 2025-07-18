import { c as We, g as Ft, j as V, r as Te, _ as Ar } from './index-CmpTlbqC.js';
function zr(e, n) {
  const t = {};
  return (e[e.length - 1] === '' ? [...e, ''] : e)
    .join((t.padRight ? ' ' : '') + ',' + (t.padLeft === !1 ? '' : ' '))
    .trim();
}
const vr = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Lr = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Nr = {};
function qn(e, n) {
  return (Nr.jsx ? Lr : vr).test(e);
}
const _r = /[ \t\n\f\r]/g;
function Dr(e) {
  return typeof e == 'object' ? (e.type === 'text' ? $n(e.value) : !1) : $n(e);
}
function $n(e) {
  return e.replace(_r, '') === '';
}
class je {
  constructor(n, t, r) {
    ((this.normal = t), (this.property = n), r && (this.space = r));
  }
}
je.prototype.normal = {};
je.prototype.property = {};
je.prototype.space = void 0;
function Rt(e, n) {
  const t = {},
    r = {};
  for (const i of e) (Object.assign(t, i.property), Object.assign(r, i.normal));
  return new je(t, r, n);
}
function hn(e) {
  return e.toLowerCase();
}
class Z {
  constructor(n, t) {
    ((this.attribute = t), (this.property = n));
  }
}
Z.prototype.attribute = '';
Z.prototype.booleanish = !1;
Z.prototype.boolean = !1;
Z.prototype.commaOrSpaceSeparated = !1;
Z.prototype.commaSeparated = !1;
Z.prototype.defined = !1;
Z.prototype.mustUseProperty = !1;
Z.prototype.number = !1;
Z.prototype.overloadedBoolean = !1;
Z.prototype.property = '';
Z.prototype.spaceSeparated = !1;
Z.prototype.space = void 0;
let Or = 0;
const z = we(),
  Q = we(),
  mn = we(),
  k = we(),
  R = we(),
  Pe = we(),
  ne = we();
function we() {
  return 2 ** ++Or;
}
const dn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: z,
        booleanish: Q,
        commaOrSpaceSeparated: ne,
        commaSeparated: Pe,
        number: k,
        overloadedBoolean: mn,
        spaceSeparated: R,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  nn = Object.keys(dn);
class En extends Z {
  constructor(n, t, r, i) {
    let l = -1;
    if ((super(n, t), Qn(this, 'space', i), typeof r == 'number'))
      for (; ++l < nn.length; ) {
        const o = nn[l];
        Qn(this, nn[l], (r & dn[o]) === dn[o]);
      }
  }
}
En.prototype.defined = !0;
function Qn(e, n, t) {
  t && (e[n] = t);
}
function ze(e) {
  const n = {},
    t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new En(r, e.transform(e.attributes || {}, r), i, e.space);
    (e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0),
      (n[r] = l),
      (t[hn(r)] = r),
      (t[hn(l.attribute)] = r));
  }
  return new je(n, t, e.space);
}
const Mt = ze({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Q,
    ariaAutoComplete: null,
    ariaBusy: Q,
    ariaChecked: Q,
    ariaColCount: k,
    ariaColIndex: k,
    ariaColSpan: k,
    ariaControls: R,
    ariaCurrent: null,
    ariaDescribedBy: R,
    ariaDetails: null,
    ariaDisabled: Q,
    ariaDropEffect: R,
    ariaErrorMessage: null,
    ariaExpanded: Q,
    ariaFlowTo: R,
    ariaGrabbed: Q,
    ariaHasPopup: null,
    ariaHidden: Q,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: R,
    ariaLevel: k,
    ariaLive: null,
    ariaModal: Q,
    ariaMultiLine: Q,
    ariaMultiSelectable: Q,
    ariaOrientation: null,
    ariaOwns: R,
    ariaPlaceholder: null,
    ariaPosInSet: k,
    ariaPressed: Q,
    ariaReadOnly: Q,
    ariaRelevant: null,
    ariaRequired: Q,
    ariaRoleDescription: R,
    ariaRowCount: k,
    ariaRowIndex: k,
    ariaRowSpan: k,
    ariaSelected: Q,
    ariaSetSize: k,
    ariaSort: null,
    ariaValueMax: k,
    ariaValueMin: k,
    ariaValueNow: k,
    ariaValueText: null,
    role: null,
  },
  transform(e, n) {
    return n === 'role' ? n : 'aria-' + n.slice(4).toLowerCase();
  },
});
function Bt(e, n) {
  return n in e ? e[n] : n;
}
function jt(e, n) {
  return Bt(e, n.toLowerCase());
}
const Fr = ze({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Pe,
      acceptCharset: R,
      accessKey: R,
      action: null,
      allow: null,
      allowFullScreen: z,
      allowPaymentRequest: z,
      allowUserMedia: z,
      alt: null,
      as: null,
      async: z,
      autoCapitalize: null,
      autoComplete: R,
      autoFocus: z,
      autoPlay: z,
      blocking: R,
      capture: null,
      charSet: null,
      checked: z,
      cite: null,
      className: R,
      cols: k,
      colSpan: null,
      content: null,
      contentEditable: Q,
      controls: z,
      controlsList: R,
      coords: k | Pe,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: z,
      defer: z,
      dir: null,
      dirName: null,
      disabled: z,
      download: mn,
      draggable: Q,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: z,
      formTarget: null,
      headers: R,
      height: k,
      hidden: mn,
      high: k,
      href: null,
      hrefLang: null,
      htmlFor: R,
      httpEquiv: R,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: z,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: z,
      itemId: null,
      itemProp: R,
      itemRef: R,
      itemScope: z,
      itemType: R,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: z,
      low: k,
      manifest: null,
      max: null,
      maxLength: k,
      media: null,
      method: null,
      min: null,
      minLength: k,
      multiple: z,
      muted: z,
      name: null,
      nonce: null,
      noModule: z,
      noValidate: z,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: z,
      optimum: k,
      pattern: null,
      ping: R,
      placeholder: null,
      playsInline: z,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: z,
      referrerPolicy: null,
      rel: R,
      required: z,
      reversed: z,
      rows: k,
      rowSpan: k,
      sandbox: R,
      scope: null,
      scoped: z,
      seamless: z,
      selected: z,
      shadowRootClonable: z,
      shadowRootDelegatesFocus: z,
      shadowRootMode: null,
      shape: null,
      size: k,
      sizes: null,
      slot: null,
      span: k,
      spellCheck: Q,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: k,
      step: null,
      style: null,
      tabIndex: k,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: z,
      useMap: null,
      value: Q,
      width: k,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: R,
      axis: null,
      background: null,
      bgColor: null,
      border: k,
      borderColor: null,
      bottomMargin: k,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: z,
      declare: z,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: k,
      leftMargin: k,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: k,
      marginWidth: k,
      noResize: z,
      noHref: z,
      noShade: z,
      noWrap: z,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: k,
      rules: null,
      scheme: null,
      scrolling: Q,
      standby: null,
      summary: null,
      text: null,
      topMargin: k,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: k,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: z,
      disableRemotePlayback: z,
      prefix: null,
      property: null,
      results: k,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: jt,
  }),
  Rr = ze({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: ne,
      accentHeight: k,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: k,
      amplitude: k,
      arabicForm: null,
      ascent: k,
      attributeName: null,
      attributeType: null,
      azimuth: k,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: k,
      by: null,
      calcMode: null,
      capHeight: k,
      className: R,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: k,
      diffuseConstant: k,
      direction: null,
      display: null,
      dur: null,
      divisor: k,
      dominantBaseline: null,
      download: z,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: k,
      enableBackground: null,
      end: null,
      event: null,
      exponent: k,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: k,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Pe,
      g2: Pe,
      glyphName: Pe,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: k,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: k,
      horizOriginX: k,
      horizOriginY: k,
      id: null,
      ideographic: k,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: k,
      k,
      k1: k,
      k2: k,
      k3: k,
      k4: k,
      kernelMatrix: ne,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: k,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: k,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: k,
      overlineThickness: k,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: k,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: R,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: k,
      pointsAtY: k,
      pointsAtZ: k,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ne,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ne,
      rev: ne,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ne,
      requiredFeatures: ne,
      requiredFonts: ne,
      requiredFormats: ne,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: k,
      specularExponent: k,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: k,
      strikethroughThickness: k,
      string: null,
      stroke: null,
      strokeDashArray: ne,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: k,
      strokeOpacity: k,
      strokeWidth: null,
      style: null,
      surfaceScale: k,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ne,
      tabIndex: k,
      tableValues: null,
      target: null,
      targetX: k,
      targetY: k,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ne,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: k,
      underlineThickness: k,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: k,
      values: null,
      vAlphabetic: k,
      vMathematical: k,
      vectorEffect: null,
      vHanging: k,
      vIdeographic: k,
      version: null,
      vertAdvY: k,
      vertOriginX: k,
      vertOriginY: k,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: k,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: Bt,
  }),
  Ht = ze({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(e, n) {
      return 'xlink:' + n.slice(5).toLowerCase();
    },
  }),
  Ut = ze({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: jt,
  }),
  Vt = ze({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(e, n) {
      return 'xml:' + n.slice(3).toLowerCase();
    },
  }),
  Mr = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Br = /[A-Z]/g,
  Yn = /-[a-z]/g,
  jr = /^data[-\w.:]+$/i;
function Hr(e, n) {
  const t = hn(n);
  let r = n,
    i = Z;
  if (t in e.normal) return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === 'data' && jr.test(n)) {
    if (n.charAt(4) === '-') {
      const l = n.slice(5).replace(Yn, Vr);
      r = 'data' + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = n.slice(4);
      if (!Yn.test(l)) {
        let o = l.replace(Br, Ur);
        (o.charAt(0) !== '-' && (o = '-' + o), (n = 'data' + o));
      }
    }
    i = En;
  }
  return new i(r, n);
}
function Ur(e) {
  return '-' + e.toLowerCase();
}
function Vr(e) {
  return e.charAt(1).toUpperCase();
}
const qr = Rt([Mt, Fr, Ht, Ut, Vt], 'html'),
  In = Rt([Mt, Rr, Ht, Ut, Vt], 'svg');
function $r(e) {
  return e.join(' ').trim();
}
var Tn = {},
  Wn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  Qr = /\n/g,
  Yr = /^\s*/,
  Wr = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  Xr = /^:\s*/,
  Gr = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Kr = /^[;\s]*/,
  Jr = /^\s+|\s+$/g,
  Zr = `
`,
  Xn = '/',
  Gn = '*',
  be = '',
  ei = 'comment',
  ni = 'declaration',
  ti = function (e, n) {
    if (typeof e != 'string') throw new TypeError('First argument must be a string');
    if (!e) return [];
    n = n || {};
    var t = 1,
      r = 1;
    function i(y) {
      var b = y.match(Qr);
      b && (t += b.length);
      var T = y.lastIndexOf(Zr);
      r = ~T ? y.length - T : r + y.length;
    }
    function l() {
      var y = { line: t, column: r };
      return function (b) {
        return ((b.position = new o(y)), c(), b);
      };
    }
    function o(y) {
      ((this.start = y), (this.end = { line: t, column: r }), (this.source = n.source));
    }
    o.prototype.content = e;
    function a(y) {
      var b = new Error(n.source + ':' + t + ':' + r + ': ' + y);
      if (
        ((b.reason = y),
        (b.filename = n.source),
        (b.line = t),
        (b.column = r),
        (b.source = e),
        !n.silent)
      )
        throw b;
    }
    function s(y) {
      var b = y.exec(e);
      if (b) {
        var T = b[0];
        return (i(T), (e = e.slice(T.length)), b);
      }
    }
    function c() {
      s(Yr);
    }
    function u(y) {
      var b;
      for (y = y || []; (b = f()); ) b !== !1 && y.push(b);
      return y;
    }
    function f() {
      var y = l();
      if (!(Xn != e.charAt(0) || Gn != e.charAt(1))) {
        for (var b = 2; be != e.charAt(b) && (Gn != e.charAt(b) || Xn != e.charAt(b + 1)); ) ++b;
        if (((b += 2), be === e.charAt(b - 1))) return a('End of comment missing');
        var T = e.slice(2, b - 2);
        return ((r += 2), i(T), (e = e.slice(b)), (r += 2), y({ type: ei, comment: T }));
      }
    }
    function d() {
      var y = l(),
        b = s(Wr);
      if (b) {
        if ((f(), !s(Xr))) return a("property missing ':'");
        var T = s(Gr),
          w = y({
            type: ni,
            property: Kn(b[0].replace(Wn, be)),
            value: T ? Kn(T[0].replace(Wn, be)) : be,
          });
        return (s(Kr), w);
      }
    }
    function p() {
      var y = [];
      u(y);
      for (var b; (b = d()); ) b !== !1 && (y.push(b), u(y));
      return y;
    }
    return (c(), p());
  };
function Kn(e) {
  return e ? e.replace(Jr, be) : be;
}
var ri =
  (We && We.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Tn, '__esModule', { value: !0 });
Tn.default = li;
var ii = ri(ti);
function li(e, n) {
  var t = null;
  if (!e || typeof e != 'string') return t;
  var r = (0, ii.default)(e),
    i = typeof n == 'function';
  return (
    r.forEach(function (l) {
      if (l.type === 'declaration') {
        var o = l.property,
          a = l.value;
        i ? n(o, a, l) : a && ((t = t || {}), (t[o] = a));
      }
    }),
    t
  );
}
var Ke = {};
Object.defineProperty(Ke, '__esModule', { value: !0 });
Ke.camelCase = void 0;
var oi = /^--[a-zA-Z0-9_-]+$/,
  ai = /-([a-z])/g,
  ui = /^[^-]+$/,
  si = /^-(webkit|moz|ms|o|khtml)-/,
  ci = /^-(ms)-/,
  pi = function (e) {
    return !e || ui.test(e) || oi.test(e);
  },
  fi = function (e, n) {
    return n.toUpperCase();
  },
  Jn = function (e, n) {
    return ''.concat(n, '-');
  },
  hi = function (e, n) {
    return (
      n === void 0 && (n = {}),
      pi(e)
        ? e
        : ((e = e.toLowerCase()),
          n.reactCompat ? (e = e.replace(ci, Jn)) : (e = e.replace(si, Jn)),
          e.replace(ai, fi))
    );
  };
Ke.camelCase = hi;
var mi =
    (We && We.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    },
  di = mi(Tn),
  gi = Ke;
function gn(e, n) {
  var t = {};
  return (
    !e ||
      typeof e != 'string' ||
      (0, di.default)(e, function (r, i) {
        r && i && (t[(0, gi.camelCase)(r, n)] = i);
      }),
    t
  );
}
gn.default = gn;
var yi = gn;
const xi = Ft(yi),
  qt = $t('end'),
  Pn = $t('start');
function $t(e) {
  return n;
  function n(t) {
    const r = (t && t.position && t.position[e]) || {};
    if (typeof r.line == 'number' && r.line > 0 && typeof r.column == 'number' && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == 'number' && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function ki(e) {
  const n = Pn(e),
    t = qt(e);
  if (n && t) return { start: n, end: t };
}
function Fe(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
      ? Zn(e.position)
      : 'start' in e || 'end' in e
        ? Zn(e)
        : 'line' in e || 'column' in e
          ? yn(e)
          : '';
}
function yn(e) {
  return et(e && e.line) + ':' + et(e && e.column);
}
function Zn(e) {
  return yn(e && e.start) + '-' + yn(e && e.end);
}
function et(e) {
  return e && typeof e == 'number' ? e : 1;
}
class G extends Error {
  constructor(n, t, r) {
    (super(), typeof t == 'string' && ((r = t), (t = void 0)));
    let i = '',
      l = {},
      o = !1;
    if (
      (t &&
        ('line' in t && 'column' in t
          ? (l = { place: t })
          : 'start' in t && 'end' in t
            ? (l = { place: t })
            : 'type' in t
              ? (l = { ancestors: [t], place: t.position })
              : (l = { ...t })),
      typeof n == 'string' ? (i = n) : !l.cause && n && ((o = !0), (i = n.message), (l.cause = n)),
      !l.ruleId && !l.source && typeof r == 'string')
    ) {
      const s = r.indexOf(':');
      s === -1 ? (l.ruleId = r) : ((l.source = r.slice(0, s)), (l.ruleId = r.slice(s + 1)));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const s = l.ancestors[l.ancestors.length - 1];
      s && (l.place = s.position);
    }
    const a = l.place && 'start' in l.place ? l.place.start : l.place;
    ((this.ancestors = l.ancestors || void 0),
      (this.cause = l.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = Fe(l.place) || '1:1'),
      (this.place = l.place || void 0),
      (this.reason = this.message),
      (this.ruleId = l.ruleId || void 0),
      (this.source = l.source || void 0),
      (this.stack = o && l.cause && typeof l.cause.stack == 'string' ? l.cause.stack : ''),
      this.actual,
      this.expected,
      this.note,
      this.url);
  }
}
G.prototype.file = '';
G.prototype.name = '';
G.prototype.reason = '';
G.prototype.message = '';
G.prototype.stack = '';
G.prototype.column = void 0;
G.prototype.line = void 0;
G.prototype.ancestors = void 0;
G.prototype.cause = void 0;
G.prototype.fatal = void 0;
G.prototype.place = void 0;
G.prototype.ruleId = void 0;
G.prototype.source = void 0;
const An = {}.hasOwnProperty,
  bi = new Map(),
  wi = /[A-Z]/g,
  Si = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  Ci = new Set(['td', 'th']),
  Qt = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function Ei(e, n) {
  if (!n || n.Fragment === void 0) throw new TypeError('Expected `Fragment` in options');
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != 'function')
      throw new TypeError('Expected `jsxDEV` in options when `development: true`');
    r = Ni(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != 'function') throw new TypeError('Expected `jsx` in production options');
    if (typeof n.jsxs != 'function') throw new TypeError('Expected `jsxs` in production options');
    r = Li(t, n.jsx, n.jsxs);
  }
  const i = {
      Fragment: n.Fragment,
      ancestors: [],
      components: n.components || {},
      create: r,
      elementAttributeNameCase: n.elementAttributeNameCase || 'react',
      evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
      filePath: t,
      ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
      passKeys: n.passKeys !== !1,
      passNode: n.passNode || !1,
      schema: n.space === 'svg' ? In : qr,
      stylePropertyNameCase: n.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: n.tableCellAlignToStyle !== !1,
    },
    l = Yt(i, e, void 0);
  return l && typeof l != 'string' ? l : i.create(e, i.Fragment, { children: l || void 0 }, void 0);
}
function Yt(e, n, t) {
  if (n.type === 'element') return Ii(e, n, t);
  if (n.type === 'mdxFlowExpression' || n.type === 'mdxTextExpression') return Ti(e, n);
  if (n.type === 'mdxJsxFlowElement' || n.type === 'mdxJsxTextElement') return Ai(e, n, t);
  if (n.type === 'mdxjsEsm') return Pi(e, n);
  if (n.type === 'root') return zi(e, n, t);
  if (n.type === 'text') return vi(e, n);
}
function Ii(e, n, t) {
  const r = e.schema;
  let i = r;
  (n.tagName.toLowerCase() === 'svg' && r.space === 'html' && ((i = In), (e.schema = i)),
    e.ancestors.push(n));
  const l = Xt(e, n.tagName, !1),
    o = _i(e, n);
  let a = vn(e, n);
  return (
    Si.has(n.tagName) &&
      (a = a.filter(function (s) {
        return typeof s == 'string' ? !Dr(s) : !0;
      })),
    Wt(e, o, l, n),
    zn(o, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(n, l, o, t)
  );
}
function Ti(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return (r.type, e.evaluater.evaluateExpression(r.expression));
  }
  Be(e, n.position);
}
function Pi(e, n) {
  if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
  Be(e, n.position);
}
function Ai(e, n, t) {
  const r = e.schema;
  let i = r;
  (n.name === 'svg' && r.space === 'html' && ((i = In), (e.schema = i)), e.ancestors.push(n));
  const l = n.name === null ? e.Fragment : Xt(e, n.name, !0),
    o = Di(e, n),
    a = vn(e, n);
  return (Wt(e, o, l, n), zn(o, a), e.ancestors.pop(), (e.schema = r), e.create(n, l, o, t));
}
function zi(e, n, t) {
  const r = {};
  return (zn(r, vn(e, n)), e.create(n, e.Fragment, r, t));
}
function vi(e, n) {
  return n.value;
}
function Wt(e, n, t, r) {
  typeof t != 'string' && t !== e.Fragment && e.passNode && (n.node = r);
}
function zn(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Li(e, n, t) {
  return r;
  function r(i, l, o, a) {
    const c = Array.isArray(o.children) ? t : n;
    return a ? c(l, o, a) : c(l, o);
  }
}
function Ni(e, n) {
  return t;
  function t(r, i, l, o) {
    const a = Array.isArray(l.children),
      s = Pn(r);
    return n(
      i,
      l,
      o,
      a,
      { columnNumber: s ? s.column - 1 : void 0, fileName: e, lineNumber: s ? s.line : void 0 },
      void 0,
    );
  }
}
function _i(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== 'children' && An.call(n.properties, i)) {
      const l = Oi(e, i, n.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === 'align' && typeof a == 'string' && Ci.has(n.tagName)
          ? (r = a)
          : (t[o] = a);
      }
    }
  if (r) {
    const l = t.style || (t.style = {});
    l[e.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = r;
  }
  return t;
}
function Di(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === 'mdxJsxExpressionAttribute')
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const o = l.expression;
        o.type;
        const a = o.properties[0];
        (a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument)));
      } else Be(e, n.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == 'object')
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          (a.type, (l = e.evaluater.evaluateExpression(a.expression)));
        } else Be(e, n.position);
      else l = r.value === null ? !0 : r.value;
      t[i] = l;
    }
  return t;
}
function vn(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? new Map() : bi;
  for (; ++r < n.children.length; ) {
    const l = n.children[r];
    let o;
    if (e.passKeys) {
      const s =
        l.type === 'element'
          ? l.tagName
          : l.type === 'mdxJsxFlowElement' || l.type === 'mdxJsxTextElement'
            ? l.name
            : void 0;
      if (s) {
        const c = i.get(s) || 0;
        ((o = s + '-' + c), i.set(s, c + 1));
      }
    }
    const a = Yt(e, l, o);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Oi(e, n, t) {
  const r = Hr(e.schema, n);
  if (!(t == null || (typeof t == 'number' && Number.isNaN(t)))) {
    if ((Array.isArray(t) && (t = r.commaSeparated ? zr(t) : $r(t)), r.property === 'style')) {
      let i = typeof t == 'object' ? t : Fi(e, String(t));
      return (e.stylePropertyNameCase === 'css' && (i = Ri(i)), ['style', i]);
    }
    return [
      e.elementAttributeNameCase === 'react' && r.space
        ? Mr[r.property] || r.property
        : r.attribute,
      t,
    ];
  }
}
function Fi(e, n) {
  try {
    return xi(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle) return {};
    const r = t,
      i = new G('Cannot parse `style` attribute', {
        ancestors: e.ancestors,
        cause: r,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw ((i.file = e.filePath || void 0), (i.url = Qt + '#cannot-parse-style-attribute'), i);
  }
}
function Xt(e, n, t) {
  let r;
  if (!t) r = { type: 'Literal', value: n };
  else if (n.includes('.')) {
    const i = n.split('.');
    let l = -1,
      o;
    for (; ++l < i.length; ) {
      const a = qn(i[l]) ? { type: 'Identifier', name: i[l] } : { type: 'Literal', value: i[l] };
      o = o
        ? {
            type: 'MemberExpression',
            object: o,
            property: a,
            computed: !!(l && a.type === 'Literal'),
            optional: !1,
          }
        : a;
    }
    r = o;
  } else
    r =
      qn(n) && !/^[a-z]/.test(n) ? { type: 'Identifier', name: n } : { type: 'Literal', value: n };
  if (r.type === 'Literal') {
    const i = r.value;
    return An.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  Be(e);
}
function Be(e, n) {
  const t = new G('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: e.ancestors,
    place: n,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (t.file = e.filePath || void 0),
    (t.url = Qt + '#cannot-handle-mdx-estrees-without-createevaluater'),
    t
  );
}
function Ri(e) {
  const n = {};
  let t;
  for (t in e) An.call(e, t) && (n[Mi(t)] = e[t]);
  return n;
}
function Mi(e) {
  let n = e.replace(wi, Bi);
  return (n.slice(0, 3) === 'ms-' && (n = '-' + n), n);
}
function Bi(e) {
  return '-' + e.toLowerCase();
}
const tn = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  ji = {};
function Hi(e, n) {
  const t = ji,
    r = typeof t.includeImageAlt == 'boolean' ? t.includeImageAlt : !0,
    i = typeof t.includeHtml == 'boolean' ? t.includeHtml : !0;
  return Gt(e, r, i);
}
function Gt(e, n, t) {
  if (Ui(e)) {
    if ('value' in e) return e.type === 'html' && !t ? '' : e.value;
    if (n && 'alt' in e && e.alt) return e.alt;
    if ('children' in e) return nt(e.children, n, t);
  }
  return Array.isArray(e) ? nt(e, n, t) : '';
}
function nt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = Gt(e[i], n, t);
  return r.join('');
}
function Ui(e) {
  return !!(e && typeof e == 'object');
}
const tt = document.createElement('i');
function Ln(e) {
  const n = '&' + e + ';';
  tt.innerHTML = n;
  const t = tt.textContent;
  return (t.charCodeAt(t.length - 1) === 59 && e !== 'semi') || t === n ? !1 : t;
}
function ce(e, n, t, r) {
  const i = e.length;
  let l = 0,
    o;
  if ((n < 0 ? (n = -n > i ? 0 : i + n) : (n = n > i ? i : n), (t = t > 0 ? t : 0), r.length < 1e4))
    ((o = Array.from(r)), o.unshift(n, t), e.splice(...o));
  else
    for (t && e.splice(n, t); l < r.length; )
      ((o = r.slice(l, l + 1e4)), o.unshift(n, 0), e.splice(...o), (l += 1e4), (n += 1e4));
}
function re(e, n) {
  return e.length > 0 ? (ce(e, e.length, 0, n), e) : n;
}
const rt = {}.hasOwnProperty;
function Vi(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; ) qi(n, e[t]);
  return n;
}
function qi(e, n) {
  let t;
  for (t in n) {
    const i = (rt.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      l = n[t];
    let o;
    if (l)
      for (o in l) {
        rt.call(i, o) || (i[o] = []);
        const a = l[o];
        $i(i[o], Array.isArray(a) ? a : a ? [a] : []);
      }
  }
}
function $i(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; ) (n[t].add === 'after' ? e : r).push(n[t]);
  ce(e, 0, 0, r);
}
function Kt(e, n) {
  const t = Number.parseInt(e, n);
  return t < 9 ||
    t === 11 ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    (t & 65535) === 65535 ||
    (t & 65535) === 65534 ||
    t > 1114111
    ? '�'
    : String.fromCodePoint(t);
}
function Ae(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const se = ye(/[A-Za-z]/),
  te = ye(/[\dA-Za-z]/),
  Qi = ye(/[#-'*+\--9=?A-Z^-~]/);
function xn(e) {
  return e !== null && (e < 32 || e === 127);
}
const kn = ye(/\d/),
  Yi = ye(/[\dA-Fa-f]/),
  Wi = ye(/[!-/:-@[-`{-~]/);
function P(e) {
  return e !== null && e < -2;
}
function J(e) {
  return e !== null && (e < 0 || e === 32);
}
function _(e) {
  return e === -2 || e === -1 || e === 32;
}
const Xi = ye(new RegExp('\\p{P}|\\p{S}', 'u')),
  Gi = ye(/\s/);
function ye(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function ve(e) {
  const n = [];
  let t = -1,
    r = 0,
    i = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let o = '';
    if (l === 37 && te(e.charCodeAt(t + 1)) && te(e.charCodeAt(t + 2))) i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(t + 1);
      l < 56320 && a > 56319 && a < 57344 ? ((o = String.fromCharCode(l, a)), (i = 1)) : (o = '�');
    } else o = String.fromCharCode(l);
    (o && (n.push(e.slice(r, t), encodeURIComponent(o)), (r = t + i + 1), (o = '')),
      i && ((t += i), (i = 0)));
  }
  return n.join('') + e.slice(r);
}
function M(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(s) {
    return _(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return _(s) && l++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const Ki = { tokenize: Ji };
function Ji(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (e.enter('lineEnding'), e.consume(a), e.exit('lineEnding'), M(e, n, 'linePrefix'));
  }
  function i(a) {
    return (e.enter('paragraph'), l(a));
  }
  function l(a) {
    const s = e.enter('chunkText', { contentType: 'text', previous: t });
    return (t && (t.next = s), (t = s), o(a));
  }
  function o(a) {
    if (a === null) {
      (e.exit('chunkText'), e.exit('paragraph'), e.consume(a));
      return;
    }
    return P(a) ? (e.consume(a), e.exit('chunkText'), l) : (e.consume(a), o);
  }
}
const Zi = { tokenize: el },
  it = { tokenize: nl };
function el(e) {
  const n = this,
    t = [];
  let r = 0,
    i,
    l,
    o;
  return a;
  function a(C) {
    if (r < t.length) {
      const j = t[r];
      return ((n.containerState = j[1]), e.attempt(j[0].continuation, s, c)(C));
    }
    return c(C);
  }
  function s(C) {
    if ((r++, n.containerState._closeFlow)) {
      ((n.containerState._closeFlow = void 0), i && v());
      const j = n.events.length;
      let U = j,
        x;
      for (; U--; )
        if (n.events[U][0] === 'exit' && n.events[U][1].type === 'chunkFlow') {
          x = n.events[U][1].end;
          break;
        }
      w(r);
      let D = j;
      for (; D < n.events.length; ) ((n.events[D][1].end = { ...x }), D++);
      return (ce(n.events, U + 1, 0, n.events.slice(j)), (n.events.length = D), c(C));
    }
    return a(C);
  }
  function c(C) {
    if (r === t.length) {
      if (!i) return d(C);
      if (i.currentConstruct && i.currentConstruct.concrete) return y(C);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return ((n.containerState = {}), e.check(it, u, f)(C));
  }
  function u(C) {
    return (i && v(), w(r), d(C));
  }
  function f(C) {
    return ((n.parser.lazy[n.now().line] = r !== t.length), (o = n.now().offset), y(C));
  }
  function d(C) {
    return ((n.containerState = {}), e.attempt(it, p, y)(C));
  }
  function p(C) {
    return (r++, t.push([n.currentConstruct, n.containerState]), d(C));
  }
  function y(C) {
    if (C === null) {
      (i && v(), w(0), e.consume(C));
      return;
    }
    return (
      (i = i || n.parser.flow(n.now())),
      e.enter('chunkFlow', { _tokenizer: i, contentType: 'flow', previous: l }),
      b(C)
    );
  }
  function b(C) {
    if (C === null) {
      (T(e.exit('chunkFlow'), !0), w(0), e.consume(C));
      return;
    }
    return P(C)
      ? (e.consume(C), T(e.exit('chunkFlow')), (r = 0), (n.interrupt = void 0), a)
      : (e.consume(C), b);
  }
  function T(C, j) {
    const U = n.sliceStream(C);
    if (
      (j && U.push(null),
      (C.previous = l),
      l && (l.next = C),
      (l = C),
      i.defineSkip(C.start),
      i.write(U),
      n.parser.lazy[C.start.line])
    ) {
      let x = i.events.length;
      for (; x--; )
        if (
          i.events[x][1].start.offset < o &&
          (!i.events[x][1].end || i.events[x][1].end.offset > o)
        )
          return;
      const D = n.events.length;
      let q = D,
        O,
        B;
      for (; q--; )
        if (n.events[q][0] === 'exit' && n.events[q][1].type === 'chunkFlow') {
          if (O) {
            B = n.events[q][1].end;
            break;
          }
          O = !0;
        }
      for (w(r), x = D; x < n.events.length; ) ((n.events[x][1].end = { ...B }), x++);
      (ce(n.events, q + 1, 0, n.events.slice(D)), (n.events.length = x));
    }
  }
  function w(C) {
    let j = t.length;
    for (; j-- > C; ) {
      const U = t[j];
      ((n.containerState = U[1]), U[0].exit.call(n, e));
    }
    t.length = C;
  }
  function v() {
    (i.write([null]), (l = void 0), (i = void 0), (n.containerState._closeFlow = void 0));
  }
}
function nl(e, n, t) {
  return M(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
function lt(e) {
  if (e === null || J(e) || Gi(e)) return 1;
  if (Xi(e)) return 2;
}
function Nn(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && ((n = l(n, t)), r.push(l));
  }
  return n;
}
const bn = { name: 'attention', resolveAll: tl, tokenize: rl };
function tl(e, n) {
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    s,
    c,
    u;
  for (; ++t < e.length; )
    if (e[t][0] === 'enter' && e[t][1].type === 'attentionSequence' && e[t][1]._close) {
      for (r = t; r--; )
        if (
          e[r][0] === 'exit' &&
          e[r][1].type === 'attentionSequence' &&
          e[r][1]._open &&
          n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[t][1]._open) &&
            (e[t][1].end.offset - e[t][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[t][1].end.offset -
                e[t][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[t][1].end.offset - e[t][1].start.offset > 1
              ? 2
              : 1;
          const f = { ...e[r][1].end },
            d = { ...e[t][1].start };
          (ot(f, -s),
            ot(d, s),
            (o = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: f,
              end: { ...e[r][1].end },
            }),
            (a = {
              type: s > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...e[t][1].start },
              end: d,
            }),
            (l = {
              type: s > 1 ? 'strongText' : 'emphasisText',
              start: { ...e[r][1].end },
              end: { ...e[t][1].start },
            }),
            (i = { type: s > 1 ? 'strong' : 'emphasis', start: { ...o.start }, end: { ...a.end } }),
            (e[r][1].end = { ...o.start }),
            (e[t][1].start = { ...a.end }),
            (c = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (c = re(c, [
                ['enter', e[r][1], n],
                ['exit', e[r][1], n],
              ])),
            (c = re(c, [
              ['enter', i, n],
              ['enter', o, n],
              ['exit', o, n],
              ['enter', l, n],
            ])),
            (c = re(c, Nn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n))),
            (c = re(c, [
              ['exit', l, n],
              ['enter', a, n],
              ['exit', a, n],
              ['exit', i, n],
            ])),
            e[t][1].end.offset - e[t][1].start.offset
              ? ((u = 2),
                (c = re(c, [
                  ['enter', e[t][1], n],
                  ['exit', e[t][1], n],
                ])))
              : (u = 0),
            ce(e, r - 1, t - r + 3, c),
            (t = r + c.length - u - 2));
          break;
        }
    }
  for (t = -1; ++t < e.length; ) e[t][1].type === 'attentionSequence' && (e[t][1].type = 'data');
  return e;
}
function rl(e, n) {
  const t = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = lt(r);
  let l;
  return o;
  function o(s) {
    return ((l = s), e.enter('attentionSequence'), a(s));
  }
  function a(s) {
    if (s === l) return (e.consume(s), a);
    const c = e.exit('attentionSequence'),
      u = lt(s),
      f = !u || (u === 2 && i) || t.includes(s),
      d = !i || (i === 2 && u) || t.includes(r);
    return (
      (c._open = !!(l === 42 ? f : f && (i || !d))),
      (c._close = !!(l === 42 ? d : d && (u || !f))),
      n(s)
    );
  }
}
function ot(e, n) {
  ((e.column += n), (e.offset += n), (e._bufferIndex += n));
}
const il = { name: 'autolink', tokenize: ll };
function ll(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(p),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      l
    );
  }
  function l(p) {
    return se(p) ? (e.consume(p), o) : p === 64 ? t(p) : c(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || te(p) ? ((r = 1), a(p)) : c(p);
  }
  function a(p) {
    return p === 58
      ? (e.consume(p), (r = 0), s)
      : (p === 43 || p === 45 || p === 46 || te(p)) && r++ < 32
        ? (e.consume(p), a)
        : ((r = 0), c(p));
  }
  function s(p) {
    return p === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(p),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        n)
      : p === null || p === 32 || p === 60 || xn(p)
        ? t(p)
        : (e.consume(p), s);
  }
  function c(p) {
    return p === 64 ? (e.consume(p), u) : Qi(p) ? (e.consume(p), c) : t(p);
  }
  function u(p) {
    return te(p) ? f(p) : t(p);
  }
  function f(p) {
    return p === 46
      ? (e.consume(p), (r = 0), u)
      : p === 62
        ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
          e.enter('autolinkMarker'),
          e.consume(p),
          e.exit('autolinkMarker'),
          e.exit('autolink'),
          n)
        : d(p);
  }
  function d(p) {
    if ((p === 45 || te(p)) && r++ < 63) {
      const y = p === 45 ? d : f;
      return (e.consume(p), y);
    }
    return t(p);
  }
}
const Je = { partial: !0, tokenize: ol };
function ol(e, n, t) {
  return r;
  function r(l) {
    return _(l) ? M(e, i, 'linePrefix')(l) : i(l);
  }
  function i(l) {
    return l === null || P(l) ? n(l) : t(l);
  }
}
const Jt = { continuation: { tokenize: ul }, exit: sl, name: 'blockQuote', tokenize: al };
function al(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter('blockQuote', { _container: !0 }), (a.open = !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(o),
        e.exit('blockQuoteMarker'),
        l
      );
    }
    return t(o);
  }
  function l(o) {
    return _(o)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(o),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        n)
      : (e.exit('blockQuotePrefix'), n(o));
  }
}
function ul(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return _(o)
      ? M(
          e,
          l,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(o)
      : l(o);
  }
  function l(o) {
    return e.attempt(Jt, n, t)(o);
  }
}
function sl(e) {
  e.exit('blockQuote');
}
const Zt = { name: 'characterEscape', tokenize: cl };
function cl(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(l),
      e.exit('escapeMarker'),
      i
    );
  }
  function i(l) {
    return Wi(l)
      ? (e.enter('characterEscapeValue'),
        e.consume(l),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        n)
      : t(l);
  }
}
const er = { name: 'characterReference', tokenize: pl };
function pl(e, n, t) {
  const r = this;
  let i = 0,
    l,
    o;
  return a;
  function a(f) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(f),
      e.exit('characterReferenceMarker'),
      s
    );
  }
  function s(f) {
    return f === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(f),
        e.exit('characterReferenceMarkerNumeric'),
        c)
      : (e.enter('characterReferenceValue'), (l = 31), (o = te), u(f));
  }
  function c(f) {
    return f === 88 || f === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(f),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (l = 6),
        (o = Yi),
        u)
      : (e.enter('characterReferenceValue'), (l = 7), (o = kn), u(f));
  }
  function u(f) {
    if (f === 59 && i) {
      const d = e.exit('characterReferenceValue');
      return o === te && !Ln(r.sliceSerialize(d))
        ? t(f)
        : (e.enter('characterReferenceMarker'),
          e.consume(f),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          n);
    }
    return o(f) && i++ < l ? (e.consume(f), u) : t(f);
  }
}
const at = { partial: !0, tokenize: hl },
  ut = { concrete: !0, name: 'codeFenced', tokenize: fl };
function fl(e, n, t) {
  const r = this,
    i = { partial: !0, tokenize: U };
  let l = 0,
    o = 0,
    a;
  return s;
  function s(x) {
    return c(x);
  }
  function c(x) {
    const D = r.events[r.events.length - 1];
    return (
      (l = D && D[1].type === 'linePrefix' ? D[2].sliceSerialize(D[1], !0).length : 0),
      (a = x),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      u(x)
    );
  }
  function u(x) {
    return x === a
      ? (o++, e.consume(x), u)
      : o < 3
        ? t(x)
        : (e.exit('codeFencedFenceSequence'), _(x) ? M(e, f, 'whitespace')(x) : f(x));
  }
  function f(x) {
    return x === null || P(x)
      ? (e.exit('codeFencedFence'), r.interrupt ? n(x) : e.check(at, b, j)(x))
      : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), d(x));
  }
  function d(x) {
    return x === null || P(x)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), f(x))
      : _(x)
        ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), M(e, p, 'whitespace')(x))
        : x === 96 && x === a
          ? t(x)
          : (e.consume(x), d);
  }
  function p(x) {
    return x === null || P(x)
      ? f(x)
      : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), y(x));
  }
  function y(x) {
    return x === null || P(x)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), f(x))
      : x === 96 && x === a
        ? t(x)
        : (e.consume(x), y);
  }
  function b(x) {
    return e.attempt(i, j, T)(x);
  }
  function T(x) {
    return (e.enter('lineEnding'), e.consume(x), e.exit('lineEnding'), w);
  }
  function w(x) {
    return l > 0 && _(x) ? M(e, v, 'linePrefix', l + 1)(x) : v(x);
  }
  function v(x) {
    return x === null || P(x) ? e.check(at, b, j)(x) : (e.enter('codeFlowValue'), C(x));
  }
  function C(x) {
    return x === null || P(x) ? (e.exit('codeFlowValue'), v(x)) : (e.consume(x), C);
  }
  function j(x) {
    return (e.exit('codeFenced'), n(x));
  }
  function U(x, D, q) {
    let O = 0;
    return B;
    function B(N) {
      return (x.enter('lineEnding'), x.consume(N), x.exit('lineEnding'), I);
    }
    function I(N) {
      return (
        x.enter('codeFencedFence'),
        _(N)
          ? M(
              x,
              E,
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
            )(N)
          : E(N)
      );
    }
    function E(N) {
      return N === a ? (x.enter('codeFencedFenceSequence'), H(N)) : q(N);
    }
    function H(N) {
      return N === a
        ? (O++, x.consume(N), H)
        : O >= o
          ? (x.exit('codeFencedFenceSequence'), _(N) ? M(x, $, 'whitespace')(N) : $(N))
          : q(N);
    }
    function $(N) {
      return N === null || P(N) ? (x.exit('codeFencedFence'), D(N)) : q(N);
    }
  }
}
function hl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? t(o) : (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
const rn = { name: 'codeIndented', tokenize: dl },
  ml = { partial: !0, tokenize: gl };
function dl(e, n, t) {
  const r = this;
  return i;
  function i(c) {
    return (e.enter('codeIndented'), M(e, l, 'linePrefix', 5)(c));
  }
  function l(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === 'linePrefix' && u[2].sliceSerialize(u[1], !0).length >= 4
      ? o(c)
      : t(c);
  }
  function o(c) {
    return c === null ? s(c) : P(c) ? e.attempt(ml, o, s)(c) : (e.enter('codeFlowValue'), a(c));
  }
  function a(c) {
    return c === null || P(c) ? (e.exit('codeFlowValue'), o(c)) : (e.consume(c), a);
  }
  function s(c) {
    return (e.exit('codeIndented'), n(c));
  }
}
function gl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line]
      ? t(o)
      : P(o)
        ? (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), i)
        : M(e, l, 'linePrefix', 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === 'linePrefix' && a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : P(o)
        ? i(o)
        : t(o);
  }
}
const yl = { name: 'codeText', previous: kl, resolve: xl, tokenize: bl };
function xl(e) {
  let n = e.length - 4,
    t = 3,
    r,
    i;
  if (
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space') &&
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space')
  ) {
    for (r = t; ++r < n; )
      if (e[r][1].type === 'codeTextData') {
        ((e[t][1].type = 'codeTextPadding'),
          (e[n][1].type = 'codeTextPadding'),
          (t += 2),
          (n -= 2));
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0
      ? r !== n && e[r][1].type !== 'lineEnding' && (i = r)
      : (r === n || e[r][1].type === 'lineEnding') &&
        ((e[i][1].type = 'codeTextData'),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (n -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function kl(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
function bl(e, n, t) {
  let r = 0,
    i,
    l;
  return o;
  function o(f) {
    return (e.enter('codeText'), e.enter('codeTextSequence'), a(f));
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit('codeTextSequence'), s(f));
  }
  function s(f) {
    return f === null
      ? t(f)
      : f === 32
        ? (e.enter('space'), e.consume(f), e.exit('space'), s)
        : f === 96
          ? ((l = e.enter('codeTextSequence')), (i = 0), u(f))
          : P(f)
            ? (e.enter('lineEnding'), e.consume(f), e.exit('lineEnding'), s)
            : (e.enter('codeTextData'), c(f));
  }
  function c(f) {
    return f === null || f === 32 || f === 96 || P(f)
      ? (e.exit('codeTextData'), s(f))
      : (e.consume(f), c);
  }
  function u(f) {
    return f === 96
      ? (e.consume(f), i++, u)
      : i === r
        ? (e.exit('codeTextSequence'), e.exit('codeText'), n(f))
        : ((l.type = 'codeTextData'), c(f));
  }
}
class wl {
  constructor(n) {
    ((this.left = n ? [...n] : []), (this.right = []));
  }
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          n +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return n < this.left.length
      ? this.left[n]
      : this.right[this.right.length - n + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(n, r)
      : n > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - n + this.left.length,
            )
            .reverse()
        : this.left
            .slice(n)
            .concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return (r && De(this.left, r), l.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n));
  }
  pushMany(n) {
    (this.setCursor(Number.POSITIVE_INFINITY), De(this.left, n));
  }
  unshift(n) {
    (this.setCursor(0), this.right.push(n));
  }
  unshiftMany(n) {
    (this.setCursor(0), De(this.right, n.reverse()));
  }
  setCursor(n) {
    if (
      !(
        n === this.left.length ||
        (n > this.left.length && this.right.length === 0) ||
        (n < 0 && this.left.length === 0)
      )
    )
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        De(this.right, t.reverse());
      } else {
        const t = this.right.splice(
          this.left.length + this.right.length - n,
          Number.POSITIVE_INFINITY,
        );
        De(this.left, t.reverse());
      }
  }
}
function De(e, n) {
  let t = 0;
  if (n.length < 1e4) e.push(...n);
  else for (; t < n.length; ) (e.push(...n.slice(t, t + 1e4)), (t += 1e4));
}
function nr(e) {
  const n = {};
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    s,
    c;
  const u = new wl(e);
  for (; ++t < u.length; ) {
    for (; t in n; ) t = n[t];
    if (
      ((r = u.get(t)),
      t &&
        r[1].type === 'chunkFlow' &&
        u.get(t - 1)[1].type === 'listItemPrefix' &&
        ((s = r[1]._tokenizer.events),
        (l = 0),
        l < s.length && s[l][1].type === 'lineEndingBlank' && (l += 2),
        l < s.length && s[l][1].type === 'content'))
    )
      for (; ++l < s.length && s[l][1].type !== 'content'; )
        s[l][1].type === 'chunkText' && ((s[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === 'enter') r[1].contentType && (Object.assign(n, Sl(u, t)), (t = n[t]), (c = !0));
    else if (r[1]._container) {
      for (l = t, i = void 0; l--; )
        if (((o = u.get(l)), o[1].type === 'lineEnding' || o[1].type === 'lineEndingBlank'))
          o[0] === 'enter' &&
            (i && (u.get(i)[1].type = 'lineEndingBlank'), (o[1].type = 'lineEnding'), (i = l));
        else if (!(o[1].type === 'linePrefix' || o[1].type === 'listItemIndent')) break;
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (a = u.slice(i, t)),
        a.unshift(r),
        u.splice(i, t - i + 1, a));
    }
  }
  return (ce(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !c);
}
function Sl(e, n) {
  const t = e.get(n)[1],
    r = e.get(n)[2];
  let i = n - 1;
  const l = [];
  let o = t._tokenizer;
  o ||
    ((o = r.parser[t.contentType](t.start)),
    t._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events,
    s = [],
    c = {};
  let u,
    f,
    d = -1,
    p = t,
    y = 0,
    b = 0;
  const T = [b];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    (l.push(i),
      p._tokenizer ||
        ((u = r.sliceStream(p)),
        p.next || u.push(null),
        f && o.defineSkip(p.start),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
      (f = p),
      (p = p.next));
  }
  for (p = t; ++d < a.length; )
    a[d][0] === 'exit' &&
      a[d - 1][0] === 'enter' &&
      a[d][1].type === a[d - 1][1].type &&
      a[d][1].start.line !== a[d][1].end.line &&
      ((b = d + 1), T.push(b), (p._tokenizer = void 0), (p.previous = void 0), (p = p.next));
  for (
    o.events = [], p ? ((p._tokenizer = void 0), (p.previous = void 0)) : T.pop(), d = T.length;
    d--;

  ) {
    const w = a.slice(T[d], T[d + 1]),
      v = l.pop();
    (s.push([v, v + w.length - 1]), e.splice(v, 2, w));
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    ((c[y + s[d][0]] = y + s[d][1]), (y += s[d][1] - s[d][0] - 1));
  return c;
}
const Cl = { resolve: Il, tokenize: Tl },
  El = { partial: !0, tokenize: Pl };
function Il(e) {
  return (nr(e), e);
}
function Tl(e, n) {
  let t;
  return r;
  function r(a) {
    return (e.enter('content'), (t = e.enter('chunkContent', { contentType: 'content' })), i(a));
  }
  function i(a) {
    return a === null ? l(a) : P(a) ? e.check(El, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return (e.exit('chunkContent'), e.exit('content'), n(a));
  }
  function o(a) {
    return (
      e.consume(a),
      e.exit('chunkContent'),
      (t.next = e.enter('chunkContent', { contentType: 'content', previous: t })),
      (t = t.next),
      i
    );
  }
}
function Pl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(o),
      e.exit('lineEnding'),
      M(e, l, 'linePrefix')
    );
  }
  function l(o) {
    if (o === null || P(o)) return t(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes('codeIndented') &&
      a &&
      a[1].type === 'linePrefix' &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : e.interrupt(r.parser.constructs.flow, t, n)(o);
  }
}
function tr(e, n, t, r, i, l, o, a, s) {
  const c = s || Number.POSITIVE_INFINITY;
  let u = 0;
  return f;
  function f(w) {
    return w === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(w), e.exit(l), d)
      : w === null || w === 32 || w === 41 || xn(w)
        ? t(w)
        : (e.enter(r),
          e.enter(o),
          e.enter(a),
          e.enter('chunkString', { contentType: 'string' }),
          b(w));
  }
  function d(w) {
    return w === 62
      ? (e.enter(l), e.consume(w), e.exit(l), e.exit(i), e.exit(r), n)
      : (e.enter(a), e.enter('chunkString', { contentType: 'string' }), p(w));
  }
  function p(w) {
    return w === 62
      ? (e.exit('chunkString'), e.exit(a), d(w))
      : w === null || w === 60 || P(w)
        ? t(w)
        : (e.consume(w), w === 92 ? y : p);
  }
  function y(w) {
    return w === 60 || w === 62 || w === 92 ? (e.consume(w), p) : p(w);
  }
  function b(w) {
    return !u && (w === null || w === 41 || J(w))
      ? (e.exit('chunkString'), e.exit(a), e.exit(o), e.exit(r), n(w))
      : u < c && w === 40
        ? (e.consume(w), u++, b)
        : w === 41
          ? (e.consume(w), u--, b)
          : w === null || w === 32 || w === 40 || xn(w)
            ? t(w)
            : (e.consume(w), w === 92 ? T : b);
  }
  function T(w) {
    return w === 40 || w === 41 || w === 92 ? (e.consume(w), b) : b(w);
  }
}
function rr(e, n, t, r, i, l) {
  const o = this;
  let a = 0,
    s;
  return c;
  function c(p) {
    return (e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(l), u);
  }
  function u(p) {
    return a > 999 ||
      p === null ||
      p === 91 ||
      (p === 93 && !s) ||
      (p === 94 && !a && '_hiddenFootnoteSupport' in o.parser.constructs)
      ? t(p)
      : p === 93
        ? (e.exit(l), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n)
        : P(p)
          ? (e.enter('lineEnding'), e.consume(p), e.exit('lineEnding'), u)
          : (e.enter('chunkString', { contentType: 'string' }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || P(p) || a++ > 999
      ? (e.exit('chunkString'), u(p))
      : (e.consume(p), s || (s = !_(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function ir(e, n, t, r, i, l) {
  let o;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40
      ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), (o = d === 40 ? 41 : d), s)
      : t(d);
  }
  function s(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), n) : (e.enter(l), c(d));
  }
  function c(d) {
    return d === o
      ? (e.exit(l), s(o))
      : d === null
        ? t(d)
        : P(d)
          ? (e.enter('lineEnding'), e.consume(d), e.exit('lineEnding'), M(e, c, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), u(d));
  }
  function u(d) {
    return d === o || d === null || P(d)
      ? (e.exit('chunkString'), c(d))
      : (e.consume(d), d === 92 ? f : u);
  }
  function f(d) {
    return d === o || d === 92 ? (e.consume(d), u) : u(d);
  }
}
function Re(e, n) {
  let t;
  return r;
  function r(i) {
    return P(i)
      ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), (t = !0), r)
      : _(i)
        ? M(e, r, t ? 'linePrefix' : 'lineSuffix')(i)
        : n(i);
  }
}
const Al = { name: 'definition', tokenize: vl },
  zl = { partial: !0, tokenize: Ll };
function vl(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(p) {
    return (e.enter('definition'), o(p));
  }
  function o(p) {
    return rr.call(
      r,
      e,
      a,
      t,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(p);
  }
  function a(p) {
    return (
      (i = Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      p === 58 ? (e.enter('definitionMarker'), e.consume(p), e.exit('definitionMarker'), s) : t(p)
    );
  }
  function s(p) {
    return J(p) ? Re(e, c)(p) : c(p);
  }
  function c(p) {
    return tr(
      e,
      u,
      t,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(p);
  }
  function u(p) {
    return e.attempt(zl, f, f)(p);
  }
  function f(p) {
    return _(p) ? M(e, d, 'whitespace')(p) : d(p);
  }
  function d(p) {
    return p === null || P(p) ? (e.exit('definition'), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function Ll(e, n, t) {
  return r;
  function r(a) {
    return J(a) ? Re(e, i)(a) : t(a);
  }
  function i(a) {
    return ir(e, l, t, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(a);
  }
  function l(a) {
    return _(a) ? M(e, o, 'whitespace')(a) : o(a);
  }
  function o(a) {
    return a === null || P(a) ? n(a) : t(a);
  }
}
const Nl = { name: 'hardBreakEscape', tokenize: _l };
function _l(e, n, t) {
  return r;
  function r(l) {
    return (e.enter('hardBreakEscape'), e.consume(l), i);
  }
  function i(l) {
    return P(l) ? (e.exit('hardBreakEscape'), n(l)) : t(l);
  }
}
const Dl = { name: 'headingAtx', resolve: Ol, tokenize: Fl };
function Ol(e, n) {
  let t = e.length - 2,
    r = 3,
    i,
    l;
  return (
    e[r][1].type === 'whitespace' && (r += 2),
    t - 2 > r && e[t][1].type === 'whitespace' && (t -= 2),
    e[t][1].type === 'atxHeadingSequence' &&
      (r === t - 1 || (t - 4 > r && e[t - 2][1].type === 'whitespace')) &&
      (t -= r + 1 === t ? 2 : 4),
    t > r &&
      ((i = { type: 'atxHeadingText', start: e[r][1].start, end: e[t][1].end }),
      (l = { type: 'chunkText', start: e[r][1].start, end: e[t][1].end, contentType: 'text' }),
      ce(e, r, t - r + 1, [
        ['enter', i, n],
        ['enter', l, n],
        ['exit', l, n],
        ['exit', i, n],
      ])),
    e
  );
}
function Fl(e, n, t) {
  let r = 0;
  return i;
  function i(u) {
    return (e.enter('atxHeading'), l(u));
  }
  function l(u) {
    return (e.enter('atxHeadingSequence'), o(u));
  }
  function o(u) {
    return u === 35 && r++ < 6
      ? (e.consume(u), o)
      : u === null || J(u)
        ? (e.exit('atxHeadingSequence'), a(u))
        : t(u);
  }
  function a(u) {
    return u === 35
      ? (e.enter('atxHeadingSequence'), s(u))
      : u === null || P(u)
        ? (e.exit('atxHeading'), n(u))
        : _(u)
          ? M(e, a, 'whitespace')(u)
          : (e.enter('atxHeadingText'), c(u));
  }
  function s(u) {
    return u === 35 ? (e.consume(u), s) : (e.exit('atxHeadingSequence'), a(u));
  }
  function c(u) {
    return u === null || u === 35 || J(u) ? (e.exit('atxHeadingText'), a(u)) : (e.consume(u), c);
  }
}
const Rl = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  st = ['pre', 'script', 'style', 'textarea'],
  Ml = { concrete: !0, name: 'htmlFlow', resolveTo: Hl, tokenize: Ul },
  Bl = { partial: !0, tokenize: ql },
  jl = { partial: !0, tokenize: Vl };
function Hl(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === 'enter' && e[n][1].type === 'htmlFlow'); );
  return (
    n > 1 &&
      e[n - 2][1].type === 'linePrefix' &&
      ((e[n][1].start = e[n - 2][1].start),
      (e[n + 1][1].start = e[n - 2][1].start),
      e.splice(n - 2, 2)),
    e
  );
}
function Ul(e, n, t) {
  const r = this;
  let i, l, o, a, s;
  return c;
  function c(m) {
    return u(m);
  }
  function u(m) {
    return (e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(m), f);
  }
  function f(m) {
    return m === 33
      ? (e.consume(m), d)
      : m === 47
        ? (e.consume(m), (l = !0), b)
        : m === 63
          ? (e.consume(m), (i = 3), r.interrupt ? n : h)
          : se(m)
            ? (e.consume(m), (o = String.fromCharCode(m)), T)
            : t(m);
  }
  function d(m) {
    return m === 45
      ? (e.consume(m), (i = 2), p)
      : m === 91
        ? (e.consume(m), (i = 5), (a = 0), y)
        : se(m)
          ? (e.consume(m), (i = 4), r.interrupt ? n : h)
          : t(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? n : h) : t(m);
  }
  function y(m) {
    const oe = 'CDATA[';
    return m === oe.charCodeAt(a++)
      ? (e.consume(m), a === oe.length ? (r.interrupt ? n : E) : y)
      : t(m);
  }
  function b(m) {
    return se(m) ? (e.consume(m), (o = String.fromCharCode(m)), T) : t(m);
  }
  function T(m) {
    if (m === null || m === 47 || m === 62 || J(m)) {
      const oe = m === 47,
        xe = o.toLowerCase();
      return !oe && !l && st.includes(xe)
        ? ((i = 1), r.interrupt ? n(m) : E(m))
        : Rl.includes(o.toLowerCase())
          ? ((i = 6), oe ? (e.consume(m), w) : r.interrupt ? n(m) : E(m))
          : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? t(m) : l ? v(m) : C(m));
    }
    return m === 45 || te(m) ? (e.consume(m), (o += String.fromCharCode(m)), T) : t(m);
  }
  function w(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? n : E) : t(m);
  }
  function v(m) {
    return _(m) ? (e.consume(m), v) : B(m);
  }
  function C(m) {
    return m === 47
      ? (e.consume(m), B)
      : m === 58 || m === 95 || se(m)
        ? (e.consume(m), j)
        : _(m)
          ? (e.consume(m), C)
          : B(m);
  }
  function j(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || te(m) ? (e.consume(m), j) : U(m);
  }
  function U(m) {
    return m === 61 ? (e.consume(m), x) : _(m) ? (e.consume(m), U) : C(m);
  }
  function x(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96
      ? t(m)
      : m === 34 || m === 39
        ? (e.consume(m), (s = m), D)
        : _(m)
          ? (e.consume(m), x)
          : q(m);
  }
  function D(m) {
    return m === s ? (e.consume(m), (s = null), O) : m === null || P(m) ? t(m) : (e.consume(m), D);
  }
  function q(m) {
    return m === null ||
      m === 34 ||
      m === 39 ||
      m === 47 ||
      m === 60 ||
      m === 61 ||
      m === 62 ||
      m === 96 ||
      J(m)
      ? U(m)
      : (e.consume(m), q);
  }
  function O(m) {
    return m === 47 || m === 62 || _(m) ? C(m) : t(m);
  }
  function B(m) {
    return m === 62 ? (e.consume(m), I) : t(m);
  }
  function I(m) {
    return m === null || P(m) ? E(m) : _(m) ? (e.consume(m), I) : t(m);
  }
  function E(m) {
    return m === 45 && i === 2
      ? (e.consume(m), X)
      : m === 60 && i === 1
        ? (e.consume(m), Y)
        : m === 62 && i === 4
          ? (e.consume(m), le)
          : m === 63 && i === 3
            ? (e.consume(m), h)
            : m === 93 && i === 5
              ? (e.consume(m), pe)
              : P(m) && (i === 6 || i === 7)
                ? (e.exit('htmlFlowData'), e.check(Bl, fe, H)(m))
                : m === null || P(m)
                  ? (e.exit('htmlFlowData'), H(m))
                  : (e.consume(m), E);
  }
  function H(m) {
    return e.check(jl, $, fe)(m);
  }
  function $(m) {
    return (e.enter('lineEnding'), e.consume(m), e.exit('lineEnding'), N);
  }
  function N(m) {
    return m === null || P(m) ? H(m) : (e.enter('htmlFlowData'), E(m));
  }
  function X(m) {
    return m === 45 ? (e.consume(m), h) : E(m);
  }
  function Y(m) {
    return m === 47 ? (e.consume(m), (o = ''), ie) : E(m);
  }
  function ie(m) {
    if (m === 62) {
      const oe = o.toLowerCase();
      return st.includes(oe) ? (e.consume(m), le) : E(m);
    }
    return se(m) && o.length < 8 ? (e.consume(m), (o += String.fromCharCode(m)), ie) : E(m);
  }
  function pe(m) {
    return m === 93 ? (e.consume(m), h) : E(m);
  }
  function h(m) {
    return m === 62 ? (e.consume(m), le) : m === 45 && i === 2 ? (e.consume(m), h) : E(m);
  }
  function le(m) {
    return m === null || P(m) ? (e.exit('htmlFlowData'), fe(m)) : (e.consume(m), le);
  }
  function fe(m) {
    return (e.exit('htmlFlow'), n(m));
  }
}
function Vl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return P(o) ? (e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), l) : t(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
function ql(e, n, t) {
  return r;
  function r(i) {
    return (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), e.attempt(Je, n, t));
  }
}
const $l = { name: 'htmlText', tokenize: Ql };
function Ql(e, n, t) {
  const r = this;
  let i, l, o;
  return a;
  function a(h) {
    return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(h), s);
  }
  function s(h) {
    return h === 33
      ? (e.consume(h), c)
      : h === 47
        ? (e.consume(h), U)
        : h === 63
          ? (e.consume(h), C)
          : se(h)
            ? (e.consume(h), q)
            : t(h);
  }
  function c(h) {
    return h === 45
      ? (e.consume(h), u)
      : h === 91
        ? (e.consume(h), (l = 0), y)
        : se(h)
          ? (e.consume(h), v)
          : t(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), p) : t(h);
  }
  function f(h) {
    return h === null
      ? t(h)
      : h === 45
        ? (e.consume(h), d)
        : P(h)
          ? ((o = f), Y(h))
          : (e.consume(h), f);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? X(h) : h === 45 ? d(h) : f(h);
  }
  function y(h) {
    const le = 'CDATA[';
    return h === le.charCodeAt(l++) ? (e.consume(h), l === le.length ? b : y) : t(h);
  }
  function b(h) {
    return h === null
      ? t(h)
      : h === 93
        ? (e.consume(h), T)
        : P(h)
          ? ((o = b), Y(h))
          : (e.consume(h), b);
  }
  function T(h) {
    return h === 93 ? (e.consume(h), w) : b(h);
  }
  function w(h) {
    return h === 62 ? X(h) : h === 93 ? (e.consume(h), w) : b(h);
  }
  function v(h) {
    return h === null || h === 62 ? X(h) : P(h) ? ((o = v), Y(h)) : (e.consume(h), v);
  }
  function C(h) {
    return h === null
      ? t(h)
      : h === 63
        ? (e.consume(h), j)
        : P(h)
          ? ((o = C), Y(h))
          : (e.consume(h), C);
  }
  function j(h) {
    return h === 62 ? X(h) : C(h);
  }
  function U(h) {
    return se(h) ? (e.consume(h), x) : t(h);
  }
  function x(h) {
    return h === 45 || te(h) ? (e.consume(h), x) : D(h);
  }
  function D(h) {
    return P(h) ? ((o = D), Y(h)) : _(h) ? (e.consume(h), D) : X(h);
  }
  function q(h) {
    return h === 45 || te(h) ? (e.consume(h), q) : h === 47 || h === 62 || J(h) ? O(h) : t(h);
  }
  function O(h) {
    return h === 47
      ? (e.consume(h), X)
      : h === 58 || h === 95 || se(h)
        ? (e.consume(h), B)
        : P(h)
          ? ((o = O), Y(h))
          : _(h)
            ? (e.consume(h), O)
            : X(h);
  }
  function B(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || te(h) ? (e.consume(h), B) : I(h);
  }
  function I(h) {
    return h === 61 ? (e.consume(h), E) : P(h) ? ((o = I), Y(h)) : _(h) ? (e.consume(h), I) : O(h);
  }
  function E(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96
      ? t(h)
      : h === 34 || h === 39
        ? (e.consume(h), (i = h), H)
        : P(h)
          ? ((o = E), Y(h))
          : _(h)
            ? (e.consume(h), E)
            : (e.consume(h), $);
  }
  function H(h) {
    return h === i
      ? (e.consume(h), (i = void 0), N)
      : h === null
        ? t(h)
        : P(h)
          ? ((o = H), Y(h))
          : (e.consume(h), H);
  }
  function $(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96
      ? t(h)
      : h === 47 || h === 62 || J(h)
        ? O(h)
        : (e.consume(h), $);
  }
  function N(h) {
    return h === 47 || h === 62 || J(h) ? O(h) : t(h);
  }
  function X(h) {
    return h === 62 ? (e.consume(h), e.exit('htmlTextData'), e.exit('htmlText'), n) : t(h);
  }
  function Y(h) {
    return (e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(h), e.exit('lineEnding'), ie);
  }
  function ie(h) {
    return _(h)
      ? M(
          e,
          pe,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
        )(h)
      : pe(h);
  }
  function pe(h) {
    return (e.enter('htmlTextData'), o(h));
  }
}
const _n = { name: 'labelEnd', resolveAll: Gl, resolveTo: Kl, tokenize: Jl },
  Yl = { tokenize: Zl },
  Wl = { tokenize: eo },
  Xl = { tokenize: no };
function Gl(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (
      (t.push(e[n]), r.type === 'labelImage' || r.type === 'labelLink' || r.type === 'labelEnd')
    ) {
      const i = r.type === 'labelImage' ? 4 : 2;
      ((r.type = 'data'), (n += i));
    }
  }
  return (e.length !== t.length && ce(e, 0, e.length, t), e);
}
function Kl(e, n) {
  let t = e.length,
    r = 0,
    i,
    l,
    o,
    a;
  for (; t--; )
    if (((i = e[t][1]), l)) {
      if (i.type === 'link' || (i.type === 'labelLink' && i._inactive)) break;
      e[t][0] === 'enter' && i.type === 'labelLink' && (i._inactive = !0);
    } else if (o) {
      if (
        e[t][0] === 'enter' &&
        (i.type === 'labelImage' || i.type === 'labelLink') &&
        !i._balanced &&
        ((l = t), i.type !== 'labelLink')
      ) {
        r = 2;
        break;
      }
    } else i.type === 'labelEnd' && (o = t);
  const s = {
      type: e[l][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...e[l][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    c = { type: 'label', start: { ...e[l][1].start }, end: { ...e[o][1].end } },
    u = { type: 'labelText', start: { ...e[l + r + 2][1].end }, end: { ...e[o - 2][1].start } };
  return (
    (a = [
      ['enter', s, n],
      ['enter', c, n],
    ]),
    (a = re(a, e.slice(l + 1, l + r + 3))),
    (a = re(a, [['enter', u, n]])),
    (a = re(a, Nn(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n))),
    (a = re(a, [['exit', u, n], e[o - 2], e[o - 1], ['exit', c, n]])),
    (a = re(a, e.slice(o + 1))),
    (a = re(a, [['exit', s, n]])),
    ce(e, l, e.length, a),
    e
  );
}
function Jl(e, n, t) {
  const r = this;
  let i = r.events.length,
    l,
    o;
  for (; i--; )
    if (
      (r.events[i][1].type === 'labelImage' || r.events[i][1].type === 'labelLink') &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return l
      ? l._inactive
        ? f(d)
        : ((o = r.parser.defined.includes(Ae(r.sliceSerialize({ start: l.end, end: r.now() })))),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(d),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          s)
      : t(d);
  }
  function s(d) {
    return d === 40
      ? e.attempt(Yl, u, o ? u : f)(d)
      : d === 91
        ? e.attempt(Wl, u, o ? c : f)(d)
        : o
          ? u(d)
          : f(d);
  }
  function c(d) {
    return e.attempt(Xl, u, f)(d);
  }
  function u(d) {
    return n(d);
  }
  function f(d) {
    return ((l._balanced = !0), t(d));
  }
}
function Zl(e, n, t) {
  return r;
  function r(f) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(f),
      e.exit('resourceMarker'),
      i
    );
  }
  function i(f) {
    return J(f) ? Re(e, l)(f) : l(f);
  }
  function l(f) {
    return f === 41
      ? u(f)
      : tr(
          e,
          o,
          a,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32,
        )(f);
  }
  function o(f) {
    return J(f) ? Re(e, s)(f) : u(f);
  }
  function a(f) {
    return t(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40
      ? ir(e, c, t, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(f)
      : u(f);
  }
  function c(f) {
    return J(f) ? Re(e, u)(f) : u(f);
  }
  function u(f) {
    return f === 41
      ? (e.enter('resourceMarker'), e.consume(f), e.exit('resourceMarker'), e.exit('resource'), n)
      : t(f);
  }
}
function eo(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return rr.call(r, e, l, o, 'reference', 'referenceMarker', 'referenceString')(a);
  }
  function l(a) {
    return r.parser.defined.includes(
      Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
    )
      ? n(a)
      : t(a);
  }
  function o(a) {
    return t(a);
  }
}
function no(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(l),
      e.exit('referenceMarker'),
      i
    );
  }
  function i(l) {
    return l === 93
      ? (e.enter('referenceMarker'),
        e.consume(l),
        e.exit('referenceMarker'),
        e.exit('reference'),
        n)
      : t(l);
  }
}
const to = { name: 'labelStartImage', resolveAll: _n.resolveAll, tokenize: ro };
function ro(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(a),
      e.exit('labelImageMarker'),
      l
    );
  }
  function l(a) {
    return a === 91
      ? (e.enter('labelMarker'), e.consume(a), e.exit('labelMarker'), e.exit('labelImage'), o)
      : t(a);
  }
  function o(a) {
    return a === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? t(a) : n(a);
  }
}
const io = { name: 'labelStartLink', resolveAll: _n.resolveAll, tokenize: lo };
function lo(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(o),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      l
    );
  }
  function l(o) {
    return o === 94 && '_hiddenFootnoteSupport' in r.parser.constructs ? t(o) : n(o);
  }
}
const ln = { name: 'lineEnding', tokenize: oo };
function oo(e, n) {
  return t;
  function t(r) {
    return (e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), M(e, n, 'linePrefix'));
  }
}
const Qe = { name: 'thematicBreak', tokenize: ao };
function ao(e, n, t) {
  let r = 0,
    i;
  return l;
  function l(c) {
    return (e.enter('thematicBreak'), o(c));
  }
  function o(c) {
    return ((i = c), a(c));
  }
  function a(c) {
    return c === i
      ? (e.enter('thematicBreakSequence'), s(c))
      : r >= 3 && (c === null || P(c))
        ? (e.exit('thematicBreak'), n(c))
        : t(c);
  }
  function s(c) {
    return c === i
      ? (e.consume(c), r++, s)
      : (e.exit('thematicBreakSequence'), _(c) ? M(e, a, 'whitespace')(c) : a(c));
  }
}
const K = { continuation: { tokenize: po }, exit: ho, name: 'list', tokenize: co },
  uo = { partial: !0, tokenize: mo },
  so = { partial: !0, tokenize: fo };
function co(e, n, t) {
  const r = this,
    i = r.events[r.events.length - 1];
  let l = i && i[1].type === 'linePrefix' ? i[2].sliceSerialize(i[1], !0).length : 0,
    o = 0;
  return a;
  function a(p) {
    const y =
      r.containerState.type || (p === 42 || p === 43 || p === 45 ? 'listUnordered' : 'listOrdered');
    if (y === 'listUnordered' ? !r.containerState.marker || p === r.containerState.marker : kn(p)) {
      if (
        (r.containerState.type || ((r.containerState.type = y), e.enter(y, { _container: !0 })),
        y === 'listUnordered')
      )
        return (e.enter('listItemPrefix'), p === 42 || p === 45 ? e.check(Qe, t, c)(p) : c(p));
      if (!r.interrupt || p === 49)
        return (e.enter('listItemPrefix'), e.enter('listItemValue'), s(p));
    }
    return t(p);
  }
  function s(p) {
    return kn(p) && ++o < 10
      ? (e.consume(p), s)
      : (!r.interrupt || o < 2) &&
          (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46)
        ? (e.exit('listItemValue'), c(p))
        : t(p);
  }
  function c(p) {
    return (
      e.enter('listItemMarker'),
      e.consume(p),
      e.exit('listItemMarker'),
      (r.containerState.marker = r.containerState.marker || p),
      e.check(Je, r.interrupt ? t : u, e.attempt(uo, d, f))
    );
  }
  function u(p) {
    return ((r.containerState.initialBlankLine = !0), l++, d(p));
  }
  function f(p) {
    return _(p)
      ? (e.enter('listItemPrefixWhitespace'), e.consume(p), e.exit('listItemPrefixWhitespace'), d)
      : t(p);
  }
  function d(p) {
    return (
      (r.containerState.size = l + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      n(p)
    );
  }
}
function po(e, n, t) {
  const r = this;
  return ((r.containerState._closeFlow = void 0), e.check(Je, i, l));
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
      M(e, n, 'listItemIndent', r.containerState.size + 1)(a)
    );
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !_(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(so, n, o)(a));
  }
  function o(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      M(
        e,
        e.attempt(K, n, t),
        'linePrefix',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(a)
    );
  }
}
function fo(e, n, t) {
  const r = this;
  return M(e, i, 'listItemIndent', r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o &&
      o[1].type === 'listItemIndent' &&
      o[2].sliceSerialize(o[1], !0).length === r.containerState.size
      ? n(l)
      : t(l);
  }
}
function ho(e) {
  e.exit(this.containerState.type);
}
function mo(e, n, t) {
  const r = this;
  return M(
    e,
    i,
    'listItemPrefixWhitespace',
    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !_(l) && o && o[1].type === 'listItemPrefixWhitespace' ? n(l) : t(l);
  }
}
const ct = { name: 'setextUnderline', resolveTo: go, tokenize: yo };
function go(e, n) {
  let t = e.length,
    r,
    i,
    l;
  for (; t--; )
    if (e[t][0] === 'enter') {
      if (e[t][1].type === 'content') {
        r = t;
        break;
      }
      e[t][1].type === 'paragraph' && (i = t);
    } else
      (e[t][1].type === 'content' && e.splice(t, 1),
        !l && e[t][1].type === 'definition' && (l = t));
  const o = {
    type: 'setextHeading',
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = 'setextHeadingText'),
    l
      ? (e.splice(i, 0, ['enter', o, n]),
        e.splice(l + 1, 0, ['exit', e[r][1], n]),
        (e[r][1].end = { ...e[l][1].end }))
      : (e[r][1] = o),
    e.push(['exit', o, n]),
    e
  );
}
function yo(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(c) {
    let u = r.events.length,
      f;
    for (; u--; )
      if (
        r.events[u][1].type !== 'lineEnding' &&
        r.events[u][1].type !== 'linePrefix' &&
        r.events[u][1].type !== 'content'
      ) {
        f = r.events[u][1].type === 'paragraph';
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f)
      ? (e.enter('setextHeadingLine'), (i = c), o(c))
      : t(c);
  }
  function o(c) {
    return (e.enter('setextHeadingLineSequence'), a(c));
  }
  function a(c) {
    return c === i
      ? (e.consume(c), a)
      : (e.exit('setextHeadingLineSequence'), _(c) ? M(e, s, 'lineSuffix')(c) : s(c));
  }
  function s(c) {
    return c === null || P(c) ? (e.exit('setextHeadingLine'), n(c)) : t(c);
  }
}
const xo = { tokenize: ko };
function ko(e) {
  const n = this,
    t = e.attempt(
      Je,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        M(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Cl, i)), 'linePrefix'),
      ),
    );
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(l),
      e.exit('lineEndingBlank'),
      (n.currentConstruct = void 0),
      t
    );
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter('lineEnding'),
      e.consume(l),
      e.exit('lineEnding'),
      (n.currentConstruct = void 0),
      t
    );
  }
}
const bo = { resolveAll: or() },
  wo = lr('string'),
  So = lr('text');
function lr(e) {
  return { resolveAll: or(e === 'text' ? Co : void 0), tokenize: n };
  function n(t) {
    const r = this,
      i = this.parser.constructs[e],
      l = t.attempt(i, o, a);
    return o;
    function o(u) {
      return c(u) ? l(u) : a(u);
    }
    function a(u) {
      if (u === null) {
        t.consume(u);
        return;
      }
      return (t.enter('data'), t.consume(u), s);
    }
    function s(u) {
      return c(u) ? (t.exit('data'), l(u)) : (t.consume(u), s);
    }
    function c(u) {
      if (u === null) return !0;
      const f = i[u];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function or(e) {
  return n;
  function n(t, r) {
    let i = -1,
      l;
    for (; ++i <= t.length; )
      l === void 0
        ? t[i] && t[i][1].type === 'data' && ((l = i), i++)
        : (!t[i] || t[i][1].type !== 'data') &&
          (i !== l + 2 &&
            ((t[l][1].end = t[i - 1][1].end), t.splice(l + 2, i - l - 2), (i = l + 2)),
          (l = void 0));
    return e ? e(t, r) : t;
  }
}
function Co(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === 'lineEnding') && e[t - 1][1].type === 'data') {
      const r = e[t - 1][1],
        i = n.sliceStream(r);
      let l = i.length,
        o = -1,
        a = 0,
        s;
      for (; l--; ) {
        const c = i[l];
        if (typeof c == 'string') {
          for (o = c.length; c.charCodeAt(o - 1) === 32; ) (a++, o--);
          if (o) break;
          o = -1;
        } else if (c === -2) ((s = !0), a++);
        else if (c !== -1) {
          l++;
          break;
        }
      }
      if ((n._contentTypeTextTrailing && t === e.length && (a = 0), a)) {
        const c = {
          type: t === e.length || s || a < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: { ...r.end },
        };
        ((r.end = { ...c.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, c)
            : (e.splice(t, 0, ['enter', c, n], ['exit', c, n]), (t += 2)));
      }
      t++;
    }
  return e;
}
const Eo = {
    42: K,
    43: K,
    45: K,
    48: K,
    49: K,
    50: K,
    51: K,
    52: K,
    53: K,
    54: K,
    55: K,
    56: K,
    57: K,
    62: Jt,
  },
  Io = { 91: Al },
  To = { [-2]: rn, [-1]: rn, 32: rn },
  Po = { 35: Dl, 42: Qe, 45: [ct, Qe], 60: Ml, 61: ct, 95: Qe, 96: ut, 126: ut },
  Ao = { 38: er, 92: Zt },
  zo = {
    [-5]: ln,
    [-4]: ln,
    [-3]: ln,
    33: to,
    38: er,
    42: bn,
    60: [il, $l],
    91: io,
    92: [Nl, Zt],
    93: _n,
    95: bn,
    96: yl,
  },
  vo = { null: [bn, bo] },
  Lo = { null: [42, 95] },
  No = { null: [] },
  _o = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: Lo,
        contentInitial: Io,
        disable: No,
        document: Eo,
        flow: Po,
        flowInitial: To,
        insideSpan: vo,
        string: Ao,
        text: zo,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function Do(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (t && t.line) || 1,
    column: (t && t.column) || 1,
    offset: (t && t.offset) || 0,
  };
  const i = {},
    l = [];
  let o = [],
    a = [];
  const s = {
      attempt: D(U),
      check: D(x),
      consume: v,
      enter: C,
      exit: j,
      interrupt: D(x, { interrupt: !0 }),
    },
    c = {
      code: null,
      containerState: {},
      defineSkip: b,
      events: [],
      now: y,
      parser: e,
      previous: null,
      sliceSerialize: d,
      sliceStream: p,
      write: f,
    };
  let u = n.tokenize.call(c, s);
  return (n.resolveAll && l.push(n), c);
  function f(I) {
    return (
      (o = re(o, I)),
      T(),
      o[o.length - 1] !== null ? [] : (q(n, 0), (c.events = Nn(l, c.events, c)), c.events)
    );
  }
  function d(I, E) {
    return Fo(p(I), E);
  }
  function p(I) {
    return Oo(o, I);
  }
  function y() {
    const { _bufferIndex: I, _index: E, line: H, column: $, offset: N } = r;
    return { _bufferIndex: I, _index: E, line: H, column: $, offset: N };
  }
  function b(I) {
    ((i[I.line] = I.column), B());
  }
  function T() {
    let I;
    for (; r._index < o.length; ) {
      const E = o[r._index];
      if (typeof E == 'string')
        for (
          I = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === I && r._bufferIndex < E.length;

        )
          w(E.charCodeAt(r._bufferIndex));
      else w(E);
    }
  }
  function w(I) {
    u = u(I);
  }
  function v(I) {
    (P(I)
      ? (r.line++, (r.column = 1), (r.offset += I === -3 ? 2 : 1), B())
      : I !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length && ((r._bufferIndex = -1), r._index++)),
      (c.previous = I));
  }
  function C(I, E) {
    const H = E || {};
    return ((H.type = I), (H.start = y()), c.events.push(['enter', H, c]), a.push(H), H);
  }
  function j(I) {
    const E = a.pop();
    return ((E.end = y()), c.events.push(['exit', E, c]), E);
  }
  function U(I, E) {
    q(I, E.from);
  }
  function x(I, E) {
    E.restore();
  }
  function D(I, E) {
    return H;
    function H($, N, X) {
      let Y, ie, pe, h;
      return Array.isArray($) ? fe($) : 'tokenize' in $ ? fe([$]) : le($);
      function le(W) {
        return Le;
        function Le(de) {
          const Se = de !== null && W[de],
            Ce = de !== null && W.null,
            Ue = [
              ...(Array.isArray(Se) ? Se : Se ? [Se] : []),
              ...(Array.isArray(Ce) ? Ce : Ce ? [Ce] : []),
            ];
          return fe(Ue)(de);
        }
      }
      function fe(W) {
        return ((Y = W), (ie = 0), W.length === 0 ? X : m(W[ie]));
      }
      function m(W) {
        return Le;
        function Le(de) {
          return (
            (h = O()),
            (pe = W),
            W.partial || (c.currentConstruct = W),
            W.name && c.parser.constructs.disable.null.includes(W.name)
              ? xe()
              : W.tokenize.call(E ? Object.assign(Object.create(c), E) : c, s, oe, xe)(de)
          );
        }
      }
      function oe(W) {
        return (I(pe, h), N);
      }
      function xe(W) {
        return (h.restore(), ++ie < Y.length ? m(Y[ie]) : X);
      }
    }
  }
  function q(I, E) {
    (I.resolveAll && !l.includes(I) && l.push(I),
      I.resolve && ce(c.events, E, c.events.length - E, I.resolve(c.events.slice(E), c)),
      I.resolveTo && (c.events = I.resolveTo(c.events, c)));
  }
  function O() {
    const I = y(),
      E = c.previous,
      H = c.currentConstruct,
      $ = c.events.length,
      N = Array.from(a);
    return { from: $, restore: X };
    function X() {
      ((r = I), (c.previous = E), (c.currentConstruct = H), (c.events.length = $), (a = N), B());
    }
  }
  function B() {
    r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function Oo(e, n) {
  const t = n.start._index,
    r = n.start._bufferIndex,
    i = n.end._index,
    l = n.end._bufferIndex;
  let o;
  if (t === i) o = [e[t].slice(r, l)];
  else {
    if (((o = e.slice(t, i)), r > -1)) {
      const a = o[0];
      typeof a == 'string' ? (o[0] = a.slice(r)) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function Fo(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const l = e[t];
    let o;
    if (typeof l == 'string') o = l;
    else
      switch (l) {
        case -5: {
          o = '\r';
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = n ? ' ' : '	';
          break;
        }
        case -1: {
          if (!n && i) continue;
          o = ' ';
          break;
        }
        default:
          o = String.fromCharCode(l);
      }
    ((i = l === -2), r.push(o));
  }
  return r.join('');
}
function Ro(e) {
  const r = {
    constructs: Vi([_o, ...((e || {}).extensions || [])]),
    content: i(Ki),
    defined: [],
    document: i(Zi),
    flow: i(xo),
    lazy: {},
    string: i(wo),
    text: i(So),
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Do(r, l, a);
    }
  }
}
function Mo(e) {
  for (; !nr(e); );
  return e;
}
const pt = /[\0\t\n\r]/g;
function Bo() {
  let e = 1,
    n = '',
    t = !0,
    r;
  return i;
  function i(l, o, a) {
    const s = [];
    let c, u, f, d, p;
    for (
      l = n + (typeof l == 'string' ? l.toString() : new TextDecoder(o || void 0).decode(l)),
        f = 0,
        n = '',
        t && (l.charCodeAt(0) === 65279 && f++, (t = void 0));
      f < l.length;

    ) {
      if (
        ((pt.lastIndex = f),
        (c = pt.exec(l)),
        (d = c && c.index !== void 0 ? c.index : l.length),
        (p = l.charCodeAt(d)),
        !c)
      ) {
        n = l.slice(f);
        break;
      }
      if (p === 10 && f === d && r) (s.push(-3), (r = void 0));
      else
        switch (
          (r && (s.push(-5), (r = void 0)), f < d && (s.push(l.slice(f, d)), (e += d - f)), p)
        ) {
          case 0: {
            (s.push(65533), e++);
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, s.push(-2); e++ < u; ) s.push(-1);
            break;
          }
          case 10: {
            (s.push(-4), (e = 1));
            break;
          }
          default:
            ((r = !0), (e = 1));
        }
      f = d + 1;
    }
    return (a && (r && s.push(-5), n && s.push(n), s.push(null)), s);
  }
}
const jo = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ho(e) {
  return e.replace(jo, Uo);
}
function Uo(e, n, t) {
  if (n) return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1),
      l = i === 120 || i === 88;
    return Kt(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Ln(t) || e;
}
const ar = {}.hasOwnProperty;
function Vo(e, n, t) {
  return (
    typeof n != 'string' && ((t = n), (n = void 0)),
    qo(t)(
      Mo(
        Ro(t)
          .document()
          .write(Bo()(e, n, !0)),
      ),
    )
  );
}
function qo(e) {
  const n = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: l(Un),
      autolinkProtocol: O,
      autolinkEmail: O,
      atxHeading: l(Bn),
      blockQuote: l(Ce),
      characterEscape: O,
      characterReference: O,
      codeFenced: l(Ue),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ue, o),
      codeText: l(kr, o),
      codeTextData: O,
      data: O,
      codeFlowValue: O,
      definition: l(br),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(wr),
      hardBreakEscape: l(jn),
      hardBreakTrailing: l(jn),
      htmlFlow: l(Hn, o),
      htmlFlowData: O,
      htmlText: l(Hn, o),
      htmlTextData: O,
      image: l(Sr),
      label: o,
      link: l(Un),
      listItem: l(Cr),
      listItemValue: d,
      listOrdered: l(Vn, f),
      listUnordered: l(Vn),
      paragraph: l(Er),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(Bn),
      strong: l(Ir),
      thematicBreak: l(Pr),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: U,
      autolink: s(),
      autolinkEmail: Se,
      autolinkProtocol: de,
      blockQuote: s(),
      characterEscapeValue: B,
      characterReferenceMarkerHexadecimal: xe,
      characterReferenceMarkerNumeric: xe,
      characterReferenceValue: W,
      characterReference: Le,
      codeFenced: s(T),
      codeFencedFence: b,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: y,
      codeFlowValue: B,
      codeIndented: s(w),
      codeText: s(N),
      codeTextData: B,
      data: B,
      definition: s(),
      definitionDestinationString: j,
      definitionLabelString: v,
      definitionTitleString: C,
      emphasis: s(),
      hardBreakEscape: s(E),
      hardBreakTrailing: s(E),
      htmlFlow: s(H),
      htmlFlowData: B,
      htmlText: s($),
      htmlTextData: B,
      image: s(Y),
      label: pe,
      labelText: ie,
      lineEnding: I,
      link: s(X),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: oe,
      resourceDestinationString: h,
      resourceTitleString: le,
      resource: fe,
      setextHeading: s(q),
      setextHeadingLineSequence: D,
      setextHeadingText: x,
      strong: s(),
      thematicBreak: s(),
    },
  };
  ur(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(g) {
    let S = { type: 'root', children: [] };
    const A = {
        stack: [S],
        tokenStack: [],
        config: n,
        enter: a,
        exit: c,
        buffer: o,
        resume: u,
        data: t,
      },
      L = [];
    let F = -1;
    for (; ++F < g.length; )
      if (g[F][1].type === 'listOrdered' || g[F][1].type === 'listUnordered')
        if (g[F][0] === 'enter') L.push(F);
        else {
          const ae = L.pop();
          F = i(g, ae, F);
        }
    for (F = -1; ++F < g.length; ) {
      const ae = n[g[F][0]];
      ar.call(ae, g[F][1].type) &&
        ae[g[F][1].type].call(
          Object.assign({ sliceSerialize: g[F][2].sliceSerialize }, A),
          g[F][1],
        );
    }
    if (A.tokenStack.length > 0) {
      const ae = A.tokenStack[A.tokenStack.length - 1];
      (ae[1] || ft).call(A, void 0, ae[0]);
    }
    for (
      S.position = {
        start: ge(g.length > 0 ? g[0][1].start : { line: 1, column: 1, offset: 0 }),
        end: ge(g.length > 0 ? g[g.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
      },
        F = -1;
      ++F < n.transforms.length;

    )
      S = n.transforms[F](S) || S;
    return S;
  }
  function i(g, S, A) {
    let L = S - 1,
      F = -1,
      ae = !1,
      ke,
      he,
      Ne,
      _e;
    for (; ++L <= A; ) {
      const ee = g[L];
      switch (ee[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (ee[0] === 'enter' ? F++ : F--, (_e = void 0));
          break;
        }
        case 'lineEndingBlank': {
          ee[0] === 'enter' && (ke && !_e && !F && !Ne && (Ne = L), (_e = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          _e = void 0;
      }
      if (
        (!F && ee[0] === 'enter' && ee[1].type === 'listItemPrefix') ||
        (F === -1 &&
          ee[0] === 'exit' &&
          (ee[1].type === 'listUnordered' || ee[1].type === 'listOrdered'))
      ) {
        if (ke) {
          let Ee = L;
          for (he = void 0; Ee--; ) {
            const me = g[Ee];
            if (me[1].type === 'lineEnding' || me[1].type === 'lineEndingBlank') {
              if (me[0] === 'exit') continue;
              (he && ((g[he][1].type = 'lineEndingBlank'), (ae = !0)),
                (me[1].type = 'lineEnding'),
                (he = Ee));
            } else if (
              !(
                me[1].type === 'linePrefix' ||
                me[1].type === 'blockQuotePrefix' ||
                me[1].type === 'blockQuotePrefixWhitespace' ||
                me[1].type === 'blockQuoteMarker' ||
                me[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (Ne && (!he || Ne < he) && (ke._spread = !0),
            (ke.end = Object.assign({}, he ? g[he][1].start : ee[1].end)),
            g.splice(he || L, 0, ['exit', ke, ee[2]]),
            L++,
            A++);
        }
        if (ee[1].type === 'listItemPrefix') {
          const Ee = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, ee[1].start),
            end: void 0,
          };
          ((ke = Ee), g.splice(L, 0, ['enter', Ee, ee[2]]), L++, A++, (Ne = void 0), (_e = !0));
        }
      }
    }
    return ((g[S][1]._spread = ae), A);
  }
  function l(g, S) {
    return A;
    function A(L) {
      (a.call(this, g(L), L), S && S.call(this, L));
    }
  }
  function o() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function a(g, S, A) {
    (this.stack[this.stack.length - 1].children.push(g),
      this.stack.push(g),
      this.tokenStack.push([S, A || void 0]),
      (g.position = { start: ge(S.start), end: void 0 }));
  }
  function s(g) {
    return S;
    function S(A) {
      (g && g.call(this, A), c.call(this, A));
    }
  }
  function c(g, S) {
    const A = this.stack.pop(),
      L = this.tokenStack.pop();
    if (L) L[0].type !== g.type && (S ? S.call(this, g, L[0]) : (L[1] || ft).call(this, g, L[0]));
    else
      throw new Error(
        'Cannot close `' + g.type + '` (' + Fe({ start: g.start, end: g.end }) + '): it’s not open',
      );
    A.position.end = ge(g.end);
  }
  function u() {
    return Hi(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(g) {
    if (this.data.expectingFirstListItemValue) {
      const S = this.stack[this.stack.length - 2];
      ((S.start = Number.parseInt(this.sliceSerialize(g), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function p() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.lang = g;
  }
  function y() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.meta = g;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function T() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    ((S.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0));
  }
  function w() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.value = g.replace(/(\r?\n|\r)$/g, '');
  }
  function v(g) {
    const S = this.resume(),
      A = this.stack[this.stack.length - 1];
    ((A.label = S), (A.identifier = Ae(this.sliceSerialize(g)).toLowerCase()));
  }
  function C() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.title = g;
  }
  function j() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.url = g;
  }
  function U(g) {
    const S = this.stack[this.stack.length - 1];
    if (!S.depth) {
      const A = this.sliceSerialize(g).length;
      S.depth = A;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function D(g) {
    const S = this.stack[this.stack.length - 1];
    S.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2;
  }
  function q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function O(g) {
    const A = this.stack[this.stack.length - 1].children;
    let L = A[A.length - 1];
    ((!L || L.type !== 'text') &&
      ((L = Tr()), (L.position = { start: ge(g.start), end: void 0 }), A.push(L)),
      this.stack.push(L));
  }
  function B(g) {
    const S = this.stack.pop();
    ((S.value += this.sliceSerialize(g)), (S.position.end = ge(g.end)));
  }
  function I(g) {
    const S = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const A = S.children[S.children.length - 1];
      ((A.position.end = ge(g.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      n.canContainEols.includes(S.type) &&
      (O.call(this, g), B.call(this, g));
  }
  function E() {
    this.data.atHardBreak = !0;
  }
  function H() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.value = g;
  }
  function $() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.value = g;
  }
  function N() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.value = g;
  }
  function X() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const S = this.data.referenceType || 'shortcut';
      ((g.type += 'Reference'), (g.referenceType = S), delete g.url, delete g.title);
    } else (delete g.identifier, delete g.label);
    this.data.referenceType = void 0;
  }
  function Y() {
    const g = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const S = this.data.referenceType || 'shortcut';
      ((g.type += 'Reference'), (g.referenceType = S), delete g.url, delete g.title);
    } else (delete g.identifier, delete g.label);
    this.data.referenceType = void 0;
  }
  function ie(g) {
    const S = this.sliceSerialize(g),
      A = this.stack[this.stack.length - 2];
    ((A.label = Ho(S)), (A.identifier = Ae(S).toLowerCase()));
  }
  function pe() {
    const g = this.stack[this.stack.length - 1],
      S = this.resume(),
      A = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), A.type === 'link')) {
      const L = g.children;
      A.children = L;
    } else A.alt = S;
  }
  function h() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.url = g;
  }
  function le() {
    const g = this.resume(),
      S = this.stack[this.stack.length - 1];
    S.title = g;
  }
  function fe() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = 'collapsed';
  }
  function oe(g) {
    const S = this.resume(),
      A = this.stack[this.stack.length - 1];
    ((A.label = S),
      (A.identifier = Ae(this.sliceSerialize(g)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function xe(g) {
    this.data.characterReferenceType = g.type;
  }
  function W(g) {
    const S = this.sliceSerialize(g),
      A = this.data.characterReferenceType;
    let L;
    A
      ? ((L = Kt(S, A === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (L = Ln(S));
    const F = this.stack[this.stack.length - 1];
    F.value += L;
  }
  function Le(g) {
    const S = this.stack.pop();
    S.position.end = ge(g.end);
  }
  function de(g) {
    B.call(this, g);
    const S = this.stack[this.stack.length - 1];
    S.url = this.sliceSerialize(g);
  }
  function Se(g) {
    B.call(this, g);
    const S = this.stack[this.stack.length - 1];
    S.url = 'mailto:' + this.sliceSerialize(g);
  }
  function Ce() {
    return { type: 'blockquote', children: [] };
  }
  function Ue() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function kr() {
    return { type: 'inlineCode', value: '' };
  }
  function br() {
    return { type: 'definition', identifier: '', label: null, title: null, url: '' };
  }
  function wr() {
    return { type: 'emphasis', children: [] };
  }
  function Bn() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function jn() {
    return { type: 'break' };
  }
  function Hn() {
    return { type: 'html', value: '' };
  }
  function Sr() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function Un() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function Vn(g) {
    return {
      type: 'list',
      ordered: g.type === 'listOrdered',
      start: null,
      spread: g._spread,
      children: [],
    };
  }
  function Cr(g) {
    return { type: 'listItem', spread: g._spread, checked: null, children: [] };
  }
  function Er() {
    return { type: 'paragraph', children: [] };
  }
  function Ir() {
    return { type: 'strong', children: [] };
  }
  function Tr() {
    return { type: 'text', value: '' };
  }
  function Pr() {
    return { type: 'thematicBreak' };
  }
}
function ge(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function ur(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? ur(e, r) : $o(e, r);
  }
}
function $o(e, n) {
  let t;
  for (t in n)
    if (ar.call(n, t))
      switch (t) {
        case 'canContainEols': {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case 'transforms': {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case 'enter':
        case 'exit': {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function ft(e, n) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          Fe({ start: e.start, end: e.end }) +
          '): a different token (`' +
          n.type +
          '`, ' +
          Fe({ start: n.start, end: n.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          n.type +
          '`, ' +
          Fe({ start: n.start, end: n.end }) +
          ') is still open',
      );
}
function Qo(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return Vo(r, {
      ...n.data('settings'),
      ...e,
      extensions: n.data('micromarkExtensions') || [],
      mdastExtensions: n.data('fromMarkdownExtensions') || [],
    });
  }
}
function Yo(e, n) {
  const t = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(n), !0),
  };
  return (e.patch(n, t), e.applyData(n, t));
}
function Wo(e, n) {
  const t = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    e.patch(n, t),
    [
      e.applyData(n, t),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function Xo(e, n) {
  const t = n.value
      ? n.value +
        `
`
      : '',
    r = {};
  n.lang && (r.className = ['language-' + n.lang]);
  let i = {
    type: 'element',
    tagName: 'code',
    properties: r,
    children: [{ type: 'text', value: t }],
  };
  return (
    n.meta && (i.data = { meta: n.meta }),
    e.patch(n, i),
    (i = e.applyData(n, i)),
    (i = { type: 'element', tagName: 'pre', properties: {}, children: [i] }),
    e.patch(n, i),
    i
  );
}
function Go(e, n) {
  const t = { type: 'element', tagName: 'del', properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
function Ko(e, n) {
  const t = { type: 'element', tagName: 'em', properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
function Jo(e, n) {
  const t = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    r = String(n.identifier).toUpperCase(),
    i = ve(r.toLowerCase()),
    l = e.footnoteOrder.indexOf(r);
  let o,
    a = e.footnoteCounts.get(r);
  (a === void 0 ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length)) : (o = l + 1),
    (a += 1),
    e.footnoteCounts.set(r, a));
  const s = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + t + 'fn-' + i,
      id: t + 'fnref-' + i + (a > 1 ? '-' + a : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(o) }],
  };
  e.patch(n, s);
  const c = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
  return (e.patch(n, c), e.applyData(n, c));
}
function Zo(e, n) {
  const t = { type: 'element', tagName: 'h' + n.depth, properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
function ea(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: 'raw', value: n.value };
    return (e.patch(n, t), e.applyData(n, t));
  }
}
function sr(e, n) {
  const t = n.referenceType;
  let r = ']';
  if (
    (t === 'collapsed' ? (r += '[]') : t === 'full' && (r += '[' + (n.label || n.identifier) + ']'),
    n.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + n.alt + r }];
  const i = e.all(n),
    l = i[0];
  l && l.type === 'text' ? (l.value = '[' + l.value) : i.unshift({ type: 'text', value: '[' });
  const o = i[i.length - 1];
  return (o && o.type === 'text' ? (o.value += r) : i.push({ type: 'text', value: r }), i);
}
function na(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t);
  if (!r) return sr(e, n);
  const i = { src: ve(r.url || ''), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: 'element', tagName: 'img', properties: i, children: [] };
  return (e.patch(n, l), e.applyData(n, l));
}
function ta(e, n) {
  const t = { src: ve(n.url) };
  (n.alt !== null && n.alt !== void 0 && (t.alt = n.alt),
    n.title !== null && n.title !== void 0 && (t.title = n.title));
  const r = { type: 'element', tagName: 'img', properties: t, children: [] };
  return (e.patch(n, r), e.applyData(n, r));
}
function ra(e, n) {
  const t = { type: 'text', value: n.value.replace(/\r?\n|\r/g, ' ') };
  e.patch(n, t);
  const r = { type: 'element', tagName: 'code', properties: {}, children: [t] };
  return (e.patch(n, r), e.applyData(n, r));
}
function ia(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t);
  if (!r) return sr(e, n);
  const i = { href: ve(r.url || '') };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: 'element', tagName: 'a', properties: i, children: e.all(n) };
  return (e.patch(n, l), e.applyData(n, l));
}
function la(e, n) {
  const t = { href: ve(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: 'element', tagName: 'a', properties: t, children: e.all(n) };
  return (e.patch(n, r), e.applyData(n, r));
}
function oa(e, n, t) {
  const r = e.all(n),
    i = t ? aa(t) : cr(n),
    l = {},
    o = [];
  if (typeof n.checked == 'boolean') {
    const u = r[0];
    let f;
    (u && u.type === 'element' && u.tagName === 'p'
      ? (f = u)
      : ((f = { type: 'element', tagName: 'p', properties: {}, children: [] }), r.unshift(f)),
      f.children.length > 0 && f.children.unshift({ type: 'text', value: ' ' }),
      f.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: n.checked, disabled: !0 },
        children: [],
      }),
      (l.className = ['task-list-item']));
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    ((i || a !== 0 || u.type !== 'element' || u.tagName !== 'p') &&
      o.push({
        type: 'text',
        value: `
`,
      }),
      u.type === 'element' && u.tagName === 'p' && !i ? o.push(...u.children) : o.push(u));
  }
  const s = r[r.length - 1];
  s &&
    (i || s.type !== 'element' || s.tagName !== 'p') &&
    o.push({
      type: 'text',
      value: `
`,
    });
  const c = { type: 'element', tagName: 'li', properties: l, children: o };
  return (e.patch(n, c), e.applyData(n, c));
}
function aa(e) {
  let n = !1;
  if (e.type === 'list') {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; ) n = cr(t[r]);
  }
  return n;
}
function cr(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function ua(e, n) {
  const t = {},
    r = e.all(n);
  let i = -1;
  for (typeof n.start == 'number' && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const o = r[i];
    if (
      o.type === 'element' &&
      o.tagName === 'li' &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes('task-list-item')
    ) {
      t.className = ['contains-task-list'];
      break;
    }
  }
  const l = {
    type: 'element',
    tagName: n.ordered ? 'ol' : 'ul',
    properties: t,
    children: e.wrap(r, !0),
  };
  return (e.patch(n, l), e.applyData(n, l));
}
function sa(e, n) {
  const t = { type: 'element', tagName: 'p', properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
function ca(e, n) {
  const t = { type: 'root', children: e.wrap(e.all(n)) };
  return (e.patch(n, t), e.applyData(n, t));
}
function pa(e, n) {
  const t = { type: 'element', tagName: 'strong', properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
function fa(e, n) {
  const t = e.all(n),
    r = t.shift(),
    i = [];
  if (r) {
    const o = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([r], !0) };
    (e.patch(n.children[0], o), i.push(o));
  }
  if (t.length > 0) {
    const o = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(t, !0) },
      a = Pn(n.children[1]),
      s = qt(n.children[n.children.length - 1]);
    (a && s && (o.position = { start: a, end: s }), i.push(o));
  }
  const l = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(i, !0) };
  return (e.patch(n, l), e.applyData(n, l));
}
function ha(e, n, t) {
  const r = t ? t.children : void 0,
    l = (r ? r.indexOf(n) : 1) === 0 ? 'th' : 'td',
    o = t && t.type === 'table' ? t.align : void 0,
    a = o ? o.length : n.children.length;
  let s = -1;
  const c = [];
  for (; ++s < a; ) {
    const f = n.children[s],
      d = {},
      p = o ? o[s] : void 0;
    p && (d.align = p);
    let y = { type: 'element', tagName: l, properties: d, children: [] };
    (f && ((y.children = e.all(f)), e.patch(f, y), (y = e.applyData(f, y))), c.push(y));
  }
  const u = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(c, !0) };
  return (e.patch(n, u), e.applyData(n, u));
}
function ma(e, n) {
  const t = { type: 'element', tagName: 'td', properties: {}, children: e.all(n) };
  return (e.patch(n, t), e.applyData(n, t));
}
const ht = 9,
  mt = 32;
function da(e) {
  const n = String(e),
    t = /\r?\n|\r/g;
  let r = t.exec(n),
    i = 0;
  const l = [];
  for (; r; )
    (l.push(dt(n.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = t.exec(n)));
  return (l.push(dt(n.slice(i), i > 0, !1)), l.join(''));
}
function dt(e, n, t) {
  let r = 0,
    i = e.length;
  if (n) {
    let l = e.codePointAt(r);
    for (; l === ht || l === mt; ) (r++, (l = e.codePointAt(r)));
  }
  if (t) {
    let l = e.codePointAt(i - 1);
    for (; l === ht || l === mt; ) (i--, (l = e.codePointAt(i - 1)));
  }
  return i > r ? e.slice(r, i) : '';
}
function ga(e, n) {
  const t = { type: 'text', value: da(String(n.value)) };
  return (e.patch(n, t), e.applyData(n, t));
}
function ya(e, n) {
  const t = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (e.patch(n, t), e.applyData(n, t));
}
const xa = {
  blockquote: Yo,
  break: Wo,
  code: Xo,
  delete: Go,
  emphasis: Ko,
  footnoteReference: Jo,
  heading: Zo,
  html: ea,
  imageReference: na,
  image: ta,
  inlineCode: ra,
  linkReference: ia,
  link: la,
  listItem: oa,
  list: ua,
  paragraph: sa,
  root: ca,
  strong: pa,
  table: fa,
  tableCell: ma,
  tableRow: ha,
  text: ga,
  thematicBreak: ya,
  toml: Ve,
  yaml: Ve,
  definition: Ve,
  footnoteDefinition: Ve,
};
function Ve() {}
const pr = -1,
  Ze = 0,
  Me = 1,
  Xe = 2,
  Dn = 3,
  On = 4,
  Fn = 5,
  Rn = 6,
  fr = 7,
  hr = 8,
  gt = typeof self == 'object' ? self : globalThis,
  ka = (e, n) => {
    const t = (i, l) => (e.set(l, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [l, o] = n[i];
        switch (l) {
          case Ze:
          case pr:
            return t(o, i);
          case Me: {
            const a = t([], i);
            for (const s of o) a.push(r(s));
            return a;
          }
          case Xe: {
            const a = t({}, i);
            for (const [s, c] of o) a[r(s)] = r(c);
            return a;
          }
          case Dn:
            return t(new Date(o), i);
          case On: {
            const { source: a, flags: s } = o;
            return t(new RegExp(a, s), i);
          }
          case Fn: {
            const a = t(new Map(), i);
            for (const [s, c] of o) a.set(r(s), r(c));
            return a;
          }
          case Rn: {
            const a = t(new Set(), i);
            for (const s of o) a.add(r(s));
            return a;
          }
          case fr: {
            const { name: a, message: s } = o;
            return t(new gt[a](s), i);
          }
          case hr:
            return t(BigInt(o), i);
          case 'BigInt':
            return t(Object(BigInt(o)), i);
          case 'ArrayBuffer':
            return t(new Uint8Array(o).buffer, o);
          case 'DataView': {
            const { buffer: a } = new Uint8Array(o);
            return t(new DataView(a), o);
          }
        }
        return t(new gt[l](o), i);
      };
    return r;
  },
  yt = (e) => ka(new Map(), e)(0),
  Ie = '',
  { toString: ba } = {},
  { keys: wa } = Object,
  Oe = (e) => {
    const n = typeof e;
    if (n !== 'object' || !e) return [Ze, n];
    const t = ba.call(e).slice(8, -1);
    switch (t) {
      case 'Array':
        return [Me, Ie];
      case 'Object':
        return [Xe, Ie];
      case 'Date':
        return [Dn, Ie];
      case 'RegExp':
        return [On, Ie];
      case 'Map':
        return [Fn, Ie];
      case 'Set':
        return [Rn, Ie];
      case 'DataView':
        return [Me, t];
    }
    return t.includes('Array') ? [Me, t] : t.includes('Error') ? [fr, t] : [Xe, t];
  },
  qe = ([e, n]) => e === Ze && (n === 'function' || n === 'symbol'),
  Sa = (e, n, t, r) => {
    const i = (o, a) => {
        const s = r.push(o) - 1;
        return (t.set(a, s), s);
      },
      l = (o) => {
        if (t.has(o)) return t.get(o);
        let [a, s] = Oe(o);
        switch (a) {
          case Ze: {
            let u = o;
            switch (s) {
              case 'bigint':
                ((a = hr), (u = o.toString()));
                break;
              case 'function':
              case 'symbol':
                if (e) throw new TypeError('unable to serialize ' + s);
                u = null;
                break;
              case 'undefined':
                return i([pr], o);
            }
            return i([a, u], o);
          }
          case Me: {
            if (s) {
              let d = o;
              return (
                s === 'DataView'
                  ? (d = new Uint8Array(o.buffer))
                  : s === 'ArrayBuffer' && (d = new Uint8Array(o)),
                i([s, [...d]], o)
              );
            }
            const u = [],
              f = i([a, u], o);
            for (const d of o) u.push(l(d));
            return f;
          }
          case Xe: {
            if (s)
              switch (s) {
                case 'BigInt':
                  return i([s, o.toString()], o);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return i([s, o.valueOf()], o);
              }
            if (n && 'toJSON' in o) return l(o.toJSON());
            const u = [],
              f = i([a, u], o);
            for (const d of wa(o)) (e || !qe(Oe(o[d]))) && u.push([l(d), l(o[d])]);
            return f;
          }
          case Dn:
            return i([a, o.toISOString()], o);
          case On: {
            const { source: u, flags: f } = o;
            return i([a, { source: u, flags: f }], o);
          }
          case Fn: {
            const u = [],
              f = i([a, u], o);
            for (const [d, p] of o) (e || !(qe(Oe(d)) || qe(Oe(p)))) && u.push([l(d), l(p)]);
            return f;
          }
          case Rn: {
            const u = [],
              f = i([a, u], o);
            for (const d of o) (e || !qe(Oe(d))) && u.push(l(d));
            return f;
          }
        }
        const { message: c } = o;
        return i([a, { name: s, message: c }], o);
      };
    return l;
  },
  xt = (e, { json: n, lossy: t } = {}) => {
    const r = [];
    return (Sa(!(n || t), !!n, new Map(), r)(e), r);
  },
  Ge =
    typeof structuredClone == 'function'
      ? (e, n) => (n && ('json' in n || 'lossy' in n) ? yt(xt(e, n)) : structuredClone(e))
      : (e, n) => yt(xt(e, n));
function Ca(e, n) {
  const t = [{ type: 'text', value: '↩' }];
  return (
    n > 1 &&
      t.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(n) }],
      }),
    t
  );
}
function Ea(e, n) {
  return 'Back to reference ' + (e + 1) + (n > 1 ? '-' + n : '');
}
function Ia(e) {
  const n = typeof e.options.clobberPrefix == 'string' ? e.options.clobberPrefix : 'user-content-',
    t = e.options.footnoteBackContent || Ca,
    r = e.options.footnoteBackLabel || Ea,
    i = e.options.footnoteLabel || 'Footnotes',
    l = e.options.footnoteLabelTagName || 'h2',
    o = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(e.footnoteOrder[s]);
    if (!c) continue;
    const u = e.all(c),
      f = String(c.identifier).toUpperCase(),
      d = ve(f.toLowerCase());
    let p = 0;
    const y = [],
      b = e.footnoteCounts.get(f);
    for (; b !== void 0 && ++p <= b; ) {
      y.length > 0 && y.push({ type: 'text', value: ' ' });
      let v = typeof t == 'string' ? t : t(s, p);
      (typeof v == 'string' && (v = { type: 'text', value: v }),
        y.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + n + 'fnref-' + d + (p > 1 ? '-' + p : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof r == 'string' ? r : r(s, p),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(v) ? v : [v],
        }));
    }
    const T = u[u.length - 1];
    if (T && T.type === 'element' && T.tagName === 'p') {
      const v = T.children[T.children.length - 1];
      (v && v.type === 'text' ? (v.value += ' ') : T.children.push({ type: 'text', value: ' ' }),
        T.children.push(...y));
    } else u.push(...y);
    const w = {
      type: 'element',
      tagName: 'li',
      properties: { id: n + 'fn-' + d },
      children: e.wrap(u, !0),
    };
    (e.patch(c, w), a.push(w));
  }
  if (a.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: l,
          properties: { ...Ge(o), id: 'footnote-label' },
          children: [{ type: 'text', value: i }],
        },
        {
          type: 'text',
          value: `
`,
        },
        { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(a, !0) },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const mr = function (e) {
  if (e == null) return za;
  if (typeof e == 'function') return en(e);
  if (typeof e == 'object') return Array.isArray(e) ? Ta(e) : Pa(e);
  if (typeof e == 'string') return Aa(e);
  throw new Error('Expected function, string, or object as test');
};
function Ta(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; ) n[t] = mr(e[t]);
  return en(r);
  function r(...i) {
    let l = -1;
    for (; ++l < n.length; ) if (n[l].apply(this, i)) return !0;
    return !1;
  }
}
function Pa(e) {
  const n = e;
  return en(t);
  function t(r) {
    const i = r;
    let l;
    for (l in e) if (i[l] !== n[l]) return !1;
    return !0;
  }
}
function Aa(e) {
  return en(n);
  function n(t) {
    return t && t.type === e;
  }
}
function en(e) {
  return n;
  function n(t, r, i) {
    return !!(va(t) && e.call(this, t, typeof r == 'number' ? r : void 0, i || void 0));
  }
}
function za() {
  return !0;
}
function va(e) {
  return e !== null && typeof e == 'object' && 'type' in e;
}
const dr = [],
  La = !0,
  kt = !1,
  Na = 'skip';
function _a(e, n, t, r) {
  let i;
  typeof n == 'function' && typeof t != 'function' ? ((r = t), (t = n)) : (i = n);
  const l = mr(i),
    o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, c, u) {
    const f = s && typeof s == 'object' ? s : {};
    if (typeof f.type == 'string') {
      const p =
        typeof f.tagName == 'string' ? f.tagName : typeof f.name == 'string' ? f.name : void 0;
      Object.defineProperty(d, 'name', {
        value: 'node (' + (s.type + (p ? '<' + p + '>' : '')) + ')',
      });
    }
    return d;
    function d() {
      let p = dr,
        y,
        b,
        T;
      if ((!n || l(s, c, u[u.length - 1] || void 0)) && ((p = Da(t(s, u))), p[0] === kt)) return p;
      if ('children' in s && s.children) {
        const w = s;
        if (w.children && p[0] !== Na)
          for (
            b = (r ? w.children.length : -1) + o, T = u.concat(w);
            b > -1 && b < w.children.length;

          ) {
            const v = w.children[b];
            if (((y = a(v, b, T)()), y[0] === kt)) return y;
            b = typeof y[1] == 'number' ? y[1] : b + o;
          }
      }
      return p;
    }
  }
}
function Da(e) {
  return Array.isArray(e) ? e : typeof e == 'number' ? [La, e] : e == null ? dr : [e];
}
function gr(e, n, t, r) {
  let i, l, o;
  (typeof n == 'function' && typeof t != 'function'
    ? ((l = void 0), (o = n), (i = t))
    : ((l = n), (o = t), (i = r)),
    _a(e, l, a, i));
  function a(s, c) {
    const u = c[c.length - 1],
      f = u ? u.children.indexOf(s) : void 0;
    return o(s, f, u);
  }
}
const wn = {}.hasOwnProperty,
  Oa = {};
function Fa(e, n) {
  const t = n || Oa,
    r = new Map(),
    i = new Map(),
    l = new Map(),
    o = { ...xa, ...t.handlers },
    a = {
      all: c,
      applyData: Ma,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: l,
      footnoteOrder: [],
      handlers: o,
      one: s,
      options: t,
      patch: Ra,
      wrap: ja,
    };
  return (
    gr(e, function (u) {
      if (u.type === 'definition' || u.type === 'footnoteDefinition') {
        const f = u.type === 'definition' ? r : i,
          d = String(u.identifier).toUpperCase();
        f.has(d) || f.set(d, u);
      }
    }),
    a
  );
  function s(u, f) {
    const d = u.type,
      p = a.handlers[d];
    if (wn.call(a.handlers, d) && p) return p(a, u, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ('children' in u) {
        const { children: b, ...T } = u,
          w = Ge(T);
        return ((w.children = a.all(u)), w);
      }
      return Ge(u);
    }
    return (a.options.unknownHandler || Ba)(a, u, f);
  }
  function c(u) {
    const f = [];
    if ('children' in u) {
      const d = u.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const y = a.one(d[p], u);
        if (y) {
          if (
            p &&
            d[p - 1].type === 'break' &&
            (!Array.isArray(y) && y.type === 'text' && (y.value = bt(y.value)),
            !Array.isArray(y) && y.type === 'element')
          ) {
            const b = y.children[0];
            b && b.type === 'text' && (b.value = bt(b.value));
          }
          Array.isArray(y) ? f.push(...y) : f.push(y);
        }
      }
    }
    return f;
  }
}
function Ra(e, n) {
  e.position && (n.position = ki(e));
}
function Ma(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      l = e.data.hProperties;
    if (typeof r == 'string')
      if (t.type === 'element') t.tagName = r;
      else {
        const o = 'children' in t ? t.children : [t];
        t = { type: 'element', tagName: r, properties: {}, children: o };
      }
    (t.type === 'element' && l && Object.assign(t.properties, Ge(l)),
      'children' in t && t.children && i !== null && i !== void 0 && (t.children = i));
  }
  return t;
}
function Ba(e, n) {
  const t = n.data || {},
    r =
      'value' in n && !(wn.call(t, 'hProperties') || wn.call(t, 'hChildren'))
        ? { type: 'text', value: n.value }
        : { type: 'element', tagName: 'div', properties: {}, children: e.all(n) };
  return (e.patch(n, r), e.applyData(n, r));
}
function ja(e, n) {
  const t = [];
  let r = -1;
  for (
    n &&
    t.push({
      type: 'text',
      value: `
`,
    });
    ++r < e.length;

  )
    (r &&
      t.push({
        type: 'text',
        value: `
`,
      }),
      t.push(e[r]));
  return (
    n &&
      e.length > 0 &&
      t.push({
        type: 'text',
        value: `
`,
      }),
    t
  );
}
function bt(e) {
  let n = 0,
    t = e.charCodeAt(n);
  for (; t === 9 || t === 32; ) (n++, (t = e.charCodeAt(n)));
  return e.slice(n);
}
function wt(e, n) {
  const t = Fa(e, n),
    r = t.one(e, void 0),
    i = Ia(t),
    l = Array.isArray(r) ? { type: 'root', children: r } : r || { type: 'root', children: [] };
  return (
    i &&
      l.children.push(
        {
          type: 'text',
          value: `
`,
        },
        i,
      ),
    l
  );
}
function Ha(e, n) {
  return e && 'run' in e
    ? async function (t, r) {
        const i = wt(t, { file: r, ...n });
        await e.run(i, r);
      }
    : function (t, r) {
        return wt(t, { file: r, ...(e || n) });
      };
}
function St(e) {
  if (e) throw e;
}
var Ye = Object.prototype.hasOwnProperty,
  yr = Object.prototype.toString,
  Ct = Object.defineProperty,
  Et = Object.getOwnPropertyDescriptor,
  It = function (n) {
    return typeof Array.isArray == 'function' ? Array.isArray(n) : yr.call(n) === '[object Array]';
  },
  Tt = function (n) {
    if (!n || yr.call(n) !== '[object Object]') return !1;
    var t = Ye.call(n, 'constructor'),
      r =
        n.constructor &&
        n.constructor.prototype &&
        Ye.call(n.constructor.prototype, 'isPrototypeOf');
    if (n.constructor && !t && !r) return !1;
    var i;
    for (i in n);
    return typeof i > 'u' || Ye.call(n, i);
  },
  Pt = function (n, t) {
    Ct && t.name === '__proto__'
      ? Ct(n, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 })
      : (n[t.name] = t.newValue);
  },
  At = function (n, t) {
    if (t === '__proto__')
      if (Ye.call(n, t)) {
        if (Et) return Et(n, t).value;
      } else return;
    return n[t];
  },
  Ua = function e() {
    var n,
      t,
      r,
      i,
      l,
      o,
      a = arguments[0],
      s = 1,
      c = arguments.length,
      u = !1;
    for (
      typeof a == 'boolean' && ((u = a), (a = arguments[1] || {}), (s = 2)),
        (a == null || (typeof a != 'object' && typeof a != 'function')) && (a = {});
      s < c;
      ++s
    )
      if (((n = arguments[s]), n != null))
        for (t in n)
          ((r = At(a, t)),
            (i = At(n, t)),
            a !== i &&
              (u && i && (Tt(i) || (l = It(i)))
                ? (l ? ((l = !1), (o = r && It(r) ? r : [])) : (o = r && Tt(r) ? r : {}),
                  Pt(a, { name: t, newValue: e(u, o, i) }))
                : typeof i < 'u' && Pt(a, { name: t, newValue: i })));
    return a;
  };
const on = Ft(Ua);
function Sn(e) {
  if (typeof e != 'object' || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Va() {
  const e = [],
    n = { run: t, use: r };
  return n;
  function t(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != 'function') throw new TypeError('Expected function as last argument, not ' + o);
    a(null, ...i);
    function a(s, ...c) {
      const u = e[++l];
      let f = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++f < i.length; ) (c[f] === null || c[f] === void 0) && (c[f] = i[f]);
      ((i = c), u ? qa(u, a)(...c) : o(null, ...c));
    }
  }
  function r(i) {
    if (typeof i != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + i);
    return (e.push(i), n);
  }
}
function qa(e, n) {
  let t;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let s;
    a && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (c) {
      const u = c;
      if (a && t) throw u;
      return i(u);
    }
    a ||
      (s && s.then && typeof s.then == 'function'
        ? s.then(l, i)
        : s instanceof Error
          ? i(s)
          : l(s));
  }
  function i(o, ...a) {
    t || ((t = !0), n(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const ue = { basename: $a, dirname: Qa, extname: Ya, join: Wa, sep: '/' };
function $a(e, n) {
  if (n !== void 0 && typeof n != 'string') throw new TypeError('"ext" argument must be a string');
  He(e);
  let t = 0,
    r = -1,
    i = e.length,
    l;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          t = i + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = i + 1));
    return r < 0 ? '' : e.slice(t, r);
  }
  if (n === e) return '';
  let o = -1,
    a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        t = i + 1;
        break;
      }
    } else
      (o < 0 && ((l = !0), (o = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : ((a = -1), (r = o))));
  return (t === r ? (r = o) : r < 0 && (r = e.length), e.slice(t, r));
}
function Qa(e) {
  if ((He(e), e.length === 0)) return '.';
  let n = -1,
    t = e.length,
    r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : n === 1 && e.codePointAt(0) === 47
      ? '//'
      : e.slice(0, n);
}
function Ya(e) {
  He(e);
  let n = e.length,
    t = -1,
    r = 0,
    i = -1,
    l = 0,
    o;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (o) {
        r = n + 1;
        break;
      }
      continue;
    }
    (t < 0 && ((o = !0), (t = n + 1)),
      a === 46 ? (i < 0 ? (i = n) : l !== 1 && (l = 1)) : i > -1 && (l = -1));
  }
  return i < 0 || t < 0 || l === 0 || (l === 1 && i === t - 1 && i === r + 1) ? '' : e.slice(i, t);
}
function Wa(...e) {
  let n = -1,
    t;
  for (; ++n < e.length; ) (He(e[n]), e[n] && (t = t === void 0 ? e[n] : t + '/' + e[n]));
  return t === void 0 ? '.' : Xa(t);
}
function Xa(e) {
  He(e);
  const n = e.codePointAt(0) === 47;
  let t = Ga(e, !n);
  return (
    t.length === 0 && !n && (t = '.'),
    t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += '/'),
    n ? '/' + t : t
  );
}
function Ga(e, n) {
  let t = '',
    r = 0,
    i = -1,
    l = 0,
    o = -1,
    a,
    s;
  for (; ++o <= e.length; ) {
    if (o < e.length) a = e.codePointAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1))
        if (i !== o - 1 && l === 2) {
          if (
            t.length < 2 ||
            r !== 2 ||
            t.codePointAt(t.length - 1) !== 46 ||
            t.codePointAt(t.length - 2) !== 46
          ) {
            if (t.length > 2) {
              if (((s = t.lastIndexOf('/')), s !== t.length - 1)) {
                (s < 0
                  ? ((t = ''), (r = 0))
                  : ((t = t.slice(0, s)), (r = t.length - 1 - t.lastIndexOf('/'))),
                  (i = o),
                  (l = 0));
                continue;
              }
            } else if (t.length > 0) {
              ((t = ''), (r = 0), (i = o), (l = 0));
              continue;
            }
          }
          n && ((t = t.length > 0 ? t + '/..' : '..'), (r = 2));
        } else
          (t.length > 0 ? (t += '/' + e.slice(i + 1, o)) : (t = e.slice(i + 1, o)),
            (r = o - i - 1));
      ((i = o), (l = 0));
    } else a === 46 && l > -1 ? l++ : (l = -1);
  }
  return t;
}
function He(e) {
  if (typeof e != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
}
const Ka = { cwd: Ja };
function Ja() {
  return '/';
}
function Cn(e) {
  return !!(
    e !== null &&
    typeof e == 'object' &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Za(e) {
  if (typeof e == 'string') e = new URL(e);
  else if (!Cn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + '`',
    );
    throw ((n.code = 'ERR_INVALID_ARG_TYPE'), n);
  }
  if (e.protocol !== 'file:') {
    const n = new TypeError('The URL must be of scheme file');
    throw ((n.code = 'ERR_INVALID_URL_SCHEME'), n);
  }
  return eu(e);
}
function eu(e) {
  if (e.hostname !== '') {
    const r = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw ((r.code = 'ERR_INVALID_FILE_URL_HOST'), r);
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError('File URL path must not include encoded / characters');
        throw ((i.code = 'ERR_INVALID_FILE_URL_PATH'), i);
      }
    }
  return decodeURIComponent(n);
}
const an = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class xr {
  constructor(n) {
    let t;
    (n
      ? Cn(n)
        ? (t = { path: n })
        : typeof n == 'string' || nu(n)
          ? (t = { value: n })
          : (t = n)
      : (t = {}),
      (this.cwd = 'cwd' in t ? '' : Ka.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let r = -1;
    for (; ++r < an.length; ) {
      const l = an[r];
      l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === 'history' ? [...t[l]] : t[l]);
    }
    let i;
    for (i in t) an.includes(i) || (this[i] = t[i]);
  }
  get basename() {
    return typeof this.path == 'string' ? ue.basename(this.path) : void 0;
  }
  set basename(n) {
    (sn(n, 'basename'), un(n, 'basename'), (this.path = ue.join(this.dirname || '', n)));
  }
  get dirname() {
    return typeof this.path == 'string' ? ue.dirname(this.path) : void 0;
  }
  set dirname(n) {
    (zt(this.basename, 'dirname'), (this.path = ue.join(n || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? ue.extname(this.path) : void 0;
  }
  set extname(n) {
    if ((un(n, 'extname'), zt(this.dirname, 'extname'), n)) {
      if (n.codePointAt(0) !== 46) throw new Error('`extname` must start with `.`');
      if (n.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = ue.join(this.dirname, this.stem + (n || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(n) {
    (Cn(n) && (n = Za(n)), sn(n, 'path'), this.path !== n && this.history.push(n));
  }
  get stem() {
    return typeof this.path == 'string' ? ue.basename(this.path, this.extname) : void 0;
  }
  set stem(n) {
    (sn(n, 'stem'),
      un(n, 'stem'),
      (this.path = ue.join(this.dirname || '', n + (this.extname || ''))));
  }
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw ((i.fatal = !0), i);
  }
  info(n, t, r) {
    const i = this.message(n, t, r);
    return ((i.fatal = void 0), i);
  }
  message(n, t, r) {
    const i = new G(n, t, r);
    return (
      this.path && ((i.name = this.path + ':' + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(n) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(n || void 0).decode(this.value);
  }
}
function un(e, n) {
  if (e && e.includes(ue.sep))
    throw new Error('`' + n + '` cannot be a path: did not expect `' + ue.sep + '`');
}
function sn(e, n) {
  if (!e) throw new Error('`' + n + '` cannot be empty');
}
function zt(e, n) {
  if (!e) throw new Error('Setting `' + n + '` requires `path` to be set too');
}
function nu(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const tu = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      l = function () {
        return i.apply(l, arguments);
      };
    return (Object.setPrototypeOf(l, r), l);
  },
  ru = {}.hasOwnProperty;
class Mn extends tu {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = Va()));
  }
  copy() {
    const n = new Mn();
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return (n.data(on(!0, {}, this.namespace)), n);
  }
  data(n, t) {
    return typeof n == 'string'
      ? arguments.length === 2
        ? (fn('data', this.frozen), (this.namespace[n] = t), this)
        : (ru.call(this.namespace, n) && this.namespace[n]) || void 0
      : n
        ? (fn('data', this.frozen), (this.namespace = n), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const n = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == 'function' && this.transformers.use(i);
    }
    return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
  }
  parse(n) {
    this.freeze();
    const t = $e(n),
      r = this.parser || this.Parser;
    return (cn('parse', r), r(String(t), t));
  }
  process(n, t) {
    const r = this;
    return (
      this.freeze(),
      cn('process', this.parser || this.Parser),
      pn('process', this.compiler || this.Compiler),
      t ? i(void 0, t) : new Promise(i)
    );
    function i(l, o) {
      const a = $e(n),
        s = r.parse(a);
      r.run(s, a, function (u, f, d) {
        if (u || !f || !d) return c(u);
        const p = f,
          y = r.stringify(p, d);
        (ou(y) ? (d.value = y) : (d.result = y), c(u, d));
      });
      function c(u, f) {
        u || !f ? o(u) : l ? l(f) : t(void 0, f);
      }
    }
  }
  processSync(n) {
    let t = !1,
      r;
    return (
      this.freeze(),
      cn('processSync', this.parser || this.Parser),
      pn('processSync', this.compiler || this.Compiler),
      this.process(n, i),
      Lt('processSync', 'process', t),
      r
    );
    function i(l, o) {
      ((t = !0), St(l), (r = o));
    }
  }
  run(n, t, r) {
    (vt(n), this.freeze());
    const i = this.transformers;
    return (
      !r && typeof t == 'function' && ((r = t), (t = void 0)),
      r ? l(void 0, r) : new Promise(l)
    );
    function l(o, a) {
      const s = $e(t);
      i.run(n, s, c);
      function c(u, f, d) {
        const p = f || n;
        u ? a(u) : o ? o(p) : r(void 0, p, d);
      }
    }
  }
  runSync(n, t) {
    let r = !1,
      i;
    return (this.run(n, t, l), Lt('runSync', 'run', r), i);
    function l(o, a) {
      (St(o), (i = a), (r = !0));
    }
  }
  stringify(n, t) {
    this.freeze();
    const r = $e(t),
      i = this.compiler || this.Compiler;
    return (pn('stringify', i), vt(n), i(n, r));
  }
  use(n, ...t) {
    const r = this.attachers,
      i = this.namespace;
    if ((fn('use', this.frozen), n != null))
      if (typeof n == 'function') s(n, t);
      else if (typeof n == 'object') Array.isArray(n) ? a(n) : o(n);
      else throw new TypeError('Expected usable value, not `' + n + '`');
    return this;
    function l(c) {
      if (typeof c == 'function') s(c, []);
      else if (typeof c == 'object')
        if (Array.isArray(c)) {
          const [u, ...f] = c;
          s(u, f);
        } else o(c);
      else throw new TypeError('Expected usable value, not `' + c + '`');
    }
    function o(c) {
      if (!('plugins' in c) && !('settings' in c))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
        );
      (a(c.plugins), c.settings && (i.settings = on(!0, i.settings, c.settings)));
    }
    function a(c) {
      let u = -1;
      if (c != null)
        if (Array.isArray(c))
          for (; ++u < c.length; ) {
            const f = c[u];
            l(f);
          }
        else throw new TypeError('Expected a list of plugins, not `' + c + '`');
    }
    function s(c, u) {
      let f = -1,
        d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === c) {
          d = f;
          break;
        }
      if (d === -1) r.push([c, ...u]);
      else if (u.length > 0) {
        let [p, ...y] = u;
        const b = r[d][1];
        (Sn(b) && Sn(p) && (p = on(!0, b, p)), (r[d] = [c, p, ...y]));
      }
    }
  }
}
const iu = new Mn().freeze();
function cn(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `parser`');
}
function pn(e, n) {
  if (typeof n != 'function') throw new TypeError('Cannot `' + e + '` without `compiler`');
}
function fn(e, n) {
  if (n)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function vt(e) {
  if (!Sn(e) || typeof e.type != 'string') throw new TypeError('Expected node, got `' + e + '`');
}
function Lt(e, n, t) {
  if (!t) throw new Error('`' + e + '` finished async. Use `' + n + '` instead');
}
function $e(e) {
  return lu(e) ? e : new xr(e);
}
function lu(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e);
}
function ou(e) {
  return typeof e == 'string' || au(e);
}
function au(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e);
}
const uu = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Nt = [],
  _t = { allowDangerousHtml: !0 },
  su = /^(https?|ircs?|mailto|xmpp)$/i,
  cu = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    { from: 'className', id: 'remove-classname' },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
    { from: 'linkTarget', id: 'remove-linktarget' },
    { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function Dt(e) {
  const n = pu(e),
    t = fu(e);
  return hu(n.runSync(n.parse(t), t), e);
}
function pu(e) {
  const n = e.rehypePlugins || Nt,
    t = e.remarkPlugins || Nt,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ..._t } : _t;
  return iu().use(Qo).use(t).use(Ha, r).use(n);
}
function fu(e) {
  const n = e.children || '',
    t = new xr();
  return (typeof n == 'string' && (t.value = n), t);
}
function hu(e, n) {
  const t = n.allowedElements,
    r = n.allowElement,
    i = n.components,
    l = n.disallowedElements,
    o = n.skipHtml,
    a = n.unwrapDisallowed,
    s = n.urlTransform || mu;
  for (const u of cu)
    Object.hasOwn(n, u.from) &&
      ('' + u.from + (u.to ? 'use `' + u.to + '` instead' : 'remove it') + uu + u.id, void 0);
  return (
    gr(e, c),
    Ei(e, {
      Fragment: V.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: V.jsx,
      jsxs: V.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function c(u, f, d) {
    if (u.type === 'raw' && d && typeof f == 'number')
      return (o ? d.children.splice(f, 1) : (d.children[f] = { type: 'text', value: u.value }), f);
    if (u.type === 'element') {
      let p;
      for (p in tn)
        if (Object.hasOwn(tn, p) && Object.hasOwn(u.properties, p)) {
          const y = u.properties[p],
            b = tn[p];
          (b === null || b.includes(u.tagName)) && (u.properties[p] = s(String(y || ''), p, u));
        }
    }
    if (u.type === 'element') {
      let p = t ? !t.includes(u.tagName) : l ? l.includes(u.tagName) : !1;
      if ((!p && r && typeof f == 'number' && (p = !r(u, f, d)), p && d && typeof f == 'number'))
        return (
          a && u.children ? d.children.splice(f, 1, ...u.children) : d.children.splice(f, 1),
          f
        );
    }
  }
}
function mu(e) {
  const n = e.indexOf(':'),
    t = e.indexOf('?'),
    r = e.indexOf('#'),
    i = e.indexOf('/');
  return n === -1 ||
    (i !== -1 && n > i) ||
    (t !== -1 && n > t) ||
    (r !== -1 && n > r) ||
    su.test(e.slice(0, n))
    ? e
    : '';
}
const du = ({ question: e, answer: n }) => {
    const [t, r] = Te.useState(!1);
    return V.jsxs('div', {
      className:
        'w-80 h-80 md:w-[40rem] md:h-[40rem] bg-secondary rounded-lg p-6 cursor-pointer transform transition-transform duration-500 [transform-style:preserve-3d]',
      onClick: () => r(!t),
      style: { transform: t ? 'rotateY(180deg)' : '' },
      children: [
        V.jsx('div', {
          className:
            'absolute w-full h-full top-0 left-0 p-6 [backface-visibility:hidden] overflow-auto flex items-center justify-center',
          children: V.jsx('div', {
            className:
              'prose dark:prose-invert text-base md:text-lg font-semibold text-foreground mx-auto',
            children: !t && V.jsx(Dt, { children: e }),
          }),
        }),
        V.jsx('div', {
          className:
            'absolute w-full h-full top-0 left-0 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-auto flex items-center justify-center',
          children: V.jsx('div', {
            className: 'prose dark:prose-invert text-base md:text-lg text-foreground mx-auto',
            children: t && V.jsx(Dt, { children: n }),
          }),
        }),
      ],
    });
  },
  Ot = ['c++', 'ai', 'javascript'],
  yu = () => {
    const [e, n] = Te.useState(Ot[0]),
      [t, r] = Te.useState([]),
      [i, l] = Te.useState(null),
      [o, a] = Te.useState([]);
    Te.useEffect(() => {
      (async () => {
        try {
          const u = await Ar(() => import(`../data/quizzes/${e}`), []);
          (r(u.default), l(null), a([]));
        } catch (u) {
          (console.error('Failed to load quiz questions:', u), r([]), l(null), a([]));
        }
      })();
    }, [e]);
    const s = () => {
      if (t.length === 0) return;
      let c;
      do c = Math.floor(Math.random() * t.length);
      while (o.includes(c));
      (l(c), a((u) => [...u.slice(-2), c]));
    };
    return V.jsx('section', {
      className: 'w-full px-4 md:px-8 py-16',
      children: V.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          V.jsxs('div', {
            className: 'text-center mb-12',
            children: [
              V.jsx('h1', {
                className:
                  'text-display-lg font-black text-foreground leading-none tracking-tighter mb-6',
                children: 'Quiz',
              }),
              V.jsx('div', {
                className: 'flex justify-center space-x-4',
                children: Ot.map((c) =>
                  V.jsx(
                    'button',
                    {
                      className: `px-4 py-2 rounded-lg font-medium ${e === c ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`,
                      onClick: () => n(c),
                      children: c.toUpperCase(),
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
          V.jsx('div', {
            className: 'mb-8 mx-auto w-fit',
            children:
              i !== null
                ? V.jsx(du, { question: t[i].question, answer: t[i].answer })
                : V.jsx('div', {
                    className:
                      'w-80 h-80 md:w-[40rem] md:h-[40rem] bg-secondary rounded-lg flex items-center justify-center mx-auto',
                    children: V.jsx('p', {
                      className: 'text-lg text-muted-foreground text-center',
                      children: 'Select a topic and click "Next Question" to start.',
                    }),
                  }),
          }),
          V.jsx('div', {
            className: 'text-center',
            children: V.jsx('button', {
              className: 'px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium',
              onClick: s,
              children: 'Next Question',
            }),
          }),
        ],
      }),
    });
  };
export { yu as default };
