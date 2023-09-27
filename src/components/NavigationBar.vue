<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom mb-2">
    <div class="container-fluid">
      <h3 class="display-6 mx-3 text-success" id="Logo-App" href="">
        <font-awesome-icon icon="utensils" /> Kulineran
      </h3>
      <button
        class="navbar-toggler bg-success"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><font-awesome-icon icon="list" class="mt-1 text-light"
        /></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link fw-light text-secondary"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/foods" class="nav-link fw-light text-secondary"
              >Foods</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/drinks" class="nav-link fw-light text-secondary"
              >Drinks</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/cart"
              class="nav-link fw-light text-warning keranjang"
            >
              Keranjang <font-awesome-icon icon="bag-shopping" /> ({{
                jumlah_pesanan.length
              }})
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/order" class="nav-link fw-light text-succeed"
              >My order <font-awesome-icon icon="clock-rotate-left"
            /></router-link>
          </li>
        </ul>
        <div class="quotes">
          <p class="text-muted my-auto">
            <font-awesome-icon icon="cloud" /> Solusi Orang Laper tp mager
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavigationBar",
  data() {
    return {
      jumlah_pesanan: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanan = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style>
* {
  font-family: "Cabin";
}
</style>
