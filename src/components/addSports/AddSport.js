import classes from "./AddSport.module.css";
import Card from "../UI/Card/Card";
import AddSportForm from "./AddSportForm";
const AddSport = (props) => {
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <AddSportForm />
      </Card>
    </div>
  );
};

export default AddSport;
