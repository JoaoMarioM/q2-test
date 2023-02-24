import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { format, subMinutes } from "date-fns";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { FormCreateProps } from "./interface";
import { AuthenticatedRoutesProps } from "../../routes/interface";
import { TaskProps } from "../taskList/interface";
import { createNotification } from "../../services/notification/createNotification";

export const TagsData = [
  {
    id: 1,
    name: "Q2BANK",
    color: "#006AFF",
  },
  {
    id: 2,
    name: "Q2PAY",
    color: "#094AEA",
  },
  {
    id: 3,
    name: "Q2INGRESSOS",
    color: "#005B8E",
  },
];

export const useCreateTask = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<AuthenticatedRoutesProps>>();

  const [isDatePicker, setIsDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState<number>();

  const schema = yup
    .object({
      description: yup.string().required(),
      time: yup.date().required(),
      calendar: yup.date().required(),
      tag: yup.string().required(),
    })
    .required();

  const initialValues = {
    description: "",
    time: new Date(),
    calendar: new Date(),
    tag: undefined,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormCreateProps>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleCreate = async (data: FormCreateProps) => {
    setIsLoading(true);
    try {
      const tasksString = await AsyncStorage.getItem("@q2_task");

      const newTime = subMinutes(data.time, 1);
      const formatDate = `${format(data.calendar, "yyyy-MM-dd")} ${format(
        newTime,
        "HH:mm"
      )}:00 GMT-0300`;
      await createNotification(data.description, formatDate);

      if (tasksString) {
        const tasks: any[] = JSON.parse(tasksString);
        const id: number = ganerateId(tasks) as number;

        tasks.push({
          ...data,
          id,
          isCheck: false,
          status: "Pendente",
          time: format(data.time, "HH:mm"),
        });

        await AsyncStorage.setItem("@q2_task", JSON.stringify(tasks));
        navigate("TaskList");
      } else {
        await AsyncStorage.setItem(
          "@q2_task",
          JSON.stringify([
            {
              ...data,
              id: 1,
              isCheck: false,
              status: "Pendente",
              time: format(data.time, "HH:mm"),
            },
          ])
        );
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1:
          "OPS, Não foi criar uma tarefa, verifique se a data é igual ou maior que a de hoje e se o horário é maior que a hora atual!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePickerDate = (date: Date) => {
    setValue("calendar", date);
    setIsDatePicker(false);
  };

  const handleChangePickerTime = (date: Date) => {
    // setValue("time", format(date, "HH:mm"));
    setValue("time", date);

    setIsDatePicker(false);
  };

  const handleAddTag = (id: number) => {
    setValue("tag", id);
    setTag(id);
  };

  const ganerateId = (data: TaskProps[]) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const findId = data.find((item) => item.id === id);

    if (findId) {
      ganerateId(data);
    } else {
      return id;
    }
  };

  return {
    control,
    TagsData,
    isDatePicker,
    tag,
    errors,
    isLoading,
    handleCreate,
    setIsDatePicker,
    handleChangePickerDate,
    handleChangePickerTime,
    handleAddTag,
    handleSubmit,
  };
};
