import React from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native'; 

const Home = ({navigation}) => {
    const navigationToRes = () => {
        navigation.navigate('Reservations')
    }


    return (
        <View style={styles.container}> 
            <Text>This will be the search page</Text>
            <Button title="Link to Reservations" onPress={navigationToRes}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home;
