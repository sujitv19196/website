import { c as create_ssr_component, v as validate_component, g as getContext, a as get_store_value, b as add_attribute, d as createEventDispatcher, e as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, j as subscribe, s as setContext, k as each, m as missing_component, l as escape } from "../../chunks/ssr.js";
import { I as Icon, m as motionValue, M as MotionConfigContext, i as isMotionValue, c as cn, a as motion, b as isHTMLElement, n as noop, t as tick, d as toWritableStores, e as makeElement, o as omit, f as overridable, g as executeCallbacks, h as addEventListener$1, j as addMeltEventListener, r as removeUndefined, s as styleToString, p as portalAttr, k as effect, l as isBrowser$1, q as createElHelpers, u as kbd, v as isTouch, w as isElement, x as isDocument, y as is_void, z as createBitAttrs, A as removeUndefined$1, B as getOptionUpdater, C as flyAndScale, D as DATA } from "../../chunks/updater.js";
import { cva } from "class-variance-authority";
import { interpolate, animate } from "popmotion";
import sync from "framesync";
import "dequal";
import { d as derived, w as writable } from "../../chunks/index.js";
import { nanoid } from "nanoid/non-secure";
import { flip, offset, shift, arrow, size, autoUpdate, computePosition } from "@floating-ui/dom";
import "clsx";
import { tv } from "tailwind-variants";
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const useCombineMotionValues = (values, combineValues) => {
  let subscriptions = [];
  let vals = values;
  const unsubscribe = () => {
    subscriptions.forEach((unsubscribe2) => unsubscribe2());
  };
  const subscribe2 = () => {
    subscriptions = vals.map((val) => val.onChange(handler));
    updateValue();
  };
  const value = motionValue(combineValues(), () => {
    unsubscribe();
    subscribe2();
    return unsubscribe;
  });
  let updateValue = () => {
    value.set(combineValues());
  };
  const handler = () => {
    sync.update(updateValue, false, true);
  };
  value.reset = (_values, _combineValues) => {
    vals = _values;
    unsubscribe();
    updateValue = () => {
      value.set(_combineValues());
    };
    subscribe2();
  };
  return value;
};
var isCustomValueType = function(v) {
  return typeof v === "object" && v.mix;
};
var getMixer = function(v) {
  return isCustomValueType(v) ? v.mix : void 0;
};
function transform() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var useImmediate = !Array.isArray(args[0]);
  var argOffset = useImmediate ? 0 : -1;
  var inputValue = args[0 + argOffset];
  var inputRange = args[1 + argOffset];
  var outputRange = args[2 + argOffset];
  var options = args[3 + argOffset];
  var interpolator = interpolate(inputRange, outputRange, Object.assign({ mixer: getMixer(outputRange[0]) }, options));
  return useImmediate ? interpolator(inputValue) : interpolator;
}
const useTransform = (input, inputRangeOrTransformer, outputRange, options) => {
  let latest = [];
  const update = (input2, inputRangeOrTransformer2, outputRange2, options2) => {
    const transformer = typeof inputRangeOrTransformer2 === "function" ? inputRangeOrTransformer2 : transform(inputRangeOrTransformer2, outputRange2, options2);
    const values = Array.isArray(input2) ? input2 : [input2];
    const _transformer = Array.isArray(input2) ? transformer : ([latest2]) => transformer(latest2);
    return [values, () => {
      latest.length = 0;
      const numValues = values.length;
      for (let i = 0; i < numValues; i++) {
        latest[i] = values[i].get();
      }
      return _transformer(latest);
    }];
  };
  const comb = useCombineMotionValues(...update(
    input,
    inputRangeOrTransformer,
    outputRange,
    options
  ));
  comb.updateInner = comb.reset;
  comb.reset = (input2, inputRangeOrTransformer2, outputRange2, options2) => comb.updateInner(
    ...update(
      input2,
      inputRangeOrTransformer2,
      outputRange2,
      options2
    )
  );
  return comb;
};
const useSpring = (source, config = {}, isCustom = false) => {
  const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  let activeSpringAnimation = null;
  let value = motionValue(isMotionValue(source) ? source.get() : source);
  const update = (_source, _config) => {
    value.attach((v, set) => {
      const { isStatic } = get_store_value(mcc);
      if (isStatic) {
        return set(v);
      }
      if (activeSpringAnimation) {
        activeSpringAnimation.stop();
      }
      activeSpringAnimation = animate({
        from: value.get(),
        to: v,
        velocity: value.getVelocity(),
        ..._config,
        onUpdate: set
      });
      return value.get();
    });
    return isMotionValue(_source) ? _source.onChange((v) => value.set(parseFloat(v))) : void 0;
  };
  update(source, config);
  value.reset = update;
  return value;
};
const Dock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  let { magnification = 60 } = $$props;
  let { distance = 140 } = $$props;
  let { direction = "middle" } = $$props;
  const dockVariants = cva("mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md");
  let dockElement;
  let mouseX = Infinity;
  let dockClass = cn(dockVariants({ className }), {
    "items-start": direction === "top",
    "items-center": direction === "middle",
    "items-end": direction === "bottom"
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.magnification === void 0 && $$bindings.magnification && magnification !== void 0) $$bindings.magnification(magnification);
  if ($$props.distance === void 0 && $$bindings.distance && distance !== void 0) $$bindings.distance(distance);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  return `${validate_component(motion, "Motion").$$render($$result, {}, {}, {
    default: ({ motion: motion2 }) => {
      return ` <div${add_attribute("class", dockClass, 0)}${add_attribute("this", dockElement, 0)}>${slots.default ? slots.default({ mouseX, magnification, distance }) : ` 
        Default
      `}</div>`;
    }
  })}`;
});
const DockIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { magnification = 60 } = $$props;
  let { distance = 160 } = $$props;
  let { mouseX = 0 } = $$props;
  let mint = motionValue(mouseX);
  let { class: className = "" } = $$props;
  let iconElement;
  let distanceCalc = useTransform(mint, (val) => {
    const bounds = { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [38, magnification, 38]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  let iconClass = cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", className);
  if ($$props.magnification === void 0 && $$bindings.magnification && magnification !== void 0) $$bindings.magnification(magnification);
  if ($$props.distance === void 0 && $$bindings.distance && distance !== void 0) $$bindings.distance(distance);
  if ($$props.mouseX === void 0 && $$bindings.mouseX && mouseX !== void 0) $$bindings.mouseX(mouseX);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  {
    mint.set(mouseX);
  }
  return `${validate_component(motion, "Motion").$$render($$result, { style: { width } }, {}, {
    default: ({ motion: motion2 }) => {
      return `<div${add_attribute("class", iconClass, 0)}${add_attribute("this", iconElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
function makeHull(points) {
  const newPoints = points.slice();
  newPoints.sort(POINT_COMPARATOR);
  return makeHullPresorted(newPoints);
}
function makeHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length == 1 && lowerHull.length == 1 && upperHull[0].x == lowerHull[0].x && upperHull[0].y == lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
function POINT_COMPARATOR(a, b) {
  if (a.x < b.x)
    return -1;
  else if (a.x > b.x)
    return 1;
  else if (a.y < b.y)
    return -1;
  else if (a.y > b.y)
    return 1;
  else
    return 0;
}
function getPointsFromEl(el) {
  const rect = el.getBoundingClientRect();
  return [
    { x: rect.left, y: rect.top },
    { x: rect.right, y: rect.top },
    { x: rect.right, y: rect.bottom },
    { x: rect.left, y: rect.bottom }
  ];
}
function makeHullFromElements(els) {
  const points = els.flatMap((el) => getPointsFromEl(el));
  return makeHull(points);
}
function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > point.y !== yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  if (portalProp !== void 0)
    return portalProp;
  const portalParent = getPortalParent(node);
  if (portalParent === "body")
    return document.body;
  return null;
}
const defaultConfig = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: true,
  sameWidth: false,
  overflowPadding: 8
};
const ARROW_TRANSFORM = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function useFloating(reference, floating, opts = {}) {
  if (!floating || !reference || opts === null)
    return {
      destroy: noop
    };
  const options = { ...defaultConfig, ...opts };
  const arrowEl = floating.querySelector("[data-arrow=true]");
  const middleware = [];
  if (options.flip) {
    middleware.push(flip({
      boundary: options.boundary,
      padding: options.overflowPadding
    }));
  }
  const arrowOffset = isHTMLElement(arrowEl) ? arrowEl.offsetHeight / 2 : 0;
  if (options.gutter || options.offset) {
    const data = options.gutter ? { mainAxis: options.gutter } : options.offset;
    if (data?.mainAxis != null) {
      data.mainAxis += arrowOffset;
    }
    middleware.push(offset(data));
  }
  middleware.push(shift({
    boundary: options.boundary,
    crossAxis: options.overlap,
    padding: options.overflowPadding
  }));
  if (arrowEl) {
    middleware.push(arrow({ element: arrowEl, padding: 8 }));
  }
  middleware.push(size({
    padding: options.overflowPadding,
    apply({ rects, availableHeight, availableWidth }) {
      if (options.sameWidth) {
        Object.assign(floating.style, {
          width: `${Math.round(rects.reference.width)}px`,
          minWidth: "unset"
        });
      }
      if (options.fitViewport) {
        Object.assign(floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }
  }));
  function compute() {
    if (!reference || !floating)
      return;
    if (isHTMLElement(reference) && !reference.ownerDocument.documentElement.contains(reference))
      return;
    const { placement, strategy } = options;
    computePosition(reference, floating, {
      placement,
      middleware,
      strategy
    }).then((data) => {
      const x = Math.round(data.x);
      const y = Math.round(data.y);
      const [side, align] = getSideAndAlignFromPlacement(data.placement);
      floating.setAttribute("data-side", side);
      floating.setAttribute("data-align", align);
      Object.assign(floating.style, {
        position: options.strategy,
        top: `${y}px`,
        left: `${x}px`
      });
      if (isHTMLElement(arrowEl) && data.middlewareData.arrow) {
        const { x: x2, y: y2 } = data.middlewareData.arrow;
        const dir = data.placement.split("-")[0];
        arrowEl.setAttribute("data-side", dir);
        Object.assign(arrowEl.style, {
          position: "absolute",
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : "",
          [dir]: `calc(100% - ${arrowOffset}px)`,
          transform: ARROW_TRANSFORM[dir],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return data;
    });
  }
  Object.assign(floating.style, {
    position: options.strategy
  });
  return {
    destroy: autoUpdate(reference, floating, compute)
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update(target);
  return {
    update,
    destroy
  };
};
const defaults$1 = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
const defaults = {
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  defaultOpen: false,
  closeOnPointerDown: true,
  openDelay: 1e3,
  closeDelay: 0,
  forceVisible: false,
  portal: void 0,
  closeOnEscape: true,
  disableHoverableContent: false,
  group: void 0
};
const { name } = createElHelpers("tooltip");
const groupMap = /* @__PURE__ */ new Map();
const tooltipIdParts = ["trigger", "content"];
function createTooltip(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "open", "ids"));
  const { positioning, arrowSize, closeOnPointerDown, openDelay, closeDelay, forceVisible, portal, closeOnEscape, disableHoverableContent, group } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const openReason = writable(null);
  const ids = toWritableStores({ ...generateIds(tooltipIdParts), ...withDefaults.ids });
  let clickedTrigger = false;
  const getEl = (part) => {
    if (!isBrowser$1)
      return null;
    return document.getElementById(ids[part].get());
  };
  let openTimeout = null;
  let closeTimeout = null;
  function openTooltip(reason) {
    if (closeTimeout) {
      window.clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    if (!openTimeout) {
      openTimeout = window.setTimeout(() => {
        open.set(true);
        openReason.update((prev) => prev ?? reason);
        openTimeout = null;
      }, openDelay.get());
    }
  }
  function closeTooltip(isBlur) {
    if (openTimeout) {
      window.clearTimeout(openTimeout);
      openTimeout = null;
    }
    if (isBlur && isMouseInTooltipArea) {
      openReason.set("pointer");
      return;
    }
    if (!closeTimeout) {
      closeTimeout = window.setTimeout(() => {
        open.set(false);
        openReason.set(null);
        if (isBlur)
          clickedTrigger = false;
        closeTimeout = null;
      }, closeDelay.get());
    }
  }
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  const trigger = makeElement(name("trigger"), {
    stores: [ids.content, ids.trigger, open],
    returned: ([$contentId, $triggerId, $open]) => {
      return {
        "aria-describedby": $contentId,
        id: $triggerId,
        "data-state": $open ? "open" : "closed"
      };
    },
    action: (node) => {
      const keydownHandler = (e) => {
        if (closeOnEscape.get() && e.key === kbd.ESCAPE) {
          if (openTimeout) {
            window.clearTimeout(openTimeout);
            openTimeout = null;
          }
          open.set(false);
        }
      };
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", () => {
        const $closeOnPointerDown = closeOnPointerDown.get();
        if (!$closeOnPointerDown)
          return;
        open.set(false);
        clickedTrigger = true;
        if (openTimeout) {
          window.clearTimeout(openTimeout);
          openTimeout = null;
        }
      }), addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        openTooltip("pointer");
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        if (openTimeout) {
          window.clearTimeout(openTimeout);
          openTimeout = null;
        }
      }), addMeltEventListener(node, "focus", () => {
        if (clickedTrigger)
          return;
        openTooltip("focus");
      }), addMeltEventListener(node, "blur", () => closeTooltip(true)), addMeltEventListener(node, "keydown", keydownHandler), addEventListener$1(document, "keydown", keydownHandler));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: [isVisible, open, portal, ids.content],
    returned: ([$isVisible, $open, $portal, $contentId]) => {
      return removeUndefined({
        role: "tooltip",
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: $isVisible ? void 0 : styleToString({ display: "none" }),
        id: $contentId,
        "data-portal": portalAttr($portal),
        "data-state": $open ? "open" : "closed"
      });
    },
    action: (node) => {
      let unsubFloating = noop;
      let unsubPortal = noop;
      const unsubDerived = effect([isVisible, positioning, portal], ([$isVisible, $positioning, $portal]) => {
        unsubPortal();
        unsubFloating();
        const triggerEl = getEl("trigger");
        if (!$isVisible || !triggerEl)
          return;
        tick().then(() => {
          unsubPortal();
          unsubFloating();
          const portalDest = getPortalDestination(node, $portal);
          if (portalDest)
            unsubPortal = usePortal(node, portalDest).destroy;
          unsubFloating = useFloating(triggerEl, node, $positioning).destroy;
        });
      });
      function handleScroll(e) {
        if (!open.get())
          return;
        const target = e.target;
        if (!isElement(target) && !isDocument(target))
          return;
        const triggerEl = getEl("trigger");
        if (triggerEl && target.contains(triggerEl)) {
          closeTooltip();
        }
      }
      const unsubEvents = executeCallbacks(addMeltEventListener(node, "pointerenter", () => openTooltip("pointer")), addMeltEventListener(node, "pointerdown", () => openTooltip("pointer")), addEventListener$1(window, "scroll", handleScroll, { capture: true }));
      return {
        destroy() {
          unsubEvents();
          unsubPortal();
          unsubFloating();
          unsubDerived();
        }
      };
    }
  });
  const arrow2 = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  let isMouseInTooltipArea = false;
  effect(open, ($open) => {
    const currentGroup = group.get();
    if (currentGroup === void 0 || currentGroup === false) {
      return;
    }
    if (!$open) {
      if (groupMap.get(currentGroup) === open) {
        groupMap.delete(currentGroup);
      }
      return;
    }
    const currentOpen = groupMap.get(currentGroup);
    currentOpen?.set(false);
    groupMap.set(currentGroup, open);
  });
  effect([open, openReason], ([$open, $openReason]) => {
    if (!$open || !isBrowser$1)
      return;
    return executeCallbacks(addEventListener$1(document, "mousemove", (e) => {
      const contentEl = getEl("content");
      const triggerEl = getEl("trigger");
      if (!contentEl || !triggerEl)
        return;
      const polygonElements = disableHoverableContent.get() ? [triggerEl] : [triggerEl, contentEl];
      const polygon = makeHullFromElements(polygonElements);
      isMouseInTooltipArea = pointInPolygon({
        x: e.clientX,
        y: e.clientY
      }, polygon);
      if ($openReason !== "pointer")
        return;
      if (!isMouseInTooltipArea) {
        closeTooltip();
      }
    }));
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow: arrow2
    },
    states: { open },
    options
  };
}
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "type", "builders", "el"]);
  let { href = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { builders = [] } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-button-root": "" };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0) $$bindings.builders(builders);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  return `${builders && builders.length ? ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object(getAttrs(builders)),
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}` : ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`}`;
});
function getPositioningUpdater(store) {
  return (props = {}) => {
    return updatePositioning$1(store, props);
  };
}
function updatePositioning$1(store, props) {
  const defaultPositioningProps = {
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: false,
    avoidCollisions: true,
    collisionPadding: 8,
    fitViewport: false,
    strategy: "absolute",
    overlap: false
  };
  const withDefaults = { ...defaultPositioningProps, ...props };
  store.update((prev) => {
    return {
      ...prev,
      placement: joinPlacement(withDefaults.side, withDefaults.align),
      offset: {
        ...prev.offset,
        mainAxis: withDefaults.sideOffset,
        crossAxis: withDefaults.alignOffset
      },
      gutter: 0,
      sameWidth: withDefaults.sameWidth,
      flip: withDefaults.avoidCollisions,
      overflowPadding: withDefaults.collisionPadding,
      boundary: withDefaults.collisionBoundary,
      fitViewport: withDefaults.fitViewport,
      strategy: withDefaults.strategy,
      overlap: withDefaults.overlap
    };
  });
}
function joinPlacement(side, align) {
  if (align === "center")
    return side;
  return `${side}-${align}`;
}
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined$1(props)), getAttrs: getAttrs2 };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, updateOption, getAttrs: getAttrs2 } = setCtx$1({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  const attrs = getAttrs2("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0) $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0) $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>`}`;
});
function getTooltipData() {
  const NAME = "tooltip";
  const PARTS = ["arrow", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getTooltipData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const tooltip = {
    ...createTooltip({
      positioning: {
        placement: "top",
        gutter: 0
      },
      openDelay: 700,
      ...removeUndefined$1(props),
      forceVisible: true
    }),
    getAttrs: getAttrs2
  };
  setContext(NAME, tooltip);
  return {
    ...tooltip,
    updateOption: getOptionUpdater(tooltip.options)
  };
}
function getCtx() {
  const { NAME } = getTooltipData();
  return getContext(NAME);
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "top",
    align: "center",
    sideOffset: 1
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater({ ...withDefaults });
}
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { closeOnPointerDown = void 0 } = $$props;
  let { openDelay = void 0 } = $$props;
  let { closeDelay = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { disableHoverableContent = void 0 } = $$props;
  let { group = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnEscape,
    portal,
    closeOnPointerDown,
    openDelay,
    closeDelay,
    forceVisible: true,
    defaultOpen: open,
    disableHoverableContent,
    group,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    },
    positioning: { gutter: 0, offset: { mainAxis: 1 } }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0) $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0) $$bindings.portal(portal);
  if ($$props.closeOnPointerDown === void 0 && $$bindings.closeOnPointerDown && closeOnPointerDown !== void 0) $$bindings.closeOnPointerDown(closeOnPointerDown);
  if ($$props.openDelay === void 0 && $$bindings.openDelay && openDelay !== void 0) $$bindings.openDelay(openDelay);
  if ($$props.closeDelay === void 0 && $$bindings.closeDelay && closeDelay !== void 0) $$bindings.closeDelay(closeDelay);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0) $$bindings.onOpenChange(onOpenChange);
  if ($$props.disableHoverableContent === void 0 && $$bindings.disableHoverableContent && disableHoverableContent !== void 0) $$bindings.disableHoverableContent(disableHoverableContent);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("closeOnPointerDown", closeOnPointerDown);
  }
  {
    updateOption("openDelay", openDelay);
  }
  {
    updateOption("closeDelay", closeDelay);
  }
  {
    updateOption("group", group);
  }
  {
    updateOption("disableHoverableContent", disableHoverableContent);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Tooltip_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "top" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = false } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs: getAttrs2 } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const attrs = getAttrs2("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0) $$bindings.sideOffset(sideOffset);
  if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0) $$bindings.alignOffset(alignOffset);
  if ($$props.collisionPadding === void 0 && $$bindings.collisionPadding && collisionPadding !== void 0) $$bindings.collisionPadding(collisionPadding);
  if ($$props.avoidCollisions === void 0 && $$bindings.avoidCollisions && avoidCollisions !== void 0) $$bindings.avoidCollisions(avoidCollisions);
  if ($$props.collisionBoundary === void 0 && $$bindings.collisionBoundary && collisionBoundary !== void 0) $$bindings.collisionBoundary(collisionBoundary);
  if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0) $$bindings.sameWidth(sameWidth);
  if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0) $$bindings.fitViewport(fitViewport);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0) $$bindings.strategy(strategy);
  if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0) $$bindings.overlap(overlap);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  {
    if ($open) {
      updatePositioning({
        side,
        align,
        sideOffset,
        alignOffset,
        collisionPadding,
        avoidCollisions,
        collisionBoundary,
        sameWidth,
        fitViewport,
        strategy,
        overlap
      });
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_content();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Tooltip_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs: getAttrs2 } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs2("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Tooltip_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "sideOffset", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { sideOffset = 4 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = { y: 8, duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0) $$bindings.sideOffset(sideOffset);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Tooltip_content$1, "TooltipPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { sideOffset },
      {
        class: cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Tooltip;
const Trigger = Tooltip_trigger;
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0) $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0) $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
let timeoutAction;
let timeoutEnable;
function withoutTransition(action) {
  if (typeof document === "undefined")
    return;
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css);
  const disable = () => document.head.appendChild(style);
  const enable = () => document.head.removeChild(style);
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 120);
  }, 120);
}
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
  getItem: (_key) => null,
  setItem: (_key, _value) => {
  }
};
const isBrowser = typeof document !== "undefined";
const modes = ["dark", "light", "system"];
const modeStorageKey = writable("mode-watcher-mode");
const themeStorageKey = writable("mode-watcher-theme");
const userPrefersMode = createUserPrefersMode();
const systemPrefersMode = createSystemMode();
const themeColors = writable(void 0);
const theme = createCustomTheme();
const disableTransitions = writable(true);
const darkClassNames = writable([]);
const lightClassNames = writable([]);
const derivedMode = createDerivedMode();
createDerivedTheme();
function createUserPrefersMode() {
  const defaultValue = "system";
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getModeStorageKey());
  let value = isValidMode(initialValue) ? initialValue : defaultValue;
  function getModeStorageKey() {
    return get_store_value(modeStorageKey);
  }
  const { subscribe: subscribe2, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getModeStorageKey())
        return;
      const newValue = e.newValue;
      if (isValidMode(newValue)) {
        _set(value = newValue);
      } else {
        _set(value = defaultValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getModeStorageKey(), value);
  }
  return {
    subscribe: subscribe2,
    set
  };
}
function createCustomTheme() {
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(getThemeStorageKey());
  let value = initialValue === null || initialValue === void 0 ? "" : initialValue;
  function getThemeStorageKey() {
    return get_store_value(themeStorageKey);
  }
  const { subscribe: subscribe2, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (e.key !== getThemeStorageKey())
        return;
      const newValue = e.newValue;
      if (newValue === null) {
        _set(value = "");
      } else {
        _set(value = newValue);
      }
    };
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v) {
    _set(value = v);
    storage.setItem(getThemeStorageKey(), value);
  }
  return {
    subscribe: subscribe2,
    set
  };
}
function createSystemMode() {
  const defaultValue = void 0;
  let track = true;
  const { subscribe: subscribe2, set } = writable(defaultValue, () => {
    if (!isBrowser)
      return;
    const handler = (e) => {
      if (!track)
        return;
      set(e.matches ? "light" : "dark");
    };
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    mediaQueryState.addEventListener("change", handler);
    return () => mediaQueryState.removeEventListener("change", handler);
  });
  function query() {
    if (!isBrowser)
      return;
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    set(mediaQueryState.matches ? "light" : "dark");
  }
  function tracking(active) {
    track = active;
  }
  return {
    subscribe: subscribe2,
    query,
    tracking
  };
}
function createDerivedMode() {
  const { subscribe: subscribe2 } = derived([
    userPrefersMode,
    systemPrefersMode,
    themeColors,
    disableTransitions,
    darkClassNames,
    lightClassNames
  ], ([$userPrefersMode, $systemPrefersMode, $themeColors, $disableTransitions, $darkClassNames, $lightClassNames]) => {
    if (!isBrowser)
      return void 0;
    const derivedMode2 = $userPrefersMode === "system" ? $systemPrefersMode : $userPrefersMode;
    const sanitizedDarkClassNames = sanitizeClassNames($darkClassNames);
    const sanitizedLightClassNames = sanitizeClassNames($lightClassNames);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode2 === "light") {
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length)
          htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.light);
        }
      } else {
        if (sanitizedLightClassNames.length)
          htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length)
          htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.dark);
        }
      }
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode2;
  });
  return {
    subscribe: subscribe2
  };
}
function createDerivedTheme() {
  const { subscribe: subscribe2 } = derived([theme, disableTransitions], ([$theme, $disableTransitions]) => {
    if (!isBrowser)
      return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", $theme);
    }
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return $theme;
  });
  return {
    subscribe: subscribe2
  };
}
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
function setMode(mode) {
  userPrefersMode.set(mode);
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme2 = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme2) {
    rootEl.setAttribute("data-theme", theme2);
    localStorage.setItem("mode-watcher-theme", theme2);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trueNonce;
  let $$unsubscribe_themeStorageKeyStore;
  let $$unsubscribe_modeStorageKeyStore;
  $$unsubscribe_themeStorageKeyStore = subscribe(themeStorageKey, (value) => value);
  $$unsubscribe_modeStorageKeyStore = subscribe(modeStorageKey, (value) => value);
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  let { disableTransitions: disableTransitions$1 = true } = $$props;
  let { darkClassNames: darkClassNames$1 = ["dark"] } = $$props;
  let { lightClassNames: lightClassNames$1 = [] } = $$props;
  let { defaultTheme = "" } = $$props;
  let { nonce = "" } = $$props;
  let { themeStorageKey: themeStorageKey$1 = "mode-watcher-theme" } = $$props;
  let { modeStorageKey: modeStorageKey$1 = "mode-watcher-mode" } = $$props;
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  if ($$props.track === void 0 && $$bindings.track && track !== void 0) $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0) $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0) $$bindings.themeColors(themeColors$1);
  if ($$props.disableTransitions === void 0 && $$bindings.disableTransitions && disableTransitions$1 !== void 0) $$bindings.disableTransitions(disableTransitions$1);
  if ($$props.darkClassNames === void 0 && $$bindings.darkClassNames && darkClassNames$1 !== void 0) $$bindings.darkClassNames(darkClassNames$1);
  if ($$props.lightClassNames === void 0 && $$bindings.lightClassNames && lightClassNames$1 !== void 0) $$bindings.lightClassNames(lightClassNames$1);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0) $$bindings.defaultTheme(defaultTheme);
  if ($$props.nonce === void 0 && $$bindings.nonce && nonce !== void 0) $$bindings.nonce(nonce);
  if ($$props.themeStorageKey === void 0 && $$bindings.themeStorageKey && themeStorageKey$1 !== void 0) $$bindings.themeStorageKey(themeStorageKey$1);
  if ($$props.modeStorageKey === void 0 && $$bindings.modeStorageKey && modeStorageKey$1 !== void 0) $$bindings.modeStorageKey(modeStorageKey$1);
  {
    disableTransitions.set(disableTransitions$1);
  }
  {
    themeColors.set(themeColors$1);
  }
  {
    darkClassNames.set(darkClassNames$1);
  }
  {
    lightClassNames.set(lightClassNames$1);
  }
  {
    modeStorageKey.set(modeStorageKey$1);
  }
  {
    themeStorageKey.set(themeStorageKey$1);
  }
  trueNonce = typeof window === "undefined" ? nonce : "";
  $$unsubscribe_themeStorageKeyStore();
  $$unsubscribe_modeStorageKeyStore();
  return `${$$result.head += `<!-- HEAD_svelte-1nen96w_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}${trueNonce ? ` <!-- HTML_TAG_START -->${`<script nonce=${trueNonce}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->` : ` <!-- HTML_TAG_START -->${`<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nen96w_END -->`, ""}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "builders"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size: size2 = "default" } = $$props;
  let { builders = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0) $$bindings.size(size2);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0) $$bindings.builders(builders);
  return `${validate_component(Button$1, "ButtonPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { builders },
      {
        class: cn(buttonVariants({ variant, size: size2, className }))
      },
      { type: "button" },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const ModeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      size: "icon",
      class: "rounded-full"
    },
    {},
    {
      default: () => {
        return `${validate_component(Sun, "Sun").$$render(
          $$result,
          {
            class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          },
          {},
          {}
        )} ${validate_component(Moon, "Moon").$$render(
          $$result,
          {
            class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          },
          {},
          {}
        )} <span class="sr-only" data-svelte-h="svelte-ntgole">Toggle theme</span>`;
      }
    }
  )}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme2;
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => $mode = value);
  theme2 = $mode;
  $$unsubscribe_mode();
  return `<div class="pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom"><div class="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div> ${validate_component(Dock, "Dock").$$render(
    $$result,
    {
      class: "pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center gap-0.5 rounded-full bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:gap-1 md:gap-2 "
    },
    {},
    {
      default: ({ magnification, distance, mouseX }) => {
        return `${each(DATA.navbar, (item) => {
          return `${validate_component(DockIcon, "DockIcon").$$render($$result, { magnification, mouseX, distance }, {}, {
            default: () => {
              return `${validate_component(Root, "Tooltip.Root").$$render($$result, { openDelay: 300 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "Tooltip.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          href: item.href,
                          variant: "ghost",
                          size: "icon",
                          class: "size-12 rounded-full"
                        },
                        {},
                        {
                          default: () => {
                            return ` ${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { class: "size-[18px]", strokeWidth: 1.5 }, {}, {})} `;
                          }
                        }
                      )} `;
                    }
                  })} ${validate_component(Tooltip_content, "Tooltip.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p>${escape(item.label)}</p> `;
                    }
                  })} `;
                }
              })} `;
            }
          })}`;
        })} ${validate_component(Separator, "Separator").$$render($$result, { orientation: "vertical", class: "h-full" }, {}, {})} ${each(Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).map(([_, social]) => social), (social) => {
          return `${validate_component(DockIcon, "DockIcon").$$render($$result, { magnification, mouseX, distance }, {}, {
            default: () => {
              return `${validate_component(Root, "Tooltip.Root").$$render($$result, { openDelay: 300 }, {}, {
                default: () => {
                  return `${validate_component(Trigger, "Tooltip.Trigger").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          href: social.url,
                          target: "_blank",
                          variant: "ghost",
                          size: "icon",
                          class: "size-12 rounded-full"
                        },
                        {},
                        {
                          default: () => {
                            return ` ${social?.dark_icon && theme2 === "dark" ? `<img${add_attribute("src", social?.dark_icon, 0)} class="size-4"${add_attribute("alt", social.name, 0)}>` : `<img${add_attribute("src", social.icon, 0)} class="size-[18px]"${add_attribute("alt", social.name, 0)}>`} `;
                          }
                        }
                      )} `;
                    }
                  })} ${validate_component(Tooltip_content, "Tooltip.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `<p>${escape(social.name)}</p> `;
                    }
                  })} `;
                }
              })} `;
            }
          })}`;
        })} ${validate_component(Separator, "Separator").$$render(
          $$result,
          {
            orientation: "vertical",
            class: "h-full py-2"
          },
          {},
          {}
        )} ${validate_component(DockIcon, "DockIcon").$$render($$result, { magnification, mouseX, distance }, {}, {
          default: () => {
            return `${validate_component(Root, "Tooltip.Root").$$render($$result, { openDelay: 300 }, {}, {
              default: () => {
                return `${validate_component(Trigger, "Tooltip.Trigger").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(ModeToggle, "ModeToggle").$$render($$result, {}, {}, {})}`;
                  }
                })} ${validate_component(Tooltip_content, "Tooltip.Content").$$render($$result, {}, {}, {
                  default: () => {
                    return `<p data-svelte-h="svelte-1vnav9h">Theme</p>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setMode("dark");
  return `${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} <div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24">${slots.default ? slots.default({}) : ``} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
