<template>
  <section>
    <Row type="flex" justify="center">
      <Col :xs="24" :lg="24" class="bg-red">
        <Row type="flex" justify="center">
          <Col>
            <img src="../assets/icons/img.png" class="circle" />
          </Col>

          <Col class="f-white f-em m-auto">
            <span class="semi-bold">Luis Delgado</span>
            <br />
            <span>Lima - Barranco</span>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row type="flex" justify="start">
      <Col :xs="24" :lg="{ span: 2, offset: 1 }">
        <nuxt-link to="/" class="f-black">
          <div class="flex-back-content">
            <Icon type="md-arrow-back" class="margin-45" size="30" />
            <span>Volver</span>
          </div>
        </nuxt-link>
      </Col>
    </Row>

    <Row type="flex" justify="center">
      <Col :xs="22" :lg="{ span: 10 }">
        <h1 class="title">¡Ya estamos cerca!</h1>
        <p class="indications">Elige uno de los horarios disponibles en la tienda escogida</p>
        <div class="flex-market">
          <img src="../assets/icons/Candy-shop.png" alt="candishop" class="width-candy" />
          <div class="flex-info-market">
            <p>Metro Barranco</p>
            <h5>Av. Grau 513</h5>
          </div>
        </div>
        <Form id="form-register" ref="hoursForm" :model="hoursForm" :rules="hoursFormValidate" row>
          <FormItem label="Horario" prop="hours">
            <Select v-model="hoursForm.hours" placeholder="-">
              <Option value="1">8:00 am - 9:00 am</Option>
              <Option value="2">9:00 am - 10:00 am</Option>
              <Option value="3">10:00 am - 11:00 am</Option>
              <Option value="4">11:00 am - 12:00 pm</Option>
              <Option value="5">12:00 pm - 13:00 pm</Option>
              <Option value="6">13:00 pm - 14:00 pm</Option>
              <Option value="7">14:00 pm - 15:00 pm</Option>
              <Option value="8">15:00 pm - 16:00 pm</Option>
            </Select>
          </FormItem>

          <FormItem>
            <Button
              class="margin-27"
              type="success"
              @click="handleSubmit('hoursForm')"
            >GENERAR TICKET</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </section>
</template>
<script>
export default {
  name: "where",
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Por favor, confirme su contraseña"));
      } else if (value !== this.formInline.password) {
        callback(new Error("No coincide con la contraseña ingresada"));
      } else {
        callback();
      }
    };
    return {
      hoursForm: {
        hours: ""
      },
      hoursFormValidate: {
        hours: [
          {
            required: true,
            message: "Por favor, indique un horario",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Bienvenido a 5las!");
          this.$router.push({ path: "where" });
        } else {
          this.$Notice.error({ title: "Revise los datos ingresados" });
        }
      });
    }
  }
};
</script>

<style>
@import "../assets/style.css";

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  text-align: left;
  letter-spacing: 0.5px;
  color: #000000;
  margin-bottom: 22px;
}

.indications {
  margin-bottom: 35px;
}

.flex-market {
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 32px;
  align-items: center;
}

.flex-back-content {
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 35px;
  margin-top: 10px;
  align-items: center;
}
.flex-info-market {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
.f-black:hover {
  color: #dc050e !important;
}

.width-candy {
  width: 50px;
}



</style>
