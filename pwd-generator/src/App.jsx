import { useState } from 'react'
import './App.css'

function App() {
  const chars =  [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]
 const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?', '|', '\\', '`', '~'];

  const [len, setLen] = useState(8)
  const [pwd,setPwd] = useState("")
  const [isChar,setIsChar] = useState(false)
  const [isNum,setIsNum] = useState(false)
  const generatePass = ()=>{
  let allChars = [...chars];
  if (isNum) allChars = allChars.concat(nums);
  if (isChar) allChars = allChars.concat(specialChars);
  let pass = ""
  for(let i=0;i<len;i++){
    pass += allChars[Math.floor(Math.random() * allChars.length)]

  }
  setPwd(pass)
}
  return (
    <>
  <h1 className = "text-white-800">Password Generator</h1>
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
    <div className="flex">
      <input
        type="text"
        readOnly
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-black"
        value = {pwd}
        placeholder="Click to Generate"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
        onClick={generatePass}
      >
        Generate
      </button>
    </div>

    {/* Slider */}
    <div className="flex items-center justify-between">
      <label htmlFor="length" className="text-gray-700 font-medium">
        Length: {len}
      </label>
      <input
        type="range"
        id="length"
        min="4"
        max="32"
        onChange={(e) => setLen(Number(e.target.value))}
        className="w-2/3 accent-blue-600"
      />
    </div>

    {/* Checkboxes */}
    <div className="flex justify-between">
      <label className="inline-flex items-center space-x-2"> 
        <input
          type="checkbox"
          className="accent-blue-600"
          checked = {isChar}
          onChange={(e) => setIsChar(e.target.checked)}
        />
        <span className="text-gray-700">Characters</span>
      </label>
      <label className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          className="accent-blue-600"
          checked = {isNum}
          onChange={(e) => setIsNum(e.target.checked)}
        />
        <span className="text-gray-700">Numbers</span>
      </label>
    </div>
  </div>

    </>
  )
}

export default App
