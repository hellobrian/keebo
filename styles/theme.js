const black = "#000";
const white = "#fff";
const blue = "#1e3799";
const yellow = "#feca57";
const salmon = "#ffb8b8";
const teal = "#9AECDB";
const midnightBlue = "#130f40";
const coffeeCream = "#E9E0D2";
const green = "#0AD185";
const deepRose = "#c44569";

const badgeStyles = {
  color: "black",
  fontSize: 2,
  fontWeight: "bold",
  fontFamily: "badge",
  py: 1,
  px: 2,
  textTransform: "capitalize",
  textAlign: "center",
};

const badges = {
  default: {
    ...badgeStyles,
    bg: "badge.default",
  },
  using: {
    ...badgeStyles,
    bg: "badge.using",
  },
  purchased: {
    ...badgeStyles,
    bg: "badge.purchased",
  },
  shelved: {
    ...badgeStyles,
    bg: "badge.shelved",
  },
  want: {
    ...badgeStyles,
    bg: "badge.want",
    color: "white",
  },
};

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
    green,
    deepRose,
    background: salmon,
    text: black,
    active: yellow,
    accent: salmon,
    badge: {
      want: deepRose,
      default: white,
      using: green,
      shelved: "#ccc",
      purchased: yellow,
    },
  },
  fonts: {
    heading: `Source Serif Pro, serif`,
    body: `Inter, sans-serif`,
    monospace: `IBM Plex Mono, monospace`,
    badge: `Karla, sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 128],
  fontWeights: {
    body: 400,
    medium: 600,
    bold: 700,
  },
  lineHeights: {
    // body: 1.25,
    body: "1.2",
    heading: 1.125,
  },
  letterSpacings: {
    // body: "-0.025rem",
    body: "normal",
    caps: "0.2em",
  },
  text: {
    default: {
      color: "black",
      fontFamily: "body",
      lineHeight: "body",
      letterSpacing: "body",
      fontSize: 3,
    },
    heading: {
      fontFamily: "monospace",
    },
  },
  breakpoints: ["300px", "500px", "700px", "900px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  links: {
    nav: {
      fontFamily: "body",
      color: "text",
      fontSize: 3,
    },
  },
  badges,
};
