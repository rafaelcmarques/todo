import { FlatList } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";

import { Container, Input, Button, Form, Icon } from "./styles";
import { EmptyList } from "../../Components/EmptyList";
import { Header } from "../../Components/Header";
import { Task } from "../../Components/Task";


export function Home(){
  type TaskDTO = {
    title: string;
    isDone: boolean;
  }



  const [tasks, setTasks] = useState<TaskDTO[]>([
    { title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei',isDone: false},
    { title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei',isDone: false},
    { title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei',isDone: false},
    { title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei',isDone: true},
  ])

  const {COLORS} = useTheme();
  return (
    <Container>
      <Header/>
      <Form>
        <Input 
          placeholder="Adicionae uma nova tarefa"
          placeholderTextColor= {COLORS.GRAY_300}
        />
        <Button>
          <Icon name={"pluscircleo"} />
        </Button>
      </Form>

      <FlatList 
        data={tasks}
        keyExtractor={(item)=> item.title}
        renderItem={({item})=> 
         <Task title={item.title}/>
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