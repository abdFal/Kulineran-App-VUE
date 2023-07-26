<template>
  <div>
    <NavigationBar />
    <div class="container">
      <nav
        class="mt-3"
        style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-succeed">Home</router-link>
          </li>
          <li class="breadcrumb-item active fw-bold" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col">
          <h3 class="my-3">Keranjang <strong>Saya</strong></h3>
          <div class="text-start">
            <div
              class="row d-flex align-items-center justify-content-between card-body border border-bottom w-100"
              v-for="keranjang in keranjangs"
              :key="keranjang.id"
            >
              <img
                :src="'../assets/images/' + keranjang.products.gambar"
                alt=""
                class="img-detail rounded rounded-3"
                width="170"
              />
              <h5 class="col-2 card-title">{{ keranjang.products.nama }}</h5>
              <p class="col-2 card-text text-muted">{{ keranjang.catatan }}</p>
              <p class="col-1 card-text">Qty: {{ keranjang.jumlah_pesanan }}</p>
              <p class="col-2 card-text">
                Total: {{ keranjang.products.harga * keranjang.jumlah_pesanan }}
              </p>
              <router-link to="/foods" class="col-1 btn btn-sm btn-success mx-1"
                >Nambah Lagi</router-link
              >
              <button
                type="submit"
                @click="deleteItem(keranjang.id)"
                class="col-1 btn btn-sm btn-danger mx-1"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card py-3 px-3 my-3 text-start w-50 mx-auto">
        <form @submit="submitCheckout">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama Pemesan:</label>
            <input
              type="text"
              id="nama"
              class="form-control"
              v-model="nama"
              required
            />
          </div>
          <div class="mb-3">
            <label for="nomor_meja" class="form-label">Nomor Meja:</label>
            <input
              type="number"
              id="nomor_meja"
              class="form-control"
              v-model="nomor_meja"
              required
            />
          </div>
          <button type="submit" class="btn btn-md btn-primary text-center">
            Bayar Sekarang (Rp. {{ totalPrice }})
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import axios from "axios";

export default {
  name: "CartView",
  components: {
    NavigationBar,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    deleteItem(itemId) {
      axios
        .delete(`http://localhost:3000/keranjangs/${itemId}`)
        .then(() => {
          this.keranjangs = this.keranjangs.filter(
            (item) => item.id !== itemId
          );
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    totalPrice() {
      return this.keranjangs.reduce((total, keranjang) => {
        return total + keranjang.products.harga * keranjang.jumlah_pesanan;
      }, 0);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
