import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

class reducecount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Oranges: props.products[0].name,
      Apples: props.products[1].name,
      Bananas: props.products[2].name,
      Checked: '',
      OrVotes: 0,
      ApVotes: 0,
      BaVotes: 0,
    };
  }

  votes = () => {
    if (this.state.Checked === 'Oranges') {
      return <Text> Votes Oranges: {this.state.OrVotes} </Text>;
    } else if (this.state.Checked === 'Apples') {
      return <Text> Votes Apples: {this.state.ApVotes} </Text>;
    } else if (this.state.Checked === 'Bananas') {
      return <Text> Votes Bananas: {this.state.BaVotes} </Text>;
    } else {
      alert('Please touch the fruits that you want to vote :)');
    }
  };

  plus = () => {
    if (this.state.Checked === 'Oranges') {
      this.setState({
        OrVotes: this.state.OrVotes + 1,
      });
    } else if (this.state.Checked === 'Apples') {
      this.setState({
        ApVotes: this.state.ApVotes + 1,
      });
    } else if (this.state.Checked === 'Bananas') {
      this.setState({
        BaVotes: this.state.BaVotes + 1,
      });
    } else {
      alert('Please touch the fruits that you want to vote :)');
    }
  };

  minus = () => {
    if (this.state.Checked === 'Oranges') {
      this.setState({
        OrVotes: this.state.OrVotes - 1,
      });
    } else if (this.state.Checked === 'Apples') {
      this.setState({
        ApVotes: this.state.ApVotes - 1,
      });
    } else if (this.state.Checked === 'Bananas') {
      this.setState({
        BaVotes: this.state.BaVotes - 1,
      });
    } else {
      alert('Please touch the fruits that you want to vote :)');
    }
  };

  render() {
    // const { Checked } = this.state;
    return (
      <View style={styles.container}>
      <Text style={styles.top}> Please touch the fruits that you want to vote :) </Text>
      
        <TouchableOpacity onPress={() => this.setState({ Checked: 'Apples' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.Apples} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({ Checked: 'Oranges' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.Oranges} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({ Checked: 'Bananas' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.Bananas} </Text>
          </View>
        </TouchableOpacity>

        <Button title="+" onPress={() => this.plus()} />
        <Button title="-" onPress={() => this.minus()} />
        <Text>{this.votes()} </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  top: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: 100,
    height: 50,
    alignContent: 'center',
    elevation: 5,
    backgroundColor: 'black',
    padding: 20,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 10,
  },
});

export default reducecount;
