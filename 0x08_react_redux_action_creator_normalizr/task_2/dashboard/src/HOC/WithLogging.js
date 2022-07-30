import React, { Component } from 'react';
import PropTypes from 'prop-types';


function WithLogging(WrappedComponent) {
  const com = "Component ";
  const name = WrappedComponent.displayName || WrappedComponent.name || "Component";
  const log = "WithLogging(";
  const end = ")"
  const mount = " is mounted";
  const unmount = " is going to unmount";
  const mounted = com + name + mount;
  const unmounted = com + name + unmount;
  

  class WithLogging extends Component {

    componentDidMount() {
      console.log(mounted)
    }

    componentWillUnmount() {
      console.log(unmounted)
    }

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
  WithLogging.displayName = log + name + end;
  return WithLogging;
}

export default WithLogging;
