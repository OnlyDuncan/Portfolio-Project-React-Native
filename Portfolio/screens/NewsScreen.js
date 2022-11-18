import { Container, Text, View, } from 'react-native';
import { Card } from 'react-native-elements';

const NewsScreen = () => {
    <View>
        <Card style={{ height: "100%" }}>
            <CardTitle card-header border border-dark style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                <Text text-light>Recently Produced Work:</Text>
            </CardTitle>
            <CardBody card-body border border-dark style={{ backgroundColor: 'rgb(244, 242, 242)' }}>
                <Text>Title: "The Black Egg"</Text>
                <Text>Medium: Mixed Media, Ashes on Watercolor Paper</Text>
                <Text>Size: 22 inches x 16 inches</Text>
                <Text>Year: 2022</Text>
            </CardBody>
        </Card>
    </View>
};

export default NewsScreen;