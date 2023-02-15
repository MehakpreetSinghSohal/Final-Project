import React from "react";
import "./landing.css";
const Steps = ()=>{
    return(
        <div className="steps_cont">
            <h1 className="steps_heading">Find your Special Someone</h1>
            <div className="steps_card_cont">
                <div className="steps_card">
                    <img src="./images/1.jpg" alt="1"></img>
                    <h4>Register and complete your profile info</h4>
                </div>
                <div className="steps_card">
                    <img src="./images/2.jpg" alt="2"></img>
                    <h4>Filter profiles as per your preferences</h4>
                </div>
                <div className="steps_card">
                    <img src="./images/3.jpg" alt="3"></img>
                    <h4>Connect when both accept each other</h4>
                </div>
            </div>
        </div>
    )
}

export default Steps;