'use client';

import { useEffect, useState } from 'react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      title="Go to top"
      className="fixed bottom-2 right-0 bg-accent mb-4 mr-4 rounded-lg hover:bg-brownLight transition-all duration-300 ease-in-out z-50">
      <button
        className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
        onClick={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
