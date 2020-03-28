<template>
  <section>
    <Row type="flex" justify="center">
      <Col :xs="24" class="bg-red">
        <Row type="flex" justify="center">
          <Col>
            <img src="../assets/icons/img.png" class="circle" />
          </Col>

          <Col class="f-white  f-em m-auto">
            <span class="semi-bold">Luis Delgado</span><br />
            <span>Lima - Barranco</span></Col
          >
        </Row>
      </Col>
      <Col :xs="22" :lg="{ span: 13 }">
        <br />
        <p class="f-black f-em semi-bold">¿Dónde quieres comprar?</p>
        <Form
          id="form-where"
          ref="whereForm"
          :model="whereForm"
          :rules="whereFormValidate"
          row
        >
          <FormItem label="Departamento/Provincia" prop="city">
            <Select
              v-model="whereForm.city"
              placeholder="Departamento/Provincia"
            >
              <Option value="Lima">Lima</Option>
              <Option value="Arequipa">Arequipa</Option>
              <Option value="Trujillo">Trujillo</Option>
            </Select>
          </FormItem>
          <FormItem label="Distrito" prop="district">
            <Select v-model="whereForm.district" placeholder="Distrito">
              <Option value="Barranco">Barranco</Option>
              <Option value="Lima">Lima</Option>
              <Option value="Lince">Lince</Option>
            </Select>
          </FormItem>
          <FormItem label="Lugar de compra" prop="place">
            <Select v-model="whereForm.place" placeholder="Lugar de compra">
              <Option value="Metro">Metro</Option>
              <Option value="Wong">Wong</Option>
              <Option value="Plaza Vea">Plaza Vea</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button
              class="margin-27"
              type="success"
              @click="handleSubmit('whereForm')"
              >SIGUIENTE</Button
            >
          </FormItem>
        </Form>
      </Col>
      <Col :xs="22" :lg="{ span: 13 }">
        <Card>
          <Row type="flex" justify="space-between" align="middle">
            <Col :xs="{ span: 8, offset: 16 }" :lg="{ span: 5, offset: 19 }">
              <p class="open semi-bold">Abierto</p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col :xs="{ span: 6 }" :lg="{ span: 4 }">
              <img src="../assets/icons/logo-metro.png" />
            </Col>
            <Col :xs="{ span: 6 }" :lg="{ span: 4 }">
              <p>Av. Grau 513</p>
              <p>(511)6138888</p>
            </Col>
            <Col :xs="{ span: 6, offset: 17 }" :lg="{ span: 4, offset: 17 }">
              <a href="" class="f-black">Ver Mapa</a>
              <br />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </section>
</template>
<script>
export default {
  name: "where",
  data() {
    return {
      whereForm: {
        city: "",
        district: "",
        place: ""
      },
      whereFormValidate: {
        city: [
          {
            required: true,
            message: "Por favor, seleccione su ciudad",
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
        place: [
          {
            required: true,
            message: "Por favor, seleccione un lugar de compra",
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
.ivu-card-body {
  padding: 0;
  padding-bottom: 10px;
}
.ivu-card {
  border-radius: 30px;
  background-color: #f4f9fc;
}
.open {
  background-color: #42b01c;
  border-radius: 0px 20px 0px 20px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  padding: 0.3em;
}
</style>
