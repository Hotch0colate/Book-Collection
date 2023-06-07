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
        switch (response?.status) {
          case 200:
            alert("Request sent successfully!");
            setFormData({
              requeset_desc: '',
              url_ref: ''
            })
            break;
          case 400:
            alert("Invalid request");
            break;
        }
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
                <textarea 
                id="desc"
                type = "text" 
                name = "request_description" 
                value ={formData.request_description} 
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