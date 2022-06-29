import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react"

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
            //await axios.post('http://localhost:8080/quotes', request)


            // let res = await fetch('http://localhost:8080/quotes', {
            //     method: "POST",
            //     body: JSON.stringify({
            //         name: name,
            //         quote: quote
            //     }),
            // });
            // let resJson = await res.json();
            // if (res.status === 200) {
            //     setName("");
            //     setQuote("");
            //
            // } else {
            // }
            // console.log(res.status)
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


const hitBackend = () => {
    console.log("dupa");
    axios.get('http://localhost:8080/test').then((response) => {console.log(response.data)});
}
export default App;
