import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
// import './BodySection.css';


class BodySectionWithMarginBottom extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={title} children={children}></BodySection>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
})

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

export default BodySectionWithMarginBottom;
