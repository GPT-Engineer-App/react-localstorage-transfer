import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Save to localStorage and go to page 2
  const goToPageTwo = () => {
    localStorage.setItem("userInput", inputValue);
    setPage(2);
  };

  // Retrieve from localStorage
  const savedValue = localStorage.getItem("userInput");

  return (
    <Box p={4}>
      {page === 1 ? (
        <VStack spacing={4}>
          <Text fontSize="xl">Page 1: Enter Your Data</Text>
          <Input placeholder="Type something..." value={inputValue} onChange={handleInputChange} />
          <Button colorScheme="blue" onClick={goToPageTwo}>
            Save & Go to Page 2
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Text fontSize="xl">Page 2: Display Data</Text>
          <Text>
            The value you entered was: <strong>{savedValue}</strong>
          </Text>
          <Button colorScheme="teal" onClick={() => setPage(1)}>
            Go Back to Page 1
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Index;
