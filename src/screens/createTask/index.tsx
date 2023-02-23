import DateTimePicker from "@react-native-community/datetimepicker";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Button,
  ButtonTitle,
  FilterOption,
  FilterOptionText,
  SubTitle,
  Title,
} from "../taskList/styles";
import { Container, TagContainer, TagTitle } from "./styles";

import TaskIcon from "../../assets/images/create.svg";
import TimerLargerIcon from "../../assets/images/timerLarger.svg";
import CalendarLargerIcon from "../../assets/images/calendarLarger.svg";
import SaveIcon from "../../assets/images/save.svg";
import { TagsData, useCreateTask } from "./hooks";
import { Platform } from "react-native";
import { InputPicker } from "../../components/Input/picker";
import { Preloader } from "../../components/Preloader";

export const CreateTask = () => {
  const {
    handleCreate,
    handleAddTag,
    handleChangePickerDate,
    handleChangePickerTime,
    handleSubmit,
    control,
    tag,
    errors,
    isLoading,
  } = useCreateTask();

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Header />

      <Title>Crie uma tarefa</Title>
      <SubTitle>Descreva brevemente a sua tarefa e adicione um prazo.</SubTitle>

      <Input
        name="description"
        label="Dê um título para a sua tarefa"
        placeholder="Descrição tarefas"
        icon={<TaskIcon />}
        iconFocus={<TaskIcon />}
        iconValue={<TaskIcon />}
        mt={45}
        control={control}
        error={errors}
      />

      <InputPicker
        label="Horário limite"
        icon={<CalendarLargerIcon />}
        iconFocus={<CalendarLargerIcon />}
        iconValue={<CalendarLargerIcon />}
        mt={32}
        onChange={handleChangePickerTime}
        type="time"
      />

      <InputPicker
        label="Data limite"
        icon={<CalendarLargerIcon />}
        iconFocus={<CalendarLargerIcon />}
        iconValue={<CalendarLargerIcon />}
        mt={32}
        onChange={handleChangePickerDate}
        type="date"
      />

      <TagTitle>Selecione uma empresa:</TagTitle>
      <TagContainer>
        {TagsData.map((_tag) => (
          <FilterOption
            key={_tag.id}
            selected={tag === _tag.id}
            onPress={() => handleAddTag(_tag.id)}
          >
            <FilterOptionText selected={tag === _tag.id}>
              {_tag.name}
            </FilterOptionText>
          </FilterOption>
        ))}
      </TagContainer>

      <Button onPress={handleSubmit(handleCreate)}>
          {isLoading ? <Preloader /> : (
            <>
        <SaveIcon />
        <ButtonTitle>Salvar tarefa
        </ButtonTitle>
            </>
          )}

      </Button>
    </Container>
  );
};
