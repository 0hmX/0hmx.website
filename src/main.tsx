import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import HeroSection from './components/HeroSection.tsx';
import HeroImage from './components/HeroImage.tsx';
import Biography from './components/Biography.tsx';
import SkeletonBlogCard from './components/SkeletonBlogCard.tsx';
import SkeletonFeaturedPost from './components/SkeletonFeaturedPost.tsx';
import Skeleton from './components/Skeleton.tsx';
import { DebugProvider } from './context/DebugContext';
import './index.css';

const LazyBlogPage = lazy(() => import('./components/BlogPage.tsx'));
const LazyBlogPostDetail = lazy(() => import('./components/BlogPostDetail.tsx'));
const LazyContactPage = lazy(() => import('./components/ContactPage.tsx'));
const LazyQuizPage = lazy(() => import('./components/QuizPage.tsx'));
const LazyPortfolioPage = lazy(() => import('./components/PortfolioPage.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <DebugProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route
                index
                element={
                  <>
                    <HeroSection />
                    <HeroImage />
                    <Biography />
                  </>
                }
              />
              <Route
                path="blogs"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen min-w-screen">
                        <SkeletonFeaturedPost />
                      </div>
                    }
                  >
                    <LazyBlogPage />
                  </Suspense>
                }
              />
              <Route
                path="blogs/:id"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen min-w-screen">
                        <SkeletonBlogCard />
                      </div>
                    }
                  >
                    <LazyBlogPostDetail />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen min-w-screen">
                        <LazyBlogPostDetail />
                      </div>
                    }
                  >
                    <LazyContactPage />
                  </Suspense>
                }
              />
              <Route
                path="quizzes"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen min-w-screen">
                        <Skeleton />
                      </div>
                    }
                  >
                    <LazyQuizPage />
                  </Suspense>
                }
              />
              <Route
                path="portfolio"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen min-w-screen">
                        <Skeleton />
                      </div>
                    }
                  >
                    <LazyPortfolioPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </Router>
      </DebugProvider>
    </ErrorBoundary>
  </StrictMode>,
);
