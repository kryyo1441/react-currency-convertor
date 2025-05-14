import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { currencyConverter } from "./api/postApi";

const App = () => {
    const [amount, setAmount] = useState(''); // Changed initial state to empty string
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const {data:convertedAmount, isLoading, error, refetch} = useQuery({
      queryKey:['currency'],
      queryFn:() => currencyConverter(fromCurrency, toCurrency, parseFloat(amount)), // Ensure amount is passed as a number
      enabled:false,
    });

    const handleCurrencyConverter = () => {
      const numAmount = parseFloat(amount);
      if(numAmount > 0){
         refetch();
      }
    };

  return(
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Convertor</h1>
        <hr />

        <div>
          <label>
            Amount:
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
            />
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

        <button disabled={isLoading || parseFloat(amount) <= 0} onClick={handleCurrencyConverter}>
          {isLoading? "Converting.." : "convert"}
        </button>
        <hr />
              {convertedAmount && (
                  <h2>
                    {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
                  </h2>
              )}

              {error && <p>An error occurred: {error.message}</p>}

      </div>

    </section>
  )
}

export default App;


// https://v6.exchangerate-api.com/v6/2cd36c093dd210ded425db8a/latest/USD