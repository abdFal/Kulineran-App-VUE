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
          <div class="d-flex justify-content-between align-items-center my-3">
            <div>
              <h3>Keranjang <strong>Saya</strong></h3>
            </div>
            <div>
              <router-link to="/order" class="btn btn-primary py-1 px-2 btn-sm"
                >Merasa Sudah Pesan?</router-link
              >
            </div>
          </div>
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
        <h2 class="display-6 mx-auto text-success" id="Logo-App" href="">
          <font-awesome-icon icon="utensils" /> Kulineran
        </h2>
        <form @submit="submitCheckout" v-on="SubmitEvent">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama Pemesan:</label>
            <input
              type="text"
              id="nama"
              class="form-control"
              v-model="pesan.nama"
              required
            />
          </div>
          <div class="mb-3">
            <label for="nomor_meja" class="form-label">Nomor Meja:</label>
            <input
              type="number"
              id="nomor_meja"
              class="form-control"
              v-model="pesan.nomor_meja"
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
      pesan: {},
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
    submitCheckout() {
      if (this.pesan.nama && this.pesan.nomor_meja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            this.keranjangs.map(function (item) {
              return axios.delete(
                "http://localhost:3000/keranjangs/" + item.id
              );
            });
          })
          .catch((error) => console.log(error));
        window.alert("Berhasil Checkout");
        this.$router.push({ path: "/success" });
      }
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
