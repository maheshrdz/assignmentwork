import React from 'react'
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

 const Layout = () => {
  return (
    <div>
        <Header/>
        <div className='layout_main'>
        <Sidebar />
        <Outlet/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
export default Layout;