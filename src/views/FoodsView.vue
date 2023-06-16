<template>
  <div>
    <NavigationBar />
    <h2 class="text-center text-primary">Daftar Makanan</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "FoodsView",
  components: {
    NavigationBar,
  },
};
</script>
<style></style>
