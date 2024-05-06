/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead, k as renderSlot, l as Fragment, s as spreadAttributes } from '../astro_hKDkuQ2e.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia"
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:enzosoliz95@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} <!-- <ThemeToggle /> --> </nav> </header>  `;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/enzo-soliz/" target="_blank" rel="noopener" class="hover:underline">EnzoSz™</a>. Todos los derechos reservados.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"> <li> <a href="#" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a href="mailto:enzo.soliz95@gmail" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Footer.astro", void 0);

const $$Astro$k = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$j = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="../../public/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$i = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${className} w-full lg:w-[740px] mx-auto pb-24`, "class")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$h = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/LinkInline.astro", void 0);

const $$Astro$g = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, date, description, company, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-200/90 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-200/90">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPEERIENCE = [
    {
      date: "Marzo 2024 - Actualidad",
      title: "Desarrollador Backend",
      description: "Desarrollo de una aplicaci\xF3n web de SaaS de facturaci\xF3n realizado en el marco de una simulaci\xF3n laboral de No-Country,"
    },
    {
      date: "Septiembre 2023 - Abril 2024",
      title: "Desarrollador Web Full Stack",
      description: "Proyecto integrador realizado en el marco de Digital House.Desarrollo de una aplicaci\xF3n web."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPEERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Experience.astro", void 0);

const $$Astro$f = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Briefcase.astro", void 0);

const $$Astro$e = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Code.astro", void 0);

const $$Astro$d = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48"> <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Html.astro", void 0);

const $$Astro$c = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48"> <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Css.astro", void 0);

const $$Astro$b = createAstro();
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 48 48"> <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Javascript.astro", void 0);

const $$Astro$a = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40"> <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/React.astro", void 0);

const $$Astro$9 = createAstro();
const $$Node = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Node.astro", void 0);

const $$Astro$8 = createAstro();
const $$Express = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Express;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Express.astro", void 0);

const $$Astro$7 = createAstro();
const $$Mysql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Mysql;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Mysql.astro", void 0);

const $$Astro$6 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${href && renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/LinkButton.astro", void 0);

const $$Astro$5 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Link.astro", void 0);

const $$Astro$4 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/GitHub.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    HTML: {
      name: "HTML",
      icon: $$Html,
      class: "bg-[#003159] text-white"
    },
    CSS: {
      name: "CSS",
      icon: $$Css,
      class: "bg-[#003159] text-white"
    },
    JAVASCRIPT: {
      name: "Javascript",
      icon: $$Javascript,
      class: "bg-[#003159] text-white"
    },
    REACT: {
      name: "React",
      icon: $$React,
      class: "bg-[#003159] text-white"
    },
    NODE: {
      name: "Node.js",
      icon: $$Node,
      class: "bg-[#003159] text-white"
    },
    EXPRESS: {
      name: "Express",
      icon: $$Express,
      class: "bg-[#003159] text-white"
    },
    MYSQL: {
      name: "MySQL",
      icon: $$Mysql,
      class: "bg-[#003159] text-white"
    }
  };
  const PROJECTS = [
    {
      title: "Ifac App",
      description: "Actualmente en desarrollo, este proyecto es una aplicaci\xF3n web dise\xF1ada para la administraci\xF3n eficiente de facturas. Con un enfoque en la automatizaci\xF3n de procesos y la simplificaci\xF3n de tareas administrativas",
      link: "https://ifac.vercel.app/",
      github: "https://github.com/No-Country/C17-O7-M-node-react",
      image: "../../public/img/projects/ifac.jpg",
      tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.NODE, TAGS.EXPRESS, TAGS.MYSQL]
    },
    {
      title: "Homies App",
      description: "Proyecto en desarrollo: Una aplicaci\xF3n web dedicada a la venta de ropa que busca ofrecer una experiencia de compra intuitiva y atractiva. Con una interfaz amigable, estamos trabajando para brindar una experiencia de compra conveniente para los usuarios. \xA1Est\xE9n atentos para m\xE1s actualizaciones!",
      link: "#",
      github: "https://github.com/EnzoSz/Grupo_14_Tienda_Ropa",
      image: "../../public/img/projects/Homies.jpg",
      tags: [
        TAGS.JAVASCRIPT,
        TAGS.HTML,
        TAGS.CSS,
        TAGS.NODE,
        TAGS.EXPRESS,
        TAGS.MYSQL
      ]
    },
    {
      title: "Batatabit",
      description: "Landing page dise\xF1ada para una aplicaci\xF3n de divisas, que ofrece una experiencia visualmente atractiva y moderna para los visitantes",
      link: "https://enzosz.github.io/Mobile-First/",
      github: "https://github.com/EnzoSz/Mobile-First",
      image: "../../public/img/projects/Batatabit.jpg",
      tags: [TAGS.HTML, TAGS.CSS]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ title, description, link, github, image, tags }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8  group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img${addAttribute(title, "alt")} class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row flex-wrap mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li class="mb-2"> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400"> ${description} </div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Projects.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Badge.astro", void 0);

const $$Astro$3 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Mail.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pdf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pdf;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M17 18h2"></path><path d="M20 15h-3v6"></path><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/Pdf.astro", void 0);

