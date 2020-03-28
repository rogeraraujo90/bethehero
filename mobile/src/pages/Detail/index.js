import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { composeAsync } from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const formattedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value);
    const message = `Olá ${incident.name}, gostaria de ajudar no caso ${incident.title} com o valor de ${formattedValue}`;

    function goToIncidents() {
        navigation.navigate('Incidents');
    }

    function sendEmail() {
        composeAsync({
            subject: `Heroi do caso "${incident.title}"`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={goToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{formattedValue}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}