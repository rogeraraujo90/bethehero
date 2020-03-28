import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    incident: {
        padding: 24,
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 8,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d',
        marginTop: 28,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 8
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 30,
        color: "#13131a"
    },

    heroDescription: {
        marginTop: 16,
        fontSize: 15,
        color: "#737380"
    },

    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    action: {
        backgroundColor: "#E02041",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    actionText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15
    }
});