// building a server with code
let http = require("http")

let ourApp = http.createServer(function(req, res){ //this function sends a REQuest and then listens for  RESponse
    console.log(req.url)
    res.end("Hello, and welcome to our website.") 
})
ourApp.listen(3000)

//local host is th name of our computer, 3000 is the listening number
//type localhost:3000 to open this sserver in a web browser