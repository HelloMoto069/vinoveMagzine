import React from "react";
import { Text, Badge, Flex, Avatar, Box, Tabs, Tab } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 29,
          }}
        >
          <Text fontSize="45px" color="red">
            WELCOME TO HELLO MOTO ARTICLES BLOG
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 17,
          }}
        >
          <Text fontSize="17px" color="red" fontWeight="bold">
            TECH Stack Using:
          </Text>
          <Text fontSize="17px" color="red">
            <Badge ml="1" colorScheme="green">
              REACT
            </Badge>
            <Badge ml="1" colorScheme="green">
              REDUX
            </Badge>
            <Badge ml="1" colorScheme="green">
              CHAKRA-UI
            </Badge>
          </Text>
        </div>
        <div
          style={{
            marginTop: 47,
          }}
        >
          <Flex>
            <Avatar src="https://avatars.githubusercontent.com/u/87747551?v=4" />
            <Box ml="3">
              <Text fontWeight="bold">
                ANURUDDH SINGH
                <Badge ml="1" colorScheme="green">
                  Hello Moto
                </Badge>
              </Text>
              <Text fontSize="sm">Software Developer</Text>
            </Box>
          </Flex>
        </div>
        <div
          style={{
            marginTop: 29,
          }}
        >
          <Link to="/posts">
            <Text fontSize="29px" color="blue">
              Read Blogs
            </Text>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
