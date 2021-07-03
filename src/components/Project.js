import { Box, Image, Badge } from "@chakra-ui/react";
import React from "react";
import devbook from "../assets/Devbook.jpg";

const Project = () => {
  return (
    <Box
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg="gray.600"
    >
      <Image src={devbook} alt="project image" />
      <Box p={20}>
        <Badge>New</Badge>
      </Box>
    </Box>
  );
};

export default Project;
