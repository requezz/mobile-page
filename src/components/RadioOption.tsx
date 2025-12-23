import { Radio, Stack, Typography } from "@mui/material";
import { RadioIcon, RadioCheckedIcon } from "./CustomIcons";

interface RadioOptionProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function RadioOption({
  value,
  label,
  checked,
  onChange,
}: RadioOptionProps) {
  return (
    <Stack direction="row" alignItems="center">
      <Radio
        checked={checked}
        onChange={onChange}
        icon={<RadioIcon />}
        checkedIcon={<RadioCheckedIcon />}
      />
      <Typography fontSize={14} fontWeight={500}>
        {label}
      </Typography>
    </Stack>
  );
}
