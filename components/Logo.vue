<template>
  <div class="login-logo">
    <bounce-loader
      class="static"
      :color="color"
      :size="size"
    ></bounce-loader>
    <img class="z-index-3" src="../assets/icons/logo-white.png" />
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
.static {
  position: static;
  float: left;
}
.z-index-3 {
  z-index: 3;
  position: absolute;
}

.login-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
