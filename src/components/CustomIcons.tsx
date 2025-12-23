import { SvgIcon, SvgIconProps } from "@mui/material";
import { colors } from "../theme/colors";

export function CheckboxIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill={colors.divider} />
    </SvgIcon>
  );
}

export function CheckboxCheckedIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill={colors.secondaryMain}
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={colors.textPrimary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}

export function RadioIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={colors.divider}
        strokeWidth="3"
      />
    </SvgIcon>
  );
}

export function RadioCheckedIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <circle
        cx="12"
        cy="12"
        r="7.5"
        fill="none"
        stroke={colors.secondaryMain}
        strokeWidth="5"
      />
      <circle cx="12" cy="12" r="5" fill={colors.textPrimary} />
    </SvgIcon>
  );
}
