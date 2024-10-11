import express from 'express';
import fetch from 'isomorphic-fetch';

import { CONFIGS } from './configs';

const app = express();
const {PORT} = CONFIGS.APP

app.use(express.json())
app.use(express.static('public'))

app.get('/health', (req,res,next)=>{
    res.send({
        status: res.statusCode,
        message: `server is up and running on port ${PORT}`
    })
})

app.post('/send' , (req,res,next)=>{
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${CONFIGS.RECAPTCHA.V3.SECRET_KEY}&response=${req.body.token}`;
    console.log('url: ', url);
    fetch(url, {
        method: 'post'
    })
        .then(response => response.json())
        .then(google_response => {
            console.log({google_response});
            res.json({ google_response })
        })
        .catch(error => res.json({ error }));
})

app.listen(PORT, ()=>{
    console.log(`server is up and running on port ${PORT}`);
})
