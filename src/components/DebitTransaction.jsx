import React from "react";
import { useNavigate } from "react-router-dom";
import table from "../img/debit-table.png";
import debit3 from "../img/debit3.jpg";
const DebitTransaction = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className="text-3xl">Debit Transaction Page</h1>
        <img src={debit3} alt="table" className="lg:w-250 mt-5 mb-5" />
        <img src={table} alt="table" className="lg:w-250 mt-5 mb-5" />
        <p className="text-left">
          A debit transaction is{" "}
          <span className="text-red-600">
            a point of sale purchase that is processed using a bank card linked
            to a checking account
          </span>
          . Unlike a credit transaction, a debit transaction usually requires
          that the customer have the money available in their bank account to
          cover the transaction.
        </p>
        <br />
        <div className="text-left">
          <p>
            A debit is{" "}
            <span className="text-red-600">
              an accounting entry that creates a decrease in liabilities or an
              increase in assets.
            </span>{" "}
            In double-entry bookkeeping, all debits are made on the left side of
            the ledger and must be offset with corresponding credits on the
            right side of the ledger.
          </p>
          <br />
          Debit transfer means{" "}
          <span className="text-red-600">
            a payment transaction initiated by payment order of the payer,
            according to the authorization of the payer, which orders the
            payer's bank to withdraw money from the account of the payer.
          </span>
          <p>
            A bank debit is a bookkeeping term for the realization of the
            reduction of deposits held by bank customers.{" "}
            <span className="text-red-600">
              A bank debit occurs when a bank customer uses the funds in their
              account, therefore reducing their account balance.
            </span>
            <br />A debit balance is{" "}
            <span className="text-red-600">
              a negative cash balance in a checking account with a bank.
            </span>{" "}
            Such an account is said to be overdrawn, and so is not actually
            allowed to have a negative balance - the bank simply refuses to
            honor any checks presented against the account that would cause it
            to have a debit balance.
          </p>
        </div>
        <p>
          <span className="text-green-600 text-2xl pt-5">Features of Debit Card</span><br/>
          Convenience, cash withdrawal from ATM, or payment through a card, both
          in-person or online.<br/> Allows spending within the capacity. <br/>You know
          your spending limit.<br/> Overdraft option, which helps you to spend even
          when your account has low cash. <br/>Rewards points add up. <br/>These are
          secure cards.
        </p>
      </div>
    </center>
  );
};

export default DebitTransaction;
