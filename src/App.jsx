import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    useQuery()


    const handleCurrencyConverter =( ) => {}

  return(
    

    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Convertor</h1>
        <hr />

        <div>
          <label>
            Amount:
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </label>
        </div>

        <section className="currency-selector">

          <label >
            From:
            <select  
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)}>
              {["INR", "EUR", "USD", "GBP", "AUD" ].map((currency) => {
                  return(
                    <option key={currency} value={currency}> {currency} </option>
                  )
              })}
              
            </select>
          </label>

          <label >
            From:
            <select 
            value={toCurrency} 
            onChange={(e) => setToCurrency(e.target.value)}>
              {["USD", "EUR", "INR", "GBP", "AUD" ].map((currency) => {
                  return(
                    <option key={currency} value={currency}> {currency} </option>
                  )
              })}
              
            </select>
          </label>
        </section>

        <button disabled={isLoading || amount <= 0} onClick={handleCurrencyConverter}>
          {isloading? "Converting.." : "convert"}
        </button>
        <hr />
      </div>

    </section>
  )
}

export default App;


// https://v6.exchangerate-api.com/v6/2cd36c093dd210ded425db8a/latest/USD