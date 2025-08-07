'use client';

import { TransactionProvider } from '../../context/TransactionContext';
// import TransactionTable from '../components/transactions/TransactionTable';
import TransactionTable from "../../components/Transactions/TransactionTable";
export default function Home() {
  return (
    <TransactionProvider>
      <main className="bg-gray-50 min-h-screen">
        <div className="w-full mx-auto">
          <TransactionTable />
        </div>
      </main>
    </TransactionProvider>
  );
}
