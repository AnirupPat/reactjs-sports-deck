import classes from "./SportsLog.module.css";
import Card from "../UI/Card/Card";
import SportItem from "./SportItem";

const SportsLog = (props) => {
  const sportControl = (
      <div className={classes.sportItem}>{props.items.map((item) => {
        return <SportItem  item={item} />;
      })}</div>
  );

  return (
    <div className={classes.div}>
      <Card className={classes.card}>{sportControl}</Card>
    </div>
  );
};

export default SportsLog;
