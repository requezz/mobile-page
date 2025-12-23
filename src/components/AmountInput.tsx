import { IconButton, Stack, Typography, Box, Input } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { TextAlign } from "../types";
import { TEXT_ALIGN } from "../constants";

interface AmountInputProps {
  label: string;
  currency: string;
  value: string;
  align?: TextAlign;
}

export function AmountInput({
  label,
  currency,
  value,
  align = TEXT_ALIGN.LEFT,
}: AmountInputProps) {
  return (
    <Stack width="100%">
      <Typography
        variant="body2"
        textAlign={
          align === TEXT_ALIGN.RIGHT ? TEXT_ALIGN.RIGHT : TEXT_ALIGN.LEFT
        }
      >
        {label}
      </Typography>

      <Box className="amount-input-container">
        <Typography variant="body2" textAlign="center">
          {currency}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={0.5}
        >
          <IconButton size="small">
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Input
            value={value}
            readOnly
            disableUnderline
            className="amount-input-value"
          />

          <IconButton size="small">
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}
