import { IconButton, Box, InputBase, styled } from "@mui/material";
import { PenIcon } from "./PenIcon";
import { colors } from "../theme/colors";

const EditableInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.backgroundPaper,
  borderRadius: 8,
  padding: "12px 16px",
  border: `1px solid ${colors.border}`,
  width: "100%",
  maxWidth: 390,
  minHeight: 70,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const StyledInput = styled(InputBase)({
  flex: 1,
  fontSize: 16,
  fontWeight: 500,
  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
  color: colors.textPrimary,
  "& input": {
    padding: 0,
  },
  "& input::placeholder": {
    color: colors.textPrimary,
    opacity: 1,
  },
});

interface EditableInputProps {
  placeholder: string;
}

export function EditableInput({ placeholder }: EditableInputProps) {
  return (
    <EditableInputContainer>
      <StyledInput placeholder={placeholder} readOnly />

      <IconButton
        size="small"
        sx={{ backgroundColor: "transparent !important" }}
      >
        <PenIcon />
      </IconButton>
    </EditableInputContainer>
  );
}
