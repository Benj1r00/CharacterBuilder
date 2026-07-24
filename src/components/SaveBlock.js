import React from "react";
import { useNavigate } from "react-router-dom"
import './SaveBlock.css';

export default function SaveBlock(){
    const navigate = useNavigate();
    const slots = [1, 2, 3, 4, 5, 6, 7];

    return(
        <div className="save-slots-container">
            {slots.map((slotNum) => (
                <div key={slotNum} className="save-slot-bar">
                
                <div className="save-info">
                    <span className="slot-number">Сейв № {slotNum}</span>
                </div>

                <div className="save-actions">
                    <button className="btn btn-load" onClick={() => navigate(`/character-builder/${slotNum}`)}>
                        Завантажити
                    </button>
                </div>
                
                </div>
            ))}
        </div>
    );
}
