import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home.jsx";   // 폴더명 소문자까지 맞춤
import Login from "../../pages/login/Login.jsx"; // 폴더명 소문자까지 맞춤

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
