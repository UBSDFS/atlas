import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../../pages/Dashboard';

export default function AppLayout() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}