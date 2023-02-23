import OneSignal from 'react-native-onesignal';

export const sendTag = () => {
  OneSignal.sendTag("app_name", "q2-task");
};