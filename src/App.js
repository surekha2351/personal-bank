import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, MenuContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Dashboard from "./components/Dashboard";
import CreditTransaction from "./components/CreditTransaction";
import DebitTransaction from "./components/DebitTransaction";
import AllTransaction from "./components/AllTransaction";
import Board from "./components/Board";
import Finance from "./components/Finance";
import Loan from "./components/Loan";
import DigitalBank from "./components/DigitalBank";
import Upi from "./components/Upi";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [setShowDebitTransaction, setShowCreditTransaction, setShowAllTransaction,setShowFinance,setShowLoan, setShowDigitalBank,setShowUpi] = useState(false);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />

            {/* Render the Dashboard component */}
            <Route path="/dashboard" element={<Dashboard onCreditTransactionClick={() => setShowCreditTransaction(true)} />} />
            <Route path="/dashboard" element={<Dashboard onDebitTransactionClick={() => setShowDebitTransaction(true)} />} />
            <Route path="/dashboard" element={<Dashboard onAllTransactionClick={() => setShowAllTransaction(true)} />} />
            <Route path="/board" element={<Board onFinanceClick={() => setShowFinance(true)} />} />
            <Route path="/board" element={<Board onLoanClick={() => setShowLoan(true)} />} />
            <Route path="/board" element={<Board onDigitalBankClick={() => setShowDigitalBank(true)} />} />
            <Route path="/menuContainer" element={<MenuContainer onUpiClick={() => setShowUpi(true)} />} />
            {/* Add a new Route for the CreditTransaction component */}
            <Route path="/creditTransaction" element={<CreditTransaction onBackButtonClick={() => setShowCreditTransaction(false)} />} />
            <Route path="/debitTransaction" element={<DebitTransaction onBackButtonClick={() => setShowDebitTransaction(false)} />} />
            <Route path="/allTransaction" element={<AllTransaction onBackButtonClick={() => setShowAllTransaction(false)} />} />
            <Route path="/finance" element={<Finance onBackButtonClick={() => setShowFinance(false)} />} />
            <Route path="/loan" element={<Loan onBackButtonClick={() => setShowLoan(false)} />} />
            <Route path="/digitalBank" element={<DigitalBank onBackButtonClick={() => setShowDigitalBank(false)} />} />
            <Route path="/upi" element={<Upi onBackButtonClick={() => setShowUpi(false)} />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;