import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
};
