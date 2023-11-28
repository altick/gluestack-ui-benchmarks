import { ChevronDownIcon, Icon, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Text, styled, useToken } from "@gluestack-ui/themed";
import React from "react";
import { Pressable, PressableProps } from "react-native";
import { COUNT } from "../../utils";

const Button = styled(Pressable, {
  bg: "$yellow500",
  p: "$2",
  m: "$1",
  ":hover": {
    bg: "$yellow600",
  },
  ":active": {
    bg: "$yellow700",
  },
  ":focus": {
    bg: "$yellow800",
  },
  variants: {
    variant: {
      solid: {
        bg: "$red500",
        p: "$2",
        ":hover": {
          bg: "$red600",
        },
        ":active": {
          bg: "$red700",
        },
        ":focus": {
          bg: "$red800",
        },
      },
      outlined: {
        borderWidth: "$1",
        borderColor: "$red500",
        bg: "transparent",
        ":hover": {
          bg: "$red600",
        },
        ":active": {
          bg: "$red700",
        },
        ":focus": {
          bg: "$red800",
        },
      },
    },
  },
});

const Button2 = ({ children, ...props }: PressableProps) => {
  const token = useToken("colors", "red500");

  return (
    <Button {...props}>{children}</Button>
  )
}

const Gluestack = () => {
  return (
    <>
      {/* <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />

        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select> */}
      {new Array(COUNT).fill(0).map((_, k) => (
        <Button2
          key={k}
          states={{
            hover: true,
            active: true,
            focus: true,
          }}
          variant="solid"
          sx={{
            ":hover": {
              bg: "$violet600",
            },
            ":active": {
              bg: "$violet700",
            },
            ":focus": {
              bg: "$violet800",
            },
          }}
        ><Text>Button</Text></Button2>
      ))}
    </>
  );
};

export default Gluestack;
