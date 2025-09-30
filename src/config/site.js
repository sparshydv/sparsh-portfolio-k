export const SITE_URL =
  typeof window !== "undefined" && window.location?.origin
    ? (import.meta.env.VITE_SITE_URL || window.location.origin)
    : (import.meta.env.VITE_SITE_URL || "https://sparsh-portfolioo.netlify.app");

