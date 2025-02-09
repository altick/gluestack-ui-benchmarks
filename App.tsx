import { useFonts } from "expo-font";
import NavigationProvider from "./navigation/NavigationProvider";
import HomeScreen from "./HomeScreen";
import {
  ChangeVariants,
  LayoutScreen,
  SimpleComponent,
  ComplexStyling,
} from "./cases";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TMConfig from "./tamagui.config";
import { TamaguiProvider } from "tamagui";
import { NativeBaseProvider } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./gluestack-ui.config";
import { PaperProvider } from "react-native-paper"

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <GluestackUIProvider config={config}>
        <TamaguiProvider config={TMConfig}>
          <PaperProvider>
          <NavigationProvider>
            <Stack.Navigator initialRouteName="home">
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                  title: "Home",
                }}
              />
              <Stack.Screen
                name="simple-component"
                component={SimpleComponent}
                options={{
                  title: "Simple component",
                }}
              />
              <Stack.Screen
                name="updating-variant"
                component={ChangeVariants}
                options={{
                  title: "Updating variant",
                }}
              />
              <Stack.Screen
                name="theme-inline-styling"
                component={ComplexStyling}
                options={{
                  title: "Theme and inline style",
                }}
              />
              <Stack.Screen
                name="layout-screen"
                component={LayoutScreen}
                options={{
                  title: "Layout screen",
                }}
              />
            </Stack.Navigator>
          </NavigationProvider>
          </PaperProvider>
        </TamaguiProvider>
      </GluestackUIProvider>
    </NativeBaseProvider>
  );
}
