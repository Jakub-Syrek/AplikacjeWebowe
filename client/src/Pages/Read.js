// import '../App.css';
// import { useState } from "react";
// import React from "react"
// import ReactDOM from "react-dom/client";
// import res from "express/lib/response";
//
//
//
// const axios = require('axios')
//
// function App() {
//     const [name, setName] = useState("");
//     const [quote, setQuote] = useState("");
//
//
//
//     let handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const request = { }
//             const json = JSON.stringify(request)
//
//
//             const result = axios({
//                 method: 'get',
//                 url: 'http://localhost:8080/quotes',
//                 body: json,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 data: {
//                     json
//                 }
//             });
//             return result.then(res.json()).then(data => console.log.data)
//
//         } catch (err) {
//             console.log(err);
//         }
//     };
//
//     return (
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={name}
//                     placeholder="Name"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     value={quote}
//                     placeholder="Quote"
//                     onChange={(e) => setQuote(e.target.value)}
//                 />
//
//                 <button type="submit">Create</button>
//
//
//             </form>
//         </div>
//     );
// }
//
//
// export default App;
