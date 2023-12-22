// "use client";

import React from "react";
import { OrdersProps } from "@/data/placeholders";
import { Search, Plus } from "lucide-react";

export default function OrdersTable({ orders }: { orders: OrdersProps[] }) {
  console.log(orders);
  return (
    <section className="w-full h-full  justify-center items-center relative overflow-x-auto p-5">
      <h1>Ledger</h1>
      <div className=" w-full h-32">
        <div className=" flex items-center justify-between  md:flex-row md:space-y-0 py-4 bg-white ">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
            type="button"
          >
            <span className="sr-only">Action button</span>
            <Plus />
            Add order
          </button>

          <div className="relative">
            <div className="absolute inset-y-0  start-0 flex items-center ps-3">
              <Search className="w-4 h-4 text-gray-500 " />
            </div>
            <input
              type="text"
              className="block ps-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for orders"
            />
          </div>
        </div>
      </div>
      <table className="w-full h-full overflow-y-auto text-left text-sm  text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th className="px-6 py-3">DATE</th>
            <th className="px-6 py-3">COMPANY</th>
            <th className="px-6 py-3">PO</th>
            <th className="px-6 py-3">STOCK</th>
            <th className="px-6 py-3">VIN</th>
            <th className="px-6 py-3">MODEL</th>
            <th className="px-6 py-3">COLOR</th>
            <th className="px-6 py-3">BY</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="bg-white border-b hover:bg-gray-50 ">
              <td className="w-4 p-4">{order.date}</td>
              <td className="w-4 p-4">{order.company}</td>
              <td className="w-4 p-4">{order.poNumber}</td>
              <td className="w-4 p-4">{order.stockNumber}</td>
              <td className="w-4 p-4">{order.vin}</td>
              <td className="w-4 p-4">{order.model}</td>
              <td className="w-4 p-4">{order.color}</td>
              <td className="w-4 p-4">{order.employee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
