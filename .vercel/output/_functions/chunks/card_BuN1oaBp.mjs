import { jsx } from 'react/jsx-runtime';
import 'react';

function CardContainer({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col p-3 place-content-center bg-white rounded-lg shadow-md border-bl2", children });
}

export { CardContainer as C };
