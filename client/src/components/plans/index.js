import MenuAppBar from "../homepage/nav/navbar";
import Sidebar from "../homepage/nav/sidebar";
import "./index.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";

const Plans = ()=>{
    const stateData = useLocation();
    let uid = stateData.state;
    
    console.log(uid)
    const [display,setDispaly]= useState([]);
    const [userLoading,setUserLoading]= useState(true);
    
    
    function getInfo(){

        Axios.post("http://localhost:5000/getinfo", { uid })
        .then((res) => {
            setUserLoading(true);
            
            setDispaly(res.data);
            
            setUserLoading(false);
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
        {
            userLoading ? (
                <></>
            ) : (
            <>
        <Sidebar user={display}></Sidebar>
        <MenuAppBar user={display}></MenuAppBar>
        <div className="planCont">
            <img src="./images/plans.jpg" alt="plans"></img>
        </div>
        </>
            )
        }
        </>
    )
}

export default Plans;