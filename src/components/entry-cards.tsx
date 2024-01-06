import Link from "next/link";
import {
  type DataProps,
  type fethProfilesProps,
} from "@/placeholders/placeholder";
import { Circle, CheckCircle2 } from "lucide-react";

export function OrderCards({ fetchData }: { fetchData: DataProps[] }) {
  return (
    <>
      {fetchData.map((data) => (
        <Link
          key={data.id}
          className="w-full p-4 gap-5 bg-white border border-gray-200 rounded-lg shadow flex  justify-between items-center"
          href={`/orders/${data.id}`}
        >
          <div className="w-16">
            {data.id % 2 == 0 ? (
              <span className="bg-blue-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
                <Circle className="text-white w-4 h-4 md:w-5 md:h-5 " />
              </span>
            ) : (
              <span className="bg-blue-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
                <CheckCircle2 className="text-white w-4 h-4 md:w-5 md:h-5" />
              </span>
            )}
          </div>

          <div className="flex w-1/3 flex-col items-start">
            <span className="flex gap-1 flex-col sm:flex-row text-xs md:text-sm text-gray-400">
              <span>{data.year}</span>
              <span>{data.brand}</span>
              <span>{data.model}</span>
              <span>{data.color}</span>
            </span>
            <span className="font-bold text-sm md:text-lg text-gray-500">
              {data.category}
            </span>
          </div>

          <div className="flex w-1/3 gap-2 md:gap-5  flex-col sm:flex-row">
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

          <div className="w-16 flex flex-col items-end">
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

export function ProfileCards({
  fetchProfiles,
}: {
  fetchProfiles: fethProfilesProps[];
}) {
  return (
    <>
      {fetchProfiles.map((data) => (
        <Link
          key={data.id}
          className="w-full p-4 gap-5 bg-white border border-gray-200 rounded-lg shadow flex  justify-between items-center"
          href={`/orders/${data.id}`}
        >
          <div className="w-16">
            {data.id % 2 == 0 ? (
              <span className="bg-blue-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
                <Circle className="text-white w-4 h-4 md:w-5 md:h-5 " />
              </span>
            ) : (
              <span className="bg-blue-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center">
                <CheckCircle2 className="text-white w-4 h-4 md:w-5 md:h-5" />
              </span>
            )}
          </div>

          <div className="flex w-1/3 flex-col items-start">
            <span className="flex gap-1 flex-col sm:flex-row text-xs md:text-sm text-gray-400">
              {data.type}
            </span>
            <span className="font-bold text-sm md:text-lg text-gray-500">
              {data.company}
            </span>
          </div>

          <div className="flex flex-col  items-start w-1/2 gap-2 md:gap-5  sm:flex-row">
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">UNPAID</span>
              <span className="font-bold text-sm md:text-lg text-gray-500">
                {data.unpaidOrders}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">TOTAL</span>
              <span className="font-bold text-sm md:text-lg text-gray-500">
                {data.totalOrders}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm text-gray-400">
                REQUESTOR
              </span>
              <span className="flex gap-1 font-bold text-sm md:text-lg text-gray-500">
                <span>{data.requestorFirstName}</span>
                <span className="hidden sm:block">
                  {data.requestorLastName}
                </span>
              </span>
            </div>
          </div>

          <div className="w-16 flex flex-col items-end">
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
