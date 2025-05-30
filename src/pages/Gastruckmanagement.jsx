import React from "react";

function Gastruckmanagement() {
  return (
    <div className="main_sec">
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

          <div className="grid grid-cols-3 px-2">
            <div className="overflow-x-auto my-[2px] border border-borderlgt">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-bgpurple">
                    <th className="border border-borderdark px-1 py-1 text-sm font-medium text-left"></th>
                    <th className="border border-borderdark px-2 py-1 text-sm font-medium text-left">
                      自訂號碼
                    </th>
                    <th className="border border-borderdark px-2 py-1 text-sm font-medium text-left">
                      安裝地點
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </td>
                    <td className="border-tdborder border px-0 py-0 text-sm  bg-white">
                      <input
                        className="px-2 py-1 bg-white w-[60px]"
                        type="text"
                      />
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm text-sm ">
                      日鑫（康莊路3段651號）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#D7D7FE] text-sm pr-4 pl-2 py-1 border border-borderlgt m-[2px]">
              {/* Row 1 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">自訂錶號</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="5"
                  readOnly
                />
                <label className="!min-w-0">壓力別</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="中壓"
                  readOnly
                />
              </div>

              {/* Row 2 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">流量表型</label>
                <input className="border px-1 flex-1" type="text" />
              </div>

              {/* Row 3 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">安裝地點</label>
                <input
                  className="border px-1 flex-1"
                  type="text"
                  value="日鑫(康莊路3段651號)"
                />
              </div>

              {/* Row 4 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-[56px]">每 度 KG</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="4.91"
                />
                <label className="!min-w-0">壓力 係 數 </label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="1.1"
                />
                <label className="!min-w-0">流量表</label>
                <input type="checkbox" checked readOnly />
              </div>

              {/* Row 5 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">總送貨KG</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="0"
                />
                <label className="!min-w-0">已使用KG</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="0"
                />
                <label className="!min-w-0">通 知</label>
                <input type="checkbox" readOnly />
              </div>

              {/* Row 6 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">平均成本</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="0"
                />
                <label className="!min-w-0">流量錶號</label>
                <input className="border px-1 w-20" type="text" />
              </div>

              {/* Row 7 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">附註事項</label>
                <input className="border px-1 flex-1" type="text" />
              </div>

              {/* Row 8 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">平均度數</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="9.51"
                />
                <label className="!min-w-0">流量表商</label>
                <input className="border px-1 w-20" type="text" />
              </div>

              {/* Row 9 */}
              <div className="flex items-center mb-1">
                <label className="!min-w-0">送貨客戶</label>
                <input
                  className="border px-1 w-20 mr-2"
                  type="text"
                  value="4203"
                />
                <label className="!min-w-0">通 訊 ID</label>
                <input className="border px-1 w-20" type="text" />
              </div>
            </div>

            <div className="overflow-x-auto my-[2px] border border-borderlgt">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-bgpurple">
                    <th className="border border-borderdark px-1 py-1 text-sm font-medium text-left"></th>

                    <th className="border border-borderdark px-1 py-1 text-sm font-medium text-left">
                      開始日期
                    </th>
                    <th className="border border-borderdark px-1 py-1 text-sm font-medium text-left">
                      截止日期
                    </th>
                    <th className="border border-borderdark px-1 py-1 text-sm font-medium text-left">
                      單價
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2024/06/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue  text-sm">
                      2024/12/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      144.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2022/11/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue text-sm">
                      2024/05/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      139.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2022/01/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue text-sm">
                      2022/10/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      135.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2020/12/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue  text-sm">
                      2021/12/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      135.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2020/11/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue text-sm">
                      2020/11/30
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      130.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2020/04/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue  text-sm">
                      2020/09/30
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      117.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2020/03/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue text-sm">
                      2020/03/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      127.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2019/09/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue  text-sm">
                      2020/02/29
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      131.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-borderdark border px-1 text-sm  py-1 bg-bgpurple"></td>
                    <td className="border-tdborder border px-1 py-0 text-red-500 text-sm">
                      2019/07/01
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-textblue text-sm">
                      2019/08/31
                    </td>
                    <td className="border-tdborder border px-1 py-0 text-sm">
                      134.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Side */}
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
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      2024/05/21
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      450
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      450
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      其他品配管零件PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      3G9999PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      EX
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm bg-bgyellow">
                      C02
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2024/05/21
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      其他品配管零件PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      3G9999PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      EX
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C02
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2023/12/31
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      3000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      3000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      其他品配管零件PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      3G9999PIPINGPARTS
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      EX
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C02
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2023/12/31
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1000
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      煙頭5EA電子快速爐
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1D0065EA
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      Set
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C18
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2022/12/31
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2100
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2100
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      煙頭5EA電子快速爐
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1D0065EA
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      Set
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C05
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2022/12/31
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1800
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1800
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      瓦斯噴火槍1.5吋FIREGUN
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2G005FIREGUN
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      ROD
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C08
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-borderdark border px-2 py-1 bg-bggreen">
                      {" "}
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      2021/12/31
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C001
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1800
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1800
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      煙頭5EA電子快速爐
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      1D0065EA
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      Set
                    </td>
                    <td className="border-tdborder border px-2 py-1 hover:bg-white text-sm">
                      C05
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
    </div>
  );
}

export default Gastruckmanagement;
