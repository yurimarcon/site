<script setup lang="ts">

import Header from '@/components/section/header/Header-Yuri.vue';

</script>

<template>
  <v-app dark>
    <Header/>
    <v-main>
      <slot />  
    </v-main>
    <LcFooter/>
  </v-app>
</template>
