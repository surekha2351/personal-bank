import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../img/table.png";
import finance from "../img/finance.jpg"

const Finance = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className=" text-xl">Finance Performance Dashboard</h1>
        <img src={finance} alt="table" className="lg:w-600 mt-5 mb-5"/>
        <img src={Table} alt="table" className="lg:w-250 mt-5 mb-5"/>
        <p className="text-left text-lg"><span className= "text-red-600">Financial Performance Dashboard</span> : This type of dashboard provides an overview of the bank's financial health, including key metrics such as revenue, expenses, profitability, and liquidity ratios. 
          It helps executives and managers make informed decisions related to the bank's overall financial strategy.</p>
          <br/>
          <p className="text-left text-lg"><span className= "text-red-600">It is broken down into four visualizations of your return on assets (ROA),
           working capital ratio (WCR), return on equity (ROE) and debt-equity ratio (DER)</span>. 
            These four key performance indicators give an immediate understanding of trends in how your company's assets are being managed.</p>
       

      </div>
    </center>
  );
};

export default Finance;
