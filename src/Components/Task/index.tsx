import { useState } from "react";
import { Container, Icon, Title, Button, Check } from "./styles";
import { taskDelete } from "../../storage/task/taskDelete";
import { taskUpdateStatus } from "../../storage/task/taskUpdateStatus";
import { Alert } from "react-native";


type Props = {
  title: string
  fetchTasks: () => void;
  isDone: boolean;
}
export function Task({title, fetchTasks, isDone }:Props){
  const [isSelected, setSelection] = useState(isDone);

  async function taskRemove(){
    try{
      await taskDelete(title)
      fetchTasks()
    }catch(error){
      Alert.alert('Tarefa', 'Não foi possivel deletar tarefa.')
    }
  }

  async function handleFunctionRemove(){
    Alert.alert(
      'Remover',
      'Deseja remover o tarefa?',
      [
        { text: 'Não', style: 'cancel'},
        { text: 'Sim', onPress: ()=> {taskRemove()}}
      ]
    )
  }

  async function updateStatus() {
    await taskUpdateStatus(title);
    setSelection(!isDone);
    fetchTasks()
  }


  return(
    <Container >
      <Check
          value={isSelected}
          onValueChange={updateStatus}
        />
      <Title isSelected={isSelected}>
       {title}
      </Title>
      <Button onPress={handleFunctionRemove}>
        <Icon name={'trash-2'}/>
      </Button>
    </Container>
  )
}