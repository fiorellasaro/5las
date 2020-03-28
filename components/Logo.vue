<template>
  <div class="login-logo">
    <bounce-loader
      class="fixed"
      :color="color"
      :size="size"
    ></bounce-loader>
    <img class="absolute " src="../assets/icons/logo-white.png" />
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
  z-index: 3;
}

.login-logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
