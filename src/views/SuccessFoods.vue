<template>
  <NavigationBar />
  <h2 class="text-center py-3">Pesanan <strong>Sukses</strong></h2>
  <div class="overflow-hidden">
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
