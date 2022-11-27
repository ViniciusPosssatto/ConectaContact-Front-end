<template>
  <v-app>
    <v-container class="fill-height conecta-color flexs" fluid>
      <v-row align="center" justify="center" class="row-title">
        <v-col cols="12">
          <h2>Clique no domínio de e-mail que deseja buscar:</h2>
        </v-col>
        <v-toolbar dense floating class="rounded-pill" color="#7f6ed4" elevation="20px">
          <v-text-field
            color="#999"
            class="text-input"
            hide-details
            prepend-icon="mdi-magnify"
            single-line
            @input="searchInputBar"
            v-model="searchBar"
          ></v-text-field>
        </v-toolbar>
      </v-row>
      <v-row align="center" justify="center">
        <CardComponent :domains="domains" />
      </v-row>
      <v-row></v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";
export default {
  name: "HomeView",
  components: {
    CardComponent,
  },
  data() {
    return {
      emails: [],
      domains: [],
      searchBar: "",
    };
  },
  methods: {
    async getDomainsFromDB() {
      let loader = this.$loading.show({
        // Optional parameters
        onCancel: this.onCancel,
        loader: "dots",
        opacity: 0.1,
      });
      this.$store.dispatch("decodeJwt", "id_user");
      let idUser = this.$store.state.dado;
      await axios
        .get(
          `https://conectacontactbackend-myb7gebzdq-rj.a.run.app/contacts/domain/${idUser}`
        )
        .then((response) => {
          loader.hide();
          this.domains = response.data.domains;
          if (this.domains.length === 0) {
            this.$toasted.error("Você não possui contatos cadastrados com e-mail.");
          }
        })
        .catch((error) => {
          console.log("Erro =", error);
        });
    },
    searchInputBar() {
      if (this.searchBar !== "") {
        let pesquisa = () => {
          return this.domains.filter((item) =>
            item.toLowerCase().includes(this.searchBar.toLowerCase())
          );
        };
        if (pesquisa) {
          this.domains = pesquisa(this.searchBar);
          let count = 0;
          if (this.domains.length === 0) {
            count++;
            if (count > 0) {
              this.$toasted.clear();
            }
            this.$toasted.error("Usuário não encontrado... Tente outro.");
          }
        }
      } else {
        return this.getDomainsFromDB();
      }
    },
  },
  mounted() {
    this.getDomainsFromDB();
  },
  beforeMount() {},
  created() {},
  beforeCreate() {
    if (this.$route.query.jwt) {
      localStorage.setItem("token", this.$route.query.jwt);
    }
  },
};
</script>
<style scoped>
.conecta-color {
  background: linear-gradient(81deg, rgb(119, 55, 153) 3%, rgb(82, 44, 148) 37%);
}
h2 {
  color: azure;
  padding: 10px;
  margin: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.row-title {
  display: block;
}
.flexs {
  display: block !important;
}

@media (max-width: 470px) {
  h2 {
    font-size: 20px !important;
  }
}
</style>
