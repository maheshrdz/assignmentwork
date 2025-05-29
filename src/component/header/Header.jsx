import React from "react";

import ManageIcon from "../../assets/img/management.png";
import DataIcon from "../../assets/img/basicdata.png";

const Header = () => {
  return (
    <header className="head_sec">
      <nav className="nav">
        <ul className="flex justify-between  bg-[#eef3f9]">
          <li>
            <h2 className="flex items-center">
              <img src={DataIcon} alt="" className="h-5 w-5 mr-2" /> 系統程式規
            </h2>
          </li>
          <li>
            <i className="fa-solid fa-minus"></i>
            <i className="fa-regular fa-square mx-5"></i>
            <i className="fa-solid fa-xmark"></i>
          </li>
        </ul>

        <ul className="primary_nav">
          <li className="tab_shadow">
            <a href="#">
              <img src={ManageIcon} alt="manage" />{" "}
              <span>Management System</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>Routine Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span> Basic Data</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>Packaging Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span>General Ledger</span>
            </a>
          </li>
        </ul>
        <ul className="secondary_nav ">
          <li className="tab_shadow">
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span> Report Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span> System Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" />{" "}
              <span>Caller ID Display</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" />{" "}
              <span>Message Notificationq</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span>User</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" />{" "}
              <span>Manual Incoming Call</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
