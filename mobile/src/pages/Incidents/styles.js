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
        justifyContent: "space-between",
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#13131a",
        marginBottom: 16,
        marginTop: 48
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    },

    incidentsList: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 8
    },

    incidentProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 28,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    detailsButtonText: {
        fontSize: 15,
        color: "#E02041",
        fontWeight: "bold"
    },
});