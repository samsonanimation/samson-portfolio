import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import VoiceDirecting from "./pages/VoiceDirecting";
import VoiceActing from "./pages/VoiceActing";
import DevelopmentSlate from "./pages/DevelopmentSlate";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="voice-directing" element={<VoiceDirecting />} />
          <Route path="voice-acting" element={<VoiceActing />} />
          <Route path="development-slate" element={<DevelopmentSlate />} />
          <Route path="writing" element={<Writing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
