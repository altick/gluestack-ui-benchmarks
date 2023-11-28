import { Factory, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { COUNT } from "../../utils";

const Button = Factory(Pressable, {
  baseStyle: {
    bg: "yellow.500",
    p: "2",
    m: "1",
    _hover: {
      bg: "yellow.500",
    },
    _pressed: {
      bg: "yellow.600",
    },
    _focus: {
      bg: "yellow.700",
    },
  },
  variants: {
    solid: {
      bg: "red.500",
      p: "2",
      _hover: {
        bg: "red.500",
      },
      _pressed: {
        bg: "red.600",
      },
      _focus: {
        bg: "red.700",
      },
    },
    outlined: {
      borderWidth: "1",
      borderColor: "red.500",
      bg: "transparent",
      _hover: {
        bg: "red.500",
      },
      _pressed: {
        bg: "red.600",
      },
      _focus: {
        bg: "red.700",
      },
    },
  },
});

const NativeBase = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Button
          key={k}
          variant="solid"
          _state={{
            isHovered: true,
            isPressed: true,
            isFocused: true,
          }}
          _hover={{
            bg: "violet.500",
          }}
          _pressed={{
            bg: "violet.600",
          }}
          _focus={{
            bg: "violet.700",
          }}
        ><Text>Button</Text></Button>
      ))}
    </>
  );
};

export default NativeBase;
