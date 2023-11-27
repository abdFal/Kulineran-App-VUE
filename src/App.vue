<template>
  <div id="app">
    <template>
      <Toast />
    </template>
    <router-view />
  </div>
  <FooterView />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,100;0,500;0,600;0,700;1,400;1,500;1,600&display=swap");
template {
  scroll-behavior: smooth;
}
</style>

<script>
import FooterView from "./components/FooterView.vue";

export default {
  components: { FooterView },
};
</script>
