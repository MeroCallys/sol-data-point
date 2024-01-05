"use client";

import { X, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FormEvent, useState } from "react";
import clsx from "clsx";
import FormButton from "./save-button";

function CarServicesFields() {
  const [isCarStatusNew, setCarStatus] = useState<boolean>();

  const carStatusHandler = (event: FormEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value === "NEW") setCarStatus(true);
    if (
      event.currentTarget.value === "USED" ||
      event.currentTarget.value === "Choose condition.."
    )
      setCarStatus(false);
  };

  return (
    <>
      <h2 className="text-xl font-bold text-gray-600">
        CAR SERVICE ORDER DETAILS
      </h2>
      <div className="flex gap-5">
        <div className="w-1/2">
          <label
            htmlFor="po-wo"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">PO / WO</span>
          <input
            type="text"
            placeholder="eg. 66123"
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
            placeholder="eg. 24CRO123, 25OUT324"
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
          <span className="text-sm font-medium text-gray-400">CONDITION</span>
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
          <span className="text-sm font-medium text-gray-400">MILEAGE</span>
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
            placeholder="eg. SUBARU, MAZDA, MISTUBISHI.."
            id="brand"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="vin"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">VIN</span>
          <input
            type="text"
            id="vin"
            placeholder="eg. RH123456, PH098765.."
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
            placeholder="eg. 25, 24, 23.."
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
            placeholder="eg. CX 30, CROSSTREK.."
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
            placeholder="eg. M. GREY, P. WHITE.."
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
          placeholder="eg. H, F, M, B, DC, AP, RL, DE.."
          id="order-description"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="notes" className="block mb-2" />
        <span className="text-sm font-medium text-gray-400">NOTES</span>
        <textarea
          rows={4}
          placeholder="Anything to say about this order?"
          id="notes"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="type"
          className="block mb-2 text-xs font-medium text-gray-400 "
        />
        <span className="text-sm font-medium text-gray-400">REFERRED BY</span>
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
  );
}

function SuppliesFields() {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-600">
        SUPPLIES ORDER DETAILS
      </h2>
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
        <span className="text-sm font-medium text-gray-400">MATERIAL</span>
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
          <span className="text-sm font-medium text-gray-400">ROLL ID</span>
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
          <span className="text-sm font-medium text-gray-400">QUANTITY</span>
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
        <span className="text-sm font-medium text-gray-400">REFERRED BY</span>
        <select
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
  );
}

function ProfileFields({ header }: { header: string }) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-600">
        ADD {header.toUpperCase()}
      </h2>
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="block mb-2 text-xs font-medium text-gray-400 "
        />
        <span className="text-sm font-medium text-gray-400">CATEGORY</span>
        <select
          name="category"
          id="type"
          className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option>Select a category..</option>
          <option>Walk-in</option>
          <option>Dealership</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="company" className="block mb-2" />
        <span className="text-sm font-medium text-gray-400">COMPANY NAME</span>
        <input
          type="text"
          placeholder="eg. GO MAZDA, GATEWAY SUBARU, KROSS MITSUBISHI.."
          id="company"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="requestors-first-name" className="block mb-2" />
        <span className="text-sm font-medium text-gray-400">
          {"REQUESTOR'S FIRST NAME"}
        </span>
        <input
          type="text"
          placeholder="eg. JOHN"
          id="requestors-first-name"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="requestors-last-name" className="block mb-2" />
        <span className="text-sm font-medium text-gray-400">
          {"REQUESTOR'S LAST NAME"}
        </span>
        <input
          type="text"
          placeholder="eg. DOE"
          id="requestors-last-name"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <label
            htmlFor="phone"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">PHONE</span>
          <input
            type="tel"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            id="phone"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">EMAIL</span>
          <input
            type="email"
            pattern=".+@example\.com"
            required
            id="email"
            placeholder="dummy@sample.com"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <label
            htmlFor="street"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">STREET</span>
          <input
            type="text"
            placeholder="eg. 1234 56 ST"
            id="street"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="city"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">CITY</span>
          <input
            type="text"
            id="city"
            placeholder="eg. EDMONTON"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/6">
          <label
            htmlFor="postal"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">POSTAL</span>
          <input
            type="text"
            placeholder="eg. T1T 2M3"
            id="postal"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="w-2/6">
          <label
            htmlFor="province"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">PROVINCE</span>
          <input
            type="text"
            placeholder="eg. ALBERTA"
            id="province"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="w-2/6">
          <label
            htmlFor="country"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-medium text-gray-400">COLOR</span>
          <input
            type="text"
            value="CANADA"
            id="country"
            disabled
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="price-and-packages" className="block mb-2" />
        <span className="text-sm font-medium text-gray-400">
          PRICE AND PACKAGES
        </span>
        <textarea
          rows={4}
          placeholder="Enter the price and packages for this profile.."
          id="price-and-packages"
          className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
    </>
  );
}

