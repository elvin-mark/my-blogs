import React from "react";
import Card from "./Card";
import "./BlogsList.css";
import { Link } from "react-router-dom";

function BlogsList({ blogsDesc }) {
  return (
    <div className="grid-blogs">
      {blogsDesc.map((blogDesc, index) => (
        <Link
          key={index}
          to={`${blogDesc.id}`}
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Card
            key={index}
            image={blogDesc.image}
            title={blogDesc.title}
            description={blogDesc.description}
          ></Card>
        </Link>
      ))}
    </div>
  );
}

export default BlogsList;
