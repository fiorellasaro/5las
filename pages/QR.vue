<template>
  <section class="body">
    <div class="background"></div>
    <div class="content f-white">
      <p class="bold font-25">{{ this.name }}</p>
      <p class="medium">DNI: {{ this.identityDocumentNumber }}</p>
      <br />
      <br />
      <p class="medium">
        Tienda: {{ this.companyName }} {{ this.companyAddress }}
      </p>
      <p class="medium">Horario de visita: {{ this.hour }}</p>
      <br />
      <br />
      <Row type="flex" justify="center">
        <Col :xs="22" :lg="6"
          ><div class="qr lg-qr">
            <!-- <img class="qr-image" src="../assets/icons/QR.png" /> -->
            <img v-bind:src="this.qr" class="qr" />
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
import localStorage from "localStorage";
import QrcodeVue from "qrcode.vue";
export default {
  name: "QR",
  components: {
    QrcodeVue
  },
  data() {
    return {
      name: "",
      hour: "",
      companyName: "",
      companyAddress: "",
      value: "fdcaed0b559f49c8a988",
      size: "2",
      qr: "",
      identityDocumentNumber: ""
    };
  },
  created() {
    this.name = localStorage.getItem("name");
    this.hour = localStorage.getItem("hour");
    this.companyName = localStorage.getItem("companyName");
    this.companyAddress = localStorage.getItem("companyAddress");
    this.identityDocumentNumber = localStorage.getItem(
      "identityDocumentNumber"
    );
    this.qr = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAklEQVR4AewaftIAAAYcSURBVO3BQY4kRxLAQDLQ//8yd45+SiBR1aNYyc3sD9a6xGGtixzWushhrYsc1rrIYa2LHNa6yGGtixzWushhrYsc1rrIYa2LHNa6yGGtixzWushhrYv88CGVv6niDZWp4onKVDGpfKJiUnlS8QmVv6niE4e1LnJY6yKHtS7yw5dVfJPKJyomlaniicqTiicqTyo+oTJVPKn4JpVvOqx1kcNaFzmsdZEffpnKGxVvqEwVk8pU8UbFE5Wp4onKTVTeqPhNh7UucljrIoe1LvLDf5zKVDGpTBVTxZOKT6hMFZPKv8lhrYsc1rrIYa2L/PAfV/GkYlKZKiaVJxWTylQxVUwqU8W/yWGtixzWushhrYv88Msq/iaVb1J5ovKk4psqvqniJoe1LnJY6yKHtS7yw5ep/JMqJpUnKlPFk4pJZaqYVKaKN1SmikllqniicrPDWhc5rHWRw1oXsT/4P6bypOKJylTxRGWqeEPljYpJZar4NzmsdZHDWhc5rHUR+4MPqEwVk8o3VTxR+U0VT1SmiicqU8UbKlPFpPJNFb/psNZFDmtd5LDWRX74UMWTim9SeVIxqTyp+JtUpopPVLxR8YbKpPKk4hOHtS5yWOsih7UuYn9wEZU3KiaVJxWfUPlExROVqeINlaliUpkqbnJY6yKHtS5yWOsi9gd/kcobFZ9QmSreUJkqJpWpYlJ5UjGp/KaKJyqfqPjEYa2LHNa6yGGti/zwIZVPVDxRmSomlanimyomlaniScVvqphUpoonKlPFE5Wp4psOa13ksNZFDmtdxP7gi1SeVDxRmSomlaniicqTiknlScWk8qRiUnlS8ZtUpoonKm9UfOKw1kUOa13ksNZFfviQypOKJypTxaQyVTxReVIxqUwVk8qkMlVMKpPKVPGGylQxqTypeENlqvibDmtd5LDWRQ5rXeSHL6uYVKaKqeJJxd+k8omKSeUNlanijYpJZap4Q2Wq+E2HtS5yWOsih7UuYn/wAZUnFU9UpopJ5Y2KSeVvqniiMlU8UflExaTyTRXfdFjrIoe1LnJY6yL2Bx9QmSr+JpUnFU9U3qh4Q+WNikllqnhD5UnFE5U3Kj5xWOsih7UucljrIvYHH1B5UvFEZaqYVKaKJypPKp6ovFHxCZWpYlKZKiaVJxWTylRxk8NaFzmsdZHDWhf54csq3qh4UvGJijcqnqi8oTJVTBWTyjepfEJlqvhNh7UucljrIoe1LmJ/8AGVJxVvqDypeKIyVUwqb1RMKt9U8UTlExVPVKaKN1Smik8c1rrIYa2LHNa6yA9fVjGpTBVvVEwqn6iYVJ6oTBWTylTxRGVS+UTFpDKpPKmYVJ5U/KbDWhc5rHWRw1oXsT/4gMpU8URlqniiMlW8oTJVfEJlqvgmlScVk8qTikllqniiMlX8psNaFzmsdZHDWhf54ZepTBWTylQxVbyhMlU8UZkqJpWpYlKZKp6oTBVPKiaVN1TeUPknHda6yGGtixzWusgPf5nKVPFE5Z9U8YbKGypTxZOKSeUTKlPFE5UnFZ84rHWRw1oXOax1EfuD/2MqTyo+oTJVfJPKGxWTylTxhsonKr7psNZFDmtd5LDWRX74kMrfVDFVTCpPVKaKJxWTylQxqTypmComlaliUnlDZap4UjGp/E2HtS5yWOsih7Uu8sOXVXyTyhOVqWJSeUNlqniiMlU8UZkqnqh8ouKbKn7TYa2LHNa6yGGti/zwy1TeqPiEylQxqTypmFSmiicqU8VU8aTiDZVJ5RMqU8UTlaniE4e1LnJY6yKHtS7yw7+cylQxqUwVU8UTlaliUvknVTxReUPlNx3WushhrYsc1rrID/8xKm+oPKmYVKaKJypTxROVT6hMFW9U/KbDWhc5rHWRw1oX+eGXVfymijdU3qiYVJ5UPFF5ojJVTBWTylTxpOINlaniNx3WushhrYsc1rrID1+m8jepTBWTypOKSeVJxScqJpWp4onKE5U3KiaVqWJSmSq+6bDWRQ5rXeSw1kXsD9a6xGGtixzWushhrYsc1rrIYa2LHNa6yGGtixzWushhrYsc1rrIYa2LHNa6yGGtixzWushhrYv8DydxDjpsHy/tAAAAAElFTkSuQmCC`;
    // localStorage.getItem("qr");
    // console.log(this.qr);
  }
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
.qr {
  height: 100%;
  width: 100%;
}
/* .content {
  position: relative;
  z-index: 2;
  text-align: center;
} */
</style>
