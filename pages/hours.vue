<template>
  <section>
    <Row type="flex" justify="center">
      <Col :xs="24" :lg="24" class="bg-red">
        <Row type="flex" justify="center">
          <Col>
            <img src="../assets/icons/icon.jpeg" class="circle" />
          </Col>

          <Col class="f-white f-em m-auto">
            <span class="semi-bold">{{ this.name }}</span>
            <br />
            <span>Lima - {{ this.district }}</span>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row type="flex" justify="start">
      <Col :xs="24" :lg="{ span: 2, offset: 1 }">
        <nuxt-link to="/where" class="f-black">
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
        <p class="indications">
          Elige uno de los horarios disponibles en la tienda escogida
        </p>
        <div class="flex-market">
          <img
            src="../assets/icons/Candy-shop.png"
            alt="candishop"
            class="width-candy"
          />
          <div class="flex-info-market">
            <p>{{ this.companyName }}</p>
            <h5>{{ this.companyAddress }}</h5>
          </div>
        </div>
        <Form
          id="form-register"
          ref="hoursForm"
          :model="hoursForm"
          :rules="hoursFormValidate"
          row
        >
          <FormItem label="Horario" prop="hours">
            <Select
              v-model="hoursForm.hours"
              @on-select="setHour"
              placeholder="Seleccionar horario"
            >
              <Option v-for="hour in hours" :key="hour[0]" :value="hour[1]">
                {{ hour[1] }}</Option
              >
            </Select>
          </FormItem>

          <FormItem>
            <Button
              class="margin-27"
              type="success"
              @click="handleSubmit('hoursForm')"
              >GENERAR TICKET</Button
            >
          </FormItem>
        </Form>
      </Col>
    </Row>
  </section>
</template>
<script>
import localStorage from "localStorage";
import { schedule } from "../server/index";
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
      token: "",
      hours: [
        ["1", "8:00 am - 9:00 am"],
        ["2", "9:00 am - 10:00 am"],
        ["3", "10:00 am - 11:00 am"],
        ["4", "11:00 am - 12:00 pm"],
        ["5", "12:00 pm - 13:00 pm"],
        ["6", "13:00 pm - 14:00 pm"],
        ["7", "14:00 pm - 15:00 pm"],
        ["8", "15:00 pm - 16:00 pm"]
      ],
      name: "",
      district: "",
      companyAddress: "",
      companyName: "",
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
          for (let i = 0; i < this.hours.length; i++) {
            if (this.hours[i][1] == localStorage.getItem("hour")) {
              console.log(this.hours[i][0]);
              schedule(this.hours[i][0], this.token).then(res => {
                console.log(res);
                this.$router.push({ path: "QR" });
              });
            }
          }
        } else {
          this.$Notice.error({ title: "Revise los datos ingresados" });
        }
      });
    },
    setHour(val) {
      localStorage.setItem("hour", val);
    }
  },
  created() {
    this.name = localStorage.getItem("name");
    this.district = localStorage.getItem("district");
    this.companyName = localStorage.getItem("companyName");
    this.companyAddress = localStorage.getItem("companyAddress");
    let tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      this.token = JSON.parse(tokenStorage);
    } else {
      this.$router.push({ path: "login" });
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
