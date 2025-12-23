import { Button, Stack } from "@mui/material";
import { PaymentMethod } from "../types";
import { PAYMENT_METHODS } from "../constants";

interface PaymentMethodTabsProps {
  selectedMethod?: PaymentMethod;
  onMethodChange?: (method: PaymentMethod) => void;
}

export function PaymentMethodTabs({
  selectedMethod = PAYMENT_METHODS[0],
  onMethodChange,
}: PaymentMethodTabsProps) {
  return (
    <Stack direction="row" gap={1}>
      {PAYMENT_METHODS.map((method) => (
        <Button
          key={method}
          variant={selectedMethod === method ? "contained" : "outlined"}
          fullWidth
          onClick={() => onMethodChange?.(method)}
        >
          {method}
        </Button>
      ))}
    </Stack>
  );
}
