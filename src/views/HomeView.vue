<template>
  <v-app>
    <v-container class="fill-height conecta-color" fluid>
      <v-row align="center" justify="center">
        <CardComponent />
      </v-row>
      <v-row></v-row>
    </v-container>
  </v-app>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
export default {
  name: "HomeView",
  components: {
    CardComponent,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
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
</style>
