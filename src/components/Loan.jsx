import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../img/table.png";
import loan from "../img/loan.jpg";

const Loan = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className=" text-xl">Loan Performance Dashboard</h1>
        <img src={loan} alt="table" className="lg:w-600 mt-5 mb-5"/>
        <img src={Table} alt="table" className="lg:w-250 mt-5 mb-5"/>
        <p className="text-left text-lg text-textColor ">
        <span className= "text-red-600">Loan Performance Dashboard</span> : For banks heavily involved in lending activities, a loan performance dashboard is crucial. <br/>
        It provides an overview of loan types, delinquency rates, repayment trends, and the overall quality of the loan performance. 
          </p><br/>
          <p className="text-left text-lg text-textColor ">Loans dashboard <span className="text-red-600">provides a summary of the Loan accounts held by the customer. </span>
            Loans dashboard displays summary of total borrowings done by the customer in all accounts along with the current outstanding amount. 
            It allows customers to understand their current position with respect to loan accounts.</p>
         
      </div>
    </center>
  );
};

export default Loan;
