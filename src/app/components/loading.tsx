'use client';
import Image from "next/image";
import Icon from "../../../public/Fin/Icon.png";
import Fintrack from "../../../public/Fin/FinTrack.png";
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
    <div className="text-center">
      {/* FinTrack Logo with Animation */}
      <div className="mb-8">
        <div className="rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 animate-pulse">
            <Image src={Icon} alt="FinTrack Logo"/>
          <Image src={Fintrack} alt="FinTrack Logo"/>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">FinTrack</h1>
        <p className="text-gray-600 text-sm">Loading your financial dashboard...</p>
      </div>

      {/* Loading Animation */}
      <div className="flex items-center justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-1 mx-auto">
        <div className="bg-blue-600 h-1 rounded-full animate-pulse" style={{ width: '60%', animation: 'loading 2s ease-in-out infinite' }}></div>
      </div>


    </div>

    <style jsx>{`
      @keyframes loading {
        0% { width: 20%; }
        50% { width: 80%; }
        100% { width: 60%; }
      }
    `}</style>
  </div>
  );
}
