import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <h2>Ой! Сторінку не знайдено</h2>
        <Link to="/" className="home-button">
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
}; 