import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import BlogPage from './components/BlogPage.tsx';
import BlogPostDetail from './components/BlogPostDetail.tsx';
import ContactPage from './components/ContactPage.tsx';
import HeroSection from './components/HeroSection.tsx';
import HeroImage from './components/HeroImage.tsx';
import Biography from './components/Biography.tsx';
import CallToAction from './components/CallToAction.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={
            <>
              <HeroSection />
              <HeroImage />
              <Biography />
              <CallToAction />
            </>
          } />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:id" element={<BlogPostDetail />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
