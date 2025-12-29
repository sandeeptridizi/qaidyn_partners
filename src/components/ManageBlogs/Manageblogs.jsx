import React, { useEffect, useState } from "react";
import "./ManageBlogs.css";
import { database, ref, get, remove } from ".././Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import parse from "html-react-parser";
// import { Button } from "../Button/Button";

export const Manageblogs = () => {
  const [Blogs, setBlogs] = useState([]);
  console.log(Blogs, "blogsss");
  const [openPopupId, setOpenPopupId] = useState(null); // For tracking which popup is open
  const navigate = useNavigate();

  const formatDate = (isoDateString) => {
    if (!isoDateString) return "";
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-GB");
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRef = ref(database, "blogs");

      try {
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const blogList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            imageUrl: data[key].image_url || "",
          }));
          setBlogs(blogList);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleSingleBlog = (ev, id) => {
    const cleanPath = id.replaceAll(" ", "-");
    navigate(`/blog/${cleanPath}`, { state: ev });
  };

  const handleEdit = (data) => {
    navigate("/blog-updation", { state: data }); // pass data to edit page
  };

  const handleDelete = async (id) => {
    try {
      await remove(ref(database, `blogs/${id}`));
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
      // alert("Blog deleted successfully.");
      toast.success("Blog deleted successfully!.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
      // alert("Failed to delete blog.");
      toast.error("Failed to delete blog", {
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
    <div className="blog_page_layer1">
      <h1 className="CreateBlogPage" onClick={() => navigate("/createBlog")}>
        Create Blog
      </h1>
      {/* <div className="CreateBlogPage" onClick={() => navigate("/createBlog")}>
        <Button
          name="Create Blog"
          type="submit"
          paddingXL="8.6vw"
          paddingXM="24.5vw"
          widthL="11.05vw"
          widthM="30.3vw"
          bacgrounClr="#022447"
          bacgrounArrow="#ffffff"
          colorArrow="#022447"
          colorText="#ffffff"
          colorTextHover="#022447"
        />
      </div> */}

      <div className="blog_card_outer">
        {Blogs.map((data) => (
          <div className="blog_card" key={data.id}>
            {/* Three Dots Menu */}
            <div
              className="ThreeDots_Icon"
              onClick={() =>
                setOpenPopupId(openPopupId === data.id ? null : data.id)
              }
            >
              <HiDotsVertical />

              {openPopupId === data.id && (
                <div className="popup_menu">
                  <p onClick={() => handleEdit(data)}>Edit</p>
                  <p onClick={() => handleDelete(data.id)}>Delete</p>
                </div>
              )}
            </div>

            {/* Card Image */}
            <img src={data.imageUrl} alt="" className="blog_img" />

            {/* Card Text */}
            <div className="blog_content">
              <div>
                <p className="blog_content_heading">{data?.title}</p>
                <p className="blog_content_date">
                  {formatDate(data?.created_at)}
                </p>
                {/* <p>{data.blog_content}</p> */}
                {/* <div dangerouslySetInnerHTML={{ __html: data.blog_content }} /> */}

                <div
                  style={{
                    maxHeight: "10vw",
                    height: "10vw",
                    overflowY: "scroll",
                  }}
                >
                  {parse(data.blog_content)}
                </div>
              </div>

              {/* <p
          className="blog_content_right_text"
          onClick={() => handleSingleBlog(data, data?.content)}
        >
          Know More
        </p> */}
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};
