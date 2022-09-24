// dave gray
import { useContext } from "react"
import InvoiceContext from "../context/InvoiceProvider"

export const useAuth = () => {
  return useContext(InvoiceContext)
}
