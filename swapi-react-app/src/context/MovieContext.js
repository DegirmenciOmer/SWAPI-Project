import React, { createContext, useContext, useState } from 'react'

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  {
    const [currentMovie, setCurrentMovie] = useState(null)

    return (
      <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
        {children}
      </MovieContext.Provider>
    )
  }
}

export const useMovies = () => {
  return useContext(MovieContext)
}
