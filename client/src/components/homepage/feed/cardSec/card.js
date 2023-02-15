import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const BCard = (props)=>{

    const uid = props.uid;

    var person = props.prof;
    const [sentReq,setSent] = useState(0);

    const checkStatus=(e)=>{
        Axios.post("http://localhost:5000/checkstat", { from:uid, to:person.phone })
        .then((res) => {

            setSent(res.data);
            
        })
        .catch((err) => {
            console.log(err);
            if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
            }
        });
    }

    useEffect(() => {
        checkStatus();
    }, []);
    
    const postReq=(e)=>{
            e.preventDefault();

            Axios.post("http://localhost:5000/sendreq", { from:uid, to:person.phone })
            .then((res) => {
                setSent(true);
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

        Axios.post("http://localhost:5000/unsend", { from:uid, to:person.phone })
        .then((res) => {
            setSent(false);
        })
        .catch((err) => {
            console.log(err);
            if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
            }
        });
    }
    return(
        <div className="bcard">
            <img src={person.dp} alt="img" className="bcard_img"/>
            <div className="bcard_details">
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>{person.name}</td>
                    </tr>
                    <tr>
                        <th>DOB:</th>
                        <td>{person.dob}</td>
                    </tr>
                    <tr>
                        <th>Occupation:</th>
                        <td>{person.job}</td>
                    </tr>
                    <tr>
                        <th>Location:</th>
                        <td>{person.city}, {person.State}</td>
                    </tr>
                </table>
                {
                    sentReq ? (
                        <><div onClick={unsend} className="cardUnsend">Unsend</div></>
                    ) : (
                    <>
                    <div onClick={postReq} className="cardSend">Send Request</div>
                    </>
                    )
                }
                
            </div>
        </div>
    )
}

export default BCard;