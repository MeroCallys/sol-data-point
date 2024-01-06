"use client";


import {
  Container,
  Textarea,
  Text,
  Tel,
  Number,
  Select,
  Email,
} from "@/components/form-fields";
import { X, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
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
      <Container className="flex gap-5">
        <Container className="w-1/2">
          <Text
            label={"PO / WO"}
            name={"po-wo"}
            placeholder={"eg. 66123, 654322.."}
          />
        </Container>
        <Container className="w-1/2">
          <Text
            label={"STOCK"}
            name={"stock"}
            placeholder={"eg. 24CRO123, 25OUT324"}
          />
        </Container>
      </Container>
      <Container className="flex gap-5">
        <Container className="w-1/2">
          <Select
            key={1}
            onChange={carStatusHandler}
            label={"CONDITION"}
            name={"condition"}
            options={["Choose condition..", "NEW", "USED"]}
          />
        </Container>
        <Container className="w-1/2">
          <Number
            label="MILEAGE"
            name="mileage"
            disabled={isCarStatusNew}
            placeholder={clsx(
              { "NEW CAR": isCarStatusNew },
              { "Enter the mileage..": !isCarStatusNew }
            )}
          ></Number>
        </Container>
      </Container>
      <Container className="flex gap-5">
        <Container className="w-1/2">
          <Text
            label={"BRAND"}
            name={"brand"}
            placeholder={"eg. SUBARU, MAZDA, MISTUBISHI.."}
          />
        </Container>
        <Container className="w-1/2">
          <Text
            label={"VIN"}
            name={"vin"}
            placeholder={"eg. RH123456, PH098765.."}
          />
        </Container>
      </Container>
      <Container className="flex gap-5">
        <Container className="w-2/6">
          <Text label={"YEAR"} name={"year"} placeholder={"eg. 25, 24, 23.."} />
        </Container>
        <Container className="w-2/6">
          <Text
            label={"MODEL"}
            name={"model"}
            placeholder={"eg. CX 30, CROSSTREK.."}
          />
        </Container>
        <Container className="w-2/6">
          <Text
            label={"COLOR"}
            name={"color"}
            placeholder={"eg. M. GREY, P. WHITE.."}
          />
        </Container>
      </Container>
      <Container className="flex flex-col w-full">
        <Text
          label={"ORDER DESCRIPTION"}
          name={"order-description"}
          placeholder={"eg. H, F, M, B, DC, AP, RL, DE.."}
        />
      </Container>
      <Container className="flex flex-col w-full">
        <Textarea
          rows={4}
          label={"NOTES"}
          name={"notes"}
          placeholder={"Anything to say about this order?"}
        />
      </Container>
      <Container className="flex flex-col w-full">
        <Select
          label={"REFERRED BY"}
          name={"referred-by"}
          options={["None", "Marty", "Dyana", "Lui", "Ivan", "Daris", "Jared"]}
        ></Select>
      </Container>
      <Container className="flex flex-col w-full">
        <Select
          label={"LOG BY"}
          name={"log-by"}
          options={[
            "None",
            "Marty",
            "Dyana",
            "Lui",
            "Ivan",
            "Daris",
            "Jared",
            "Allan",
          ]}
        />
      </Container>
    </>
  );
}

function SuppliesFields() {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-600">
        SUPPLIES ORDER DETAILS
      </h2>
      <Container className="w-full flex-col">
        <Text
          label={"BRAND"}
          name={"brand"}
          placeholder={"eg. Verleno, X Shield..."}
        />
      </Container>
      <Container className="w-full flex flex-col">
        <Text
          label={"MATERIAL"}
          name="material"
          placeholder={"eg. PPF Gloss, Ceramic Coating.."}
        />
      </Container>
      <Container className="w-full flex gap-5">
        <Container className="w-2/6">
          <Text
            label={"ROLL ID"}
            name={"roll-id"}
            placeholder="eg. A12345678.."
          />
        </Container>
        <Container className="w-2/6">
          <Text label={"LOT"} name={"lot"} placeholder="eg. B12, B34, B56.." />
        </Container>
        <Container className="w-2/6">
          <Text
            label={"QUANTITY"}
            name={"eg. 1 bottle, 1 roll"}
            placeholder="eg. B12, B34, B56.."
          />
        </Container>
      </Container>
      <Container className="w-full flex flex-col">
        <Textarea
          rows={4}
          label={"NOTES"}
          name={"notes"}
          placeholder={"Say anything about this order.."}
        />
      </Container>
      <Container className="w-full flex flex-col">
        <Select
          label={"REFERRED BY"}
          name={"referred-by"}
          options={[
            "None",
            "Marty",
            "Dyana",
            "Lui",
            "Ivan",
            "Daris",
            "Jared",
            "Allan",
          ]}
        />
      </Container>
      <Container className="w-full flex flex-col">
        <Select
          label={"LOG BY"}
          name={"log-by"}
          options={["Marty", "Dyana", "Lui", "Ivan", "Daris", "Jared", "Allan"]}
        />
      </Container>
    </>
  );
}

