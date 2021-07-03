import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Box
        className="container"
        bg="gray.800"
        w="100vw"
        p={4}
        color="purple.200"
      >
        Ivan Mak{" "}
        <Button className="button" colorScheme="purple" variant="ghost">
          Projects
        </Button>
        <Button colorScheme="purple" variant="ghost">
          Experience
        </Button>
        <Button colorScheme="purple" variant="ghost">
          Education
        </Button>
        <Button colorScheme="purple" variant="ghost">
          Contact & Resume
        </Button>
        <Button colorScheme="purple" variant="ghost">
          Dark Mode Button
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
