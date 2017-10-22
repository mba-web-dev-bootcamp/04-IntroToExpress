var express = require("express");
var app = express();





// routes
app.get("/", function(req, res){ 
    res.send("Hi there, welcome to my assignment. Please either use /speak/animalName or use /repeat/string/timesToRepeat")
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof'",
        cat: "'Meow off human'",
        duck: "'Quacker'"
    } 
    var retVal = "The " + animal + " says " + sounds[animal];
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