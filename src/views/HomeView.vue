<template>
  <div class="home">
    <NavigationBar />
    <h6 class="text-center fs-4 mt-4 text-secondary display-6">
      Welcome To Kulineran!
    </h6>
    <HeroView />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import HeroView from "@/components/HeroView.vue";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeroView,
  },
};
</script>
