<template>
  <section>
    <Row type="flex" justify="center" align="middle" class="min-h">
      <Col :xs="{ span: 22 }" :lg="{ span: 22 }">
        <Row>
          <Col class="float" :xs="{ span: 24 }" :lg="{ span: 12 }">
            <p class="font-25 lg-f-white lg-f-52">
              <br />
              Bienvenido a <br /><span class="semi-bold">5las</span>
            </p>
          </Col>

          <Col :xs="{ span: 24 }" :lg="{ span: 12 }">
            <p class="font-25 f-black">Ingresa</p>
            <br />
            <Form ref="loginForm" :model="loginForm" :rules="loginFormValidate">
              <Row type="flex" justify="center">
                <Col :xs="24" :lg="24">
                  <FormItem prop="email">
                    <Input
                      v-model="loginForm.email"
                      placeholder="Ingresa tu e-mail"
                    ></Input>
                  </FormItem>
                </Col>
                <Col :xs="24" :lg="24">
                  <FormItem prop="password">
                    <Input
                      v-model="loginForm.password"
                      placeholder="Ingresa tu clave"
                    ></Input>
                  </FormItem>
                  <Row type="flex" justify="end">
                    <Col class="mt-less">
                      <a href="" class="f-black">¿Olvidaste tu contraseña?</a>
                    </Col>
                  </Row>
                </Col>
                <br />
                <Col :xs="24" :lg="8">
                  <Button type="success" @click="start('loginForm')"
                    >INGRESAR</Button
                  >
                </Col>
                <Col :xs="24" :lg="24">
                  <Divider>o continúa con</Divider>
                </Col>
                <Row type="flex" justify="space-between">
                  <Col :lg="12">
                    <img src="../assets/icons/fb-btn.png" />
                  </Col>
                  <Col :lg="12">
                    <img src="../assets/icons/google-btn.png"
                  /></Col>
                </Row>
              </Row>
              <br />
              <br />
              <Row type="flex" justify="center">
                <Col :xs="13" :lg="13" class="f-black f-center">
                  <p class="f-black">¿Aún no tienes cuenta?</p>
                </Col>
                <Col :xs="13" :lg="13" class="f-black f-center">
                  <p class="semi-bold">Regístrate</p>
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
            message: "Por favor, ingrese su email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Por favor, ingrese un email válido",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Por favor, ingrese su clave",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "Su clave no debe ser menor a 6 dígitos",
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
          this.$Message.success("Success!");
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
