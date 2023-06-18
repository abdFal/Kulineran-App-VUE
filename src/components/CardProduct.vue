<template>
  <div class="card">
    <img :src="'assets/images/' + product.gambar" alt="" class="card-img-top" />
    <div class="card-body">
      <h4 class="card-title">{{ product.nama }}</h4>
      <p>{{ product.deskripsi }}</p>
      <p class="text-muted fs-6 display-6">Rp. {{ product.harga }}</p>
      <a href="" class="btn btn-md btn-outline-success"> + Add To Cart</a>
    </div>
  </div>
</template>

<script>
export default { name: "CardProduct", props: ["product"] };
</script>

<style></style>
