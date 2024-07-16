import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
