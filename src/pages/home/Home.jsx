import React, { useState } from "react";

import MinusIcon from "../../assets/img/minus.png";
import BoxIcon from "../../assets/img/Vector.png";
import CrossIcon from "../../assets/img/close.svg";
import salesData from "../../data.json";
import { formatUnits } from "../../utils/common";

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
        <div className="top_menu">
          <h2>Main Form (Right Panel)</h2>
          <div className="tab_icon">
            <img src={MinusIcon} alt="Icon" />
            <img className="box_icon" src={BoxIcon} alt="Icon" />
            <img src={CrossIcon} alt="Icon" />
          </div>
        </div>
        <div className="my_container">
          <h3 className="form_head">Sales Header</h3>
          <form className="">
            <div className="inpt_field">
              <div className="first_col">
                <div className="single_inpt">
                  <h3 className="form_head"></h3>
                  <label for="fname">Sales Order No.</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Sales Date</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Customer Code</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Actual Customer No.</label>
                  <input type="text" id="fname" name="fname" />
                </div>
              </div>
              <div className="second_col">
                <div className="single_inpt">
                  <label for="fname">Subtotal (Excl. Tax)</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Discount Amount</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname"> Tax Amount</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Billing Date</label>
                  <input type="text" id="fname" name="fname" />
                </div>
              </div>
              <div className="third_col">
                <div className="single_inpt">
                  <label for="fname"> Installer</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname"> Name</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Salesperson</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Default Warehouse</label>
                  <input type="text" id="fname" name="fname" />
                </div>
              </div>
              <div className="four_col">
                <div className="single_inpt">
                  <label for="fname">Is Borrowed</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="single_inpt">
                  <label for="fname">Total Amount</label>
                  <input type="text" id="fname" name="fname" />
                  <input
                    type="text"
                    className="single_right"
                    id="fname"
                    name="fname"
                  />
                </div>
                <div className="single_inpt">
                  <label for="fname">Amount Paid</label>
                  <input type="text" id="fname" name="fname" />
                  <label for="fname" className="check_label"></label>
                  <input
                    type="checkbox"
                    className="check_box"
                    id="fname"
                    name="fname"
                  />
                </div>
                <div className="single_inpt">
                  <label for="fname">Outstanding Amount</label>
                  <input type="text" id="fname" name="fname" />
                </div>
              </div>

              <div className="radio_btn">
                <h4 className="form_head">Tax Type</h4>
                <div className="inpt_radio">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Tax Exempt</label>
                </div>
                <div className="inpt_radio">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="css">Added Tax</label>
                </div>
                <div className="inpt_radio">
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="javascript">Inclusive Tax</label>
                </div>
              </div>
            </div>
            <div className="full_inpt">
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname" />
            </div>
          </form>
          <h3 className="sale_head">Sales Details</h3>
          <div className="table">
            <table>
              <thead>
                <tr className="tbl_head">
                  <th>Item No.</th>
                  <th>Product Code</th>
                  <th>Unit Price($)</th>
                  <th>Quantity</th>
                  <th>Subtotal($)</th>
                  <th>Warehouse</th>
                  <th>Product Name & Spec</th>
                  <th>Unit</th>
                  <th>Attachments</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.price}</td>
                    <td>
                      <input
                        type="number"
                        className="num_input"
                        min="0"
                        value={quantities[product.id] || ""}
                        onChange={(e) => {
                          const value = Math.max(0, Number(e.target.value));
                          handleQuantityChange(product.id, value);
                        }}
                        placeholder="Quantity"
                      />
                    </td>
                    <td>{calculateSubtotal(product.id, product.price)}</td>
                    <td>
                      <select className="num_input">
                        {warehouses.map((wh) => (
                          <option key={wh.id} value={wh.id}>
                            {wh.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{product.name}</td>
                    <td>{formatUnits[product?.unit]}</td>
                    <td>{/* <input type="file" /> */}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
