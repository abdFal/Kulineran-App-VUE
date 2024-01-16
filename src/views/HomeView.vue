<template>
  <div class="home">
    <NavigationBar />
    <div class="container">
      <h5 class="text-muted text-center display-6 pt-2">~Welcome~</h5>
      <HeroView />
      <div class="mx-auto mb-5 w-100 text-center">
        <a
          href="#food-home"
          class="btn btn-outline-success rounded-4 btn-md px-4 me-sm-3"
          ><font-awesome-icon icon="arrow-down" />
          <span class="px-3">Pesan Sekarang</span></a
        >
      </div>

      <div class="row my-2" id="food-home">
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
      .get("https://jsonkeeper.com/b/8P1Q")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style>
template {
  scroll-behavior: smooth;
}
</style>
