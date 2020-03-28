<template>
  <div class="bg-red full">
    <Row type="flex" justify="space-around" align="middle">
      <Col :xs="12" :sm="4" :md="4" :lg="3">
        <Logo class="mt-50"></Logo>
      </Col>
    </Row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Row type="flex" justify="space-around" align="bottom">
      <Col :xs="22" :sm="14" :md="6" :lg="4">
        <Button class="mt-50 f-mont" @click="start">EMPECEMOS</Button>
      </Col>
    </Row>
    <br />
    <br />
    <Row type="flex" justify="center" align="bottom">
        <p class="f-white semi-bold f-mont">#YoMeQuedoEnCasa</p>
    </Row>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  methods: {
    start() {
      this.$router.push({ path: "login" });
    }
    // start = () => {

    // }
  },
  head() {
    return {
      link: [
        {
          href:
            "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  }
};
</script>
<style>
@import "../assets/style.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap");

.f-mont {
  font-family: "Montserrat" !important;
}
</style>
