import React from "react";
import { Text, View } from "react-native";
import { Heading } from "../../components/ui/heading";
import { Box } from "../../components/ui/box";

const HomeScreen = () => {
  return (
    <Box className="flex-1 bg-slate-200">
      <Heading className="text-red-500 text-center">Heading</Heading>
      <Text>HomeScreen</Text>
    </Box>
  );
};

export default HomeScreen;
