<template>
  <div class="px-4 pt-1 mb-5 mt-1 text-center border-0">
    <h1 class="display-5 fw-bold text-body-emphasis">
      <strong>Delicious Foods, </strong
      ><span class="text-dark">on your gadget</span>
    </h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Ayo Pesan Makanan Favorit Anda Dengan Mudah</p>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        <img
          src="../assets/img/Hero-Img.png"
          class="img-fluid rounded-3 mb-4"
          alt="Example image"
          width="600"
          height="400"
          loading="lazy"
        />
      </div>
      <div class="mx-auto mb-5">
        <router-link
          to="/foods"
          class="btn btn-outline-success rounded-4 btn-lg px-4 me-sm-3"
          ><font-awesome-icon icon="arrow-right" />
          <span class="px-3">Pesan Sekarang</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style></style>
