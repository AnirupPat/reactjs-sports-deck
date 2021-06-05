import { Fragment, useState, useMemo } from 'react';
import './App.css';
import AddSport from './components/addSports/AddSport';
import SportsLog from './components/sportsLog/SportsLog';

function App() {
  const sportsArray = useMemo(() => {
    return ["Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis"];
    }, []);
  const [newSport, setNewSport] = useState(sportsArray);
  
  const addSportHandler = sport => {
    setNewSport([...sportsArray, {sport}]);
  }
  return (
    <Fragment>
      <AddSport addSport={addSportHandler} />
      <SportsLog items={newSport} />
    </Fragment>
  );
}

export default App;
