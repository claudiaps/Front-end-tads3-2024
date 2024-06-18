import { Box, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <Box bgColor="red.600" w="100%" padding={6}>
      <Text color="white" fontSize="24px">
        {title}
      </Text>
    </Box>
  );
};

export default Header;
