import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import {
  storage,
  ref,
  update,
  storageRef,
  uploadBytes,
  getDownloadURL,
  database,
} from ".././Firebase/firebase";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [DepartmentOfblog, setDepartmentOfblog] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const location = useLocation();
  const blogData = location.state || {};
  const blogId = blogData.id;
  const navigate = useNavigate()

  useEffect(() => {
    if (blogData) {
      setTitle(blogData.title || "");
      // setContent(blogData.content || "");
      setAuthorName(blogData.author_name || "");
      setDepartmentOfblog(blogData.DepartmentOfblog || "");
      setBlogContent(blogData.blog_content || "");
      setPreview(blogData.image_url || "");

      if (blogData.blog_content) {
        const contentBlock = htmlToDraft(blogData.blog_content);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
          );
          setEditorState(EditorState.createWithContent(contentState));
        }
      }
    }
  }, [blogData]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    const cleanedHtml = htmlContent.replace(/style="[^"]*"/g, "");
    setBlogContent(cleanedHtml);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !blogId) return;
    setIsSubmitting(true);

    try {
      let imageUrl = preview;

      if (image) {
        const imageRef = storageRef(
          storage,
          `blogs/${Date.now()}-${image.name}`
        );
        const uploadTask = await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(uploadTask.ref);
      }

      const updatedBlogData = {
        title,
        // content,
        DepartmentOfblog,
        image_url: imageUrl,
        blog_content: blogContent,
        author_name: authorName,
        updated_at: new Date().toISOString(),
      };

      await update(ref(database, `blogs/${blogId}`), updatedBlogData);
    
      toast.success("Blog updated successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/manageblogs");
      }, 2000);
    } catch (err) {
      console.error("Error updating blog:", err);
      // alert("An error occurred while updating the blog.");
      toast.error("An error occurred while updating the blog.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blog_creation_page">
      <div className="blog_page_main_container">
        <div className="blog-container">
          <form className="blog-form" onSubmit={handleSubmit}>
            <h2>Update Blog</h2>

            <div className="blog-form-group">
              <div className="blog-form-group-input">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="blog-form-group-input">
                <label htmlFor="authorName">Author Name</label>
                <input
                  id="authorName"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>
            </div>

            <div className="blog-form-group">
              <div className="blog-form-group-input">
                <label htmlFor="DepartName">Category Name</label>
                <input
                  id="DepartName"
                  type="text"
                  value={DepartmentOfblog}
                  onChange={(e) => setDepartmentOfblog(e.target.value)}
                />
              </div>

              {/* <div className="blog-form-group-input">
                <label htmlFor="content">Description</label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="6"
                  required
                />
              </div> */}
            </div>

            <div>
              <label htmlFor="blogContent">Blog Content</label>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class-1"
                editorClassName="editor-clas-1"
                toolbarClassName="toolbar-class"
                toolbar={{
                  options: ["inline", "list", "link"],
                  inline: { options: ["bold", "italic", "underline"] },
                  list: { options: ["unordered", "ordered"] },
                }}
              />
            </div>

            <label htmlFor="image" className="upload_container">
              <AiOutlineCloudUpload className="Upload_img_icon" />
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <span className="red_alter">Only images upto 5MB are allowed.</span>
            <span className="red_alter2">Note: Image size should be 1280 px X 640 px</span>
            
            {preview && (
              <img src={preview} alt="Preview" className="preview-img" />
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Blog"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
