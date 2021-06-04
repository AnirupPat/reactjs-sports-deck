import { Fragment } from 'react';
import './App.css';
import AddSport from './components/addSports/AddSport';
import SportsLog from './components/sportsLog/SportsLog';

function App() {
  return (
    <Fragment>
      <AddSport />
      <SportsLog />
    </Fragment>
  );
}

export default App;
