import React from 'react';

const SubNav = ({ children }) => (
  <div style={styles.subNav}>
    { children }
  </div>
)

const styles = {
  subNav: {
    padding: 20,
    backgroundColor: '#ededed',
    borderBottom: '1px solid rgba(0,0,0,.1)',
  }
}

export default SubNav;
