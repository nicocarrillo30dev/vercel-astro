import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DtHt2oZ6.mjs';
import { manifest } from './manifest_Dknhy53F.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BxhtNcxo.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_sfQLJXN3.mjs')],
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
    "middlewareSecret": "09a0df1b-8cc6-4d50-ae06-b5f441112e11",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
