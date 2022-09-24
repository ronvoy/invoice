import React from "react"
import Table from "./MainTable"
import { tableData } from "../../constants/table-data"
import Dropdown from "../Dropdown/Dropdown"

export default function InvoiceTable() {
  const columns = [
    {
      field: "id",
      header: "",
      bodyClassName:""
        
    },
    { field: "Date", header: "", bodyClassName:"" },
    { field: "Name", header: "" , bodyClassName:""},
    { field: "Amount", header: "" , bodyClassName:""},
    { field: "Status", header: "" , bodyClassName:""},  
   
  ]

  return (
    <div className="bg-white shadow-lg m-5 p-5 font-helvetica">
      <div className="flex text-primaryGray cursor-pointer relative">
        <span className="font-bold  text-lg ">Invoices</span><br/>
        <span>There are 7 total invoices</span>
        <span className="flex items-center text-gray-800 font-bold">
          <Dropdown/>
        </span>
      </div>
      <div className="mt-10">
        <Table data={tableData} columns={columns} />
      
      </div>
    </div>
  )
}
