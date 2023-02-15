import MenuAppBar from "../homepage/nav/navbar";
import Sidebar from "../homepage/nav/sidebar";
import MatchCont from "./matchCont";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const Matches = ()=>{
    const stateData = useLocation();
    let uid = stateData.state;
    console.log(uid);

    const [display,setDispaly]= useState([]);
    const [userLoading,setUserLoading]= useState(true);


    function getInfo(){
        console.log("jelo")
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

    console.log(display);

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
            
        <Sidebar user={display}/>
        <MenuAppBar user={display}/>
        <MatchCont user={display}/>
        </>
             
             )
         }
         </>
    )
}

export default Matches;