import React,{Component} from 'react';
import Routers from './components/Router';
import { Provider } from 'react-redux';
import store from './store';
// import MyCases from '../../src/components/myCases';
// import { login } from "./actions/authActions";

class App extends Component {
  componentDidMount(){
    //store.dispatch(login());
  }
  render() {
    debugger;
      return (
        <Provider store={store}>
        <>
          <Routers/>
        </>
        </Provider>
      );
  }
}

export default App;