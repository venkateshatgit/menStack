const express=require('express')
const ejs=require('ejs')

const app=express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

const path=require('path')
app.listen(4000, ()=>{
    console.log("App server started at port 4000")
})

app.get('/', (req, res)=>{
    //res.sendFile(path.resolve(__dirname , 'pages/index.html'))
    res.render('index')
})

app.get('/contact', (req, res)=>{
    //res.sendFile(path.resolve(__dirname , 'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res)=>{
    //res.sendFile(path.resolve(__dirname , 'pages/post.html'))
    res.render('post')
})

app.get('/about', (req, res)=>{
    //res.sendFile(path.resolve(__dirname , 'pages/about.html'))
    res.render('about')
})

