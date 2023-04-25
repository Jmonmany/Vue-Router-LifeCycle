import Vue from "vue";
import Router from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "Page" */ "@/modules/module-A/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: "Page" */ "@/modules/module-A/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    component: () =>
      import(
        /* webpackChunkName: "Page" */ "@/modules/module-A/pages/DetailsPage"
      ),
  },
  {
    path: "*",
    component: () =>
      import(
        /* webpackChunkName: "Page" */ "@/modules/shared/pages/NoPage.vue"
      ),
  },
];

Vue.use(Router);

let router = new Router({
  routes: routes,
});

export default router;
