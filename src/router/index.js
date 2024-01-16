import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import CartView from "../views/CartView.vue";
import CartDrinksView from "../views/CartDrinksView.vue";
import FoodsDetail from "../views/FoodsDetail.vue";
import FoodDetail from "../views/FoodDetail.vue";
import DrinksView from "../views/DrinksView.vue";
import SuccessFoods from "../views/SuccessFoods.vue";
import OrderView from "../views/OrderView.vue";

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
    path: "/cartdrinks",
    name: "cartdrinks",
    component: CartDrinksView,
  },
  {
    path: "/drinks",
    name: "drinks",
    component: DrinksView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessFoods,
  },
  {
    path: "/order",
    name: "order",
    component: OrderView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
