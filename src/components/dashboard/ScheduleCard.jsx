export default function ScheduleCard() {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 mb-3">Today's Schedule</h2>

        <div className="d-flex gap-3 border-bottom py-3">
          <p className="fw-semibold mb-0">9:00 AM</p>

          <div>
            <p className="fw-semibold mb-1">Study React</p>
            <p className="text-muted small mb-0">
              Interface Design coursework
            </p>
          </div>
        </div>

        <div className="d-flex gap-3 border-bottom py-3">
          <p className="fw-semibold mb-0">11:00 AM</p>

          <div>
            <p className="fw-semibold mb-1">Gym</p>
            <p className="text-muted small mb-0">
              Strength training
            </p>
          </div>
        </div>

        <div className="d-flex gap-3 border-bottom py-3">
          <p className="fw-semibold mb-0">2:00 PM</p>

          <div>
            <p className="fw-semibold mb-1">Client Work</p>
            <p className="text-muted small mb-0">
              WordPress website
            </p>
          </div>
        </div>

        <div className="d-flex gap-3 pt-3">
          <p className="fw-semibold mb-0">7:00 PM</p>

          <div>
            <p className="fw-semibold mb-1">Family Time</p>
            <p className="text-muted small mb-0">
              Dinner and unwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}