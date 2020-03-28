<template>
  <section class="f-center full bg-red ">
    <br />
    <br />
    <br />
    <br />
    <p class="bold f-white font-25">¡GRACIAS!</p>
    <p class="bold f-white font-25">por usar</p>
    <br />
    <div class="login-logo">
      <bounce-loader class="static" :color="color" :size="size"></bounce-loader>
      <img class="z-index-3" src="../assets/icons/logo-red.png" />
    </div>
    <br />
    <br />
    <Row type="flex" justify="center">
      <Col :xs="22" :lg="11">
        <Collapse v-model="value1">
          <Row type="flex" justify="center">
            <Col :xs="18" class="f-white bold m-auto">
              ¿Cómo lavarse las manos para evitar el COVID-19?
            </Col>
            <Col :xs="4">
              <a href="" class="font-25 f-white bold">+</a>
            </Col>
          </Row>
        </Collapse>
      </Col>
    </Row>
    <br />
    <Row type="flex" justify="center">
      <Col :xs="22" :lg="11">
        <Collapse v-model="value2">
          <Row type="flex" justify="center">
            <Col :xs="18" class="f-white bold m-auto">
              ¿Por qué no debes salir durante la cuarentena?
            </Col>
            <Col :xs="4">
              <a href="" class="font-25 f-white bold">+</a>
            </Col>
          </Row>
        </Collapse>
      </Col>
    </Row>
  </section>
</template>
<script>
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
export default {
  name: "end",
  data() {
    return {
      value1: "",
      value2: "",
      color: "#EC1847",
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
@import "../assets/style.css";
.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
  height: 40px;
  line-height: 1;
  padding-left: 0;
}
.ivu-collapse > .ivu-collapse-item > .ivu-collapse-header > i {
  display: none;
  margin-top: 15px;
}
.ivu-collapse {
  background-color: #d6002d;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
}
.static {
  position: static;
  float: left;
}
.z-index-3 {
  z-index: 3;
  position: absolute;
}

.login-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
