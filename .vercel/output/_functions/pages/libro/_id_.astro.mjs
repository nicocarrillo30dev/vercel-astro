/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_nEQDGU0K.mjs';
import { r as renderEntry, $ as $$Layout } from '../../chunks/Layout_YnFxW70q.mjs';
import $$BookScore from '../../chunks/BookScore_BxhtNcxo.mjs';
import $$BuyButton from '../../chunks/BuyButton_sfQLJXN3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { book } = Astro2.props;
  const { data, slug } = book;
  const { title, author, img, readtime, description, buy } = data;
  const { Content } = await renderEntry(book);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} - Dev Books` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-12"> <aside class="flex flex-col items-center gap-4"> <a href="/" class="hover:underline opacity-70">← Volver atrás</a> <img class="rounded w-72 h-auto"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "sjcdew3a", "", `img-${slug}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "BookScore", $$BookScore, { "server:defer": true, "id": slug, "server:component-directive": "defer", "server:component-path": "/Users/nicolascarrillo/Desktop/astro-5-dev-books/src/components/BookScore.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<span class="text-xs opacity-70">Cargando puntuación...</span>` })} ${renderTemplate`${renderComponent($$result2, "BuyButton", $$BuyButton, { "server:defer": true, "buy": buy, "server:component-directive": "defer", "server:component-path": "/Users/nicolascarrillo/Desktop/astro-5-dev-books/src/components/BuyButton.astro", "server:component-export": "default" })}`} </aside> <main class="max-w-3xl"> <h1 class="text-4xl font-bold mb-4"${addAttribute(renderTransition($$result2, "zgdvybz6", "", `title-${slug}`), "data-astro-transition-scope")}> ${title} </h1> <div class="prose prose-invert"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> </div> ` })}`;
}, "/Users/nicolascarrillo/Desktop/astro-5-dev-books/src/pages/libro/[id].astro", "self");

const $$file = "/Users/nicolascarrillo/Desktop/astro-5-dev-books/src/pages/libro/[id].astro";
const $$url = "/libro/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
