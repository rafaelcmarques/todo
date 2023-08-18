import { Container, Title, Quantity,CounterColorProps } from "./styles";
import { Text } from "react-native";

type Props = {
  title: string,
  type?: CounterColorProps['type'],
  quantity: number,
}

export function Counter({title, type='PRIMARY', quantity}: Props){
  return (
    <Container>
      <Title type={type}>
        {title}
      </Title>

      <Quantity>
        {quantity}
      </Quantity>
    </Container>
  )
}