import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Source+Serif+Pro:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main style={{ height: "100vh" }}>
        <Story />
      </main>
    </ThemeProvider>
  ),
];
