import { StatusBar, SafeAreaView } from "react-native";
import OneSignal from 'react-native-onesignal';
import { Toast } from "./src/components/Toast";

import { AuthProvider } from "./src/providers/authProvider";
import { Routes } from "./src/routes";
import { sendTag } from "./src/services/notification/sendTag";

OneSignal.setAppId('1cd5379d-ec96-4c9d-8c13-baf5412d34c6')

export default function App() {
  sendTag();

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#F7F8FA" />
        <Routes />
        <Toast />
      </SafeAreaView>
    </AuthProvider>
  );
}
