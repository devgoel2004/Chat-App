import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Avatar, Box, background } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
const UserListItem = ({ user, handleFunction }) => {
  //   const { user } = ChatState();
  return (
    <div>
      <Box
        onClick={handleFunction}
        cursor="pointer"
        bg="#e8e8e8"
        _hover={{ bg: "#38B2ac", color: "white" }}
        w="100%"
        display="flex"
        alignItems="center"
        color="black"
        px={3}
        py={2}
        mb={2}
        borderRadius="1g">
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.pic}></Avatar>
        <Box>
          <Text>{user.name}</Text>
          <Text fontSize="xs">
            <b>Email :</b>
            {user.email}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default UserListItem;
