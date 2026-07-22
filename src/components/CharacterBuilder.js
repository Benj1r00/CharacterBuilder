import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementStat, decrementStat } from '../store/characterSlice';

import { POINT_COST, whatModifier } from '../constant/pointBuyCost'
import { RACES } from "../constant/races";
import { CLASSES } from "../constant/classes";
import './CharacterBuilder.css'; // Підключення нашого нового CSS файлу

const UI_LABELS = {
    strength: 'Сила', 
    dexterity: 'Спритність', 
    constitution: 'Конституція',
    intelligence: 'Інтелект', 
    wisdom: 'Мудрість', 
    charisma: 'Харизма'
};

export default function CharacterBuilder(){
    const dispatch = useDispatch();
    const baseStats = useSelector((state) => state.character.baseStats);
    const selectedRaceKey = useSelector((state) => state.character.selectedRace);
    const selectedClassKey = useSelector((state) => state.character.selectedClass);

    const activeBonuses = selectedRaceKey && RACES[selectedRaceKey] ? RACES[selectedRaceKey].bonuses : {};
    const primaryAbility = CLASSES[selectedClassKey]?.primary_ability || [];

    const spentPoints = Object.values(baseStats).reduce((total, statValue) => {
        return total + POINT_COST[statValue];
    }, 0);

    const pointsRemaining = 27 - spentPoints;

    return(
        <div className="character-builder-wrapper">
            <div className="panel-badge">Характеристики</div>
            
            <div className="points">
                <h2>БАЛИ ЗАЛИШИЛОСЯ: {pointsRemaining} / 27</h2>
            </div>
            
            <div className="stats-list">
                {Object.entries(baseStats).map(([statKey, statValue]) => {                    
                    const raceBonus = activeBonuses[statKey] || 0; 
                    const totalStatValue = statValue + raceBonus;
                    const modifier = whatModifier(totalStatValue);
                    const formattedModifier = modifier >= 0 ? `+${modifier}` : modifier;
                    const displayLabel = UI_LABELS[statKey];
                    const isPrimary = primaryAbility.includes(statKey);

                    return (
                        <div 
                            key={statKey} 
                            className={`stat-row ${isPrimary ? 'stat-row-primary' : ''}`}
                        >
                            <strong className={`stat-label ${isPrimary ? 'stat-label-primary' : ''}`}>
                                {displayLabel} {isPrimary && '⭐'}
                            </strong>
                            
                            <button 
                                className="stat-btn"
                                onClick={() => dispatch(decrementStat(statKey))}
                                disabled={statValue <= 8}
                            >
                                -
                            </button>
                            
                            <span className="stat-value">{statValue}</span> 
                            
                            <button 
                                className="stat-btn"
                                onClick={() => dispatch(incrementStat(statKey))}
                                disabled={pointsRemaining === 0 || statValue >= 15}
                            >
                                +
                            </button>

                            <span className="stat-race-bonus">
                                {raceBonus > 0 ? `+${raceBonus}` : '-'}
                            </span>
                            
                            <strong className="stat-total">
                                {totalStatValue}
                            </strong>
                            
                            <span className="stat-modifier-badge">
                                {formattedModifier}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}