import React, { createContext, useContext, useState, useEffect } from "react";
import "./EditMode.css";
const EditModeContext = createContext();

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(() => {
    const stored = localStorage.getItem("edit_mode");
    return stored === "true";
  });

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("edit_mode", isEditMode);
  }, [isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      document.body.classList.add("edit-mode-active");
    } else {
      document.body.classList.remove("edit-mode-active");
    }
  }, [isEditMode]);

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => useContext(EditModeContext);
