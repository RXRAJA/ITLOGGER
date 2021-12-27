import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Addbtn from './components/layout/Addbtn'
import AddLogModel from './components/logs/AddLogModel';
import EditLogModel from './components/logs/EditLogModel';
import AddTechModel from './components/techs/AddTechModal';
import TechListModel from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
    <>
      <SearchBar />
      <div className='container'>
        <Addbtn />
        <AddLogModel />
        <EditLogModel />
        <AddTechModel />
        <TechListModel />
        <Logs />
      </div>
    </>
    </Provider>
  );
};

export default App;
