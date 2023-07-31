import React from "react";
import credit from "../img/Credit.svg";
import debit from "../img/Debit.svg";
import F1 from "../img/Transaction.png";
import { Link } from "react-router-dom";

const Dashboard = ({ onCreditTransactionClick ,onDebitTransactionClick, onAllTransactionClick}) => {
  return (
    <center>
      <div className="flex mt-20 ">
        <div
          className="lg:w-350 h-full ml-10 cursor-pointer 
         mt-50 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center  drop-shadow-lg"
        >
          <h1 className="pb-5 text-xl">Credit</h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div className="flex">
              <div className="pr-5">
              <img
                src={credit}
                alt="I1"
                className="w-20 lg:w-60 lg:mt-30 lg:ml-5"
              />
                <Link to="/creditTransaction">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onCreditTransactionClick}
                  >
                    Credits
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>

        {/* Continue with the Debit section */}
        {/* ... */}
        <div className="flex  ">
        <div
          className="lg:w-350 h-full ml-10 cursor-pointer 
         mt-50 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center  drop-shadow-lg"
        >
          <h1 className="pb-5 text-xl">
            Debit
          </h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div className="flex">
              <div className="pr-5">
              <img
                src={debit}
                alt="I1"
                className="w-20 lg:w-60 lg:mt-30 lg:ml-5"
              />
                <Link to="/debitTransaction">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onDebitTransactionClick}
                  >
                    Debit
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>


      <div className="flex  ">
        <div
          className="lg:w-350 h-full ml-10 cursor-pointer 
         mt-50 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center  drop-shadow-lg"
        >
          <h1 className="pb-5 text-xl">
            All Transactions
          </h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div className="flex">
              <div className="pr-5">
              <img
                src={F1}
                alt="I1"
                className="w-30 lg:w-70 lg:mt-30 lg:ml-5"
              />
                <Link to="/allTransaction">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onAllTransactionClick}
                  >
                    All Trans+
                  </button>
                </Link>
              </div>
             
            </div>
          </div>
        </div>
      </div>



      </div>
    </center>
  );
};

export default Dashboard;
