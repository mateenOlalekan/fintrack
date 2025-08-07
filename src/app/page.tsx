'use client';
import LoadingScreen from './components/loading';
import {useState,useEffect} from 'react';

import Sidebar from './components/layout/sidebar';
import Main from './components/layout/main';
import Tail from './components/Transactions/HomeTable';

export default function FullLayout() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    if (isLoading) {
        return <LoadingScreen />;
    }
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 hidden md:block ">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-y-auto">
        <div className="p-4 space-y-6">
          <Main />
          <Tail />
        </div>
      </main>
    </div>
  );
}
