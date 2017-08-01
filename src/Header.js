import React from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';
import { css } from 'glamor';

const Header = () => (
  <div style={styles.header}>
    <div style={styles.titleContainer}>
      <Link to='/' style={styles.href}>
        <p style={styles.title}>SeattleJS</p>
      </Link>
    </div>
    <div style={styles.linkContainer}>
      <Link to='/animations' style={styles.href}>
        <p {...css(styles.link)}>Animations</p>
      </Link>
      <Link to='/context' style={styles.href}>
        <p {...css(styles.link)}>Context</p>
      </Link>
      <Link to='/hoc' style={styles.href}>
        <p {...css(styles.link)}>HOC</p>
      </Link>
      <Link to='/recompose' style={styles.href}>
        <p {...css(styles.link)}>Recompose</p>
      </Link>
    </div>
  </div>
);

const styles = {
  href: {
    textDecoration: 'none'
  },
  link: {
    margin: 0,
    paddingRight: 20,
    textDecoration: 'none',
    color: 'black',
    ':hover': {
      color: 'white',
    }
  },
  titleContainer: {
    display: 'flex',
    flex: 1
  },
  title: {
    fontSize: 26,
    margin: 0,
    color: 'white',
    fontWeight: 300,
  },
  linkContainer: {
    display: 'flex',
  },
  header: {
    padding: 20,
    backgroundColor: '#5d9942',
    width: '100%',
    display: 'flex',
  }
}

export default withRouter(Header);
