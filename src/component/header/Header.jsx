import React from "react";

import headIcon from "../../assets/img/header/head-icon.png";
import head1 from "../../assets/img/header/head1.png";
import head2 from "../../assets/img/header/head2.png";
import head3 from "../../assets/img/header/head3.png";
import head4 from "../../assets/img/header/head4.png";
import head5 from "../../assets/img/header/head5.png";
import head6 from "../../assets/img/header/head6.png";
import head7 from "../../assets/img/header/head7.png";
import head8 from "../../assets/img/header/head8.png";
import head9 from "../../assets/img/header/head9.png";
import head10 from "../../assets/img/header/head10.png";
import head11 from "../../assets/img/header/head11.png";


const Header = () => {
  return (
    <header className="head_sec">
      <nav className="nav">
        <ul className="flex justify-between  bg-[#eef3f9]">
          <li>
            <h2 className="flex items-center">
              <img src={headIcon} alt="" className="h-5 w-5 mr-2" /> 系統程式規
            </h2>
          </li>
          <li>
            <i className="fa-solid fa-minus"></i>
            <i className="fa-regular fa-square mx-5"></i>
            <i className="fa-solid fa-xmark cursor-pointer"></i>
          </li>
        </ul>

        <ul className="primary_nav">
          <li className="tab_shadow">
            <a href="#">
              <img src={head1} alt="manage" /> <span>例行作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head2} alt="manage" /> <span>基本資料</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head3} alt="manage" /> <span> 帳款作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head4} alt="manage" /> <span>報表作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head5} alt="manage" /> <span>系統設定</span>
            </a>
          </li>
        </ul>
        <ul className="secondary_nav ">
          <li className="tab_shadow">
            <a href="#">
              <img src={head6} alt="manage" /> <span> 管理系統</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head7} alt="manage" /> <span> 分裝作業</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head8} alt="manage" /> <span>會計總帳</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head9} alt="manage" /> <span>來電顯示◎</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head10} alt="manage" /> <span>訊息通知</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={head11} alt="manage" /> <span>使用者</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
