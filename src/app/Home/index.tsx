import React from "react";
// import { Text, View } from "react-native";
import { Heading } from "../../components/ui/heading";
import { Box } from "../../components/ui/box";
import { VStack } from "../../components/ui/vstack";
import { Text } from "../../components/ui/text";
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "../../components/ui/button";
import { Alert, Linking, View } from "react-native";

const HomeScreen = () => {
  const openWhatsApp = (url: string) => {
    // const url = "vnd.youtube://";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Error", "アプリがインストールされていません。");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <Box className="flex-1 bg-slate-200">
      <VStack space="md" className="flex-1 justify-center items-center">
        <View>
          <Text className="text-center">ディープリンク</Text>
          <Button
            onPress={
              () => openWhatsApp("maps:")
              // openWhatsApp("youtube://www.youtube.com/@TokiyoshiEnglishCompany")
            }
          >
            <Text className="text-white">Open map app</Text>
          </Button>
        </View>
        {/* <View>
          <Button onPress={openWhatsApp}>
            <Text className="text-white">Open whatsapp</Text>
          </Button>
        </View> */}
      </VStack>
      {/* <Box className="flex">
          <Button className="block w-[80px] bg-white rounded-md">
            <ButtonText className="text-black text-center text-sm">
              使い方・進め方
            </ButtonText>
            <ButtonIcon />
          </Button>
          <Button className="block w-[80px] bg-orange-300 rounded-md">
            <ButtonText className="text-black text-center text-sm">
              トレーニング日程
            </ButtonText>
          </Button>
          <Button className="w-[80px] bg-green-300 rounded-md">
            <ButtonText className="text-black text-center text-sm">
              各種教材
            </ButtonText>
            <ButtonIcon />
          </Button>
          <Button className="w-[80px] bg-blue-400 rounded-md">
            <ButtonText className="text-black text-center text-sm">
              EC MOBILE
            </ButtonText>
            <ButtonIcon />
          </Button>
        </Box> */}
      {/* </VStack> */}
    </Box>
  );
};

export default HomeScreen;
