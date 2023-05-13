import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "../Components/FullScreenSection";

const greeting = "Hello, I am Ahti!";
const bio1 = "A FUTURE FRONTEND DEVELOPER";
const bio2 = "TRAINING IN REACT";

const LandingSection = () => {
  const monospaceStyle = {
    fontFamily: 'Space mono, monospace',
    fontSize: '5rem',
    color: 'white',
  }
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  function toggleLetters (e) {  
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      const len = e.target.dataset.value.length

      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return e.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= len){ 
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }

  return(
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar
        alt="Petey boy"
        src="https://i.pravatar.cc/150?img=7"
        size="2x"
      />

      <h1 style={{fontSize:'2rem',fontFamily:'inherit'}}>
        {greeting}
      </h1>
      <VStack>
        <Heading className="hacker-text" data-value={bio1}  style={monospaceStyle}>
          <span data-value='A' onMouseOver={(e)=>toggleLetters(e)}>A</span>
          <span data-value=' FUTURE' onMouseOver={(e)=>toggleLetters(e)}> FUTURE</span>
          <span data-value=' FRONTEND' onMouseOver={(e)=>toggleLetters(e)}> FRONTEND</span>
          <span data-value=' DEVELOPER' onMouseOver={(e)=>toggleLetters(e)}> DEVELOPER</span>
        </Heading>
        <Heading className="hacker-text" data-value={bio2} style={monospaceStyle}>
          <span data-value='TRAINING' onMouseOver={(e)=>toggleLetters(e)}>TRAINING</span>
          <span data-value=' IN' onMouseOver={(e)=>toggleLetters(e)}> IN</span>
          <span data-value=' REACT' onMouseOver={(e)=>toggleLetters(e)}> REACT</span>
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);
}
export default LandingSection;  