import { Box, IconButton } from "@mui/material";
import { PenIcon } from "./PenIcon";

interface EditableInputProps {
  placeholder: string;
}

export function EditableInput({ placeholder }: EditableInputProps) {
  return (
    <Box className="editable-input-container">
      <input
        type="text"
        placeholder={placeholder}
        readOnly
        className="editable-input"
      />
      <IconButton size="small" className="transparent">
        <PenIcon />
      </IconButton>
    </Box>
  );
}
