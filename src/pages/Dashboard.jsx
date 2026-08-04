import StatCard from '../components/dashboard/StatCard';
import TaskList from '../components/dashboard/TaskList';
import ScheduleCard from '../components/dashboard/ScheduleCard';




export default function Dashboard() {
  return (
    <main className="flex-grow-1 bg-light p-4">
      <div className="container-fluid">
        <div className="row g-4">
          <StatCard title="Tasks Today" value="4" />
          <StatCard title="Completed" value="5" />
          <StatCard title="Daily Progress" value="63%" />
        </div>
        <div className="row g-4 mt-1">
          <div className="col-md-7">
            <TaskList />
          </div>
          <div className="col-md-5">
            <ScheduleCard />
          </div>
        </div>
      </div>
    </main>
    
  );
}