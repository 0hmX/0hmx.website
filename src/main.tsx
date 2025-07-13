import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import HeroSection from './components/HeroSection.tsx';
import HeroImage from './components/HeroImage.tsx';
import Biography from './components/Biography.tsx';
import CallToAction from './components/CallToAction.tsx';
import './index.css';

const LazyBlogPage = lazy(() => import('./components/BlogPage.tsx'));
const LazyBlogPostDetail = lazy(() => import('./components/BlogPostDetail.tsx'));
const LazyContactPage = lazy(() => import('./components/ContactPage.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
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
            <Route path="blogs" element={
              <Suspense fallback={<div>Loading Blog Page...</div>}>
                <LazyBlogPage />
              </Suspense>
            } />
            <Route path="blogs/:id" element={
              <Suspense fallback={<div>Loading Blog Post...</div>}>
                <LazyBlogPostDetail />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<div>Loading Contact Page...</div>}>
                <LazyContactPage />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>
);
