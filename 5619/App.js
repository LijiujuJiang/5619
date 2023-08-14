import React from 'react';
import { Outlet } from 'react-router-dom'
import Login from './pages/login';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Outlet />

    </div>
  )
}