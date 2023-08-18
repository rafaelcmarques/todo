import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { taskGetAll } from "./tasksGetAll";


export async function taskUpdateStatus(task: string) {
    try {
        const storedTasks = await taskGetAll();

        const updatedTasks = storedTasks.map((storedTask) =>
            storedTask.title === task ? { ...storedTask, isDone: !storedTask.isDone } : storedTask
        );

        const storage = JSON.stringify(updatedTasks);
        await AsyncStorage.setItem(TASK_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}
