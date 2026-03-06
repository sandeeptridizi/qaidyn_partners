import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
// import { Button } from "../Button/Button";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("managewebsite");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h2>Welcome to Admin Panel</h2>
        <div className="dashboard-buttons">
          <button
            onClick={() => navigate("/")}
            className="btn dashboard-btn"
          >
            Go to Website
          </button>
          <button
            onClick={() => navigate("/blogs")}
            className="btn dashboard-btn"
          >
            View Blogs
          </button>
          <button
            onClick={() => navigate("/manageblogs")}
            className="btn dashboard-btn"
          >
            Edit / Manage Blogs
          </button>
          <button
            onClick={() => navigate("/careers")}
            className="btn dashboard-btn"
          >
            View Careers
          </button>
          <button
            onClick={() => navigate("/managecareers")}
            className="btn dashboard-btn"
          >
            Edit / Manage Careers
          </button>
          <button onClick={handleLogout} className="btn logout-btn">
            Sign Out
          </button>
          {/* <div  onClick={handleLogout} className="btn logout-btn">
                    <Button
                        name="Sign Out"
                        type="submit"
                        paddingXL="7.1vw"
                        paddingXM="18.5vw"
                        widthL="9.65vw"
                        widthM="39.3vw"
                        bacgrounClr="#ffff"
                        bacgrounArrow="#022447"
                        colorArrow="#ffff"
                        colorText="#022447"
                        colorTextHover="#fff"/>
        
          </div> */}
</div>
      </div>
    </div>
  );
};

export default Dashboard;
