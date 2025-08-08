
'use client';

import { Transaction } from '../../types/transaction';

interface Props {
  transaction: Transaction;
  isLast: boolean;
}

export default function TransactionRow({ transaction, isLast }: Props) {
  return (
    <tr
      className={`text-sm max-sm:text-xs ${
        !isLast ? 'border-b-2 border-[#EAF0F0]' : ''
      }`}
    >
      {/* Date */}
      <td className="p-3 max-md:p-2 w-2/5 sm:w-auto whitespace-nowrap">
        {transaction.date}
      </td>

      {/* Remark */}
      <td className="p-3 max-md:p-2 w-1/5 sm:w-auto whitespace-normal break-words">
        {transaction.remark}
      </td>

      {/* Amount */}
      <td className="p-3 max-md:p-2 w-1/5 sm:w-auto whitespace-nowrap">
        {transaction.amount < 0
          ? `-$${Math.abs(transaction.amount)}`
          : `$${transaction.amount}`}
      </td>

      {/* Currency */}
      <td className="p-3 max-md:p-2 w-1/5 sm:w-auto whitespace-nowrap">
        {transaction.currency}
      </td>

      {/* Type with color dot */}
      <td className="p-3 max-md:p-2 w-1/5 sm:w-auto">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              transaction.type === 'Credit' ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="max-sm:text-xs">{transaction.type}</span>
        </div>
      </td>
    </tr>
  );
}
