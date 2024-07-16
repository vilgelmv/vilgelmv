import { PaymentCreateNestedManyWithoutTransactionsInput } from "./PaymentCreateNestedManyWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type TransactionCreateInput = {
  status?: string | null;
  payments?: PaymentCreateNestedManyWithoutTransactionsInput;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
};
