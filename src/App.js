import { Provider } from 'react-redux'
import './App.css';
import CakeComponent from './components/CakeComponent';
import store from './redux/store';
import CakeHooksComponent from './components/CakeHooksComponent';
import IceCreamHooksComp from './components/IceCreamHooksComp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <CakeHooksComponent />
        <IceCreamHooksComp />
      </div>
    </Provider>
  );
}

export default App;
