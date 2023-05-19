import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { useState, useEffect } from "react";
import MainComponent from "./components/MainComponents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  const [number, setNumber] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <MainComponent />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
