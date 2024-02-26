import React from 'react'
import { Sidebar } from '../SideBar/Sidebar';
import "./_adminPage.scss"
import { Outlet } from 'react-router-dom';
export const AdminPage = () => {

  return (
    <div className='admin-page-container'>
      <Sidebar />
      <div className='outlet-container'>
        <Outlet />
      </div>
    </div>
  )
}
