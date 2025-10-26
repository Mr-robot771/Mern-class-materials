import { BsEmojiExpressionless } from "react-icons/bs";
import { useApp } from "../context/AppContext";
import { useEffect, useState } from "react";
import { id } from "zod/locales";
import { useSearchParams } from "react-router-dom";
import Income from "../component/Income";
import Expenses from "../component/Expenses";
import Loan from "../component/Loan";

function Experience() {
  const [searchparams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState(searchparams.get("tab") || "loan");

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);

  const { setTitle } = useApp();
  useEffect(() => {
    setTitle(activeTab);
  }, [activeTab]);

  const tabItems = [
    { id: "loan", label: "Loan" },
    { id: "income", label: "Income" },
    { id: "expenses", label: "Expenses" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "loan":
        return <Loan />;

      case "income":
        return <Income />;

      case "expenses":
        return <Expenses />;

      default:
        return null;
    }
  };
  return (
    <>
      <div className=" border-b-2 border-gray-300 mb-2">
        <nav className="flex text-white gap-5 shadow-xl px-4 -mb-px ">
          {tabItems.map((item) => (
            <button
              onClick={() => {
                setActiveTab(item.id);
              }}
              key={item.id}
              className={` ${
                activeTab === item.id
                  ? "border-red-600 text-red-600"
                  : "border-transparent hover:text-slate-700 hover:border-slate-300 cursor-pointer "
              } px-2 py-1 border-b-2 font-medium transition-colors`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      {renderContent()}
    </>
  );
}

export default Experience;
