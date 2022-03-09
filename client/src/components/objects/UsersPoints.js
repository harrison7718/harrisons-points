import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const UsersPoints = () => {
  const authContext = useContext(AuthContext);

  const { user: current } = authContext;

  useEffect(() => {
    if (current){
      setUser(current);
    } else {
      setUser({
        username: '',
        email: '',
        points: 0
      });
    }
  }, [current]);

  let [user, setUser] = useState({
    username: '',
    email: '',
    points: 0
  });

  return (
    <div className='points-container'>
      {user.username === '' ?
        <h3>welcome</h3>
      :
        <h3>{user.username} has {user.points} Points</h3>
      }
    </div>
  )
}

export default UsersPoints;