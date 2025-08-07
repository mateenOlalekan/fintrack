export type TransactionType = 'Credit' | 'Debit';

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: TransactionType;
}
