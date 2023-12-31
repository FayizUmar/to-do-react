import React from 'react'
import './Signup.css';
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";


const signup = () => {
  return (
    <div className='A'>
      <form>
        <h1>Login</h1>
        <div className="inp-box">
          <input type="email" placeholder="abc@mail" required></input>
          <IoMail />
        </div>
        <div className="inp-box">
          <input type="text" placeholder="U-name" required></input>
          <FaUser />
        </div>
        <div className="inp-box">
          <input type="password" placeholder="*****" required></input>
          <RiLockPasswordFill />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
        </div>

        <button type="submit">Login</button>
        <div className="no-acc">
            <p>Don't have acc?<a href="#">Register</a></p>
        </div>

      </form>
   </div>
  )
}

export default signup
