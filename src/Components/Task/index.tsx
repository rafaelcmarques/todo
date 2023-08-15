import { useState } from "react";
import { Container, Icon, Title, Button, Check } from "./styles";
import Checkbox from 'expo-checkbox';


type Props = {
  title: string
}
export function Task({title}:Props){
  const [isSelected, setSelection] = useState(false);
  return(
    <Container>
      <Check
          value={isSelected}
          onValueChange={setSelection}
        />
      <Title>
       {title}
      </Title>
      <Button>
        <Icon name={'trash-2'}/>
      </Button>
    </Container>
  )
}