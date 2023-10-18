import {
  Box,
  Text,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/authentication/Login";
import Signin from "../components/authentication/Signin";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          w="100%"
          bg="white"
          m="40px 0 15px 0"
          borderRadius="1g"
          borderWidth="1px">
          <Text fontSize="4xl" fontFamily="Poppins" color="black">
            Talk-A-Tive
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="2g" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList color="black">
              <Tab
                color="black"
                width="50%"
                _selected={{ color: "white", bg: "blue.300" }}>
                Login
              </Tab>
              <Tab
                width="50%"
                color="black"
                _selected={{ color: "white", bg: "blue.300" }}>
                SignIn
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
                <Login />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
                <Signin />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
