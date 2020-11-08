import React from "react";
import { Text } from "theme-ui";

export function CardLink({ color, children, ...props }) {
  const underline = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(0, ${color}, ${color})`,
    backgroundSize: "100% 3px",
    backgroundPosition: "0px 100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Text
      as={"a"}
      sx={{
        textDecoration: "none",
        width: "fit-content",
        color: "text",
        fontFamily: "body",
        fontWeight: 600,
        fontSize: 3,
        ...underline,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
