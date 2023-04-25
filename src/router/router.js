import Vue from "vue";
import Router from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

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
        redirect: { name: "pokemon-about" },
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
    path: "/dbz",
    beforeEnter: isAuthenticatedGuard,
    // beforeEnter means that the guard will be executed before the component is loaded
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ "@/modules/module-B/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "@/modules/module-B/pages/CharactersPage"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage" */ "@/modules/module-B/pages/AboutPage"
          ),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },
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

//Guard Global - Sync

// router.beforeEach((to, from, next) => {
//   // Guard random global
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("liberado por el beforeEach guard: ", random);
//     next();
//   } else {
//     console.log("bloqueado por el beforeEach guard: ", random);
//     next({ name: "pokemon-home" });
//   }
// });

// Guard Global - Async

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("authenticated: ", random);
//       resolve(true);
//     } else {
//       console.log("not authenticated: ", random);
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
