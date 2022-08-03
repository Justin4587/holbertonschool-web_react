import React from 'react';
// import "./Footer.css";
import AppContext, { user, logOut } from '../App/AppContext'
import { getFullYear, getFooterCopy } from "../utils/utils";
// import './Footer.css'
import { StyleSheet, css } from 'aphrodite';


function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className={css(styles.AppFooter)}>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
        </div>
      )}
    </AppContext.Consumer>
  )
}

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

const styles = StyleSheet.create({
  AppFooter: {
    borderTop: '4px solid #c7254e',
    fontStyle: 'italic',
    textAlign: 'center',
    alignItems: 'center',
},
})

export default Footer;
