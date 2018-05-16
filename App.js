import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SecondPage from './src/SecondPage';
import SchoolList from './src/SchoolList';
import reducers from './src/reducers';
import StepList from './src/StepList';

class App extends Component {


  render() {
      return (
        <Provider store={createStore(reducers)}>
          <Router>
            <Scene key="root">
                <Scene
                  key="SchoolList"
                  component={SchoolList}
                  title="School List"
                />

                <Scene
                  key="SecondPage"
                  component={SecondPage}
                  title="SecondPage"
                  hideNavBar
                />

                <Scene
                  key="Sita"
                  component={StepList}
                  title="Sitelist"
                  initial
                  hideNavBar
                />
                </Scene>
          </Router>
        </Provider>
      );
    }
  }

export default App;
