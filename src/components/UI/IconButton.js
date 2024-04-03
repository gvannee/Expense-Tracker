import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function IconButton({icon, size, color, onPress}) {

    return(
        <Pressable onPress={onPress}>
            <View>
                <MaterialCommunityIcons name={icon} size={size} color={color}
                style={{marginRight: 15}}/>
            </View>
        </Pressable>
    )
}

