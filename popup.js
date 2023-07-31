document.addEventListener("DOMContentLoaded", function () {
  // Load the quotes from the quotes.json file
  const quotesFile = "quotes.json";

  // Function to get a random quote from the quotes array
  function getRandomQuote() {
    return fetch(quotesFile)
      .then((response) => response.json())
      .then((data) => {
        const quotes = data;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      });
  }

  // Function to display the quote in the popup
  function displayQuote(quote) {
    const quoteContainer = document.getElementById("quote");
    const authorContainer = document.getElementById("author");
    quoteContainer.textContent = `"${quote.quote}"`;
    authorContainer.textContent = `- ${quote.author}`;
  }

  // Listen for the "Get Inspired" button click event
  document.getElementById("start-button").addEventListener("click", () => {
    getRandomQuote().then((quote) => {
      displayQuote(quote);
    });
  });
});
