import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../action";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getblogs());
    }, [dispatch]);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    return (
        <div>
            <div className="pb-[450px] 3xl:pb-48 md:pb-64">

                {/* Banner Section */}
                <div
                    className="w-full text-center py-16 px-6 "
                    style={{
                        backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/04/30/10/49/1000_F_430104934_XkWgamRumD1A6nnEWE9YnIwV3xYagY24.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <h2 className="text-4xl font-bold md:pt-10 lg:pt-16">Welcome to Our Blog</h2>
                    <p className="text-2xl mt-2 font-semibold pt-4 md:pb-10 lg:pb-16">
                        Stay updated with the latest news, insights, and stories from our programs and wildlife initiatives.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:p-10">
                    {currentBlogs.map((blog) => (
                        <div key={blog.number} className="rounded-xl hover:bg-gray-100 px-10 py-4 h-fit flex justify-center text-center">
                            <Link to={`/blog/${blog.number}/${blog.BlogTitle}`}>
                                <img src={blog.imageURL} alt="" />
                                <p className="text-lg font-semibold  flex justify-center">Focus : <br />{blog.FocusArea}</p>
                                <p className="text-2xl font-bold flex flex-row gap-10 mt-4 flex justify-center" data-testid="blogName">
                                    {blog.BlogTitle}   <FaArrowRight /></p>

                            </Link>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center space-x-2 mt-6">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                        >
                            <MdKeyboardArrowRight className="rotate-180" />
                        </button>

                        <button className="px-3 py-2 border rounded bg-white">{currentPage}</button>

                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                        >
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;