import React from 'react';
import { Routes,Route } from "react-router-dom"
import PublicElement from './PublicElement/PublicElement';
import UserElement from './UserElement/UserElement';
import AdminElement from './AdminElement/AdminElement';
import Home from '../components/Home/Home';
import User from '../components/User/User';
import Admin from '../components/Admin/Admin';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PublicElement>
            <Home />
          </PublicElement>
        }></Route>
        <Route path="/user" element={
          <UserElement>
            <User />
          </UserElement>
        }></Route>
        <Route path="/admin" element={
          <AdminElement>
            <Admin />
          </AdminElement>
        }></Route>
        <Route path="*" element={<div className="text-center text-3xl mt-5">404 - Page Not Found</div>}></Route>
      </Routes>
    </div>
  )
}
export default AppRoutes