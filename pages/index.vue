<template>
  <div class="bg-red full">
    <Row type="flex" justify="space-around" align="middle">
      <Col :xs="11" :sm="4" :md="4" :lg="3">
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
    <br />
    <br />
    <br />
    <Row type="flex" justify="space-around" align="bottom">
      <Col :xs="16" :sm="14" :md="6" :lg="4">
        <Button class="mt-50" @click="start">EMPECEMOS</Button>
      </Col>
    </Row>
    <br />
    <br />
    <Row type="flex" justify="center" align="bottom">
      <Col :xs="16" :sm="14" :md="6" :lg="4">
        <p class="f-white ml-4 semi-bold">#YoMeQuedoEnCasa</p>
      </Col>
    </Row>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  methods:{
    start(){
      this.$router.push({ path: route })
    }
    // start = () => {

    // }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap");
* {
  font-family: "Montserrat";
}
.f-white {
  color: white;
}
.ivu-btn {
  color: #dc050e;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 1em 5em;
  font-weight: 600;
  letter-spacing: 2px;
}
.ivu-btn:hover {
  color: #ffffff;
  background-color: #dc050e;
  border-color: #ffffff;
  border-radius: 30px;
  padding: 1em 5em;
  font-weight: 600;
  letter-spacing: 2px;
}
.bold {
  font-weight: 900;
}
.semi-bold {
  font-weight: 600;
}
.bg-red {
  background-color: #dc050e;
}
.full {
  min-height: 100vh;
  min-width: 100vw;
}
.mt-50 {
  margin-top: 50%;
}
.ml-4 {
  margin-left: 4em;
}
</style>
