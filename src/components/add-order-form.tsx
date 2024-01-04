import React from "react";

export default function AddOrderForm() {
  return (
    <form>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Select your country
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </select>
    </form>
  );
}
