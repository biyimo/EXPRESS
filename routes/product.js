const express = require('express');
const router = express.Router()

router.get('/products',(req,res)=>{
    res.send([
        {
            name: 'Iphone 11',
            desc: 'black FU',
            price: '$1200',
            rating: 5
        },
        {
            name: 'Iphone 14',
            desc: 'Pink FU',
            price: '$1600',
            rating: 5
        }
    ])
})

router.get('/product/:id',(req,res)=>{
    res.send({
        name: 'Iphone 14',
        desc: 'Pink FU',
        price: '$1600',
        rating: 5
    })
})

router.post('/product',(req,res)=>{
    res.send('Product added successfully')
})

router.put('/product/:id',(req,res)=>{
    res.send('Product updated sucessfully')
})

router.delete('/product/:id',(req,res)=>{
    res.send('Product deleted sucesssfully')
})

module.exports = router