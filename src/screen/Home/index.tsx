import { Header } from "../../Components/Header";
import { Task } from "../../Components/Task";
import { Container, Input, Button, Form, Icon } from "./styles";
import { useTheme } from "styled-components/native";


export function Home(){
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
      <Task title={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei'}/>
      <Task title={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei'}/>
      <Task title={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei'}/>
      <Task title={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei'}/>
      <Task title={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque explicabo ei'}/>

    </Container>
  )
}