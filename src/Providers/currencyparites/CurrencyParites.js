import React, { useContext, useState } from "react"
import useFetch from "../../api/useFetch";

const CurrencyContext = React.createContext()

export function useCurrency() {
    return useContext(CurrencyContext)
}

export function CurrencyProvider({ children }) {
    const { data: currencyParitesData, isPending } = useFetch("/currency-parites");
    const [settedCurrency, setSettedCurrency] = useState("Dollar");
    
    return (
        <CurrencyContext.Provider value={{ settedCurrency, setSettedCurrency, currencyParitesData, isPending }}>
            {children}
        </CurrencyContext.Provider>
    )
}