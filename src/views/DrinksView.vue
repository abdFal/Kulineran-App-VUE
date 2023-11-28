<template>
  <div>
    <NavigationBar />
    <div class="container">
      <h2 class="text-center text-succeed py-3">
        <span class="text-dark">Semua</span> Minuman
      </h2>
      <div class="row">
        <div class="col-3 my-4 food" v-for="drink in drinks" :key="drink.id">
          <div class="card">
            <img
              :src="'assets/images/' + drink.gambar"
              alt=""
              class="card-img-top"
            />
            <div class="card-body">
              <div class="body-atas">
                <h4 class="card-title">
                  {{ drink.nama }}
                </h4>
              </div>
              <p>{{ drink.deskripsi }}</p>
              <p class="text-muted fs-6 display-6">Rp. {{ drink.harga }}</p>
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <font-awesome-icon icon="plus-square" /> Tambahkan Minuman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Tambah Minuman
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger btn-sm"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button type="button" class="btn btn-md btn-outline-succeed">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import axios from "axios";
export default {
  name: "DrinksView",
  components: {
    NavigationBar,
  },
  data() {
    return {
      drinks: [],
    };
  },
  methods: {
    setProducts(data) {
      this.drinks = data.filter((drinks) => drinks.is_ready);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/drinks")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
