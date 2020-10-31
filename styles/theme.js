const black = "#000";
const white = "#fff";
const blue = "#1e3799";
const yellow = "#feca57";
const salmon = "#ffb8b8";
const teal = "#9AECDB";
const midnightBlue = "#130f40";
const coffeeCream = "#E9E0D2";

export default {
  colors: {
    black,
    white,
    yellow,
    blue,
    salmon,
    midnightBlue,
    teal,
    coffeeCream,
    background: coffeeCream,
    text: white,
    active: yellow,
    accent: salmon,
  },
  fonts: {
    heading: `Source Serif Pro, serif`,
    body: `Karla, sans-serif`,
    monospace: `IBM Plex Mono, monospace`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 128],
  fontWeights: {
    body: 400,
    heading: 700,
    medium: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    default: {
      color: "white",
      fontFamily: "body",
    },
  },
  breakpoints: ["400px", "768px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  links: {
    nav: {
      fontFamily: "body",
      color: "text",
      fontSize: 3,
    },
  },
  buttons: {
    primary: {
      bg: "rgba(0, 0, 0, 0.1)",
      color: "black",
      fontFamily: "body",
      fontWeight: "bold",
      height: "40px",
      border: "2px solid rgba(0, 0, 0, 0.1)",
    },
  },
  badges: {
    default: {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      border: "2px solid black",
      bg: "white",
      color: "black",
      fontFamily: "body",
      py: 1,
      px: 2,
      textTransform: "capitalize",
    },
    purchased: {
      bg: "yellow",
      color: "black",
      fontFamily: "body",
      py: 1,
      px: 2,
      textTransform: "capitalize",
      transform: "rotate(0deg)",
    },
  },
};
