const app = require('express')()
const bodyParser = require('body-parser')

import axios from 'axios'
import qs from 'qs'

app.use(bodyParser.json())

//endpoint of requesting autoai prediction
app.post('/request-autoai-prediction', (req, res) => {

    //requesting Access token
    let requestAccessToken = ()=>{

        //defining data to send
       let data = qs.stringify({
        'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
        'apikey': process.env.VUE_APP_API_KEY
        });

        //axios config with method, url and header
        let config = {  
            method: 'POST',
            url: 'https://iam.cloud.ibm.com/identity/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        //sending request
        axios(config)
            .then((response) => {
                let access_token = response.data.access_token
                
                //once the access token ready, then we can request for prediction
                requestPrediction(access_token)
            })
            .catch((err) => {
                console.log(err)
                //printing error message
                if(err.response){
                    console.log(err.response.message)
                }
        })
    }
    
    //call request function
    requestAccessToken()

    let requestPrediction = (access_token)=>{
        
        axios({
            //endpoint of the deployed prediction model
            url: 'https://jp-tok.ml.cloud.ibm.com/ml/v4/deployments/15d46f3b-3f27-492d-a900-756cace9c8f6/predictions?version=2021-04-29',
    
            //XHR method
            method: 'POST',
    
            //set up access token (IAM Token)
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
    
            //input data
            data: { input_data: req.body.input_data }
    
        }).then(response => {

            //returning the response to client-side
            res.json({ data: response.data })
    
        }).catch(err => {
            console.log(err)

            //returning error response message
            if (err.response) {
                res.json({ data: err.response.message })
            }
        })
    }

})

module.exports = app

