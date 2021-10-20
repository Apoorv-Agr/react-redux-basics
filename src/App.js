import { Provider } from 'react-redux'
import './App.css';
import CakeComponent from './components/CakeComponent';
import store from './redux/store';
import CakeHooksComponent from './components/CakeHooksComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeComponent /> */}
        <CakeHooksComponent />
      </div>
    </Provider>
  );
}

export default App;
