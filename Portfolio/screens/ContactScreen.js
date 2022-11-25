import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <>
            <Card style={{ height: "100%" }}>
                <Card.Title style={{ backgroundColor: 'rgb(117, 117, 117)', color: 'white' }}>
                    Contact Me:
                </Card.Title>
                <Card.Divider />
                <View>
                    <Text>Instagram: duncan.payne.art</Text>
                    <Text>Email: Duncan.C.Payne@gmail.com</Text>
                    <Text>Phone: 1-405-308-9609</Text>
                    <Text>For inquiries about pricing, piece availability, exhibitions, commissions, or prints, send me an email, and I will get back to you as soon as possible. Thank you!</Text>
                </View>
            </Card>
        </>
    )
};

export default ContactScreen;