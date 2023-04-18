import { Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTOCart } from '../redux/action'
const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const handleCart = (item) => {
        dispatch(addTOCart(item))
    }
    return (
        <View>
            <Image style={{ height: 100, width: 100, marginTop: 20, marginBottom: 20 }} source={{ uri: item.image }} />
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <View style={{ marginTop: 20 }}>
                <Button title='Add item' onPress={() => handleCart(item)} />
            </View>
        </View>
    )
}
export default Product;