'use client'
import React, { useState, useMemo } from 'react';
import {MoreHorizontal, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfilePic from "../../../../public/Fin/Profile pictures.png";
import { BsDot } from "react-icons/bs";




interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}


const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10
};

const FinTrackDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');
  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value}%`;
  };

  return (
    <div className="">
        <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2 max-md:space-x-1 ">
                      <h1 className="text-2xl max-md:text-lg sm:text-2xl font-bold text-gray-900">Wallet Ledger</h1>
                      <div className="flex items-center justify-between px-2 py-1 gap-2 max-md:gap-1 bg-green-100 text-green-800 rounded-full w-fit">
                        <div className='w-1 h-1 rounded-full bg-green-800'></div>
                        <span className="text-xs font-medium">Active</span>
                      </div>
                    </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-1 bg-[#4B8B9F] lg:text-[15px] max-md:text-[13px] max-sm:text-[12px] text-[#020303] rounded-full font-medium hover:bg-[#3a6e7f] transition-colors">
                      Share
                    </button>
                    <button className="p-2 max-md:p-1 text-[#1B2528] border-2 border-[#49656E] rounded-full hover:bg-gray-100 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
            <Image
                src={ProfilePic}
                alt="User profile picture"
                width={100}
                height={100}
                className="rounded-full object-cover"
                />
              <span className="text-sm text-gray-600">Ava, Liam, Noah +12 others</span>
            </div>


        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === 'overview'
                ? 'border-[#49656E] text-[#437D8E]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ml-8 ${
              activeTab === 'transactions'
                ? 'border-[#49656E] text-[#437D8E]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Transactions
          </button>
        </div>


        <div className="mb-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EAF0F0] p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Balance</span>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                ${dashboardSummary.totalBalance.toLocaleString()}
              </div>
              <div className="text-sm text-green-600 font-medium">
                {formatPercentage(dashboardSummary.balanceChange)}
              </div>
            </div>


            <div className="bg-[#EAF0F0] p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Credits</span>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                ${dashboardSummary.totalCredits.toLocaleString()}
              </div>
              <div className="text-sm text-green-600 font-medium">
                {formatPercentage(dashboardSummary.creditsChange)}
              </div>
            </div>

            <div className="bg-[#EAF0F0] p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Debits</span>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                ${dashboardSummary.totalDebits.toLocaleString()}
              </div>
              <div className="text-sm text-green-600 font-medium">
                {formatPercentage(dashboardSummary.debitsChange)}
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-[#EAF0F0] p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Transactions</span>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {dashboardSummary.transactionCount}
              </div>
              <div className="text-sm text-green-600 font-medium">
                {formatPercentage(dashboardSummary.transactionChange)}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FinTrackDashboard;
