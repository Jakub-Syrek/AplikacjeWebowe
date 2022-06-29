import '../App.css';
import { useState } from "react";
import React from "react"
import ReactDOM from "react-dom/client";

const axios = require('axios')

function App() {
    const [name, setName] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const request = { name: name }
            const json = JSON.stringify(request)
            axios({
                method: 'delete',
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

                <button type="submit">Delete</button>


            </form>
        </div>
    );
}


export default App;
