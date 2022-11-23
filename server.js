import express, { response } from "express"
import random from "random-item"
import quotes from "./quotes.json " assert { type: 'json' }

const app = express();


app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes/random", (req, res) => {
  // const num = quotes.length
  // const randomIndex = Math.floor(Math.random() * num)
  const randomQuote = random(quotes)
  res.send(randomQuote)
})

app.get("/quotes", (req, res) => {
  res.send(quotes)
})

app.get("/quotes/search", (req, res) => {
  const term = req.query.term.toLowerCase()
  const result = quotes.filter(quote => quote.author.toLowerCase().includes(term) || quote.quote.toLowerCase().includes(term))
  res.send(result)



})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
