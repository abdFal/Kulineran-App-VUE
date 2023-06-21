<template>
  <div class="card">
    <img :src="'assets/images/' + product.gambar" alt="" class="card-img-top" />
    <div class="card-body">
      <div class="body-atas">
        <h4 class="card-title">
          {{ product.nama }}
        </h4>
      </div>
      <p>{{ limitCharacters(product.deskripsi, 75) }}</p>
      <p class="text-muted fs-6 display-6">Rp. {{ product.harga }}</p>
      <router-link
        :to="getDetailRoute(product)"
        href=""
        class="btn btn-md btn-outline-success"
      >
        Detail Makanan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    limitCharacters(value, maxLength) {
      if (value.length > maxLength) {
        return value.slice(0, maxLength) + "...";
      }
      return value;
    },
    getDetailRoute(product) {
      if (product.is_best) {
        return "/best_foods/" + product.id;
      } else {
        return "/foods/" + product.id;
      }
    },
  },
};
</script>

<style></style>
