import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const requestOne = axios.get('https://forum-proxy.freecodecamp.rocks/latest');

axios
  .all([requestOne])
  .then(
    axios.spread((...responses) => {
      const forumPosts = responses[0];
      ReactDOM.render(
        <App forumPosts={forumPosts.data}/>
      , document.getElementById('root'));
    })
  )
  .catch(errors => {
    console.error(errors);
  });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
