import React from "react";
import {
  Grid,
  Flex,
  Image as ThemeImage,
  Heading,
  AspectRatio,
  Badge,
  Text,
  useThemeUI,
} from "theme-ui";

import Link from "next/link";
import Image from "next/image";

import { CardLink } from "./CardLink";

const TEMP_IMG =
  "https://i1.wp.com/tokyokeyboard.com/wp-content/uploads/2019/10/hcStZW2-1.jpg?fit=2340%2C1073";

const LOREM_IPSUM = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  reiciendis culpa dolore quo voluptatum tempore omnis fugiat ipsam
  error delectus odit dolores reprehenderit quasi at, accusantium saepe
  nihil, soluta consequatur?`;

function useHover() {
  const [isHover, setHover] = React.useState(false);
  const transitionTimingFunction = "cubic-bezier(.17,.67,.83,.67)";
  const transitionDuration = "100ms";

  const opacityStyles = {
    opacity: isHover ? 0 : 1,
    transitionProperty: "opacity",
    transitionDuration,
    transitionTimingFunction,
  };

  const scaleStyles = {
    transform: isHover ? "scale(1.05)" : "scale(1)",
    transitionProperty: "transform",
    transitionDuration,
    transitionTimingFunction,
  };

  return { isHover, setHover, opacityStyles, scaleStyles };
}

export function Card({
  src = TEMP_IMG,
  heading = "Drop Ctrl High-Profile",
  text = LOREM_IPSUM,
  status = "purchased",
  href = "/",
  artisan = false,
}) {
  const { setHover, scaleStyles } = useHover();
  const { theme } = useThemeUI();
  const boxShadow =
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.25)";

  return (
    <Grid
      sx={{
        borderRadius: 1,
        boxShadow,
        bg: "black",
        gridTemplateColumns: "1fr",
        borderTop: ["none", "none", `8px solid ${theme.colors.badge[status]}`],
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Link href={href} passHref>
          <a aria-label={`click here to learn more about ${heading}`}>
            <ThemeImage
              as={Image}
              role="presentation"
              quality={70}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              src={src}
              width={1600}
              height={900}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                ...scaleStyles,
              }}
            />
          </a>
        </Link>
      </AspectRatio>
      <Flex
        sx={{
          pt: 3,
          px: 4,
          pb: 4,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Link href={href} passHref>
          <a style={{ textDecoration: "none" }}>
            <Heading
              variant="h2"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              sx={{
                mb: 3,
                bg: "black",
                width: "fit-content",
              }}
            >
              {heading}
            </Heading>
          </a>
        </Link>

        <Flex
          sx={{
            justifyContent: "flex-start",
            mb: 3,
            transform: "translateX(-1px)",
          }}
        >
          <Badge variant={status}>{status}</Badge>
          {artisan && (
            <Badge variant="artisan" sx={{ ml: 2 }}>
              artisan
            </Badge>
          )}
        </Flex>
        <Text
          as="p"
          sx={{
            mb: 3,
            bg: "black",
            color: "text",
          }}
        >
          {text}
        </Text>
        <Link href={href} passHref>
          <CardLink
            color={theme.colors.badge[status]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Read more.
          </CardLink>
        </Link>
      </Flex>
    </Grid>
  );
}
