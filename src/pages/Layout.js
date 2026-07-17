import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Layout.css';
import diceImage from '../img/dice.png';

export default function Layout() {
    const navigate = useNavigate();

    return(
        <div>
            <header className="top-bar">
                <div className="top-bar-left">
                    <img src={diceImage} alt='d20_dice'/>
                </div>

                <div className="top-bar-center">
                    <h1>D&D 5e Character Builder</h1>
                </div>

                <div className="top-bar-right">
                    <button 
                    className="btn-reset"
                    onClick={navigate(`/character-builder`)}
                    >
                    START/RESET
                    </button>
                </div>
            </header>
            <Outlet />
        </div>
    );
}