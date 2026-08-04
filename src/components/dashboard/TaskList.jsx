export default function TaskList() {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Today's Tasks</h2>

          <button className="btn btn-sm btn-outline-primary">
            View All
          </button>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="task-1"
            />

            <label className="form-check-label" htmlFor="task-1">
              Complete React assignment
            </label>
          </li>

          <li className="list-group-item px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="task-2"
            />

            <label className="form-check-label" htmlFor="task-2">
              Push Atlas updates to GitHub
            </label>
          </li>

          <li className="list-group-item px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="task-3"
            />

            <label className="form-check-label" htmlFor="task-3">
              Review Bootstrap utilities
            </label>
          </li>

          <li className="list-group-item px-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="task-4"
            />

            <label className="form-check-label" htmlFor="task-4">
              Plan tomorrow's priorities
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}