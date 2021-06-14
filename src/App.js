import './App.css';
import { Box, Container } from "@chakra-ui/react";

function App() {
  return (
    <>
    <Container minw="7xl" h="100vh" bg={{ base:"red", md:"green", lg:"blue"}} 
    paddingX={{ base:"7", md:"20", lg:"20"}}>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </Container>
    </>
  );
}

export default App;
