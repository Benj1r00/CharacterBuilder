import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    baseStats: {strength:8, dexterity:8, constitution:8, intelligence:8, wisdom:8, charisma:8},
    baseRace: '',
    baseClass: '' 
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Екшен для оновлення раси з лівої панелі
    setRace: (state, action) => {
      state.selectedRace = action.payload;
    },
    // Екшен для оновлення класа з лівої панелі
    setClass: (state, action) => {
      state.selectedClass = action.payload;
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

export const { setRace, setClass, incrementStat, decrementStat } = characterSlice.actions;
export default characterSlice.reducer;