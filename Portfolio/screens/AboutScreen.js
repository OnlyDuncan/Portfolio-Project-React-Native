import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

const AboutScreen = () => {
    return (
        <ScrollView>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                    Bio:
                </Card.Title>
                <Card.Divider />
                <View style={{ backgroundColor: 'rgb(244, 242, 242)' }}>
                    <Text>Duncan Payne is a multi-media artist currently living in Oklahoma City. He graduated with a BFA in Sculpture from the University of Science and Arts of Oklahoma in 2020. His work primarily explores the human condition and conciousness, and incorporates aspects of philosophy, mysticism, psychology, and identity. In the future, he plans to take a few years to pursue a career with his art, and eventually go to grad school for contemporary art.</Text>
                </View>
            </Card>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                    CV:
                </Card.Title>
                <Card.Divider />
                <View style={{ backgroundColor: 'rgb(244, 242, 242)' }}>
                    <Text>2022</Text>
                    <Text>Ruminations Solo Show, Studio Ink, Norman, OK</Text>
                    <Text>Juried Show, Art Hall OKC, Oklahoma City, OK</Text>
                    <Text>2021</Text>
                    <Text>Four. Seven. Three. Artist of the Month Show, Four. Seven. Three., Tulsa, OK</Text>
                    <Text>ONE: Avant-Garde, MAINSITE, Norman, OK</Text>
                    <Text>Momentum, MAINSITE, Norman, OK and Living Arts, Tulsa, OK</Text>
                    <Text>2020</Text>
                    <Text>Postcard Perspectives, Artspace Untitled, Oklahoma City, OK</Text>
                    <Text>Dopamine, Studio Ink, Norman, OK</Text>
                </View>
            </Card>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)' }}>
                    Artist Statement:
                </Card.Title>
                <Card.Divider />
                <View style={{ backgroundColor: 'rgb(244, 242, 242)' }}>
                    <Text>Ruminations. That is the best way I can describe this most recent collection of images. As someone who has struggled with anxiety, depression, ADHD, and OCD their whole life, all of which have been exacerbated by the pandemic, the creation of these pieces served as both a from of painful confrontation, as well as joyful escape. Some are a reflection of those struggles, while others exist as fragmented meditations on existence, conciousness, loss, inevitability, and the passing of time. Ultimately, I see these pieces as a deeply personal ode to both the pain and the joy of the human experience, as well as a reminder that despite everything, there is a future just over the horizon, and no matter how ephemeral it is, it's still worth reaching.</Text>
                </View>
            </Card>
        </ ScrollView>
    )
};

export default AboutScreen;