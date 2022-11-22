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
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <template v-slot:extension> </template>
    </v-app-bar>
  </v-card>
</template>

<script></script>

<style scoped></style>
