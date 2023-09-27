<template>
  <NavigationBar />
  <div class="container">
    <h3 class="text-center text-succeed py-3">
      <span class="text-dark">Orderan</span> Kamu
    </h3>
    <div
      class="d-flex orderan justify-content-center"
      v-for="pesanan in pesanans"
      :key="pesanan.id"
    >
      <div class="col">
        <div class="card p-3">
          <div class="card-title">
            <h4 class="fw-bold">{{ pesanan.nama }}</h4>
          </div>
          <div class="card-body">
            <ul>
              <li v-for="item in pesanan.keranjangs" :key="item.id">
                <p class="lead">{{ item.products.nama }}</p>
                <p class="lead">{{ item.products.harga }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "OrderView",
  components: { NavigationBar },

  data() {
    return {
      pesanans: {},
    };
  },
  methods: {
    setPesanans(data) {
      this.pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pesanans/")
      .then((response) => this.setPesanans(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
