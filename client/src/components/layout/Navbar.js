import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loadUser, logout } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const userLinks = (
    <Fragment>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <a onClick={logout} href='/'>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <div className='nav-buffer'></div>
      <nav className='navbar'>
        <h3>harrisonspoints.com</h3>
        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isAuthenticated ? userLinks : guestLinks}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar