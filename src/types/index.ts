import { REQUISITE_TYPES, TEXT_ALIGN } from "../constants";

export type RequisiteType =
  (typeof REQUISITE_TYPES)[keyof typeof REQUISITE_TYPES];

export type TextAlign = (typeof TEXT_ALIGN)[keyof typeof TEXT_ALIGN];

export type PaymentMethod = "Банки" | "Наличные" | "Курьер";
