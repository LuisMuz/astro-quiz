import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BWscODD2.mjs';
import { manifest } from './manifest_DKknaL95.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/question/_id_.json.astro.mjs');
const _page2 = () => import('./pages/explore.astro.mjs');
const _page3 = () => import('./pages/login.astro.mjs');
const _page4 = () => import('./pages/profile.astro.mjs');
const _page5 = () => import('./pages/quiz/_id_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/question/[id].json.ts", _page1],
    ["src/pages/explore.astro", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/profile.astro", _page4],
    ["src/pages/quiz/[id].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7296ab81-8545-45ef-bf9c-5f69a3a475a2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
