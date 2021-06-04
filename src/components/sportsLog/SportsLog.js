import classes from "./SportsLog.module.css";
import Card from "../UI/Card/Card";

const SportsLog = (props) => {
    const sportsArray = [
        "Cricket", "Badminton", "Tennis"
    ];
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <ul>{sportsArray.map(item => {return (<li>{item}</li>)
            
        })}</ul>
      </Card>
    </div>
  );
};

export default SportsLog;
