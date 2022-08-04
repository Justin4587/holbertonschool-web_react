import React, { Fragment, Component } from "react";
// import "./Login.css";
import { StyleSheet, css } from 'aphrodite';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleLoginSubmit(E) {
    E.preventDefault();
    this.props.logIn(this.state.email, this.state.password)
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value },
      () => {
        this.state.email !== '' && this.state.password !== ''
        ? this.setState({ enableSubmit: true })
        : this.setState({ enableSubmit: false })
      });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value },
      () => {
        this.state.email !== '' && this.state.password !== ''
          ? this.setState({ enableSubmit: true })
          : this.setState({ enableSubmit: false })
      });
  }

  render () {
    return (
      <Fragment>
        <div className={css(styles.appBody)}>
          <p>Login to access to the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input className={css(styles.input)} name="email" id="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
            <label htmlFor="password">Password: </label>
            <input className={css(styles.input)} name="password" id="password" value={this.state.password} onChange={this.handleChangePassword}></input>
            <input className={css(styles.btn)} type="submit" value='Login' onClick={this.handleLoginSubmit} disabled={!this.state.enableSubmit}></input>
          </form>
        </div>
      </Fragment>
    )
  }
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
      width: 'px',
    }
  }


})

export default Login;
