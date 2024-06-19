import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider, Button } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaRobot } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="#" color="white">About</Link>
          <Link as={RouterLink} to="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="xl">Welcome to the Tech Forum</Heading>
        <Text fontSize="lg">Discuss the latest in technology with fellow enthusiasts.</Text>

        <Button as={RouterLink} to="/create-post" colorScheme="blue">Create New Post</Button>

        <Divider />

        <VStack spacing={4} align="stretch" w="full">
          {posts.map((post, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px">
              <Heading size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}

          <Box p={4} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <FaLaptopCode size="24px" />
              <Heading size="md">Programming</Heading>
            </HStack>
            <Text mt={2}>Discuss various programming languages, frameworks, and best practices.</Text>
          </Box>

          <Box p={4} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <FaMobileAlt size="24px" />
              <Heading size="md">Mobile Development</Heading>
            </HStack>
            <Text mt={2}>Share insights and ask questions about mobile app development.</Text>
          </Box>

          <Box p={4} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <FaDatabase size="24px" />
              <Heading size="md">Databases</Heading>
            </HStack>
            <Text mt={2}>Discuss database management systems, SQL, NoSQL, and more.</Text>
          </Box>

          <Box p={4} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <FaCloud size="24px" />
              <Heading size="md">Cloud Computing</Heading>
            </HStack>
            <Text mt={2}>Talk about cloud services, architecture, and deployment strategies.</Text>
          </Box>

          <Box p={4} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <FaRobot size="24px" />
              <Heading size="md">Artificial Intelligence</Heading>
            </HStack>
            <Text mt={2}>Explore AI, machine learning, and data science topics.</Text>
          </Box>
        </VStack>
      </VStack>

      <Flex as="footer" bg="blue.500" color="white" p={4} mt={8} justifyContent="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;