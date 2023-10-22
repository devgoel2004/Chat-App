import { Box } from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="1g"
      m={1}
      mb={2}
      variant="solid"
      color="white"
      fontWeight="bold"
      fontSize={12}
      backgroundColor="purple"
      cursor="pointer"
      onClick={handleFunction}
      borderEndRadius="1xl"
      borderStartRadius="1xl">
      {user.name}
      <CloseIcon p1={2} ml={1} />
    </Box>
  );
};

export default UserBadgeItem;
