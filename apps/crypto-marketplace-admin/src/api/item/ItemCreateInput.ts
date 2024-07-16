import { TransactionCreateNestedManyWithoutItemsInput } from "./TransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  transactions?: TransactionCreateNestedManyWithoutItemsInput;
};
