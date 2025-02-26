import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as createAstro, b as addAttribute, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_DnJ1bA7O.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
/* empty css                           */

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-bl3"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <h1 class="text-center font-serif text-4xl text-white">Quiz!</h1> </a> <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-solid-bg" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg"> <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent "> <li> <a href="/" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bl1" aria-current="page">Inicio</a> </li> <li> <a href="/explore" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bl1">Explorar</a> </li> <li> <a href="/profile" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-bl1">Perfil</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/components/navBar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Quiz Medicina" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-backk" data-astro-cid-sckkx6r4> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-sckkx6r4": true })} <div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
