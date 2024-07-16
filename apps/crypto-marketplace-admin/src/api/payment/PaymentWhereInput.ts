import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
