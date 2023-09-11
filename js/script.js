/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"For me, I'm a dancer first. I could be the President of the United States, and I will always be a dancer, first and foremost.", 
    source:'Anne Fletcher', 
    citation:'', 
    year:''
  },
  {
    quote:"I don't want a childhood, I want to be a ballet dancer.", 
    source:'Jamie Bell', 
    citation:'Billy Elliot', 
    year:'',
    tags: 'satire'
  },
  {
    quote:"There’s no better feeling. The truth is you only fly for a second or two before gravity takes back what you tried to steal. Because no matter how hard you work, how strong you are, or how thin you get, gravity always, always wins.", 
    source:'ANNA Maiche', 
    citation:'Tiny Pretty Things', 
    year:'2020',
    tags: 'drama'
  },
  {
    quote:"I used to know a whole lot of dances. The-the-the-eh- the flea hop, and-and, what's the - eh - the black bottom, the variety drag. I don't, I don't know, I just don't seem to have any time any more. I have so many things to do.", 
    source:'James Stewart', 
    citation:'Harvey', 
    year:'1950'
  },
  {
    quote:"When you dance the dance of another, you make yourself in the image of its creator. You empty yourself so that her work can live within you.", 
    source:'Tilda Swinton', 
    citation:'Suspiria', 
    year:'2018'
  },
  {
    quote:"There are two types of beings in the universe, those who dance, and those who do not.", 
    source:'Dave Bautista', 
    citation:'Avengers', 
    year:'',
    tags: 'humor'
  }
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  const randomNumber = Math.floor( Math.random() * quotes.length )  ;
  for ( let i = 0; i< arr.length; i++){
    let randomQuote= arr[randomNumber];
    return randomQuote;
  }
}

/***
 * `printQuote` function
***/
const randomValue = () => Math.floor(Math.random() * 256);
function randomColor(value) {
  const color= `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}
for (let i= 1; i<= 7; i++) {
  document.body.style.background= randomColor(randomValue)
  }

function printQuote(){
  const randomQuotes= getRandomQuote(quotes);
  let html = `<p class = "quote">` + randomQuotes.quote + '</p>'
  + `<p class = "source">` + randomQuotes.source 
  if ( randomQuotes.citation !== null){
    html += `<span class= "citation">` + randomQuotes.citation + `</span>`
  }
  if ( randomQuotes.year !== null) {
    html += `<span class= "year">` + randomQuotes.year + `</span>`
  }
  // let html = `<p class="quote"> ${randomQuotes.quote}</p>`
  // `<p class="source">${randomQuotes.source}</p>`
  // if(randomQuotes.citation !== null){
  // html+= `<span class="citation"> ${randomQuotes.citation}</span>`
  // };
  // if(!randomQuotes.year !== null){
  // html+= `<span class="year"> ${randomQuotes.year} </span>`
  // };
  document.getElementById('quote-box').innerHTML = html;
}
setInterval(printQuote, 20000)
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);