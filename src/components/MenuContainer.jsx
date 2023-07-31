import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import upi2 from "../img/upi2.jpeg"
const MenuContainer = ({ onUpiClick }) => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Debit & Credit Overview
        </p>
        <p className="pt-10 text-md">
          Debits and credits in double-entry bookkeeping are{" "}
          <span className="text-red-600">
            entries made in account ledgers to record changes in value resulting
            from business transactions.
          </span>{" "}
          A debit entry in an account represents a transfer of value to that
          account, and a credit entry represents a transfer from the account.
        </p>
        <p className="text-lg pt-10 pb-10">
          <span className="text-red-500 text-2xl pl-20">
            Golden Rules of accountancy
          </span>
          <br />
          <p className="pt-5">
            <span className="text-xl">First</span> : Debit what comes in, Credit
            what goes out.
            <br />
            <span className="text-xl">Second</span> : Debit all expenses and
            losses, Credit all incomes and gains.
            <br />
            <span className="text-xl">Third</span> : Debit the receiver, Credit
            the giver.
          </p>
        </p>
      </div>
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          UPI (<span className="text-orange-600 text-xl">Unified Payments Interface</span>)
        </p>
        <center>
      <div className="flex mt-10 ml-60">
        <div
          className=" h-full ml-10 cursor-pointer lg:min-w-620
         mt-50 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center  drop-shadow-lg"
        >
          <h1 className="pb-5 text-2xl text-orange-600">UPI</h1>

          <div className=" p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col lg:w-508
          items-center justify-center  drop-shadow-lg">
            <div className="flex">
              <div className="pr-5">
                <img
                  src={upi2}
                  alt="I1"
                  className="w-30 lg:w-70 lg:mt-30 lg:ml-5"
                />
                <Link to="/upi">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onUpiClick}
                  >
                   Explore+
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </center>
    </section>
  );
};

export default MenuContainer;
