<template>
  <NavigationBar />
  <div class="details" style="height: 75vh">
    <div class="container">
      <div>
        <nav
          class="mt-3"
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-succeed">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods" class="text-succeed">Foods</router-link>
            </li>
            <li class="breadcrumb-item active fw-bold" aria-current="page">
              Detail
            </li>
          </ol>
        </nav>
      </div>

      <h5 class="text-muted">
        <font-awesome-icon icon="cart-shopping" /> Beli Makanan
      </h5>

      <div class="row">
        <div class="col-6 col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            alt=""
            class="img-detail rounded rounded-3 w-100"
          />
          <small class="text-muted">*maaf blur karena bug</small>
        </div>
        <div class="col-md-6">
          <h1 class="fw-bold">{{ product.nama }}</h1>
          <h6 class="fw-bold text-muted">Rp. {{ product.harga }}</h6>
          <hr />
          <p class="fs-6 display-6">{{ product.deskripsi }}</p>
          <router-link class="btn btn-md btn-outline-succeed" to="/cart">
            + Pesan Sekarang</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import axios from "axios";

export default {
  name: "FoodsDetail",
  components: { NavigationBar },

  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best_products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
