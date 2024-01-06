export default function FormButton({ type }: { type: string }) {
  return (
    <button
      className="w-full text-md px-4 py-4 border-none rounded-lg text-white  bg-blue-500 flex gap-2 justify-center items-center hover:bg-blue-600"
      type="submit"
    >
      {type}
    </button>
  );
}
