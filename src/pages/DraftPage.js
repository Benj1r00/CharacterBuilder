import React from "react";
import SaveBlock from "../components/SaveBlock";
import "./DraftPage.css";

export default function DraftPage(){
    return(
        <div>
            <h2 className="main-title">Всі ваші збережені герої</h2>
            <SaveBlock/>
        </div>    
    );
}