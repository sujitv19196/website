import { o as set_current_component, r as run_all, p as current_component, c as create_ssr_component, e as compute_rest_props, f as spread, i as escape_object, h as escape_attribute_value, k as each, v as validate_component, g as getContext, s as setContext, a as get_store_value, j as subscribe, q as onDestroy, m as missing_component } from "./ssr.js";
import { w as writable, r as readable, d as derived } from "./index.js";
import { __read, __rest, __spreadArray } from "tslib";
import sync, { getFrameData, cancelSync, flushSync } from "framesync";
import { velocityPerSecond, cubicBezier, linear, easeIn, easeInOut, easeOut, circIn, circInOut, circOut, backIn, backInOut, backOut, anticipate, bounceIn, bounceInOut, bounceOut, inertia, animate, mix, progress, clamp, distance, pipe } from "popmotion";
import { complex, number, px, degrees, scale, alpha, progressPercentage, color, filter, percent, vw, vh } from "style-value-types";
import { warning, invariant } from "hey-listen";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "dequal";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color: color2 = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color2 !== void 0) $$bindings.color(color2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color2) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Globe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "globe" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const House = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "house" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paperclip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paperclip" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
      }
    ],
    ["path", { "d": "m10 15 5-3-5-3z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "youtube" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const GithubSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMxODE5MUEnICB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg==";
const GithubDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+";
const GmailSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMwQTBBMEEnICAgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5HbWFpbDwvdGl0bGU+PHBhdGggZD0iTTI0IDUuNDU3djEzLjkwOWMwIC45MDQtLjczMiAxLjYzNi0xLjYzNiAxLjYzNmgtMy44MTlWMTEuNzNMMTIgMTYuNjRsLTYuNTQ1LTQuOTF2OS4yNzNIMS42MzZBMS42MzYgMS42MzYgMCAwIDEgMCAxOS4zNjZWNS40NTdjMC0yLjAyMyAyLjMwOS0zLjE3OCAzLjkyNy0xLjk2NEw1LjQ1NSA0LjY0IDEyIDkuNTQ4bDYuNTQ1LTQuOTEgMS41MjgtMS4xNDVDMjEuNjkgMi4yOCAyNCAzLjQzNCAyNCA1LjQ1N3oiLz48L3N2Zz4=";
const GmailDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R21haWw8L3RpdGxlPjxwYXRoIGQ9Ik0yNCA1LjQ1N3YxMy45MDljMCAuOTA0LS43MzIgMS42MzYtMS42MzYgMS42MzZoLTMuODE5VjExLjczTDEyIDE2LjY0bC02LjU0NS00LjkxdjkuMjczSDEuNjM2QTEuNjM2IDEuNjM2IDAgMCAxIDAgMTkuMzY2VjUuNDU3YzAtMi4wMjMgMi4zMDktMy4xNzggMy45MjctMS45NjRMNS40NTUgNC42NCAxMiA5LjU0OGw2LjU0NS00LjkxIDEuNTI4LTEuMTQ1QzIxLjY5IDIuMjggMjQgMy40MzQgMjQgNS40NTd6Ii8+PC9zdmc+";
const LinkedinSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMxODE5MUEnICB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkxpbmtlZEluPC90aXRsZT48cGF0aCBkPSJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4NnpNNS4zMzcgNy40MzNjLTEuMTQ0IDAtMi4wNjMtLjkyNi0yLjA2My0yLjA2NSAwLTEuMTM4LjkyLTIuMDYzIDIuMDYzLTIuMDYzIDEuMTQgMCAyLjA2NC45MjUgMi4wNjQgMi4wNjMgMCAxLjEzOS0uOTI1IDIuMDY1LTIuMDY0IDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiLz48L3N2Zz4=";
const LinkedinDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW48L3RpdGxlPjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIvPjwvc3ZnPg==";
const SujitHeadshot = "/website/_app/immutable/assets/sujit-headshot.CncopXWz.png";
const InstalilyLogo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHQABAAMAAwEBAQAAAAAAAAAAAAYHCAIDCQUBBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAc6AAAAAAAAAAAAAAAAAAAAAAAAAAAAkEmnGljGLZwxi2cMYtnDGPDaIwfG/RSMGEl5UgcAAAAAAX/pXNWlQ+TgY9D3nePRB53j0Qed/YehjEd6lz1xY36effz9mY2OAAAAAL+0tmnSwxFt2rDHwAAALs1R516sLoy9qGPmC3LiAAAAX9pbNOlgDPOcvROujGC24gRNJxGEnEYlfWN2vk/WMSwW7KTAAAAL+0tljU5EYNZWCD0UY6vwsl09wAAABmigr+oEAAAAnW2vO7eJIMK7qpYyoDv8Asx8SNHBI/wAjokSOjc0uhU1M00Df1AgAAAC9KL5noj+VxZBlalPROmTKScQ8/ndg63YOt2Dbc1hc0M00Df1AgAAAAH0Ne4y5noiy9fZJgAAAAZqoC/6AAAAAAAAJJ9+vBYyuRY35XQsVXQsVXQkEfAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAApEAAABAUEAQQDAQAAAAAAAAAAAgUGAQMEBzATFhc0EBIVITEUNmAg/9oACAEBAAEFAv6hIQa5dPx6vjjxfHHq+OPV8cer449Xxx6vjj1fBrfr5YVbbVKGGa0nbxKjaTVmDgtjUUcDkNLPjtJ2sjrZdM4pVfQT0yrxWk7YV6WNalahxqGGoYahhqGHrMCVE2XFOeiymxb1yqRSN9+Ho1COKhOSMs+G0nb8PNJijuHAxnwZNmeLnN6FJV4bSdvxcBtxXEvDbVxxUqAL6WVaRzFiQ2C0nb8vlhmmnj8YGsqRRl7w96H29z4LSdv/AA4GMnL8VG2avSRO1FmXHbCuNrq42urja6uNrq42urhJPMmJYutI9C5gtJ3A7ZsyQ3GjcGSqFyXb7mC1M/0LYXab81FDfuAoosEu4KOpQlTpc8mG7fcwMiu9vc/h0JcUZd8Sp8yQYrhVCQ3IrDcisNyKw3GrDcasNxqwaU6ZUtsXb7mApokMgKhVlIFym5FRoMTL/VhdvuYbYuGFJVj7D5Y502ZhZf6sLt9zCQ5pZ2W6yOKhH2HDbWkUjKLLWU2J6ebLjpmGmYaZhpmGmYaZgzPhri7fbxUFfPTKtqPSmcUrJdvtYyHNLO37n1FJBLcqaswxXb7eakcipQwLcBfLDkJfHIS+OQl8chL45CXxyEvjkJfHIS+Fderl039R/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QAPhAAAQICBAkHCwUBAQAAAAAAAQIDAAQFETDREBIhMjRykaOxEyIxNUFDUhQjQlFhcXOTlKHhIGBigYJT8P/aAAgBAQAGPwL90OJkWOWLYrVzgmrbGgb5F8aBvkXxoG+RfGgb5F8aBvkXxoG+RfGgb5F8aBvkXxoGx1F8VvSEwhPixCRtt6R1E8TZnyqUbUs94BUrbCnqNWZpsd0rPF8FKgUqGQg9lpSOojibUuIqYngOa74vYqHJaZbLTyDUUmzpHURxOCclxnOMqSPfVGcdsZx2xnHbGcdsZx2xnGK0OLSfYqBiTq3U+B7nj7wlmfSJJ89C6/Nm7DjtACeaHm1eL+JgpUClQNRB7LKkdRHE4ZpqqppZ5Vv3H/1ViiQn140mciHFd1+MKKTZTU2+cV2rsX6/7sqR1EcTh5ZhNc3Lc5IHpJ7RZKkH1Vvyw5hPpI/F2CalD0uJ5vsV2QUkVEZCLGkdRHE/ocpGjW61HK7Lp4pusZSZrqRj4q9U5DhnkAVJWrlB/rLY0jqI4n9KncXyaaPfNdvvHbB5ANziPWhVR2GKjRkz/TZMdWTfyVR1ZN/JVHVk38lUdWTfyVR1ZN/JVHVk38lUSankqQ8Wk46VDKDVlwSzvjYq2E2NI6ieJwT7jSihxCMZKk9IywiVpBSWJzoDnQly42tH/DVxsZlrxsV7CME8wMqlsrA99WBLTh8slh6Dhyj3GAFP+SOeCYyffojHbWlxPiSaxZUdqK4ixkVk1JWrkj/rJhm5aqpAXjI1TlGHGbcU2fWk1RzaSmx7n1Xx1pO/UKvjrSd+oVfHWk79Qq+OtJ36hV8daTv1Cr460nfqFXxIOOrU64pvKtZrJwUdqK4ixCkmojKDErNjpcRzh6ldv3wJn2E1vyw54HpI/F9nR3w8FHaiuIsl0Y8qpt84zVfYv1f3hXPyCMaTOVbae6/FlR3wsFHaiuIsgpJKVJNYI7IxHCBPNDzifF/IYVPSChJPnpRV5s3QceSW6nxs88faKltrSfamM07IzTsjNOyM07IzTsjNOyKO+Hgo7UVxFm3MyzhbeQawoQG11MTwHOa8XtTa0dqL4i0CkqKVDKCOyEs0kgzTf/ZOeL4Hks22tZ7smpWyzo7UXxFvUzPzCE+HHJGyNP2tIujT9yi6NP3KLo0/coujT9y3dGn7lu6NP3Ld0afuW7o0/ct3Q2qef5YtipPNCatn7p//xAApEAEAAQIDCAMBAQEBAAAAAAABEQAhMUFhEDBRcYGhsfBAkcEgYNHx/9oACAEBAAE/If8AUQRMC2OGI3OaeeeeeeciWmp8VSDGMJ6LfKWadCL6b1dpsxhaZdrzpF7wcK4J8ngO1uJbyDXE7V+gASHE13tjIRX4mHekP5TnOd/7ta/KYahbubNpmOiVbChcLzfO2tCARkc9jJrnAh4HLg9aSeYKFGI73wKOUzHg5M9G5XykcushfZyoZJLmy0yYFoLdA+x473wIvcBfzOZy1rDcwFeUXwT8cnYMMkzci7+wpATpGI73xdJUy65l5+lBSJCYjuLIuPeMGem0eyy6XdTpvvDkWMAv+rsdaVspij1h7LU5F0ztXvH5XrH5XrH5XrH5XrH5XrH5TU04qDgnOdhBERrV/Em5VjPZkzXpQgGRrGSBes4YOXDei/6w3JLMTjV/6nY42DfNjvGzAbYtv7TkyVMo8Qj7a0aWcBp1PhjD7JKod023zc9YwY6bdbKtdqgg/Af9kSJFixYpx9GXS4rjuxj+HwMRpWyBFkWP0dkiXAF8V+1+Tu3p6u8GXmTCtBfoH2a7EBDcaVyuMus2PZuvS1d4MBeRKFGCUTG4w4eBz4PTYgESRyq+NC6XkeNtKhbuTNrmOoVp8ph/tXve94I0hyvN3qz8ACkeJpSbX8tvINMTv8ngi55OFcRoObsQhamHa860qAX13+TYwoIMYQnqtUCGmp87nnnnjzzjjLUxbY44Dh/qf//aAAwDAQACAAMAAAAQ8888888888888888888888888888MsMMMc88888880w8800sU88888848888s48888888Mw88s8U8888UU40888808888088MMc8cU888888400888c88888cw8888808888888MMc88c8888888888888888888888888888//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QKf/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8QKf/EACcQAQABAgUEAwADAQAAAAAAAAERACEwMUFRYRBxkfGBodEgQGCx/9oACAEBAAE/EP8AUZqjvwRSdlHKaNsV+BX41fjV+NX41fjV+HXeHm6+FauL1HvAUeaRFEhNHGLPphpBOjntvZUbKnFCI570SR2A0AVOPmtMYUXEdH+y5yl4jjLCdg2kSEoJEh+RMkIQWREw1a6ATq6rBRORDSCJpZFWr3iveK94qf8ARXutAiu4bfI0ppZMdfIFRvlhV5aTtP6aMgCQMidLdnbw5Vu5JzNBk2xTSqANxERMUAhptwhM9hg9km+XVZDN5X5mYoCQQkRkToDmyECngmTym+KALqJNjiT3sA3QVRSJCZjgpglRJoHK0n/0dFDdKeaukTOJNaf0cGAMIm44oBszN2mJmuYXWWSpStnICEdnAlAuRs5rvEDkdYJAxECDFwY3AEwb0FyP5LlslDdyvNogDxQUGWvmRT+f169evXr9jzX8C4mp0ymQvK/C+MEyRc4dv06GTSjLoFxImglsIlWRfJd0JokGIJGuivb9cHOFA8D8N8dHshoTL6EFQcah9L4aAAEAU9eOAG6wVj3DwV9DvyREf6cyS40jAizcDfjrKVYHZyXeJHK6+1J5IaLE+QjwfzEiRKlSpDXHnoUpVyuHMAIVGAMiO4lJ2sZH61gcQ69G+SYk1TlZj9Aw/p8SmANsHAg4IEcIX6HAAIRJEpFOpoq4DN5ycW0OF9NiUxxyGlUoLiII1Z37SHAF2IGZFhlRlgQokSlKWsXDXE7z+2hdrYjr5AqIiuybfCV7JUv6PyvavyvavyvavyvavylREZCE6RZ9EcMn36H4QyQkVZFGsvCB4y6vcd5MhL+w5MdNeYyAuI6lAqM7ySjuLqKqWTDXbayo3BNnDWNAKhGEySrP8V7QVHijh5vvlWuHX41fjfy7qqrruY46cREHZRnP+p//2Q==";
const ClassTranscribeLogo = "/website/_app/immutable/assets/ctlogo.CUF-mnnK.ico";
const PandoraLogo = "/website/_app/immutable/assets/pandora.BS6s9CeC.png";
const UOFILOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPDSURBVHgB7d2xbxZ1HMfx75XStBJJgQIGEh1bgwmNgw4M2qVD4+DC5uri5OrC4F/A5F/gxqKJ6cAiDgwSY2oiiYw0gQhUaDDYppTnfG7TpAzap819eF6v4XmSZ/o+97zv7nfPcFcFAAAAAAAAAAAAAP9fUz00u/jx7OT27mJx6HanJ9c2177ZrJ6ZrB7qIm2b9vvi0A23/dLw7Ub1zERBAKESQahEECoRenkx9TIb710vRmfu1nKlcEQlglCJIFQiCJUIQiWCUIkgVCIIlQhCJYJQiSBUIgiVCEIlglCJIFQiCJUIQiWCUIkgVCIIlQhCJYJQiSBUIgiVCEIlQtSdUr76/a0HR5t2u/Zh5cTDY+entucq2L2d6Y3VJ2ee1T48b5vp4dvZChEV6pX1+X1v2C/uLtSl44/r2vzPW1PNYKaC7LQTW5fvvDtz8+nJbkeL3tn+q7E89Q9/6Fq+/X5UpJ1u5m72cTS2a9Rf/3q9vn50bqNCdLN2M4+rsb6YuvbHuZjTZ9KsB6GXa9TmyGCzHdQPNUJt28w2TV3852dJp9G9Zm3b+qVp2pE+GKI50vbuQROdXj4V5SDMLXz04V4PsEi55+pe9zJt2mZp47fvbtQY8D8qEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqESarh05fWFkcDOpqjdCgbWeberUMqr166u2VzRqhiYn6/NHt1bXqmV6G2r6YmK2m/aBGqNmj0kvHH1eKbtabT0/+67Phd7o4fK1Ral80s9VDY33qv3zq/kaFSJr1IIxtqO+89md9cvr+XIXoZu1mHldjGWp3Gr1+4cetCtPNnLRcGaVerlFf5ss37zw42rTbtQ8rJx4eOz+13R1JZyrMVDOY+Xbhp7q3M72x+uTMs9qH520zfWV9/myFiAr1szfuxmzYg9TtaJ+eXd/3smUYaqXwPyoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRhEoEoRJBqEQQKhGESgShEkGoRBAqEYRKBKESQahEECoRou6UMndruRhPjqhEECoRhEoEoRKhlxdTu9OTa5Pbu0vFoeu2fQEAAAAAAAAAAADAK+Zv7uuoYNmZaS4AAAAASUVORK5CYII=";
const StrideFig = "/website/_app/immutable/assets/stridefig2.B7quKiaC.png";
const CaptionBeeDemo = "/website/_app/immutable/assets/cbdemo.wKuhn4e1.png";
const CTDEMO = "/website/_app/immutable/assets/ctdemo2.BAAji4b8.svg";
const CBSDemo = "/website/_app/immutable/assets/cbs.BBMNCD0R.svg";
const UWB = "/website/_app/immutable/assets/UWB.Cm48t-ht.png";
let DATA = {
  name: "Sujit Varadhan",
  initials: "SV",
  url: "https://github.com/sujitv19196",
  img: SujitHeadshot,
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/new+york+ny",
  description: "Software Engineer with a passion for AI full-stack apps, accessibility and assistive technology, and P2P distributed systems",
  summary: `With experience in backend, frontend, full-stack development, and distributed systems, I specialize in building scalable, AI-driven applications. 
        At Instalily.ai, I launched a full-stack AI advertisement analysis tool used daily by over 25 marketing teams and led the design of a graph-based 
        AI Agent Python library for deploying autonomous agentic workflows fast. My previous experience includes enhancing accessibility features for a lecture video 
        platform used by 10,000 users and productionalizing new features for the core song recommendation service powering Pandora and serving over 40 million listeners. Proficient in Python, Java, Go, JS, React, 
        and various frameworks, I'm passionate about leveraging AI and distributed systems to solve complex problems and improve accesibiltiy for people of all abilities.`,
  avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQGQSfvU7J4_OQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653598484052?e=1735171200&v=beta&t=rK4Rpj6N8BzqP4_3kXI8HzxZQ-BUg2UFO95RxXEMRWw",
  skills: [
    "Python",
    "Java",
    "Go",
    "JavaScript",
    "Typescript",
    "React",
    "Svelte",
    "Sveltekit",
    "Node.js",
    "GCP",
    "Spring/Spring Boot",
    "Flask",
    "FastAPI",
    "REST",
    "Docker",
    "SQL",
    "NoSQL",
    "Neo4j",
    "Redis"
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" }
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    // { href: '/Projects', icon: CodeIcon, label: 'Projects' }
  ],
  contact: {
    email: "sujitvaradhan4@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sujitv19196",
        // // icon: Icons.github,
        icon: GithubSvg,
        navbar: true,
        dark_icon: GithubDarkSvg
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sujit-varadhan/",
        // // icon: Icons.linkedin,
        icon: LinkedinSvg,
        navbar: true,
        dark_icon: LinkedinDarkSvg
      },
      // X: {
      //     name: 'X',
      //     url: 'https://twitter.com/Sikandar_Bhide',
      //     // // icon: Icons.x,
      //     icon: TwitterSvg,
      //     navbar: true,
      //     dark_icon: TwitterDarkSvg
      // },
      // PeerList: {
      //     name: 'PeerList',
      //     url: 'https://peerlist.io/bhide',
      //     // // icon: Icons.x,
      //     icon: PeerListSvg,
      //     navbar: true,
      //     dark_icon: PeerListDarkSvg
      // },
      // Youtube: {
      // 	name: 'Youtube',
      // 	url: 'https://github.com/SikandarJODD',
      // 	// // icon: Icons.youtube,
      // 	icon: Youtube,
      // 	navbar: true
      // },
      email: {
        name: "Send Email",
        url: "mailto:sujitvaradhan4@gmail.com",
        // // icon: Icons.email,
        icon: GmailSvg,
        navbar: true,
        dark_icon: GmailDarkSvg
      }
    }
  },
  work: [
    {
      company: "Instalily",
      href: "https://instalily.ai",
      badges: [],
      location: "New York, NY",
      title: "AI/Software Engineer",
      logoUrl: InstalilyLogo,
      start: "May 2024",
      end: "Current",
      description: "Building AI Agents and full-stack solutions to automate and optimzie workflows for $1B+ companies."
    },
    {
      company: "ClassTranscribe",
      badges: [],
      href: "https://classtranscribe.illinois.edu/",
      location: "Urbana, IL",
      title: "Software Engineer and Product Manager",
      logoUrl: ClassTranscribeLogo,
      start: "September 2021",
      end: "May 2024",
      description: "Shipped 100+ features to 10,000 users within a production lecture video platform by taking leadership role indeveloping new assistive technologies to improve user experience for persons of all abilities, using React and JS."
    },
    {
      company: "UDL and Accessibility Research Group",
      href: "https://publish.illinois.edu/udl-accessibility-group/",
      location: "Urbana, IL",
      title: "Research Assistant",
      logoUrl: UOFILOGO,
      start: "September 2021",
      end: "May 2024",
      description: "Co-authored seven papers on the impact of Universal Design for Learning (UDL) on student learning outcomes and accessibility in higher education with a goal of improving education for students of all abilities."
    },
    {
      company: "Pandora",
      href: "https://pandora.com",
      badges: [],
      location: "Oakland, CA",
      title: "Software Engineer Intern",
      logoUrl: PandoraLogo,
      start: "June 2022",
      end: "August 2022",
      description: "Shipped 8 new features to 40 million Pandora listeners within main song recommendation backend service, using Java, Spring Boot, JUnit, and Mockito."
    },
    {
      company: "Pandora",
      href: "https://pandora.com",
      badges: [],
      location: "Oakland, CA",
      title: "Software Engineer Intern",
      logoUrl: PandoraLogo,
      start: "June 2021",
      end: "August 2021",
      description: "Enabled debugging of production issues for all dev and QA teams by creating internal website and Java service to display, filter, and search a users song recommendation history across all prod and dev environments using React, JS, and Java/Spring."
    }
  ],
  education: [
    {
      school: "University of Illinois Urbana Champaign",
      degree: "M.S. in Computer Science",
      logoUrl: UOFILOGO,
      start: "2022",
      end: "2023"
    },
    {
      school: "University of Illinois Urbana Champaign",
      degree: "B.S. in Computer Science with Honors",
      logoUrl: UOFILOGO,
      start: "2019",
      end: "2022"
    }
  ],
  projects: [
    {
      title: "CaptionBee",
      href: "/projects/caption-bee",
      dates: "June 2023 - Present",
      active: true,
      description: "Free AI web app that allows users to auto-generate and easily edit subtitles for videos.",
      technologies: [
        "Python",
        "Svelte",
        "Typescript",
        "HTML",
        "CSS",
        "SQLite"
      ],
      links: [
        {
          type: "Website Demo",
          href: "https://anandramaka.github.io/CS-465-WebApp/",
          icon: Globe
        },
        {
          type: "Source",
          href: "https://github.com/sujitv19196/caption-bee-ui",
          icon: Github
        }
        // {
        //     'type': 'Learn More',
        //     'href': '/projects/caption-bee',
        //     'icon': Forward
        // }
      ],
      image: CaptionBeeDemo
    },
    {
      title: "Stride",
      href: "/projects/stride",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "A PoC for an open ride-sharing system that computes optimal matches between riders and drivers w/o a central server, eliminating the need for a middleman taking profit away from drivers.",
      technologies: [
        "Go",
        "P2P",
        "Distriuted Systems",
        "Python"
      ],
      links: [
        {
          type: "Paper",
          href: "https://chatcollect.com",
          // icon: <Icons.globe className="size-3" />,
          icon: Paperclip
        },
        {
          type: "Source",
          href: "https://github.com/sujitv19196/ridehost",
          icon: Github
        }
        // {
        //     type: 'Learn More',
        //     href: '/projects/stride',
        //     icon: Forward
        // }
      ],
      image: StrideFig
    },
    // {
    //     title: 'Enlarge My Music (WIP)',
    //     href: 'https://llm.report',
    //     dates: 'April 2023 - September 2023',
    //     active: true,
    //     description:
    //         'Concpet for an IOS app that empowers visually imparied musicians to read and enlarge jazz sheet music',
    //     technologies: [
    //         'Swift',
    //         'CoreML',
    //         'Vision',
    //     ],
    //     links: [
    //         {
    //             type: 'Website',
    //             href: 'https://llm.report',
    //             icon: Globe
    //             // icon: <Icons.globe className="size-3" />,
    //         },
    //         {
    //             type: 'Source',
    //             href: 'https://github.com/dillionverma/llm.report',
    //             icon: Github
    //             // icon: <Icons.github className="size-3" />,
    //         }
    //     ],
    //     image: '',
    //     video: 'https://cdn.llm.report/openai-demo.mp4'
    // },
    {
      title: "ClassTranscribe",
      href: "/projects/classtranscribe",
      dates: "April 2023 - March 2024",
      technologies: [
        "React",
        "Javascript",
        "Redux",
        "Node.js"
      ],
      active: true,
      description: "Launched new features for an accessibility focused lecture video platform used at UIUC, including a new video player, video to textbook conversions using AI, and improved audio descriptions for blind users.",
      links: [
        {
          type: "Website",
          href: "https://classtranscribe.illinois.edu",
          icon: Globe
        },
        {
          type: "Source",
          href: "https://github.com/classtranscribe/FrontEnd",
          icon: Github
        }
        // {
        //     type: 'Learn More',
        //     href: '/projects/classtranscribe',
        //     icon: Forward
        // }
      ],
      image: CTDEMO
    },
    {
      title: "Competitor Social Media Analysis Dashboard (Instalily)",
      href: "/projects/social-media-analysis",
      dates: "April 2023 - March 2024",
      active: true,
      description: "Launched full-stack AI ad analysis tool used daily by 25+ marketing teams. Managed full project lifecycle from concept to delivery and provided troubleshooting/support.",
      technologies: [
        "Python",
        "Selenium",
        "React",
        "Javascript",
        "TailwindCSS",
        "Shadcn",
        "FastAPI",
        "Docker",
        "GCP Cloud Run",
        "GCP Firestore",
        "GCP App Engine",
        "GCP Cloud Functions"
      ],
      links: [
        // {
        //     type: 'Learn More',
        //     href: '/projects/social-media-analysis',
        //     icon: Forward
        // }
      ],
      image: CBSDemo
    },
    {
      title: "Ultra-Wideband Localization System for Real-Time Position Tracking",
      href: "/projects/uwb",
      technologies: [
        "C",
        "Ultra-Wideband",
        "Python",
        "MatPlotLib"
      ],
      active: true,
      dates: "April 2023 - March 2024",
      description: "Built a UWB sensor array to triangulate the position of an object with 0.5-meter accuracy in real time by utilizing a two-way ranging time of arrival approach.",
      links: [
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=Qu59CW5JuwM",
          icon: Youtube
        },
        {
          type: "Source",
          href: "https://github.com/sujitv19196/cs439-uwb-proj",
          icon: Github
        }
        // {
        //     type: 'Learn More',
        //     href: '/projects/uwb',
        //     icon: Forward
        // }
      ],
      image: UWB
    }
  ],
  research: [
    {
      title: "UDL and Accessibility Resarch Group",
      href: "https://publish.illinois.edu/udl-accessibility-group/"
    }
  ]
};
var Presence;
(function(Presence2) {
  Presence2[Presence2["Entering"] = 0] = "Entering";
  Presence2[Presence2["Present"] = 1] = "Present";
  Presence2[Presence2["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
var VisibilityAction;
(function(VisibilityAction2) {
  VisibilityAction2[VisibilityAction2["Hide"] = 0] = "Hide";
  VisibilityAction2[VisibilityAction2["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}
var SubscriptionManager = (
  /** @class */
  function() {
    function SubscriptionManager2() {
      this.subscriptions = [];
    }
    SubscriptionManager2.prototype.add = function(handler) {
      var _this = this;
      addUniqueItem(this.subscriptions, handler);
      return function() {
        return removeItem(_this.subscriptions, handler);
      };
    };
    SubscriptionManager2.prototype.notify = function(a, b, c) {
      var numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (var i = 0; i < numSubscriptions; i++) {
          var handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
      }
    };
    SubscriptionManager2.prototype.getSize = function() {
      return this.subscriptions.length;
    };
    SubscriptionManager2.prototype.clear = function() {
      this.subscriptions.length = 0;
    };
    return SubscriptionManager2;
  }()
);
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = (
  /** @class */
  function() {
    function MotionValue2(init, startStopNotifier) {
      var _this = this;
      this.timeDelta = 0;
      this.lastUpdated = 0;
      this.updateSubscribers = new SubscriptionManager();
      this.velocityUpdateSubscribers = new SubscriptionManager();
      this.renderSubscribers = new SubscriptionManager();
      this.canTrackVelocity = false;
      this.updateAndNotify = function(v, render) {
        if (render === void 0) {
          render = true;
        }
        _this.prev = _this.current;
        _this.current = v;
        var _a = getFrameData(), delta2 = _a.delta, timestamp = _a.timestamp;
        if (_this.lastUpdated !== timestamp) {
          _this.timeDelta = delta2;
          _this.lastUpdated = timestamp;
          sync.postRender(_this.scheduleVelocityCheck);
        }
        if (_this.prev !== _this.current) {
          _this.updateSubscribers.notify(_this.current);
        }
        if (_this.velocityUpdateSubscribers.getSize()) {
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
        if (render) {
          _this.renderSubscribers.notify(_this.current);
        }
      };
      this.scheduleVelocityCheck = function() {
        return sync.postRender(_this.velocityCheck);
      };
      this.velocityCheck = function(_a) {
        var timestamp = _a.timestamp;
        if (timestamp !== _this.lastUpdated) {
          _this.prev = _this.current;
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
      };
      this.hasAnimated = false;
      this.prev = this.current = init;
      this.canTrackVelocity = isFloat(this.current);
      this.onSubscription = () => {
      };
      this.onUnsubscription = () => {
      };
      if (startStopNotifier) {
        this.onSubscription = () => {
          if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
            const unsub = startStopNotifier();
            this.onUnsubscription = () => {
            };
            if (unsub) {
              this.onUnsubscription = () => {
                if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
                  unsub();
                }
              };
            }
          }
        };
      }
    }
    MotionValue2.prototype.onChange = function(subscription) {
      this.onSubscription();
      const unsub = this.updateSubscribers.add(subscription);
      return () => {
        unsub();
        this.onUnsubscription();
      };
    };
    MotionValue2.prototype.subscribe = function(subscription) {
      return this.onChange(subscription);
    };
    MotionValue2.prototype.clearListeners = function() {
      this.updateSubscribers.clear();
      this.onUnsubscription();
    };
    MotionValue2.prototype.onRenderRequest = function(subscription) {
      this.onSubscription();
      subscription(this.get());
      const unsub = this.renderSubscribers.add(subscription);
      return () => {
        unsub();
        this.onUnsubscription();
      };
    };
    MotionValue2.prototype.attach = function(passiveEffect) {
      this.passiveEffect = passiveEffect;
    };
    MotionValue2.prototype.set = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    };
    MotionValue2.prototype.update = function(v) {
      this.set(v(this.get()));
    };
    MotionValue2.prototype.get = function() {
      this.onSubscription();
      const curr = this.current;
      this.onUnsubscription();
      return curr;
    };
    MotionValue2.prototype.getPrevious = function() {
      return this.prev;
    };
    MotionValue2.prototype.getVelocity = function() {
      this.onSubscription();
      const vel = this.canTrackVelocity ? (
        // These casts could be avoided if parseFloat would be typed better
        velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      ) : 0;
      this.onUnsubscription();
      return vel;
    };
    MotionValue2.prototype.start = function(animation) {
      var _this = this;
      this.stop();
      return new Promise(function(resolve) {
        _this.hasAnimated = true;
        _this.stopAnimation = animation(resolve);
      }).then(function() {
        return _this.clearAnimation();
      });
    };
    MotionValue2.prototype.stop = function() {
      if (this.stopAnimation)
        this.stopAnimation();
      this.clearAnimation();
    };
    MotionValue2.prototype.isAnimating = function() {
      return !!this.stopAnimation;
    };
    MotionValue2.prototype.clearAnimation = function() {
      this.stopAnimation = null;
    };
    MotionValue2.prototype.destroy = function() {
      this.updateSubscribers.clear();
      this.renderSubscribers.clear();
      this.stop();
      this.onUnsubscription();
    };
    return MotionValue2;
  }()
);
function motionValue(init, startStopNotifier) {
  return new MotionValue(init, startStopNotifier);
}
const getDomContext = (name, el) => {
  if (!el || !window) {
    return void 0;
  }
  let par = el;
  while (par = par.parentNode) {
    if (par.motionDomContext && par.motionDomContext.has(name)) {
      return par.motionDomContext.get(name);
    }
  }
  return void 0;
};
const setDomContext = (name, el, value) => {
  if (el && window) {
    if (!el.motionDomContext) {
      el.motionDomContext = /* @__PURE__ */ new Map();
    }
    el.motionDomContext.set(name, value);
  }
};
var MotionConfigContext = (c) => getDomContext("MotionConfig", c) || writable({
  transformPagePoint: function(p) {
    return p;
  },
  isStatic: false
});
const ScaleCorrectionContext = (isCustom) => getDomContext("ScaleCorrection", isCustom) || writable([]);
const ScaleCorrectionParentContext = () => writable([]);
const provideScaleCorrection = (isCustom) => {
  const fromParent = getContext(ScaleCorrectionContext) || ScaleCorrectionContext(isCustom);
  const ctx = ScaleCorrectionContext();
  setContext(ScaleCorrectionContext, ctx);
  setDomContext("ScaleCorrection", isCustom, ctx);
  setContext(ScaleCorrectionParentContext, fromParent);
};
const ScaleCorrectionProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isCustom } = $$props;
  provideScaleCorrection(isCustom);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  return `${slots.default ? slots.default({}) : ``}`;
});
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  complex.test(value) && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var isKeyframesTarget = function(v) {
  return Array.isArray(v);
};
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return Object.assign({ to }, transitionFactory(to));
};
var int = Object.assign(Object.assign({}, number), { transform: Math.round });
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
var defaultValueTypes = Object.assign(Object.assign({}, numberValueTypes), {
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};
function getAnimatableNone(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = Object.assign({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to));
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = Object.assign(Object.assign({}, transition), getDefaultTransition(key, options.to));
  }
  return Object.assign(Object.assign({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + ' from "' + origin + '" to "' + target + '". ' + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(Object.assign(Object.assign({}, options), valueTransition)) : animate(Object.assign(Object.assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
      var _a2;
      options.onUpdate(v);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2;
    value.set(target);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}
var isNumericalString = function(v) {
  return /^\-?\d*\.?\d+$/.test(v);
};
var isCustomValue = function(v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
var testValueType = function(v) {
  return function(type) {
    return type.test(v);
  };
};
var auto = {
  test: function(v) {
    return v === "auto";
  },
  parse: function(v) {
    return v;
  }
};
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v) {
  return dimensionValueTypes.find(testValueType(v));
};
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes)), [color, complex]);
var findValueType = function(v) {
  return valueTypes.find(testValueType(v));
};
function isVariantLabels(v) {
  return Array.isArray(v);
}
function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity$1(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = Object.assign(Object.assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && isNumericalString(value)) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart();
  var animation;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var animation = startAnimation(key, value, valueTarget, Object.assign({ delay }, transition));
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function(i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
    animations2.push(animateVariant(child, variant, Object.assign(Object.assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
var valueScaleCorrection = {};
function eachAxis(handler) {
  return [handler("x"), handler("y")];
}
function noop$1(any) {
  return any;
}
function convertBoundingBoxToAxisBox(_a) {
  var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertAxisBoxToBoundingBox(_a) {
  var x = _a.x, y = _a.y;
  return {
    top: y.min,
    bottom: y.max,
    left: x.min,
    right: x.max
  };
}
function transformBoundingBox(_a, transformPoint2) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  if (transformPoint2 === void 0) {
    transformPoint2 = noop$1;
  }
  var topLeft = transformPoint2({ x: left, y: top });
  var bottomRight = transformPoint2({ x: right, y: bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function axisBox() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
  return {
    x: Object.assign({}, box.x),
    y: Object.assign({}, box.y)
  };
}
var zeroDelta = {
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
};
function delta() {
  return {
    x: Object.assign({}, zeroDelta),
    y: Object.assign({}, zeroDelta)
  };
}
function isDraggable(visualElement2) {
  var _a = visualElement2.getProps(), drag2 = _a.drag, _dragX = _a._dragX;
  return drag2 && !_dragX;
}
function resetAxis(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function resetBox(box, originBox) {
  resetAxis(box.x, originBox.x);
  resetAxis(box.y, originBox.y);
}
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x = _a.x, y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyAxisTransforms(final, axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  final.min = axis.min;
  final.max = axis.max;
  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function applyBoxTransforms(finalBox, box, transforms) {
  applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
  applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  var originPoint = mix(axis.min, axis.max, origin) - translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
function removeBoxTransforms(box, transforms) {
  removeAxisTransforms(box.x, transforms, xKeys);
  removeAxisTransforms(box.y, transforms, yKeys);
}
function applyTreeDeltas(box, treeScale, treePath) {
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta2;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta2 = node.getLayoutState().delta;
    treeScale.x *= delta2.x.scale;
    treeScale.y *= delta2.y.scale;
    applyBoxDelta(box, delta2);
    if (isDraggable(node)) {
      applyBoxTransforms(box, box, node.getLatestValues());
    }
  }
}
var clampProgress = function(v) {
  return clamp(0, 1, v);
};
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcLength(axis) {
  return axis.max - axis.min;
}
function calcOrigin$1(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clampProgress(origin);
}
function updateAxisDelta(delta2, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta2.origin = origin;
  delta2.originPoint = mix(source.min, source.max, delta2.origin);
  delta2.scale = calcLength(target) / calcLength(source);
  if (isNear(delta2.scale, 1, 1e-4))
    delta2.scale = 1;
  delta2.translate = mix(target.min, target.max, delta2.origin) - delta2.originPoint;
  if (isNear(delta2.translate))
    delta2.translate = 0;
}
function updateBoxDelta(delta2, source, target, origin) {
  updateAxisDelta(delta2.x, source.x, target.x, defaultOrigin(origin.originX));
  updateAxisDelta(delta2.y, source.y, target.y, defaultOrigin(origin.originY));
}
function defaultOrigin(origin) {
  return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
  calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
  calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}
var isMotionValue = function(value) {
  return value !== null && typeof value === "object" && value.getVelocity;
};
var createProjectionState = function() {
  return {
    isEnabled: false,
    isTargetLocked: false,
    target: axisBox(),
    targetFinal: axisBox()
  };
};
function createLayoutState() {
  return {
    isHydrated: false,
    layout: axisBox(),
    layoutCorrected: axisBox(),
    treeScale: { x: 1, y: 1 },
    delta: delta(),
    deltaFinal: delta(),
    deltaTransform: ""
  };
}
var zeroLayout = createLayoutState();
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
  var x = _a.x, y = _a.y;
  var xTranslate = x.translate / treeScale.x;
  var yTranslate = y.translate / treeScale.y;
  var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(" + rotate + ") ";
    if (rotateX)
      transform += "rotateX(" + rotateX + ") ";
    if (rotateY)
      transform += "rotateY(" + rotateY + ") ";
  }
  transform += "scale(" + x.scale + ", " + y.scale + ")";
  return !latestTransform && transform === identityProjection ? "" : transform;
}
function buildLayoutProjectionTransformOrigin(_a) {
  var deltaFinal = _a.deltaFinal;
  return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(zeroLayout.delta, zeroLayout.treeScale, { x: 1, y: 1 });
var isAnimationControls = function(v) {
  return typeof v === "object" && typeof v.start === "function";
};
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Focus,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate2 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = Object.assign(Object.assign(Object.assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = Object.assign({}, encounteredKeys);
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        return "continue";
      }
      var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = Object.assign(Object.assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev)) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = Object.assign(Object.assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: Object.assign({ type }, options)
          };
        }))));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = Object.assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    return animateChanges(options, type);
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function variantsHaveChanged(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      return names.forEach(function(name) {
        var _a;
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        var on = "on" + name;
        var propListener = props[on];
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i) {
    lifecycles["on" + names[i]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args)));
    };
  });
  return lifecycles;
}
function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}
function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
  var delta2 = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
  var target = _b.target;
  resetBox(layoutCorrected, layout);
  applyTreeDeltas(layoutCorrected, treeScale, treePath);
  updateBoxDelta(delta2, layoutCorrected, target, transformOrigin);
}
var compareByDepth = function(a, b) {
  return a.depth - b.depth;
};
var FlatTree = (
  /** @class */
  function() {
    function FlatTree2() {
      this.children = [];
      this.isDirty = false;
    }
    FlatTree2.prototype.add = function(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.remove = function(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.forEach = function(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      var numChildren = this.children.length;
      for (var i = 0; i < numChildren; i++) {
        callback(this.children[i]);
      }
    };
    return FlatTree2;
  }()
);
function calcRelativeOffsetAxis(parent, child) {
  return {
    min: child.min - parent.min,
    max: child.max - parent.min
  };
}
function calcRelativeOffset(parent, child) {
  return {
    x: calcRelativeOffsetAxis(parent.x, child.x),
    y: calcRelativeOffsetAxis(parent.y, child.y)
  };
}
function setCurrentViewportBox(visualElement2) {
  var projectionParent = visualElement2.getProjectionParent();
  if (!projectionParent) {
    visualElement2.rebaseProjectionTarget();
    return;
  }
  var relativeOffset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
  eachAxis(function(axis) {
    visualElement2.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
  });
}
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState;
    if (options === void 0) {
      options = {};
    }
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var projection = createProjectionState();
    var projectionParent;
    var leadProjection = projection;
    var leadLatestValues = latestValues;
    var unsubscribeFromLeadVisualElement;
    var layoutState = createLayoutState();
    var crossfader;
    var hasViewportBoxUpdated = false;
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var projectionTargetProgress;
    var baseTarget = Object.assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance)
        return;
      if (element.isProjectionReady()) {
        applyBoxTransforms(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
        updateBoxDelta(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
      }
      triggerBuild();
      renderInstance(instance, renderState);
    }
    function triggerBuild() {
      var valuesToRender = latestValues;
      if (crossfader && crossfader.isActive()) {
        var crossfadedValues = crossfader.getCrossfadeState(element);
        if (crossfadedValues)
          valuesToRender = crossfadedValues;
      }
      build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
    }
    function update2() {
      lifecycles.notifyUpdate(latestValues);
    }
    function updateLayoutProjection() {
      if (!element.isProjectionReady())
        return;
      var delta2 = layoutState.delta, treeScale = layoutState.treeScale;
      var prevTreeScaleX = treeScale.x;
      var prevTreeScaleY = treeScale.y;
      var prevDeltaTransform = layoutState.deltaTransform;
      updateLayoutDeltas(layoutState, leadProjection, element.path, latestValues);
      hasViewportBoxUpdated && element.notifyViewportBoxUpdate(leadProjection.target, delta2);
      hasViewportBoxUpdated = false;
      var deltaTransform = buildLayoutProjectionTransform(delta2, treeScale);
      if (deltaTransform !== prevDeltaTransform || // Also compare calculated treeScale, for values that rely on this only for scale correction
      prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) {
        element.scheduleRender();
      }
      layoutState.deltaTransform = deltaTransform;
    }
    function updateTreeLayoutProjection() {
      element.layoutTree.forEach(fireUpdateLayoutProjection);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && sync.update(update2, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps2(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element = Object.assign(Object.assign({
      treeType,
      /**
       * This is a mirror of the internal instance prop, which keeps
       * VisualElement type-compatible with React's RefObject.
       */
      current: null,
      /**
       * The depth of this visual element within the visual element tree.
       */
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      /**
       * An ancestor path back to the root visual element. This is used
       * by layout projection to quickly recurse back up the tree.
       */
      path: parent ? __spreadArray(__spreadArray([], __read(parent.path)), [parent]) : [],
      layoutTree: parent ? parent.layoutTree : new FlatTree(),
      /**
       *
       */
      presenceId,
      projection,
      /**
       * If this component is part of the variant tree, it should track
       * any children that are also part of the tree. This is essentially
       * a shadow tree to simplify logic around how to stagger over children.
       */
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      /**
       * Whether this instance is visible. This can be changed imperatively
       * by AnimateSharedLayout, is analogous to CSS's visibility in that
       * hidden elements should take up layout, and needs enacting by the configured
       * render function.
       */
      isVisible: void 0,
      /**
       * Normally, if a component is controlled by a parent's variants, it can
       * rely on that ancestor to trigger animations further down the tree.
       * However, if a component is created after its parent is mounted, the parent
       * won't trigger that mount animation so the child needs to.
       *
       * TODO: This might be better replaced with a method isParentMounted
       */
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      /**
       * This can be set by AnimatePresence to force components that mount
       * at the same time as it to mount as if they have initial={false} set.
       */
      blockInitialAnimation,
      /**
       * Determine whether this component has mounted yet. This is mostly used
       * by variant children to determine whether they need to trigger their
       * own animations on mount.
       */
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        instance = element.current = newInstance;
        element.pointTo(element);
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }
        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
      },
      /**
       *
       */
      unmount: function() {
        cancelSync.update(update2);
        cancelSync.render(render);
        cancelSync.preRender(element.updateLayoutProjection);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        element.stopLayoutAnimation();
        element.layoutTree.remove(element);
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        lifecycles.clearAllListeners();
      },
      /**
       * Add a child visual element to our set of children.
       */
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      /**
       * Returns the closest variant node in the tree starting from
       * this visual element.
       */
      getClosestVariantNode: function() {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      /**
       * A method that schedules an update to layout projections throughout
       * the tree. We inherit from the parent so there's only ever one
       * job scheduled on the next frame - that of the root visual element.
       */
      scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function() {
        return sync.preRender(element.updateTreeLayoutProjection, false, true);
      },
      /**
       * Expose the latest layoutId prop.
       */
      getLayoutId: function() {
        return props.layoutId;
      },
      /**
       * Returns the current instance.
       */
      getInstance: function() {
        return instance;
      },
      /**
       * Get/set the latest static values.
       */
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      /**
       * Returns the latest motion value state. Currently only used to take
       * a snapshot of the visual element - perhaps this can return the whole
       * visual state
       */
      getLatestValues: function() {
        return latestValues;
      },
      /**
       * Set the visiblity of the visual element. If it's changed, schedule
       * a render to reflect these changes.
       */
      setVisibility: function(visibility) {
        if (element.isVisible === visibility)
          return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      /**
       * Make a target animatable by Popmotion. For instance, if we're
       * trying to animate width from 100px to 100vw we need to measure 100vw
       * in pixels to determine what we really need to animate to. This is also
       * pluggable to support Framer's custom value types like Color,
       * and CSS variables.
       */
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element, target, props, canMutate);
      },
      // Motion values ========================
      /**
       * Add a motion value and bind it to this visual element.
       */
      addValue: function(key2, value2) {
        if (element.hasValue(key2))
          element.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      /**
       * Remove a motion value and unbind any active subscriptions.
       */
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      /**
       * Check whether we have a motion value for this key
       */
      hasValue: function(key2) {
        return values.has(key2);
      },
      /**
       * Get a motion value for this key. If called with a default
       * value, we'll create one if none exists.
       */
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }
        return value2;
      },
      /**
       * Iterate over our motion values.
       */
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      /**
       * If we're trying to animate to a previously unencountered value,
       * we need to check for it in our state and as a last resort read it
       * directly from the instance (which might have performance implications).
       */
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      /**
       * Set the base target to later animate back to. This is currently
       * only hydrated on creation and when we first read a value.
       */
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      /**
       * Find the base target for a value thats been removed from all animation
       * props.
       */
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      /**
       * Build the renderer state based on the latest visual state.
       */
      build: function() {
        triggerBuild();
        return renderState;
      },
      /**
       * Schedule a render on the next animation frame.
       */
      scheduleRender: function() {
        sync.render(render, false, true);
      },
      /**
       * Synchronously fire render. It's prefered that we batch renders but
       * in many circumstances, like layout measurement, we need to run this
       * synchronously. However in those instances other measures should be taken
       * to batch reads/writes.
       */
      syncRender: render,
      /**
       * Update the provided props. Ensure any newly-added motion values are
       * added to our map, old ones removed, and listeners updated.
       */
      setProps: function(newProps) {
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps2(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      // Variants ==============================
      /**
       * Returns the variant definition with a given name.
       */
      getVariant: function(name) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      /**
       * Returns the defined default transition on this component.
       */
      getDefaultTransition: function() {
        return props.transition;
      },
      /**
       * Used by child variant nodes to get the closest ancestor variant props.
       */
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      },
      // Layout projection ==============================
      /**
       * Enable layout projection for this visual element. Won't actually
       * occur until we also have hydrated layout measurements.
       */
      enableLayoutProjection: function() {
        projection.isEnabled = true;
        element.layoutTree.add(element);
      },
      /**
       * Lock the projection target, for instance when dragging, so
       * nothing else can try and animate it.
       */
      lockProjectionTarget: function() {
        projection.isTargetLocked = true;
      },
      unlockProjectionTarget: function() {
        element.stopLayoutAnimation();
        projection.isTargetLocked = false;
      },
      getLayoutState: function() {
        return layoutState;
      },
      setCrossfader: function(newCrossfader) {
        crossfader = newCrossfader;
      },
      isProjectionReady: function() {
        return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
      },
      /**
       * Start a layout animation on a given axis.
       */
      startLayoutAnimation: function(axis, transition, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var progress2 = element.getProjectionAnimationProgress()[axis];
        var _a3 = isRelative ? projection.relativeTarget[axis] : projection.target[axis], min = _a3.min, max = _a3.max;
        var length = max - min;
        progress2.clearListeners();
        progress2.set(min);
        progress2.set(min);
        progress2.onChange(function(v) {
          element.setProjectionTargetAxis(axis, v, v + length, isRelative);
        });
        return element.animateMotionValue(axis, progress2, 0, transition);
      },
      /**
       * Stop layout animations.
       */
      stopLayoutAnimation: function() {
        eachAxis(function(axis) {
          return element.getProjectionAnimationProgress()[axis].stop();
        });
      },
      /**
       * Measure the current viewport box with or without transforms.
       * Only measures axis-aligned boxes, rotate and skew must be manually
       * removed with a re-render to work.
       */
      measureViewportBox: function(withTransform) {
        if (withTransform === void 0) {
          withTransform = true;
        }
        var viewportBox = measureViewportBox(instance, options);
        if (!withTransform)
          removeBoxTransforms(viewportBox, latestValues);
        return viewportBox;
      },
      /**
       * Get the motion values tracking the layout animations on each
       * axis. Lazy init if not already created.
       */
      getProjectionAnimationProgress: function() {
        projectionTargetProgress || (projectionTargetProgress = {
          x: motionValue(0),
          y: motionValue(0)
        });
        return projectionTargetProgress;
      },
      /**
       * Update the projection of a single axis. Schedule an update to
       * the tree layout projection.
       */
      setProjectionTargetAxis: function(axis, min, max, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var target;
        if (isRelative) {
          if (!projection.relativeTarget) {
            projection.relativeTarget = axisBox();
          }
          target = projection.relativeTarget[axis];
        } else {
          projection.relativeTarget = void 0;
          target = projection.target[axis];
        }
        projection.isHydrated = true;
        target.min = min;
        target.max = max;
        hasViewportBoxUpdated = true;
        lifecycles.notifySetAxisTarget();
      },
      /**
       * Rebase the projection target on top of the provided viewport box
       * or the measured layout. This ensures that non-animating elements
       * don't fall out of sync differences in measurements vs projections
       * after a page scroll or other relayout.
       */
      rebaseProjectionTarget: function(force, box) {
        if (box === void 0) {
          box = layoutState.layout;
        }
        var _a3 = element.getProjectionAnimationProgress(), x = _a3.x, y = _a3.y;
        var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x.isAnimating() && !y.isAnimating();
        if (force || shouldRebase) {
          eachAxis(function(axis) {
            var _a4 = box[axis], min = _a4.min, max = _a4.max;
            element.setProjectionTargetAxis(axis, min, max);
          });
        }
      },
      /**
       * Notify the visual element that its layout is up-to-date.
       * Currently Animate.tsx uses this to check whether a layout animation
       * needs to be performed.
       */
      notifyLayoutReady: function(config) {
        setCurrentViewportBox(element);
        element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
      },
      /**
       * Temporarily reset the transform of the instance.
       */
      resetTransform: function() {
        return resetTransform(element, instance, props);
      },
      restoreTransform: function() {
        return restoreTransform(instance, renderState);
      },
      updateLayoutProjection,
      updateTreeLayoutProjection: function() {
        element.layoutTree.forEach(fireResolveRelativeTargetBox);
        sync.preRender(updateTreeLayoutProjection, false, true);
      },
      getProjectionParent: function() {
        if (projectionParent === void 0) {
          var foundParent = false;
          for (var i = element.path.length - 1; i >= 0; i--) {
            var ancestor = element.path[i];
            if (ancestor.projection.isEnabled) {
              foundParent = ancestor;
              break;
            }
          }
          projectionParent = foundParent;
        }
        return projectionParent;
      },
      resolveRelativeTargetBox: function() {
        var relativeParent = element.getProjectionParent();
        if (!projection.relativeTarget || !relativeParent)
          return;
        calcRelativeBox(projection, relativeParent.projection);
        if (isDraggable(relativeParent)) {
          var target = projection.target;
          applyBoxTransforms(target, target, relativeParent.getLatestValues());
        }
      },
      shouldResetTransform: function() {
        return Boolean(props._layoutResetTransform);
      },
      /**
       *
       */
      pointTo: function(newLead) {
        leadProjection = newLead.projection;
        leadLatestValues = newLead.getLatestValues();
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        unsubscribeFromLeadVisualElement = pipe(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function() {
          var _a3;
          if (element.isPresent) {
            element.presence = Presence.Present;
          } else {
            (_a3 = element.layoutSafeToRemove) === null || _a3 === void 0 ? void 0 : _a3.call(element);
          }
        }));
      },
      // TODO: Clean this up
      isPresent: true,
      presence: Presence.Entering
    });
    return element;
  };
};
function fireResolveRelativeTargetBox(child) {
  child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
  child.updateLayoutProjection();
}
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder));
var numVariantProps = variantProps.length;
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "onLayoutAnimationComplete",
  "onViewportBoxUpdate",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}
const PresenceContext = (c) => getDomContext("Presence", c) || writable(null);
let counter = 0;
const incrementId = () => counter++;
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
const usePresence = (isCustom = false) => {
  const context = getContext(PresenceContext) || PresenceContext(isCustom);
  const id = get_store_value(context) === null ? void 0 : incrementId();
  if (get_store_value(context) === null) {
    return readable([true, null]);
  }
  return derived(
    context,
    ($v) => !$v.isPresent && $v.onExitComplete ? [false, () => $v.onExitComplete?.(id)] : [true]
  );
};
const LayoutGroupContext = (c) => getDomContext("LayoutGroup", c) || writable(null);
function isProjecting(visualElement2) {
  var isEnabled = visualElement2.projection.isEnabled;
  return isEnabled || visualElement2.shouldResetTransform();
}
function collectProjectingAncestors(visualElement2, ancestors) {
  if (ancestors === void 0) {
    ancestors = [];
  }
  var parent = visualElement2.parent;
  if (parent)
    collectProjectingAncestors(parent, ancestors);
  if (isProjecting(visualElement2))
    ancestors.push(visualElement2);
  return ancestors;
}
function collectProjectingChildren(visualElement2) {
  var children = [];
  var addChild = function(child) {
    if (isProjecting(child))
      children.push(child);
    child.children.forEach(addChild);
  };
  visualElement2.children.forEach(addChild);
  return children.sort(compareByDepth);
}
function updateLayoutMeasurement(visualElement2) {
  if (visualElement2.shouldResetTransform())
    return;
  var layoutState = visualElement2.getLayoutState();
  visualElement2.notifyBeforeLayoutMeasure(layoutState.layout);
  layoutState.isHydrated = true;
  layoutState.layout = visualElement2.measureViewportBox();
  layoutState.layoutCorrected = copyAxisBox(layoutState.layout);
  visualElement2.notifyLayoutMeasure(layoutState.layout, visualElement2.prevViewportBox || layoutState.layout);
  sync.update(function() {
    return visualElement2.rebaseProjectionTarget();
  });
}
function snapshotViewportBox(visualElement2, nc) {
  if (visualElement2.shouldResetTransform())
    return;
  if (!nc) visualElement2.prevViewportBox = visualElement2.measureViewportBox(false);
  visualElement2.rebaseProjectionTarget(false, visualElement2.prevViewportBox);
}
var unresolvedJobs = /* @__PURE__ */ new Set();
function pushJob(stack, job, pointer) {
  if (!stack[pointer])
    stack[pointer] = [];
  stack[pointer].push(job);
}
function batchLayout(callback) {
  unresolvedJobs.add(callback);
  return function() {
    return unresolvedJobs.delete(callback);
  };
}
function flushLayout() {
  if (!unresolvedJobs.size)
    return;
  var pointer = 0;
  var reads = [[]];
  var writes = [];
  var setRead = function(job) {
    return pushJob(reads, job, pointer);
  };
  var setWrite = function(job) {
    pushJob(writes, job, pointer);
    pointer++;
  };
  unresolvedJobs.forEach(function(callback) {
    callback(setRead, setWrite);
    pointer = 0;
  });
  unresolvedJobs.clear();
  sync.postRender(function() {
    setTimeout(function() {
      return false;
    }, 10);
  });
  var numStacks = writes.length;
  for (var i = 0; i <= numStacks; i++) {
    reads[i] && reads[i].forEach(executeJob);
    writes[i] && writes[i].forEach(executeJob);
  }
}
var executeJob = function(job) {
  return job();
};
var defaultHandler = {
  layoutReady: function(child) {
    return child.notifyLayoutReady();
  }
};
function createBatcher() {
  var queue = /* @__PURE__ */ new Set();
  return {
    add: function(child) {
      return queue.add(child);
    },
    flush: function(_a) {
      var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
      batchLayout(function(read, write) {
        var order2 = Array.from(queue).sort(compareByDepth);
        var ancestors = parent ? collectProjectingAncestors(parent) : [];
        write(function() {
          var allElements = __spreadArray(__spreadArray([], __read(ancestors)), __read(order2));
          allElements.forEach(function(element) {
            return element.resetTransform();
          });
        });
        read(function() {
          order2.forEach(updateLayoutMeasurement);
        });
        write(function() {
          ancestors.forEach(function(element) {
            return element.restoreTransform();
          });
          order2.forEach(layoutReady);
        });
        read(function() {
          order2.forEach(function(child) {
            if (child.isPresent)
              child.presence = Presence.Present;
          });
        });
        write(function() {
          flushSync.preRender();
          flushSync.render();
        });
        read(function() {
          sync.postRender(function() {
            return order2.forEach(assignProjectionToSnapshot);
          });
          queue.clear();
        });
      });
      flushLayout();
    }
  };
}
function assignProjectionToSnapshot(child) {
  child.prevViewportBox = child.projection.target;
}
var SharedLayoutContext = (custom) => getDomContext("SharedLayout", custom) || writable(createBatcher());
var FramerTreeLayoutContext = () => writable(createBatcher());
function isSharedLayout(context) {
  return !!context.forceUpdate;
}
const LazyContext = (c) => getDomContext("Lazy", c) || writable({ strict: false });
const MotionContext = (c) => getDomContext("Motion", c) || writable({});
const UseVisualElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presenceContext, $$unsubscribe_presenceContext;
  let $config, $$unsubscribe_config;
  let $lazyContext, $$unsubscribe_lazyContext;
  let $layoutGroupId, $$unsubscribe_layoutGroupId;
  let $mc, $$unsubscribe_mc;
  let { createVisualElement = void 0, props, Component, visualState, isCustom } = $$props;
  const config = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  $$unsubscribe_presenceContext = subscribe(presenceContext, (value) => $presenceContext = value);
  const lazyContext = getContext(LazyContext) || LazyContext(isCustom);
  $$unsubscribe_lazyContext = subscribe(lazyContext, (value) => $lazyContext = value);
  const mc = getContext(MotionContext) || MotionContext(isCustom);
  $$unsubscribe_mc = subscribe(mc, (value) => $mc = value);
  let parent = get_store_value(mc).visualElement;
  const layoutGroupId = getContext(LayoutGroupContext) || LayoutGroupContext(isCustom);
  $$unsubscribe_layoutGroupId = subscribe(layoutGroupId, (value) => $layoutGroupId = value);
  let layoutId = $layoutGroupId && props.layoutId !== void 0 ? $layoutGroupId + "-" + props.layoutId : props.layoutId;
  let visualElementRef = void 0;
  if (!createVisualElement) {
    createVisualElement = $lazyContext.renderer;
  }
  let visualElement2 = visualElementRef;
  onDestroy(() => {
    visualElement2?.notifyUnmount();
  });
  if ($$props.createVisualElement === void 0 && $$bindings.createVisualElement && createVisualElement !== void 0) $$bindings.createVisualElement(createVisualElement);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0) $$bindings.Component(Component);
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  parent = $mc.visualElement;
  layoutId = $layoutGroupId && props.layoutId !== void 0 ? $layoutGroupId + "-" + props.layoutId : props.layoutId;
  {
    if (!visualElementRef && createVisualElement) {
      visualElementRef = createVisualElement(Component, {
        visualState,
        parent,
        props: { ...props, layoutId },
        presenceId: $presenceContext?.id,
        blockInitialAnimation: $presenceContext?.initial === false
      });
    }
  }
  visualElement2 = visualElementRef;
  {
    if (visualElement2) {
      visualElement2.setProps({ ...$config, ...props, layoutId });
      visualElement2.isPresent = isPresent($presenceContext);
      visualElement2.isPresenceRoot = !parent || parent.presenceId !== $presenceContext?.id;
      visualElement2.syncRender();
    }
  }
  $$unsubscribe_presenceContext();
  $$unsubscribe_config();
  $$unsubscribe_lazyContext();
  $$unsubscribe_layoutGroupId();
  $$unsubscribe_mc();
  return `${slots.default ? slots.default({ visualElement: visualElement2 }) : ``}`;
});
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props) {
      return propNames.some(function(name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  layoutAnimation: createDefinition(["layout", "layoutId"])
};
function loadFeatures(features) {
  for (var key in features) {
    var Component = features[key];
    if (Component !== null) {
      featureDefinitions[key].Component = Component;
    }
  }
}
const UseFeatures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featureNames = Object.keys(featureDefinitions);
  const numFeatures = featureNames.length;
  let { visualElement: visualElement2, props } = $$props;
  let features = [];
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  {
    {
      features = [];
      for (let i = 0; i < numFeatures; i++) {
        const name = featureNames[i];
        const { isEnabled, Component } = featureDefinitions[name];
        if (isEnabled(props) && Component) {
          features.push({
            Component,
            key: name,
            props,
            visualElement: visualElement2
          });
        }
      }
    }
  }
  return `${visualElement2 ? `${slots.default ? slots.default({ features }) : ``}` : ``}`;
});
const MotionContextProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value, isCustom } = $$props;
  let store = writable(value);
  setContext(MotionContext, store);
  setDomContext("Motion", isCustom, store);
  onDestroy(() => {
    value?.visualElement?.unmount();
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  {
    store.set(value);
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
var createSvgRenderState = function() {
  return Object.assign(Object.assign({}, createHtmlRenderState()), { attrs: {} });
};
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a, b) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && !!valueScaleCorrection[key];
}
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return originX + " " + originY + " " + originZ;
}
function isCSSVariable$1(key) {
  return key.startsWith("--");
}
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};
function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var _a;
  var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable$1(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      if (layoutState && projection && layoutState.isHydrated && valueScaleCorrection[key]) {
        var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
        var applyTo = valueScaleCorrection[key].applyTo;
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            style[applyTo[i]] = correctedValue;
          }
        } else {
          style[key] = correctedValue;
        }
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
    style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : void 0);
    if (transformTemplate) {
      style.transform = transformTemplate(transform, style.transform);
    }
    style.transformOrigin = buildProjectionTransformOrigin(layoutState);
  } else {
    if (hasTransform) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    }
    if (hasTransformOrigin) {
      style.transformOrigin = buildTransformOrigin(transformOrigin);
    }
  }
}
const UseInitialMotionValues = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styles;
  let { visualState, isStatic, props } = $$props;
  const memo = () => {
    let state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, void 0, void 0, { enableHardwareAcceleration: !isStatic }, props.transformTemplate);
    const { vars, style } = state;
    return { ...vars, ...style };
  };
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  styles = memo();
  return `${slots.default ? slots.default({ styles }) : ``}`;
});
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
const UseStyle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styleProp;
  let { visualState, props, isStatic } = $$props;
  let style = {};
  const cRVO = copyRawValuesOnly;
  const toStyle = (s1) => {
    Object.assign(style, s1);
    if (props.transformValues) {
      style = props.transformValues(style);
    }
    return style;
  };
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  styleProp = props.style || {};
  {
    cRVO(style, styleProp, props);
  }
  return `${validate_component(UseInitialMotionValues, "UseInitialMotionValues").$$render($$result, { props, visualState, isStatic }, {}, {
    default: ({ styles: s1 }) => {
      return `${slots.default ? slots.default({ styles: toStyle(s1) }) : ``}`;
    }
  })}`;
});
const UseHTMLProps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props, visualState, isStatic } = $$props;
  const getHTMLProps = (style, props2) => {
    let htmlProps = {};
    if (Boolean(props2.drag)) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props2.drag === true ? "none" : `pan-${props2.drag === "x" ? "y" : "x"}`;
    }
    htmlProps.style = style;
    return htmlProps;
  };
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  return `${validate_component(UseStyle, "UseStyle").$$render($$result, { visualState, props, isStatic }, {}, {
    default: ({ styles }) => {
      return `${slots.default ? slots.default({ visualProps: getHTMLProps(styles, props) }) : ``}`;
    }
  })}`;
});
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return pxOriginX + " " + pxOriginY;
}
var progressToPixels = function(progress2, length) {
  return px.transform(progress2 * length);
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  var keys = camelKeys;
  attrs[keys.offset] = progressToPixels(-offset, totalLength);
  var pathLength = progressToPixels(length, totalLength);
  var pathSpacing = progressToPixels(spacing, totalLength);
  attrs[keys.array] = pathLength + " " + pathSpacing;
}
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (totalPathLength !== void 0 && pathLength !== void 0) {
    buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset);
  }
}
const UseSVGProps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visualProps;
  let { visualState, props } = $$props;
  let memo = () => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  };
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  visualProps = memo();
  {
    if (props.style) {
      const rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = { ...rawStyles, ...visualProps.style };
    }
  }
  return `${slots.default ? slots.default({ visualProps }) : ``}`;
});
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
try {
  var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;
  shouldForward = function(key) {
    if (key.startsWith("on")) {
      return !isValidMotionProp(key);
    } else {
      return emotionIsPropValid_1(key);
    }
  };
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
const UseRender = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProps;
  let { props, visualState, Component, forwardMotionProps = false, isStatic, ref, targetEl = void 0 } = $$props;
  const motion2 = (node) => {
    ref(node);
  };
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualState === void 0 && $$bindings.visualState && visualState !== void 0) $$bindings.visualState(visualState);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0) $$bindings.Component(Component);
  if ($$props.forwardMotionProps === void 0 && $$bindings.forwardMotionProps && forwardMotionProps !== void 0) $$bindings.forwardMotionProps(forwardMotionProps);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  if ($$props.targetEl === void 0 && $$bindings.targetEl && targetEl !== void 0) $$bindings.targetEl(targetEl);
  filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
  {
    if (targetEl) {
      motion2(targetEl);
    }
  }
  return `${validate_component((Component === "SVG" ? UseSVGProps : UseHTMLProps) || missing_component, "svelte:component").$$render($$result, { visualState, isStatic, props }, {}, {
    default: ({ visualProps }) => {
      return `${slots.default ? slots.default({
        motion: motion2,
        props: { ...filteredProps, ...visualProps }
      }) : ``}`;
    }
  })}`;
});
function getBoundingBox(element, transformPagePoint) {
  var box = element.getBoundingClientRect();
  return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
}
function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
function getVariableValue(current, element, depth) {
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable(fallback)) {
    return getVariableValue(fallback, element);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof HTMLElement))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = Object.assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v) {
  return v === number || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: function(_a) {
    var x = _a.x;
    return x.max - x.min;
  },
  height: function(_a) {
    var y = _a.y;
    return y.max - y.min;
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function(_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
  var originComputedStyle = { top, left, bottom, right, transform };
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = Object.assign({}, target);
  transitionEnd = Object.assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from = origin[key];
    var to = target[key];
    var fromType = findDimensionValueType(from);
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};
function scrapeMotionValuesFromProps$1(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
function renderHTML(element, _a) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element.style, style);
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}
function getComputedStyle$1(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle$1(domElement);
      return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return getBoundingBox(element, transformPagePoint);
  },
  /**
   * Reset the transform on the current Element. This is called as part
   * of a batched process across the entire layout tree. To remove this write
   * cycle it'd be interesting to see if it's possible to "undo" all the current
   * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
   * works
   */
  resetTransform: function(element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  /**
   * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
   * can be animated by Motion.
   */
  makeTargetAnimatable: function(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return Object.assign({
      transition,
      transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  build: function(element, renderState, latestValues, projection, layoutState, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    buildHTMLStyles(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
function scrapeMotionValuesFromProps(props) {
  var newValues = scrapeMotionValuesFromProps$1(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox"
]);
function renderSVG(element, renderState) {
  renderHTML(element, renderState);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
var svgVisualElement = visualElement(Object.assign(Object.assign({}, htmlConfig), {
  getBaseTarget: function(props, key) {
    return props[key];
  },
  readValueFromInstance: function(domElement, key) {
    var _a;
    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps,
  build: function(_element, renderState, latestValues, projection, layoutState, options, props) {
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
  },
  render: renderSVG
}));
var createDomVisualElement = function(Component, options) {
  return Component === "SVG" ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
var svgMotionConfig = {
  scrapeMotionValuesFromProps,
  createRenderState: createSvgRenderState,
  onMount: function(props, instance, _a) {
    var renderState = _a.renderState, latestValues = _a.latestValues;
    try {
      renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
    } catch (e) {
      renderState.dimensions = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (isPath(instance)) {
      renderState.totalPathLength = instance.getTotalLength();
    }
    buildSVGAttrs(renderState, latestValues, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
    renderSVG(instance, renderState);
  }
};
function isPath(element) {
  return element.tagName === "path";
}
var htmlMotionConfig = {
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  createRenderState: createHtmlRenderState
};
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial, animate2 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context || {} : {};
}
const UseCreateMotionContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mc, $$unsubscribe_mc;
  let { props, isStatic, isCustom } = $$props;
  let mc = getContext(MotionContext) || MotionContext(isCustom);
  $$unsubscribe_mc = subscribe(mc, (value2) => $mc = value2);
  let { initial, animate: animate2 } = getCurrentTreeVariants(props, get_store_value(mc));
  const variantLabelsAsDependency = (prop) => {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  };
  const memo = () => {
    return { initial, animate: animate2 };
  };
  let value = memo();
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ initial, animate: animate2 } = getCurrentTreeVariants(props, $mc));
  {
    if (isStatic) {
      value = memo(variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2));
    }
  }
  $$unsubscribe_mc();
  return `${slots.default ? slots.default({ value }) : ``}`;
});
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
const makeState = ({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, createRenderState, onMount }, props, context, presenceContext) => {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const blockInitialAnimation = presenceContext?.initial === false;
  const motionValues = scrapeMotionValues(props);
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate2 } = props;
  const isControllingVariants = checkIfControllingVariants(props);
  const isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
  }
  const variantToSet = blockInitialAnimation || initial === false ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const { transitionEnd, transition, ...target } = resolved;
      for (const key in target) values[key] = target[key];
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}
const UseVisualState = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presenceContext, $$unsubscribe_presenceContext;
  let $context, $$unsubscribe_context;
  let { config, props, isStatic, isCustom } = $$props;
  const context = getContext(MotionContext) || MotionContext(isCustom);
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  $$unsubscribe_presenceContext = subscribe(presenceContext, (value) => $presenceContext = value);
  let state = makeState(config, props, get_store_value(context), get_store_value(presenceContext));
  const ms = makeState;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0) $$bindings.config(config);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0) $$bindings.isStatic(isStatic);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  {
    if (isStatic) {
      state = ms(config, props, $context, $presenceContext);
    }
  }
  $$unsubscribe_presenceContext();
  $$unsubscribe_context();
  return `${slots.default ? slots.default({ state }) : ``}`;
});
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement2, externalRef) {
  return function(instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  };
}
const Motion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let motionProps;
  let isStatic;
  let $$restProps = compute_rest_props($$props, ["isSVG", "forwardMotionProps", "externalRef", "targetEl"]);
  let $a, $$unsubscribe_a;
  let { isSVG = false, forwardMotionProps = false, externalRef = void 0, targetEl = void 0 } = $$props;
  const isCustom = targetEl;
  let Component = isSVG ? "SVG" : "DOM";
  let createVisualElement = createDomVisualElement;
  let visualStateConfig = isSVG ? svgMotionConfig : htmlMotionConfig;
  const a = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  $$unsubscribe_a = subscribe(a, (value) => $a = value);
  const setContext2 = (c, v) => {
    c.visualElement = v;
    return v;
  };
  if ($$props.isSVG === void 0 && $$bindings.isSVG && isSVG !== void 0) $$bindings.isSVG(isSVG);
  if ($$props.forwardMotionProps === void 0 && $$bindings.forwardMotionProps && forwardMotionProps !== void 0) $$bindings.forwardMotionProps(forwardMotionProps);
  if ($$props.externalRef === void 0 && $$bindings.externalRef && externalRef !== void 0) $$bindings.externalRef(externalRef);
  if ($$props.targetEl === void 0 && $$bindings.targetEl && targetEl !== void 0) $$bindings.targetEl(targetEl);
  motionProps = $$restProps;
  ({ isStatic } = $a || {});
  $$unsubscribe_a();
  return `${validate_component(ScaleCorrectionProvider, "ScaleCorrectionProvider").$$render($$result, { isCustom }, {}, {
    default: () => {
      return `${validate_component(UseCreateMotionContext, "UseCreateMotionContext").$$render($$result, { props: motionProps, isStatic, isCustom }, {}, {
        default: ({ value: context }) => {
          return `${validate_component(UseVisualState, "UseVisualState").$$render(
            $$result,
            {
              config: visualStateConfig,
              props: motionProps,
              isStatic,
              isCustom
            },
            {},
            {
              default: ({ state: visualState }) => {
                return `${validate_component(UseVisualElement, "UseVisualElement").$$render(
                  $$result,
                  {
                    Component,
                    visualState,
                    createVisualElement,
                    props: motionProps,
                    isCustom
                  },
                  {},
                  {
                    default: ({ visualElement: visualElement2 }) => {
                      return `${validate_component(UseFeatures, "UseFeatures").$$render(
                        $$result,
                        {
                          visualElement: setContext2(context, visualElement2),
                          props: motionProps
                        },
                        {},
                        {
                          default: ({ features: _features }) => {
                            return `${validate_component(MotionContextProvider, "MotionContextProvider").$$render($$result, { value: context, isCustom }, {}, {
                              default: () => {
                                return `${validate_component(UseRender, "UseRender").$$render(
                                  $$result,
                                  {
                                    Component,
                                    props: motionProps,
                                    ref: useMotionRef(visualState, context.visualElement, externalRef),
                                    visualState,
                                    isStatic,
                                    forwardMotionProps
                                  },
                                  {},
                                  {
                                    default: ({ motion: motion2, props: renderProps }) => {
                                      return `${slots.default ? slots.default({ motion: motion2, props: renderProps }) : ``}`;
                                    }
                                  }
                                )}`;
                              }
                            })} ${``}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler, options);
  };
}
const UseDomEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ref, eventName, handler = void 0, options = void 0 } = $$props;
  let cleanup = () => {
  };
  const effect2 = () => {
    cleanup();
    if (!ref) {
      return () => {
      };
    }
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
    return () => {
    };
  };
  onDestroy(cleanup);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  if ($$props.eventName === void 0 && $$bindings.eventName && eventName !== void 0) $$bindings.eventName(eventName);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0) $$bindings.handler(handler);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  cleanup = effect2();
  return `${slots.default ? slots.default({}) : ``}`;
});
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
function getViewportPointFromEvent(event) {
  return extractEventInfo(event, "client");
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var isBrowser$1 = typeof window !== "undefined";
var supportsPointerEvents = function() {
  return isBrowser$1 && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser$1 && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser$1 && window.onmousedown === null;
};
const mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
const touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
const UsePointerEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ref, eventName, handler = void 0, options = void 0 } = $$props;
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  if ($$props.eventName === void 0 && $$bindings.eventName && eventName !== void 0) $$bindings.eventName(eventName);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0) $$bindings.handler(handler);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  return `${validate_component(UseDomEvent, "UseDomEvent").$$render(
    $$result,
    {
      ref,
      eventName: getPointerEventName(eventName),
      handler: handler && wrapHandler(handler, eventName === "pointerdown"),
      options
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
var PanSession = (
  /** @class */
  function() {
    function PanSession2(event, handlers, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.updatePoint = function() {
        if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
          return;
        var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
        var isPanStarted = _this.startEvent !== null;
        var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        var point2 = info2.point;
        var timestamp2 = getFrameData().timestamp;
        _this.history.push(Object.assign(Object.assign({}, point2), { timestamp: timestamp2 }));
        var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
        if (!isPanStarted) {
          onStart && onStart(_this.lastMoveEvent, info2);
          _this.startEvent = _this.lastMoveEvent;
        }
        onMove && onMove(_this.lastMoveEvent, info2);
      };
      this.handlePointerMove = function(event2, info2) {
        _this.lastMoveEvent = event2;
        _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
        if (isMouseEvent(event2) && event2.buttons === 0) {
          _this.handlePointerUp(event2, info2);
          return;
        }
        sync.update(_this.updatePoint, true);
      };
      this.handlePointerUp = function(event2, info2) {
        _this.end();
        var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
        var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
        if (_this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (isTouchEvent(event) && event.touches.length > 1)
        return;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      var info = extractEventInfo(event);
      var initialInfo = transformPoint(info, this.transformPagePoint);
      var point = initialInfo.point;
      var timestamp = getFrameData().timestamp;
      this.history = [Object.assign(Object.assign({}, point), { timestamp })];
      var onSessionStart = handlers.onSessionStart;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    PanSession2.prototype.updateHandlers = function(handlers) {
      this.handlers = handlers;
    };
    PanSession2.prototype.end = function() {
      this.removeListeners && this.removeListeners();
      cancelSync.update(this.updatePoint);
    };
    return PanSession2;
  }()
);
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
const UsePanGesture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasPanEvents;
  let $mcc, $$unsubscribe_mcc;
  let { props, visualElement: visualElement2, isCustom } = $$props;
  let { onPan, onPanStart, onPanEnd, onPanSessionStart } = props;
  let panSession = null;
  const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  $$unsubscribe_mcc = subscribe(mcc, (value) => $mcc = value);
  let { transformPagePoint } = get_store_value(mcc);
  let handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  function onPointerDown(event) {
    panSession = new PanSession(event, handlers, { transformPagePoint });
  }
  onDestroy(() => panSession && panSession.end());
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ onPan, onPanStart, onPanEnd, onPanSessionStart } = props);
  hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  ({ transformPagePoint } = $mcc);
  handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  $$unsubscribe_mcc();
  return `${validate_component(UsePointerEvent, "UsePointerEvent").$$render(
    $$result,
    {
      ref: visualElement2,
      eventName: "pointerdown",
      handler: hasPanEvents && onPointerDown
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}
const UseTapGesture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let onTap;
  let onTapStart;
  let onTapCancel;
  let whileTap;
  let hasPressListeners;
  let { props, visualElement: visualElement2 } = $$props;
  let isPressing = false;
  let cancelPointerEndListeners = null;
  function removePointerEndListener() {
    cancelPointerEndListeners?.();
    cancelPointerEndListeners = null;
  }
  function checkPointerEnd() {
    removePointerEndListener();
    isPressing = false;
    visualElement2.animationState?.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd()) return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel?.(event, info) : onTap?.(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd()) return;
    onTapCancel?.(event, info);
  }
  function onPointerDown(event, info) {
    if (isPressing) return;
    removePointerEndListener();
    isPressing = true;
    cancelPointerEndListeners = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    onTapStart?.(event, info);
    visualElement2.animationState?.setActive(AnimationType.Tap, true);
  }
  onDestroy(removePointerEndListener);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  ({ onTap, onTapStart, onTapCancel, whileTap } = props);
  hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  return `${validate_component(UsePointerEvent, "UsePointerEvent").$$render(
    $$result,
    {
      ref: visualElement2,
      eventName: "pointerdown",
      handler: hasPressListeners ? onPointerDown : void 0
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
function createHoverEvent(visualElement2, isActive, callback) {
  return (event, info) => {
    if (!isMouseEvent(event) || isDragActive()) return;
    callback?.(event, info);
    visualElement2.animationState?.setActive(AnimationType.Hover, isActive);
  };
}
const UseHoverGesture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props, visualElement: visualElement2 } = $$props;
  let { onHoverStart, onHoverEnd, whileHover } = props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  ({ onHoverStart, onHoverEnd, whileHover } = props);
  return `${validate_component(UsePointerEvent, "UsePointerEvent").$$render(
    $$result,
    {
      ref: visualElement2,
      eventName: "pointerenter",
      handler: onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0
    },
    {},
    {}
  )} ${validate_component(UsePointerEvent, "UsePointerEvent").$$render(
    $$result,
    {
      ref: visualElement2,
      eventName: "pointerleave",
      handler: onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}`;
});
const UseFocusGesture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let whileFocus;
  let { props, visualElement: visualElement2 } = $$props;
  const onFocus = () => {
    visualElement2.animationState?.setActive(AnimationType.Focus, true);
  };
  const onBlur = () => {
    visualElement2.animationState?.setActive(AnimationType.Focus, false);
  };
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  ({ whileFocus } = props);
  return `${validate_component(UseDomEvent, "UseDomEvent").$$render(
    $$result,
    {
      ref: visualElement2,
      eventName: "focus",
      handler: whileFocus ? onFocus : void 0
    },
    {},
    {
      default: () => {
        return `${validate_component(UseDomEvent, "UseDomEvent").$$render(
          $$result,
          {
            ref: visualElement2,
            eventName: "blur",
            handler: whileFocus ? onBlur : void 0
          },
          {},
          {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const createMotionClass = (features) => {
  features && loadFeatures(features);
  return Motion;
};
const gestureAnimations = {
  tap: UseTapGesture,
  focus: UseFocusGesture,
  hover: UseHoverGesture
};
function applyConstraints(point, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point < min) {
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcConstrainedMinPoint(point, length, progress2, constraints, elastic) {
  var min = point - length * progress2;
  return constraints ? applyConstraints(min, constraints, elastic) : min;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return {
    min: layoutAxis.min + min,
    max: layoutAxis.min + max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcPositionFromProgress(axis, constraints, progress2) {
  var axisLength = axis.max - axis.min;
  var min = mix(constraints.min, constraints.max - axisLength, progress2);
  return { min, max: min + axisLength };
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
function convertToRelativeProjection(visualElement2, isLayoutDrag) {
  if (isLayoutDrag === void 0) {
    isLayoutDrag = true;
  }
  var projectionParent = visualElement2.getProjectionParent();
  if (!projectionParent)
    return false;
  var offset;
  if (isLayoutDrag) {
    offset = calcRelativeOffset(projectionParent.projection.target, visualElement2.projection.target);
    removeBoxTransforms(offset, projectionParent.getLatestValues());
  } else {
    offset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
  }
  eachAxis(function(axis) {
    return visualElement2.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
  });
  return true;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var lastPointerEvent;
var VisualElementDragControls = (
  /** @class */
  function() {
    function VisualElementDragControls2(_a) {
      var visualElement2 = _a.visualElement;
      this.isDragging = false;
      this.currentDirection = null;
      this.constraints = false;
      this.elastic = axisBox();
      this.props = {};
      this.hasMutatedConstraints = false;
      this.cursorProgress = {
        x: 0.5,
        y: 0.5
      };
      this.originPoint = {};
      this.openGlobalLock = null;
      this.panSession = null;
      this.visualElement = visualElement2;
      this.visualElement.enableLayoutProjection();
      elementDragControls.set(visualElement2, this);
    }
    VisualElementDragControls2.prototype.start = function(originEvent, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
      var onSessionStart = function(event) {
        var _a2;
        _this.stopMotion();
        var initialPoint = getViewportPointFromEvent(event).point;
        (_a2 = _this.cancelLayout) === null || _a2 === void 0 ? void 0 : _a2.call(_this);
        _this.cancelLayout = batchLayout(function(read, write) {
          var ancestors = collectProjectingAncestors(_this.visualElement);
          var children = collectProjectingChildren(_this.visualElement);
          var tree = __spreadArray(__spreadArray([], __read(ancestors)), __read(children));
          var hasManuallySetCursorOrigin = false;
          _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
          write(function() {
            tree.forEach(function(element) {
              return element.resetTransform();
            });
          });
          read(function() {
            updateLayoutMeasurement(_this.visualElement);
            children.forEach(updateLayoutMeasurement);
          });
          write(function() {
            tree.forEach(function(element) {
              return element.restoreTransform();
            });
            if (snapToCursor) {
              hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
            }
          });
          read(function() {
            var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
            if (!isRelativeDrag) {
              _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
            }
            _this.visualElement.scheduleUpdateLayoutProjection();
            var projection = _this.visualElement.projection;
            eachAxis(function(axis) {
              if (!hasManuallySetCursorOrigin) {
                var _a3 = projection.target[axis], min = _a3.min, max = _a3.max;
                _this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : progress(min, max, initialPoint[axis]);
              }
              var axisValue = _this.getAxisMotionValue(axis);
              if (axisValue) {
                _this.originPoint[axis] = axisValue.get();
              }
            });
          });
          write(function() {
            flushSync.update();
            flushSync.preRender();
            flushSync.render();
            flushSync.postRender();
          });
          read(function() {
            return _this.resolveDragConstraints();
          });
        });
      };
      var onStart = function(event, info) {
        var _a2, _b2, _c2;
        var _d = _this.props, drag2 = _d.drag, dragPropagation = _d.dragPropagation;
        if (drag2 && !dragPropagation) {
          if (_this.openGlobalLock)
            _this.openGlobalLock();
          _this.openGlobalLock = getGlobalLock(drag2);
          if (!_this.openGlobalLock)
            return;
        }
        flushLayout();
        _this.isDragging = true;
        _this.currentDirection = null;
        (_b2 = (_a2 = _this.props).onDragStart) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, event, info);
        (_c2 = _this.visualElement.animationState) === null || _c2 === void 0 ? void 0 : _c2.setActive(AnimationType.Drag, true);
      };
      var onMove = function(event, info) {
        var _a2, _b2, _c2, _d;
        var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
        if (!dragPropagation && !_this.openGlobalLock)
          return;
        var offset = info.offset;
        if (dragDirectionLock && _this.currentDirection === null) {
          _this.currentDirection = getCurrentDirection(offset);
          if (_this.currentDirection !== null) {
            (_b2 = (_a2 = _this.props).onDirectionLock) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, _this.currentDirection);
          }
          return;
        }
        _this.updateAxis("x", info.point, offset);
        _this.updateAxis("y", info.point, offset);
        (_d = (_c2 = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c2, event, info);
        lastPointerEvent = event;
      };
      var onSessionEnd = function(event, info) {
        return _this.stop(event, info);
      };
      var transformPagePoint = this.props.transformPagePoint;
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd
      }, { transformPagePoint });
    };
    VisualElementDragControls2.prototype.resolveDragConstraints = function() {
      var _this = this;
      var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
      var layout = this.visualElement.getLayoutState().layoutCorrected;
      if (dragConstraints) {
        this.constraints = isRefObject(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : calcRelativeConstraints(layout, dragConstraints);
      } else {
        this.constraints = false;
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (this.constraints && !this.hasMutatedConstraints) {
        eachAxis(function(axis) {
          if (_this.getAxisMotionValue(axis)) {
            _this.constraints[axis] = rebaseAxisConstraints(layout[axis], _this.constraints[axis]);
          }
        });
      }
    };
    VisualElementDragControls2.prototype.resolveRefConstraints = function(layoutBox, constraints) {
      var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
      var constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
      var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
      if (onMeasureDragConstraints) {
        var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
        }
      }
      return measuredConstraints;
    };
    VisualElementDragControls2.prototype.cancelDrag = function() {
      var _a, _b;
      this.visualElement.unlockProjectionTarget();
      (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
      this.isDragging = false;
      this.panSession && this.panSession.end();
      this.panSession = null;
      if (!this.props.dragPropagation && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
    };
    VisualElementDragControls2.prototype.stop = function(event, info) {
      var _a, _b, _c;
      (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
      this.panSession = null;
      var isDragging = this.isDragging;
      this.cancelDrag();
      if (!isDragging)
        return;
      var velocity = info.velocity;
      this.animateDragEnd(velocity);
      (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
    };
    VisualElementDragControls2.prototype.snapToCursor = function(point) {
      var _this = this;
      return eachAxis(function(axis) {
        var drag2 = _this.props.drag;
        if (!shouldDrag(axis, drag2, _this.currentDirection))
          return;
        var axisValue = _this.getAxisMotionValue(axis);
        if (axisValue) {
          var box = _this.visualElement.getLayoutState().layout;
          var length_1 = box[axis].max - box[axis].min;
          var center = box[axis].min + length_1 / 2;
          var offset = point[axis] - center;
          _this.originPoint[axis] = point[axis];
          axisValue.set(offset);
        } else {
          _this.cursorProgress[axis] = 0.5;
          return true;
        }
      }).includes(true);
    };
    VisualElementDragControls2.prototype.updateAxis = function(axis, point, offset) {
      var drag2 = this.props.drag;
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
    };
    VisualElementDragControls2.prototype.updateAxisMotionValue = function(axis, offset) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!offset || !axisValue)
        return;
      var nextValue = this.originPoint[axis] + offset[axis];
      var update2 = this.constraints ? applyConstraints(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
      axisValue.set(update2);
    };
    VisualElementDragControls2.prototype.updateVisualElementAxis = function(axis, point) {
      var _a;
      var axisLayout = this.visualElement.getLayoutState().layout[axis];
      var axisLength = axisLayout.max - axisLayout.min;
      var axisProgress = this.cursorProgress[axis];
      var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
      this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls2.prototype.setProps = function(_a) {
      var _b = _a.drag, drag2 = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
      this.props = Object.assign({
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      }, remainingProps);
    };
    VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
      var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
      var dragKey = "_drag" + axis.toUpperCase();
      if (this.props[dragKey]) {
        return this.props[dragKey];
      } else if (!layout && layoutId === void 0) {
        return this.visualElement.getValue(axis, 0);
      }
    };
    VisualElementDragControls2.prototype.isLayoutDrag = function() {
      return !this.getAxisMotionValue("x");
    };
    VisualElementDragControls2.prototype.isExternalDrag = function() {
      var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
      return _dragX || _dragY;
    };
    VisualElementDragControls2.prototype.animateDragEnd = function(velocity) {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
      var isRelative = convertToRelativeProjection(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
      var constraints = this.constraints || {};
      if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
        var projectionParent = this.visualElement.getProjectionParent();
        if (projectionParent) {
          var relativeConstraints_1 = calcRelativeOffset(projectionParent.projection.targetFinal, constraints);
          eachAxis(function(axis) {
            var _a2 = relativeConstraints_1[axis], min = _a2.min, max = _a2.max;
            constraints[axis] = {
              min: isNaN(min) ? void 0 : min,
              max: isNaN(max) ? void 0 : max
            };
          });
        }
      }
      var momentumAnimations = eachAxis(function(axis) {
        var _a2;
        if (!shouldDrag(axis, drag2, _this.currentDirection)) {
          return;
        }
        var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
        var bounceStiffness = dragElastic ? 200 : 1e6;
        var bounceDamping = dragElastic ? 40 : 1e7;
        var inertia2 = Object.assign(Object.assign({
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10
        }, dragTransition), transition);
        return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia2) : _this.visualElement.startLayoutAnimation(axis, inertia2, isRelative);
      });
      return Promise.all(momentumAnimations).then(function() {
        var _a2, _b;
        (_b = (_a2 = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a2);
      });
    };
    VisualElementDragControls2.prototype.stopMotion = function() {
      var _this = this;
      eachAxis(function(axis) {
        var axisValue = _this.getAxisMotionValue(axis);
        axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
      });
    };
    VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!axisValue)
        return;
      var currentValue = axisValue.get();
      axisValue.set(currentValue);
      axisValue.set(currentValue);
      return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls2.prototype.scalePoint = function() {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragConstraints = _a.dragConstraints;
      if (!isRefObject(dragConstraints) || !this.constraintsBox)
        return;
      this.stopMotion();
      var boxProgress = { x: 0, y: 0 };
      eachAxis(function(axis) {
        boxProgress[axis] = calcOrigin$1(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
      });
      this.updateConstraints(function() {
        eachAxis(function(axis) {
          if (!shouldDrag(axis, drag2, null))
            return;
          var _a2 = calcPositionFromProgress(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a2.min, max = _a2.max;
          _this.visualElement.setProjectionTargetAxis(axis, min, max);
        });
      });
      setTimeout(flushLayout, 1);
    };
    VisualElementDragControls2.prototype.updateConstraints = function(onReady) {
      var _this = this;
      this.cancelLayout = batchLayout(function(read, write) {
        var ancestors = collectProjectingAncestors(_this.visualElement);
        write(function() {
          return ancestors.forEach(function(element) {
            return element.resetTransform();
          });
        });
        read(function() {
          return updateLayoutMeasurement(_this.visualElement);
        });
        write(function() {
          return ancestors.forEach(function(element) {
            return element.restoreTransform();
          });
        });
        read(function() {
          _this.resolveDragConstraints();
        });
        if (onReady)
          write(onReady);
      });
    };
    VisualElementDragControls2.prototype.mount = function(visualElement2) {
      var _this = this;
      var element = visualElement2.getInstance();
      var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
        var _a = _this.props, drag2 = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
        drag2 && dragListener && _this.start(event);
      });
      var stopResizeListener = addDomEvent(window, "resize", function() {
        _this.scalePoint();
      });
      var stopLayoutUpdateListener = visualElement2.onLayoutUpdate(function() {
        if (_this.isDragging) {
          _this.resolveDragConstraints();
        }
      });
      var prevDragCursor = visualElement2.prevDragCursor;
      if (prevDragCursor) {
        this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
      }
      return function() {
        stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
        stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
        stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
        _this.cancelDrag();
      };
    };
    return VisualElementDragControls2;
  }()
);
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
const UseDrag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mcc, $$unsubscribe_mcc;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  $$unsubscribe_mcc = subscribe(mcc, (value) => $mcc = value);
  let dragControls = new VisualElementDragControls({ visualElement: visualElement2 });
  let cleanup;
  const dragEffect = () => {
    if (cleanup) {
      cleanup();
    }
    if (groupDragControls) {
      cleanup = groupDragControls.subscribe(dragControls);
    }
  };
  let { dragControls: groupDragControls } = props;
  let { transformPagePoint } = get_store_value(mcc);
  dragControls.setProps({ ...props, transformPagePoint });
  onDestroy(() => {
    if (cleanup) {
      cleanup();
    }
  });
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ dragControls: groupDragControls } = props);
  ({ transformPagePoint } = $mcc);
  {
    dragControls.setProps({ ...props, transformPagePoint });
  }
  {
    dragEffect();
  }
  $$unsubscribe_mcc();
  return `${slots.default ? slots.default({}) : ``}`;
});
const drag = {
  pan: UsePanGesture,
  drag: UseDrag
};
const Animate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visualElement: visualElement2, layout = void 0, safeToRemove } = $$props;
  let stopAxisAnimation = { x: void 0, y: void 0 };
  let unsubLayoutReady;
  onDestroy(() => {
    unsubLayoutReady();
    eachAxis((axis) => stopAxisAnimation[axis]?.());
  });
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
  if ($$props.safeToRemove === void 0 && $$bindings.safeToRemove && safeToRemove !== void 0) $$bindings.safeToRemove(safeToRemove);
  return ``;
});
const AnimateLayoutContextProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $presence, $$unsubscribe_presence;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  let { layout } = props;
  const presence = usePresence(isCustom);
  $$unsubscribe_presence = subscribe(presence, (value) => $presence = value);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ layout } = props);
  $$unsubscribe_presence();
  return `${validate_component(Animate, "Animate").$$render(
    $$result,
    {
      visualElement: visualElement2,
      layout,
      safeToRemove: $presence[1]
    },
    {},
    {}
  )}`;
});
const Measure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visualElement: visualElement2, syncLayout, framerSyncLayout, update: update2 } = $$props;
  const scaleCorrectionContext = getContext(ScaleCorrectionContext);
  const scaleCorrectionParentContext = getContext(ScaleCorrectionParentContext);
  let updated = false;
  const updater = (nc = false) => {
    if (updated) {
      return null;
    }
    updated = true;
    get_store_value(scaleCorrectionContext).forEach((v) => {
      v.updater?.(true);
    });
    if (isSharedLayout(syncLayout)) {
      syncLayout.syncUpdate();
    } else {
      snapshotViewportBox(visualElement2, nc);
      syncLayout.add(visualElement2);
    }
    return null;
  };
  const afterU = (nc = false) => {
    updated = false;
    const scc = get_store_value(scaleCorrectionContext);
    scc.forEach((v, i) => {
      v.afterU?.(true);
    });
    if (!isSharedLayout(syncLayout)) {
      syncLayout.flush();
    }
  };
  scaleCorrectionParentContext.update((v) => v.concat([{ updater, afterU }]));
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.syncLayout === void 0 && $$bindings.syncLayout && syncLayout !== void 0) $$bindings.syncLayout(syncLayout);
  if ($$props.framerSyncLayout === void 0 && $$bindings.framerSyncLayout && framerSyncLayout !== void 0) $$bindings.framerSyncLayout(framerSyncLayout);
  if ($$props.update === void 0 && $$bindings.update && update2 !== void 0) $$bindings.update(update2);
  update2 !== void 0 && updater(update2);
  return ``;
});
const MeasureContextProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let update2;
  let $syncLayout, $$unsubscribe_syncLayout;
  let $framerSyncLayout, $$unsubscribe_framerSyncLayout;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  const syncLayout = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
  $$unsubscribe_syncLayout = subscribe(syncLayout, (value) => $syncLayout = value);
  const framerSyncLayout = getContext(FramerTreeLayoutContext) || FramerTreeLayoutContext();
  $$unsubscribe_framerSyncLayout = subscribe(framerSyncLayout, (value) => $framerSyncLayout = value);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ update: update2 } = props);
  $$unsubscribe_syncLayout();
  $$unsubscribe_framerSyncLayout();
  return `${validate_component(Measure, "Measure").$$render(
    $$result,
    {
      syncLayout: $syncLayout,
      framerSyncLayout: $framerSyncLayout,
      visualElement: visualElement2,
      update: update2
    },
    {},
    {}
  )}`;
});
var layoutAnimations = {
  measureLayout: MeasureContextProvider,
  layoutAnimation: AnimateLayoutContextProvider
};
const AnimationState = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visualElement: visualElement2, props } = $$props;
  let { animate: animate2 } = props;
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  ({ animate: animate2 } = props);
  {
    {
      visualElement2.animationState = visualElement2.animationState || createAnimationState(visualElement2);
    }
  }
  {
    if (isAnimationControls(animate2)) {
      tick().then(() => animate2.subscribe(visualElement2));
    }
  }
  return ``;
});
const Exit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let custom;
  let $presence, $$unsubscribe_presence;
  let $presenceContext, $$unsubscribe_presenceContext;
  let { props, visualElement: visualElement2, isCustom } = $$props;
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  $$unsubscribe_presenceContext = subscribe(presenceContext, (value) => $presenceContext = value);
  const presence = usePresence(isCustom);
  $$unsubscribe_presence = subscribe(presence, (value) => $presence = value);
  const effect2 = (pres) => {
    const [isPresent2, onExitComplete] = pres;
    const animation = visualElement2.animationState?.setActive(AnimationType.Exit, !isPresent2, {
      custom: $presenceContext?.custom ?? custom
    });
    !isPresent2 && animation?.then(onExitComplete);
    return "";
  };
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.visualElement === void 0 && $$bindings.visualElement && visualElement2 !== void 0) $$bindings.visualElement(visualElement2);
  if ($$props.isCustom === void 0 && $$bindings.isCustom && isCustom !== void 0) $$bindings.isCustom(isCustom);
  ({ custom } = props);
  {
    effect2($presence);
  }
  $$unsubscribe_presence();
  $$unsubscribe_presenceContext();
  return `${slots.default ? slots.default({}) : ``}`;
});
const animations = {
  animation: AnimationState,
  exit: Exit
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layoutAnimations
};
var motion = (
  //createMotionProxy(allMotionFeatures);
  /* @__PURE__ */ createMotionClass(featureBundle)
);
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString2 = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0) return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale2 = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString2({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale2})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function portalAttr(portal) {
  if (portal !== null) {
    return "";
  }
  return void 0;
}
function lightable(value) {
  function subscribe2(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe: subscribe2 };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name,
    attribute,
    selector,
    getEl
  };
}
const isBrowser = typeof document !== "undefined";
function isDocument(element) {
  return element instanceof Document;
}
function isElement(element) {
  return element instanceof Element;
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isTouch(event) {
  return event.pointerType === "touch";
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn;
  }
};
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined$1(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get_store_value(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe2 = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get());
      }));
    });
    subscriber(get());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get,
    subscribe: subscribe2
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update2 = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update2(() => curr);
  };
  return {
    ...store,
    update: update2,
    set
  };
};
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
function effect(stores, fn) {
  let cb = void 0;
  const destroy = derived(stores, (stores2) => {
    cb?.();
    cb = fn(stores2);
  }).subscribe(noop);
  const unsub = () => {
    destroy();
    cb?.();
  };
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
export {
  removeUndefined as A,
  getOptionUpdater as B,
  flyAndScale as C,
  DATA as D,
  setDomContext as E,
  isSharedLayout as F,
  Icon as I,
  MotionConfigContext as M,
  PresenceContext as P,
  SharedLayoutContext as S,
  motion as a,
  isHTMLElement as b,
  cn as c,
  toWritableStores as d,
  makeElement as e,
  overridable as f,
  executeCallbacks as g,
  addEventListener as h,
  isMotionValue as i,
  addMeltEventListener as j,
  effect as k,
  isBrowser as l,
  motionValue as m,
  noop as n,
  omit as o,
  portalAttr as p,
  createElHelpers as q,
  removeUndefined$1 as r,
  styleToString as s,
  tick as t,
  kbd as u,
  isTouch as v,
  isElement as w,
  isDocument as x,
  is_void as y,
  createBitAttrs as z
};
