import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      alignItems="left"
      backgroundColor="white"
      textColor="black"
      style={{borderRadius: '16px', overflow: 'hidden'}}
      justifyContent='space-between'
    >
      <Image
        src={imageSrc}
        alt={title}
        style={{ borderRadius: '16px' }}
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
