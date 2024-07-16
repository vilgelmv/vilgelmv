import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  currency?: SortOrder;
  transactionId?: SortOrder;
};
