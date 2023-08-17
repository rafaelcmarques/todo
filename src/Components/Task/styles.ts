import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import styled from "styled-components/native";

export const Container =  styled.View`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  padding: 12px;

  background-color: ${({theme})=> theme.COLORS.GRAY_500};
  border: solid 1px ${({theme})=> theme.COLORS.GRAY_400};

  flex-direction: row ;
  align-items: center;

  margin-top: 15px;
`
export const Title = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected ,theme}) => (isSelected ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100)};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin: 0 8px;
  flex: 1;
  text-decoration: ${({ isSelected }) => (isSelected ? "line-through" : "none")};
`;

export const Button = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(Feather).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_300,
  size: 20
}))``

export const Check = styled(Checkbox)`
  border-radius: 50px;
  border: 1px solid ${({theme})=> theme.COLORS.BLUE};
  
`