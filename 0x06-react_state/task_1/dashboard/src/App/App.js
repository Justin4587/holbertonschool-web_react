// import './App.css';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import React, { Fragment, Component }from "react";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
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
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = { displayDrawer: false };
    this.proLogOut = this.proLogOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.proLogOut);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.proLogOut);
  }
  proLogOut(E) {
    if (E.ctrlKey && E.Key === 'h') {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;
  return (
    <Fragment>
      <Notifications listNotifications={listNotifications}
        displayDrawer={displayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        />
      <div className={css([styles.app, styles.appLogo])}>
        <Header></Header>
      </div>
      <div className={css(styles.appBody)}>
        { isLoggedIn ? (
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        ) : (
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login />
        </BodySectionWithMarginBottom>
        ) }
        <BodySection title='News from the School'>
          <p>RANDOM TexT AEOSFUIJHBOAuiGFoub</p>
        </BodySection>
      </div>
      <Footer />
    </Fragment>
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

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appLogo: {
    // display: 'flex',
    justifyContent: 'space-between',
  },
  appBody: {
    textAlign: 'left',
    margin: '2rem',
    height: 'auto',
  },

});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void(0),
};

export default App;
