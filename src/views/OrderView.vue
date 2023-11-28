<template>
  <NavigationBar />
  <div class="container">
    <h3 class="text-center text-succeed py-3">
      <span class="text-dark">Orderan Kamu</span>
      <p class="fs-6">
        Cari orderan kamu berdasarkan nama pembeli yang diinput
      </p>
    </h3>
    <form class="d-flex w-50 mx-auto" role="search">
      <input
        id="search"
        class="form-control me-2"
        type="search"
        placeholder="Masukkan Nama Pembeli..."
        aria-label="Search"
        @keyup="search_order"
      />
    </form>
    <div class="row">
      <div
        class="col-6 order justify-content-center"
        v-for="pesanan in pesanans"
        :key="pesanan.id"
      >
        <div class="card p-3 mx-auto my-3">
          <div class="card-title text-center">
            <h4 class="fw-bold">{{ pesanan.nama }}</h4>
            <h6 class="fw-bold">No. Meja:{{ pesanan.nomor_meja }}</h6>
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
    search_order() {
      let input = document.getElementById("search").value;
      input = input.toLowerCase();
      let x = document.getElementsByClassName("order");

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
      .get("http://localhost:3000/pesanans/")
      .then((response) => this.setPesanans(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
