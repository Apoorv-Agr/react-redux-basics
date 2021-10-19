import { Provider } from 'react-redux'
import './App.css';
import CakeComponent from './components/CakeComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
