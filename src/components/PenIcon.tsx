import { Box } from "@mui/material";
import { PenLine } from "lucide-react";

export function PenIcon() {
  return (
    <Box className="pen-icon-container">
      <PenLine size={16} />
      <Box className="pen-icon-line" />
    </Box>
  );
}
