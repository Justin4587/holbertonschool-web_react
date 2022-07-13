import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import React, { Fragment, Component }from "react";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils"
// import logo from '../assets/horsefish.jpg';


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoggedIn } = this.props;
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications}/>
      <Header />
      { isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login /> }
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
}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
