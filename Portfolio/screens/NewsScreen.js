import { Text, View, } from 'react-native';
import { Card } from 'react-native-elements';

const NewsScreen = () => {
    return (
        <>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                    Recently Produced Work:
                </Card.Title>
                <Card.Divider />
                <View style={{ backgroundColor: 'rgb(244, 242, 242)' }}>
                    <Text>Title: "The Black Egg"</Text>
                    <Text>Medium: Mixed Media, Ashes on Watercolor Paper</Text>
                    <Text>Size: 22 inches x 16 inches</Text>
                    <Text>Year: 2022</Text>
                </View>
            </Card>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                    Current Shows and Exhibitions:
                </Card.Title>
                <Card.Divider />
                <View style={{ backgroundColor: 'rgb(244, 242, 242' }}>
                    <Text>Ruminations Solo Show</Text>
                    <Text>Studio Ink, 220 E Main St, Norman, Ok, 73069</Text>
                    <Text>November 11th - December 5th 2022</Text>
                </View>
            </Card>
        </>
    )
};

export default NewsScreen;