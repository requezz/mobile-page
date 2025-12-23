import {
  Paper,
  Stack,
  IconButton,
  Radio,
  Typography,
  Box,
  InputBase,
  styled,
} from "@mui/material";
import { PenIcon } from "./PenIcon";
import { RadioIcon, RadioCheckedIcon } from "./CustomIcons";
import { RequisiteType } from "../types";
import { REQUISITE_TYPES, REQUISITE_CONFIG } from "../constants";
import { colors } from "../theme/colors";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "0 16px 16px",
  borderRadius: 8,
  width: "100%",
  maxWidth: 390,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const RequisiteInputWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flex: 1,
});

const RequisiteInput = styled(InputBase)({
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

interface RequisiteCardProps {
  selectedValue: RequisiteType;
}

export function RequisiteCard({ selectedValue }: RequisiteCardProps) {
  const currentConfig =
    selectedValue === REQUISITE_TYPES.CARD
      ? REQUISITE_CONFIG.CARD
      : REQUISITE_CONFIG.CONTRACT;

  return (
    <StyledPaper variant="outlined">
      <Stack spacing={1}>
        <Stack direction="row" gap={3} alignItems="center">
          <Stack direction="row" gap={1} alignItems="center">
            <Radio
              checked={selectedValue === REQUISITE_TYPES.CARD}
              icon={<RadioIcon />}
              checkedIcon={<RadioCheckedIcon />}
            />
            <Typography fontSize={14} fontWeight={500}>
              {REQUISITE_CONFIG.CARD.label}
            </Typography>
          </Stack>

          <Stack direction="row" gap={1} alignItems="center">
            <Radio
              checked={selectedValue === REQUISITE_TYPES.CONTRACT}
              icon={<RadioIcon />}
              checkedIcon={<RadioCheckedIcon />}
            />
            <Typography fontSize={14} fontWeight={500}>
              {REQUISITE_CONFIG.CONTRACT.label}
            </Typography>
          </Stack>
        </Stack>

        <RequisiteInputWrapper>
          <RequisiteInput placeholder={currentConfig.placeholder} readOnly />

          <IconButton
            size="small"
            sx={{ backgroundColor: "transparent !important" }}
          >
            <PenIcon />
          </IconButton>
        </RequisiteInputWrapper>
      </Stack>
    </StyledPaper>
  );
}
