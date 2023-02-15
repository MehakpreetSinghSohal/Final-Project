import MenuAppBar from "./nav/navbar";
import Sidebar from "./nav/sidebar";
import "./nav/index.css";
import Feed from "./feed";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";

const Home = ()=>{
   
    
    const stateData = useLocation();
    let uid = stateData.state;
    
    console.log(uid)
    const [display,setDispaly]= useState([]);
    const [profs,setprofs]= useState([]);
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
    
    function getProfiles(){

        Axios.post("http://localhost:5000/getprofs", { uid })
        .then((res) => {
            console.log(res.data);
            setprofs(res.data);
            console.log(profs);
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
        getProfiles()
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
                <Feed profs={profs} uid={uid}></Feed>
            </>
            )
        }
        </>
        
        
    )
}

export default Home;