import { Box, styled } from "@mui/material";
import { PenLine } from "lucide-react";

const PenIconContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
});

export function PenIcon() {
  return (
    <PenIconContainer>
      <PenLine size={16} />
      <span
        style={{
          width: 12,
          height: 1,
          backgroundColor: "currentColor",
        }}
      />
    </PenIconContainer>
  );
}
