import React, { useState } from "react";

function CylinderOperations() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="main_sec">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Popup
      </button>
      <div className="">
        <div className="max-w-6xl bg-bglightgry border border-borderlgt rounded rounded-[12px] overflow-hidden shadow-md">
          {/* Header */}
          <div className="bg-[#eff3f7] px-2 py-1 flex items-center gap-4 border-b">
            <div className="font-semibold">流量表預送作業</div>
            <div className="flex justify-between items-center gap-3">
              <span>2024/06/04 AM 10:53</span>
              <span>使用者:Admin</span>
              <span>Server:ASUS15</span>
            </div>
            <ul className="flex justify-between ml-auto">
              <li>
                <i className="fa-solid fa-minus"></i>
                <i className="fa-regular fa-square mx-5"></i>
                <i className="fa-solid fa-xmark"></i>
              </li>
            </ul>
          </div>

          <div className="flex border-b px-2 py-1 bg-[#efefef] pb-0">
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
              📄 客戶基本資料
            </button>
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
              📄 公司相關
            </button>
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
              📄 備註事項
            </button>
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
              📄 流量表設定
            </button>
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded">
              📄 客戶鋼瓶條碼
            </button>
            <button className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
              📄 客戶鋼瓶條碼(舊)
            </button>
          </div>

          <div className="grid grid-cols-[70%_30%] px-2">
            <div className="">
              <div className="flex items-center gap-2 w-full my-1">
                {/* 客戶編號 5057 */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 月結 checkbox */}
                <div className="">
                  <span className="text-sm">N</span>
                  <label className="text-sm">月結</label>
                  <input type="checkbox" className="ml-1" />
                </div>

                {/* 契約 checkbox */}
                <div className="">
                  <span className="text-sm">N</span>
                  <label className="text-sm">契約</label>
                  <input type="checkbox" className="ml-1" />
                </div>
              </div>
              <div className="flex items-center gap-2 w-full my-1">
                {/* 客戶編號 5057 */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  readOnly
                  className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                />

                {/* 月結 checkbox */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
                {/* 契約 checkbox */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
              </div>
              <div className="flex items-center gap-2 w-full my-1">
                {/* 客戶編號 5057 */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  readOnly
                  className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  readOnly
                  className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                />

                {/* 契約 checkbox */}
                <div className="">
                  <span className="text-sm">N</span>
                  <label className="text-sm">契約</label>
                  <input type="checkbox" className="ml-1" />
                </div>

                <div>
                  <label className="text-sm">等級</label>
                  <select className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen">
                    <option>五</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full my-1">
                {/* 客戶編號 5057 */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  readOnly
                  className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                />

                {/* 月結 checkbox */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
                {/* 契約 checkbox */}
                <label className="!min-w-0">客戶編號 </label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
              </div>
              <div className="flex items-center gap-2 w-full my-1">
                {/* 客戶編號 5057 */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />

                {/* 客戶實號 仲美媒氣 */}
                <label className="!min-w-0">客戶實號</label>
                <input
                  type="text"
                  value="仲美媒氣"
                  readOnly
                  className="border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                />

                {/* 月結 checkbox */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
                {/* 契約 checkbox */}
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
              </div>
              <div className="flex items-center gap-2 w-full my-1">
                <label className="!min-w-0">巷</label>
                <input
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                  defaultValue="0"
                />
                <label className="!min-w-0">弄</label>
                <input
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                  defaultValue="0"
                />
                <label className="!min-w-0">號</label>
                <input
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                  defaultValue="0"
                />
                <label className="!min-w-0">樓</label>
                <input
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                  defaultValue="0-0"
                />
                <label className="!min-w-0">客戶編號</label>
                <input
                  type="text"
                  value="5057"
                  readOnly
                  className="bg-bglightgreen border px-1 w-[100px] bg-[#EFEFEF] border-borderlgt"
                />
              </div>
            </div>
            <div className=" bg-[#D7D7FE] text-sm pr-4 pl-2 py-1 border border-borderlgt m-[2px]">
              {/* Row 1 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">欠 桶</label>
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
              </div>
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">自 有 空 瓶</label>
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
              </div>
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">長 期 借 桶</label>
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
              </div>
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">價 格</label>
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
              </div>
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">鋼 瓶 數 量</label>
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
                <input
                  className="border px-1 w-10 bg-[#EFEFEF] mr-2 border-borderlgt"
                  type="text"
                  value="0"
                />
              </div>
              <div className="flex items-center mb-1">
                <label className="!min-w-[70px] !text-left">送 貨 備 註</label>
                <input
                  className="border px-1 w-full bg-[#EFEFEF] border-borderlgt bg-bglightgreen"
                  type="text"
                  value="0"
                />
              </div>
            </div>
          </div>

          <div className="mx-2 bg-[#efefef] border border-borderdark">
            <div className="flex px-2 py-1 bg-[#efefef] pb-0">
              <div className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
                📄 客戶基本資料
              </div>
              <div className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
                📄 公司相關
              </div>
              <div className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
                📄 備註事項
              </div>
              <div className="px-3 py-1 border border-[#FFFDFF] border-r-borderlgt rounded ">
                📄 流量表設定
              </div>
            </div>
            {/* <div className="flex gap-8 border-b px-2 py-1 bg-[#efefef]">
          <button className="mr-4">📄 流量表預送</button>
        </div> */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-bggreen">
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm"></th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      銷售日期
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      倉庫
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      數量
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      單價
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      小計
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      品名與規格
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      產品編號
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      單位
                    </th>
                    <th className="border border-borderdark px-2 py-1 font-medium text-left text-sm">
                      業務
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border border-borderdark px-2 py-1 font-medium text-left text-sm bg-bggreen">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
                    <td className="border-tdborder border border-borderdark px-2 py-1 font-medium text-left text-sm hover:bg-white text-sm"></td>
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
              <button className="border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F] ">
                ◁|
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F]"
                disabled
              >
                ◁
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F]"
                disabled
              >
                ▷
              </button>
              <button
                className="border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F]"
                disabled
              >
                ▷|
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center w-[45%] justify-end">
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F]  px-1 ">
                <i
                  className="fa fa-envelope text-[#FF4950]"
                  aria-hidden="true"
                ></i>{" "}
                2. 轉叫貨
              </button>
              <button className="flex items-center justify-center  gap-1 border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F] px-1 ">
                <i
                  className="fa fa-pencil text-[#FF4ED2]"
                  aria-hidden="true"
                ></i>{" "}
                0. 全不選
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F] px-1 ">
                <i
                  className="fa fa-check text-[#57C756]"
                  aria-hidden="true"
                ></i>{" "}
                1. 全選
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F] px-1 ">
                A. 查詢
              </button>
              <button className="flex items-center gap-1 justify-center border border-[#b5b5b2] w-full bg-bglightgry text-[#9F9F9F] px-1 ">
                E. 過濾
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-t px-2 py-2 text-sm bg-[#c7daef]">
            <div className="text-gray-600">說明:</div>
            <div className="flex space-x-4">
              <span>☎ 來電: 3872333 大溪區復興路190巷1弄6號</span>
              <span>一般訂戶 4824</span>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl overflow-hidden">
            <div className="flex justify-between items-center w-full">
              <div className="bg-[#eff3f7] px-2 py-1 flex items-center gap-4 border-b-0 w-full">
                <div className="font-semibold">流量表預送作業</div>

                <ul className="flex justify-between ml-auto">
                  <li>
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-regular fa-square mx-5"></i>
                    <i
                      className="fa-solid fa-xmark"
                      onClick={() => setShowModal(false)}
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#C0C0BD]">
                      <th className="text-textblue">B</th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        客戶編號
                      </th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        客戶實號
                      </th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        列印地址
                      </th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        最後交易
                      </th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        平均天數
                      </th>
                      <th className="text-textblue border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        旗
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-textblue hover:bg-textblue hover:text-white">
                      <td></td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        5572
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        雷娜人力
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        大溪區文化路123號之10
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        2024/06/03
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        0
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        N
                      </td>
                    </tr>
                    <tr className="text-textblue hover:bg-textblue hover:text-white">
                      <td></td>
                      <td className=" hover:bg-blue hover:text-white border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        5678
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        老爹佬豆漿
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        大溪區仁和路3號
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        2024/06/03
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        2
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        N
                      </td>
                    </tr>
                    <tr className="text-textblue hover:bg-textblue hover:text-white">
                      <td></td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        5057
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm text-blue-600">
                        仲美煤氣
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm text-blue-600">
                        中華區大漢街
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        2024/06/03
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        0
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        N
                      </td>
                    </tr>
                    <tr className="text-textblue hover:bg-textblue hover:text-white">
                      <td></td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        5059
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        黑熊家
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        大溪區和平路79巷19弄4號
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        2024/06/03
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        77
                      </td>
                      <td className=" border border-borderdark px-2 py-1 font-medium text-left text-sm">
                        N
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CylinderOperations;
