import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "hash",
  routes: [
    { name: "*", path: "/", component: () => "../views/BeerComponent.vue" },
    {
      name: "list",
      path: "/list",
      component: () => "../views/BeerComponent.vue",
    },
    {
      name: "brewery_details",
      path: "/brewery_details/:id",
      component: () => "../views/BeerDetailsComponent.vue",
    },
  ],
});

export default router;
