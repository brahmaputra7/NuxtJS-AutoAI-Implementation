<template>
   <div class="pa-5" style="background-attachment:fixed;background-position:center;background-size:cover":style="{'background-image': `url(${require('../assets/bg.jpg')})`}">
    <div style="position: fixed; left: 10px; top: 10px">
      <v-btn fab dark class="mr-2 green" @click="$router.push('/')"
        ><v-icon>mdi-home</v-icon></v-btn
      >
      <v-btn @click="$router.push('/predict')" fab
        ><v-icon>mdi-refresh</v-icon></v-btn
      >
    </div>
    <div
      v-if="isTabPredict"
      class="d-flex justify-center py-10"
      style="min-height: 100vh"
    >
      <div>
        <div
          style="
            position: relative;
            min-width: 200px;
            min-height: 200px;
            text-align: center;
          "
        >
          <img class="upToDown" src="~assets/robo1.png" style="width: 150px" />
        </div>
        <div>
          <div class="questionTitle fBold" style="text-align: center">
            <span class="textBlue"> Hello!</span> Welcome to techpath, how can I
            help you?
          </div>
          <div class="text-center">
            <div
              class="choiceButton ma-2 mx-auto"
              @click="$router.push('/predict/salary')"
            >
              <v-icon class="mr-2">mdi-cash-multiple</v-icon>I want to predict
              my salary if I work in the EU Region
            </div>
            <div class="choiceButton_disabled ma-2 mx-auto">
              <v-icon class="mr-2">mdi-city-variant</v-icon> (Coming Soon) I
              want to know which city is the best that suit my expected salary
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  transition: "home",
  data() {
    return {};
  },
  computed: {
    isTabPredict: function () {
      if (
        this.$route.path.includes("salary") ||
        this.$route.path.includes("city")
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>