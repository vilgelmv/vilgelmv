import { Payment } from "../payment/Payment";
import { User } from "../user/User";
import { Item } from "../item/Item";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  payments?: Array<Payment>;
  user?: User | null;
  item?: Item | null;
};
