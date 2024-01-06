"use client";
import { ProfileFields } from "@/components/data-entry-forms";
import FormButton from "@/components/save-button";
import { X, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddProfilePage() {
  const router = useRouter();
  return (
    <section className="w-full p-4 gap-5 bg-white border border-gray-200 rounded-lg shadow ">
      <form action="" className="w-full p-10 flex flex-col relative">
        <X
          onClick={() => router.back()}
          className="absolute translate-x-2 -translate-y-2 right-0 top-0 size-8 text-gray-500 cursor-pointer"
        />
        <ProfileFields header="PROFILE" />

        <div className="w-full flex flex-col mt-5">
          <button className="w-full text-md px-4 py-4 rounded-lg flex gap-2 justify-center items-center border text-blue-500 hover:text-white  border-blue-500 hover:bg-blue-600 ">
            {" "}
            <Plus className="" /> {"ADD ORDER"}
          </button>
        </div>
        <div className="w-full flex flex-col mt-5">
          <FormButton type={"SAVE"} />
        </div>
      </form>
    </section>
  );
}
