import { PaymentUpdateManyWithoutTransactionsInput } from "./PaymentUpdateManyWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type TransactionUpdateInput = {
  status?: string | null;
  payments?: PaymentUpdateManyWithoutTransactionsInput;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
};
