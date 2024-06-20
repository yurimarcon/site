<script setup lang="ts">
import { ref } from "vue";
import {Courses} from '@/data/YuriData'
</script>
<template>
  <div>
    <div class="">
      <v-container>
        <!-- -----------------------------------------------
            Start Courses Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Meus cursos
              </h2>
              <p class="text-muted">
                Comprando os cursos pelo link abaixo, você ajudará muito esse projeto!
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
                <img :src="card.img" class="img-fluid" :alt="card.img" />
              </div>
              <v-card-text class="pa-5">
                <h5 class="font-weight-medium font-18">{{ card.title }}</h5>
                <p class="font-14 mb-0 text-muted">{{ card.author }}</p>



                <v-row
                align="center"
                class="mx-0"
                >
                  <v-rating
                    :model-value="card.rate"
                    active-color="warning"
                    size="x-small"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="text-grey ms-4">
                    {{card.rate}}
                  </div>

                  <div class="mt-1">
                    <v-btn 
                    class="bg-primary mr-3 text-white font-weight-black" 
                    elevation="2" >
                      {{card.promotePrice}}
                    </v-btn>
                    <v-btn 
                    variant="tonal" 
                    class="text-disabled text-decoration-line-through font-weight-black"
                    > 
                      R$189,90 
                    </v-btn>
                  </div>
                </v-row>
  

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
