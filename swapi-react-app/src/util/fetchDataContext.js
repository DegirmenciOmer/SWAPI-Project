import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export function DataContext({ children }) {
  const [value, setValue] = useState({})

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
