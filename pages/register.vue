<template>
  <Row type="flex" justify="center" class="code-row-bg">
    <Col :xs="22" :lg="24">
      <br />
      <Row>
        <Col :xs="24" :lg="{ span: 1, offset: 1 }">
          <nuxt-link to="/" class="f-black"
            ><Icon type="md-arrow-back" size="30"
          /></nuxt-link>
        </Col>
        <Col :xs="24" :lg="{ span: 10, offset: 5 }" class="lg-mt-30">
          <h1 class="title">Necesitamos algunos datos para crear tu cuenta</h1>
          <Form
            id="form-register"
            ref="formInline"
            :model="formInline"
            :rules="ruleInline"
            row
          >
            <FormItem prop="fullname">
              <Input
                type="text"
                v-model="formInline.fullname"
                placeholder="Nombre y apellidos"
                prefix="ios-person-outline"
              >
                <!-- <Icon size="20" type="ios-person-outline" slot="prepend"></Icon> -->
              </Input>
            </FormItem>
            <FormItem prop="dni">
              <Input
                type="text"
                prefix="ios-card-outline"
                v-model="formInline.dni"
                placeholder="DNI/CE"
              >
                <!-- <Icon size="20" type="ios-card-outline" slot="prepend" /> -->
              </Input>
            </FormItem>
            <FormItem prop="address">
              <Input
                type="text"
                prefix="ios-pin-outline"
                v-model="formInline.address"
                placeholder="Dirección"
              >
                <!-- <Icon size="20" type="ios-pin-outline" slot="prepend" /> -->
              </Input>
            </FormItem>
            <FormItem prop="district_id">
              <Select
                prefix="ios-home-outline"
                v-model="formInline.district"
                @on-change="setDistrict"
                placeholder="Distrito"
              >
                <Option
                  v-for="district in districts"
                  :key="district.id"
                  :value="district.id"
                  >{{ district.name }}</Option
                >
              </Select>
            </FormItem>
            <FormItem prop="gender">
              <Select
                v-model="formInline.gender"
                placeholder="Me identifico como"
                prefix="ios-person-outline"
              >
                <Option value="F">Mujer</Option>
                <Option value="M">Hombre</Option>
              </Select>
            </FormItem>
            <FormItem prop="email">
              <Input
                prefix="ios-mail-outline"
                v-model="formInline.email"
                placeholder="Correo"
              >
                <!-- <Icon size="20" type="ios-mail-outline" slot="prepend" /> -->
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="Contraseña"
                prefix="ios-lock-outline"
              >
                <!-- <Icon size="20" type="ios-lock-outline" slot="prepend"></Icon> -->
              </Input>
            </FormItem>
            <FormItem prop="confirmPassword">
              <Input
                type="password"
                v-model="formInline.confirmPassword"
                placeholder="Confirmar contraseña"
                prefix="ios-lock-outline"
              >
                <!-- <Icon size="20" type="ios-lock-outline" slot="prepend"></Icon> -->
              </Input>
            </FormItem>
            <FormItem>
              <Button
                class="margin-27"
                type="success"
                @click="handleSubmit('formInline')"
                :loading="disable"
                >CREAR CUENTA</Button
              >
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Col>
  </Row>
</template>
<script>
import { signup, signin, getDistricts } from "../server/index";
export default {
  name: "register",
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
      districts: [],
      formInline: {
        fullname: "",
        dni: "",
        address: "",
        district_id: Number,
        gender: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      disable: false,
      // formInline: {
      //   fullname: "Andrea",
      //   dni: "76282636",
      //   address: "Calle 123",
      //   district: "",
      //   district_id: Number,
      //   gender: "F",
      //   email: "andreale17@icloud.com",
      //   password: "Andrea123",
      //   confirmPassword: "Andrea123"
      // },
      ruleInline: {
        fullname: [
          {
            required: true,
            message: "Por favor, escriba su nombre completo",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Por favor, ingrese una contraseña",
            trigger: "blur"
          },
          {
            type: "string",
            min: 8,
            message: "La contraseña debe tener como mínimo 8 caracteres",
            trigger: "blur"
          }
        ],
        confirmPassword: [{ validator: validatePassCheck, trigger: "blur" }],
        dni: [
          {
            required: true,
            message: "Por favor, ingrese el Nº de su documento",
            trigger: "blur"
          },
          {
            type: "string",
            min: 8,
            max: 11,
            message: "Su Nº de documento debe ser de 8 a 11 caracteres",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "Por favor, escriba su dirección",
            trigger: "blur"
          }
        ],
        district: [
          {
            required: true,
            message: "Por favor, seleccione su distrito",
            trigger: "blur"
          }
        ],
        gender: [
          {
            required: true,
            message: "Por favor, seleccione cómo se identifica",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Por favor, escriba su correo electrónico",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Por favor, ingrese un correo válido",
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
          this.disable = true;
          delete this.formInline.district;
          signup(this.formInline)
            .then(res => {
              console.log(res);
              if (res.message == "Request failed with status code 409") {
                this.disable = false;
                this.$Notice.error({
                  title: "Revise sus datos",
                  desc:
                    "Por favor, revise si ya tiene ya una cuenta registrada asociada a su identidad"
                });
              } else {
                let loginForm = {
                  email: this.formInline.email,
                  password: this.formInline.password
                };
                signin(loginForm)
                  .then(res => {
                    console.log(res.statusCode);
                    if (res.status == 201) {
                      this.$Message.success("Bienvenido a 5las!");
                      this.$router.push({ path: "where" });
                      console.log(res);
                      localStorage.setItem(
                        "token",
                        JSON.stringify(res.data.accessToken)
                      );
                    } else if (
                      res.statusCode == 401 ||
                      res.statusCode == 400 ||
                      res.statusCode == 409
                    ) {
                      this.$Message.error("Verifica si ya estás registrado");
                    } else {
                      this.$Message.error("Verifica los datos o regístrate");
                    }
                  })
                  .catch(err => {
                    this.$Message.error({ title: err });
                  });
              }
            })
            .catch(err => {
              console.log(err);
              this.$Notice.error({
                title: "Revise si tiene ya una cuenta registrada"
              });
            });
        } else {
          this.$Notice.error({ title: "Revise los datos ingresados" });
        }
      });
    },
    getDistricts() {
      getDistricts().then(res => {
        this.districts = res.data;
      });
    },
    setDistrict(val) {
      this.formInline.district_id = parseInt(val);
      // console.log("xxxxxxx");
    }
  },
  mounted() {
    this.getDistricts();
  }
};
</script>

<style>
@import "../assets/style.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap");

#form-register .ivu-input {
  /* color: #fff !important; */
  box-sizing: border-box;
  border-radius: 30px;
  /* border-top-right-radius: 30px !important;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 1px !important;
  border-bottom-left-radius: 1px !important; */
  /* border-left: 1px solid transparent; */
  /* padding: 2em 1em; */
}

.margin-27 {
  margin-top: 27px;
}

.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  text-align: center;
  letter-spacing: 0.5px;
  color: #000000;
  margin-bottom: 45px;
}

.f-black:hover {
  color: #dc050e !important;
}

/* #form-register .ivu-input-group-prepend:hover,
#form-register .ivu-input-group-prepend:focus,
#form-register .ivu-input-group-prepend:active {
  border-color: #dc050e;
  -webkit-box-shadow: none;
  box-shadow: none;
} */
</style>
