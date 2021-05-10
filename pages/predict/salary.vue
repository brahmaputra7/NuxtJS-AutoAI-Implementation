<template>
    <div class="d-flex justify-center pa-5" style="min-height:100vh;">
            <div>
                <div style="position:relative;min-width:200px;min-height:200px;text-align:center">
                    <lottie-player
                      src="https://assets2.lottiefiles.com/packages/lf20_oxoSX7.json"
                      background="transparent"
                      speed="1"
                      style="width: 100%; max-width: 300px"
                      loop
                      autoplay
                      class="mx-auto"
                      v-if="predictStep==11&&checked&&predictSuccess" 
                    ></lottie-player>
                    
                      <img class="upToDown" src="~assets/robo1.png" style="width: 150px" v-else />
                </div>
                <v-fade-transition hide-on-leave>
                    <div v-if="predictStep==1">
                        <div class="questionTitle fBold" style="text-align:center"><span class="textBlue"> Awesome!</span> first, I need to know which superhero are you.</div>
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
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Woah, a Backend! Loved it.</span> please pick your most relevant technology.</div>
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
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Machine Learning! Loved it.</span> please pick your most relevan technology.</div>
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
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','R')">
                                        <img src="~assets/r.png"/>
                                        R
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div v-if="features['Position']=='Data Analyst'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Data Analyst! Loved it.</span> please pick your most relevan technology.</div>
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
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','IBM Cloud')">
                                        <img src="~assets/ibm.png"/>
                                         IBM Cloud
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Azure')">
                                        <img src="~assets/azure.png"/>
                                        Azure
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','AWS')">
                                        <img src="~assets/aws.png"/>
                                        Amazon Web Services
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="features['Position']=='Mobile Developer'">
                            <div  class="questionTitle fBold" style="text-align:center"><span class="textBlue">Mobile apps maker! Loved it.</span> please pick your most relevan infrastructure platform.</div>
                            <div class="d-flex justify-center">
                                <div  class="d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Swift')">
                                        <img src="~assets/swift.png"/>
                                        Swift
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Kotlin')">
                                        <img src="~assets/kotlin.png"/>
                                        Kotlin
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Clojure')">
                                        <img src="~assets/clojure.png"/>
                                        Clojure
                                    </div>
                                    <div class="squareButton ma-2" @click="nextStep('Your main technology','Objective-c')">
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
                                        <img src="~assets/assembly.png"/>
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
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Middle')">
                                        Middle
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('Seniority level','Senior')">
                                        Senior
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
                                    <v-text-field style="width:100%;font-size:2em"  :min="0" max="50" class="elevation-0 mr-3" flat dense hide-details type="number" solo-inverted v-model="yearsExperience">
                                        <template v-slot:append>
                                            <div style="font-size:0.5em">years</div>
                                        </template>
                                    </v-text-field>
                                    <v-btn block color="blue"class="mt-5"  dark @click="nextStep('Total years of experience',yearsExperience)">OK!</v-btn>
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
                                Which city do you expect to work in?</div>
                            <div class="d-flex justify-center">
                                <div  class="mt-10 d-flex justify-center align-center" style="flex-flow:row wrap; max-width:700px">
                                    <div class="choiceButton ma-2" @click="nextStep('City','Berlin')">
                                        Berlin
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('City','Amsterdam')">
                                        Amsterdam
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('City','Cologne')">
                                        Cologne
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('City','Frankfurt')">
                                        Frankfurt
                                    </div>
                                    <div class="choiceButton ma-2" @click="nextStep('City','Munich')">
                                        Munich
                                    </div>
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
                        <div v-if="checked&&predictSuccess&&!predictFailed">
                            <div class="questionTitle fBold" style="text-align:center">
                                 <span class="textBlue">I told you, You're awesome! </span>
                                here is your predicted salary:</div>
                            <div class="d-flex justify-center">
                               <div class="mt-10" style="padding:10px;border-radius:16px;background-color:#259758;color:#fff;font-size:2.5em;font-weight:bold">
                                   <span class="yellow--text">€</span>{{formatSalary(expectedSalary)}}
                               </div>
                            </div>
                            <div class="d-flex align-center justify-center mt-10 centerMob">
                                <a @click="downloadPdf()" small class="linkButton" :href="getLink" target="_blank" outlined color="blue">
                                <v-icon color="blue">mdi-cloud-download</v-icon> Prediction Summary
                                </a>
                            </div>
                            <div class="d-flex align-center justify-center mt-5 centerMob">
                                <a small class="linkButton" :href="getLink" target="_blank" outlined color="blue">
                                  <span style="white-space:normal">discover<b class="mx-2">{{features['Position']}}</b>Jobs in<b class="mx-2">{{features['City']}}</b></span>
                                </a>
                            </div>
                            <div class="d-flex align-center justify-center mt-10 centerMob" ><b style="cursor:pointer" class="mr-3 blue--text" @click="$router.push('/predict')">Let's try another case!</b> <b style="cursor:pointer" class="pink--text" @click="$router.push('/')">Go to landing page</b></div>
                        </div>
                        <div v-if="checked&&!predictSuccess&&predictFailed">
                             <div class="questionTitle fBold" style="text-align:center">
                                 <span class="red--text">Sorry, </span>
                                predicting process failed.</div>
                            <div class="d-flex justify-center">
                               <div class="mt-10" style="padding:10px;border-radius:16px;background-color:red;color:#fff;font-size:1.5em;font-weight:bold">
                                   Error: {{errorCode}}
                               </div>
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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
    export default {
        transition:'home',
        data(){
            return {
                predictStep:1,
                features:{            
                    "Age":25,
                    "Gender":'Male',
                    "City":'Berlin',
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
                expectedSalary:0,
                errorCode:'',
                predictFailed:false,
                predictSuccess:false,
                checked:false
            }
        },
        methods:{
            retrieveTokenData(){
                this.checked =false
                this.predictFailed=false
                this.predictSuccess=false
                this.sendLoader = true
                //data to send
                let data = qs.stringify({
                    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
                    'apikey': process.env.VUE_APP_API_KEY
                });
                //axios config with method, url and header
                let config = {
                  method: 'POST',
                  url: 'https://gw.jp-tok.apigw.appdomain.cloud/api/4635e8924e0681012c39e6a33b37e10b413cf33e443cb4bbf5ab3325ebe4c10d/iam-proxy',
                  headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  data : data
                };
                //sending request
                axios(config)
                  .then((response)=>{
                    this.accessToken = response.data.access_token
                    // start predicting when th token is ready
                    this.startPredicting()
                  })
                  .catch((error)=> {
                    console.log(error);
                  });
            },
            downloadPdf(){
              let docDefinition = {
                content: [
                  {
                    image:'logo',
                    width:150,
                    alignment:'center'
                  },
                  {
                    margin:[0,20,0,10],
                    text:'Prediction Summary',
                    fontSize:20,
                    bold:true,
                    alignment:'center'
                  },
                  {
                    margin:[0,20,0,10],
                    text:'Prediction Input',
                    bold:true,
                    alignment:'center'
                  },


                  {
                    style: 'tableExample',
                    table: {
                      widths:['*','*'],
                      body: [
                        [{text:'KEY',bold:true}, {text:'VALUE',bold:true}],
                        ['Position',this.features['Position']],
                        ['Total years of experience',this.features['Total years of experience']],
                        ['Your main technology',this.features['Your main technology']],
                        ['Seniority level',this.features['Seniority level']],
                        ['Main language at work',this.features['Main language at work']],
                        ['Company size',this.features['Company size']],
                        ['Company type',this.features['Company type']],
                        ['City',this.features['City']],
                        ['Gender',this.features['Gender']],
                        ['Age',this.features['Age']],
                      ]
                    },
                  },
                  {
                    margin:[0,20,0,10],
                    text:'Result',
                    bold:true,
                    alignment:'center'
                  },{
                    style: 'tableExample',
                    table: {
                      widths:['*','*'],
                      body: [
                        [{text:'KEY',bold:true}, {text:'VALUE',bold:true}],
                        ['Yearly brutto salary', this.formatSalary(this.expectedSalary)]
                      ]
                    },
                    alignment:'center'
                  },
                  {
                    margin:[0,20,0,10],
                    text:'In order to get a job in EU affairs, you need to be, at least superficially, familiar with the type of recruitment or selection process that takes place because you need to make sure that you pass these filters in order to get a job.'
                  },
                  {
                    margin:[0,20,0,10],
                    text:'Find advice for EU citizens on living, moving, working or finding a job, and facts on visas and immigration for non-EU citizens. Learn about social security, pensions, consumer and passenger rights, public health and European culture. Please refer to this link to get more information: '
                  },
                  {
                    text:'https://ec.europa.eu/info/live-work-travel-eu_en',
                    bold:true

                  }
                ],
                images: {
                  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkcAAACACAYAAAABMc3SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTMwVDA0OjQwOjM1KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTMwVDA0OjQwOjM1KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0zMFQwNDo0MDozNSswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMTJjOGNjMS1kMDQ0LTcwNGQtYTRkNC00YjQxYzMyNmEyNGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MzQ0NmQzMC1iM2JkLWJkNGYtYjU0Ni05NTZkYTZhNTlmMDQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NThhNWQzZi0zMzY1LTY5NDctYThjNy0yZjRiYjE5NWJlOWIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NThhNWQzZi0zMzY1LTY5NDctYThjNy0yZjRiYjE5NWJlOWIiIHN0RXZ0OndoZW49IjIwMjEtMDQtMzBUMDQ6NDA6MzUrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDEyYzhjYzEtZDA0NC03MDRkLWE0ZDQtNGI0MWMzMjZhMjRlIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTMwVDA0OjQwOjM1KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0idGVjaHBhdGgiIHBob3Rvc2hvcDpMYXllclRleHQ9InRlY2hwYXRoIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5u0O/vAAAmI0lEQVR42u2dCXhU1dnHQVDQgkJmycRatdWvWhQ/8WPJvieTRNuiVdtaq1VkT8hKQkgIIZCFsLm0ftam1qX6tdSq1VqtaMW6VeoCFhdEES2UXUBRlkDme8+dMzM3yUwyc8+5d+7N/M/z/B50Mjnn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'
                }
              }

              pdfMake.createPdf(docDefinition).open();
            },
            startPredicting(){
                
                //data input
                let data = {
                    "input_data": [
                        {
                        "fields": [
                            "Age",
                            "Gender",
                            "City",
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
                            this.features['City'],
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

                //sending POST request to api endpoint
                axios({
                    url:'https://gw.jp-tok.apigw.appdomain.cloud/api/4635e8924e0681012c39e6a33b37e10b413cf33e443cb4bbf5ab3325ebe4c10d/proxy-of-watson-auto-ai?version=2021-04-29',
                    method:'POST',
                    //set up access token (IAM Token)
                    headers:{
                        'Authorization':'Bearer ' + this.accessToken
                    },
                    //include the data
                     data:data
                }).then(res=>{
                    //set orediction result result
                    this.expectedSalary = res.data.predictions[0].values[0][0].toFixed(0)
                    //set success and failed status
                    this.predictSuccess = true
                    this.predictFailed = false
                }).catch(err=>{
                    if(err.response){
                        //print error
                        this.errorCode = err.response.data.errors[0].code
                    }
                    this.predictSuccess = false
                    this.predictFailed = true
                }).finally(res=>{
                    this.sendLoader = false
                    this.checked = true
                })
            },
            nextStep(features,value){
                if(this.predictStep==9){
                    let today = new Date()
                    let born = new Date(value)
                    let age = (today.getFullYear() - born.getFullYear())
                    this.features[features] = age
                }else if(this.predictStep==10){
                    this.retrieveTokenData()
                }else{
                     if(features=='Seniority level'&&value=='Junior'){
                       this.yearsExperience = 1
                     }else if(features=='Seniority level'&&value=='Middle'){
                       this.yearsExperience = 3
                     }else if(features=='Seniority level'&&value=='Senior'){
                       this.yearsExperience = 7
                     }else if(features=='Seniority level'&&value=='Lead'){
                       this.yearsExperience = 10
                     }
                     this.features[features] = value
                }
                this.predictStep+=1
            },
            formatSalary(value) {
                let val = (value/1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
        },
        computed:{
            getLink:function(){
                let cityCode = 'Berlin'
                if(this.features['City']=='Berlin'){
                    cityCode = 'de3'
                }
                if(this.features['City']=='Amsterdam'){
                    cityCode = 'nl-NS'
                }
                if(this.features['City']=='Cologne'){
                    cityCode = 'de-NS'
                }
                if(this.features['City']=='Frankfurt'){
                    cityCode = 'de-NS'
                }
                if(this.features['City']=='Munich'){
                    cityCode = 'de2'
                }
                let link = 'https://ec.europa.eu/eures/portal/jv-se/search?page=1&resultsPerPage=10&orderBy=BEST_MATCH&locationCodes='+cityCode+'&keywordsEverywhere='+this.features['Position']
                return link
            }
        }
    }
</script>