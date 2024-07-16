import { Transaction } from "../transaction/Transaction";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  currency: string | null;
  transaction?: Transaction | null;
};
