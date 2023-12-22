import { OrdersProps } from "@/data/placeholders";
import { Plus, Search } from "lucide-react";

function CardHeaders() {
  return (
    <div className="bg-white h-24 flex">
      <h3 className="h-full w-40  inline-flex justify-center items-center bg-white">
        SOL MGMT
      </h3>
      <div className=" w-full h-full">
        <div className="w-full h-full flex items-end justify-end gap-3  md:flex-row md:space-y-0 py-4 ">
          <button
            className="inline-flex items-center gap-2 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
            type="button"
          >
            <Plus className="w-4" />
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
    </div>
  );
}

function CardContainer() {
  return (
    <div className="bg-red-100 w-full h-full">
      <div>cards</div>
    </div>
  );
}

export default function OrdersCards({ orders }: { orders: OrdersProps[] }) {
  return (
    <div className="w-full h-full px-7  bg-white shadow-md rounded-lg overflow-hidden">
      <CardHeaders />
      <div className="w-full">
        <CardContainer />
      </div>
    </div>
  );
}
