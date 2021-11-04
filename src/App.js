import { Provider } from 'react-redux'
import './App.css';
import CakeComponent from './components/CakeComponent';
import store from './redux/store';
import CakeHooksComponent from './components/CakeHooksComponent';
import IceCreamHooksComp from './components/IceCreamHooksComp';
import NewDynamicCakeComponent from './components/NewDynamicCakeComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <CakeHooksComponent />
        <NewDynamicCakeComponent />
        <IceCreamHooksComp />
      </div>
    </Provider>
  );
}

export default App;
