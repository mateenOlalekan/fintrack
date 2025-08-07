'use client';

import { useTransactionContext } from '../../context/TransactionContext';
import TableHeader from './TableHeader';
import TransactionRow from './TransactionRow';

export default function TransactionTable() {
  const { transactions } = useTransactionContext();

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y ">
        <TableHeader />
        <tbody className="bg-white divide-y ">
          {transactions.map((transaction, index) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              isLast={index === transactions.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
