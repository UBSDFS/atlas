import StatCard from '../components/dashboard/StatCard';

export default function Dashboard() {
  return (
    <main className="flex-grow-1 bg-light p-4">
      <div className="container-fluid">
        <div className="row g-4">
          <StatCard title="Tasks Today" value="8" />
          <StatCard title="Completed" value="5" />
          <StatCard title="Focus Time" value="2.5 hrs" />
          <StatCard title="Daily Progress" value="63%" />
        </div>
      </div>
    </main>
  );
}