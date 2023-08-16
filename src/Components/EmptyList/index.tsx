import { Container, Subtitle, Title, Icon } from "./styles";
type Props = {
  title: string,
  subtitle: string,
}
export function EmptyList({title, subtitle}:Props){
  return (
    <Container>
      <Icon name={'clipboard'}/>
      <Title>
        {title}
      </Title>
      <Subtitle>
          {subtitle}
      </Subtitle>
    </Container>
  )
}