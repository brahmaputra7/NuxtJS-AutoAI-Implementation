<template>
    <div class="d-flex justify-center pa-10" style="min-height:100vh;">
            <div>
                <div style="position:relative;min-width:200px;min-height:200px;text-align:center">
                    <v-expand-transition v-if="predictStep>=7&&!predictStep==11">
                        <img class="upToDown" src="~assets/robo2.png" style="width:150px" >
                    </v-expand-transition>
                    <v-expand-transition  v-else>
                     <img class="upToDown" src="~assets/robo1.png" style="width:150px">
                    </v-expand-transition>
                </div>
                <v-fade-transition hide-on-leave>
                    <div v-if="predictStep==1">
                        <div class="questionTitle fBold" style="text-align:center"><span class="textBlue"> Awesome!</span> first, I need to know which super hero are you.</div>
                        <div class="d-flex justify-center">
                            <div class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                <div class="squareButton ma-2" @click="nextStep('Position','Backend Developer')">
                                    <img src="~assets/backend.png"/>
                                    Backend Developer
                                </div>
                                <div class="squareButton ma-2" @click="nextStep('Position','Mobile Developer')">
                                    <img src="~assets/mobile.png"/>
                                    Mobile Developer
                                </div>
                                <div class="squareButton ma-2"  @click="nextStep('Position','ML Engineer')">
                                    <img src="~assets/ml.png"/>
                                    ML Engineer
                                </div>
                                <div class="squareButton ma-2"  @click="nextStep('Position','DevOps')">
                                    <img src="~assets/devops.png"/>
                                    DevOps
                                </div>
                                <div class="squareButton ma-2"  @click="nextStep('Position','Embedded Developer')">
                                    <img src="~assets/embbeded.png"/>
                                    Embedded Developer
                                </div>
                                <div class="squareButton ma-2" @click="nextStep('Position','Data Analyst')">
                                    <img src="~assets/qa.png"/>
                                    Data Analyst
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==2">
                        <div v-if="features['Position']=='Backend Developer'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Woah, a Backend! Loved it.</span> please pick your most relevan technology.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','PHP')">
                                        <img src="~assets/php.png"/>
                                        PHP
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Java')">
                                        <img src="~assets/java.png"/>
                                        Java
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','NodeJS')">
                                        <img src="~assets/nodejs.png"/>
                                        NodeJS
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Python')">
                                        <img src="~assets/python.png"/>
                                        Python
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Ruby')">
                                        <img src="~assets/ruby.png"/>
                                        Ruby
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','C++')">
                                        <img src="~assets/cpp.png"/>
                                        C++
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="features['Position']=='ML Engineer'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Data Scientist! Loved it.</span> please pick your most relevan technology.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Python')">
                                        <img src="~assets/python.png"/>
                                        Python
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Scala')">
                                        <img src="~assets/scala.png"/>
                                        Scala
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Julia')">
                                        <img src="~assets/julia.png"/>
                                        Julia
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Julia')">
                                        <img src="~assets/r.png"/>
                                        R
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div v-if="features['Position']=='Data Analyst'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Data Scientist! Loved it.</span> please pick your most relevan technology.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Python')">
                                        <img src="~assets/python.png"/>
                                        Python
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Julia')">
                                        <img src="~assets/r.png"/>
                                        R
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="features['Position']=='DevOps'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">DevOps master! Loved it.</span> please pick your most relevan infrastructure platform.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','AWS')">
                                        <img src="~assets/aws.png"/>
                                        Amazon Web Services
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Azure')">
                                        <img src="~assets/azure.png"/>
                                        Azure
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="features['Position']=='Mobile Developer'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Mobile apps maker! Loved it.</span> please pick your most relevan infrastructure platform.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','AWS')">
                                        <img src="~assets/swift.png"/>
                                        Swift
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Azure')">
                                        <img src="~assets/kotlin.png"/>
                                        Kotlin
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Clojure')">
                                        <img src="~assets/clojure.png"/>
                                        Clojure
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Clojure')">
                                        <img src="~assets/objectivec.png"/>
                                        Objective-C
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="features['Position']=='Embedded Developer'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Microprocessor Master! Loved it.</span> please pick your most relevan technology.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','C++')">
                                        <img src="~assets/cpp.png"/>
                                        C++
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','ASM')">
                                        <img src="~assets/r.png"/>
                                        Assembly Language
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==3">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center"><span class="textBlue">Cool! a {{features['Your main technology']}} crafter.</span> please pick your seniority level.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Junior')">
                                        Junior
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Senior')">
                                        Senior
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Middle')">
                                        Middle
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Lead')">
                                        Lead
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==4">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center"><span class="textBlue">Great! </span> How long is your work experience in this field?</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <v-text-field style="width:100%"  :min="0" max="50" class="elevation-0 mr-3" flat dense hide-details type="number" solo-inverted v-model="yearsExperience">
                                        <template v-slot:append>
                                            <div>years</div>
                                        </template>
                                    </v-text-field>
                                    <v-btn block class="mt-5" color="blue" dark @click="nextStep('Total years of experience',yearsExperience)">OK!</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>
                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==5">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center"><span class="textBlue">Thats nice! </span> What kind of company do you expect to work with?</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="choiceButton ma-2" @click="nextStep('Company type','Product')">
                                        Company that produce products (e.g. Google, Facebook, IBM)
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Company Type','Consulting')">
                                        Consulting Company (e.g. Accenture, Atos, T-Systems)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>
                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==6">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center"><span class="textBlue">Awesome! </span> What size of company do you expect? choices below showing the numbers of employee.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="choiceButton ma-2" @click="nextStep('Company size','up to 10')">
                                        up to 10
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Company size','51-100')">
                                        51 - 100
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Company size','101-100')">
                                        101 - 1000
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Company size','1000+')">
                                        1000+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>
                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==7">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center"><span class="textBlue">Incredible! </span> now we are going closer to the result. <br/>Please pick one of these language that you expect to use with your teammates.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','English')">
                                        English
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','German')">
                                        German
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','Dutch')">
                                        Dutch
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','Italian')">
                                        Italian
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','French')">
                                        French
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Main language at work','Russian')">
                                        Russian
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==8">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center">
                                <span class="textBlue" v-if="features['Main language at work']=='English'">Wonderful! </span>
                                <span class="textBlue" v-if="features['Main language at work']=='Dutch'">Geweldig! </span>
                                <span class="textBlue" v-if="features['Main language at work']=='German'">Wunderbar! </span>
                                <span class="textBlue" v-if="features['Main language at work']=='Italian'">meraviglioso! </span>
                                <span class="textBlue" v-if="features['Main language at work']=='French'">Merveilleuse! </span>
                                <span class="textBlue" v-if="features['Main language at work']=='Russian'">замечательный! </span>
                                Please input your expected salary.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <v-text-field  style="width:100%" :min="10000" :max="350000" class="elevation-0 mr-3" flat dense hide-details type="number" solo-inverted v-model="expectedSalary">
                                        <template v-slot:prepend-inner>
                                            <div>€</div>
                                        </template>
                                    </v-text-field>
                                    <v-btn block class="mt-5" color="blue" dark @click="nextStep('Yearly brutto salary in EUR',expectedSalary)">OK!</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==9">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center">
                                 <span class="textBlue">I like {{features['City']}}! </span>
                                Now, Please pick your date of birth. I need your age.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:column wrap; max-width:700px">
                                   <v-date-picker
                                    v-model="picker"
                                    :max="new Date('2001-04-30').toISOString().substr(0, 10)"
                                    :min="new Date('1940-01-01').toISOString().substr(0, 10)"
                                    elevation="15"
                                    ></v-date-picker>
                                    <v-btn block color="blue" dark @click="nextStep('Age',picker)">OK!</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>

                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==10">
                        <div>
                            <div class="questionTitle fBold" style="text-align:center">
                                 <span class="textBlue">Great! </span>
                                This is the last one, please pick your gender.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                   <div class="choiceButton ma-2" @click="nextStep('Gender','Male')">
                                        Male
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Gender','Female')">
                                        Female
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Gender','Male')">
                                        Rather Not Say
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-fade-transition>
                
                <v-fade-transition  hide-on-leave>
                    <div v-if="predictStep==11">
                        <div v-if="sendLoader">
                            <div class="d-flex justify-center">
                                <v-progress-circular
                                    class="mx-auto"
                                    :width="10"
                                    :size="50"
                                    color="green"
                                    indeterminate
                                    ></v-progress-circular>
                            </div>
                            <div class="questionTitle fBold" style="text-align:center">
                                 <span class="textBlue">You're the best! </span>
                                One moment please.</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:column wrap; max-width:700px">
                                  
                                </div>
                            </div>
                        </div>
                        
                    <div v-else>
                        <div>
                            <div class="questionTitle fBold" style="text-align:center">
                                 <span class="textBlue">Sorry, this feature is under construction. Try predicting the <a @click="$router.push('/predict/salary')"> salary</a> instead. </span>
                                </div>
                            <div class="d-flex align-center justify-center mt-10" ><b style="cursor:pointer" class="mr-3 blue--text" @click="$router.push('/predict')">Let's try another case!</b> <b style="cursor:pointer" class="pink--text" @click="$router.push('/')">Go to landing page</b></div>

                        </div>
                    </div>
                    </div>
                </v-fade-transition>

            </div> 
        </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'

    export default {
        transition:'home',
        data(){
            return {
                predictStep:1,
                features:{            
                    "Age":25,
                    "Gender":'Male',
                    "Yearly brutto salary in EUR":'10000',
                    "Position":'Backend Developer',
                    "Total years of experience":1,
                    "Seniority level":'Senior',
                    "Your main technology":'PHP',
                    "Main language at work":'English',
                    "Company size":'11-50',
                    "Company type":'Product'
                },
                yearsExperience:5,
                picker:'1996-04-26',
                accessToken:'',
                sendLoader:false,
                expectedSalary:10000,
                city:'Amsterdam'
            }
        },
        methods:{
            retrieveTokenData(){
                this.sendLoader = true
                var data = qs.stringify({
                'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
                'apikey': 'wRTjV0GKOVhUw5s3_kU5BSEn8IGWIPBIM2e-b-V5q6BQ' 
                });
                var config = {
                  method: 'post',
                  url: 'https://gw.jp-tok.apigw.appdomain.cloud/api/4635e8924e0681012c39e6a33b37e10b413cf33e443cb4bbf5ab3325ebe4c10d/iam-proxy',
                  headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  data : data
                };

                axios(config)
                  .then((response)=>{
                    console.log(response.data);
                    this.accessToken = response.data.access_token
                    this.startPredicting()
                  })
                  .catch((error)=> {
                    console.log(error);
                  });
            },
            startPredicting(){
                let data = {
                    "input_data": [
                        {
                        "fields": [
                            "Age",
                            "Gender",
                            "Yearly brutto salary in EUR",
                            "Position",
                            "Total years of experience",
                            "Seniority level",
                            "Your main technology",
                            "Main language at work",
                            "Company size",
                            "Company type"
                        ],
                        "values": [
                            [
                            this.features['Age'],
                            this.features['Gender'],
                            this.features['Yearly brutto salary in EUR'],
                            this.features['Position'],
                            this.features['Total years of experience'],
                            this.features['Seniority level'],
                            this.features['Your main technology'],
                            this.features['Main language at work'],
                            this.features['Company size'],
                            this.features['Company type'],
                            ]
                        ]
                        }
                    ]
                }

                console.log(data)

                axios({
                    url:'https://gw.jp-tok.apigw.appdomain.cloud/api/4635e8924e0681012c39e6a33b37e10b413cf33e443cb4bbf5ab3325ebe4c10d/proxy-of-watson-auto-ai?version=2021-04-29',
                    method:'POST',
                    headers:{
                        'Authorization':'Bearer ' + this.accessToken
                    },
                     data:data
                }).then(res=>{
                    console.log(res)
                    this.city = res.data.predictions[0].values[0][0]
                    console.l
                }).catch(err=>{
                     console.log(err)
                        if(err.response){
                            console.log(err.response)
                        }
                }).finally(res=>{
                    this.sendLoader = false
                })
            },
            nextStep(features,value){
                if(this.predictStep==9){
                    let today = new Date()
                    let born = new Date(value)

                    let age = (today.getFullYear() - born.getFullYear())
                    this.features[features] = age
                }else if(this.predictStep==10){
                    //this.retrieveTokenData()
                }else{
                     this.features[features] = value
                }
                console.log(this.features)
                this.predictStep+=1
            },
            formatSalary(value) {
                let val = (value/1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
        }
    }
</script>