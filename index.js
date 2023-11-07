const express = require('express');
const app = express();
const port = 8020;


app.get('/',(req, res)=>{
    res.send('welcome to homepage')
})


const productRouter = require('./routes/product')
app.use(productRouter)

const userRouter = require('./routes/users')
app.use(userRouter)





app.listen(port, ()=>{
    console.log('server started successfully');
})
