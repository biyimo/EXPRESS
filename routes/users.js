const express = require('express');
const router = express.Router()

router.get('/users',(req,res)=>{
    res.send([
        {
            name: 'Precious',
            phoneNumber: 7039738542,
            email: 'preciousolayinka8@gmail.com',
            married: false,
            hobbies: ['reading', 'running']
        },
        {
            name: 'Yinka',
            phoneNumber: 7039738542,
            email: 'yinka8@gmail.com',
            married: false,
            hobbies: ['reading', 'sleeping']
        }
    ])
})

router.get('/user/:id',(req,res)=>{
    res.send({
        name: 'Yinka',
        phoneNumber: 7039738542,
        email: 'yinka8@gmail.com',
        married: false,
        hobbies: ['reading', 'sleeping']
    })
})

router.post('/user',(req,res)=>{
    res.send('User added successfully')
})

router.put('/user/:id',(req,res)=>{
    res.send('User updated successfully')
})

router.delete('/user/:id',(req,res)=>{
    res.send('User deleted sucesssfully')
})

module.exports = router