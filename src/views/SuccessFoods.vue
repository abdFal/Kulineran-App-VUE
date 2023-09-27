<template>
  <NavigationBar />
  <h2 class="text-center pt-5">Pesanan <strong>Sukses</strong></h2>
  <p class="text-center text-muted fs-6 display-6">
    terimakasih sudah beli di kulineran :)
  </p>
  <div class="overflow-hidden text-center">
    <div class="container px-5 mx-auto d-flex justify-content-center">
      <img
        src="../assets/img/undraw_Order_confirmed_re_g0if.png"
        class="img-fluid rounded-3 mb-4"
        alt="Example image"
        width="400"
        height="100"
        loading="lazy"
      />
    </div>
    <router-link
      to="/order"
      class="btn btn-sm pt-1 px-2 mx-auto btn-success text-light text-center"
      ><font-awesome-icon icon="eye" /> see my orders</router-link
    >
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "SuccessFoods",
  components: { NavigationBar },
};
</script>

<style></style>
