import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    description: {
        marginTop: 3,
    },
    inner_container: {
        padding: 5,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
    },
    app_container: {
        flex: 1,
        backgroundColor: "#eceff1",
    },
    banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width * 2 / 3
    },
    srpr: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    }
})