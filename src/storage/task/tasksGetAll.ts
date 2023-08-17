import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { TASK_COLLECTION } from "../storageConfig";
import { TaskDTO } from "./TaskDTO";

export async function taskGetAll(){
  try {
      const storage = await AsyncStorage.getItem(TASK_COLLECTION)
      const tasks:TaskDTO[] = storage ? JSON.parse(storage) : []
      return tasks
  } catch (error) {
    throw error
  }
}