export default function Header() {
  return (
    <header className="border-bottom bg-white px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h4 mb-1">Dashboard</h1>
          <p className="text-muted mb-0">
            Welcome back. Here is your daily overview.
          </p>
        </div>

        <button className="btn btn-outline-secondary">
          <i className="bi bi-person-circle me-2"></i>
          Profile
        </button>
      </div>
    </header>
  );
}