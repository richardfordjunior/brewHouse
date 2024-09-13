import VueRouter from "vue-router";
import BeerComponent from '../views/BeerComponent.vue'
import BeerDetailsComponent from '../views/BeerDetailsComponent.vue'

const router = new VueRouter({
  mode: "hash",
  routes: [
    { name: "*", path: "/", component: BeerComponent },
    {
      name: "list",
      path: "/list",
      component: BeerComponent
    },
    {
      name: "brewery_details",
      path: "/brewery_details/:id",
      component: BeerDetailsComponent
    },
  ],
});

export default router;