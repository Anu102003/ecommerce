import { Router } from './Router/Router';
import './App.scss';
import { store,persist } from './pages/Redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}> 
    <PersistGate loading={null} persistor={persist} >
      <Router />
    </PersistGate>
    </Provider>
  );
}

export default App;
