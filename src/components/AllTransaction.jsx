import React from "react";
import all from "../img/all-transactions.png"
import All from "../img/All.jpg"
const AllTransaction = () => {
  return (
    <div>
      <center>
      <h1 className="text-2xl">All Transactions</h1>  
      <img src={All} alt="table" className="lg:w-250 mt-5 mb-5" />
        <img src={all} alt="table" className="lg:w-250 mt-5 mb-5" />
        <p className="text-left">A bank transaction is a  <span className="text-red-600">record of money that has moved in and 
          out of your bank account.</span>When you have costs associated with your business 
          - for example, rent for office space - the payments for these will come out
           of your bank account as transactions.
           <p>A cash transaction refers to <span className="text-red-600">a transaction which involves an immediate outflow of cash towards the purchase of any goods, services, or assets.</span> Cash transaction can be consumer-oriented or business-oriented.<br/>
           <span className="text-red-600"> Each bank transaction is composed of a debit,</span> which includes removing money from an account, and a credit, which adds money to the receiving account.
           <br/>
           In business, there are four main types of financial transactions, and they include <span className="text-red-600">sales, purchases, receipts, and payments.</span>
           </p></p>
      </center>
    </div>
  );
};

export default AllTransaction;
