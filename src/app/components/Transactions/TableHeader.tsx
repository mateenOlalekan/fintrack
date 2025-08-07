'use client';

import { useTransactionContext } from '../../context/TransactionContext';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const headers = [
  { key: 'date', label: 'Date' },
  { key: 'remark', label: 'Remark' },
  { key: 'amount', label: 'Amount' },
  { key: 'currency', label: 'Currency' },
  { key: 'type', label: 'Type' },
];

export default function TableHeader() {
  const { sortBy, sortKey, sortOrder } = useTransactionContext();

  return (
    <thead className="text-left text-sm font-semibold text-gray-600 border-spacing-2  ">
      <tr className="gap-1 border-spacing-2">
        {headers.map((header) => (
          <th
            key={header.key}
            className="cursor-pointer py-1.5 px-2 border-b-2 border-[#EAF0F0]"
            onClick={() =>
              ['date', 'remark', 'amount'].includes(header.key) &&
              sortBy(header.key as 'date' | 'remark' | 'amount')
            }
          >
            <div className="flex items-center gap-1">
              {header.label}
              {sortKey === header.key && (
                <span>
                  {sortOrder === 'asc' ? <MdArrowDropDown /> : <MdArrowDropUp />}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
