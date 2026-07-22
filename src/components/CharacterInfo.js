import React from 'react';
import { useForm } from 'react-hook-form';
import { RACES } from '../constant/races';
import { CLASSES } from '../constant/classes';
import './CharacterInfo.css'

export default function CharacterInfo(){
    const {register, handleSubmit, formState: { errors },} = useForm({defaultValues: {characterName: '', race: '', characterClass: ''}});
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return(
        <div className='info-panel-wrapper'>
            <div className='panel-badge'>Ітформація про персонажа</div>
            <form className='info-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='characterName'>Ім'я вашого персонажа:</label>
                    <input
                    className='form-control'
                    id="characterName"
                    placeholder="---"
                    {...register('characterName', { 
                        required: "Ім'я є обов'язковим",
                        minLength: { value: 2, message: "Мінімум 2 символи" }
                    })}/>
                    {errors.characterName && <span className="error-text">{errors.characterName.message}</span>}
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor="race">Раса вашого персонажа:</label>
                    <select 
                    className='form-control'
                    id="race"
                    {...register("race",{required: "Виберіть расу"})}>
                        <option value="">-- Оберіть --</option>
                        {Object.entries(RACES).map(([raceKey, raceData]) => (
                            <option key={raceKey} value={raceKey}>
                                {raceData.name}
                            </option>))}
                    </select>
                    {errors.race && <span className="error-text">{errors.race.message}</span>}
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor="characterClass">Клас вашого персонажа:</label>
                    <select
                    className='form-control'
                    id="characterClass"
                    {...register("characterClass",{required: "Виберіть клас"})}>
                        <option value="">-- Оберіть --</option>
                            {Object.entries(CLASSES).map(([classKey, classData]) => (
                            <option key={classKey} value={classKey}>
                                {classData.name}
                            </option>))}
                    </select>
                    {errors.characterClass && <span className="error-text">{errors.characterClass.message}</span>}
                </div>
                <button type="submit">
                    Зберегти інформацію
                </button>
            </form>
        </div>
    );
}