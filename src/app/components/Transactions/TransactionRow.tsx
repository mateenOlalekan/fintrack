'use client';

import { Transaction } from '../../types/transaction';

interface Props {
  transaction: Transaction;
  isLast: boolean;
}

export default function TransactionRow({ transaction, isLast }: Props) {
  return (
    <tr className={!isLast ? 'border-b-2 border-[#EAF0F0] text-sm' : ''}>
      <td className="p-3 w-[60%] whitespace-nowrap">{transaction.date}</td>

      <td className="p-3 w-[15%]">{transaction.remark}</td>

      <td className="p-3 w-[5%]">
        {transaction.amount < 0
          ? `-$${Math.abs(transaction.amount)}`
          : `$${transaction.amount}`}
      </td>

      <td className="p-3 w-[10%]">{transaction.currency}</td>

      <td className="p-3 w-[10%]">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              transaction.type === 'Credit' ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-sm">{transaction.type}</span>
        </div>
      </td>
    </tr>
  );
}
