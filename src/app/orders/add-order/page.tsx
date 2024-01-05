import CarServiceForm from "@/components/car-service-form";

export default function AddOrderPage() {
  return (
    <section className="w-full p-4 gap-5 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between items-center">
      <CarServiceForm />
    </section>
  );
}
