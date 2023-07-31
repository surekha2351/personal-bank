import React from "react";
import Loan from "../img/Loan.png";
import digital from "../img/digital.png"
import finance0 from "../img/fianace0.jpg";

import { Link } from "react-router-dom";

const Board = ({ onFinanceClick ,onLoanClick, onDigitalBankClick}) => {
  return (
    <center>
      <div className="flex mt-20 ">
        <div
          className="lg:w-350 h-full ml-10 cursor-pointer 
         mt-50 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl items-center justify-center  drop-shadow-lg"
        >
          <h1 className="pb-5 text-orange-600 text-lg">Finance Performance Dashboard</h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div>
            <img
                src={finance0}
                alt="I1"
                className="w-20 lg:w-60 lg:mt-30 lg:ml-5 h-60"
              />
              <div className="pr-5">
                
                <Link to="/finance">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onFinanceClick}
                  >
                    Finance
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
          <h1 className="pb-5 text-orange-600 text-lg">
            Loan Performance DashBoard
          </h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div>
            <img
                src={Loan}
                alt="I1"
                className="w-20 lg:w-60 lg:mt-30 lg:ml-2"
              />
              <div className="pr-5">
                
                <Link to="/loan">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onLoanClick}
                  >
                    loan
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
          <h1 className="pb-5 text-orange-600 text-lg">
            Digital Banking
          </h1>

          <div className="lg:w-100  p-4 bg-card backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
            <div>
            <img
                src={digital}
                alt="I1"
                className="w-20 lg:w-60 lg:mt-30 lg:ml-5"
              />
              <div className="pr-5">
                
                <Link to="/digitalBank">
                  <button
                    className="bg-cardOverlay  text-black backdrop-blur-md rounded-3xl sm:w-100  p-4  drop-shadow-lg cursor-pointer"
                    onClick={onDigitalBankClick}
                  >
                    Bank
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

export default Board;
