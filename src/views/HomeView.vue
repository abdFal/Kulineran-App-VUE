<template>
  <div class="home">
    <NavigationBar />
    <h2 class="text-center text-secondary">Home</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
  },
};
</script>
