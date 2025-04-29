import axios from 'axios';
import React, { useState } from 'react'
import { api_login } from '../apis/memberApi';
import { useDispatch, useSelector } from 'react-redux';
import { loginReducer } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    memEmail : '',
    memPw : ''
  });

  const handleLoginInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name] : e.target.value
    });
  }

  //로그인 요청 함수
  const login = () => {
    axios.post('/api/member/login', loginInfo)
    .then(res => {
      alert('로그인 성공');

      //응답 헤더 중 'authorization' 값을 가져옴. 이때 소문자를 사용.
      console.log(res.headers['authorization'])

      //전달받은 jwt 토큰을 store에 저장
      const accessToken = res.headers['authorization'];
      dispatch(loginReducer(accessToken));
      nav('/');
    })
    .catch(e => {
      //로그인 검증 실패 시 서버에서 401 상태코드를 응답
      if(e.status === 401){
        alert('로그인 실패');
      }
      else{
        console.log(e);
      }
    });
  }

  return (
    <div>
      <input type='text' name='memEmail' onChange={handleLoginInfo}/>
      <input type='password' name='memPw' onChange={handleLoginInfo}/>
      <button type='button' onClick={login}>로그인</button>
    </div>
  )
}

export default Login