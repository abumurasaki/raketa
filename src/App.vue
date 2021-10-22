<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view />
  </div>
</template>
<script>
import TheHeader from "@/components/base/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss"></style>
