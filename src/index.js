const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json());

//npm i - nodemon --save-dev

app.get("/", (req, res) => {
    res.status(200).json({
      message: "Server is up and running succesfully",
    });
  });
  
  app.use("/users", usersRouter);
  // app.use("/books", booksRouter);
  
  
  
  
  
  app.get("*", (req, res) => {
    res.status(404).json({
      message: "This route doesn't exist",
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });











// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
