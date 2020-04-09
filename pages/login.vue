<template>
  <section id="formLogin">
    <Row type="flex" justify="center" align="middle" class="min-h">
      <Col :xs="{ span: 22 }" :lg="{ span: 22 }">
        <Row>
          <Col class="float" :xs="{ span: 24 }" :lg="{ span: 12 }">
            <p class="font-25 lg-f-white lg-f-52">
              <br />
              Bienvenid@ a <br /><span class="semi-bold">5las</span>
            </p>
          </Col>

          <Col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <p class="font-25">Ingresa</p>
            <br />
            <Form ref="loginForm" :model="loginForm" :rules="loginFormValidate">
              <Row type="flex" justify="center">
                <Col :xs="24" :lg="24">
                  <FormItem prop="email">
                    <Input
                      prefix="ios-contact-outline"
                      v-model="loginForm.email"
                      placeholder="Ingresa tu e-mail"
                    ></Input>
                  </FormItem>
                </Col>
                <Col :xs="24" :lg="24">
                  <FormItem prop="password">
                    <Input
                      prefix="ios-unlock-outline"
                      sufix="ios-eye-outline"
                      type="password"
                      v-model="loginForm.password"
                      placeholder="Ingresa tu clave"
                    ></Input>
                  </FormItem>
                  <!-- <Row type="flex" justify="end">
                    <Col class="mt-less">
                      <a href="" class="f-black">¿Olvidaste tu contraseña?</a>
                    </Col>
                  </Row> -->
                </Col>
                <br />
                <Col :xs="24" :lg="8">
                  <Button type="success" @click="start('loginForm')"
                    >INGRESAR</Button
                  >
                </Col>
                <!-- <Col :xs="24" :lg="24">
                  <Divider>o continúa con</Divider>
                </Col> 
                <Row type="flex" justify="space-between">
                  <Col :lg="12">
                    <img src="../assets/icons/fb-btn.png" />
                  </Col>
                  <Col :lg="12">
                    <img src="../assets/icons/google-btn.png"
                  /></Col>
                </Row>-->
              </Row>
              <br />
              <br />
              <Row type="flex" justify="center">
                <Col :xs="13" :lg="13" class="f-center">
                  <p>¿Aún no tienes cuenta?</p>
                </Col>
                <Col :xs="13" :lg="13" class="f-black f-center">
                  <nuxt-link to="/register" class="semi-bold f-black"
                    >Regístrate</nuxt-link
                  >
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
    <div class="lg-bg-red"></div>
    <div></div>
  </section>
</template>
<script>
import * as Api from "../server/index";
import localStorage from "localStorage";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      loginFormValidate: {
        email: [
          {
            required: true,
            message: "Ingrese su email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Ingrese un email válido",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Ingrese su clave",
            trigger: "blur"
          },
          {
            type: "string",
            min: 8,
            message: "Su clave no debe ser menor a 8 dígitos",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    start(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          Api.signin(this.loginForm)
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
              } else if (res.statusCode == 401) {
                this.$Message.error(
                  "Verifica si estás registrado o si tu clave es correcta"
                );
              } else {
                this.$Message.error("Verifica los datos o regístrate");
              }
            })
            .catch(err => {
              this.$Message.error({ title: err });
            });
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
</style>
