/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [   //created a variable named quotes with an array of objects containing quotes, source, citation and year
  {
    quote:"For me, I'm a dancer first. I could be the President of the United States, and I will always be a dancer, first and foremost.", 
    source:'Anne Fletcher', 
    citation:'', 
  
  },
  {
    quote:"I don't want a childhood, I want to be a ballet dancer.", 
    source:'Jamie Bell', 
    citation:'Billy Elliot', 
    tags: 'Coming of Age'
  },
  {
    quote:"There’s no better feeling. The truth is you only fly for a second or two before gravity takes back what you tried to steal. Because no matter how hard you work, how strong you are, or how thin you get, gravity always, always wins.", 
    source:'ANNA Maiche', 
    citation:'Tiny Pretty Things', 
    year:'2020',
    tags: 'Drama'
  },
  {
    quote:"I used to know a whole lot of dances. The-the-the-eh- the flea hop, and-and, what's the - eh - the black bottom, the variety drag. I don't, I don't know, I just don't seem to have any time any more. I have so many things to do.", 
    source:'James Stewart', 
    citation:'Harvey', 
    year:'1950',
  },
  {
    quote:"When you dance the dance of another, you make yourself in the image of its creator. You empty yourself so that her work can live within you.", 
    source:'Tilda Swinton', 
    citation:'Suspiria', 
    year:'2018',
  },
  {
    quote:"There are two types of beings in the universe, those who dance, and those who do not.", 
    source:'Dave Bautista', 
    citation:'Avengers', 
    tags: 'Humor'
  }
];

function getRandomQuote(arr) {  //a function called getRandomQuote that stores and return the quotes in the array in random order 
  const randomNumber = Math.floor( Math.random() * quotes.length )  ;
  for ( let i = 0; i< arr.length; i++){
    let randomQuote= arr[randomNumber];
    return randomQuote;
  }
}

const randomValue = () => Math.floor(Math.random() * 256);  // arrow function that will be used in randomColor function to generator random colors in rgb
function randomColor() { 
  const color= `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`; //sets variable called color to hold value for range of random colors in rgb
  return color; //returns the color variable
}
for (let i= 1; i<=7; i++) { // for loop to go through the randomColors with 7 which is the length of the quotes array 
  function printColor (){
    document.body.style.background= randomColor()
  } // sets the background color to the random colors generator by the randomColor function with a interval timer 
  setInterval(printColor, 7000)
}
function printQuote(){ // function to print the quotes on the web page
  const randomQuotes= getRandomQuote(quotes);
  let html = `<p class = "quote">` + randomQuotes.quote + '</p>'
  + `<p class = "source">` + randomQuotes.source 
  if ( randomQuotes.citation !== '' &&  randomQuotes.citation !== undefined){
    html += `<span class= "citation">` + randomQuotes.citation + `</span>`
  }
  if ( randomQuotes.year !== undefined) {
    html += `<span class= "year">` + randomQuotes.year + `</span>`
  }
  if ( randomQuotes.tags !== undefined) {
    html += `<span class= "tags">` + randomQuotes.tags + `</span>`
  } 
  document.getElementById('quote-box').innerHTML = html; // pulls format from index.html page and prints the quotes on the web page.
}
setInterval(printQuote, 7000) // sets interval for the quotes printing on the page, do not have to click through the quotes .

document.getElementById('load-quote').addEventListener("click", printQuote, false); // click event listener for the printing through quotes. 
document.getElementById('load-quote').addEventListener("click", printColor, false); // click event listener for the showcasing different background color.