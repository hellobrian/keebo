import React from "react";
import {
  Grid,
  Flex,
  Image,
  Heading,
  AspectRatio,
  Badge,
  Text,
  useThemeUI,
} from "theme-ui";

import Link from "next/link";

import { CardLink } from "./CardLink";

const TEMP_IMG =
  "https://i1.wp.com/tokyokeyboard.com/wp-content/uploads/2019/10/hcStZW2-1.jpg?fit=2340%2C1073";

const LOREM_IPSUM = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  reiciendis culpa dolore quo voluptatum tempore omnis fugiat ipsam
  error delectus odit dolores reprehenderit quasi at, accusantium saepe
  nihil, soluta consequatur?`;

export function Card({
  src = TEMP_IMG,
  heading = "Drop Ctrl High-Profile",
  text,
  status = "purchased",
  href = "/",
  artisan = false,
}) {
  const { theme } = useThemeUI();

  return (
    <Grid
      sx={{
        borderRadius: 1,
        boxShadow: "boxShadow",
        bg: "black",
        gridTemplateColumns: "1fr",
        borderTop: ["none", "none", `8px solid ${theme.colors.badge[status]}`],
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Link href={href} passHref>
          <a aria-label={`click here to learn more about ${heading}`}>
            <Image
              role="presentation"
              quality={70}
              src={src}
              width={800}
              height={500}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
          {text || LOREM_IPSUM}
        </Text>
        <Link href={href} passHref>
          <CardLink color={theme.colors.badge[status]}>Read more.</CardLink>
        </Link>
      </Flex>
    </Grid>
  );
}
