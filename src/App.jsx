const App = () => {
  return(
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Convertor</h1>
        <hr />
        <div>
          <label>
            Amount:
            <input type="text" />
          </label>
        </div>
        <section className="currency-selector">
          <label >
            From:
            <select >
              {["INR", "EUR", "USD", "GBP", "AUD" ].map((currency) => {
                  return(
                    <option key={currency} value={currency}> {currency} </option>
                  )
              })}
              
            </select>
          </label>

          <label >
            From:
            <select >
              {["USD", "EUR", "INR", "GBP", "AUD" ].map((currency) => {
                  return(
                    <option key={currency} value={currency}> {currency} </option>
                  )
              })}
              
            </select>
          </label>
        </section>

        <button disabled={isLoading || amount <= 0}>{isloading? "Converting.." : "convert"}</button>
        <hr />
      </div>

    </section>
  )
}

export default App;


// https://v6.exchangerate-api.com/v6/2cd36c093dd210ded425db8a/latest/USD