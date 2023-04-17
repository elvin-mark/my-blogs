import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

function App() {
  const [blogsDLML, setBlogsDLML] = useState([]);
  const [blogsPhysics, setBlogsPhysics] = useState([]);
  const [blogsMath, setBlogsMath] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/elvin-mark/my-blogs/main/data/info.json"
      )
      .then((e) => {
        setBlogsDLML(e.data.blogsDLML);
        setBlogsMath(e.data.blogsMath);
        setBlogsPhysics(e.data.blogsPhysics);
      });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Home
          blogsDLML={blogsDLML}
          blogsMath={blogsPhysics}
          blogsPhysics={blogsMath}
        ></Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
