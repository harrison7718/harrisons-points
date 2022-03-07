import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    
    if (error === 'User already exists') {
      // setAlert(error, 'danger');
      console.log('User already exists');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  
  const { username, email, password, password2 } = user;
  
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      // setAlert('Please enter all fields', 'danger');
      console.log('Please enter all fields');
    } else if (password !== password2) {
      // setAlert('Passwords do not match', 'danger');
      console.log('Passwords do not match');
    } else {
      console.log('registering user')
      register({
        username,
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Register
