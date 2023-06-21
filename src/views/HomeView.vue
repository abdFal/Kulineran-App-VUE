<template>
  <div class="home">
    <NavigationBar />
    <div class="container">
      <h5 class="text-muted text-center display-6 pt-2">~Welcome~</h5>
      <HeroView />

      <div class="row my-2">
        <div class="col">
          <h2 class="fw-semibold">
            Best
            <strong
              >Foods
              <font-awesome-icon icon="fa-star" style="color: rgb(195, 255, 0)"
            /></strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            ><font-awesome-icon icon="eye" /> Lihat Semua Makanan</router-link
          >
        </div>
      </div>
      <hr />

      <div class="row my-4 gap-1">
        <div
          class="col-3 my-4"
          v-for="product in best_products"
          :key="product.id"
        >
          <CardProduct
            class="border border-1 shadow shadow-sm rounded"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import HeroView from "@/components/HeroView.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeroView,
    CardProduct,
  },
  data() {
    return {
      best_products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.best_products = data.filter((product) => product.is_ready);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best_products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
