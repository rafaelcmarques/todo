import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons"

export const Container = styled.View`
  align-items: center;
  flex: 1;
`
export  const Title = styled.Text`
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  color: ${({theme})=> theme.COLORS.GRAY_300};
`

export  const Subtitle = styled.Text`
 font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
 font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
 color: ${({theme})=> theme.COLORS.GRAY_300};
`

export const Icon = styled(Feather).attrs(({theme})=>({
  color: theme.COLORS.GRAY_400,
  size: 70
}))`
  margin: 48px 0  16px ;
`