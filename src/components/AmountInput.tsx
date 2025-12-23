import {
  IconButton,
  Stack,
  Typography,
  Input,
  Box,
  styled,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "../theme/colors";

const AmountInputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 60,
  backgroundColor: colors.backgroundPaper,
  borderRadius: 12,
  padding: "4px 8px",
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    width: 190,
  },
}));

interface AmountInputProps {
  label: string;
  currency: string;
  value: string;
  align?: "left" | "right";
}

export function AmountInput({
  label,
  currency,
  value,
  align = "left",
}: AmountInputProps) {
  return (
    <Stack width="100%">
      <Typography variant="body2" textAlign={align}>
        {label}
      </Typography>

      <AmountInputContainer>
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
            sx={{
              flex: 1,
              minWidth: 0,
              "& input": { textAlign: "center" },
            }}
          />

          <IconButton size="small">
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
      </AmountInputContainer>
    </Stack>
  );
}
