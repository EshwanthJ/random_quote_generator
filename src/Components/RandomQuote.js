import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const RandomQuote = () => {

    let quotes = [];

    (async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
        console.log(quotes)
    })();

  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang Von Goethe",
  });

  const randomQuote = () => {
    setQuote(quotes[Math.floor(Math.random()*quotes.length)])
  }

  const twitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
  }

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">- {quote.author.split(',')[0]}</div>
        <div className="icons">
          <FontAwesomeIcon icon={faRotateRight} size="2x" style={{color: "white"}} onClick={(e)=>randomQuote()} />
          <FontAwesomeIcon icon={faXTwitter} size="2x" style={{color: "white"}} onClick={(e)=>twitterShare()} />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
