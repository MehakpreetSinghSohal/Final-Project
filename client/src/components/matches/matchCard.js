import Axios from "axios";
import { useState,useEffect } from "react";

const MCard = (props)=>{
    let uid = props.uid;
    console.log(uid)

    const [display,setDispaly]= useState([]);

    function getInfo(){

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
    useEffect(() => {
        getInfo();
    }, []);

    console.log(display);
    return(
        <div className="mcard">
            <img src={display.dp} alt="img" className="mcard_img"/>
            <div className="mcard_details">
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>{display.name}</td>
                    </tr>
                    <tr>
                        <th>Religion:</th>
                        <td>{display.religion}</td>
                    </tr>
                    <tr>
                        <th>Language:</th>
                        <td>{display.language}</td>
                    </tr>
                    <tr>
                        <th>Location:</th>
                        <td>{display.city}, {display.State}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MCard;