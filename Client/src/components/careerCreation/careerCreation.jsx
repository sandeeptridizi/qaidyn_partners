import { useState } from "react";
import "./careerCreation.css";
import { database, ref, push, set } from ".././Firebase/firebase";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ShortDiscription: "",
    JobDiscription: null,
    Requirements: null,
    Location: "",
    Type: "",
    Qualification: "",
    PostDate: "",
    JobTitle: "",
    Category: "",
    FieldOfJob: "",
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [requirementsEditor, setRequirementsEditor] = useState(
    EditorState.createEmpty()
  );

  const removeStyleFromHtml = (html) => {
    return html.replace(/ style="[^"]*"/g, "");
  };

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setFormData((prev) => ({
      ...prev,
      JobDiscription: removeStyleFromHtml(htmlContent),
    }));
  };

  const onEditorRequirementStateChange = (newEditorState) => {
    setRequirementsEditor(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setFormData((prev) => ({
      ...prev,
      Requirements: removeStyleFromHtml(htmlContent),
    }));
  };

  const formHandlerOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const careerRef = ref(database, "careers");
      const newCareerRef = push(careerRef);
      await set(newCareerRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      toast.success("Career post created successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/managecareers");
      }, 2000);
      cancelHandler();
    } catch (error) {
      console.error("Error saving career:", error);
      toast.error("An error occurred while saving the career.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const cancelHandler = () => {
    setFormData({
      ShortDiscription: "",
      JobDiscription: "",
      Requirements: "",
      Location: "",
      Type: "",
      Qualification: "",
      PostDate: "",
      JobTitle: "",
      Category: "",
      FieldOfJob: "",
    });
    setEditorState(EditorState.createEmpty());
    setRequirementsEditor(EditorState.createEmpty());
  };

  return (
    <div className="career_creation_container">
      <div className="career_details_sub">
        <h1>Career Creation</h1>
        <form className="career_creation_form" onSubmit={handleSubmit}>
          <div className="career_creation_form_container">
            <div className="input_container">
              {/* <div className="input_container"> */}
              <label htmlFor="JobTitle" className="career_labels">
                Title
              </label>
              <input
                type="text"
                id="JobTitle"
                name="JobTitle"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.JobTitle}
                placeholder="Enter Job Title"
              />
              {/* </div> */}

              <label htmlFor="Type" className="career_labels">
                Job Type
              </label>
              <select
                name="Type"
                id="Type"
                onChange={formHandlerOnChange}
                value={formData.Type}
                className="career_input"
              >
                <option value="" className="placeholders" disabled hidden>
                  Select Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                 <option value="Freelance">Freelance</option>
              </select>
            </div>

            <div className="input_container">
              <label htmlFor="FieldOfJob" className="career_labels">
                Deportment
              </label>
              <input
                type="text"
                id="FieldOfJob"
                name="FieldOfJob"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.FieldOfJob}
                placeholder="Enter Deportment"
              />

              <label htmlFor="Category" className="career_labels">
                Job Category
              </label>
              <select
                name="Category"
                id="Category"
                onChange={formHandlerOnChange}
                value={formData.Category}
                className="career_input"
              >
                <option value="" disabled hidden>
                  Select Job Category
                </option>
                <option value="Our">Our</option>
                <option value="Clients">Clients</option>
              </select>
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="Qualification" className="career_labels">
                Qualification
              </label>
              <input
                type="text"
                id="Qualification"
                name="Qualification"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.Qualification}
                placeholder="Enter Job Qualification"
              />
            </div>

            <div className="input_container">
              <label htmlFor="PostDate" className="career_labels">
                Posted Date
              </label>
              <input
                type="date"
                id="PostDate"
                name="PostDate"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.PostDate}
              />
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="Location" className="career_labels">
                Location
              </label>
              <input
                type="text"
                id="Location"
                name="Location"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.Location}
                placeholder="Enter Location"
              />
            </div>

            <div className="input_container">
              <label htmlFor="ShortDiscription" className="career_labels">
                Title Description
              </label>
              <input
                type="text"
                id="ShortDiscription"
                name="ShortDiscription"
                className="career_input"
                onChange={formHandlerOnChange}
                value={formData.ShortDiscription}
                placeholder="Enter Job Title Description"
              />
            </div>
          </div>

          <div className="career_creation_form_container">
            <div className="input_container">
              <label htmlFor="JobDiscription" className="career_labels">
                Job Description
              </label>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                placeholder="Enter Job Description"
                toolbar={{
                  options: ["inline", "list"],
                  inline: { options: ["bold", "italic", "underline"] },
                  list: { options: ["unordered", "ordered"] },
                }}
              />
            </div>

            <div className="input_container">
              <label htmlFor="Requirements" className="career_labels">
                Requirements
              </label>
              <Editor
                editorState={requirementsEditor}
                onEditorStateChange={onEditorRequirementStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                placeholder="Enter Job Requirements"
                toolbar={{
                  options: ["inline", "list"],
                  inline: { options: ["bold", "italic", "underline"] },
                  list: { options: ["unordered", "ordered"] },
                }}
              />
            </div>
          </div>

          <div className="career_creation_button_container">
            <button className="create_career_button" type="submit">
              Create
            </button>
            <button
              className="cancel_career_button"
              type="button"
              onClick={cancelHandler}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CareerCreation;
