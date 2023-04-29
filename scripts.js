// const api = "https://type.fit/api/quotes"; // This is URL of the Dynamic Quotes API

let val = "";
let data = "";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");

const getRandomQuotes = () => {
  const num = Math.floor(Math.random() * 1643); // since we have 1643 quotes
  data = val[num];

  quotes.innerText = `${data.text}`;

  if (data.author == null) {
    author.innerText = "Unknown";
  } else author.innerText = `${data.author}`;
};

const getQuotes = async () => {
  try {
    const api = "https://type.fit/api/quotes";

    let data = await fetch(api); // fetching the data from the API
    val = await data.json(); // ReadableStream -> json

    getRandomQuotes();

    // console.log(val[0].text);
    // console.log(val[0].author);
  } catch (error) {
    console.log(error);
  }
};

newQuote.addEventListener("click", getRandomQuotes);

getQuotes();
