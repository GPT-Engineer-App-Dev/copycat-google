import { Container, VStack, Input, Button, HStack, Link, Box, Image, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        {/* Google Logo */}
        <Image src="/path-to-your-google-logo.png" alt="Google Logo" boxSize="150px" objectFit="contain" />

        {/* Search Bar */}
        <Input placeholder="Search Google or type a URL" size="lg" />

        {/* Buttons */}
        <HStack spacing={4}>
          <Button colorScheme="blue" size="md">Google Search</Button>
          <Button colorScheme="gray" size="md">I'm Feeling Lucky</Button>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box position="absolute" bottom={4} width="100%" textAlign="center">
        <HStack spacing={4} justify="center">
          <Link href="#">Advertising</Link>
          <Link href="#">Business</Link>
          <Link href="#">About</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Settings</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;