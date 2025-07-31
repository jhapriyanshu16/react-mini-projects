import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
const [fromCurr,setFromCurr] = useState("inr")
const currencyInfo = useCurrencyInfo(fromCurr);

const options = Object.keys(currencyInfo)


  return (
    <>
<div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px] text-center text-4xl text-stone-950 font-bold">
            <h2>Currency Converter</h2>
        </div>

        <div className="w-full max-w-xl mx-auto mt-4">
            <p className="text-slate-500 mb-4">
                Enter the amount you wish to convert and select the desired currency.
            </p>
            <div className="flex flex-col items-center justify-between">
                
                {/* insert InputBox here */}
                <InputBox label = "From" option = {options}></InputBox>

                <div className="flex items-center justify-center mt-6">
                    <button className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-5 h-5 text-slate-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </button>
                </div>

                {/* Insert InputBox here */}
                <InputBox label = "To"></InputBox>

            </div>

            <div className="mt-8 text-slate-500 text-sm flex justify-center">
                <button className="bg-blue-700 rounded-2xl text-white py-3 px-8 font-bold hover:bg-blue-500 mt-5">Convert USD to INR</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default App
