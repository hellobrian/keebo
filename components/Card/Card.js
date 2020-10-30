import {
  Card as ThemeCard,
  Text,
  AspectImage,
  Heading,
  Flex,
  Button,
  Box,
  Grid,
} from "theme-ui";

export function Card({
  name = "Tokyo60",
  color = "coyote",
  status = "purchased",
  pins = 5,
  hotswap = true,
  layout = "HHKB",
  stabilizers = "screw_in",
  via = true,
  blurb = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga expedita voluptas necessitatibus voluptatum?",
}) {
  return (
    <ThemeCard
      sx={{
        bg: "salmon",
        width: "400px",
        pb: 2,
      }}
    >
      <AspectImage
        sx={{
          width: "100%",
          height: "100%",
        }}
        ratio={16 / 9}
        src="https://massdrop-s3.imgix.net/product-images/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit/FP/QrAV4cdARLGK1PUtnpps_CB5A6534-copy.jpg?auto=format&fm=jpg&fit=fill&w=500&h=500&bg=f0f0f0&dpr=1&q=70"
      />
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Heading
          sx={{
            display: "inline-block",
            bg: "salmon",
            color: "black",
            fontSize: 7,
            fontWeight: "medium",
            p: 2,
            backgroundRepeat: "no-repeat",
            backgroundImage: "linear-gradient(0, white, white)",
            backgroundSize: "100% 6px",
            backgroundPosition: "4px 80%",
          }}
        >
          {name}
        </Heading>

        <Text
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "black",
            fontSize: 3,
            fontWeight: "bold",
            px: 2,
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          {layout} {`${pins} pins`} {via && "VIA  "}
          {hotswap ? "hotswap  " : "soldered  "}{" "}
          {stabilizers === "screw_in" ? "screw-in stabs" : "plate-mount stabs"}
        </Text>
        <Text
          sx={{
            fontFamily: "heading",
            color: "black",
            width: "75%",
            m: "0 auto",
            p: 2,
            mt: 3,
            textAlign: "center",
            lineHeight: "body",
          }}
        >
          {blurb}
        </Text>

        {/* Buttons */}
        <Grid
          sx={{
            alignItems: "center",
            gridGap: "8px",
            gridTemplateColumns: "1fr 1fr",
            mt: 3,
          }}
        >
          <Button
            sx={{
              display: "inline-flex",
              bg: "white",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              borderRadius: "4px",
            }}
          >
            <Box
              sx={{ mr: 1 }}
              as="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="#B3A49E"
            >
              <circle r={9} cx={10} cy={10} stroke="black" strokeWidth={2} />
            </Box>
            <Text
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "black",
                fontSize: 3,
                fontWeight: "bold",
                letterSpacing: "-0.5px",
                textAlign: "center",
                height: "20px",
              }}
            >
              {color}
            </Text>
          </Button>
          <Button>View More</Button>
        </Grid>
      </Flex>
    </ThemeCard>
  );
}
