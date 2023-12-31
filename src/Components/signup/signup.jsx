import React from 'react'
import './signup.css';
const signup = () => {
  return (
    <div>
   <form>

        <label for="email">email</label>
        <input type="email" placeholder="yourmailid" id="email" name="email"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="8-leng" id="password" name="password"></input>

        <button>Log In</button>
   </form>
   </div>
  )
}

export default signup
