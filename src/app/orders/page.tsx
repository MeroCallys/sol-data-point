import React from "react";
import ControlPanel from "@/components/control-panel";
import { OrderCards } from "@/components/entry-cards";
import { fetchData } from "@/placeholders/placeholder";

export default function OrdersPage() {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      <ControlPanel
        header={"ORDERS"}
        type={"ORDER"}
        linkTo={"/orders/add-order"}
        placeholder={"Search stock, po, vin..."}
      />
      <div className="w-full h-auto flex  flex-col gap-3 ">
        <OrderCards fetchData={fetchData} />
      </div>
    </section>
  );
}
