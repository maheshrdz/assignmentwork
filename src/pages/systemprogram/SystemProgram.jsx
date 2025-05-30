import React from "react";

const SystemProgram = () => {
  return (
    <div className="main_sec systemprogram_sec ">
      <div className="]">
        <div className="max-w-6xl bg-[#F1F6F2] border border-[#aeb7b9] ml-auto  rounded rounded-[12px] overflow-hidden shadow-md">
          {/* Header */}
          <div className="bg-[#eff3f7] px-4 py-1 flex items-center gap-4 border-b">
            <div className="font-semibold">流量表預送作業</div>
            <div className="text-sm">
              2024/06/04 AM 10:53 使用者:Admin Server:ASUS15
            </div>
            <ul className="flex justify-between ml-auto">
              <li>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-regular fa-square mx-5"></i>
                <i className="fa-solid fa-xmark"></i>
              </li>
            </ul>
          </div>

          {/* Tab Bar */}
          <div className="flex  border-b px-4 py-1 bg-[#efefef]">
            <button className="mr-4">📄 流量表預送</button>
            <button className="mr-4">📄 流量表預送</button>
          </div>

          {/* Customer Info */}
          <div className="m-2 bg-[#efefef]">
            <div className="my_container">
              <form className="">
                <div className="inpt_field">
                  <div className="first_col">
                    <div className="single_inpt">
                      <h3 className="form_head"></h3>
                      <label for="fname">進貨單號:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="202405240001"
                        className="bg-[#d1fce9] text-black"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname" className="text-[#281e9c]">
                        倉庫:
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="C001"
                        className="bg-[#e8f9fd]"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">未稅小計:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="1,950"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">未結金額:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="0"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname" className="text-[#281e9c]">
                        部門:
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="C01"
                        className="bg-[#e8f9fd]"
                      />
                    </div>
                  </div>
                  <div className="second_col">
                    <div className="single_inpt">
                      <label for="fname" className="text-[#281e9c]">
                        進貨日期:
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="2024/05/24"
                        className="bg-[#e8f9fd]"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">倉庫名稱:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="中庸瓦斯倉"
                        className="placeholder-[#9ed2cf]"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">稅額:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="0"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">發單人員</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="1950"
                        className="placeholder-red-500"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">部門名稱:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="中庸瓦斯倉"
                        className="placeholder-[#9ed2cf]"
                      />
                    </div>
                  </div>
                  <div className="third_col">
                    <div className="single_inpt">
                      <label for="fname" className="text-[#281e9c]">
                        {" "}
                        廠商編號:
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="CA007"
                        className="bg-[#e8f9fd]"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">發票號碼:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="bg-[#e8f9fd]"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">金額合計:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="1,950"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">建檔人員:</label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">進貨型態:</label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                  </div>
                  <div className="four_col">
                    <div className="single_inpt">
                      <label for="fname">廠商名稱</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder=" 黃教燿 "
                        className="placeholder-[#9ed2cf]"
                      />
                    </div>

                    <div className="single_inpt">
                      <label for="fname">廠商單號:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="!w-[25%] bg-[#e8f9fd]"
                      />
                      <label for="fname" className="check_label"></label>
                      <input
                        type="checkbox"
                        className="check_box"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">已付款金額:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="2024/05/24 PM 01"
                      />
                    </div>
                    <div className="single_inpt">
                      <label for="fname">建檔日期:</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="B"
                      />
                      <input
                        type="text"
                        className="single_right placeholder-[#9ed2cf]"
                        id="fname"
                        name="fname"
                        placeholder="零售部門 "
                      />
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
                  <label for="fname">進貨單號:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="bg-[#e8f9fd]"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Table Header */}
          <div className="m-2 bg-[#efefef] border border-t-[#b5b5b2]">
            <div className="flex gap-8 border-b px-4 py-1 bg-[#efefef]">
              <button className="mr-4">📄 流量表預送</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#abcfd1]">
                    <th className="border border-black px-2 py-1 font-medium">
                      客戶編號
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      查詢編號
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      自訂編號
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      客戶實號
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      項次
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      流量表型式
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      流量表型式
                    </th>
                    <th className="border border-black px-2 py-1 font-medium">
                      項次
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1 text-[#b45785]">
                      1
                    </td>
                    <td className="border border-gray-300 text-[#070abb] px-2 py-1">
                      1A005B363
                    </td>
                    <td className="border border-gray-300 text-[#9ed2cf] px-2 py-1">
                      百樂火鍋爐B363
                    </td>
                    <td className="border border-gray-300 px-2 py-1">3</td>
                    <td className="border border-gray-300 px-2 py-1">650.00</td>
                    <td className="border border-gray-300 px-2 py-1">0</td>
                    <td className="border border-gray-300 px-2 py-1 text-[#bcc296]">
                      {" "}
                      1,950
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-[#52a6c3]">
                      CC
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Body */}
          <div className="py-12 text-center text-gray-500 text-sm"></div>

          {/* Footer Bar */}

          <div className="flex items-center justify-between border-t bg-[#efefef] border-[#b5b5b2]">
            <div className="flex items-center w-[55%]">
              {/* Navigation Buttons - Disabled */}
              <button className="border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F] ">
                ◁|
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F]"
                disabled
              >
                ◁
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F]"
                disabled
              >
                ▷
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F]"
                disabled
              >
                ▷|
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center w-[45%] justify-end">
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F]  px-1 ">
                <i class="fa fa-envelope text-[#FF4950]" aria-hidden="true"></i>{" "}
                2. 轉叫貨
              </button>
              <button className="flex items-center justify-center  gap-1 border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F] px-1 ">
                <i class="fa fa-pencil text-[#FF4ED2]" aria-hidden="true"></i>{" "}
                0. 全不選
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F] px-1 ">
                <i class="fa fa-check text-[#57C756]" aria-hidden="true"></i> 1.
                全選
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F] px-1 ">
                A. 查詢
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-[#F1F6F2] text-[#9F9F9F] px-1 ">
                E. 過濾
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-t px-4 py-2 text-sm bg-[#c7daef]">
            <div className="text-gray-600">說明:</div>
            <div className="flex space-x-4">
              <span>☎ 來電: 3872333 大溪區復興路190巷1弄6號</span>
              <span>一般訂戶 4824</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemProgram;
