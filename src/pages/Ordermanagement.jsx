import React from "react";
import IphoneLogo from "../assets/img/header/head-icon.png";

function Ordermanagement() {
  return (
    <div className="main_sec">
      <h2 className="flex gap-2 items-center text-lg mb-16">
        <img src={IphoneLogo} alt="" className="size-[24px]" />
        叫貨管理
      </h2>
      <div className="">
        <div className="max-w-6xl bg-[#F1F6F2] border border-borderlgt rounded rounded-[12px] overflow-hidden shadow-md">
          {/* Header */}
          <div className="bg-[#eff3f7] px-4 py-1 flex items-center gap-4 border-b">
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

          <div className="flex space-x-2 bg-blue-100 p-2 border-b mb-2">
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              客戶基本資料
            </div>
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              公司相關
            </div>
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              備註事項
            </div>
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              流量表設定
            </div>
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              客戶鋼瓶條碼
            </div>
            <div className="px-3 py-1 bg-white border rounded cursor-pointer hover:bg-gray-100">
              客戶鋼瓶條碼(舊)
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex gap-8 border-b px-4 py-1 bg-[#efefef]">
            <button className="mr-4">📄 流量表預送</button>
            <label className="flex items-center space-x-1">
              <span className="text-[#05007b] font-semibold">月結客戶</span>
              <input type="checkbox" className="ml-2" />
            </label>
            <label className="flex items-center space-x-1">
              <span className="text-[#05007b] font-semibold">月結客戶</span>
              <input type="checkbox" className="ml-2" />
            </label>
            <label className="flex items-center space-x-1">
              <span className="text-[#05007b] font-semibold">月結客戶</span>
              <input type="checkbox" className="ml-2" />
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="text"
                defaultValue="3"
                className="border rounded px-2 py-1 text-sm w-12 ml-1"
              />
            </label>
          </div>

          {/* Customer Info */}
          <div className="m-2 bg-[#efefef]">
            <div className="grid grid-cols-2 gap-4 p-4 border border-[#b4b4b4] ">
              <div className="flex items-center gap-4 ">
                <label className="">客戶實號</label>
                <input
                  className="w-full border rounded border-[#b5b5b2] px-2 py-1 bg-[#e9feff]"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4 col-span-1">
                <label className="">客戶電話</label>
                <input
                  className="border rounded border-[#b5b5b2] px-2 py-1 bg-[#e9feff]"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="">地址</label>
                <input
                  className="w-full border border-[#b5b5b2] rounded px-2 py-1 bg-[#e9feff]"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4 col-span-1">
                <label className="">下次叫貨</label>
                <input
                  className="border border-[#b5b5b2] rounded px-2 py-1 bg-[#e9feff]"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="m-2 bg-[#efefef] border border-t-[#b5b5b2] border-borderdark">
            <div className="flex gap-8 border-b px-4 py-1 bg-[#efefef]">
              <button className="mr-4">📄 流量表預送</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-bggreen">
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
                    <td className="border border-gray-300 px-2 py-1">&nbsp;</td>
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
}

export default Ordermanagement;
