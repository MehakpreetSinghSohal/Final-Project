import MCard from "./matchCard";
import "./index.css";
import { useState,useEffect } from "react";
import Axios from "axios";

const MatchCont = (props)=>{
    console.log(props.user.phone);
    const uid =props.user.phone;
    const [display,setDispaly]= useState([]);
    const [userLoading,setUserLoading]= useState(true);

    function getInfo(){

        Axios.post("http://localhost:5000/getinfo", { uid })
        .then((res) => {
            setUserLoading(true);
            console.log(res.data)
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
        <div className="MatchCont">
        {display.Matches.map(id => (
                    <MCard uid={id}/>
            ))}
            </div>
            </>
            )
        }
        </>
    )
}

export default MatchCont;