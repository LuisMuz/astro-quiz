import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DnJ1bA7O.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_9Pobnkij.mjs';
import { C as CardContainer } from '../chunks/card_BuN1oaBp.mjs';
import { S as SectionCard } from '../chunks/sectionCard_CBCAf9lu.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { g as getCollection } from '../chunks/_astro_content_C4saPIw9.mjs';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const materials = await getCollection("material");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-10"> <img class="w-full h-64 rounded-lg object-cover" src="https://images.pexels.com/photos/4167539/pexels-photo-4167539.jpeg" alt="Landing image"> <div class="relative -mt-20 px-16"> <!--Header que muestra pregunta--> ${renderComponent($$result2, "Card", Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-5"> <h4 class="font-semibold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out
                        inline-block mb-2">
Pregunta del día</h4> <p class="text-gray-500 text-sm">
Pregunta diaria
</p> <p class="mt-5 text-gray-600 text-xs">
Piensa la respuesta...
</p> </div> ` })} </div> <!--Seccion para recomendar--> ${renderComponent($$result2, "CardContainer", CardContainer, {}, { "default": ($$result3) => renderTemplate` <div class="title-grad">Temas populares</div> <div class="flex overflow-x-scroll gap-5 w-full rounded-lg py-4"> ${materials.map((material) => {
    const { slug, data } = material;
    const { subject, img } = data;
    return renderTemplate`<a${addAttribute(`/quiz/${slug}`, "href")}> ${renderComponent($$result3, "SectionCard", SectionCard, { "title": subject, "img": img })} </a>`;
  })} </div> ` })} </div> ` })}`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/pages/index.astro", void 0);

const $$file = "C:/Users/luisa/Desktop/astro-quiz/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
