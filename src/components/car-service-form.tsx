"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import clsx from "clsx";
import FormButton from "./save-button";

export default function AddOrderForm() {
  const [isCarStatusNew, setCarStatus] = useState<boolean>();
  const [formType, setFormType] = useState<string>("");
  const router = useRouter();

  const addProfileHandler = (event: FormEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === "+ Add Profile") router.push("/");
  };
  const carStatusHandler = (event: FormEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value === "NEW") setCarStatus(true);
    if (
      event.currentTarget.value === "USED" ||
      event.currentTarget.value === "Choose condition.."
    )
      setCarStatus(false);
  };
  const typeHandler = (event: FormEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value === "Car Services")
      setFormType("Car Services");
    else if (event.currentTarget.value === "Supplies") setFormType("Supplies");
    else setFormType("");
  };

  return (
    <form className="w-full p-10 flex flex-col gap-5 relative">
      <X
        onClick={() => router.back()}
        className="absolute translate-x-2 -translate-y-2 right-0 top-0 size-8 text-gray-500 cursor-pointer"
      />
      <h2 className="text-2xl font-bold text-gray-600">
        ADD {formType.toUpperCase()} ORDER
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="profile" className="block mb-2" />
          <span className="text-sm font-medium text-gray-400">PROFILE</span>
          <select
            onChange={addProfileHandler}
            id="profile"
            className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>Choose a profile..</option>
            <option>Go Mazda</option>
            <option>Rally Subaru Gateway</option>
            <option>Mercedes-Benz West</option>
            <option>Kross Mitsubishi</option>
            <option className="bg-blue-400 text-white font-bold">
              + Add Profile
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="type"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">TYPE</span>
          <select
            name="type"
            onChange={typeHandler}
            id="type"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>Choose one</option>
            <option>Car Services</option>
            <option>Supplies</option>
          </select>
        </div>
        {formType === "Car Services" ? (
          <>
            <div className="flex gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="po-wo"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">
                  PO / WO
                </span>
                <input
                  type="text"
                  placeholder="Enter p.o or w.o number.."
                  id="po-wo"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="stock"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">STOCK</span>
                <input
                  type="text"
                  id="stock"
                  placeholder="Enter the stock number.."
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="condition"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">
                  CONDITION
                </span>
                <select
                  onChange={carStatusHandler}
                  id="condition"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option>Choose condition..</option>
                  <option>NEW</option>
                  <option>USED</option>
                </select>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="mileage"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">
                  MILEAGE
                </span>
                <input
                  disabled={isCarStatusNew}
                  placeholder={clsx(
                    { "NEW CAR": isCarStatusNew },
                    { "Enter the mileage..": !isCarStatusNew }
                  )}
                  type="number"
                  id="mileage"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">BRAND</span>
                <input
                  type="text"
                  placeholder="Enter the brand, maker.."
                  id="brand"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="vin"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">STOCK</span>
                <input
                  type="text"
                  id="vin"
                  placeholder="Enter the vin.."
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-2/6">
                <label
                  htmlFor="year"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">YEAR</span>
                <input
                  type="text"
                  placeholder="Enter the year.."
                  id="year"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-2/6">
                <label
                  htmlFor="model"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">MODEL</span>
                <input
                  type="text"
                  placeholder="Enter the model.."
                  id="model"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-2/6">
                <label
                  htmlFor="color"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">COLOR</span>
                <input
                  type="text"
                  id="color"
                  placeholder="Enter the color.."
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="order-description" className="block mb-2" />
              <span className="text-sm font-medium text-gray-400">
                ORDER DESCRIPTION
              </span>
              <input
                type="text"
                placeholder="Enter order details.."
                id="order-description"
                className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="notes" className="block mb-2" />
              <span className="text-sm font-medium text-gray-400">NOTES</span>
              <textarea
                rows={4}
                placeholder="Anything to say about this order?.."
                id="notes"
                className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="type"
                className="block mb-2 text-xs font-medium text-gray-400 "
              />
              <span className="text-sm font-medium text-gray-400">
                REFERRED BY
              </span>
              <select
                onChange={carStatusHandler}
                id="referred-by"
                className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option>None</option>
                <option>Marty</option>
                <option>Dyana</option>
                <option>Lui</option>
                <option>Ivan</option>
                <option>Daris</option>
                <option>Jared</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="log-by"
                className="block mb-2 text-xs font-medium text-gray-400 "
              />
              <span className="text-sm font-medium text-gray-400">LOG BY</span>
              <select
                onChange={carStatusHandler}
                id="log-by"
                className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option>None</option>
                <option>Marty</option>
                <option>Dyana</option>
                <option>Lui</option>
                <option>Ivan</option>
                <option>Daris</option>
                <option>Jared</option>
              </select>
            </div>
            <div className="w-full flex flex-col mt-5">
              <FormButton type={"SAVE"} />
            </div>
          </>
        ) : formType === "Supplies" ? (
          <>
            <div className="flex flex-col">
              <label htmlFor="brand" className="block mb-2" />
              <span className="text-sm font-medium text-gray-400">BRAND</span>
              <input
                type="text"
                placeholder="Enter the brand name.."
                id="brand"
                className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="material" className="block mb-2" />
              <span className="text-sm font-medium text-gray-400">
                MATERIAL
              </span>
              <input
                type="text"
                placeholder="Enter the type of material.."
                id="material"
                className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="flex gap-5">
              <div className="w-2/6">
                <label
                  htmlFor="rollid-or-serial-number"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">
                  ROLL ID / SERIAL NUMBER
                </span>
                <input
                  type="text"
                  placeholder="Enter roll id or serial number.."
                  id="roll-id-or-serial-number"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-2/6">
                <label
                  htmlFor="lot"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">LOT</span>
                <input
                  type="text"
                  placeholder="Enter lot number.."
                  id="lot"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="w-2/6">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-xs font-medium text-gray-400 "
                />
                <span className="text-sm font-medium text-gray-400">
                  MEASUREMENT / QUANTITY
                </span>
                <input
                  type="text"
                  id="quantity"
                  placeholder="eg. 1 bottle, 1 roll"
                  className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="notes" className="block mb-2" />
              <span className="text-sm font-medium text-gray-400">NOTES</span>
              <textarea
                rows={4}
                placeholder="Anything to say about this order?.."
                id="notes"
                className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="type"
                className="block mb-2 text-xs font-medium text-gray-400 "
              />
              <span className="text-sm font-medium text-gray-400">
                REFERRED BY
              </span>
              <select
                onChange={carStatusHandler}
                id="referred-by"
                className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option>None</option>
                <option>Marty</option>
                <option>Dyana</option>
                <option>Lui</option>
                <option>Ivan</option>
                <option>Daris</option>
                <option>Jared</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="log-by"
                className="block mb-2 text-xs font-medium text-gray-400 "
              />
              <span className="text-sm font-medium text-gray-400">LOG BY</span>
              <select
                onChange={carStatusHandler}
                id="log-by"
                className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option>None</option>
                <option>Marty</option>
                <option>Dyana</option>
                <option>Lui</option>
                <option>Ivan</option>
                <option>Daris</option>
                <option>Jared</option>
              </select>
            </div>
            <div className="w-full flex flex-col mt-5">
              <FormButton type={"SAVE"} />
            </div>
          </>
        ) : null}
      </div>
    </form>
  );
}
