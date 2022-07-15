import React from "react";
// import "./Login.css";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access to the full dashboard</p>

      <label htmlFor="email">Email:</label>
      <input name="email" id="email"></input>
      <label htmlFor="password">Password: </label>
      <input name="password" id="password"></input>
      <button>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  appBody: {
    textAlign: 'left',
    margin: '2rem',
    height: '70vh',
  },
})

export default Login;
