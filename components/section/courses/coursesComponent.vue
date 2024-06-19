<script setup lang="ts">
import { ref } from "vue";
import {Courses} from '@/data/YuriData'
</script>
<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Courses Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Está pronto para ampliar seus conhecimentos?
              </h2>
              <p class="text-muted">
                Sempre preparamos cupons com os melhores descontos para fazer parte do seu crescimento proficional!
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Courses Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Courses
        ----------------------------------------------- -->
        <v-row class="mt-8">
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="card in Courses"
            :key="card.title"
          >
            <v-card 
            class="portfolio-card overflow-hidden card-shadow"
            :href="card.href"
            target="_blank"
            >
              <div class="portfolio-img">
                <img :src="`/images/courses/${card.img}`" class="img-fluid" :alt="card.img" />
              </div>
              <v-card-text class="pa-5">
                <h5 class="font-weight-medium font-18">{{ card.title }}</h5>
                <p class="font-14 mb-0 text-muted">{{ card.subtext }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Courses
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
