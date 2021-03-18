import React,{Component} from 'react';
import Routers from './components/Router';
import Login from './components/Login'; 

class App extends Component {
  render() {
      return (
        <>
        {/*<Login />*/}
        <Routers/>
        </>
      );
  }
}

export default App;