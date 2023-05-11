import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export default Button = ({children, color , pressCb}) => {
    return <TouchableOpacity 
    onPress={pressCb}
    style={styles.buttonView}>
        <Text style={[styles.buttonText, {color: color}]}>
            {children}
        </Text>
    </TouchableOpacity>
}