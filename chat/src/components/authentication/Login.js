import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Button, VStack } from "@chakra-ui/react";
import "./Login.css";
const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = () => {};
  return (
    <div className="Login">
      <VStack spacing="5px" color="black">
        <FormControl id="first-email">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Name"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <Button
          colorScheme="green"
          width="100%"
          color={"white"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}>
          Login
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}>
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
};

export default Login;
