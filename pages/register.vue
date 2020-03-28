<template>
  <Row type="flex" justify="center" class="code-row-bg">
    <Col :xs="22" :lg="24">
      <Row>
        <Col :xs="24" :lg="{ span: 1, offset: 1 }">
          <nuxt-link to="/" class="f-black"
            ><Icon type="md-arrow-back" class="margin-45" size="30"
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
            <FormItem prop="user">
              <Input
                type="text"
                v-model="formInline.user"
                placeholder="Nombre y apellidos"
              >
                <Icon size="20" type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="identityDoc">
              <Input
                type="text"
                v-model="formInline.identityDoc"
                placeholder="DNI/CE"
              >
                <Icon size="20" type="ios-card-outline" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem prop="address">
              <Input
                type="text"
                v-model="formInline.address"
                placeholder="Dirección"
              >
                <Icon size="20" type="ios-pin-outline" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem prop="email">
              <Input v-model="formInline.email" placeholder="Correo">
                <Icon size="20" type="ios-mail-outline" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="Contraseña"
              >
                <Icon size="20" type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirmPassword">
              <Input
                type="password"
                v-model="formInline.confirmPassword"
                placeholder="Confirmar contraseña"
              >
                <Icon size="20" type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button
                class="margin-27"
                type="success"
                @click="handleSubmit('formInline')"
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
      formInline: {
        user: "",
        identityDoc: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      ruleInline: {
        user: [
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
            min: 6,
            message:
              "Por favor, escriba una contraseña con más de 6 caracteres",
            trigger: "blur"
          }
        ],
        confirmPassword: [{ validator: validatePassCheck, trigger: "blur" }],
        identityDoc: [
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap");

#form-register .ivu-input {
  color: #fff !important;
  box-sizing: border-box;
  border-top-right-radius: 30px !important;
  border-bottom-right-radius: 30px;
  /* border-left: 1px solid transparent; */
  padding: 2em 1em;
}
.margin-45 {
  margin-top: 10px;
  margin-bottom: 45px !important;
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
#form-register .ivu-input-group-prepend {
  /* border: 1px solid #00dfc4; */
  border-right: none;
  background-color: transparent !important;
  box-sizing: border-box;
  border-radius: 30px;
  border-left: none;
  color: black;
  /* padding: 0 2px !important; */
}

#form-register .ivu-input-group-prepend .ivu-icon {
  padding-left: 5px !important;
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
