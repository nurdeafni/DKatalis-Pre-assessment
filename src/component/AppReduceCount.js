import React from 'react'
import{
  Text,
  Button,
  View,
  TouchableOption
} from 'react-native'
import reducecount from './reducecount'

export default class AppReduceCount extends React.Component {
  render() {
    return (
      <View>
        <GroceryApp products={[
            { name: "Oranges", votes: 0 }, // props.products[0].name props.products[0].votes
            { name: "Apples", votes: 0 },
            { name: "Bananas", votes: 0 }
          ]} 
        />
      </View>
    );
  }
}