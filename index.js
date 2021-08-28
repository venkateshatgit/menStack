// http is built in module
// using http we create serever that serves request and responds action

const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notFound.html')

const server = http.createServer((req, res) =>{


    //different page populated on different request url
    if(req.url==='/about')
        res.end(aboutPage)

    else if(req.url==='/contact')
        res.end(contactPage)

    else if(req.url==='/')
        res.end(homePage)

    else{
        res.writeHead(400)
        res.end(notFoundPage)
    }

})

//our application will listen our request through port 3000
server.listen(3000)


