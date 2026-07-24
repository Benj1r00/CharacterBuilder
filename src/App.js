import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/character-builder/:save?" element={<MainPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} /> 
    </Routes>
  );
}