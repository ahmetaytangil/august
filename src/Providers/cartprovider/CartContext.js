import React, { useContext, useState } from "react"

const CartContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [items, setitems] = useState([])
    
    return (
        <CartContext.Provider value={[items, setitems]}>
            {children}
        </CartContext.Provider>
    )
}