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
              <h3>Keranjang Minuman <strong>Saya</strong></h3>
            </div>
            <div>
              <router-link to="/order" class="btn btn-primary py-1 px-2 btn-sm"
                >Merasa Sudah Pesan?</router-link
              >
            </div>
          </div>
          <div class="d-flex text-center">
            <div
              class="row d-flex justify-content-center card-body border m-2 w-25 p-3"
              v-for="keranjang in keranjangs_minuman"
              :key="keranjang.id"
            >
              <div>
                <img
                  :src="'../assets/images/' + keranjang.drinks.gambar"
                  alt=""
                  class="img rounded rounded-3"
                  width="230"
                />
                <h5 class="card-title">{{ keranjang.drinks.nama }}</h5>
                <p class="card-text">Total: {{ keranjang.drinks.harga }}</p>
              </div>
              <div>
                <router-link to="/drinks" class="btn btn-sm btn-success mx-1"
                  >Nambah Lagi</router-link
                >
                <button
                  type="submit"
                  @click="deleteItem(keranjang.id)"
                  class="btn btn-sm btn-danger mx-1"
                >
                  Hapus
                </button>
              </div>
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
  name: "CartDrinksView",
  components: {
    NavigationBar,
  },
  data() {
    return {
      keranjangs_minuman: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs_minuman = data;
    },
    deleteItem(itemId) {
      axios
        .delete(`http://localhost:3000/keranjangs_minuman/${itemId}`)
        .then(() => {
          this.keranjangs_minuman = this.keranjangs_minuman.filter(
            (item) => item.id !== itemId
          );
        })
        .catch((error) => console.log(error));
    },
    submitCheckout() {
      if (
        this.pesan.nama &&
        this.pesan.nomor_meja &&
        this.keranjangs_minuman.length !== 0
      ) {
        this.pesan.keranjangs_minuman = this.keranjangs_minuman;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            this.keranjangs_minuman.map(function (item) {
              return axios.delete(
                "http://localhost:3000/keranjangs_minuman/" + item.id
              );
            });
          })
          .catch((error) => console.log(error));
        this.$toast.success("berhasil bayar!");
        this.$router.push({ path: "/success" });
      } else {
        this.$toast.error("Data masih belum lengkap!", { position: "bottom" });
      }
    },
  },
  computed: {
    totalPrice() {
      return this.keranjangs_minuman.reduce((total, keranjang) => {
        return total + keranjang.drinks.harga * keranjang.jumlah_pesanan;
      }, 0);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs_minuman/")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
