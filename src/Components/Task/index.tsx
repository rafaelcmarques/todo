import { useState } from "react";
import { Container, Icon, Title, Button, Check } from "./styles";
import { taskDelete } from "../../storage/task/taskDelete";
import { Alert } from "react-native";


type Props = {
  title: string
  onTaskDeleted: () => void;
}
export function Task({title, onTaskDeleted }:Props){
  const [isSelected, setSelection] = useState(false);

  async function taskRemove(){
    try{
      await taskDelete(title)
      onTaskDeleted()
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


  return(
    <Container >
      <Check
          value={isSelected}
          onValueChange={setSelection}
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