import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.container}>

           <View style={styles.icons}>
            <Text style={styles.iconsText}>HOME</Text>
            <Text style={styles.iconsText}>SININHO</Text>
            <Text style={styles.iconsText}>PERFIL</Text>
            <Text style={styles.iconsText}>3PONTOS</Text>
            </View>

            <View style={styles.full}>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            <Text>TEXTO</Text>
            </View>


     
     </View>
    );
  }
  