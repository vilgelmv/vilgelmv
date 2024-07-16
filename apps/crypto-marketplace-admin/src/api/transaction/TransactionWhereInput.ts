import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  user?: UserWhereUniqueInput;
  item?: ItemWhereUniqueInput;
};
