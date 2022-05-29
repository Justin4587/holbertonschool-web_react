import React from 'react';
import ReactDOM from 'react-dom';
import './Notifications.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div className='root-notifications'>
//       <Notifications />
//     </div>
//     <App />
//   </React.StrictMode>,
// );


ReactDOM.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();