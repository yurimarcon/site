<script setup lang="ts">

// import Header from '@/components/section/header/Header-Yuri.vue';
// import Header from '@/components/section/header/Header-Yuri-light.vue';

</script>

<template>
  <v-app dark>
    <SectionHeaderYuriLight/>
    <v-main>
      <slot />  
    </v-main>
    <LcFooter/>
  </v-app>
</template>
