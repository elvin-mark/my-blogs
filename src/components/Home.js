import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import BlogsList from "./BlogsList";
import Blog from "./Blog";
import "./Home.css";

function Home({ blogsDLML, blogsPhysics, blogsMath }) {
  return (
    <div>
      <div className="header">
        <h1 className="blog-title">Welcome to my Blog!</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/dl-ml">DL/ML</Link>
          </li>
          <li>
            <Link to="/physics">Physics</Link>
          </li>
          <li>
            <Link to="/math">Math</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route
            key={"blogs-list-home"}
            exact
            path="/"
            element={<BlogsList blogsDesc={blogsDLML} />}
          />
          <Route
            key={"blogs-list-dl-ml"}
            path="/dl-ml"
            element={<BlogsList blogsDesc={blogsDLML} />}
          />
          <Route
            key={"blogs-list-physics"}
            path="/physics"
            element={<BlogsList blogsDesc={blogsPhysics} />}
          />
          <Route
            key={"blogs-list-math"}
            path="/math"
            element={<BlogsList blogsDesc={blogsMath} />}
          />
          {blogsDLML.map((blogDesc, index) => (
            <Route
              key={`dl-ml-${index}`}
              path={`/dl-ml/${blogDesc.id}`}
              element={<Blog url={blogDesc.url} />}
            />
          ))}
          {blogsPhysics.map((blogDesc, index) => (
            <Route
              key={`physics-${index}`}
              path={`/physics/${blogDesc.id}`}
              element={<Blog url={blogDesc.url} />}
            />
          ))}
          {blogsMath.map((blogDesc, index) => (
            <Route
              key={`math-${index}`}
              path={`/math/${blogDesc.id}`}
              element={<Blog url={blogDesc.url} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Home;
