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
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row pt-1 h-full w-full">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 bg-white border-r">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex flex-col py-2  space-y-6 overflow-y-auto ">
          <Main />
          <Tail />
        </main>
      </div>
    </div>
  );
}
