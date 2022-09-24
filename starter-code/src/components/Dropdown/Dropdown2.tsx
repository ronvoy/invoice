import React, { useState } from "react"

const status: Array<string> = [
  "net 15 days","net 1 year"]
export default function Dropdown2() {
  const getInitialState = () => {
    const value = "net 30 days"
    return value
  }

  const [value, setValue] = useState(getInitialState)

  const handleChange = (e:any) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <select className="bg-gray-100 " name="" value={value} onChange={handleChange}>
        {status.map((status) => {
          return (
            <>
        
            <option key={status} value={status}>
              {status}
            </option>
            </>
          )
        })}
      </select>
    </div>
  )
}
