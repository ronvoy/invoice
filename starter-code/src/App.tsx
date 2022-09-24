import React from "react"
import NavRoute from "./NavRoute";




const App: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
     

      <div className="flex flex-col flex-1 overflow-auto">
       
        <NavRoute />
      </div>
    </div>
  )
}

export default App
