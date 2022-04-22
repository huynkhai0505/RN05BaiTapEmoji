import { SafeAreaView, Text, View, TouchableOpacity, Image  } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/AppStyles'

const emojiImage = [
  {
    image: require('./asset/images/angry.png'),
  },
  {
    image: require('./asset/images/care.png'),
  },
  {
    image: require('./asset/images/haha.png'),
  },
  {
    image: require('./asset/images/like.png'),
  },
  {
    image: require('./asset/images/love.png'),
  },
  {
    image: require('./asset/images/sad.png'),
  },
]

export default class App extends Component {

  state = {
    emojiSelected: null,
  }

  onPressIcon = (icon) => {
    this.setState({emojiSelected: icon})
  }

  renderBigIcon = () => {
    return (
      <View>
        <Image source={this.state.emojiSelected}/>
      </View>
    )
  }

  renderSmallIcon = () => {
    return (
      <View style={styles.container_choice}>
          {
            emojiImage.map((data, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => this.onPressIcon(data.image)}
              >
                <View>
                  <Image style={styles.container_choice__image} source={data.image}/>
                </View>
              </TouchableOpacity>
            ))
          }
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <Text style={styles.text}> Bạn đang cảm thấy như thế nào</Text>
        {this.renderBigIcon()}
        {this.renderSmallIcon()}
      </SafeAreaView>
    )
  }
}
