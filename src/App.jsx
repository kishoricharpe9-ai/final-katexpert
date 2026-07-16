import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "@/components/site/site-layout";
import HomePage from "@/pages/HomePage";
import CatResourcesPage from "@/pages/CatResourcesPage";
import IpmatResourcesPage from "@/pages/IpmatResourcesPage";
import AboutPage from "@/pages/AboutPage";
import CoursesPage from "@/pages/CoursesPage";
import ContactPage from "@/pages/ContactPage";
import PyqsPage from "@/pages/PyqsPage";
import BlogPage from "@/pages/BlogPage";
import MbaCetPage from "@/pages/MbaCetPage";
import McaCetPage from "@/pages/McaCetPage";
import CurriculumPage from "@/pages/CurriculumPage";
import PremiumCoursePage from "@/pages/PremiumCoursePage";
import VisualGalleryPage from "@/pages/VisualGalleryPage";
import VideoTestimonialsPage from "@/pages/VideoTestimonialsPage";
import NewsEventsPage from "@/pages/NewsEventsPage";
import GdpiPage from "@/pages/GdpiPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:slug" element={<PremiumCoursePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cat" element={<CatResourcesPage />} />
          <Route path="ipmat" element={<IpmatResourcesPage />} />
          <Route path="resources/cat" element={<CatResourcesPage />} />
          <Route path="resources/ipmat" element={<IpmatResourcesPage />} />
          <Route path="resources/gd-pi" element={<GdpiPage />} />
          <Route path="pyqs" element={<PyqsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="mba-cet" element={<MbaCetPage />} />
          <Route path="mca-cet" element={<McaCetPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="visual-gallery" element={<VisualGalleryPage />} />
          <Route path="testimonials" element={<VideoTestimonialsPage />} />
          <Route path="news-events" element={<NewsEventsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
