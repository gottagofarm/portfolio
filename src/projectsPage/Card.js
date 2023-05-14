import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, id }) => {
  const position = `${50*id}% center`
  return (
    <VStack
      alignItems="left"
      backgroundColor="white"
      textColor="black"
      style={{borderRadius: '16px', overflow: 'hidden'}}
      justifyContent='space-between'
      width="45vmin"
      height="100vmin"
    >
      <Image
        src={imageSrc}
        alt={title}
        style={{ width:'45vmin', height:'70vmin', objectFit:'cover',objectPosition:{position}, userSelect:'none'}}
        overflow='hidden'
        draggable='false'
        className="image"
        id = {id}
      />
      <Heading padding='16px'>
        {title}
      </Heading>
      <Text padding='8px'>
        {description}
      </Text>
      <HStack padding='16px' display='flex'justifyContent={'right'}>
        <Text>
          See More
        </Text>
        <span className="icon-button">▶️</span>
      </HStack>
    </VStack>
  );
};

export default Card;
