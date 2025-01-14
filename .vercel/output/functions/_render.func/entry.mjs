import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_nBNXHm_K.mjs';
import { manifest } from './manifest_DMir5v6a.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_GIW3XBPs.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_D91-IJW3.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.0_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b8125848-32f5-4da7-9315-98cea263cb47",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
