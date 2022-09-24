import React, { useState } from "react"

const status: Array<string> = [
  "Pending","Paid","Draft"]
export default function Dropdown() {
  const getInitialState = () => {
    const value = "Filter by status"
    return value
  }

  const [value, setValue] = useState(getInitialState)

  const handleChange = (e:any) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <select className="bg-gray-100 " value={value} onChange={handleChange}>
        {status.map((status) => {
          return (
            
            <option key={status} value={status}>
              {status}
            </option>
          )
        })}
      </select>
    </div>
  )
}
