import React from "react";
// import "./Login.css";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access to the full dashboard</p>

      <label htmlFor="email">Email:</label>
      <input className={css(styles.input)} name="email" id="email"></input>
      <label htmlFor="password">Password: </label>
      <input className={css(styles.input)} name="password" id="password"></input>
      <button className={css(styles.btn)} type="submit">OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  appBody: {
    textAlign: 'left',
    margin: '2rem',
    // height: '70vh',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  },

  input: {
    margin: '2rem',
    '@media (max-width: 900px)': {
      textAlign: 'left',
      border: 'none',
      margin: '0',
    }
  },

  btn: {
    '@media (max-width: 900px)': {
      border: '2px solid orange',
      backgroundColor: 'transparent',
      width: '34px',
    }
  }


})

export default Login;
