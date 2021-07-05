const notification = require('./router/notification');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

app.use('/api/notification', notification);

 app.listen(PORT, () => {
     console.log("server started");
 })