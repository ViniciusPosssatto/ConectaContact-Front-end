<template>
  <v-app>
    <v-container class="fill-height conecta-color" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" xl="4" lg="4" md="6" sm="8" xs="12">
          <v-card elevation="24" max-width="600px" min-height="220px" class="card">
            <div class="img-centralize">
              <v-img
                class="img-center"
                max-width="400px"
                src="https://user-images.githubusercontent.com/101053966/204116071-f42933b9-bf07-4705-86ce-6a65f8e27d5b.png"
              ></v-img>
            </div>
            <v-card-text class="text-white btn-login">
              <v-btn
                class="rounded-5"
                color="#311f50"
                elevation="10"
                x-large
                block
                @click="loginOAuth"
                ><v-icon large color="white darken-2"> mdi-google </v-icon>
                <span>Login</span></v-btn
              >
            </v-card-text>
            <v-card-actions class="ml-15 mr-15 text-center">
              <p>
                Clicando em login você aceita Conecta Contact                
                <a href="#" style="color: #000000">Policy</a> e
                <a href="#" style="color: #000000">Terms of Use.</a>
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-card elevation="20" width="120px" height="100px">
          <a href="https://conectanuvem.com.br">
            <img src="https://user-images.githubusercontent.com/101053966/204145021-5b3c928d-3a8f-483f-ad82-1ee76864dd74.jpg" width="120px" />
            
          </a>
        </v-card>

        <v-card elevation="20" width="120px">
          <a href="https://cloud.google.com/find-a-partner/partner/conecta-nuvem"
            ><v-img
              width="200px"
              src="https://conectanuvem.com.br/wp-content/uploads/2021/03/Conecta-Nuvem-Parceira-Google-Cloud-1.png"
            >
            </v-img>
          </a>
        </v-card>
      </v-row>
      <v-row></v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginUser",
  data() {
    return {};
  },
  methods: {
    loginOAuth() {
      axios
        .post("https://conectacontactbackend-myb7gebzdq-rj.a.run.app/login/auth/google")
        .then((response) => {
          window.open(response.data.url, "_self");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginOverlay {
  background: rgba(33, 150, 243, 0.3);
}
.conecta-color {
  background: linear-gradient(81deg, rgb(82, 41, 104) 3%, rgb(49, 31, 80) 37%);
}
span {
  color: #b59ae7;
  padding-left: 20px;
  font-size: large;
  font-weight: bold;
}
.card {
  background: linear-gradient(81deg, rgb(81, 183, 243) 2%, rgb(69, 136, 238) 57%);
  padding: 20px;
  border-radius: 20px !important;
  text-align: -webkit-center;
}
.img-center {
  border-radius: 20px !important;
}
.img-centralize {
  text-align: -webkit-center;
}
.btn-login {
  max-width: 430px;
}
</style>
