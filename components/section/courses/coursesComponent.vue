<script setup>
import {Courses} from '@/data/YuriData'
</script>
<template>
  <div>
    <div class="">
      <v-container>
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
                    color="warning"
                    size="small"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="text-grey ms-4">
                    {{card.rate}}
                  </div>
                  
                  <div class="ml-2 font-weight-medium font-18">
                    CUPOM:
                    <v-chip 
                    class="ma-2 text-decoration-line-through font-weight-black" 
                    color="error" 
                    label
                    >
                      {{card.cupom}}
                    </v-chip>
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
                      {{card.price}}
                    </v-btn>
                  </div>
                </v-row>        
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
