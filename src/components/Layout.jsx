import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import FloatingCall from './FloatingCall';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function Layout() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-coral focus:text-forest focus:font-bold focus:rounded-full focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-mist text-text flex flex-col font-body selection:bg-coral selection:text-forest">
          <Header />
          <main id="main-content" role="main" className="flex-1 w-full pt-20">
            <motion.div
              key={location.pathname}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </main>
          <Footer />
          <FloatingCall />
        </div>
      </MotionConfig>
    </HelmetProvider>
  );
}