export default function DateEntryForms() {
  const [formType, setFormType] = useState<string>("");
  const [addProfile, setAddProfile] = useState<boolean>(true);
  const [addProfileForm, setAddProfileForm] = useState<boolean>(false);

  const router = useRouter();

  function selectProfileHandler(event: FormEvent<HTMLSelectElement>) {
    console.log(event.currentTarget.value);

    if (event.currentTarget.value !== "Select customer's profile..")
      setAddProfileForm(false);
    if (event.currentTarget.value !== "Select customer's profile..")
      setAddProfile(false);
    else setAddProfile((prev) => !prev);
  }

  function selectTypeHandler(event: FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === "Car Services")
      setFormType("Car Services");
    else if (event.currentTarget.value === "Supplies") setFormType("Supplies");
    else setFormType("");
  }

  function clickAddProfileHandler(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAddProfileForm((prev) => !prev);
  }

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
            onChange={selectProfileHandler}
            id="profile"
            className="border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>{"Select customer's profile.."}</option>
            <option>Go Mazda</option>
            <option>Rally Subaru Gateway</option>
            <option>Mercedes-Benz West</option>
            <option>Kross Mitsubishi</option>
          </select>
        </div>
        {addProfile && (
          <>
            <div className="my-2">
              <span className="flex gap-4 justify-center items-center">
                <hr className="grow bg-gray-500" />
                <span className="w-15 font-bold text-sm text-gray-500">OR</span>
                <hr className="grow bg-gray-500" />
              </span>
            </div>
            <div className="w-full flex flex-col">
              <button
                onClick={clickAddProfileHandler}
                className={clsx(
                  "w-full text-md px-4 py-4 rounded-lg flex gap-2 justify-center items-center ",
                  {
                    "border-none text-white  bg-blue-500 hover:bg-blue-600":
                      !addProfileForm,
                  },
                  {
                    "text-gray-500  border-solid bg-none border-2 border-gray-300  hover:bg-gray-400 hover:text-gray-50":
                      addProfileForm,
                  }
                )}
              >
                {!addProfileForm ? (
                  <>
                    <Plus className="" /> {"ADD PROFILE"}
                  </>
                ) : (
                  <>
                    <Minus /> {"CANCEL ADDING PROFILE"}
                  </>
                )}
              </button>
            </div>
          </>
        )}

        {addProfileForm ? (
          <div className="mt-7 mb-5">
            <ProfileFields header={"PROFILE"} />
            <span className="flex gap-4 justify-center items-center">
              <hr className="grow bg-gray-500" />
            </span>
          </div>
        ) : null}
        <div className="my-3">
          <span className="flex gap-4 justify-center items-center">
            <hr className="grow bg-gray-500" />
          </span>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="type"
            className="block mb-2 text-xs font-medium text-gray-400 "
          />
          <span className="text-sm font-bolds text-gray-500">ORDER TYPE</span>
          <select
            name="type"
            onChange={selectTypeHandler}
            id="type"
            className=" border outline-none border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>Choose one</option>
            <option>Car Services</option>
            <option>Supplies</option>
          </select>
        </div>
        {formType === "Car Services" ? (
          <div className="my-5">
            <CarServicesFields />
          </div>
        ) : formType === "Supplies" ? (
          <div className="my-5">
            <SuppliesFields />
          </div>
        ) : null}
      </div>
    </form>
  );
}
