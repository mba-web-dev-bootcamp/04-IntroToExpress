var express = require("express");
var app = express();





// routes
app.get("/", function(req, res){ 
    res.send("Hi there, welcome to my assignment");
    res.send("please either use /speak/animalName")
    res.send("or use /repeat/string/timesToRepeat")
});

app.get("/bye", function(req, res){ 
    res.send("Goodbye");
});

app.get("/dog", function(req, res){ 
    res.send("MEOW");
    console.log("Someone made a request to dog");
});

app.get("/r/:subredditName", function(req, res){
    console.log(req.params);
    var subreddit = req.params.subredditName;
   res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
   res.send("Welcome to a subreddit comment") ;
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = "";
    var retVal = "";
    if (animal === "pig"){
        sound = "'Oink'";
    } else if (animal === "cow"){
        sound = "'Moo'";
    } else if (animal === "dog"){
        sound = "'Woof Woof'";
    } else {
        sound = "nothing";
    }
    var retVal = "The " + animal + " says " + sound;
    res.send(retVal);
});

app.get("/repeat/:payload/:timesToRepeat", function(req, res) {
   var payload = req.params.payload;
   var timesToRepeat = req.params.timesToRepeat;
   var retVal = ""
   for(var i = 0; i < timesToRepeat; i++){
       retVal += payload + "\r";
   }
   res.send(retVal)
});








// 404 & listener
app.get("*", function(req, res){
    res.send("This is my 404 page, sadly, there is no " + req["url"] + " page.")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});