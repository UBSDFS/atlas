import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../../pages/Dashboard";

export default function AppLayout() {
    return (
        <>
            <Sidebar />
            <Header />
            <Dashboard />
        </>
    );
}