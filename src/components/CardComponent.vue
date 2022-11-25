<template>
  <v-container>
    <v-row justify="center" v-if="domains">
      <v-card
        elevation="20"
        color="#260845"
        class="card-msg"
        hover
        v-for="item in domains"
        :key="item"
        @click="routerPush(item)"
      >
        <span
          v-text="item"
          :class="item === '@conectanuvem.com.br' ? 'msg' : 'msgComum'"
        ></span>
      </v-card>
    </v-row>
    <v-row justify="center" v-else>
      <v-card
        elevation="20"
        color="#260845"
        class="card-msg"
        hover
        v-for="item in emails"
        :key="item.email"
      >
        <span v-text="item.email" class="msgComum"></span>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    emails: Array,
    domains: Array,
  },
  data() {
    return {};
  },
  methods: {
    routerPush(domain) {
      this.$router.push({ path: "/contacts", query: { dom: domain } });
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.msg {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
  background: -webkit-linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.msgComum {
  font-family: Open Sans, var(--nv-fallback-ff);
  font-size: 30px;
  color: #b7a6f5;
}
.card-msg {
  padding: 20px 50px;
  margin: 10px;
}
</style>
