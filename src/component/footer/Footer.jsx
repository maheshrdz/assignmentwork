import React from "react";

const Footer = () => {
  return (
    <div className="foot_sec bg-[#efefef]  border-2 border-borderlight">
      <table className="border-borderdark border">
        <tr>
          <td className="border-borderdark border text-blue">公司: WL 萬隆液化石油氣股份有限公司</td>  
          <td className="border-borderdark border text-blue">2024/06/04 10:01</td>
          <td className="border-borderdark border text-textblue"> 3872333</td>
          <td className="border-borderdark border text-green">大溪區復興路190巷1弄6號</td>
          <td className="border-borderdark border text-purple">一般訂戶</td>
          <td className="border-borderdark border text-purple bg-[#ECBFED]">4824</td>
        </tr>
        <tr>
          <td className="border-borderdark border text-blue">使用者: Admin</td>
          <td className="border-borderdark border text-blue">2024/06/04 10:01</td>
          <td className="border-borderdark border text-textblue">4698668</td>
          <td></td>
          <td></td>
          <td className="border-borderdark border text-purple">0</td>
        </tr>
        <tr>
          <td className="border-borderdark border text-textblue">部門: A. 分裝部門</td>
          <td className="border-borderdark border text-blue">2024/06/04 10:07</td>
          <td className="border-borderdark border text-textblue">0976025575</td>
          <td className="border-borderdark border text-green"> 檸檬攤</td>
          <td className="border-borderdark border text-purple">一般訂戶</td>
          <td className="border-borderdark border text-purple bg-[#ECBFED]">9535</td>
        </tr>
        <tr>
          <td className="border-borderdark border text-[#4d20a1]"> 重新登入</td>
          <td className="border-borderdark border text-purple"> 離開系統</td>
          <td colspan="4" className="text-textblue">
            P: 192.168.1.1 裝置名稱: ASUSI5.Gas 公司名稱: WL
            萬隆液化石油氣股份有限公司
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Footer;
