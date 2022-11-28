import express, { response } from "express"
import random from "random-item"
import quotes from "./quotes.json " assert { type: 'json' }
import cors from 'cors'


const app = express();
app.use(cors())


app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});


app.get("/quotes/random", (req, res) => {

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

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
