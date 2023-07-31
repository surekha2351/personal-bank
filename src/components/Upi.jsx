import React from "react";
import { useNavigate } from "react-router-dom";
import upi from "../img/upi.jpeg"
import upi1 from "../img/upi1.png"

const Upi = ({ onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <center>
      <div>
        <h1 className="text-5xl">UPI Page</h1>
        <img src={upi} alt="table" className="lg:w-250 mt-5 mb-5" />
        <div className="text-left text-xl">
        <p><span className="text-red-600">UPI (Unified Payments Interface) </span>is a real-time payment system developed by the <span className="text-blue-600">National Payments Corporation of India (NPCI)</span>.<br/>
         It allows users<span className="text-red-600"> to make instant money transfers</span> between banks through their mobile devices.</p>
        <br/>
       <center> <img src={upi1} alt="table" className="lg:w-250 mt-5 mb-5 " /></center>
        <p className=" text-green-600 text-3xl pb-3">Key Features of UPI:</p>
        <p>

        👉 <span className="text-red-600">Real-Time Transactions :</span> Instant money transfers 24/7.<br/>

        👉 <span className="text-red-600">Mobile-Based Payments :</span> Initiate transactions through mobile banking apps or UPI-enabled payment apps.<br/>

        👉 <span className="text-red-600">Unique UPI ID (VPA) :</span> Each user gets a Virtual Payment Address for secure transactions.<br/>

        👉 <span className="text-red-600">QR Code Payments :</span> Pay by scanning QR codes at merchant outlets.<br/>

        👉 <span className="text-red-600">Multiple Bank Accounts :</span> Link and switch between multiple bank accounts.<br/>

        👉 <span className="text-red-600">Bill Payments and Online Shopping :</span> Use UPI for various payments and shopping.<br/>

        👉 <span className="text-red-600">Request Money : </span>Easily request money from others.<br/>

        👉 <span className="text-red-600">Secure and Authenticated :</span> Multi-factor authentication for secure transactions.<br/>

        👉 <span className="text-red-600">Interoperability :</span> Works across multiple banks and payment providers.<br/></p>
</div>
      </div>
    </center>
  );
};

export default Upi;
