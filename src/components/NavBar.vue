<template>
  <v-card class="overflow-hidden" elevation="10">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://scontent.ffln1-1.fna.fbcdn.net/v/t39.30808-6/308514685_796298581649178_1022346858773960425_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEY9Lj0wS3tKOdGnSHINcFnsgrk2Ux2KcWyCuTZTHYpxREXLDn9no2TLqgZHVbaeyS8t-kBXBP_Wa3aCKtEFzwh&_nc_ohc=DP4TK04cXZMAX_NMEoj&_nc_ht=scontent.ffln1-1.fna&oh=00_AfDbBDz7XTpupDzMXBfJqrDuJpTuTcfSn65lI4Vr7xh3fQ&oe=63801EA6"
      fade-img-on-scroll
    >
      <!-- <DropdownMenu /> -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <template v-slot:extension class="back">
        <div class="route" @click="pushRoute">
          <v-icon v-if="route == 'Home'">mdi-home</v-icon>
          <v-icon v-else>mdi-contacts-outline</v-icon>

          <h3 class="icon-some">{{ route }}</h3>
        </div>
        <v-spacer></v-spacer>
        <h3 class="name-user">{{ name }}</h3>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
export default {
  components: { DropdownMenu },
  name: "NavBar",
  props: {
    name: String,
    route: String,
  },
  data() {
    return {
      rota: "",
    };
  },
  methods: {
    pushRoute() {
      if (this.$route.path == "/home/") {
        this.$router.push({ path: "/contacts" });
      } else {
        this.$router.push({ path: "/home/" });
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
      this.$toasted.show("Você saiu.");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped>
h3 {
  font-family: Georgia, "Times New Roman", Times, serif;
  background: -webkit-linear-gradient(-120deg, #450a7c, #300747, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 20px;
}
.route:hover {
  box-shadow: 10px 5px 5px black;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.6);
  transform: scale(1.1);
  background: rgb(160, 41, 230, 0.4);
  cursor: pointer;
}
.route {
  display: flex;
}

@media (max-width: 470px) {
  .icon-some {
    position: absolute;
    display: none;
  }
  .name-user {
    font-size: 20px;
  }
}
</style>
