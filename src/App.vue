<template>
  <div id="app">
    <NavBar :name="user" :route="route" v-if="!path" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: "",
    };
  },
  computed: {
    path() {
      if (this.$route.path == "/login") {
        return true;
      } else {
        return false;
      }
    },
    route() {
      if (this.$route.path == "/home/") {
        return "Contacts";
      } else if (this.$route.path == "/contacts") {
        return "Home";
      }
    },
  },
  mounted() {
    this.$store.dispatch("decodeJwt", "name");
    this.user = this.$store.state.dado;
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
