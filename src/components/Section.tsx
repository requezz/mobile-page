import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Stack>
  );
}
