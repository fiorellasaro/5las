<template>
  <Row type="flex" justify="center" class="code-row-bg">
    <Col :xs="22" :lg="10">
      <Icon type="md-arrow-back" class="margin-45" size="30" />
      <h1 class="title">Necesitamos algunos datos para crear tu cuenta</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" row>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Nombre y apellidos">
            <Icon type="ios-person-outline" slot="prepend" ></Icon>
          </Input>
        </FormItem>
        <FormItem prop="identityDoc">
          <Input type="text" v-model="formInline.identityDoc" placeholder="DNI/CE">
            <Icon type="ios-card-outline" slot="prepend" />
          </Input>
        </FormItem>
        <FormItem prop="address">
          <Input type="text" v-model="formInline.address" placeholder="Dirección">
            <Icon type="ios-pin-outline" slot="prepend" />
          </Input>
        </FormItem>
        <FormItem prop="email">
          <Input v-model="formInline.email" placeholder="Correo">
            <Icon type="ios-mail-outline" slot="prepend" />
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Contraseña">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="confirmPassword">
          <Input
            type="password"
            v-model="formInline.confirmPassword"
            placeholder="Confirmar contraseña"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button class="margin-27" type="primary" @click="handleSubmit('formInline')">CREAR CUENTA</Button>
        </FormItem>
      </Form>
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
        confirmPassword: [
          { validator: validatePassCheck, trigger: "blur" }
        ],
        identityDoc: [
          {
            required: true,
            message: "Por favor, ingrese el Nº de su documento de identidad",
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
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap");

.margin-45 {
  margin-top: 10px;
  margin-bottom: 45px !important;
}

.margin-27{
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
</style>