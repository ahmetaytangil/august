import React, { useContext, useState } from "react"

const VisitedContext = React.createContext()

export function useVisited() {
    return useContext(VisitedContext)
}

export function VisitedProvider({ children }) {
    const {visited, setVisited} = useState([])
    
    return (
        <VisitedContext.Provider value={{visited, setVisited}}>
            {children}
        </VisitedContext.Provider>
    )
}