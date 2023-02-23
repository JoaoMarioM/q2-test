import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";
import { TaskList } from "../screens/taskList";
import { AuthRoutesProps } from "./interface";

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{ headerShown: false }}
      >
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
