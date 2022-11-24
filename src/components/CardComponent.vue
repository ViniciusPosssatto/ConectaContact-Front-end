<template>
  <v-card elevation="20" color="#260845" class="card-msg" hover @click="routerPush">
    <span class="msg">@conectanuvem</span>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerPush() {
      console.log("adasd");
      this.$router.push({ path: "/contacts" });
    },
  },
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
.card-msg {
  padding: 30px 60px;
}
</style>
