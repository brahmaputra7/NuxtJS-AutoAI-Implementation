<template>
  <div class="d-flex justify-center pa-10" style="min-height: 100vh">
    <div>
      <div
        style="
          position: relative;
          min-width: 200px;
          min-height: 200px;
          text-align: center;
        "
      >
        <v-expand-transition v-if="predictStep >= 7 && !predictStep == 11">
          <img class="upToDown" src="~assets/robo2.png" style="width: 150px" />
        </v-expand-transition>
        <v-expand-transition v-else>
          <img class="upToDown" src="~assets/robo1.png" style="width: 150px" />
        </v-expand-transition>
      </div>
      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 1">
          <div class="questionTitle fBold" style="text-align: center">
            <span class="textBlue"> Awesome!</span> first, I need to know which
            superhero are you.
          </div>
          <div class="d-flex justify-center">
            <div
              class="d-flex justify-center align-center"
              style="flex-flow: row wrap; max-width: 700px"
            >
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'Backend Developer')"
              >
                <img src="~assets/backend.png" />
                Backend Developer
              </div>
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'Mobile Developer')"
              >
                <img src="~assets/mobile.png" />
                Mobile Developer
              </div>
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'ML Engineer')"
              >
                <img src="~assets/ml.png" />
                ML Engineer
              </div>
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'DevOps')"
              >
                <img src="~assets/devops.png" />
                DevOps
              </div>
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'Embedded Developer')"
              >
                <img src="~assets/embbeded.png" />
                Embedded Developer
              </div>
              <div
                class="squareButton ma-2"
                @click="nextStep('Position', 'Data Analyst')"
              >
                <img src="~assets/qa.png" />
                Data Analyst
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 2">
          <div v-if="features['Position'] == 'Backend Developer'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Woah, a Backend! Loved it.</span> please
              pick your most relevant technology.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'PHP')"
                >
                  <img src="~assets/php.png" />
                  PHP
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Java')"
                >
                  <img src="~assets/java.png" />
                  Java
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'NodeJS')"
                >
                  <img src="~assets/nodejs.png" />
                  NodeJS
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Python')"
                >
                  <img src="~assets/python.png" />
                  Python
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Ruby')"
                >
                  <img src="~assets/ruby.png" />
                  Ruby
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'C++')"
                >
                  <img src="~assets/cpp.png" />
                  C++
                </div>
              </div>
            </div>
          </div>
          <div v-if="features['Position'] == 'ML Engineer'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Machine Learning! Loved it.</span> please
              pick your most relevan technology.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Python')"
                >
                  <img src="~assets/python.png" />
                  Python
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Scala')"
                >
                  <img src="~assets/scala.png" />
                  Scala
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Julia')"
                >
                  <img src="~assets/julia.png" />
                  Julia
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Julia')"
                >
                  <img src="~assets/r.png" />
                  R
                </div>
              </div>
            </div>
          </div>
          <div v-if="features['Position'] == 'Data Analyst'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Data Analyst! Loved it.</span> please pick
              your most relevan technology.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Python')"
                >
                  <img src="~assets/python.png" />
                  Python
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Julia')"
                >
                  <img src="~assets/r.png" />
                  R
                </div>
              </div>
            </div>
          </div>
          <div v-if="features['Position'] == 'DevOps'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">DevOps master! Loved it.</span> please pick
              your most relevant infrastructure platform.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'AWS')"
                >
                  <img src="~assets/ibm.png" />
                  IBM Cloud
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Azure')"
                >
                  <img src="~assets/azure.png" />
                  Azure
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'AWS')"
                >
                  <img src="~assets/aws.png" />
                  Amazon Web Services
                </div>
              </div>
            </div>
          </div>
          <div v-if="features['Position'] == 'Mobile Developer'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Mobile apps maker! Loved it.</span> please
              pick your most relevant technology.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'AWS')"
                >
                  <img src="~assets/swift.png" />
                  Swift
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Azure')"
                >
                  <img src="~assets/kotlin.png" />
                  Kotlin
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Clojure')"
                >
                  <img src="~assets/clojure.png" />
                  Clojure
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'Clojure')"
                >
                  <img src="~assets/objectivec.png" />
                  Objective-C
                </div>
              </div>
            </div>
          </div>
          <div v-if="features['Position'] == 'Embedded Developer'">
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Microprocessor Master! Loved it.</span>
              please pick your most relevan technology.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'C++')"
                >
                  <img src="~assets/cpp.png" />
                  C++
                </div>
                <div
                  class="squareButton ma-2"
                  @click="nextStep('Your main technology', 'ASM')"
                >
                  <img src="~assets/assembly.png" />
                  Assembly Language
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 3">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue"
                >Cool! a {{ features["Your main technology"] }} crafter.</span
              >
              please pick your seniority level.
            </div>
            <div class="d-flex justify-center">
              <div
                class="d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Seniority level', 'Junior')"
                >
                  Junior
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Seniority level', 'Senior')"
                >
                  Senior
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Seniority level', 'Middle')"
                >
                  Middle
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Seniority level', 'Lead')"
                >
                  Lead
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 4">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Great! </span> How long is your work
              experience in this field?
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <v-text-field
                  style="width: 100%; font-size: 2em"
                  :min="0"
                  max="50"
                  class="elevation-0 mr-3"
                  flat
                  dense
                  hide-details
                  type="number"
                  solo-inverted
                  v-model="yearsExperience"
                >
                  <template v-slot:append>
                    <div style="font-size: 0.5em">years</div>
                  </template>
                </v-text-field>
                <v-btn
                  block
                  color="blue"
                  class="mt-5"
                  dark
                  @click="
                    nextStep('Total years of experience', yearsExperience)
                  "
                  >OK!</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 5">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Thats nice! </span> What kind of company do
              you expect to work with?
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company type', 'Product')"
                >
                  Company that produce products (e.g. Google, Facebook, IBM)
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company Type', 'Consulting')"
                >
                  Consulting Company (e.g. Accenture, Atos, T-Systems)
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 6">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Awesome! </span> What size of company do
              you expect? choices below showing the numbers of employee.
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company size', 'up to 10')"
                >
                  up to 10
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company size', '51-100')"
                >
                  51 - 100
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company size', '101-100')"
                >
                  101 - 1000
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Company size', '1000+')"
                >
                  1000+
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 7">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Incredible! </span> now we are going closer
              to the result. <br />Please pick one of these language that you
              expect to use with your teammates.
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'English')"
                >
                  English
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'German')"
                >
                  German
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'Dutch')"
                >
                  Dutch
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'Italian')"
                >
                  Italian
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'French')"
                >
                  French
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Main language at work', 'Russian')"
                >
                  Russian
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 8">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'English'"
                >Wonderful!
              </span>
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'Dutch'"
                >Geweldig!
              </span>
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'German'"
                >Wunderbar!
              </span>
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'Italian'"
                >meraviglioso!
              </span>
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'French'"
                >Merveilleuse!
              </span>
              <span
                class="textBlue"
                v-if="features['Main language at work'] == 'Russian'"
                >замечательный!
              </span>
              Which city do you expect to work in?
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('City', 'Berlin')"
                >
                  Berlin
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('City', 'Amsterdam')"
                >
                  Amsterdam
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('City', 'Cologne')"
                >
                  Cologne
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('City', 'Frankfurt')"
                >
                  Frankfurt
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('City', 'Munich')"
                >
                  Munich
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 9">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">I like {{ features["City"] }}! </span>
              Now, Please pick your date of birth. I need your age.
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: column wrap; max-width: 700px"
              >
                <v-date-picker
                  v-model="picker"
                  :max="new Date('2001-04-30').toISOString().substr(0, 10)"
                  :min="new Date('1940-01-01').toISOString().substr(0, 10)"
                  elevation="15"
                ></v-date-picker>
                <v-btn block color="blue" dark @click="nextStep('Age', picker)"
                  >OK!</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 10">
          <div>
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">Great! </span>
              This is the last one, please pick your gender.
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: row wrap; max-width: 700px"
              >
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Gender', 'Male')"
                >
                  Male
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Gender', 'Female')"
                >
                  Female
                </div>
                <div
                  class="choiceButton ma-2"
                  @click="nextStep('Gender', 'Male')"
                >
                  Rather Not Say
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>

      <v-fade-transition hide-on-leave>
        <div v-if="predictStep == 11">
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
            <div class="questionTitle fBold" style="text-align: center">
              <span class="textBlue">You're the best! </span>
              One moment please.
            </div>
            <div class="d-flex justify-center">
              <div
                class="mt-10 d-flex justify-center align-center"
                style="flex-flow: column wrap; max-width: 700px"
              ></div>
            </div>
          </div>

          <div v-else>
            <div v-if="checked && predictSuccess && !predictFailed">
              <div class="questionTitle fBold" style="text-align: center">
                <span class="textBlue">I told you, You're awesome! </span>
                here is your predicted salary:
              </div>
              <div class="d-flex justify-center">
                <div
                  class="mt-10"
                  style="
                    padding: 10px;
                    border-radius: 16px;
                    background-color: #259758;
                    color: #fff;
                    font-size: 2.5em;
                    font-weight: bold;
                  "
                >
                  <span class="yellow--text">€</span
                  >{{ formatSalary(expectedSalary) }}
                </div>
              </div>
              <div class="d-flex align-center justify-center mt-10">
                <v-btn :href="getLink" target="_blank" outlined color="blue"
                  >discover <b class="mx-2">{{ features["Position"] }}</b> Jobs
                  in <b class="mx-2">{{ features["City"] }}</b></v-btn
                >
              </div>
              <div class="d-flex align-center justify-center mt-10">
                <b
                  style="cursor: pointer"
                  class="mr-3 blue--text"
                  @click="$router.push('/predict')"
                  >Let's try another case!</b
                >
                <b
                  style="cursor: pointer"
                  class="pink--text"
                  @click="$router.push('/')"
                  >Go to landing page</b
                >
              </div>
            </div>
            <div v-if="checked && !predictSuccess && predictFailed">
              <div class="questionTitle fBold" style="text-align: center">
                <span class="red--text">Sorry, </span>
                predicting process failed.
              </div>
              <div class="d-flex justify-center">
                <div
                  class="mt-10"
                  style="
                    padding: 10px;
                    border-radius: 16px;
                    background-color: red;
                    color: #fff;
                    font-size: 1.5em;
                    font-weight: bold;
                  "
                >
                  Error: {{ errorCode }}
                </div>
              </div>
              <div class="d-flex align-center justify-center mt-10">
                <b
                  style="cursor: pointer"
                  class="mr-3 blue--text"
                  @click="$router.push('/predict')"
                  >Let's try another case!</b
                >
                <b
                  style="cursor: pointer"
                  class="pink--text"
                  @click="$router.push('/')"
                  >Go to landing page</b
                >
              </div>
            </div>
          </div>
        </div>
      </v-fade-transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  transition: "home",
  data() {
    return {
      //prediction step
      predictStep: 1,

      //features
      features: {
        Age: 25,
        Gender: "Male",
        City: "Berlin",
        Position: "Backend Developer",
        "Total years of experience": 1,
        "Seniority level": "Senior",
        "Your main technology": "PHP",
        "Main language at work": "English",
        "Company size": "11-50",
        "Company type": "Product",
      },

      yearsExperience: 5,
      picker: "1996-04-26",
      accessToken: "",
      sendLoader: false,
      expectedSalary: 0,
      errorCode: "",
      predictFailed: false,
      predictSuccess: false,
      checked: false,
    };
  },
  methods: {
    startPredicting() {

      //UI Status
      this.checked = false;
      this.predictFailed = false;
      this.predictSuccess = false;
      this.sendLoader = true;

      //defining data input
      let data = {
        fields: [
          "Age",
          "Gender",
          "City",
          "Position",
          "Total years of experience",
          "Seniority level",
          "Your main technology",
          "Main language at work",
          "Company size",
          "Company type",
        ],
        values: [
          [
            this.features["Age"],
            this.features["Gender"],
            this.features["City"],
            this.features["Position"],
            this.features["Total years of experience"],
            this.features["Seniority level"],
            this.features["Your main technology"],
            this.features["Main language at work"],
            this.features["Company size"],
            this.features["Company type"],
          ],
        ],
      };

      //request for AutoAI prediction through the serverMiddleware
      axios({
        //serverMiddleware Endpoint
        url: "/server-middleware/request-autoai-prediction",

        //Method
        method: "POST",

        //required data
        data: {
          input_data: [data]
        },
      })
        .then((res) => {
          console.log(res)
          
          //set prediction result
          this.expectedSalary = res.data.data.predictions[0].values[0][0].toFixed(
            0
          );

          //set status
          this.predictSuccess = true;
          this.predictFailed = false;
        })
        .catch((err) => {
          //if XHR is failed
          this.predictSuccess = false;
          this.predictFailed = true;
        })
        .finally((res) => {
          //if XHR is finished
          this.sendLoader = false;
          this.checked = true;
        });
    },

    nextStep(features, value) {
      if (this.predictStep == 9) {
        let today = new Date();
        let born = new Date(value);

        let age = today.getFullYear() - born.getFullYear();
        this.features[features] = age;
      } else if (this.predictStep == 10) {
        this.startPredicting();
      } else {
        this.features[features] = value;
      }
      this.predictStep += 1;
    },
    formatSalary(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    getLink: function () {
      let cityCode = "Berlin";

      if (this.features["City"] == "Berlin") {
        cityCode = "de3";
      }
      if (this.features["City"] == "Amsterdam") {
        cityCode = "nl-NS";
      }
      if (this.features["City"] == "Cologne") {
        cityCode = "de-NS";
      }
      if (this.features["City"] == "Frankfurt") {
        cityCode = "de-NS";
      }
      if (this.features["City"] == "Munich") {
        cityCode = "de2";
      }

      let link =
        "https://ec.europa.eu/eures/portal/jv-se/search?page=1&resultsPerPage=10&orderBy=BEST_MATCH&locationCodes=" +
        cityCode +
        "&keywordsEverywhere=" +
        this.features["Position"];
      return link;
    },
  },
};
</script>