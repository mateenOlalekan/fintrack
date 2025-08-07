'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { Transaction } from '../types/transaction';
import { transactions as initialData } from '../data/transaction';

type SortKey = keyof Pick<Transaction, 'date' | 'remark' | 'amount'>;
type SortOrder = 'asc' | 'desc';

interface TransactionContextType {
  transactions: Transaction[];
  sortKey: SortKey;
  sortOrder: SortOrder;
  sortBy: (key: SortKey) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortBy = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedTransactions = useMemo(() => {
    return [...initialData].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];

      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }

      return sortOrder === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [sortKey, sortOrder]);

  const value: TransactionContextType = {
    transactions: sortedTransactions,
    sortKey,
    sortOrder,
    sortBy,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

// Correctly named hook
export const useTransactionContext = () => {
  const ctx = useContext(TransactionContext);
  if (!ctx) throw new Error('TransactionContext must be used within a Provider');
  return ctx;
};
