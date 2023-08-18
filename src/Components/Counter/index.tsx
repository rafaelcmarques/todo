import { Container, Title, Quantity,CounterColorProps,Text } from "./styles";


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
        <Text>
          {quantity}
        </Text>
      </Quantity>
    </Container>
  )
}