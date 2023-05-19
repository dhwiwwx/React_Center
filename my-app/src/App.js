import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { useState, useEffect } from "react";
import MainComponent from "./components/MainComponents";
function App() {
  const [number, setNumber] = useState(0);

  return (
    <ChakraProvider>
      <MainComponent />
    </ChakraProvider>
  );
}

export default App;
