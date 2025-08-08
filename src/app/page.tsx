'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/loading';

import Sidebar from './components/layout/sidebar';
import Main from './components/layout/main';
import Tail from './components/Transactions/HomeTable';

export default function FullLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 bg-white border-r min-h-screen">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 space-y-6">
          <Main />
          <Tail />
        </main>
      </div>
    </div>
  );
}
