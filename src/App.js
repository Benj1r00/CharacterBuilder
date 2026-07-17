import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/LayoutPage'
import ErrorPage from './pages/ErrorPage'
import './App.css'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} /> 
    </Routes>
  );
}