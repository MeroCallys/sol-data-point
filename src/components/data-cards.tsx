import Link from "next/link";
import React from "react";
import type { DataProps } from "@/placeholders/placeholder";
import { Circle, CheckCircle2 } from "lucide-react";

export default function DataCards({ fetchData }: { fetchData: DataProps[] }) {
  console.log(fetchData);
  return (
    <>
      {fetchData.map((data) => (
        <Link
          key={data.id}
          className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow flex justify-between items-center"
          href={`/orders/${data.id}`}
        >
          {data.id % 2 == 0 ? (
            <span className="bg-blue-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
              <Circle className="text-white w-4 h-4 md:w-5 md:h-5 " />
            </span>
          ) : (
            <span className="bg-blue-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
              <CheckCircle2 className="text-white w-4 h-4 md:w-5 md:h-5" />
            </span>
          )}

          <div className="flex flex-col items-start">
            <span className="text-xs md:text-sm text-gray-400">
              <span>{data.year}</span>
              <span>{data.model}</span> {data.color}
            </span>
            <span className="font-bold text-sm md:text-lg text-gray-500">
              {data.brand}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">PO</span>
              <span className="font-bold text-sm md:text-lg text-gray-500">
                {data.po}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">STOCK</span>
              <span className="font-bold text-sm md:text-lg text-gray-500">
                {data.stock}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">VIN</span>
              <span className="font-bold text-sm md:text-lg text-gray-500">
                {data.vin}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs md:text-sm text-gray-400">
              {data.month.toUpperCase()}
            </span>
            <span className="font-bold text-sm md:text-lg text-gray-500">
              {data.date}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
