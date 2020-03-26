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
          <h1 class="title">¿Dónde quieres comprar?</h1>
          <Form
            id="form-register"
            ref="whereForm"
            :model="whereForm"
            :rules="whereFormValidate"
            row
          >
            <FormItem label="Departamento/Provincia">
              <Select v-model="whereForm.city">
                <Option value="Lima">Lima</Option>
                <Option value="Arequipa">Arequipa</Option>
                <Option value="Trujillo">Trujillo</Option>
              </Select>
            </FormItem>
            <FormItem label="Distrito">
              <Select v-model="whereForm.district">
                <Option value="Barranco">Barranco</Option>
                <Option value="Lima">Lima</Option>
                <Option value="Lince">Lince</Option>
              </Select>
            </FormItem>
            <FormItem label="Lugar de compra">
              <Select v-model="whereForm.place">
                <Option value="Metro">Metro</Option>
                <Option value="Wong">Wong</Option>
                <Option value="Plaza Vea">Plaza Vea</Option>
              </Select>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Col>
  </Row>
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
      whereForm: {
        city: "",
        district: "",
        place: ""
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
</style>
