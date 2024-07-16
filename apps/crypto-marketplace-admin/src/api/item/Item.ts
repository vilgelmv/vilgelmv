import { Transaction } from "../transaction/Transaction";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  description: string | null;
  transactions?: Array<Transaction>;
};
