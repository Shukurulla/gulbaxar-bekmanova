import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Post from "./pages/Post"
import Login from "./pages/Login"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import PageNotFound from "./pages/PageNotFound"
import AdminLayout from "./layout/AdminLayout"
import RootLayout from "./layout/RootLayout"
import BlogsManager from "./pages/admin/BlogsManager"
import MyProjects from "./pages/MyProjects"
import CreatePost from "./pages/admin/CreatePost"
import EditPost from "./pages/admin/EditPost"
import AboutMe from "./pages/AboutMe"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post/:id" element={<Post />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="my-projects" element={<MyProjects />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>

        {/* <Route path="admin" element={<AdminLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<BlogsManager />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="edit-post/:id" element={<EditPost />} />
          </Route>
        </Route> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App