import OrdersCards from "@/components/orders-cards";
import OrdersTable from "@/components/orders-table";
import { fetchOrders, OrdersProps } from "@/data/placeholders";

export default async function Home() {
  const orders = await fetchOrders();

  return (
    <section className="w-full h-full p-5">
      {/* <OrdersTable orders={orders} /> */}
      <OrdersCards orders={orders} />
    </section>
  );
}
