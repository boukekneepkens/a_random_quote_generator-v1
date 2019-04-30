/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Hi! I'm super excited to hand over my first assignment.
//I'm going for the 'exceeds expectations grading',
//so please don't grade it if their's something missing.... although I think I nailed it in the end :-)




//The var autoRefresh carries the method to call the printQuote function every 20 sec.
 var autoRefresh = window.setInterval(printQuote, 20000);



//getRandomQuote creates a randomNumberwhich is matched with the number the array.
// It returns an object with the data (keys and values) of the corresponding quote.
function getRandomQuote() {

    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNumber];
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
//It replaces the html. Therfor it was important to keep the html elements that are linked to the css.
    document.getElementById("quote-box").innerHTML = message;
//Below I call the function that changes the background color.
//Also I set the interval to clean/null
//I still have quetsions why 'null' is necessary here. As far as I couldn't find online this shouldn't be :-/
    changeBackgroundColor();
     window.clearInterval(autoRefresh);
     autoRefresh = null;
     autoRefresh = window.setInterval(printQuote, 20000);
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
