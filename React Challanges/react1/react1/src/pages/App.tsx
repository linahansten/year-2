import { useState } from "react"

export default function App() {

  const [celsius,setCelsius] = useState("")
  const [fahrenheit,setFahrenheit] = useState("")

  const onCelsiusChange = (value: string) => {
    setCelsius(value)
    const celsiusNumber = Number(value)
//toFixed changes Number to string and then you can choose how many decimals you want
    setFahrenheit(((celsiusNumber * 9/5) + 32).toFixed(0))
  }

  const onFahrenheitChange = (value: string) => {
    setFahrenheit(value)

    const fahrenheitNumber = Number(value)
    setCelsius(((fahrenheitNumber - 32) *5/9).toFixed(0))
  }

  return (
    <div className="flex flex-col gap-6 mx-auto max-w-md p-8">
      <h1 className="text-3xl font-light uppercase">Temperature converter</h1>
      <div className="flex gap-4">
        <label className="flex flex-col gap-1">
          <span className="uppercase text-md font-medium tracking-wide">Celsius</span>
          <input type="text" className="px-3 py-2 rounded border bg-white outline-0 ring-emerald-100 ring-0 focus:border-emerald-500 focus:ring-2" 

          value = {celsius}
          onChange={e => onCelsiusChange(e.target.value)}

          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="uppercase text-md font-medium tracking-wide">Fahrenheit</span>
          <input type="text" className="px-3 py-2 rounded border bg-white outline-0 ring-emerald-100 ring-0 focus:border-emerald-500 focus:ring-2" 
          
          value = {fahrenheit}
          onChange={e => onFahrenheitChange(e.target.value)}

          />
        </label>
      </div>
    </div>
  );
}



