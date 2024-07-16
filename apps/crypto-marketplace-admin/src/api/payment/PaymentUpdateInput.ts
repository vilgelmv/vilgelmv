import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  transaction?: TransactionWhereUniqueInput | null;
};
