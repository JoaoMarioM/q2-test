import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthRoutesProps = {
  Login: undefined;
};

export type AuthenticatedRoutesProps = {
  TaskList: undefined;
  TaskCreate: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>