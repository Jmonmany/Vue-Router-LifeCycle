import Vue from "vue";
import Router from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "@/modules/module-A/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/module-A/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "@/modules/module-A/pages/AboutPage"
          ),
      },
      {
        path: "pokemon/:id",
        name: "pokemon-id",
        // since we are working with the name of the route on Navbar.vue :to,
        // we can change the path and will still work
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "@/modules/module-A/pages/PokemonPage"
          ),
        props: (route) => {
          const { id } = route.params;
          return isNaN(+id) ? { id: 1 } : { id: +id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about"}
      },
    ],
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "ListPage" */ "@/modules/module-A/pages/ListPage"
  //     ),
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "AboutPage" */ "@/modules/module-A/pages/AboutPage"
  //     ),
  // },
  // {
  //   path: "/pokemon/:id",
  //   name: "pokemon-id",
  //   // since we are working with the name of the route on Navbar.vue :to,
  //   // we can change the path and will still work
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "PokemonPage" */ "@/modules/module-A/pages/PokemonPage"
  //     ),
  //   props: (route) => {
  //     const { id } = route.params;
  //     return isNaN(+id) ? { id: 1 } : { id: +id };
  //   },
  // },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NoPage" */ "@/modules/shared/pages/NoPage.vue"
      ),
  },
];

Vue.use(Router);

let router = new Router({
  routes: routes,
});

export default router;
