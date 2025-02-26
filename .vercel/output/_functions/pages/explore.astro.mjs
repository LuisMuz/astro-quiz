import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DnJ1bA7O.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_9Pobnkij.mjs';
import { C as CardContainer } from '../chunks/card_BuN1oaBp.mjs';
import { g as getCollection } from '../chunks/_astro_content_C4saPIw9.mjs';
export { renderers } from '../renderers.mjs';

const $$Explore = createComponent(async ($$result, $$props, $$slots) => {
  const materials = await getCollection("material");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-4"> <!-- Campo de búsqueda --> <div class="relative w-full"> <input type="search" id="search-bar" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Busca cualquier tema..." required> <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-bl1 rounded-e-lg border border-bl2 hover:bg-bl2 focus:outline-none"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </div> <!--Lista de temas--> ${materials.map((material) => {
    const { slug, data } = material;
    const { subject, img, description } = data;
    return renderTemplate`${renderComponent($$result2, "CardContainer", CardContainer, {}, { "default": ($$result3) => renderTemplate` <div class="md:flex min-w-6xl"> <div class="md:shrink-0"> <img class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Imagen de ${subject}`, "alt")}> </div> <div class="p-8"> <a${addAttribute(`/quiz/${slug}`, "href")} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">${subject} </a> <p class="mt-2 text-slate-500">${description} </p> </div> </div> ` })}`;
  })} </div> ` })}`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/pages/explore.astro", void 0);

const $$file = "C:/Users/luisa/Desktop/astro-quiz/src/pages/explore.astro";
const $$url = "/explore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Explore,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
