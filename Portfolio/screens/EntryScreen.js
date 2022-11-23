import { ImageBackground, Text, View } from 'react-native';
import theBlackEgg from '../assets/images/The-Black-Egg.jpeg';

const EntryScreen = () => {
    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <ImageBackground source={theBlackEgg} style={{ width: '100%', height: '100%' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                    This is the entry screen!
                </Text>
            </ImageBackground>
        </View>
    )
};

export default EntryScreen;