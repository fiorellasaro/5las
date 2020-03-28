<template>
  <section class="body">
    <div class="background"></div>
    <div class="content f-white">
      <p class="bold font-25">Luis Delgado</p>
      <p class="medium">DNI: 41887436</p>
      <br />
      <br />
      <p class="medium">Tienda: Metro Barranco</p>
      <p class="medium">Horario de visita: 15:00 - 16:00 hrs</p>
      <br />
      <br />
      <Row type="flex" justify="center">
        <Col :xs="22" :lg="6"
          ><div class="qr lg-qr">
            <img class="qr-image" src="../assets/icons/QR.png" />
          </div>
        </Col>
      </Row>
      <br />
      <p class="f-center f-black medium l-spacing">
        Muestra este código para ingresar a la tienda
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "QR"
};
</script>
<style>
@import "../assets/style.css";
/* .bg-light {
  background-color: #f4f9fc;
}
.middle {
  height: 50vh;
  z-index: 1;
} */
/* .max-height {
  max-height: 100vh;
} */
.qr {
  background-color: #ffffff;
  border-radius: 30px;
  width: 100%;
  height: 40vh;
}
@media screen and (min-width: 1024px) {
  .lg-qr {
    height: 280px;
    padding: 6% 0;
  }
}

.body {
  background-color: #f4f9fc !important;
  height: 100vh;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50%;
  width: 100%;
  background-color: #dc050e;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  padding: 30px;
}
.qr-image {
  margin: auto;
  text-align: center;
  align-content: space-around;
  display: flex;
  vertical-align: middle;
}
/* .content {
  position: relative;
  z-index: 2;
  text-align: center;
} */
</style>
