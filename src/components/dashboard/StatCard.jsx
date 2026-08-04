export default function StatCard({ title, value }) {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <p className="text-muted mb-2">{title}</p>
          <h2 className="mb-0">{value}</h2>
        </div>
      </div>
    </div>
  );
}