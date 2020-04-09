<template>
  <section>
    <Row type="flex" justify="center">
      <Col :xs="24" class="bg-red">
        <Row type="flex" justify="center">
          <Col>
            <img src="../assets/icons/icon.jpeg" class="circle" />
          </Col>

          <Col class="f-white  f-em m-auto">
            <span class="semi-bold">{{ this.name }}</span
            ><br />
            <span>Lima - {{ this.district.name }}</span></Col
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
              <Option value="1501">Lima</Option>
            </Select>
          </FormItem>
          <FormItem label="Distrito" prop="district">
            <Select
              v-model="whereForm.district"
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
          <FormItem label="Lugar de compra" prop="place">
            <Select
              v-model="whereForm.place"
              @on-change="setPlace"
              placeholder="Lugar de compra"
            >
              <Option
                v-for="company in companys"
                :key="company.name"
                :value="company.name"
                >{{ company.name }}</Option
              >
            </Select>
          </FormItem>
          <div v-if="show">
            <Card>
              <Row type="flex" justify="space-between" align="middle">
                <Col
                  :xs="{ span: 8, offset: 16 }"
                  :lg="{ span: 5, offset: 19 }"
                >
                  <p class="open semi-bold" v-if="this.available">Abierto</p>
                  <p class="close semi-bold" v-else>Cerrado</p>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col :xs="{ span: 6 }" :lg="{ span: 4 }">
                  <img :src="this.companyImg" />
                </Col>
                <Col :xs="{ span: 6 }" :lg="{ span: 4 }">
                  <p>{{ this.companyAddress }}</p>
                  <p>{{ this.companyPhone }}</p>
                </Col>
                <Col
                  :xs="{ span: 6, offset: 17 }"
                  :lg="{ span: 4, offset: 17 }"
                >
                  <!-- <a href="" class="f-black">Ver Mapa</a> -->
                  <br />
                </Col>
              </Row>
            </Card>
          </div>
          <div v-else></div>
          <br />
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
    </Row>
  </section>
</template>
<script>
import jwtDecode from "jwt-decode";
import localStorage from "localStorage";
import { getDistricts, getCompany } from "../server/index";
export default {
  name: "where",
  data() {
    return {
      available: Boolean,
      companyImg: "",
      companyName: "",
      companyAddress: "",
      companyPhone: "",
      show: false,
      token: "",
      districts: [],
      companys: [],
      name: "",
      district: "",
      whereForm: {
        city: "1501",
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
          localStorage.setItem("companyAddress", this.companyAddress);
          localStorage.setItem("companyName", this.companyName);
          this.$router.push({ path: "hours" });
        } else {
          this.$Notice.error({ title: "Complete los campos" });
        }
      });
    },
    getDistricts() {
      getDistricts().then(res => {
        this.districts = res.data;
      });
    },
    setDistrict(val) {
      getCompany(JSON.parse(val), this.token).then(res => {
        this.companys = res.data;
      });
    },
    setPlace(val) {
      for (let i = 0; i < this.companys.length; i++) {
        if (this.companys[i].name == val) {
          this.available = this.companys[i].available;
          this.companyImg = this.companys[i].logo_url;
          this.companyName = val;
          this.companyAddress = this.companys[i].branches[0].address;
          this.companyPhone = this.companys[i].branches[0].phone;
        }
      }
      this.show = true;
      this.whereForm.place = val;
    }
  },
  created() {
    let tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      this.token = JSON.parse(tokenStorage);
      let decoded = jwtDecode(this.token);
      this.name = decoded.fullname;
      this.district = decoded.district;
      localStorage.setItem("name", this.name);
      localStorage.setItem("district", this.district.name);
      localStorage.setItem("identityDocumentNumber", decoded.dni);
      this.whereForm.district = this.district.id;
    } else {
      this.$router.push({ path: "login" });
    }
  },
  mounted() {
    this.getDistricts();
  }
};
</script>

<style>
@import "../assets/style.css";
.ivu-card-body {
  padding: 0;
  padding-bottom: 10px;
  width: -webkit-fill-available;
  margin: auto;
}
.ivu-card-body img {
  max-width: 100%;
  max-height: 50px;
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
.close {
  background-color: #dc050e;
  border-radius: 0px 20px 0px 20px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  padding: 0.3em;
}
</style>
