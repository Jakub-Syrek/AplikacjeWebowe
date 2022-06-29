import {useEffect, useState} from "react";
import axios from "axios";

const client = axios.create({
     baseURL : "http://localhost:8080/quotes"
});

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div className="app">
            <h2>All Posts 📫</h2>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.name}</h2>
                        <p className="post-body">{post.quote}</p>
                    </div>
                );
            })}
        </div>
    );

};

export default App;



//
//
//
// //import '../App.css';
// import { useState } from "react";
// import React from "react"
//
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// const axios = require('axios')
//
// function App() {
//     const  [name, setName] = useState([]);
//     const fetchColl = () => {
//         axios.get('http://localhost:8080/quotes')
//     };
//     return (
//         <div className="App">
//             <h1>
//                 Quotes
//             </h1>
//         </div>
//     );
// }
//
// export default App();
