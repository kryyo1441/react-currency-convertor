import axios from "axios";

const api = axios.create ({
    baseURL:"https://v6.exchangerate-api.com/v6/2cd36c093dd210ded425db8a";
});

export const currencyConverter = async(fromCurrency, toCurrency,amount) => {
    const res = await api.get(`/pair/${fromCurrency/$toCurrency}/${amount}`);
    console.log(res);
}