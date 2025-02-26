import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DnJ1bA7O.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C4saPIw9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_9Pobnkij.mjs';
import { S as SectionCard } from '../../chunks/sectionCard_CBCAf9lu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const materials = await getCollection("material");
  return materials.map((material) => ({
    params: { id: material.slug },
    props: { material }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { material } = Astro2.props;
  const { data, slug } = material;
  const { subject, img } = data;
  const response = await fetch(`${Astro2.url.origin}/api/question/${slug}.json`);
  const { questions } = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${subject} | Quiz` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "SectionCard", SectionCard, { "title": subject, "img": img })}  ${maybeRenderHead()}<div class="bg-gray-800 rounded-lg p-6 shadow-md mt-6"> <h2 class="text-2xl font-semibold text-white mb-4">Prueba tus conocimientos</h2> ${renderComponent($$result2, "QuizSession", null, { "client:only": "react", "materialId": slug, "questions": questions, "timeLimit": 300, "client:component-hydration": "only", "client:component-path": "C:/Users/luisa/Desktop/astro-quiz/src/components/quizSession", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/luisa/Desktop/astro-quiz/src/pages/quiz/[id].astro", void 0);

const $$file = "C:/Users/luisa/Desktop/astro-quiz/src/pages/quiz/[id].astro";
const $$url = "/quiz/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
