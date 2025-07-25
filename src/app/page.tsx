import Toggle from "@/components/Toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <Toggle />
      <h1 className="text-4xl font-bold mt-6">Hello World</h1>
    </div>
  );
}
