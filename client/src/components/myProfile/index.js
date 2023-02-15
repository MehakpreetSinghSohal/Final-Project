import MenuAppBar from "../homepage/nav/navbar";
import Sidebar from "../homepage/nav/sidebar";
import Profile from "./Profile";
import "./index.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";

const Myprofile = ()=>{
    const stateData = useLocation();
    const [display,setDispaly]= useState([]);
    let uid = stateData.state;


    function getInfo(){
        Axios.post("http://localhost:5000/getinfo", { uid })
        .then((res) => {
            setDispaly(res.data);
            
            console.log(display);
        })
        .catch((err) => {
          console.log(err);
          if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
          }
        });
    }
    useEffect(() => {
        getInfo();
    }, []);

    return(
        <>
        <Sidebar user={display}/>
        <MenuAppBar user={display}/>
        <div className="profcont">
            <Profile user={display}/>
        </div>
        
        </>
    )
}

export default Myprofile;