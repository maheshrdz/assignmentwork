import React from "react";

import IphoneLogo from "../../assets/img/social.png";
import SettingIcon from "../../assets/img/setting.png";
import LaptopIcon from "../../assets/img/laptop.png";
import ChipsIcon from "../../assets/img/chips.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_sec">
      <ul className="top_item">
        <img className="chips" src={ChipsIcon} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={IphoneLogo} alt="" />
          </div>
          <h4>采购申请管理</h4>
        </li>

        <ul className="sidebar_sec_inner">
          <li>
            <Link to="/order-management">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>叫貨管理</h4>
              </div>
            </Link>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <Link to="/system-program">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </Link>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>采购申请管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>燃气集成管理</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>销售运营</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>采购运营</h4>
              </div>
            </a>
          </li>
        </ul>
      </ul>
      {/* <ul className="top_item">
      <img className="chips" src={ChipsIcon} alt="chips" />
        <li className="main_item">
          <div className="icon">
            <img src={IphoneLogo} alt="" />
          </div>
          <h4>Purchase Request Management</h4>
        </li>
        <ul className="sidebar_sec_inner">
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Purchase Request Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>Gas Integration Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Sales Operations</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>Purchase Operations</h4>
              </div>
            </a>
          </li>
        </ul>
      </ul>
      <ul className="top_item">
        <li className="main_item">
          <div className="icon">
            <img src={IphoneLogo} alt="" />
          </div>
          <h4>Purchase Request Management</h4>
        </li>
        <img className="chips" src={ChipsIcon} alt="chips" />

        <ul className="sidebar_sec_inner">
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Purchase Request Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>Gas Integration Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Sales Operations</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>Purchase Operations</h4>
              </div>
            </a>
          </li>
        </ul>
      </ul>
      <ul className="top_item">
        <li className="main_item">
          <div className="icon">
            <img src={IphoneLogo} alt="" />
          </div>
          <h4>Purchase Request Management</h4>
        </li>
        <img className="chips" src={ChipsIcon} alt="chips" />

        <ul className="sidebar_sec_inner">
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Purchase Request Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <h4>Gas Integration Management</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={IphoneLogo} alt="" />
                </div>
                <h4>Sales Operations</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="menu_item">
                <div className="icon">
                  <img src={LaptopIcon} alt="" />
                </div>
                <h4>Purchase Operations</h4>
              </div>
            </a>
          </li>
        </ul>
      </ul> */}
    </div>
  );
};
export default Sidebar;
