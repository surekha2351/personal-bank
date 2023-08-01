import React from "react";
import tran from "../img/tran.svg";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";





const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
       

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
        Your Personal Finance 
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
          Companion
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          
        In India, modern banking originated in the middle of the 18th century. 
        The first banking institution was the Bank of Hindustan established in 1770 and it was the first bank at Calcutta under European management.
         It was liquidated in 1830-32. In 1786 General Bank of India was set up but it failed in 1791.<br/>
         </p>
         <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
         A bank is a financial institution licensed to receive deposits and make loans. 
         There are several types of banks including retail, commercial, and investment banks.<br/>
         </p>
         <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
         As the primary supplier of credit, it provides money for people to buy cars and homes and for businesses to buy equipment, expand their operations, and meet their payrolls.
        </p>


       
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute  flex items-center justify-center lg:px-32 py-4 top-0 left-0 gap-4 flex-wrap">
            {heroData && 
             heroData.map(n=>(
                <div key={n.id} className="lg:w-150   p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
    
                    <img src={n.imageSrc} alt="I1" className="w-20 -mt-10 lg:w-40 lg:-mt-20"/>
                    <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                    <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray py-1 lg:py-3">{n.decp}</p>
                    
                </div>
            ))
            }

    </div>
      </div>
      
        
    </section>
  );
};

export default HomeContainer;