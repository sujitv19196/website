import { c as create_ssr_component, v as validate_component, s as setContext, g as getContext, j as subscribe, k as each, e as compute_rest_props, f as spread, i as escape_object, b as add_attribute, h as escape_attribute_value, n as noop, l as escape, m as missing_component } from "../../chunks/ssr.js";
import { I as Icon, P as PresenceContext, E as setDomContext, t as tick, S as SharedLayoutContext, F as isSharedLayout, d as toWritableStores, o as omit, f as overridable, k as effect, e as makeElement, l as isBrowser, s as styleToString, z as createBitAttrs, A as removeUndefined, B as getOptionUpdater, a as motion, c as cn, y as is_void, D as DATA } from "../../chunks/updater.js";
import { tv } from "tailwind-variants";
import "clsx";
import "dequal";
import { w as writable } from "../../chunks/index.js";
import { marked } from "marked";
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Divide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "6", "r": "1" }],
    [
      "line",
      {
        "x1": "5",
        "x2": "19",
        "y1": "12",
        "y2": "12"
      }
    ],
    ["circle", { "cx": "12", "cy": "18", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "divide" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
let presenceId = 0;
function getPresenceId() {
  const id = presenceId;
  presenceId++;
  return id;
}
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const PresenceChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isPresent, onExitComplete = void 0, initial, custom = void 0, presenceAffectsLayout, isCustom } = $$props;
  const presenceChildren = new newChildrenMap();
  const id = getPresenceId();
  const memoContext = () => {
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        let allComplete = true;
        presenceChildren.forEach((isComplete) => {
          if (!isComplete) allComplete = false;
        });
        allComplete && onExitComplete?.();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  };
  let context = PresenceContext();
  const keyset = () => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  };
  setContext(PresenceContext, context);
  setDomContext("Presence", isCustom, context);
  if ($$props.isPresent === void 0 && $$bindings.isPresent && isPresent !== void 0) $$bindings.isPresent(isPresent);
  if ($$props.onExitComplete === void 0 && $$bindings.onExitComplete && onExitComplete !== void 0) $$bindings.onExitComplete(onExitComplete);
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0) $$bindings.initial(initial);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  if ($$props.presenceAffectsLayout === void 0 && $$bindings.presenceAffectsLayout && presenceAffectsLayout !== void 0) $$bindings.presenceAffectsLayout(presenceAffectsLayout);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  {
    context.set(memoContext());
  }
  {
    keyset();
  }
  {
    tick().then(() => {
      !isPresent && !presenceChildren.size && onExitComplete?.();
    });
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
function getChildKey(child) {
  return child.key || "";
}
const AnimatePresence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isl;
  let forceRender;
  let $layoutContext, $$unsubscribe_layoutContext;
  let { list = void 0, custom = void 0, initial = true, onExitComplete = void 0, exitBeforeEnter = void 0, presenceAffectsLayout = true, show = void 0, isCustom = false } = $$props;
  let _list = list !== void 0 ? list : show ? [{ key: 1 }] : [];
  const layoutContext = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
  $$unsubscribe_layoutContext = subscribe(layoutContext, (value) => $layoutContext = value);
  let isInitialRender = true;
  let filteredChildren = _list;
  let presentChildren = filteredChildren;
  let allChildren = /* @__PURE__ */ new Map();
  let exiting = /* @__PURE__ */ new Set();
  const updateChildLookup = (children, allChild) => {
    children.forEach((child) => {
      const key = getChildKey(child);
      allChild.set(key, child);
    });
  };
  let childrenToRender = [...filteredChildren.map((v) => ({ present: true, item: v, key: v.key }))];
  if ($$props.list === void 0 && $$bindings.list && list !== void 0) $$bindings.list(list);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0) $$bindings.initial(initial);
  if ($$props.onExitComplete === void 0 && $$bindings.onExitComplete && onExitComplete !== void 0) $$bindings.onExitComplete(onExitComplete);
  if ($$props.exitBeforeEnter === void 0 && $$bindings.exitBeforeEnter && exitBeforeEnter !== void 0) $$bindings.exitBeforeEnter(exitBeforeEnter);
  if ($$props.presenceAffectsLayout === void 0 && $$bindings.presenceAffectsLayout && presenceAffectsLayout !== void 0) $$bindings.presenceAffectsLayout(presenceAffectsLayout);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  _list = list !== void 0 ? list : show ? [{ key: 1 }] : [];
  isl = isSharedLayout($layoutContext);
  forceRender = () => {
    if (isl) {
      $layoutContext.forceUpdate();
    }
    _list = [..._list];
  };
  filteredChildren = _list;
  {
    updateChildLookup(filteredChildren, allChildren);
  }
  {
    if (!isInitialRender) {
      childrenToRender = [...filteredChildren.map((v) => ({ present: true, item: v, key: v.key }))];
      const presentKeys = presentChildren.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        } else {
          exiting.delete(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1) return;
        const child = allChildren.get(key);
        if (!child) return;
        const insertionIndex = presentKeys.indexOf(key);
        const onExit = () => {
          allChildren.delete(key);
          exiting.delete(key);
          const removeIndex = presentChildren.findIndex((presentChild) => presentChild.key === key);
          if (removeIndex < 0) {
            return;
          }
          presentChildren.splice(removeIndex, 1);
          if (!exiting.size) {
            presentChildren = [...filteredChildren];
            forceRender();
            onExitComplete && onExitComplete();
          }
        };
        childrenToRender.splice(insertionIndex, 0, {
          present: false,
          item: child,
          key: getChildKey(child),
          onExit
        });
      });
      presentChildren = childrenToRender;
    } else {
      isInitialRender = false;
    }
  }
  $$unsubscribe_layoutContext();
  return `${each(childrenToRender, (child) => {
    return `${validate_component(PresenceChild, "PresenceChild").$$render(
      $$result,
      {
        isPresent: child.present,
        initial: initial ? void 0 : false,
        custom: child.onExit ? custom : void 0,
        presenceAffectsLayout,
        onExitComplete: child.onExit,
        isCustom
      },
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({ item: child.item }) : ``}`;
        }
      }
    )}`;
  })}`;
});
const defaults = {
  src: "",
  delayMs: 0,
  onLoadingStatusChange: void 0
};
const createAvatar = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "loadingStatus", "onLoadingStatusChange"));
  const { src, delayMs } = options;
  const loadingStatusWritable = withDefaults.loadingStatus ?? writable("loading");
  const loadingStatus = overridable(loadingStatusWritable, withDefaults?.onLoadingStatusChange);
  effect([src, delayMs], ([$src, $delayMs]) => {
    if (isBrowser) {
      const image2 = new Image();
      image2.src = $src;
      image2.onload = () => {
        if (delayMs !== void 0) {
          const timerId = window.setTimeout(() => {
            loadingStatus.set("loaded");
          }, $delayMs);
          return () => window.clearTimeout(timerId);
        } else {
          loadingStatus.set("loaded");
        }
      };
      image2.onerror = () => {
        loadingStatus.set("error");
      };
    }
  });
  const image = makeElement("avatar-image", {
    stores: [src, loadingStatus],
    returned: ([$src, $loadingStatus]) => {
      const imageStyles = styleToString({
        display: $loadingStatus === "loaded" ? "block" : "none"
      });
      return {
        src: $src,
        style: imageStyles
      };
    }
  });
  const fallback = makeElement("avatar-fallback", {
    stores: [loadingStatus],
    returned: ([$loadingStatus]) => {
      return {
        style: $loadingStatus === "loaded" ? styleToString({
          display: "none"
        }) : void 0,
        hidden: $loadingStatus === "loaded" ? true : void 0
      };
    }
  });
  return {
    elements: {
      image,
      fallback
    },
    states: {
      loadingStatus
    },
    options
  };
};
function getAvatarData() {
  const NAME = "avatar";
  const PARTS = ["root", "image", "fallback"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getAvatarData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const avatar = { ...createAvatar(removeUndefined(props)), getAttrs };
  setContext(NAME, avatar);
  return {
    ...avatar,
    updateOption: getOptionUpdater(avatar.options)
  };
}
function getImage(src = "") {
  const { NAME } = getAvatarData();
  const avatar = getContext(NAME);
  if (!src) {
    avatar.options.src.set("");
  } else {
    avatar.options.src.set(src);
  }
  return avatar;
}
function getCtx() {
  const { NAME } = getAvatarData();
  return getContext(NAME);
}
const Avatar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["delayMs", "loadingStatus", "onLoadingStatusChange", "asChild", "el"]);
  let { delayMs = void 0 } = $$props;
  let { loadingStatus = void 0 } = $$props;
  let { onLoadingStatusChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { states: { loadingStatus: localLoadingStatus }, updateOption, getAttrs } = setCtx({
    src: "",
    delayMs,
    onLoadingStatusChange: ({ next }) => {
      loadingStatus = next;
      onLoadingStatusChange?.(next);
      return next;
    }
  });
  const attrs = getAttrs("root");
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0) $$bindings.delayMs(delayMs);
  if ($$props.loadingStatus === void 0 && $$bindings.loadingStatus && loadingStatus !== void 0) $$bindings.loadingStatus(loadingStatus);
  if ($$props.onLoadingStatusChange === void 0 && $$bindings.onLoadingStatusChange && onLoadingStatusChange !== void 0) $$bindings.onLoadingStatusChange(onLoadingStatusChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  loadingStatus !== void 0 && localLoadingStatus.set(loadingStatus);
  {
    updateOption("delayMs", delayMs);
  }
  return `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ attrs }) : ``}</div>`}`;
});
const Avatar_image$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let builder;
  let $$restProps = compute_rest_props($$props, ["src", "alt", "asChild", "el"]);
  let $image, $$unsubscribe_image = noop, $$subscribe_image = () => ($$unsubscribe_image(), $$unsubscribe_image = subscribe(image, ($$value) => $image = $$value), image);
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-bits-avatar-image": "" };
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  $$subscribe_image(image = getImage(src).elements.image);
  builder = $image;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_image();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<img${spread(
    [
      escape_object(builder),
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", el, 0)}>`}`;
});
const Avatar_fallback$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $fallback, $$unsubscribe_fallback;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { fallback }, getAttrs } = getCtx();
  $$unsubscribe_fallback = subscribe(fallback, (value) => $fallback = value);
  const attrs = getAttrs("fallback");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $fallback;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_fallback();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</span>`}`;
});
Promise.resolve();
const BlurFade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 0.4 } = $$props;
  let { delay = 0 } = $$props;
  let { yOffset = 8 } = $$props;
  let { inViewMargin = "-20px" } = $$props;
  let { blur = "2px" } = $$props;
  let { id = crypto.randomUUID().slice(0, 6) } = $$props;
  let { once = true } = $$props;
  let defaultVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur})`
    },
    visible: { opacity: 1, y: 0, filter: `blur(0px)` }
  };
  let isInView = "hidden";
  let { class: _class = "" } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.yOffset === void 0 && $$bindings.yOffset && yOffset !== void 0) $$bindings.yOffset(yOffset);
  if ($$props.inViewMargin === void 0 && $$bindings.inViewMargin && inViewMargin !== void 0) $$bindings.inViewMargin(inViewMargin);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0) $$bindings.blur(blur);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0) $$bindings.once(once);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0) $$bindings.class(_class);
  return `${validate_component(AnimatePresence, "AnimatePresence").$$render($$result, { list: [{ key: id }] }, {}, {
    default: ({ item }) => {
      return `${validate_component(motion, "Motion").$$render(
        $$result,
        {
          initial: "hidden",
          animate: isInView,
          exit: "hidden",
          variants: defaultVariants,
          transition: {
            delay: 0.04 + delay,
            duration,
            ease: "easeOut"
          }
        },
        {},
        {
          default: ({ motion: motion2 }) => {
            return `<div${add_attribute("class", cn(_class), 0)}>${slots.default ? slots.default({}) : `Default`}</div>`;
          }
        }
      )}`;
    }
  })}`;
});
const badgeVariants = tv({
  base: "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "href", "variant"]);
  let { class: className = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        {
          class: escape_attribute_value(cn(badgeVariants({ variant, className })))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "delayMs"]);
  let { class: className = void 0 } = $$props;
  let { delayMs = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0) $$bindings.delayMs(delayMs);
  return `${validate_component(Avatar$1, "AvatarPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { delayMs },
      {
        class: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
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
const Avatar_image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "src", "alt"]);
  let { class: className = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  return `${validate_component(Avatar_image$1, "AvatarPrimitive.Image").$$render(
    $$result,
    Object.assign(
      {},
      { src },
      { alt },
      {
        class: cn("aspect-square h-full w-full", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Avatar_fallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Avatar_fallback$1, "AvatarPrimitive.Fallback").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
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
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: _class = "" } = $$props;
  let { title } = $$props;
  let { href = "" } = $$props;
  let { description } = $$props;
  let { dates } = $$props;
  let { tags } = $$props;
  let { link = "" } = $$props;
  let { image = "" } = $$props;
  let { video = "" } = $$props;
  let { links = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0) $$bindings.class(_class);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0) $$bindings.dates(dates);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.video === void 0 && $$bindings.video && video !== void 0) $$bindings.video(video);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  return ` <div class="flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg rounded-lg bg-card text-card-foreground"> ${video ? `<video class="pointer-events-none mx-auto h-60 w-full object-cover object-top"${add_attribute("src", video, 0)} autoplay loop muted></video>` : `<img class="h-full w-full overflow-hidden object-cover object-mid"${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)}>`}   <div class="px-2 flex flex-col"><div class="space-y-1"> <div class="mt-1 text-lg text-base">${escape(title)}</div>   <div class="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground"><!-- HTML_TAG_START -->${marked(description)}<!-- HTML_TAG_END --></div></div></div>  <div class="mt-auto flex flex-col px-2 text-pretty font-sans text-sm text-muted-foreground">${tags && tags.length > 0 ? `<div class="mt-2 flex flex-wrap gap-1">${each(tags, (tag) => {
    return `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        class: "rounded-[4px] px-1 py-0 text-[12px]",
        variant: "secondary"
      },
      {},
      {
        default: () => {
          return `${escape(tag)} `;
        }
      }
    )}`;
  })}</div>` : ``}</div>  <div class="px-2 pb-2 flex items-center pt-2">${links && links.length > 0 ? `<div class="flex flex-row flex-wrap items-start gap-1">${each(links, (link2) => {
    return `<a${add_attribute("href", link2?.href, 0)} target="_blank">${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        class: "flex gap-1 px-2 py-1 text-[10px] items-center justify-center"
      },
      {},
      {
        default: () => {
          return ` ${validate_component(link2.icon || missing_component, "svelte:component").$$render($$result, { class: "size-3 mb-px", strokeWidth: 1.6 }, {}, {})} ${escape(link2.type)} `;
        }
      }
    )} </a>`;
  })}</div>` : ``}</div></div>`;
});
const ResumeCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logoUrl = "" } = $$props;
  let { company = "" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { href = "" } = $$props;
  let { badges = [""] } = $$props;
  let { description = "" } = $$props;
  let { start = "" } = $$props;
  let { end = "" } = $$props;
  if ($$props.logoUrl === void 0 && $$bindings.logoUrl && logoUrl !== void 0) $$bindings.logoUrl(logoUrl);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0) $$bindings.company(company);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.badges === void 0 && $$bindings.badges && badges !== void 0) $$bindings.badges(badges);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0) $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0) $$bindings.end(end);
  return `<a${add_attribute("href", href || "#", 0)}><div class="flex rounded-lg bg-card text-card-foreground"><div class="flex-none">${validate_component(Avatar, "Avatar.Root").$$render(
    $$result,
    {
      class: "bg-muted-background m-auto size-12 border dark:bg-foreground"
    },
    {},
    {
      default: () => {
        return `${validate_component(Avatar_image, "Avatar.Image").$$render(
          $$result,
          {
            src: logoUrl,
            alt: company,
            class: "object-contain"
          },
          {},
          {}
        )} ${validate_component(Avatar_fallback, "Avatar.Fallback").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(company[0])}`;
          }
        })}`;
      }
    }
  )}</div> <div class="group ml-4 flex-grow flex-col items-center"><div class="flex flex-col"><div class="flex items-center justify-between gap-x-2 text-base"><h3 class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">${escape(company)} ${badges?.length > 0 && badges[0] !== "" ? `<span class="inline-flex gap-x-1">${each(badges, (badge, index) => {
    return `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        variant: "secondary",
        class: "align-middle text-xs",
        key: index
      },
      {},
      {
        default: () => {
          return `${escape(badge)} `;
        }
      }
    )}`;
  })}</span>` : ``} ${validate_component(Chevron_right, "ChevronRightIcon").$$render(
    $$result,
    {
      class: cn("size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100", "rotate-0")
    },
    {},
    {}
  )}</h3> <div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">${escape(start)} - ${escape(end || "Present")}</div></div> ${title ? `<div class="font-sans text-xs">${escape(title)}</div>` : ``}</div> ${description ? `${``}` : ``} ${subtitle ? `<div class="mt-2 text-xs text-muted-foreground sm:text-sm">${escape(subtitle)}</div>` : ``}</div></div></a>`;
});
let BLUR_FADE_DELAY = 0.04;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cljdf6_START -->${$$result.title = `<title>${escape(DATA.name)}</title>`, ""}<meta name="description"${add_attribute("content", DATA.description, 0)}><meta property="og:title"${add_attribute("content", DATA.name, 0)}><meta property="og:description"${add_attribute("content", DATA.description, 0)}><meta property="og:url"${add_attribute("content", DATA.url, 0)}><meta property="og:site_name"${add_attribute("content", DATA.name, 0)}><meta property="og:image"${add_attribute("content", DATA.img, 0)}><meta property="og:locale" content="en_US"><meta property="og:type" content="website"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"><meta name="twitter:title"${add_attribute("content", DATA.name, 0)}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${add_attribute("content", DATA.img, 0)}><meta name="twitter:description"${add_attribute("content", DATA.description, 0)}><meta name="google-site-verification" content="your-google-verification-code"><meta name="yandex-verification" content="your-yandex-verification-code"><!-- HEAD_svelte-cljdf6_END -->`, ""} <main class="flex min-h-[100dvh] flex-col space-y-10"><section id="hero"><div class="mx-auto w-full max-w-2xl space-y-8"><div class="flex justify-between gap-2"><div class="flex flex-1 flex-col space-y-1.5">${validate_component(BlurFade, "BlurFade").$$render(
    $$result,
    {
      delay: BLUR_FADE_DELAY,
      class: "text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none",
      yOffset: 8
    },
    {},
    {
      default: () => {
        return `Hi, I&#39;m Sujit 👋`;
      }
    }
  )} ${validate_component(BlurFade, "BlurFade").$$render(
    $$result,
    {
      class: "max-w-[600px] md:text-xl",
      delay: BLUR_FADE_DELAY
    },
    {},
    {
      default: () => {
        return `${escape(DATA.description)}.`;
      }
    }
  )}</div> ${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `${validate_component(Avatar, "Avatar.Root").$$render($$result, { class: "size-28 border" }, {}, {
        default: () => {
          return `${validate_component(Avatar_image, "Avatar.Image").$$render($$result, { alt: DATA.name, src: DATA.avatarUrl }, {}, {})} ${validate_component(Avatar_fallback, "Avatar.Fallback").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(DATA.initials)}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></div></section> <section id="about">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `<h2 class="text-2xl font-bold" data-svelte-h="svelte-1517qn9">About</h2>`;
    }
  })} ${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * 1.4 }, {}, {
    default: () => {
      return `<div class="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert"><!-- HTML_TAG_START -->${marked(DATA.summary)}<!-- HTML_TAG_END --></div>`;
    }
  })}</section> <section id="projects"><div class="w-full space-y-12 py-12">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `<div class="flex flex-col items-center justify-center space-y-4 text-center" data-svelte-h="svelte-12nesm7"><div class="space-y-2"><div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">My Projects</div> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my cool projects!</h2> <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">I&#39;ve worked on a variety of projects, from
							websites to distributed protocols, to accessibility
							tools. Here are a few of my favorites! 🚀</p></div></div>`;
    }
  })} <div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-1">${each(DATA.projects, (project, id) => {
    return `${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * 1.5 + id * 0.05 }, {}, {
      default: () => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render(
          $$result,
          {
            href: project.href,
            title: project.title,
            description: project.description,
            dates: project.dates,
            tags: project.technologies,
            image: project.image,
            links: project.links,
            class: id === DATA.projects.length - 1 && DATA.projects.length % 2 !== 0 ? "sm:col-span-2" : ""
          },
          {},
          {}
        )} `;
      }
    })} ${validate_component(Divide, "Divide").$$render(
      $$result,
      {
        class: "mx-auto my-4 h-1 w-full max-w-[800px] bg-muted-foreground"
      },
      {},
      {}
    )}`;
  })}</div></div></section> <section id="work"><div class="flex min-h-0 flex-col gap-y-3">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `<h2 class="text-xl font-bold" data-svelte-h="svelte-wcvqep">Work Experience</h2>`;
    }
  })} ${each(DATA.work, (work, id) => {
    return `${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * 1.2 + id * 0.05 }, {}, {
      default: () => {
        return `${validate_component(ResumeCard, "ResumeCard").$$render($$result, Object.assign({}, work), {}, {})} `;
      }
    })}`;
  })}</div></section> <section id="education"><div class="flex min-h-0 flex-col gap-y-3">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `<h2 class="text-xl font-bold" data-svelte-h="svelte-1v7sjou">Education</h2>`;
    }
  })} ${each(DATA.education, (edu, id) => {
    return `${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * 1.2 + id * 0.05 }, {}, {
      default: () => {
        return `${validate_component(ResumeCard, "ResumeCard").$$render(
          $$result,
          {
            logoUrl: edu.logoUrl,
            company: edu.school,
            subtitle: edu.degree,
            start: edu.start,
            end: edu.end
          },
          {},
          {}
        )} `;
      }
    })}`;
  })}</div></section> <section id="skills"><div class="flex min-h-0 flex-col gap-y-3">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY }, {}, {
    default: () => {
      return `<h2 class="text-xl font-bold" data-svelte-h="svelte-yy1gxe">Skills</h2>`;
    }
  })} <div class="flex flex-wrap gap-1">${each(DATA.skills, (skill, id) => {
    return `${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * id + 2e-3 }, {}, {
      default: () => {
        return `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(skill)}`;
          }
        })} `;
      }
    })}`;
  })}</div></div></section> <section id="contact"><div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">${validate_component(BlurFade, "BlurFade").$$render($$result, { delay: BLUR_FADE_DELAY * 2 }, {}, {
    default: () => {
      return `<div class="space-y-3" data-svelte-h="svelte-m7hy2y"><div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">Contact</div> <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2> <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Have a question or want to work together? Feel free to email me at sujitvaradhan4atgmaildotcom or connect on Linkedin!</p></div>`;
    }
  })}</div></section></main>`;
});
export {
  Page as default
};
