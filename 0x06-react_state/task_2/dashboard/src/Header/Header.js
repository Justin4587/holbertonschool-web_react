import React, { Component } from "react";
// import "./Header.css";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/horsefish.jpg';
import { AppContext, user, logOut} from '../App/AppContext';



class Header extends Component {
constructor(props) {
  super(props);
  this.logOut = logOut.bind(this);

}
  render() {
    // const {user, logOut} = this.state;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.title)} >School Dashboard</h1>
        </div>
        {
          user.isLoggedIn === true && (
            <div className={css(styles.welcome)} id='logoutSection'>
              Welcome {user.email} <span className={css(styles.logout)} onClick={this.logOut}>
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
