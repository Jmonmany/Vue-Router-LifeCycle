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
    name: "Details",
    component: () =>
      import(
        /* webpackChunkName: "Page" */ "@/modules/module-A/pages/DetailsPage"
      ),
    props: (route) => {
      const { id } = route.params;
      return isNaN(+id) ? { id: 1 } : { id: +id };
    },
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
