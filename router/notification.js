const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();


router.post('/sendToALL', (req,res) => {
   var notification =
   {
       title:req.body,
       text:req.body
   };
   var fcm_tokens = [];

   var notification_body = {
       notification:notification,
       registration_ids: fcm_tokens
   }
   fetch('https://fcm.googleapis.com/fcm/send', {
       'method':'POST',
       'headers':{
           'Authorization':'key='+'AAAAYrJIiVY:APA91bGBfo72wJkBdyO8MBKQ0mcYqeIxYsktz_vmaA0SUwZUhJSZ51gk7P3ytRpd5w4W4RNmfhXjxF69ZGwwOh4lympuuz6fiam2qFYh-hZuLcX6ZZhf0o1V19fSOY8SSVuTzuuEGPDN',
            'Content-Type':'application/json'
       },
       'body':JSON.stringify(notification_body)
   }).then(() => {
       res.status(200).send('Notification send successfully');
    }).catch((err) => {
        res.status(200).send('something went to wromg');
        console.log(err)
})
});
module.exports = router;