import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form'
import Dropdown2 from '../Dropdown/Dropdown2';
import ItemListTable from '../Table/ItemListTable';

type Profile = {
   StreetAddress: string
   City?: string | number
   PostCode?: string | number
   Country?: string | number
   ClientName?: string | number
   ClientEmail?: string | number
   InvoiceDate?: string | number
   PaymentTerms?: string | number
   ProjectDescription?: string | number
   ItemName?: string | number
   Qty?: string | number
   Price?: string | number
   Total?: string | number
  }
  

const NewInvoice = () => {
    let navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Profile>()
   

  return (
    <div>
<button  onClick={()=>navigate("/")}>Go back</button>
<div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
             New Invoice
            </h1>
          
          </div>
          <p className="text-purple-900">BillFrom</p>

          <form onSubmit={()=>handleSubmit}>
            {/* bill from  starts*/}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="StreetAddress" className="leading-7 text-lg text-gray-600">
                   Street Address
                    </label>
                    <input
                      className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("StreetAddress")}
                      type="text"
                      id="StreetAddress"
                      name="StreetAddress"
                      placeholder="19 Union Terrace"
                      {...(errors.StreetAddress && <div className="error">Enter street address</div>)}
                    />
                  </div>
                </div>
                <div className="">
                  
                  <label htmlFor="City" 
                  // className="leading-7 text-lg text-gray-600"
                  >
                       City
                      </label>
                      <input
                        // className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("City")}
                        type="text"
                        id="City"
                        placeholder="London"
                        {...(errors.City && <div className="error">Enter city</div>)}
                      />
                  <label htmlFor="PostCode" 
                  // className="leading-7 text-lg text-gray-600"
                  >
                       PostCode
                      </label>
                      <input
                        // className="w-full bg-gray-100 bg-color-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("PostCode")}
                        type="text"
                        id="PostCode"
                        placeholder="E1 3EZ"
                        {...(errors.PostCode && <div className="error">Enter postcode</div>)}
                      />
                  <label htmlFor="Country" 
                  // className="leading-7 text-lg text-gray-600"
                  >
                       Country
                      </label>
                      <input
                        // className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("Country")}
                        type="text"
                        id="Country"
                        placeholder="United Kingdom"
                        {...(errors.Country && <div className="error">Enter country</div>)}
                      />
    
  </div>

                {/* bill to  starts */}
                <br/>
                <p className="text-purple-600">Bill To</p>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="ClientName" className="leading-7 text-lg text-gray-600">
                      Client's Name
                    </label>
                    <input
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("ClientName")}
                      type="text"
                      id="clientname"
                      {...(errors.ClientName && <div className="error">Enter client name</div>)}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="ClientEmail" className="leading-7 text-lg text-gray-600">
                      Client's Email
                    </label>
                    <input
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("ClientEmail")}
                      type="text"
                      id="ClientEmail"
                      {...(errors.ClientEmail && <div className="error">Enter client email</div>)}
                    />
                  </div>
                  <div>

                  </div>
                </div>
               
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="StreetAddress" className="leading-7 text-lg text-gray-600">
                     StreetAddress
                    </label>
                    <input
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("StreetAddress")}
                      type="text"
                      id="StreetAddress"
                      {...(errors.StreetAddress && <div className="error">Enter street address</div>)}
                    />
                  </div>
                </div>
                <div className="">
                  
                <label htmlFor="City" 
                // className="leading-7 text-lg text-gray-600"
                >
                     City
                    </label>
                    <input
                      // className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("City")}
                      type="text"
                      id="City"
                      placeholder="BradFord"
                      {...(errors.City && <div className="error">Enter city</div>)}
                    />
                <label htmlFor="PostCode" 
                // className="leading-7 text-lg text-gray-600"
                >
                     PostCode
                    </label>
                    <input
                      // className="w-full bg-gray-100 bg-color-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("PostCode")}
                      type="text"
                      id="PostCode"
                      placeholder="BDI 9PB"
                      {...(errors.PostCode && <div className="error">Enter postcode</div>)}
                    />
                <label htmlFor="Country" 
                // className="leading-7 text-lg text-gray-600"
                >
                     Country
                    </label>
                    <input
                      // className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("Country")}
                      type="text"
                      id="Country"
                      placeholder="United Kingdom"
                      {...(errors.Country && <div className="error">Enter country</div>)}
                    />
 
</div>
<div>
<label htmlFor="InvoiceDate" 
                // className="leading-7 text-lg text-gray-600"
                >
                     Invoice Date
                    </label>
                    <input
                      // className="w-full bg-gray-100 bg-color-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("InvoiceDate")}
                      type="text"
                      id="InvoiceDate"
                      placeholder="BDI 9PB"
                      {...(errors.InvoiceDate && <div className="error">Enter invoice date</div>)}
                    />
                    <div className="flex">
<label htmlFor="PaymentTerms" 
                // className="leading-7 text-lg text-gray-600"
                >
                     Payment Terms
                    </label>
                    <Dropdown2/>
                    {/* <input
                      // className="w-full bg-gray-100 bg-color-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("PaymentTerms")}
                      type="text"
                      id="PaymentTerms"
                      placeholder="BDI 9PB"
                      {...(errors.PaymentTerms && <div className="error">Enter payment terms</div>)}
                   / > */}
                   
</div>
</div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="ProjectDescription" className="leading-7 text-lg text-gray-600">
                     ProjectDescription
                    </label>
                    <input
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("ProjectDescription")}
                      type="text"
                      id="ProjectDescription"
                      placeholder="e.g. Graphic Design Service"
                      {...(errors.ProjectDescription && <div className="error">Enter project description</div>)}
                    />
                  </div>
                </div>
                {/* <h1>Item List</h1> */}
                <ItemListTable/>
                <div>
                  
                  </div>
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>

         
        </div>
      </div>

      </div>
  )
}

export default NewInvoice
