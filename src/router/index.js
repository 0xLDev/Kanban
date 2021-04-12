import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

export const pages = {
  BOARDS: "boards",
  COLUMNS: "columns",
  CARD: "card",
};

const routes = [
  { name: pages.BOARDS, path: "/" },
  { name: pages.COLUMNS, path: "/board/:boardId" },
  { name: pages.CARD, path: "/card/:cardId" },
];

export const initialize = () => {
  const router = createRouter(routes, { defaultRoute: pages.BOARDS });

  router.usePlugin(browserPlugin());

  router.start();

  return router;
};
