<template>
  <div>
    <NavigationBar />
    <div class="container">
      <h2 class="text-center text-succeed py-3">
        <span class="text-dark">Semua</span> Makanan
      </h2>
      <form class="d-flex" role="search">
        <input
          id="search"
          class="form-control me-2"
          type="search"
          placeholder="Cari Makanan..."
          aria-label="Search"
          @keyup="search_food"
        />
      </form>
      <div class="row">
        <div
          class="col-3 my-4 food"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct
            class="border border-1 shadow shadow-lg rounded"
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
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavigationBar,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data.filter((product) => product.is_ready);
    },
    search_food() {
      let input = document.getElementById("search").value;
      input = input.toLowerCase();
      let x = document.getElementsByClassName("food");

      for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
        } else {
          x[i].style.display = "block";
        }
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
