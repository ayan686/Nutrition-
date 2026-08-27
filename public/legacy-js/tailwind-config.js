/**
 * NutritionConnect AI — Shared Tailwind Config
 * Single source of truth for design tokens used across all pages.
 * Load this AFTER the Tailwind CDN <script> tag and BEFORE any page content.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary": "#ffffff",
        "primary": "#00685f",
        "tertiary": "#825100",
        "surface-bright": "#f8f9ff",
        "secondary-fixed-dim": "#c0c7d0",
        "inverse-on-surface": "#eaf1ff",
        "tertiary-container": "#a36700",
        "tertiary-fixed-dim": "#ffb95f",
        "on-secondary-fixed-variant": "#40484f",
        "primary-fixed-dim": "#6bd8cb",
        "inverse-primary": "#6bd8cb",
        "on-tertiary-fixed": "#2a1700",
        "on-tertiary-container": "#fffbff",
        "tertiary-fixed": "#ffddb8",
        "error-container": "#ffdad6",
        "inverse-surface": "#213145",
        "primary-container": "#008378",
        "background": "#f8f9ff",
        "surface-container-low": "#eff4ff",
        "error": "#ba1a1a",
        "secondary-fixed": "#dce3ec",
        "surface-variant": "#d3e4fe",
        "on-secondary-container": "#5e656d",
        "on-surface": "#0b1c30",
        "surface-container": "#e5eeff",
        "on-surface-variant": "#3d4947",
        "on-secondary-fixed": "#151c23",
        "surface-container-high": "#dce9ff",
        "surface-tint": "#006a61",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "on-tertiary-fixed-variant": "#653e00",
        "on-primary": "#ffffff",
        "surface-container-highest": "#d3e4fe",
        "surface": "#f8f9ff",
        "on-primary-fixed-variant": "#005049",
        "on-background": "#0b1c30",
        "outline": "#6d7a77",
        "secondary-container": "#dce3ec",
        "surface-dim": "#cbdbf5",
        "on-primary-fixed": "#00201d",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#bcc9c6",
        "primary-fixed": "#89f5e7",
        "secondary": "#585f67",
        "on-primary-container": "#f4fffc",
        "on-secondary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        sm: "12px",
        "margin-desktop": "40px",
        "2xl": "48px",
        md: "16px",
        "container-max": "1280px",
        base: "4px",
        xl: "32px",
        gutter: "24px",
        xs: "8px",
        "margin-mobile": "16px",
        lg: "24px",
        "3xl": "64px"
      },
      fontFamily: {
        "body-lg": ["Inter"],
        "display-lg": ["Geist"],
        "label-md": ["Geist"],
        "body-md": ["Inter"],
        "headline-lg": ["Geist"],
        "headline-lg-mobile": ["Geist"],
        "label-sm": ["Geist"],
        "headline-md": ["Geist"],
        "body-sm": ["Inter"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "14px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }]
      }
    }
  }
};
