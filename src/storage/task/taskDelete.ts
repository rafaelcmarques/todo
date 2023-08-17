import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { TASK_COLLECTION } from "../storageConfig";
import { taskGetAll } from "./tasksGetAll";
import { TaskDTO } from "./TaskDTO";


export async function taskDelete(taskTitle: string){
    try {
      const storedTasks = await taskGetAll()
      const filteredTasks = storedTasks.filter(task => task.title !== taskTitle)
      const storage = JSON.stringify([...filteredTasks])
      await AsyncStorage.setItem(TASK_COLLECTION, storage)
    } catch (error) {
      throw error;
    }
}