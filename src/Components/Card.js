import React from "react";
import Data from "../Data";


export default function Card(props){
    return(
        <div className="Card">
            
            <img src={props.item.image} className="image" width="150px" ></img>
            <div className="card1">
                <div className="card1--info">
            <p className="card1--loc">{props.item.location}</p>

            <p className="card1--maps">{props.item.Maps}</p>
            </div>
            <h3>{props.item.title}</h3>
            <p className="card1--date">{props.item.startdate} - {props.item.enddate}</p>
            <p className="card1--descr">{props.item.description}</p>
            </div>
            
        </div>

    )
 
   

}