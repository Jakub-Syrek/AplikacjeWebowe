import '../App.css';
import { useState } from "react";
import React from "react"
import ReactDOM from "react-dom/client";



const axios = require('axios')

function App() {
    const [name, setName] = useState("");
    const [quote, setQuote] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const request = { name: name, quote: quote }
            const json = JSON.stringify(request)
            axios({
                method: 'post',
                url: 'http://localhost:8080/quotes',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    json
                }
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={quote}
                    placeholder="Quote"
                    onChange={(e) => setQuote(e.target.value)}
                />

                <button type="submit">Create</button>


            </form>
        </div>
    );
}


export default App;
