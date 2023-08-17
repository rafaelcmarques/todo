import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { TASK_COLLECTION } from "../storageConfig";
import { taskGetAll } from "./tasksGetAll";
import { TaskDTO } from "./TaskDTO";


export async function taskCreate (newTask: TaskDTO){
    try {
      const storedTasks = await taskGetAll()
      const taskAlreadyExist = storedTasks.filter(task => task.title === newTask.title)
      
      if(taskAlreadyExist.length > 0){
        throw new AppError('Já existe uma tarefa igual a essa cadastrada.')
      }
      const storage = JSON.stringify([...storedTasks, newTask])
      await AsyncStorage.setItem(TASK_COLLECTION, storage)
    } catch (error) {
      throw error;
    }
}