import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { logoutReducer } from '../redux/authSlice';

const Header = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div style={{border:'1px solid black'}}>
      <div>
        <h2>헤더입니다</h2>
      </div>
      {
        token ?
        <p style={{textAlign : 'right'}} onClick={() => {
          dispatch(logoutReducer());
          nav('/')
        }}>logout</p> 
        :
        <div style={{display:'flex', gap : '20px', justifyContent : 'end'}}>
          <p>
            <Link to={'/login'}>login</Link>
          </p>
          <p>
            <Link to={'/join'}>join</Link>
          </p>
        </div>
      }
      
    </div>
  )
}

export default Header