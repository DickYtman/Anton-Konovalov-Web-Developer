const express = require("express")
const path = require('path')
const PORT = process.env.PORT || 4000
const userRouter = require('./routes/users')
// const app = express();
// app.set("view engine", "ejs")



express()
    .get("/", (req, res) => {
        console.log("hello I am starting to work server.js")
        // res.send('greetings')
        // res.sendStatus(500)
        // res.status(500).send('You did something wrong cabrone')
        // res.status(500).json({ message: "Error"})
        // res.json({ message: "Error"})
        // res.download("server.js") 
        // res.render("index")
        res.render("index", { text123:'World'})
    })




express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use('/users', userRouter)
    .use(express.static('public'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))