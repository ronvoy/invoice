import React from "react"
type Props = {
  data?: any
  columns?: any
}
const Table = ({ data, columns }: Props) => {
  return (
    <div>
      <table className="w-full table-fixed shadow border-gray-200">
        <thead className=" bg-white">
          <tr className="text-center">
            {columns && columns.map((head: any, index: any) => <th key={index}>{head.header}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y-8">
          {data &&
            data.map((row: any, index: any) => (
              <tr className=" bg-gray-100 border-white font-helvetica text-center" key={index}>
                {columns.map((col: any, key: any) => (
                  <td key={key} className={col.bodyClassName}>
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
