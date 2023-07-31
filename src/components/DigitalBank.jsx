import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../img/table.png";
import digitalbank from "../img/digitalbank.jpg";

const DigitalBank = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className=" text-xl">Digital Banking</h1>
        <img src={digitalbank} alt="table" className="lg:w-600 mt-5 mb-5"/>
        <img src={Table} alt="table" className="lg:w-250 mt-5 mb-5"/>
        <p className="text-left text-lg text-textColor ">
        <span className= "text-red-600">Digital Banking Dashboard</span> : With the rise of digital banking, this dashboard provides insights into digital channel usage, mobile app performance, online transaction trends, and user engagement
          </p><br/>
          <p className="text-left text-lg text-textColor ">
          A bank dashboard is  <span className= "text-red-600">an analytical Business Intelligence tool</span>.
           It allows a bank to monitor its financial performance, customer trends, or even to predict market trends through predictive analysis.
           The dashboard can provide information on the performance of a new product and the effectiveness of the pricing policy.
          </p>
         <p className="text-left  text-blue-800  text-xl">UPI (Unified Payment Interface) Internet Banking. Mobile Banking. Banking Cards. Mobile Wallets.</p>
      </div>
    </center>
  );
};

export default DigitalBank;
