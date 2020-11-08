import React from "react";
import { Text } from "theme-ui";

export function CardLink({ color = "white", children, ...props }) {
  const underline = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(0, ${color}, ${color})`,
    backgroundSize: "100% 3px",
    backgroundPosition: "0px 90%",
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
        fontWeight: "normal",
        fontSize: 3,
        ...underline,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
