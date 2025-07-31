import React, { useState } from "react";

function InputBox({ label, option = [] }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setShowDropdown(false);
  };
  return (
    <>
      <div className="w-full max-w-xs min-w-[200px] mt-4">
        <label className="block mb-1 text-sm text-slate-800">{label}</label>
        <div className="relative mt-2">
          <input
            type="text"
            className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="1,000"
          />
          <div className="absolute top-2 right-0 flex items-center pr-3">
            <div className="h-6 border-l border-slate-200 mr-2"></div>
            <button
              className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="dropdownSpan">{selectedCurrency}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded shadow-lg z-10 ${
                showDropdown ? "" : "hidden"
              }`}
            >
              <ul className="dropdownOptions">
                {option.map((currencyCode) => (
                  <li
                    key={currencyCode}
                    className="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                    onClick={() => handleCurrencyChange(currencyCode)}
                  >
                    {currencyCode.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InputBox;
