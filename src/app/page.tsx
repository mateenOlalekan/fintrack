'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/loading';

import Sidebar from './components/layout/sidebar';
import Main from './components/layout/main';
import Tail from './components/Transactions/HomeTable';
import Header from './components/layout/header';

export default function FullLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen ">


      <div className="flex pt-1 h-full">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 lg:w-1/5 xl:w-1/6 bg-white">
          <Sidebar />
        </aside>

        {/* Main scrollable content */}
        <main className="flex-1   p-4 max-md:p-2 space-y-6">
  <Main />
  <Tail />
</main>


      </div>
    </div>
  );
}
