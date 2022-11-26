<template>
  <v-app>
    <v-container class="fill-height conecta-color flexs" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h2>Exibindo resultados para e-mails {{ param }}:</h2>
        </v-col>
        <v-col cols="12">
          <CardComponent :emails="emailsByParam" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";
export default {
  name: "ContactsView",
  components: {
    CardComponent,
  },
  data() {
    return {
      param: "",
      emails: [],
    };
  },
  methods: {
    queryParam() {
      this.param = this.$route.query.dom;
    },
    async getEmailsFromDB() {
      let loader = this.$loading.show({
        // Optional parameters
        onCancel: this.onCancel,
        loader: "dots",
        opacity: 0.1,
      });
      this.$store.dispatch("decodeJwt", "id_user");
      let idUser = this.$store.state.dado;
      await axios
        .get(`http://localhost:5000/contacts/${idUser}`)
        .then((response) => {
          loader.hide();
          this.emails = response.data.results;
        })
        .catch((error) => {
          console.log("Erro =", error);
        });
    },
  },
  computed: {
    emailsByParam() {
      if (this.param) {
        this.emails = this.emails.filter((item) =>
          item.email.toLowerCase().includes(this.param.toLowerCase())
        );
        return this.emails;
      } else {
        return this.emails;
      }
    },
  },
  mounted() {
    this.queryParam();
    this.getEmailsFromDB();
  },
};
</script>
<style scoped>
.conecta-color {
  background: linear-gradient(81deg, rgb(119, 55, 153) 3%, rgb(82, 44, 148) 37%);
}
.msgComum {
  font-family: Open Sans, var(--nv-fallback-ff);
  font-size: 30px;
  color: #b7a6f5;
}
.flexs {
  display: block !important;
}
h2 {
  color: azure;
  padding: 10px;
  margin: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
