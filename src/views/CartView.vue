<template>
  <div>
    <NavigationBar />
    <h2 class="text-center text-warning">Keranjang</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "CartView",
  components: {
    NavigationBar,
  },
};
</script>
<style></style>
