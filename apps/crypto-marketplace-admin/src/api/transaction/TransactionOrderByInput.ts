import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  itemId?: SortOrder;
};
