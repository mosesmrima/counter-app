import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Counter App</h1>
      <Counter />
    </div>
  );
}
