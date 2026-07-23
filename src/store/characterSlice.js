import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    baseStats: {strength:8, dexterity:8, constitution:8, intelligence:8, wisdom:8, charisma:8},
    characterName: '',
    baseRace: '',
    baseClass: '' 
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.characterName = action.payload; 
    },

    setRace: (state, action) => {
      state.baseRace = action.payload; 
    },
    
    setClass: (state, action) => {
      state.baseClass = action.payload; 
    },
    // "+"
    incrementStat: (state, action) => {
      const statName = action.payload;
      const currentValue = state.baseStats[statName];
      if (currentValue < 15) {
        state.baseStats[statName] += 1;
      }
    },
    // "-"
    decrementStat: (state, action) => {
      const statName = action.payload;
      const currentValue = state.baseStats[statName];
      if (currentValue > 8) {
        state.baseStats[statName] -= 1;
      }
    }
  }
});

export const { setRace, setClass, setName, incrementStat, decrementStat } = characterSlice.actions;
export default characterSlice.reducer;