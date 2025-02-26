import { c as createComponent, d as createAstro, b as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DnJ1bA7O.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LayoutSign = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutSign;
  return renderTemplate`<html lang="en" data-astro-cid-qc5bxiap> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Quiz Medicina</title>${renderHead()}</head> <body class="bg-radial from-bl2 to-60% to-backk" data-astro-cid-qc5bxiap> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/layouts/layoutSign.astro", void 0);

function PButton({ children, onClick, disabled }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick,
      disabled,
      className: `text-gray-900 hover:bg-bl2 bg-bl1 border border-gray-200
                 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 inline-flex items-center me-2 mb-2`,
      children
    }
  );
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutSign, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center h-screen"> <div class="bg-white p-8 rounded-lg shadow-lg w-96"> <h1 class="text-center mb-10 font-serif text-6xl text-gray-700">Quiz!</h1> <h2 class="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2> <div class="mb-4"> <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label> <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu correo electrónico"> </div> <div class="mb-6"> <label for="password" class="block text-gray-700 font-bold mb-2">Contraseña</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu contraseña"> </div> <div class="flex justify-center"> <a href="/"> ${renderComponent($$result2, "PButton", PButton, {}, { "default": ($$result3) => renderTemplate`
Ingresar
` })} </a> </div> </div> </div> ` })}`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/pages/login.astro", void 0);

const $$file = "C:/Users/luisa/Desktop/astro-quiz/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
