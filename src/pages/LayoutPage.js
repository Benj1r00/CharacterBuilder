import React from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import './LayoutPage.css';

export default function LayoutPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div>
            <h3>lolololo</h3>
            <Outlet />
        </div>
    );

}