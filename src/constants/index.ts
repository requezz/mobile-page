export const PAYMENT_METHODS = ["Банки", "Наличные", "Курьер"] as const;

export const REQUISITE_TYPES = {
  CARD: "card",
  CONTRACT: "contract",
} as const;

export const REQUISITE_CONFIG = {
  CARD: {
    label: "Номер карты",
    placeholder: "Номер карты",
  },
  CONTRACT: {
    label: "Номер договора",
    placeholder: "Номер договора",
  },
} as const;

