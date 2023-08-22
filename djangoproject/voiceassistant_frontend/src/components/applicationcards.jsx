import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  WashAnimated,
} from "gestalt";
import "gestalt/dist/gestalt.css";
import newsImage from "../assets/news.jpg";


export default function ApplicationCards() {
  return (
    <>
      <Box
        marginTop={10}
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
          maxWidth={400}
          padding={8}
          column={12}
          rounding={3}
          margin={5}
          color="infoWeak"
        >
          <WashAnimated image={<Avatar name="newImage" src={newsImage} />}>
            <Flex direction="column" justifyContent="center">
              <Text align="center" weight="bold">
                <Box paddingX={3} paddingY={2}>
                  Say
                </Box>
              </Text>
              <Box paddingX={3} paddingY={1}>
                <Button
                  fullWidth
                  accessibilityLabel="Show news"
                  color="white"
                  text="'Show me the latest news'"
                  margin="2"
                />
              </Box>
              <Box paddingX={3} paddingY={1}>
                <Button
                  fullWidth
                  accessibilityLabel="Show news"
                  color="white"
                  text="'Show me the news from TechCrunch'"
                  margin="2"
                />
              </Box>
              <Box paddingX={3} paddingY={1}>
                <Button
                  fullWidth
                  accessibilityLabel="Show news"
                  color="white"
                  text="'Show me the news about Apple'"
                  margin="2"
                />
              </Box>
            </Flex>
          </WashAnimated>
        </Box>
      </Flex>
    </>
  );
}
