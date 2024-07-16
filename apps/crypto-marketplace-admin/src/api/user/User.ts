import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
};
