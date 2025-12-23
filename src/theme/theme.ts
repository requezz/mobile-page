import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  typography: {
    fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
      color: colors.textPrimary,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.5,
      color: colors.textSecondary,
    },
  },

  palette: {
    background: {
      default: colors.backgroundDefault,
      paper: colors.backgroundPaper,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    primary: {
      main: colors.primaryMain,
    },
    secondary: {
      main: colors.secondaryMain,
    },
    divider: colors.divider,
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "auto",
          height: 40,
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 500,
          fontSize: 14,
          padding: "8px 16px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: colors.primaryDark,
            color: colors.backgroundPaper,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: colors.primaryDark,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "transparent",
            color: colors.textPrimary,
            backgroundColor: colors.backgroundPaper,
            "&:hover": {
              backgroundColor: colors.backgroundHover,
              borderColor: colors.border,
            },
          },
        },
      ],
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 15,
          fontWeight: 600,
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
        },
        input: {
          padding: 0,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
          backgroundColor: colors.backgroundButton,
          borderRadius: "50%",
          padding: 0,
          "&:hover": {
            backgroundColor: colors.backgroundButtonHover,
          },
          "& .MuiSvgIcon-root": {
            fontSize: 18,
            color: colors.iconDefault,
          },
        },
        sizeSmall: {
          width: 28,
          height: 28,
          "& .MuiSvgIcon-root": {
            fontSize: 16,
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        outlined: {
          borderColor: colors.border,
        },
      },
    },

    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          "@media (min-width: 600px)": {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
});
