import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [randomQuote, setRandomQuote] = useState({ quote: "Loading quote...", author: "aaa" })

  useEffect(() => {
    fetch("http://localhost:5000/quotes/random")
      .then(res => res.json())
      .then(data => {
        setRandomQuote(data)
      })
  }, [])



  return (
    <div className="random-quote container mt-5 text-center fs-2
    ">
      <p>{randomQuote.quote}</p>
      <small className='text-muted text-end'>-{randomQuote.author}</small>

    </div>
  );
}

export default App;
