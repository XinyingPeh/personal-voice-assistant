import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  WashAnimated,
} from "gestalt";
import "gestalt/dist/gestalt.css";
import newsImage from "../assets/news.jpg";
// import radioImage from "../assets/radio.jpeg";

export default function ApplicationCards() {
  return (
    <>
      <Box
        padding={8}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="500">Welcome back!</Heading>
      </Box>
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
        direction="row"
      >
        <Box
          maxWidth={300}
          padding={8}
          column={12}
          rounding={3}
          margin={10}
          color="infoWeak"
        >
          <WashAnimated image={<Avatar name="newImage" src={newsImage} />}>
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Box paddingX={3} paddingY={2}>
                  Say
                </Box>
              </Text>
              <Button
                accessibilityLabel="Show news"
                color="white"
                text="'Show the latest news'"
              />
            </Flex>
          </WashAnimated>
        </Box>

        {/* <Box
          maxWidth={300}
          padding={8}
          column={12}
          rounding={3}
          margin={10}
          color="errorWeak"
        >
          <WashAnimated image={<Avatar name="radioImage" src={radioImage} />}>
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Link href="#">
                  <Box paddingX={3} paddingY={2}>
                    Say
                  </Box>
                </Link>
              </Text>
              <Button
                accessibilityLabel="Show radio stations"
                color="white"
                text="'Show the radio stations'"
              />
            </Flex>
          </WashAnimated>
        </Box> */}
      </Flex>
    </>
  );
}
