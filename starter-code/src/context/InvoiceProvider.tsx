import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const InvoiceContext = createContext({})
export const InvoiceProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>InvoiceProvider</div>
  )
  const value={
    InvoiceContext
  }
  return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
}

export default InvoiceContext