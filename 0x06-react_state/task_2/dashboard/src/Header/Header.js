import React, { Component } from "react";
// import "./Header.css";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/horsefish.jpg';
import { AppContext, user, logOut} from '../App/AppContext';
import { PropTypes } from "prop-types";



class Header extends Component {
  static contextType = AppContext;
  logOut = logOut.bind(this);
  
  render() {
    let {user, logOut} = this.context;
    // const {user,logOut } = this.state;
    // const value = {user, logOut};
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.title)} >School Dashboard</h1>
        </div>
        {
          user.isLoggedIn === true && (
            <div className={css(styles.welcome)} id='logoutSection'>
              Welcome {user.email} <span className={css(styles.logout)} onClick={logOut}>
                (logout)
              </span>
            </div>
          )
        }
      </>
    )
  }
}

// let value = this.context;

// return (
//   <AppContext.Consumer user={user} >

//   </AppContext.Consumer>
// )

// {/* <>
//   <div className={css(styles.header)}>
//     <img src={logo} className={css(styles.logo)} alt="logo" />
//     <h1 className={css(styles.title)} >School Dashboard</h1>
//   </div>
//   {
//     user.isLoggedIn && (
//       <div className={css(styles.welcome)} id='logoutSection'>
//         Welcome {user.email} <span className={css(styles.logout)} onClick={logOut}>
//           (logout)
//         </span>
//       </div>
//     )
//   }
// </> */}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #c7254e',
    color: '#c7254e',
    '@media (max-width: 900px)': {
      zIndex: '-1',
      // justifyContent: 'center',
      display: 'inline-flex',
      width: '85%',
    }
  },
  title: {
    margin: 'auto',
    // fontSize: '4rem',
  },
  logo: {
    height: '250px',
  },
  welcome: {
    color: 'black',
    margin: 'auto',
  },
  logout: {
    cursor: 'pointer',
    fontStyle: 'italic',
  }
})

Header.contextType = AppContext;

export default Header;
