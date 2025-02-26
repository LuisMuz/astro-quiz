import { jsxs, jsx } from 'react/jsx-runtime';

function SectionCard({ title, img }) {
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-6xl min-w-72",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: img,
            alt: "image",
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" }),
        /* @__PURE__ */ jsx("h3", { className: "z-10 mt-3 text-3xl font-bold text-white", children: title })
      ]
    }
  );
}

export { SectionCard as S };
