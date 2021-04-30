<template>

 <div class="d-flex justify-center bg-blue">
   
      <!-- Landing Page Start -->
      <div id="nav">
        <section id="header" class="header">
          <div style="flex-grow: 1">
            <img  src="~assets/logo.png" style="width:150px" />
          </div>

          <span
            class="primary-mn"
            @click="$router.push('/predict')"
            >Get Started</span>
          <!-- Login Button Navbar End -->

        </section>

      </div>

    <div style="min-height:100vh;" class="mainContent-container">
      <v-container fill-height>
        <v-row class="reverseMobile">

          <v-col cols="12" md="6" class="d-flex align-center">
            <div>
              <div class="mainText mb-5">
                <span class="mainText_content">Career decision intelligence</span>
              </div>
              <div class="fMedium">We help IT Professionals to predict their salary in EU Region, based on the skillsets, years of experience, specialties, and other features. We also able to suggest which city is the most relevant to start their new career.</div>
              <v-btn class="mt-5" rounded outlined color="blue"  @click="$router.push('/predict')">Get Started <v-icon>mdi-arrow-right</v-icon></v-btn>
              <v-alert
                class="mt-5"
                color="blue"
                type="info"
                dense
                text
              >
                <small>This project utilizes <a href="https://www.ibm.com/cloud/watson-studio/autoai?cm_sp=freelancer-_-AutoAI-_-cta" target="_blank"><b>Auto AI</b></a>, the new feature of <a href="https://www.ibm.com/cloud/watson-studio/autoai?cm_sp=freelancer-_-AutoAI-_-cta" target="_blank"><b>IBM Cloud’s Watson Studio.</b></a></small>
              </v-alert>
            </div>
          </v-col>

          <v-col cols="12" md="6">
                  <lottie-player
                    src="https://assets1.lottiefiles.com/packages/lf20_xsnsvpbs.json"
                    background="transparent"
                    speed="1"
                    style="width:100%;max-width:500px"
                    loop
                    autoplay
                  ></lottie-player>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="white--text pa-2 d-flex justify-space-between" style="position:absolute; bottom:0; width:100%; background-color:#194b8f;z-index:15;font-size:0.9em">
      <div>This is a demo project</div>
      <div><b>Brahma Putra</b></div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  components: {
    accessToken:''
  },
  created(){

  
      },
    methods:{
    }
  }
</script>
