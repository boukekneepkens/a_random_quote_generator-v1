/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Hi! I'm super excited to hand over my first assignment.
//I'm going for the 'exceeds expectations grading',
//so please don't grade it if their's something missing.... although I think I nailed it in the end :-)




//The var autoRefresh carries the method to call the printQuote function every 20 sec.
var autoRefresh;
function setTimeInterval() {
  autoRefresh = window.setInterval(printQuote, 20000);
 }
setTimeInterval();
//getRandomQuote creates a randomNumberwhich is matched with the number the array.
// It returns an object with the data (keys and values) of the corresponding quote.
// NEW: instead of a variable I made a function to get the randomnumber. To call it again when all quotes have been selected.
function getRandomQuote() {
    function getRandomNumber() {
    Math.floor(Math.random() * quotes.length);
    }
    var randomNumber = getRandomNumber();
//To not duplicate a quote before all quotes have been shown once:
//Cut it from the quotes array and push it too the usedRandomQuotes array using the .splice() method
    var randomQuote = quotes.splice(randomNumber, 1);
    var usedRandomQuotes = [];
    usedRandomQuotes = usedRandomQuotes.push(randomQuote);
// When all have been shown once: reset the quotes array
    if (quotes = " ") {
      quotes = usedRandomQuotes.splice(0, usedRandomQuotes.length);
      getRandomQuote();
    }
    return randomQuote;
  }
//printQuote gets the values of the quote object and builds a string.
function printQuote() {
    var quoteObject = getRandomQuote();
    var message = "";
    message += "<p  class=\"quote\">" + quoteObject.quote + "</p>";
    message += "<p  class=\"source\">" + quoteObject.source;
    if(quoteObject.citation){
      message += "<span  class=\"citation\">" + quoteObject.citation + "</span>";
    }
    if(quoteObject.year) {
      message += "<span class=\"year\">" + quoteObject.year + "</span>";
    }
    message += "<span  class=\"category\">, " + quoteObject.category + "</span>";
    message += "</p>";
//Below the created string is linked to the html.
//It replaces the html. Therefor it was important to keep the html elements that are linked to the css (Thank you Robert for the hint!).
    document.getElementById("quote-box").innerHTML = message;
//Below I call the function that changes the background color.
//Also the interval is reset by cleaning it and calling the function again.
    changeBackgroundColor();
    clearInterval(autoRefresh);
    setTimeInterval();
}

//randomcolor code below. A random number is created withing the rgb range (256).
//number is linked to rgb notacition.
function generateRandomHue() {
    return Math.floor(Math.random() * 256 );
    }

function getRandomColor(){
    var red;
    var green;
    var blue;
    red = generateRandomHue();
    green = generateRandomHue();
    blue = generateRandomHue();
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
//The string that  contains the randomColor is writen to the html id element for the background color.
function changeBackgroundColor() {
    document.getElementById("background_color").style.backgroundColor = getRandomColor();
    }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
