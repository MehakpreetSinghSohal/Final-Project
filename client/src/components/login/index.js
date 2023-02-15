import "../signup/signup.css"
import React, { useState } from "react";
import { Link,  useNavigate} from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  const handleInputs = (e) => {
    let iname, ivalue;

    console.log(e.target.name + " " + e.target.value);
    iname = e.target.name;
    ivalue = e.target.value;
    setUser({ ...user, [iname]: ivalue });
  };



  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();

   
        Axios.post("http://localhost:5000/login", { user })
      .then((res) => {

        let uid = res.data.phone;
        console.log(uid);
        navigate("/home",{state:uid});
        
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
          <div><Link to="/signup">Signup</Link></div>
          <div style={{fontSize: "2rem"}}>Login</div>
        </div>
        <input type="number" id="submit" name="phone" placeholder="Enter Phone" onChange={handleInputs} value={user.phone}></input>
        <input type="password" id="submit" name="password" placeholder="Enter Password" onChange={handleInputs} value={user.password}></input>
        <input type="submit" id="submit" onClick={postData} className="signSubmit"></input>
      </form>
      </div>
    </>
  );
};

export default Login;
