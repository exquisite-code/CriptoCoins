import { Text, View } from "react-native";
import { Feather, Ionicons, Fontisto   } from "@expo/vector-icons";
import { Container, Icons } from "./styles";

export function Header() {
  return (
    <Container>
      <Text style={{flexDirection:"row", color:"#fff"}}>HOME</Text>

      <Icons>
        <Feather name="user" size={22} color={"#fff"} />
        <Ionicons name="ios-menu-outline" size={22} color={"#fff"}/>
        <Fontisto name="bell" size={22} color={"#fff"} />
      </Icons>
    </Container>
  );
}
