import styled from "styled-components/native";

export type CounterColorProps = {
  type?: 'PRIMARY' | 'SECONDERY';
}

export const Container = styled.View `
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text<CounterColorProps>`
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};

`

export const Quantity = styled.Text`
  text-align: center;
  justify-content: center;
  width: 25px;
  height: 19px;
  border-radius:9px;
  margin-left: 8px;
 
  background-color: ${({theme})=> theme.COLORS.GRAY_400};
  color: ${({theme})=> theme.COLORS.GRAY_200};;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
`