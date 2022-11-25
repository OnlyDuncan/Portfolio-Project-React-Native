import { ImageBackground, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import theBlackEgg from '../assets/images/The-Black-Egg.jpeg';

const EntryScreen = () => {
    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <ImageBackground source={theBlackEgg} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 4 }} />
                <View style={{ flex: 2 }}>
                    <Card style={{ height: "100%" }}>
                        <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)', color: 'white' }}>
                            Recently Produced Work:
                        </Card.Title>
                        <Card.Divider />
                        <View>
                            <Text>Title: The Black Egg</Text>
                            <Text>Medium: Mixed Media, Ashes on Watercolor Paper</Text>
                            <Text>Size: 22 inches x 16 inches</Text>
                            <Text>Year: 2022</Text>
                        </View>
                    </Card>
                </View>
            </ImageBackground>
        </View>
    )
};

export default EntryScreen;