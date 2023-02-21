import React, { useEffect, useState } from "react";

function Home() {
    const [quote, setQuote] = useState({
        quote: '',
        author: ''
    });
    const [allQuotes, setAllQuotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/quotes")
            .then(resp => resp.json())
            .then(quoteData => setAllQuotes(quoteData))
}, [])

    useEffect(() => {
        if(allQuotes.length) getQuote();
    }, [allQuotes])

    function getQuote() {
        const randomNumber = Math.floor(Math.random() * allQuotes.length);
        const text = allQuotes[randomNumber].text;
        const author = allQuotes[randomNumber].author;
        setQuote({text, author})
    }

    return (
        <div className="quote-card">
            <p>{quote.text}</p>
            <p>{quote.author}</p>
            <button onClick={getQuote}>New quote</button>
        </div>
    )
}

export default Home;