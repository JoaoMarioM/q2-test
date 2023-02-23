import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateTask } from "../screens/createTask";
import { TaskList } from "../screens/taskList";
import { AuthenticatedRoutesProps } from "./interface";

const { Navigator, Screen } = createNativeStackNavigator<AuthenticatedRoutesProps>();

export const AuthenticatedRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TaskList"
      >
        <Screen name="TaskList" component={TaskList} />
        <Screen name="TaskCreate" component={CreateTask} />
      </Navigator>
    </NavigationContainer>
  );
};
