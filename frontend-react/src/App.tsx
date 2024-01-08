import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Page404 from './pages/Page404';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
