import React from 'react';
import Alert from './Components/Alert';
import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from './NavBar/NavBar';
import LandingSection from './landingPage/landing';
import ProjectsSection from './projectsPage/ProjectsSection';
import Footer from './Footer/Footer';



function App() {
  return(
    <ChakraProvider>
      <AlertProvider>
        <main>
          <NavBar/>
          <LandingSection/>
          <ProjectsSection/>
          <Footer/>
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
