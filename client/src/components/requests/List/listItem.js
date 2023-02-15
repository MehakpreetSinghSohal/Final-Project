import "./index.css";
import Axios from "axios";
import { useState,useEffect } from "react";

const ListItem = (props)=>{
    let uid = props.uid;
    console.log(uid)

    const [display,setDispaly]= useState([]);

    function getSentInfo(){

        Axios.post("http://localhost:5000/getSentinfo", { uid })
        .then((res) => {
            console.log(res.data)
            setDispaly(res.data);
            
        })
        .catch((err) => {
          console.log(err);
          if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
          }
        });
    }



    //ACCEPT
    const accept=(e)=>{
        e.preventDefault();

        console.log("sending accept req");
        Axios.post("http://localhost:5000/accept", { from:display.phone, to:props.to })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            
        })
        .catch((err) => {
            console.log(err);
            if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
            }
        });
    }

    //UNSENT
    const unsend=(e)=>{
        e.preventDefault();

        console.log("sending unsend req");
        Axios.post("http://localhost:5000/unsend", { from:display.phone, to:props.to })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            
        })
        .catch((err) => {
            console.log(err);
            if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
            }
        });
    }

    useEffect(() => {
        getSentInfo();
    }, []);

    console.log(display)
    return(
        <div className="reqListCard">
            <div className="reqListDetail">
                <img src={display.dp} alt="img" className="bcard_img"/>
                <h3>{display.name}</h3>
            </div>
            <div className="reqListDetail">
                <p>{display.dob} | {display.language} | {display.religion} | {display.city}</p>
            </div>
            <div className="reqListDetail">
                <div className="reqAccBtn" onClick={accept}>Accept</div>
                <div  className="reqRejBtn" onClick={unsend}>Decline</div>
            </div>
        </div>
    )
}

export default ListItem;