export function ProfileFields({ header }: { header: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-600">
        ADD {header.toUpperCase()}
      </h2>
      <Container className="flex flex-col w-full">
        <Select
          label={"CATEGORY"}
          name={"category"}
          options={["Select a category..", "Walk-in", "Dealership"]}
        />
      </Container>
      <Container className="flex flex-col w-full">
        <Text
          label={"COMPANY"}
          name={"name"}
          placeholder={"eg. GO MAZDA, GATEWAY SUBARU, KROSS MITSUBISHI.."}
        />
      </Container>
      <Container className="flex flex-col w-full">
        <Text
          label={"REQUESTOR'S FIRST NAME"}
          name={"requestors-first-name"}
          placeholder={"eg. JOHN"}
        />
      </Container>
      <Container className="flex flex-col w-full">
        <Text
          label={"REQUESTOR'S LAST NAME"}
          name={"requestors-last-name"}
          placeholder={"eg. DOE"}
        />
      </Container>
      <Container className="flex w-full gap-5">
        <Container className="w-1/2">
          <Tel
            label={"PHONE"}
            name="phone"
            placeholder={"eg. 123-456-7890"}
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            required
          />
        </Container>
        <Container className="w-1/2">
          <Email
            label={"EMAIL"}
            name="email"
            placeholder={"eg. dummy@sample.com"}
            pattern={".+@example.com"}
            required
          />
        </Container>
      </Container>
      <Container className="flex w-full gap-5">
        <Container className="w-1/2">
          <Text label={"STREET"} name="street" placeholder={"eg. 1234 56 ST"} />
        </Container>
        <Container className="w-1/2">
          <Text
            label={"CITY"}
            name="city"
            placeholder={"eg. Edmonton, Smokey Lake.."}
          />
        </Container>
      </Container>
      <Container className="w-full flex gap-5">
        <Container className="w-2/6">
          <Text label="POSTAL" name="postal" placeholder={"eg. T1T 2M3"} />
        </Container>
        <Container className="w-2/6">
          <Text label="PROVINCE" name="province" placeholder={"eg. ALBERTA"} />
        </Container>
        <Container className="w-2/6">
          <Text
            label={"COUNTRY"}
            name={"country"}
            placeholder="CANADA"
            defaultValue={"CANADA"}
          />
        </Container>
      </Container>
      <Container className="w-full flex flex-col">
        <Textarea
          rows={4}
          label={"PRICE AND PACKAGES"}
          name={"price-and-packages"}
          placeholder={"Enter the price and packages for this profile.."}
        />
      </Container>
    </>
  );
}

{
  /* receive form action here */
}
export function AddOrderForm({
  action,
}: {
  action?: (formData: FormData) => [];
}) {
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
    <>
      <form className="w-full p-10 flex flex-col gap-5 relative">
        <X
          onClick={() => router.back()}
          className="absolute translate-x-2 -translate-y-2 right-0 top-0 size-8 text-gray-500 cursor-pointer"
        />
        <h2 className="text-2xl font-bold text-gray-600">
          ADD {formType.toUpperCase()} ORDER
        </h2>

        <Container className="flex flex-col gap-5">
          <Container className="w-full flex flex-col">
            <Select
              label={"PROFILE"}
              name={"profile"}
              onChange={selectProfileHandler}
              options={[
                "Select customer's profile..",
                "Go Mazda",
                "Rally Subaru Gateway",
                "Mercedes-Benz West",
                "Kross Mitsubishi",
                "AuthoShield Pro",
                "Mercari Auto",
              ]}
            />
          </Container>

          {addProfile && (
            <>
              <Container className="my-2">
                <span className="flex gap-4 justify-center items-center">
                  <hr className="grow bg-gray-500" />
                  <span className="w-15 font-bold text-sm text-gray-500">
                    OR
                  </span>
                  <hr className="grow bg-gray-500" />
                </span>
              </Container>
              <Container className="w-full flex flex-col">
                <button
                  onClick={clickAddProfileHandler}
                  className={clsx(
                    "w-full text-md px-4 py-4 rounded-lg flex gap-2 justify-center items-center ",
                    {
                      "border-none text-white border-2 bg-blue-500 border-blue-500 hover:bg-blue-600":
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
              </Container>
            </>
          )}

          {addProfileForm ? (
            <Container className="w-full flex flex-col">
              <ProfileFields header={"PROFILE"} />
              <span className="flex gap-4 justify-center items-center">
                <hr className="grow bg-gray-500" />
              </span>
            </Container>
          ) : null}
          <Container className="my-4">
            <span className="flex gap-4 justify-center items-center">
              <hr className="grow bg-gray-500" />
            </span>
          </Container>
          <Container className="w-full flex flex-col">
            <Select
              label={"ORDER TYPE"}
              name="order"
              onChange={selectTypeHandler}
              options={["Choose type of service..", "Car Services", "Supplies"]}
            />
          </Container>
          {formType === "Car Services" ? (
            <Container className="w-full flex flex-col gap-2 mt-4">
              <CarServicesFields />
              <Container className="mt-6">
                <FormButton type={"SAVE"} />
              </Container>
            </Container>
          ) : formType === "Supplies" ? (
            <Container className="w-full flex flex-col gap-2 mt-4">
              <SuppliesFields />
              <Container className="mt-6">
                <FormButton type={"SAVE"} />
              </Container>
            </Container>
          ) : null}
        </Container>
      </form>
    </>
  );
}

export function AddProfileForm({
  action,
}: {
  action?: (formData: FormData) => [];
}) {
  const router = useRouter();
  return (
    <>
      <form
        action={action}
        className="w-full p-10 flex flex-col gap-2 relative"
      >
        <X
          onClick={() => router.back()}
          className="absolute translate-x-2 -translate-y-2 right-0 top-0 size-8 text-gray-500 cursor-pointer"
        />
        <ProfileFields header={"PROFILE"} />
        <Container className="mt-6">
          <FormButton type={"SAVE"} />
        </Container>
      </form>
    </>
  );
}


