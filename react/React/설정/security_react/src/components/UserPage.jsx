import React, { useEffect } from 'react'
import { api_userPage } from '../apis/memberApi';

const UserPage = () => {

  useEffect(() => {
    api_userPage()
    .then(res => alert('유저 페이지 성공'))
    .catch(error => {
      console.log(error.state);
      console.log(error)
    })
  }, []);


  return (
    <div>UserPage</div>
  )
}

export default UserPage