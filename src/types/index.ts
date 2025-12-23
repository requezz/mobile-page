import { REQUISITE_TYPES, PAYMENT_METHODS } from "../constants";

export type RequisiteType =
  (typeof REQUISITE_TYPES)[keyof typeof REQUISITE_TYPES];

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
