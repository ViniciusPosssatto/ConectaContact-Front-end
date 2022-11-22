<template>
  <v-app>
    <v-container class="fill-height conecta-color" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" xl="4" lg="4" md="6" sm="8" xs="12">
          <v-card elevation="24" width="600px" min-height="220px" class="card">
            <div class="text-center">
              <h1 class="mb-2">Acessar meus contatos Google</h1>
            </div>
            <v-card-text class="text-white">
              <v-btn
                class="rounded-5"
                color="#311f50"
                elevation="10"
                x-large
                block
                @click="loginOAuth"
                ><v-icon large color="white darken-2"> mdi-email </v-icon>
                <span>Login</span></v-btn
              >
            </v-card-text>
            <v-card-actions class="ml-6 mr-6 text-center">
              <p>
                Clicando em login você aceita Conecta Contact
                <a href="#" class="pl-2" style="color: #000000">Policy</a> e
                <a href="#" class="pl-2" style="color: #000000">Terms of Use</a>
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-card elevation="20" width="120px">
          <v-img
            src="https://scontent.ffln1-1.fna.fbcdn.net/v/t39.30808-6/309507295_796298584982511_4707131721395890912_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8zv00USILC5xo2bX-ai-WBixml55aIvQGLGaXnloi9OiD8zKqkVJYp9d87Lyfvqq_NL2OJFYI6HROOWJaAD6p&_nc_ohc=ivoMg1hvHSoAX9cT3gc&_nc_ht=scontent.ffln1-1.fna&oh=00_AfB58-PRbYEB41uR18-jPEKEW2SQL1XD2Y-oy_Svbf5DsA&oe=63815030"
          ></v-img>
        </v-card>

        <v-card elevation="20" width="120px">
          <v-img
            width="200px"
            src="https://conectanuvem.com.br/wp-content/uploads/2021/03/Conecta-Nuvem-Parceira-Google-Cloud-1.png"
          >
          </v-img>
        </v-card>
      </v-row>
      <v-row></v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "LoginUser",
  setup() {
    function loginOAuth() {
      axios.post("http://127.0.0.1:5000/login/auth/google").then((response) => {
        window.open(response.data.url, "_self");
      });
    }

    return { loginOAuth };
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
  font-size: large;
  font-weight: bold;
}
.card {
  background: linear-gradient(81deg, rgb(140, 67, 179) 2%, rgb(101, 53, 184) 57%);
  padding: 20px;
  border-radius: 20px !important;
}
</style>
