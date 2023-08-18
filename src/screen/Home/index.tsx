import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";

import { Container, Input, Button, Form, Icon } from "./styles";
import { EmptyList } from "../../Components/EmptyList";
import { Header } from "../../Components/Header";
import { Task } from "../../Components/Task";
import { taskGetAll } from "../../storage/task/tasksGetAll";
import { TaskDTO } from "../../storage/task/TaskDTO";
import { taskCreate } from "../../storage/task/taskCreate";
import { AppError } from "../../utils/AppError";
import { Counter } from "../../Components/Counter";


export function Home(){
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState<TaskDTO[]>([])


  const {COLORS} = useTheme();
  
  async function  fetchTasks(){
    try {
      const data = await taskGetAll()
      setTasks(data)
      console.log(tasks)
      
    } catch (error) {
      Alert.alert('Tarefas', 'Não foi possivel carregar as tarefas')
    }
  }

  async function handleCreateTask(taskTitle: string){
    try {
      await taskCreate({title: taskTitle, isDone:false})
      setTaskTitle('')
      fetchTasks()
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Tarefa', error.message)
      }else{
        Alert.alert('Tarefa', 'Não foi possivel cadastrar tarefa.')
      }
    }
    
  }

  useEffect(()=> {
    fetchTasks()
  }, [])

  return (
    <Container>
      <Header/>
      <Form>
        <Input 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor= {COLORS.GRAY_300}
          onChangeText={setTaskTitle}
          value={taskTitle}
        />
        <Button onPress={()=> handleCreateTask(taskTitle)}>
          <Icon name={"pluscircleo"} />
        </Button>
      </Form>

      <Form>
      <Counter title="Criadas" type="PRIMARY" quantity={tasks.length}/>
      <Counter title="Concluídas" type="SECONDERY" quantity={tasks.filter(task => task.isDone).length}/>
      </Form>

      <FlatList 
        data={tasks}
        keyExtractor={(item)=> item.title}
        renderItem={({item})=> 
         <Task title={item.title} fetchTasks={fetchTasks} isDone={item.isDone}/>
        }
        ListEmptyComponent={ 
          <EmptyList
            title= 'Você ainda não tem tarefas cadastradas'
            subtitle = 'Crie tarefas e organize seus itens a fazer'
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 100}, tasks.length === 0 && {flex: 1}]}
      />
    </Container>
  )
}