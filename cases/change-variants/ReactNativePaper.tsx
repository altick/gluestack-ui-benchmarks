import React from "react";
import { COUNT } from "../../utils";
import { ButtonProps, useTheme, Button, Text } from "react-native-paper";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button {...props} theme={{
      colors: {
        primary: "red",
      }
    }} />
  );
}

const ReactNativePaper = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <CustomButton key={k} mode={toggleVariant ? "outlined" : "contained"} />
      ))}
    </>
  );
};

export default ReactNativePaper;
