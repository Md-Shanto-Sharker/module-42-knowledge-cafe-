import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="h-56 w-full" src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h2>{blog.author}</h2>
            <img className="w-16" src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex justify-around">
            {blog.hashtags.map((has, index) => (
              <h1 key={index} has={has}>
                {has}
              </h1>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
