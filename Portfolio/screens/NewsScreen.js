import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const NewsScreen = () => {
    return (
        <ScrollView>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)', color: 'white' }}>
                    Current Shows and Exhibitions:
                </Card.Title>
                <Card.Divider />
                <View>
                    <Text>Ruminations Solo Show</Text>
                    <Text>Studio Ink, 220 E Main St, Norman, Ok, 73069</Text>
                    <Text>November 11th - December 5th 2022</Text>
                </View>
            </Card>
        </ScrollView>
    )
};

export default NewsScreen;