import styled from "styled-components/native";
import  {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons'


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
  padding: 70px 24px;
`

export const Input = styled.TextInput`
  flex: 1;
  height: 54px;
  padding: 16px;
  margin-right: 4px;
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px ;
  background-color: ${({theme})=> theme.COLORS.GRAY_500};
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  border-radius: 6px;
  color:  ${({theme})=> theme.COLORS.GRAY_100};
`

export const Button = styled(TouchableOpacity)`
  width: 52px;
  height: 53px;
  background-color: ${({theme})=> theme.COLORS.BLUE_DARK};
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`

export const Form = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`

export const Icon = styled(AntDesign).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_100,
  size: 18
}))``