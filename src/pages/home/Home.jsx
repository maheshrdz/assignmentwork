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
                    <img src={icon2} alt="" />
                  </div>
                  <h4>采购申请管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4>燃气集成管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h4>销售运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon16} alt="" />
                  </div>
                  <h4>采购运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon6} alt="" />
                  </div>
                  <h4>采购申请管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4>燃气集成管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon20} alt="" />
                  </div>
                  <h4>销售运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon12} alt="" />
                  </div>
                  <h4>采购运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon14} alt="" />
                  </div>
                  <h4>采购申请管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon15} alt="" />
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
                    <img src={icon16} alt="" />
                  </div>
                  <h4>采购运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon17} alt="" />
                  </div>
                  <h4>采购申请管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon18} alt="" />
                  </div>
                  <h4>燃气集成管理</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon19} alt="" />
                  </div>
                  <h4>销售运营</h4>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="menu_item">
                  <div className="icon">
                    <img src={icon20} alt="" />
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
