import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendRequest } from "../services/request";
import axios from 'axios';
import "../styles/Login_Signup.css"
import Navbar from "../components/Navbar";

function RequestForm() {
    const [formData, setFormData] = useState({
      requeset_desc: '',
      url_ref: ''
    });

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      sendRequest(formData).then((response) => {
        console.log(response);
        setFormData({
          requeset_desc: '',
          url_ref: ''
        })
      })
    };

  return (
    <>
    <div>
    <Navbar />
        <form className="form-request" onSubmit={handleSubmit}>
            <div className="title-request">
                <h1>Request</h1>
                <p>Description</p>
                <input 
                id="desc"
                type = "text" 
                name = "requeset_desc" 
                value ={formData.requeset_desc} 
                onChange={handleChange}
                />
                <p>URL Reference</p>
                <input 
                type="text" 
                name="url_ref" 
                value={formData.url_ref} 
                onChange={handleChange}
                />
                <br />
                <div className="submit-container">
                <button type= "submit">Send</button>
                </div>
            </div>
        </form>
    </div>
    
    </>
  )
}

export default RequestForm;