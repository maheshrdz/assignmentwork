import React, { useState } from "react";

import MinusIcon from "../../assets/img/minus.png";
import BoxIcon from "../../assets/img/Vector.png";
import CrossIcon from "../../assets/img/close.svg";
import salesData from "../../data.json";
import { formatUnits } from "../../utils/common";
import IphoneLogo from "../../assets/img/social.png";
import SettingIcon from "../../assets/img/setting.png";
import LaptopIcon from "../../assets/img/laptop.png";
import ChipsIcon from "../../assets/img/chips.svg";

const Home = () => {
  const { customers, salespersons, warehouses, products } = salesData;
  const [quantities, setQuantities] = useState({});

  /**
   *
   * handleQuantityChange
   */

  const handleQuantityChange = (productId, value) => {
    const qty = parseFloat(value) || 0;
    setQuantities((prev) => ({
      ...prev,
      [productId]: qty,
    }));
  };

  /**
   *
   * calculateSubtotal
   */

  const calculateSubtotal = (productId, price) => {
    const qty = quantities[productId] || 0;
    return (qty * price).toFixed(2);
  };

  return (
    <div className="main_sec">
      <div className="container_custom">
        <ul className="top_item">
          <ul className="sidebar_sec_inner">
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
      </div>
    </div>
  );
};
export default Home;
