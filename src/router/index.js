import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

export const pages = {
  BOARDS: "boards",
  COLUMNS: "columns",
};

const routes = [
  { name: pages.BOARDS, path: "/" },
  { name: pages.COLUMNS, path: "/board/:boardId" },
];

export const initialize = () => {
  const router = createRouter(routes, { defaultRoute: pages.BOARDS });

  router.usePlugin(browserPlugin());

  router.start();

  return router;
};
