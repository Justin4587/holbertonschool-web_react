import React from 'react';
import ReactDOM from 'react-dom';
//import './Notifications.css';
import { AppConnect as App } from './App/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import {uiReducer} from './reducers/uiReducer';
import { Provider } from 'react-redux';

const store= createStore(uiReducer);
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
;


// ReactDOM.render(
//   <React.StrictMode>
//     <div className='root-notifications'>
//       <Notifications />
//     </div>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
