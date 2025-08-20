import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import BlogPost from "./blog/post.tsx";
import Blog from "./blog";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App/>}/>
              <Route path={"*"} element={<App/>}/>
              <Route path={"/blog/:postId"} element={<BlogPost/>}/>
              <Route path={"/blog"} element={<Blog/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
