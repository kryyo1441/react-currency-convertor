import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/2cd36c093dd210ded425db8a",
});

export const currencyConverter = async(fromCurrency, toCurrency, amount) => {
    try {
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount)) {
            throw new Error('Invalid amount');
        }
        const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${numAmount}`);
        console.log('API Response:', res.data);
        return res.data.conversion_result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}