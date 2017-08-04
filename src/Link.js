import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, title }) => (
  <Link to={to} style={styles.link}>
    { title }
  </Link>
)

const styles = {
  link: {
    textDecoration: 'none',
    marginRight: 20,
    color: '#666'
  },
}

export default NavLink;
