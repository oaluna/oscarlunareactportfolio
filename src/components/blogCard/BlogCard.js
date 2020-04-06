import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div class="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            <a href={blog.url} target="_" className="button" onClick="{()=> e.preventDefault();}">
            Coming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
