
'use client';
import Image from "next/image";
import Icon from "../../../public/Fin/Icon.png";
import Fintrack from "../../../public/Fin/FinTrack.png";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center space-y-2 animate-pulse">
          <Image
            src={Icon}
            alt="FinTrack Icon"
            width={60}
            height={60}
            className="rounded-xl"
            priority
          />
          <Image
            src={Fintrack}
            alt="FinTrack Text Logo"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">FinTrack</h1>
          <p className="text-gray-600 text-sm">Loading your financial dashboard...</p>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-1 bg-blue-600 animate-progress rounded-full"
          ></div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 20%;
          }
          50% {
            width: 80%;
          }
          100% {
            width: 60%;
          }
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
