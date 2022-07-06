import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import React from "react";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList"
// import logo from '../assets/horsefish.jpg';


function App({ isLoggedIn = true }) {
  let div = undefined;
  isLoggedIn ? (div = <CourseList />) : (div = <Login />);
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      {div}
      <Footer />
    </React.Fragment>
    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>School Dashboard</h1>
    //   </div>
    //   <div className="App-body">
    //     <p>Login to access to the full dashboard</p>

    //     <label htmlFor="email">Email:</label>
    //     <input name="email" id="email"></input>
    //     <label htmlFor="password">Password: </label>
    //     <input name="password" id="password"></input>
    //     <button>OK</button>
    //   </div>
    //   <div className="App-footer">
    //     <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    //   </div>
    // </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
