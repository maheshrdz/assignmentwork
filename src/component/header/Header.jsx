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
              <img src={ManageIcon} alt="manage" /> <span>例行作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>基本資料</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span> 帳款作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>報表作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span>系統設定</span>
            </a>
          </li>
        </ul>
        <ul className="secondary_nav ">
          <li className="tab_shadow">
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span> 管理系統</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span> 分裝作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span>會計總帳</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>來電顯示◎</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ManageIcon} alt="manage" /> <span>訊息通知</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={DataIcon} alt="manage" /> <span>使用者</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
