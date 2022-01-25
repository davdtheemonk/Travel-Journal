import React from "react";

export default function Header(){
    return(
        <nav>
            <img className="nav--img" src={process.env.PUBLIC_URL+"/images/6.svg"} width="40px" height="40px" />
            
            <h3 className="title">My Travel Journal</h3>
          
        </nav>
    ) 
}