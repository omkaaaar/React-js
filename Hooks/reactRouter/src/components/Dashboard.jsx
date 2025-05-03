import { Outlet } from "react-router-dom";
import "./navbar.css";
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;