const $$Astro$1 = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener" role="link" class="bg-white/5 border border-white/10 rounded-full
  flex items-center justify-center gap-x-2
  py-1 px-2 md:py-2 md:px-4
  text-xs md:text-base
  transition
  hover:scale-110 hover:bg-white/10"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/SocialPill.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Avatar de Enzo Soliz";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4 flex-row"> <img class="rounded-full shadow-lg size-32 mb-10" src="../../public/img/avatar.jpg"${addAttribute(personalImageAlt, "alt")}> <a href="https://www.linkedin.com/in/enzo-soliz/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, soy Enzo Soliz
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300"> <span class="text-yellow-200/90">Desarrollador de software con enfoque en el backend,</span> <span class="opacity-80">y estudiante de Ingeniería en Sistemas.</span>
Con habilidades en el diseño y desarrollo de aplicaciones únicas,
<span class="opacity-80">mi enfoque está en aprender de manera activa y contribuir al crecimiento
      de proyectos desafiantes.</span> </p> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/enzo-soliz/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedIn", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://github.com/EnzoSz" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:enzosoliz95@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Mail", $$Mail, { "class": "size-4 md:size-6" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "../../public/docs/ENZO-SOLIZ-CV.pdf", "download": "ENZO-SOLIZ-CV.pdf" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pdf", $$Pdf, { "class": "size-4 md:size-6" })}
Descargar CV
` })} </nav> </div> <!-- 
    <img
        class="rounded-full size-40 mb-10"
        src="../../public/img/avatar.jpg"
        alt=""
      />
      <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
        Hey, soy Enzo. <a
          href="https://www.linkedin.com/in/enzo-soliz/"
          target="_blank"
          rel="noopener"
          class="flex justify-center items-center"
          ><Badge>Disponible para trabajar</Badge></a
        >
      </h1>
      <h2 class="text-xl lg:text-2xl text-wrap max-w[700px]">
        <span class="text-yellow-200/90"
          >Desarrollador de software con enfoque en el backend,</span
        >
        <span class="opacity-80">y estudiante de Ingeniería en Sistemas.</span>
        Con habilidades en el diseño y desarrollo de aplicaciones únicas,
        <span class="opacity-80"
          >mi enfoque está en aprender de manera activa y contribuir al
          crecimiento de proyectos desafiantes.</span
        >
      </h2>
      <nav class="flex gap-4 mt-8 flex-wrap">
        <SocialPill href="https://www.linkedin.com/in/enzo-soliz/">
          <LinkedIn class="size-4 md:size-6" />
          LinkedIn
        </SocialPill>
        <SocialPill href="https://github.com/EnzoSz">
          <GitHub class="size-4 md:size-6" />
          GitHub
        </SocialPill>
        <SocialPill href="mailto:enzosoliz95@gmail.com">
          <Mail class="size-4 md:size-6" />
          Contáctame
        </SocialPill>
      </nav>
 -->`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/icons/ProfileCheck.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Enzo. Mis primeros pasos en la
      programación fueron en 2018. Actualmente estoy <strong>trabajando en éste mundo, en proyectos personales</strong>.
</p> <p>
Me encuentro en la busqueda de nuevos desafíos <strong>en éste maravilloso mundo.</strong> </p></div> <img width="200" height="310" src="../../public/img/foto-perfil.jpg"${addAttribute(personalImageAlt, "alt")} class="border-1 object-cover w-64 h-[310px] p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

<p>
  Mi sueño es encontrar mi primer empleo en el mundo de la programación. Una empresa donde pueda seguir aprendiendo. ❌
</p>

<p>
  ❌ Apasionado de la programación desde chekitito. Me encantan los ordenadores y crear páginas web buenas y rápidas con la última tecnología.
</p>

<p>
  Trabajo bien en equipo. Siempre estoy aprendiendo cosas nuevas.
</p>

-------------------------------------

--------------------------------------

<p>
  ¡Soy Leo! Estudié Derecho Empresarial y, tras años ejerciendo, me pasé al mundo de la Programación. Desde entonces disfruto creando experiencias web para los usuarios.
</p>

<p>
  Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis compañeros a aprender sobre TDD. Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.
</p>

<p>
  Cuento con experiencia desarrollando aplicaciones móviles, y he creado una iniciativa llamada X para mezclar mis dos pasiones: la programación y el derecho. Ayudando a la sociedad a acceso a una defensa justa.
</p>

---------------------------------------

<p>Me llamo Sara, tengo 25 años y soy de Santiago, Chile 🇨🇱. Terminé mis estudios como Desarrolladora Web. Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejora experiencia al usuario.</p>

<p>
  Colaboro en la organización del MeetUp local BeerJS donde reunimos a desarrolladores de Santiago para compartir conocimiento y experiencias. El año 2023 hicimos un total de 25 charlas con más de 2000 asistentes.
</p>

<p>
  Además de participar activamente en la comunidad, he participado en la Hackathon de Midudev quedando en 3er puesto con mi proyecto _Chatty_, donde usando IA podías interactuar con un PDF. ¡Échale un vistazo!
</p>

-->`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/components/AboutMe.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio de Enzo Soliz - Desarrollador y programador de software", "description": "Contrata a Enzo Soliz para trabajar en tu proyecto de software. Enviame un correo para trabajar conmigo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {}, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia Laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Code", $$Code, { "class": "size-8" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/enzos/OneDrive/Proyectos/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
