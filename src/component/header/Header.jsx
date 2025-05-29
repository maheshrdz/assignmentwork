import React from 'react'

import ManageIcon from "../../assets/img/management.png"
import DataIcon from "../../assets/img/basicdata.png"


 const Header = () => {
  return (
    
    <header className='head_sec'>
     <nav className='nav'>
       <ul className='primary_nav'>
        <li className='tab_shadow'><a href="#"><img src={ManageIcon} alt="manage" /> <span>Management System</span></a></li>
        <li ><a href="#"><img src={DataIcon} alt="manage" /> <span>Routine Tasks</span></a></li>
        <li ><a href="#"><img src={ManageIcon} alt="manage" /> <span> Basic Data</span></a></li>
        <li ><a href="#"><img src={DataIcon} alt="manage" /> <span>Packaging Tasks</span></a></li>
        <li ><a href="#"><img src={ManageIcon} alt="manage" /> <span>General Ledger</span></a></li>
       </ul>
       <ul className='secondary_nav '>
       <li className='tab_shadow'><a href="#"><img src={ManageIcon} alt="manage" /> <span> Report Tasks</span></a></li>
        <li><a href="#"><img src={DataIcon} alt="manage" /> <span> System Settings</span></a></li>
        <li><a href="#"><img src={ManageIcon} alt="manage" /> <span>Caller ID Display</span></a></li>
        <li><a href="#"><img src={DataIcon} alt="manage" /> <span>Message Notificationq</span></a></li>
        <li><a href="#"><img src={ManageIcon} alt="manage" /> <span>User</span></a></li>
        <li><a href="#"><img src={DataIcon} alt="manage" /> <span>Manual Incoming Call</span></a></li>
       </ul>
     </nav>

    </header>
  )
}
export default Header;  