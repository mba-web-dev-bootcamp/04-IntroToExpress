var express = require("express");
var app = express();





// routes
app.get("/", function(req, res){ 
    res.send("Hi there, welcome to my assignment. Please either use /speak/animalName or use /repeat/string/timesToRepeat")
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
    } else if (animal === "cat"){
        sound = "'Meow'";
    } else if (animal === "duck"){
        sound = "'Quack'";
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
    res.send("Sorry, page " + req["url"] + " not found ... What are you doing with your life ");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});