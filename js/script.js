/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


let quotes = [
   {quote: "I had a dream!",
    source: "Martin Luther King",
    category: "motivation",
    year: 1963,
    citation: "speech"
   },
  {quote: "Life's too important to be taken seriously.",
   source: "Oscar Wilde",
   category: "literature",
   citation: "writer"
  },
  {quote: "In the end we will conserve only what we love. We will love only what we understand. And we will understand only what we are thaught.",
   source: "Baba Dioum, Singalese Poet",
   category: "education"
  },
  {quote: "I love deadlines. I love the wooshing noise they make as they go by.",
   source: "Douglas Adams",
   category: "literature",
   citation: "writer"
  },
  {quote: "This is your life. Do what you want and do it often. If you don't like something, change it. If you don't like your job, quit. If you don't have enough time, stop watching TV. If you are looking for the love of your life, stop; they will be waiting for you when you  start doing things you love. Stop over-analysing, life is simple. All emotions are beautiful. When you eat, appreciate every last bite. Life is simple. Open your heart, mind and arms to new things and people, we are united in our differences. Ask the next person you see what their passion is and share your inspiring dream with them. Travel often; getting lost will help you find yourself. Some opportunities only come once, seize them. Life is about the people you meet and the things you create with them, so go out and start creating. Life is short, live your dream and share your passion.",
   source: "unknown" 
  },
  {quote: "Life is short. Buy the shoes",
   source: "Meghan March",
   category: "motivation"
  },
  {quote: "don't fuck 'm if they don't read",
   source: "unknown"
  },
  {quote: "Learn the rules like a pro, so you can break them like an artist.",
   source: "Pablo Picasso",
   category: "career"
  },
  {quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
   source: "Douglas Adams",
   category: "literature",
   citation: "writer"
  },
  {quote: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
   source: "Douglas Adams",
   category: "literature",
   year: 1979,
   citation: "The Hitchhiker’s Guide to the Galaxy"
   
]

//1st: create a randomnumber
//2nd: have this randomnumber match with a quote
//
   
function getRandomQuote() {
   //get a quote from the array above and return it
   
   
   while (var i !== 
  }
  
function printQuote {
  // print the returned quote (use provided template in the instructions)
  } 




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.