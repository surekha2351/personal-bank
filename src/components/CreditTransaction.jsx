import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../img/table.png";
import credit2 from "../img/credit2.jpg"

const CreditTransaction = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className="text-3xl">Credit Transaction Page</h1>
        <img src={credit2} alt="table" className="lg:w-250 mt-5 mb-5" />
        <img src={Table} alt="table" className="lg:w-250 mt-5 mb-5" />
        <p className="text-left">
          A credit transaction is{" "}
          <span className="text-red-600">
            when a borrower receives money, goods, or services from a lender in
            exchange for future repayment.
          </span>
          <br />
          Credit transaction means any transaction by the terms of which the
          repayment of money loaned or loan commitment made, or payment for
          goods, services, or properties sold or leased, is to be made at a
          future date or dates.
          <br />
          <p className="text-center">
            <span className="text-blue-600 text-xl ">
              Credit is a relationship between a borrower and a lender.
            </span>
            <br />
          </p>
          <span className="text-red-600">
            Companies use credit scores to make decisions on whether to offer
            you a mortgage, credit card, auto loan, and other credit products,
            as well as for tenant screening and insurance
          </span>
          .<br />
        </p>

        <p className="text-left text-md">
          They are also used to determine the interest rate and credit limit you
          receive.
        </p>

        <br />
        <p className="left">
          <span className="text-green-600 text-xl">
            Here's a look at how good credit can benefit you.
          </span>
          <br /> Borrow money at a better interest rate.... <br /> Qualify for
          the best credit card deals. ...
          <br />
          Get favorable terms on a new cell phone. ...
          <br /> Improve your chances of renting a home. ... <br /> Receive
          better car and home insurance rates. ...
          <br />
          Skip utility deposits....
          <br /> Get a job.
        </p>
      </div>
    </center>
  );
};

export default CreditTransaction;
