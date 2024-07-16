import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  currency?: string | null;
  transaction?: TransactionWhereUniqueInput | null;
};
