import { FlatList, Image, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';

const PortfolioScreen = ({ navigation }) => {
    const traditionalPaintings = useSelector((state) => state.traditionalPaintings)

    const renderTraditionalPainting = ({ item: traditionalPainting }) => {
        return (

            <Tile
                height={600}
                imageSrc={traditionalPainting.image}
                onPress={() => navigation.navigate('Art', { traditionalPainting })}
            />

        )
    }
    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Text>
                Traditional Paintings
            </Text>
            <FlatList
                data={traditionalPaintings.traditionalPaintingsArray}
                renderItem={renderTraditionalPainting}
                keyExtractor={(item) => item.id.toString()}
            />
            <Text>
                Sculptures and Installations
            </Text>
            <Text>
                Performance and Kinetic Art
            </Text>
            <Text>
                Other Art
            </Text>
        </View>
    )
};

export default PortfolioScreen;