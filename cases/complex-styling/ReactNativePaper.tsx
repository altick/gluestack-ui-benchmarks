import React from "react";
import { COUNT } from "../../utils";
import { ButtonProps, useTheme, Button, Text } from "react-native-paper";

const CustomButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button {...props} theme={{
      colors: {
        primary: "red",
        onPrimary: theme.colors.onPrimary
      }
    }} />
  );
}

const ReactNativePaper = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <CustomButton key={k}><Text>Button</Text></CustomButton>
      ))}
    </>
  );
};

export default ReactNativePaper;
