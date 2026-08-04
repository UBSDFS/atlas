export default function Dashboard() {
  return (
    <main className="flex-grow-1 bg-light p-4">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="text-muted mb-2">Tasks Today</p>
                <h2 className="mb-0">8</h2>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="text-muted mb-2">Completed</p>
                <h2 className="mb-0">5</h2>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="text-muted mb-2">Focus Time</p>
                <h2 className="mb-0">2.5 hrs</h2>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="text-muted mb-2">Daily Progress</p>
                <h2 className="mb-0">63%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}