import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import CartView from "../views/CartView.vue";
import FoodsDetail from "../views/FoodsDetail.vue";
import FoodDetail from "../views/FoodDetail.vue";
import DrinksView from "../views/DrinksView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods",
    component: FoodsView,
  },
  {
    path: "/foods/:id",
    name: "foodsDetail",
    component: FoodsDetail,
  },
  {
    path: "/food/:id",
    name: "foodDetail",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/drinks",
    name: "drinks",
    component: DrinksView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
