import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import DraftPage from '../pages/DraftPage'
import './Layout.css';
import diceImage from '../img/dice.png';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div>
            <header className="top-bar">
                <div className="top-bar-left">
                    <img src={diceImage} onClick={() => navigate(`/`)} alt='d20_dice'/>
                </div>

                <div className="top-bar-center">
                    <h1>D&D 5e Character Builder</h1>
                </div>

                <div className="top-bar-right">
                    {location.pathname === '/' && (
                        <button 
                        className="btn-reset"
                        onClick={() => navigate(`/character-builder/`)}
                        >
                        БЕЗ ЗБЕРЕЖЕННЯ
                        </button>
                    )} 
                </div>
            </header>
            <main className='main-conteiner'>
                {location.pathname === '/' && (<DraftPage/>)}
                <Outlet/>
            </main>
        </div>
    );
}