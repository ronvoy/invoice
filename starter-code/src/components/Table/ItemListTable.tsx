import React from "react"

import Table from "./MainTable"
import { tableData } from "../../constants/table-data"
import AddNewItem from "../AddNewItem/AddNewItem"
import { listData } from "../../constants/list-data"
// import Dropdown from "../Dropdown/Dropdown"
// import NewInvoice from "../NewInvoiceForm/NewInvoice"

export default function ItemListTable() {
 
  
  const columns = [
    {
      field: "ItemName",
      header: "Item Name",
      bodyClassName:""
        
    },
    { field: "Qty", header: "Qty", bodyClassName:"" },
    { field: "Price", header: "Price" , bodyClassName:""},
    { field: "Total", header: "Total" , bodyClassName:""},
   
   
  ]

  return (
    <div className="bg-white shadow-lg m-5 p-5 font-helvetica">
      <div className="flex text-primaryGray cursor-pointer relative">
        <span className="font-bold  text-lg ">Item List</span><br/>
        
        
      </div>
      <div className="mt-10">
        <Table data={listData} columns={columns} />
      <AddNewItem/>
      </div>
    </div>
  )
}
