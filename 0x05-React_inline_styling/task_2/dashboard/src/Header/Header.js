import React from "react";
// import "./Header.css";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/horsefish.jpg';


function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)} >School Dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #c7254e',
    color: '#c7254e',
  },
  title: {
    margin: 'auto',
  },
  logo: {
    height: '250px',
  }
})

export default Header;
