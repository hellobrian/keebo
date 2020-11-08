import React from "react";
import { Text } from "theme-ui";

export function CardLink({ color = "white", children, ...props }) {
  const underline = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(0, ${color}, ${color})`,
    backgroundSize: "100% 2px",
    backgroundPosition: "0px 95%",
    backgroundRepeat: "no-repeat",
    // alignSelf: "flex-start",
  };
  return (
    <Text
      as={"a"}
      sx={{
        textDecoration: "none",
        width: "fit-content",
        color: "text",
        fontFamily: "body",
        fontWeight: "normal",
        ...underline,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
