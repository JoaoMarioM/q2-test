import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TagsData } from "../createTask/hooks";
import { TaskProps } from "./interface";

export const useTaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksFilter, setTasksFilter] = useState(tasks)
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [typeModal, setTypeModal] = useState("delete");
  const [filterTag, setFilterTag] = useState<number[]>([]);
  const [filterStatus, setFilterStatus] = useState("Pendente");
  const [idSelected, setIdselected] = useState<number>();

  const statusFilter = ["Finalizada", "Pendente"]

  const handleCheck = (id: number) => {
    const newTaskList = [...tasks];
    const findIndexTask = newTaskList.findIndex(task => task.id === id);

    newTaskList[findIndexTask].isCheck = !newTaskList[findIndexTask].isCheck;

    if(newTaskList[findIndexTask].isCheck) {
      newTaskList[findIndexTask].status = "Finalizada"
    } else {
      newTaskList[findIndexTask].status = "Pendente"
    }
    setTasks(newTaskList);
  };

  const getTag = (id: number) => {
    const findColor = TagsData.find(color => color.id === Number(id)) 
    return findColor;
  };

  const handleOpenModal = (type: string, id?: number) => {
    if(type === "delete") {
      setIdselected(id)
    };

    setTypeModal(type);
    setIsVisibleModal(true);
  };

  const handleAddFilterTag = (id: number) => {
    const _filterTag = [...filterTag];
    const hasTag = _filterTag.indexOf(id);

    if(hasTag >= 0){
      _filterTag.splice(hasTag, 1);
      setFilterTag(_filterTag)
      return;
    }

    _filterTag.push(id);
    setFilterTag(_filterTag);
  };


  const handleAddFilterStatus = (status: string) => {
    if(filterStatus === status) {
      setFilterStatus("");
      return;
    }

    setFilterStatus(status);
  }

  const handleFilter = () => {
    let filter = [...tasks];

    if(filterStatus){
      filter = tasks.filter(item => item.status === filterStatus);
    }

    if(filterTag.length){
      const _filter: any[] = []
      filterTag.map(item => {
        _filter.push(...filter.filter(_item => _item.tag === item))
      })

      filter = _filter;
    };

    setTasksFilter(filter);
    setIsVisibleModal(false);
  }

  const handleDeleteTask = () => {
    const newTask = [...tasks];
    const findIndexTask = newTask.findIndex(item => item.id === idSelected);

    if(findIndexTask >= 0){
      newTask.splice(findIndexTask, 1);
      setTasks(newTask);
      setTasksFilter(newTask);
      setIsVisibleModal(false)
    }
  };

  const getTasks = async () => {
    const tasksString = await AsyncStorage.getItem('@q2_task');

    if(tasksString){
      const tasks: TaskProps[] = JSON.parse(tasksString);
 
      setTasks(tasks);
      setTasksFilter(tasks);
    }
  }

  return {
    tasks,
    isVisibleModal,
    typeModal,
    statusFilter,
    filterTag,
    filterStatus,
    tasksFilter,
    handleCheck,
    getTag,
    setIsVisibleModal,
    handleOpenModal,
    handleAddFilterTag,
    handleAddFilterStatus,
    handleFilter,
    handleDeleteTask,
    getTasks
  }
};