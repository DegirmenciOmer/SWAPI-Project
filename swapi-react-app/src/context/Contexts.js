import React, { createContext, useContext, useState } from 'react'


const SwapiContext = createContext()

export const SwapiProvider = ({ children }) => {
  {
    const [currentMovie, setCurrentMovie] = useState(null)
    const [currentShip, setCurrentShip] = useState(null)

    return (
      <SwapiContext.Provider
        value={{ currentShip, setCurrentShip, currentMovie, setCurrentMovie }}
      >
        {children}
      </SwapiContext.Provider>
    )
  }
}

export const useSwapi = () => {
  return useContext(SwapiContext)
}
