import React from "react";
import './style.css';
import Button from "../../common/Button";
function EpisodeDetails({index,title,description,audioFile,onClick}){
    return(
        <div style={{width:"100%"}}>
            <h1 style={{textAlign:"left",marginBottom:"0px" }} >
                {index}. {title}</h1>
            <p style={{marginLeft:"1.5rem"}} className="podcast-description">{description}</p>
            <Button
            text={"Play"} 
            onClick={()=>onClick(audioFile)} 
            style={{width:"100px",marginBottom:"5rem"}}
            />
        </div>
    );
}
export default EpisodeDetails;