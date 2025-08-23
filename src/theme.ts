import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
  }

  interface TypographyVariants {
    logoMono: React.CSSProperties;
    heroTitle: React.CSSProperties;
    heroSubtitle: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    borderTitle: React.CSSProperties;
    cardTitle: React.CSSProperties;
    accent: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logoMono?: React.CSSProperties;
    heroTitle?: React.CSSProperties;
    heroSubtitle?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    borderTitle?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    accent?: React.CSSProperties;
  }

  interface Theme {
    gradients: {
      card: string;
      subtle: string;
    };
    borders: {
      radius: {
        small: string;
        medium: string;
        large: string;
      };
    };
  }

  interface ThemeOptions {
    gradients?: {
      card?: string;
      subtle?: string;
    };
    borders?: {
      radius?: {
        small?: string;
        medium?: string;
        large?: string;
      };
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logoMono: true;
    heroTitle: true;
    heroSubtitle: true;
    sectionTitle: true;
    borderTitle: true;
    cardTitle: true;
    accent: true;
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily:
      '"Inter", "Instrument Serif", "Roboto", "Helvetica", "Arial", sans-serif',
    logoMono: {
      fontFamily: "Monofett",
      fontWeight: 300,
    },
    heroTitle: {
      fontFamily: "Bebas Neue",
      fontStyle: "italic",
      fontWeight: 100,
      fontSize: "9vw",
      lineHeight: 0.5,
    },
    heroSubtitle: {
      fontFamily: "Instrument Serif",
      fontSize: "1.8rem",
      fontWeight: 100,
      lineHeight: 1.1,
    },
    sectionTitle: {
      fontWeight: 600,
      fontSize: "12rem",
      lineHeight: 0.8,
    },
    borderTitle: {
      fontFamily: "Bebas Neue",
      fontSize: "4rem",
      lineHeight: 0.8,
    },
    cardTitle: {
      fontFamily: "Bebas Neue",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    accent: {
      fontFamily: "Courier New",
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#3B82F6",
    },
    secondary: {
      main: "#F59E0B",
    },
    background: {
      default: "rgb(219, 219, 213)",
      paper: "#ffffff",
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    text: {
      primary: "rgb(31,31,29)",
      secondary: "#6B7280",
    },
    error: {
      main: "rgb(255,81,46)",
    },
  },
  gradients: {
    card: "linear-gradient(135deg, #f0f0f0 80%, rgb(219, 219, 213) 100%)",
    subtle: "linear-gradient(rgb(219, 219, 213) 65%, transparent 65%)",
  },
  borders: {
    radius: {
      small: "10px",
      medium: "16px",
      large: "25px",
    },
  },
};

export const theme = createTheme(themeOptions);

export default theme;
