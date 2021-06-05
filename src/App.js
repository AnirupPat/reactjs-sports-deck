import { Fragment, useState, useMemo } from 'react';
import './App.css';
import AddSport from './components/addSports/AddSport';
import SportsLog from './components/sportsLog/SportsLog';

function App() {
  const sportsArray = useMemo(() => {
    return ["Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis"];
    // "Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis","Cricket", "Badminton", "Tennis"
    }, []);
  const [newSport, setNewSport] = useState(sportsArray);
  
  const addSportHandler = async(sport) => {
    const request = await fetch('https://react-https-344f0-default-rtdb.firebaseio.com/sports.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sport
      })
    });

    const data = request.json();
    console.log(data);
    setNewSport([...newSport, [sport]]);
  }
  return (
    <Fragment>
      <AddSport addSport={addSportHandler} />
      <SportsLog items={newSport} />
    </Fragment>
  );
}

export default App;
