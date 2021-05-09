const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

import axios from 'axios'
import qs from 'qs'


app.get('/retrieve-ibm-access-token', (req, res) => {

    //data to send
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
      data : data
    };

    //sending request
    axios(config)
      .then((response)=>{
        let access_token = response.data.access_token
        res.json({data:access_token})
      })
      .catch((error)=> {
        console.log(error);
    })

})

app.post('/request-prediction', (req, res) => {

    console.log("Asdasd")
    console.log(req.body.input_data)

    axios({
        url:'https://gw.jp-tok.apigw.appdomain.cloud/api/4635e8924e0681012c39e6a33b37e10b413cf33e443cb4bbf5ab3325ebe4c10d/proxy-of-watson-auto-ai?version=2021-04-29',
        method:'POST',
        //set up access token (IAM Token)
        headers:{
            'Authorization':'Bearer ' + req.body.access_token
        },
        //include the data
        data:{input_data:req.body.input_data}
    }).then(response=>{
        console.log(response)
        res.json({data:response.data})
    }).catch(err=>{
        console.log(err)
        if(err.response){
            res.json({data:err.response.message})
        }
    })

})

module.exports = app

