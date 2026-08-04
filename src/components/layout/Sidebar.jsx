export default function Sidebar() {
  return (
    <aside className="bg-dark text-white p-4" style={{ width: '240px' }}>
      <h2 className="h4 mb-4">Atlas</h2>

      <nav>
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Dashboard
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Tasks
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Calendar
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Goals
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}