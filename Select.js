import React, { Component } from 'react';
import { View, Dimensions, AsyncStorage, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { strings } from './locales/strings';


class Select extends Component {

  state = {
    isLoadingLocale: true
  };

  componentDidMount() {
    this.getLocale();
  }


  async getLocale() {
    return await AsyncStorage.getItem('locale').then((value) => {
      strings.setLanguage(value);
      this.setState({
        isLoading: false
      });
    });
}


  render() {
    console.log('select bhitra', this.props);
    const { height, width } = Dimensions.get('window');
    return (
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <View style={{ height: 30, position: 'absolute', left: -5, right: -5, top: (height -  56) / 2 - 15, backgroundColor: '#FFF', zIndex: 10, transform: [{ rotate: '4deg' }] }} />
        <TouchableOpacity onPress={() => Actions.Address()} activeOpacity={0.6}>
                    <View style={{ position: 'relative', height: (height -  56) / 2, width }}>
                          <View style={{ position: 'absolute', zIndex: 9, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#00A2E8', opacity: 0.7 }} />
                           <Image style={{ height: height / 2, width }} source={require('./app_images/schools_background.jpg')} blurRadius={5} />
                           <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', textAlign: 'center' }}>{strings.view_schools_title}</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{strings.view_schools_subtitle}</Text>
                           </View>

                    </View>
                    </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      Actions.Select2();
                    }}
                   activeOpacity={0.6}
                  >
        <View style={{ position: 'relative', height: (height -  56) / 2, width }}>
              <View style={{ position: 'absolute', zIndex: 9, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#22B14C', opacity: 0.7 }} />
              <Image style={{ height: (height -  56) / 2, width }} source={require('./app_images/guidelines_background.jpg')} blurRadius={5} />
              <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 10, alignItems: 'center', justifyContent: 'center' }}>
               <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', textAlign: 'center' }}>{strings.view_guidelines_title}</Text>
               <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{strings.view_guidelines_subtitle}</Text>
              </View>

        </View>
        </TouchableOpacity>
      </View>

    );
  }
}

export default Select;
