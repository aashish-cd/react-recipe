import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 const [showDetail, setShowDetail] = useState(false)

 const changeDetailStatus = () => {
  setShowDetail(!showDetail)
 }

 return <AppContext.Provider value={
  { showDetail, setShowDetail, changeDetailStatus, }
 }>{children}</AppContext.Provider>
}

export const useGlobal = () => {
 return useContext(AppContext)
}
export { AppProvider }