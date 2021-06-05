import { Fragment, useState, useEffect } from "react";
import "./App.css";
import AddSport from "./components/addSports/AddSport";
import SportsLog from "./components/sportsLog/SportsLog";
import useHttp from "./hooks/use-http";

function App() {
  const [newSport, setNewSport] = useState([]);

  const fetchSportsDetails = async () => {
    const request = await fetch(
      "https://react-https-344f0-default-rtdb.firebaseio.com/sports.json"
    );
    if (request.ok) {
      const data = await request.json();
      let sportsArray = [];
      for (const key in data) {
        sportsArray.push(data[key].sport);
      }
      setNewSport(sportsArray);
    }
  };

  useEffect(() => {
    fetchSportsDetails();
  }, []);

  const onPostSuccess = (sport) => {
    setNewSport([...newSport, sport.sport]);
  }

  const { sendRequest: sendRequestHandler } = useHttp();

  const addSportHandler = async (sport) => {
    sendRequestHandler({
      url: "https://react-https-344f0-default-rtdb.firebaseio.com/sports.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {sport},
    }, onPostSuccess);
  };
  return (
    <Fragment>
      <AddSport addSport={addSportHandler} />
      <SportsLog items={newSport} />
    </Fragment>
  );
}

export default App;
