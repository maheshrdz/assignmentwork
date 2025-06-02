import React from "react";
import { Link, useLocation } from "react-router-dom";

import IphoneLogo from "../../assets/img/social.png";
import SettingIcon from "../../assets/img/setting.png";
import LaptopIcon from "../../assets/img/laptop.png";
import ChipsIcon from "../../assets/img/chips.svg";
import close from "../../assets/img/close.svg";
import icon1 from "../../assets/img/sidebar/Icon 1.png";
import icon2 from "../../assets/img/sidebar/Icon 2.png";
import icon3 from "../../assets/img/sidebar/Icon 3.png";
import icon4 from "../../assets/img/sidebar/Icon 4.png";
import icon5 from "../../assets/img/sidebar/Icon 5.png";
import icon6 from "../../assets/img/sidebar/Icon 6.png";
import icon7 from "../../assets/img/sidebar/Icon 7.png";
import icon8 from "../../assets/img/sidebar/Icon 8.png";
import icon9 from "../../assets/img/sidebar/Icon 9.png";
import icon10 from "../../assets/img/sidebar/Icon 10.png";
import icon11 from "../../assets/img/sidebar/Icon 11.png";
import icon12 from "../../assets/img/sidebar/Icon 12.png";
import icon13 from "../../assets/img/sidebar/Icon 13.png";
import icon14 from "../../assets/img/sidebar/Icon 14.png";
import icon15 from "../../assets/img/sidebar/Icon 15.png";
import icon16 from "../../assets/img/sidebar/Icon 16.png";
import icon17 from "../../assets/img/sidebar/Icon 17.png";
import icon18 from "../../assets/img/sidebar/Icon 18.png";
import icon19 from "../../assets/img/sidebar/Icon 19.png";
import icon20 from "../../assets/img/sidebar/Icon 20.png";
import icon21 from "../../assets/img/sidebar/Icon 21.png";
import icon22 from "../../assets/img/sidebar/Icon 22.png";
import icon23 from "../../assets/img/sidebar/Icon 23.png";
import icon24 from "../../assets/img/sidebar/Icon 24.png";
import icon25 from "../../assets/img/sidebar/Icon 25.png";
import icon26 from "../../assets/img/sidebar/Icon 26.png";




const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="sidebar_sec">
      <ul className="top_item">
        <img className="chips" src={ChipsIcon} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={icon1} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>

        <ul className="sidebar_sec_inner">
          <li className={isActive("/order-management") ? "active" : ""}>
            <Link to="/order-management">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon2} alt="" />
                </div>
                <h4>叫貨管理</h4>
              </div>
            </Link>
          </li>
          <li className={isActive("/gas-truck-management") ? "active" : ""}>
            <Link to="/gas-truck-management">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon3} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </Link>
          </li>
          <li className={isActive("/system-program") ? "active" : ""}>
            <Link to="/system-program">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon4} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </Link>
          </li>
          <li className={isActive("/cylinder-operations") ? "active" : ""}>
            <Link to="/cylinder-operations">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon5} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </Link>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon6} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon7} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon8} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon9} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon10} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon11} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon12} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon13} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon14} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon15} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon16} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon17} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={icon18} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
        </ul>
      </ul>

      <ul className="top_item my-1">
        <img className="chips plus" src={close} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={icon23} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>
      </ul>
      <ul className="top_item my-1">
        <img className="chips plus" src={close} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={icon24} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>
      </ul>
      <ul className="top_item my-1">
        <img className="chips plus" src={close} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={icon25} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>
      </ul>
      <ul className="top_item my-1">
        <img className="chips plus" src={close} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={icon26} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
