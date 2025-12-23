import { Checkbox, Stack, Typography } from "@mui/material";
import { CheckboxIcon, CheckboxCheckedIcon } from "./CustomIcons";

interface SaveRequisitesCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function SaveRequisitesCheckbox({
  checked = false,
  onChange,
}: SaveRequisitesCheckboxProps) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="body2">Сохранить реквизиты</Typography>
      <Checkbox
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        icon={<CheckboxIcon />}
        checkedIcon={<CheckboxCheckedIcon />}
      />
    </Stack>
  );
}

