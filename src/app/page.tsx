
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
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 border-r border-white">
        <Sidebar />
      </aside>

      {/* Main Content with scroll */}
      <main className="flex-1 h-full overflow-y-auto space-y-6  custom-scroll">
        <Main />
        <Tail />
      </main>
    </div>
  );
}
