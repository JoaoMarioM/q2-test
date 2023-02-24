import { useEffect } from "react";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import format from "date-fns/format";

import {
  Container,
  SubTitle,
  Title,
  FilterContainer,
  TitleContainer,
  ButtonFilter,
  ButtonTitleFilter,
  CardTaskContainer,
  CardTaskHeader,
  CardButtonSelect,
  CardHeaderTitle,
  ButtonTrash,
  CardTaskFooter,
  InfoFooterContainer,
  InfoFooterText,
  TagContainer,
  TagText,
  Button,
  ButtonTitle,
  ContainerModal,
  TitleModal,
  SubTitleModal,
  ButtonWhite,
  FilterOption,
  FilterOptionText,
  FilterOptionContainer,
} from "./styles";

import { Header } from "../../components/Header";

import TrashIcon from "../../assets/images/trash.svg";
import TimeIcon from "../../assets/images/time.svg";
import CalendarIcon from "../../assets/images/calendar.svg";
import PlusIcon from "../../assets/images/plus.svg";
import CheckIcon from "../../assets/images/check.svg";
import FilterIcon from "../../assets/images/filter.svg";

import { AuthenticatedRoutesProps } from "../../routes/interface";
import { useTaskList } from "./hooks";
import { TagsData } from "../createTask/hooks";

export function TaskList() {
  const { navigate, addListener, isFocused } =
    useNavigation<NativeStackNavigationProp<AuthenticatedRoutesProps>>();

  const {
    tasksFilter,
    isVisibleModal,
    typeModal,
    statusFilter,
    filterTag,
    filterStatus,
    handleCheck,
    getTag,
    setIsVisibleModal,
    handleOpenModal,
    handleAddFilterTag,
    handleAddFilterStatus,
    handleFilter,
    handleDeleteTask,
    getTasks
  } = useTaskList();

  useEffect(() => {
    const unsubscribe = addListener("focus", () => {
      getTasks()
    });

    return unsubscribe;
  }, [isFocused]);

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Header />

      <FilterContainer>
        <TitleContainer>
          <Title>Tarefas de hoje</Title>
          <SubTitle>Segunda-feira, 14 de Fevereiro</SubTitle>
        </TitleContainer>

        <ButtonFilter onPress={() => handleOpenModal("filter")}>
          <ButtonTitleFilter><FilterIcon/> Filtrar</ButtonTitleFilter>
        </ButtonFilter>
      </FilterContainer>

      {tasksFilter.map((task, i) => (
        <CardTaskContainer
          key={i}
          isCheck={task.isCheck}
          colorTag={getTag(task.tag)?.color}
        >
          <CardTaskHeader>
            <CardButtonSelect
              onPress={() => handleCheck(task.id)}
              isCheck={task.isCheck}
            >
              {task.isCheck && <CheckIcon />}
            </CardButtonSelect>

            <CardHeaderTitle isCheck={task.isCheck}>
              {task.description}
            </CardHeaderTitle>

            <ButtonTrash onPress={() => handleOpenModal("delete", task.id)}>
              <TrashIcon />
            </ButtonTrash>
          </CardTaskHeader>

          <CardTaskFooter>
            <InfoFooterContainer>
              <InfoFooterText>
                <TimeIcon /> {task.time}
              </InfoFooterText>

              <InfoFooterText>
                <CalendarIcon /> {format(new Date(task.calendar), "dd/MM")}
              </InfoFooterText>

              <TagContainer colorTag={getTag(task.tag)?.color}>
                <TagText colorTag={getTag(task.tag)?.color}>
                  {getTag(task.tag)?.name}
                </TagText>
              </TagContainer>
            </InfoFooterContainer>
          </CardTaskFooter>
        </CardTaskContainer>
      ))}

      <Button onPress={() => navigate("TaskCreate")}>
        <PlusIcon />
        <ButtonTitle> Criar nova tarefa</ButtonTitle>
      </Button>

      <Modal
        animationType="slide"
        visible={isVisibleModal}
        transparent={true}
        onRequestClose={() => setIsVisibleModal(false)}
      >
        <ContainerModal>
          <TitleModal>
            {typeModal === "delete"
              ? "Você tem certeza que deseja excluir essa tarefa?"
              : "Filtro"}
          </TitleModal>

          {typeModal === "delete" ? (
            <SubTitleModal>Essa ação não poderá se desfeita.</SubTitleModal>
          ) : (
            <>
              <SubTitleModal>Filtre por empresa:</SubTitleModal>
              <FilterOptionContainer>
                {TagsData.map((tag, i) => (
                  <FilterOption
                    key={i}
                    selected={filterTag?.includes(tag.id)}
                    onPress={() => handleAddFilterTag(tag.id)}
                  >
                    <FilterOptionText selected={filterTag?.includes(tag.id)}>
                      {tag.name}
                    </FilterOptionText>
                  </FilterOption>
                ))}
              </FilterOptionContainer>

              <SubTitleModal>Filtre por status da tarefa:</SubTitleModal>
              <FilterOptionContainer>
                {statusFilter.map((status, i) => (
                  <FilterOption 
                    key={i} 
                    selected={filterStatus === status}
                    onPress={() => handleAddFilterStatus(status)}
                  >
                    <FilterOptionText selected={filterStatus === status}>{status}</FilterOptionText>
                  </FilterOption>
                ))}
              </FilterOptionContainer>
            </>
          )}

          <Button
            onPress={() => typeModal === "delete" ? handleDeleteTask() : handleFilter()}
            style={{ width: "100%", marginTop: 49, borderRadius: 12 }}
          >
            <ButtonTitle style={{ marginLeft: 0 }}>
              {typeModal === "delete" ? "Excluir" : "Filtrar"}
            </ButtonTitle>
          </Button>

          <ButtonWhite onPress={() => setIsVisibleModal(false)}>
            <ButtonTitle style={{ marginLeft: 0, color: "#006AFF" }}>
              {typeModal === "delete" ? "Deixar como está" : "Fechar"}
            </ButtonTitle>
          </ButtonWhite>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
