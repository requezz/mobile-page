import { Paper, Stack, Box, IconButton } from "@mui/material";
import { RadioOption } from "./RadioOption";
import { PenIcon } from "./PenIcon";
import { RequisiteType } from "../types";
import {
  REQUISITE_TYPES,
  REQUISITE_LABELS,
  REQUISITE_PLACEHOLDERS,
} from "../constants";

interface RequisiteCardProps {
  selectedValue: RequisiteType;
  onValueChange?: (value: RequisiteType) => void;
  inputValue?: string;
  inputPlaceholder?: string;
}

export function RequisiteCard({
  selectedValue,
  onValueChange,
  inputValue,
  inputPlaceholder = REQUISITE_PLACEHOLDERS.CARD,
}: RequisiteCardProps) {
  return (
    <Paper variant="outlined" className="requisite-card">
      <Stack spacing={1}>
        <Stack direction="row" gap={3} alignItems="center">
          <RadioOption
            value={REQUISITE_TYPES.CARD}
            label={REQUISITE_LABELS.CARD}
            checked={selectedValue === REQUISITE_TYPES.CARD}
            onChange={() => onValueChange?.(REQUISITE_TYPES.CARD)}
          />

          <RadioOption
            value={REQUISITE_TYPES.CONTRACT}
            label={REQUISITE_LABELS.CONTRACT}
            checked={selectedValue === REQUISITE_TYPES.CONTRACT}
            onChange={() => onValueChange?.(REQUISITE_TYPES.CONTRACT)}
          />
        </Stack>

        <Box className="requisite-card-divider">
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={inputValue}
            readOnly
            className="editable-input requisite-card-input"
          />
          <IconButton size="small" className="transparent">
            <PenIcon />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
}
