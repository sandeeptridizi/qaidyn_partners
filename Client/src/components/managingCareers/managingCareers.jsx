import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import "./managingCareers.css";
import { database, ref, get, remove } from ".././Firebase/firebase";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Button } from "../Button/Button";

const SmallCard = () => {
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareers = async () => {
      const careersRef = ref(database, "careers");
      try {
        const snapshot = await get(careersRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const careerList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setCareers(careerList);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCareers();
  }, []);

  const handleEdit = (data) => {
    navigate("/career-update", { state: data });
  };

  const handleDelete = async (id) => {
    try {
      // Attempt to delete the career from Firebase
      await remove(ref(database, `careers/${id}`));

      // Update the state to remove the deleted career
      setCareers((prev) => prev.filter((career) => career.id !== id));

      // Show success toast
      toast.success("Career deleted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      // Log the error for debugging
      console.error("Error deleting career:", error);

      // Show error toast
      toast.error("Failed to delete career. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="small-main-container">
      {/* <div className="sub-container-small"  onClick={() => {
            navigate("/createCareer");
          }}> */}
        <button
        className="sub-container-small"
          onClick={() => {
            navigate("/createCareer");
          }}
        >
          Create Career
        </button>
                {/* <Button
                  name="Create Career"
                  type="submit"
                  paddingXL="8.6vw"
                  paddingXM="24.5vw"
                  widthL="12.1vw"
                  widthM="30.3vw"
                  bacgrounClr="#022447"
                  bacgrounArrow="#ffffff"
                  colorArrow="#022447"
                  colorText="#ffffff"
                  colorTextHover="#022447"
                /> */}
      {/* </div> */}

      <div className="small-card_container">
        {/* Add ToastContainer to render toasts */}
        <ToastContainer />

        {careers.map((career) => (
          <div className="card-container" key={career.id}>
            <div className="card-header">
              <div className="card-header-text">
                <h3 className="card-title">{career?.JobTitle}</h3>
                <p className="card-subtitle">Business Management</p>
              </div>
              <div className="card-menu-wrapper">
                <HiDotsVertical
                  className="card-menu-icon"
                  onClick={() =>
                    setMenuOpenId(menuOpenId === career.id ? null : career.id)
                  }
                />
                {menuOpenId === career.id && (
                  <div className="card-dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => handleEdit(career)}
                    >
                      Edit
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDelete(career.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card-content-box">
              {parse(career?.ShortDiscription || "")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
