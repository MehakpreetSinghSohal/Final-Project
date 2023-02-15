import React, { useState } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confPass: "",
  });
  

  const handleInputs = (e) => {
    let name, value;

    console.log(e.target.name + " " + e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/register", { user })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        if(err.response.statusText==="Conflict"){
          alert("Phone Number already exist");
        }
      });
   
  };

  return (
    <><div className="signFormCont">
      <form method="POST" className="signForm">
        <div className="signHead">
          <div style={{fontSize: "2rem"}}>Signup</div>
          <div><Link to="/login">Login</Link></div>
        </div>
        <input type="text" id="submit" name="name" placeholder="Enter Name"  onChange={handleInputs} value={user.name}></input>
        <input type="mail" id="submit" name="email" placeholder="Enter Email"   onChange={handleInputs} value={user.email}></input>
        <input type="number" id="submit" name="phone" placeholder="Enter Phone"   onChange={handleInputs} value={user.phone}></input>
        <input type="password" id="submit" name="password" placeholder="Enter Password"  onChange={handleInputs} value={user.password}></input>
        <input type="password" id="submit" name="confPass" placeholder="Re Enter Password"  onChange={handleInputs} value={user.confPass}></input>
        <input type="submit" id="submit" onClick={postData} className="signSubmit"></input>
      </form>
      </div>
    </>
  );
};

export default Signup;
