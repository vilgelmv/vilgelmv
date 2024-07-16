import { TransactionUpdateManyWithoutItemsInput } from "./TransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  transactions?: TransactionUpdateManyWithoutItemsInput;
};
