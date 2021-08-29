# menStack

In this i'm learning about how to store and fetch data from mongodb altas, using nodejs and express.

Learnt built in http, filesytem modules.
import this module in index.js using require function. Create server using http method.
Create server is callback function returns resquest and response (req and res).
Then it return appropriate  response.

# Using Express
Later using express it had became lot more simpler. Express saved 45 lines of code. We don't use http and filesystem module.
Express makes fast execution. It also uses asynchrnous execution. Asynchrnous allow functions to start execution at same time, but when one function waits for response the another executes. It does not mean that they both execute at same time. 

In express static files can not execute dynamically so we have to tell it to use it wherever they are mentioned.
      app.use(express.static('public'))![Screenshot (367)](https://user-images.githubusercontent.com/72207261/131223142-cc0bc1dc-2e1e-43dd-99c2-1462039c2ff4.png)

we have to mention all static files in public directory, also do not mention public in href when we want to access file's asset


# Using EJS and Templating 
EJS has done lot of work easy.No need to find absolute path. Just store all route files in views folder and whenever we get request of certain address it will search into views folder and render particular file
Also learnt about templating, it have savvvveddd my hands from breaking. 
![Screenshot (369)](https://user-images.githubusercontent.com/72207261/131253754-6e5da97e-0f71-480d-bd1f-5bc9116f077b.png)

In views folder there are all routing files and in layout folder all the common template used by routing files. We have to give extension of ejs.
