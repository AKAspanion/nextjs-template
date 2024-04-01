import Counter from "./counter";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Your app&apos;s dashboard</h2>
      <div className="pt-6" />
      <Counter />
    </div>
  );
}
