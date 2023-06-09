import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendRegister } from "../services/request";
import axios from 'axios';
import "../styles/Login_Signup.css"

function SignUpForm() {
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      sendRegister(formData).then((response) => {
        switch (response?.status) {
          case 200:
            navigate('/login');
            break;
          case 401:
            alert(response.data.message);
            break;
          default:
            console.log("Something went wrong")
            break
        }
      })
    };

  return (
    <div className="mainbox">
    <form className="form-signup" onSubmit={handleSubmit}>
        <div className="title-signup">
            <h1>Sign up</h1>
            <p>Username</p>
            <input 
            placeholder='Enter your Username' 
            type = "text" 
            name = "username" 
            value ={formData.username} 
            onChange={handleChange}
            />
            <p>Password</p>
            <input 
            placeholder='Enter your Password'
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            />
            <br />
            <div className="submit-container">
              <button type= "submit">Register</button>
            </div>
            <p>have an account? 
            <span>     </span> 
            <Link to="/login">Login</Link>
            </p> 
        </div>
    </form>
    </div>
  )
}

export default SignUpForm;