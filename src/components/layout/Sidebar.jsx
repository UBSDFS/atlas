export default function Sidebar() {
    return (
        <aside className="bg-dark text-white p-4" style={{ width: '240px' }}>
            <h2 className="h4 mb-4">Atlas</h2>

            <nav>
                <ul className="nav flex-column gap-2">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className="bi bi-speedometer2 me-2"></i>
                            Dashboard
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className="bi bi-check2-square me-2"></i>
                            Tasks
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className="bi bi-calendar3 me-2"></i>
                            Calendar
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className="bi bi-bullseye me-2"></i>
                            Goals
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}