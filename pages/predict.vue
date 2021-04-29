<template>
    <div>
        <div v-if="isTabPredict" class="d-flex justify-center py-10" style="min-height:100vh;">
            <div >
                <div style="position:relative;min-width:200px;min-height:200px;text-align:center">
                    <img class="upToDown" src="~assets/robo1.png" style="width:150px">
                </div>
                <div>
                    <div class="questionTitle fBold" style="text-align:center"><span class="textBlue"> Hello!</span> how can I help you?</div>
                    <div style="flex-flow:row wrap">
                        <div class="choiceButton ma-2" @click="$router.push('/predict/salary')">
                            <v-icon class="mr-2">mdi-cash-multiple</v-icon> want to predict my salary if I work in EU Region
                        </div>
                        <div class="choiceButton ma-2">
                            <v-icon class="mr-2">mdi-city-variant</v-icon> Which city is the best that suit my expected salary
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <v-fade-transition>
                <nuxt-child/>
            </v-fade-transition>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        computed:{
            isTabPredict:function(){
                if(this.$route.path.includes('salary')||this.$route.path.includes('city')){
                    console.log("false")
                    return false
                }else {
                    return true
                }
            }
        }
    }
</script>