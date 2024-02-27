import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Navbar() {
  //   const location = useLocation();
  return (
    <>
      {/* <Link to="/"> Home </Link> */}
      {/* <Link to="/posts"> Blog </Link> */}
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <Tab
              style={{
                marginRight: 29,
              }}
            >
              HOME
            </Tab>
          </Link>
          <Link to="/posts">
            <Tab
              style={{
                marginLeft: 29,
              }}
            >
              BLOGS / ARTICLE
            </Tab>
          </Link>
        </TabList>
      </Tabs>
    </>
  );
}

export default Navbar;
