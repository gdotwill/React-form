import React from "react"
import { Link } from "react-router-dom"
import arrow from "../images/arrow-left.svg"

function Redirect () {
    const backImage = {
        width: "10%",
        fill: "#fff", 
        marginRight: "10px" ,
    };

    const backText = {
        fontSize: "20px",
        fontWeight: "bold",
        verticalAlign: "middle"
    };

    return (
        <div>            
            <div className="redirectContainer">
                <div className="confirmation">
                    <h1>Your details have been captured successfully. </h1>
                    <br/>
                    <Link to="/"> 
                        <button className="btn btn-primary">
                            <img src={arrow} style={backImage} alt="left arrow"/> 
                            <span style={backText}>Back</span> 
                        </button>
                    </ Link>
                </div>              
            </div>                  
        </div>
    )
}

export default Redirect



