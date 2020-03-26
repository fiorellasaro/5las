<template>
  <div>
    <bounce-loader
      class="fixed ml-35"
      :color="color"
      :size="size"
    ></bounce-loader>
    <img class="absolute mt-34" src="../assets/icons/logo-white.png" />
  </div>
</template>
<script>
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
export default {
  data() {
    return {
      color: "#ffffff",
      size: "240px",
      margin: "2px",
      radius: "2px"
    };
  },
  components: {
    BounceLoader
  }
};
</script>
<style>
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.ml-35 {
  margin-left: -35px;
}
.mt-34 {
  margin-top: 34px;
}
</style>
