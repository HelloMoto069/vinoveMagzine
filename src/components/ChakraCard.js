import React from "react";
import { Card, CardBody, Image, Text, Heading, Button } from "@chakra-ui/react";

function ChakraCard(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.ImageSrc}
        alt={props.imageAlt}
      />


        <CardBody>
          <Heading size="md">{props.Heading}</Heading>

          <Text py="2">
           {props.Text}
          </Text>
        </CardBody>

        {/* <CardFooter>
          <Button variant="solid" colorScheme="blue">
            OPEN ARTICLE
          </Button>
        </CardFooter> */}

    </Card>
  );
}

export default ChakraCard;
