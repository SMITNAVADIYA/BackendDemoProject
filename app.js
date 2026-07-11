require('dotenv').config();
const express = require('express');

const app = express();


app.get('/',(req,res) => {
  console.log('ENV PORT---',process.env.PORT)
  res.send('<h3>This is h3</h3>');
})

// app.use((req,res,next) => {
//     console.log('Request url---',req.url);
//     console.log('Request method---',req.method);
//     next();
// });

// app.use((req,res,next) => {
//   return res.send('<h1>This is dummy response</h1>')
// })

app.listen(process.env.PORT, () => {
    console.log(`Server is start in port 3000!!!`);
})

