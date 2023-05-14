import React, { useState,useRef,useEffect } from "react";
import FullScreenSection from "../Components/FullScreenSection";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Cool Wave",
    description:
      "Cool little svg wave transition between sections (this is just padding) (picture by Silas Baisch)",
    getImageSrc: () => require("../images/silas-baisch-wave.jpg"),
  },
  {
    title: "Infinite Scroll",
    description:
      "A scrollable project section with parallax effect, soon to be implemented 🔥️ (picture by jason fitt)",
    getImageSrc: () => require("../images/jason-fitt-infinite.jpg"),
  },
  {
    title: "Dropdown Menu",
    description:
      "A dropdown menu which totally allows you to choose your own settings (picture by foo visuals)",
    getImageSrc: () => require("../images/foo-visuals-menu.jpg"),
  },
  {
    title: "Cool letter effect",
    description:
      "A nice little effect on the bio of the landing page, displayed on hover... (picture by Florian Olivo)",
    getImageSrc: () => require("../images/florian-olivo-coolText.jpg"),
  },
];


const ProjectsSection = () => {
  const trackRef = useRef(null);

  const [id0, setId0] = useState(0)
  const [id1, setId1] = useState(1)
  const [id2, setId2] = useState(1)
  const [id3, setId3] = useState(2)
  const [mouseDownAt, setMouseDownAt] = useState("0");
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = e => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt("0");  
    setPrevPercentage(percentage);
  };

  const handleOnMove = e => {
    if(mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    const percentageUsed = (mouseDelta / maxDelta) * -100;

    const nextPercentage = parseFloat(prevPercentage) + percentageUsed;
    
    if (nextPercentage<-100){
      setId0((id0)<2? id0+1 : 0)
      setId1((id1)<2? id1+1 : 0)
      setId2((id2)<2? id2+1 : 0)
      setId3((id3)<2? id3+1 : 0)
      setPercentage(nextPercentage+100)
    }else if(nextPercentage>100){
      setId0((id0)>0? id0-1 : 2)
      setId1((id1)>0? id1-1 : 2)
      setId2((id2)>0? id2-1 : 2)
      setId3((id3)>0? id3-1 : 2)
      setPercentage(nextPercentage-100)
    }else{
      setPercentage(nextPercentage)
    }

    trackRef.current.animate({
      transform: `translateX(${percentage}%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const img of trackRef.current.getElementsByClassName("image")) {
        img.animate({
          objectPosition: `${50*img.id + percentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  };


  return (
    <FullScreenSection 
      onMouseUp={()=>handleOnUp()}
      backgroundColor="#576572"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      position="relative"
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        ref={trackRef}
        display="flex"
        flexDirection="row"
        gap={8}
        id = "card-track"
        onMouseDown={(e)=>handleOnDown(e)}
        onMouseMove={(e)=>handleOnMove(e)}
        onTouchStart={(e)=>handleOnDown(e.touches[0])}
        onTouchEnd={(e)=>handleOnUp()}
        onTouchMove={(e)=>handleOnMove(e.touches[0])}
      >
        <HStack gap={8} className="cards" id ={id0}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            id ={id0}
          />
        ))}
        </HStack>
        <HStack gap={8} className="cards" id ={id1}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            id ={id1}
          />
        ))}
        </HStack>
        <HStack gap={8} className="cards" id ={id2}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            id ={id2}
          />
        ))}
        </HStack>
        <HStack gap={8} className="cards" id ={id3}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            id ={id3}
          />
        ))}
        </HStack>
      </Box>
      <div class="waves">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
